import { PayloadAction } from "@reduxjs/toolkit";
import { BuildingAreas } from "../../interfaces/project.interface";
import { createAppSlice } from "../store.utils";
import ProjectService from "../../services/project.service";
import { AxiosResponse } from "axios";
interface DefaultConfigState {
  defaultAreas: BuildingAreas[];
  isLoading: boolean;
}
const initialState: DefaultConfigState = {
  isLoading: false,
  defaultAreas: [],
};
const pendingStateHandling = {
  pending: (state: DefaultConfigState) => {
    state.isLoading = true;
  },
  rejected: (state: DefaultConfigState) => {
    state.isLoading = false;
  },
};
const defaultConfigSlice = createAppSlice({
  name: "defaultConfig",
  initialState,
  reducers: (create) => ({
    getDefaultConfig: create.asyncThunk(
      async () => {
        const result: [
          AxiosResponse<{ data: { id: number; area: string }[] }>,
          AxiosResponse<{
            data: { id: number; space: string; buildingAreaId: number }[];
          }>,
          AxiosResponse<{
            data: { id: number; name: string; areaSpaceId: number }[];
          }>,
          AxiosResponse<{
            data: { id: number; room: string; floorId: number }[];
          }>
        ] = await Promise.all([
          ProjectService.getBuildingAreas(),
          ProjectService.getAreaSpaces(),
          ProjectService.getFloors(),
          ProjectService.getFloorRooms(),
        ]);

        const areas: BuildingAreas[] = [];
        result[0]?.data?.data.forEach((area) =>
          areas.push({
            id: area?.id,
            name: area?.area,
            areas: result[1].data?.data
              ?.filter((areaSpace) => areaSpace?.buildingAreaId === area?.id)
              .map((areaSpace) => ({
                id: areaSpace?.id,
                name: areaSpace?.space,
                isSelected: false,
                internalName: areaSpace.space,
                floors: result[2].data.data
                  .filter((floor) => floor?.areaSpaceId === areaSpace?.id)
                  .map((floor) => ({
                    id: floor?.id,
                    name: floor?.name,
                    isSelected: false,
                    floorRooms: result[3].data.data
                      .filter((room) => room?.floorId === floor?.id)
                      .map((room) => ({
                        id: room?.id,
                        name: room?.room,
                        functions: [],
                      })),
                  })),
              })),
          })
        );

        return areas;
      },
      {
        ...pendingStateHandling,
        fulfilled: (
          state: DefaultConfigState,
          action: PayloadAction<BuildingAreas[]>
        ) => {
          state.isLoading = false;
          state.defaultAreas = action.payload;
        },
      }
    ),
  }),
});
export const { getDefaultConfig } = defaultConfigSlice.actions;
export default defaultConfigSlice.reducer;
