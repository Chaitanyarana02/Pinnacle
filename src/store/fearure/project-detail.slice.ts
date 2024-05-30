import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { createAppSlice } from "../store.utils";
import ProjectService from "../../services/project.service";
import { ProjectDetail } from "../../interfaces/project.interface";
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

    })
});
export const { fetchProjectDetail } = projectDetailSlice.actions;
export default projectDetailSlice.reducer;