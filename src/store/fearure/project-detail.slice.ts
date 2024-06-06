import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { createAppSlice } from "../store.utils";
import ProjectService from "../../services/project.service";
import { BuildingAreas, ProjectAreaFloors, ProjectAreas, ProjectDetail } from "../../interfaces/project.interface";
interface ProjectDetailState {
    projectDetail: ProjectDetail,
    isLoading: boolean;
}
const initialState: ProjectDetailState = {
    isLoading: false,
    projectDetail: {} as ProjectDetail
}
const pendingStateHandling = {
    pending: (state: ProjectDetailState) => {
        state.isLoading = true;
    },
    rejected: (state: ProjectDetailState) => {
        state.isLoading = false;
    },
}
const projectDetailSlice = createAppSlice({
    name: 'projectDetail',
    initialState,
    reducers: (create) => ({
        fetchProjectDetail: create.asyncThunk(
            async (projectId: string) => {
                const response: AxiosResponse<ProjectDetail> = await ProjectService.getProjectDetail(projectId);
                return response.data as ProjectDetail;
            },
            {
                ...pendingStateHandling,
                fulfilled: (state: ProjectDetailState, action: PayloadAction<ProjectDetail>) => {
                    state.isLoading = false;
                    state.projectDetail = action.payload as ProjectDetail;
                },
            }
        ),
        updateProjectData: create.reducer<BuildingAreas[]>((state, action) => {
            state.projectDetail.buildingAreas = action.payload
        }),
        updatebuildingAreaData: create.reducer<{buildingAreaIndex: number, index: number  , value: ProjectAreas}>((state , action) => {
            const {buildingAreaIndex, index , value} = action.payload;
            if(state.projectDetail.buildingAreas.length) {
                state.projectDetail.buildingAreas[buildingAreaIndex].areas[index] = value
            }
           
        }),
    

    })
});
export const { fetchProjectDetail , updateProjectData, updatebuildingAreaData} = projectDetailSlice.actions;
export default projectDetailSlice.reducer;