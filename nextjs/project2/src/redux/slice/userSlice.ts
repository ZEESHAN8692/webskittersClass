// import { user_end } from '@/api/api_url';
// import axiosInstance from '@/api/axiosInstance';
// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// export interface User {
//   id: number;
//   name: string;
//   email: string;
//   username?: string;
// }

// interface UserState {
//   users: User[];
//   currentUser: User | null;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: UserState = {
//   users: [],
//   currentUser: null,
//   loading: false,
//   error: null,
// };

// export const fetchUsers = createAsyncThunk(
//   'user/fetchUsers',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.get(user_end)
//       return response;
//     } catch (error) {
//       return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
//     }
//   }
// );

// export const fetchUserById = createAsyncThunk(
//   'user/fetchUserById',
//   async (userId: number, { rejectWithValue }) => {
//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch user');
//       }
//       const user = await response.json();
//       return user;
//     } catch (error) {
//       return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
//     }
//   }
// );

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setCurrentUser: (state, action: PayloadAction<User>) => {
//       state.currentUser = action.payload;
//     },
//     clearCurrentUser: (state) => {
//       state.currentUser = null;
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.loading = false;
//         state.users = action.payload;
//       })
//       .addCase(fetchUsers.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       })
//       .addCase(fetchUserById.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUserById.fulfilled, (state, action) => {
//         state.loading = false;
//         state.currentUser = action.payload;
//       })
//       .addCase(fetchUserById.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export const { setCurrentUser, clearCurrentUser, clearError } = userSlice.actions;
// export default userSlice.reducer;
