import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { createAppSlice } from "../store.utils";
import ProjectService from "../../services/project.service";
import { ProjectBasicDetail } from "../../interfaces/project.interface";
import { projectColorScheme, projectResidentType, projectScope, projectStatus, projectType } from "../../enums/project.enum";
interface ProjectListState {
  projectList: ProjectBasicDetail[];
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
            requirementsMeta: string;
            creationStepsCompleted: string;
            deliveryStatus: projectStatus;
            createdAt: string;
            updatedAt: string;
          }[];
        }> = await ProjectService.getProjectList();
        const data: ProjectBasicDetail[] = response.data.data.map(d => {
            return {
              id: d.id,
              name: d.name,
              address: d.address,
              projectType: d.type,
              projectResidentType: d.residenceType,
              projectScope: d.scope,
              projectColorScheme: d.colourScheme,
              projectStatus: d.deliveryStatus,
            };
        })
        return data;
      },
      {
        ...pendingStateHandling,
        fulfilled: (
          state: ProjectListState,
          action: PayloadAction<ProjectBasicDetail[]>
        ) => {
          state.isLoading = false;
          state.projectList = action.payload;
        },
      }
    ),
  }),
});
export const { fetchProjectList } = projectListSlice.actions;
export default projectListSlice.reducer;
