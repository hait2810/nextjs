import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signup, getUser, getUsers, signin, DeleteUser, UpdateUser } from '../../../api/user'
import { Iuser } from "../../../models/user";

interface IProductState {
    user: Iuser | {},
    users: Iuser[]
}

const initialState: IProductState = {
    user: {},
    users: []
}


export const adduser = createAsyncThunk("user/sigup", async (user: any) => {
    const res = await signup(user)
    return res;
})
export const lognin = createAsyncThunk("user/signin", async (user: any) => {
    const res = await signin(user)
    return res;
})
export const listUsers = createAsyncThunk("user/lists", async () => {
    const res = await getUsers()
    return res;
})
export const listUser = createAsyncThunk("user/list", async (id: any) => {
    const res = await getUser(id)
    return res;
})
export const Deleteuser = createAsyncThunk("user/remove", async (id: any) => {
    const res = await DeleteUser(id);
    return res;
})
export const Edituser = createAsyncThunk("user/edit", async (id: any) => {
    const res = await UpdateUser(id);
    return res;
})
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(adduser.fulfilled, (state, { payload }) => {
            state.users.push(payload as any)
        }),
            build.addCase(listUsers.fulfilled, (state, { payload }) => {
                state.users = payload as any
            }),
            build.addCase(listUser.fulfilled, (state, { payload }) => {
                state.user = payload 
            }),
            build.addCase(lognin.fulfilled, (state, { payload }) => {
                state.user = payload
            }),
            build.addCase(Edituser.fulfilled, (state, { payload }) => {
                state.user = state.user = state.users.map((item) => (item._id === payload?.id ? payload : item!)) as Iuser[]
            })
        // build.addCase(Deleteuser.fulfilled, (state, { payload }) => {
        //     state.user.filter((item) => item._id !== payload.id)
        // })

    }
})
export default userSlice.reducer