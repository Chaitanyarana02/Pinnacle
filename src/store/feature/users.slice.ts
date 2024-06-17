import { PayloadAction } from "@reduxjs/toolkit";
import { UserList } from "../../interfaces/users.interface";
import { createAppSlice } from "../store.utils";
import { AdminService } from "../../services/admin.service";
import { AxiosResponse } from "axios";
interface UsersStateInterface {
    isLoading: boolean;
    users: UserList[];
}
const initialState: UsersStateInterface = {
    isLoading: false,
    users: [],
}
const pendingStateHandling = {
    pending: (state: UsersStateInterface) => {
        state.isLoading = true;
    },
    rejected: (state: UsersStateInterface) => {
        state.isLoading = false;
    },
}
const usersSlice = createAppSlice({
    name: 'usersList',
    initialState,
    reducers : (create) => ({
        fetchAllUsers: create.asyncThunk(
            async () => {
                const result: AxiosResponse<UserList[]> = await AdminService.getUsersList();
                console.log(result);
                
                return result.data 
            },
            {
                ...pendingStateHandling,
                fulfilled: (state, action: PayloadAction<UserList[]>) => {
                    state.isLoading = false;
                    state.users = action.payload;
                }

            }
        ),
    })
});

export const {fetchAllUsers} = usersSlice.actions
export default usersSlice.reducer;
