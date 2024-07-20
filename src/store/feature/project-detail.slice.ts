import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { createAppSlice } from "../store.utils";
import ProjectService from "../../services/project.service";
import {
  BuildingAreas,
  ProjectAreaFloors,
  ProjectAreas,
  ProjectDetail,
  ProjectFloorFunction,
  ProjectFloorRooms,
} from "../../interfaces/project.interface";
interface ProjectDetailState {
  projectDetail: ProjectDetail;
  isLoading: boolean;
}
const initialState: ProjectDetailState = {
  isLoading: false,
  projectDetail: {} as ProjectDetail,
};
const pendingStateHandling = {
  pending: (state: ProjectDetailState) => {
    state.isLoading = true;
  },
  rejected: (state: ProjectDetailState) => {
    state.isLoading = false;
  },
};
const projectDetailSlice = createAppSlice({
  name: "projectDetail",
  initialState,
  reducers: (create) => ({
    fetchProjectDetail: create.asyncThunk(
      async (projectId: string) => {
        const response: AxiosResponse<ProjectDetail> =
          await ProjectService.getProjectDetail(projectId);
        return response.data as ProjectDetail;
      },
      {
        ...pendingStateHandling,
        fulfilled: (
          state: ProjectDetailState,
          action: PayloadAction<ProjectDetail>
        ) => {
          state.isLoading = false;
          state.projectDetail = action.payload as ProjectDetail;
        },
      }
    ),
    updateProjectData: create.reducer<BuildingAreas[]>((state, action) => {
      state.projectDetail.buildingAreas = action.payload;
    }),
    addAreaToProject: create.reducer<{
      areaIndex: number;
      area: ProjectAreas;
    }>((state, action) => {
        if(state.projectDetail?.buildingAreas[action?.payload?.areaIndex]?.areas) {
            state.projectDetail.buildingAreas[action.payload.areaIndex].areas.push(
                action.payload.area);
        }
    }),
    addFloorToProject: create.reducer<{
        buildingAreaIndex: number;
        areaIndex: number;
        area: ProjectAreaFloors;
      }>((state, action) => {

        const {buildingAreaIndex, areaIndex, area } = action.payload;
        if(state?.projectDetail?.buildingAreas[buildingAreaIndex]?.areas[areaIndex]?.floors) {
            state.projectDetail.buildingAreas[buildingAreaIndex].areas[areaIndex].floors.push(area)

        }
    }),
    addRoomToForProject: create.reducer<{
      buildingAreaIndex: number;
      areaIndex: number;
      floorIndex: number;
      room: ProjectFloorRooms;
    }>(
      (state, action) => {
        const {buildingAreaIndex, areaIndex, floorIndex, room } = action.payload;
        if(state.projectDetail.buildingAreas[buildingAreaIndex]?.areas[areaIndex]?.floors[floorIndex]) {
            state.projectDetail.buildingAreas[buildingAreaIndex].areas[areaIndex].floors[floorIndex].floorRooms?.push(room)
        }
      }
    ),
    updateRoomSelection: create.reducer<{
      buildingAreaIndex: number;
      areaIndex: number;
      floorIndex: number;
      roomIndex: number;
      isSelected: boolean;
    }>(
        (state, action) => {
          const {buildingAreaIndex, areaIndex, floorIndex, roomIndex, isSelected } = action.payload;
          if(state.projectDetail.buildingAreas[buildingAreaIndex]?.areas[areaIndex]?.floors[floorIndex]?.floorRooms[roomIndex]) {
              state.projectDetail.buildingAreas[buildingAreaIndex].areas[areaIndex].floors[floorIndex].floorRooms[roomIndex].isSelected = isSelected;
          }
        }
      ),
    updateFloorSelection: create.reducer<{
      buildingAreaIndex: number;
      areaIndex: number;
      floorIndex: number;
      isSelected: boolean;
    }>( (state, action) => {
        const {buildingAreaIndex, areaIndex, floorIndex, isSelected} = action.payload;
        if(state?.projectDetail?.buildingAreas[buildingAreaIndex]?.areas[areaIndex]?.floors[floorIndex]) {
          state.projectDetail.buildingAreas[buildingAreaIndex].areas[areaIndex].floors[floorIndex].isSelected = isSelected;

      }
    }),
    updateBuildingAreaData: create.reducer<{
      buildingAreaIndex: number;
      index: number;
      value: ProjectAreas;
    }>((state, action) => {
      const { buildingAreaIndex, index, value } = action.payload;
      if (state.projectDetail.buildingAreas.length) {
        state.projectDetail.buildingAreas[buildingAreaIndex].areas[index] =
          value;
      }
    }),
    addFunctionToRoom: create.reducer<{
      buildingAreaIndex: number;
      areaIndex: number;
      floorIndex: number;
      roomIndex: number;
      value: ProjectFloorFunction;
    }>((state, action) => {
      const {buildingAreaIndex, areaIndex, floorIndex, roomIndex, value } = action.payload;
      if(state.projectDetail.buildingAreas[buildingAreaIndex]?.areas[areaIndex]?.floors[floorIndex]?.floorRooms[roomIndex]) {
          state.projectDetail.buildingAreas[buildingAreaIndex].areas[areaIndex].floors[floorIndex].floorRooms[roomIndex].functions.push(value);
      }
    }),
    addFunctionsToRoom: create.reducer<{
      buildingAreaIndex: number;
      areaIndex: number;
      floorIndex: number;
      roomIndex: number;
      values: ProjectFloorFunction[];
    }>((state, action) => {
      const {buildingAreaIndex, areaIndex, floorIndex, roomIndex, values } = action.payload;
      if(state.projectDetail.buildingAreas[buildingAreaIndex]?.areas[areaIndex]?.floors[floorIndex]?.floorRooms[roomIndex]) {
          state.projectDetail.buildingAreas[buildingAreaIndex].areas[areaIndex].floors[floorIndex].floorRooms[roomIndex].functions = [...values];
      }
    }),
    updateRoomFunction: create.reducer<{
      buildingAreaIndex: number;
      areaIndex: number;
      floorIndex: number;
      roomIndex: number;
      functionIndex: number;
      count: number;
    }>((state, action) => {
      const { buildingAreaIndex, areaIndex, floorIndex, roomIndex, functionIndex, count } = action.payload;
      if(state.projectDetail.buildingAreas[buildingAreaIndex]?.areas[areaIndex]?.floors[floorIndex]?.floorRooms[roomIndex]?.functions[functionIndex]) {
          state.projectDetail.buildingAreas[buildingAreaIndex].areas[areaIndex].floors[floorIndex].floorRooms[roomIndex].functions[functionIndex].count = count;
      }
    }),
    removeRoomFunction: create.reducer<{
      buildingAreaIndex: number;
      areaIndex: number;
      floorIndex: number;
      roomIndex: number;
      functionIndex: number;
    }>((state, action) => {
      const { buildingAreaIndex, areaIndex, floorIndex, roomIndex, functionIndex } = action.payload;
      if(state.projectDetail.buildingAreas[buildingAreaIndex]?.areas[areaIndex]?.floors[floorIndex]?.floorRooms[roomIndex]?.functions[functionIndex]) {
          state.projectDetail.buildingAreas[buildingAreaIndex].areas[areaIndex].floors[floorIndex].floorRooms[roomIndex].functions.splice(functionIndex, 1);
      }
    }),
    updateFunctionOptions: create.reducer<{
      buildingAreaIndex: number;
      areaIndex: number;
      floorIndex: number;
      roomIndex: number;
      functionIndex: number;
      key: string;
      value: string | boolean;
    }>((state, action) => {
      
      const { buildingAreaIndex, areaIndex, floorIndex, roomIndex, functionIndex , key, value} = action.payload;
      console.log(buildingAreaIndex, floorIndex, roomIndex , functionIndex, key, value);

      if(state.projectDetail.buildingAreas[buildingAreaIndex]?.areas[areaIndex]?.floors[floorIndex]?.floorRooms[roomIndex]?.functions[functionIndex]) {
          state.projectDetail.buildingAreas[buildingAreaIndex].areas[areaIndex].floors[floorIndex].floorRooms[roomIndex].functions[functionIndex].systemDetails[key] = value
      }
    }),
  }),
});
export const {
  fetchProjectDetail,
  updateProjectData,
  updateBuildingAreaData,
  addAreaToProject,
  addFloorToProject,
  updateFloorSelection,
  addRoomToForProject,
  updateRoomSelection,
  addFunctionToRoom,
  addFunctionsToRoom,
  updateRoomFunction,
  removeRoomFunction,
  updateFunctionOptions
} = projectDetailSlice.actions;
export default projectDetailSlice.reducer;
