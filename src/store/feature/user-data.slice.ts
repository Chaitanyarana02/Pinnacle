import { createAppSlice } from "../store.utils";
import { UserList } from "../../interfaces/users.interface";
interface UserDataState {
  userData: UserList;
}
const initialState: UserDataState = {
  userData: {} as UserList,
};

const userDataSlice = createAppSlice({
  name: "userData",
  initialState,
  reducers: (create) => ({
    setUserData : create.reducer<UserList>((state , action ) => {
      state.userData = action.payload;
    })
  }),
});
export const { setUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
