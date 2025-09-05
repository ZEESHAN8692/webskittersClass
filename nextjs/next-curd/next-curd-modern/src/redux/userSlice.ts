import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  website?: string;
}

interface UsersState {
  data: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = { data: [], loading: false, error: null };

export const fetchUsers = createAsyncThunk<User[]>("users/fetchUsers", async () => {
  const res = await fetch("/api/users", { cache: "no-store" });
  return res.json();
});

export const addUser = createAsyncThunk<User, Omit<User, "id">>("users/addUser", async (user) => {
  const res = await fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return res.json();
});

export const updateUser = createAsyncThunk<User, { id: number; user: Partial<User> }>(
  "users/updateUser",
  async ({ id, user }) => {
    const res = await fetch(`/api/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return res.json();
  }
);

export const deleteUser = createAsyncThunk<number, number>("users/deleteUser", async (id) => {
  await fetch(`/api/users/${id}`, { method: "DELETE" });
  return id;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load users";
      })
      .addCase(addUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.data.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<User>) => {
        const i = state.data.findIndex((u) => u.id === action.payload.id);
        if (i >= 0) state.data[i] = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action: PayloadAction<number>) => {
        state.data = state.data.filter((u) => u.id !== action.payload);
      });
  },
});

export default usersSlice.reducer;
