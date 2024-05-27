import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { createAppSlice } from "../store.utils";
import ProjectService from "../../services/project.service";
import { ProjectBasicDetail } from "../../interfaces/project.interface";
interface ProjectListState {
    projectList: ProjectBasicDetail[],
    isLoading: boolean;
}
const initialState: ProjectListState = {
    isLoading: false,
    projectList: [],
}
const pendingStateHandling = {
    pending: (state: ProjectListState) => {
        state.isLoading = true;
    },
    rejected: (state: ProjectListState) => {
        state.isLoading = false;
    },
}
const projectListSlice = createAppSlice({
    name: 'projectList',
    initialState,
    reducers: (create) => ({
        fetchProjectList: create.asyncThunk(
            async () => {
                const response: AxiosResponse<ProjectBasicDetail[]> = await ProjectService.getProjectList();
                return response.data as ProjectBasicDetail[];
            },
            {
                ...pendingStateHandling,
                fulfilled: (state: ProjectListState, action: PayloadAction<ProjectBasicDetail[]>) => {
                    state.isLoading = false;
                    state.projectList = action.payload;
                },
            }
        ),

    })
});
export const { fetchProjectList } = projectListSlice.actions;
export default projectListSlice.reducer;