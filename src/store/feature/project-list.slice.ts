import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { createAppSlice } from "../store.utils";
import ProjectService from "../../services/project.service";
import { BuildingAreas, ProjectDetail } from "../../interfaces/project.interface";
import { projectColorScheme, projectResidentType, projectScope, ProjectStatus, projectType } from "../../enums/project.enum";
interface ProjectListState {
  projectList: ProjectDetail[];
  isLoading: boolean;
}
const initialState: ProjectListState = {
  isLoading: false,
  projectList: [],
};
const pendingStateHandling = {
  pending: (state: ProjectListState) => {
    state.isLoading = true;
  },
  rejected: (state: ProjectListState) => {
    state.isLoading = false;
  },
};
const projectListSlice = createAppSlice({
  name: "projectList",
  initialState,
  reducers: (create) => ({
    fetchProjectList: create.asyncThunk(
      async () => {
        const response: AxiosResponse<{
          data: {
            id: number;
            userId: number;
            name: string;
            address: string;
            type: projectType;
            residenceType: projectResidentType;
            scope: projectScope;
            colourScheme: projectColorScheme;
            requirementsMeta: Array<BuildingAreas>;
            creationStepsCompleted: string;
            deliveryStatus: ProjectStatus;
            createdAt: string;
            updatedAt: string;
            deliveryAddress: unknown
          }[];
        }> = await ProjectService.getProjectList();
        const data: ProjectDetail[] = response.data.data.map(d => {
            return {
              id: d.id,
              name: d.name,
              address: d.address,
              projectType: d.type,
              projectResidentType: d.residenceType,
              projectScope: d.scope,
              projectColorScheme: d.colourScheme,
              projectStatus: d.deliveryStatus,
              buildingAreas: d.requirementsMeta|| [],
              deliveryAddress: JSON.stringify(d.deliveryAddress)
            };
        })
        return data;
      },
      {
        ...pendingStateHandling,
        fulfilled: (
          state: ProjectListState,
          action: PayloadAction<ProjectDetail[]>
        ) => {
          state.isLoading = false;
          state.projectList = action.payload;
        },
      }
    ),
    createProjectApi: create.asyncThunk(
      async (project: ProjectDetail) => {
        const data: AxiosResponse<{data: {id: number}}> = await ProjectService.createProject({
          name: project.name,
          address: project.address,
          type: project.projectType,
          residenceType: project.projectResidentType,
          scope: project.projectScope,
          colourScheme: project.projectColorScheme,
          requirementsMeta: project.buildingAreas,
          deliveryStatus: ProjectStatus.pending,
          creationStepsCompleted: 1,
        });
        
        project.id = data.data.data.id;
          return project
      },
      {
        ...pendingStateHandling,
        fulfilled: (
          state: ProjectListState,
          action: PayloadAction<ProjectDetail>
        ) => {
          state.isLoading = false;
          state.projectList.push(action.payload);
        },
      }
    ),
    updateProjectDetails: create.asyncThunk(
      async (project: ProjectDetail) => {
        await ProjectService.updateProject(project.id as number,{
          name: project.name,
          address: project.address,
          type: project.projectType,
          residenceType: project.projectResidentType,
          scope: project.projectScope,
          colourScheme: project.projectColorScheme,
          requirementsMeta: project.buildingAreas,
          deliveryStatus: project.projectStatus || ProjectStatus.pending,
          creationStepsCompleted: 1,
          deliveryAddress: JSON.parse(project?.deliveryAddress || '')
      });
        return project;
      },
      {
        ...pendingStateHandling,
        fulfilled: (
          state,
          action: PayloadAction<ProjectDetail>
        ) => {
          state.isLoading = false;
          state.projectList = state.projectList.map(p => p.id == action.payload.id ? action.payload : p);
        },
      }
    ),
    deleteProjectApi: create.asyncThunk(
      async (id: number) => {
        await ProjectService.deleteProject(id);
        return id;
      },
      {
        ...pendingStateHandling,
        fulfilled: (
          state: ProjectListState,
          action: PayloadAction<number>
        ) => {
          state.isLoading = false;
          state.projectList = state.projectList.filter(pl=> pl.id !== action.payload)
        },
      }
    )
  }),
});
export const { fetchProjectList, deleteProjectApi, createProjectApi, updateProjectDetails } = projectListSlice.actions;
export default projectListSlice.reducer;
