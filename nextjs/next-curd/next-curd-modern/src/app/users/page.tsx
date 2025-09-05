"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchUsers, deleteUser } from "@/redux/userSlice";
import {
  Button, CircularProgress, Paper, Stack,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography
} from "@mui/material";

export default function UsersPage() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((s) => s.users);

  useEffect(() => { dispatch(fetchUsers()); }, [dispatch]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Stack
      spacing={2}
      sx={{
        backgroundColor: "purple",
        borderRadius: 1,
        p: 2,
        boxShadow: 1,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center"  >
        <Typography variant="h5" sx={{ fontWeight: "bold", color:"white" }}>Users</Typography>
        <Link href="/users/add"><Button variant="contained" sx={{ borderRadius: "10px", backgroundColor: "white", color: "black" }}>Add User</Button></Link>
      </Stack>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Phone</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Website</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((u) => (
              <TableRow key={u.id}>
                <TableCell>{u.name}</TableCell>
                <TableCell>{u.email}</TableCell>
                <TableCell>{u.phone}</TableCell>
                <TableCell>{u.website}</TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={1} justifyContent="flex-end">
                    <Link href={`/users/edit/${u.id}`}><Button variant="outlined" sx={{ borderRadius: "10px" }}>Edit</Button></Link>
                    <Button color="error" onClick={() => dispatch(deleteUser(u.id))} sx={{ borderRadius: "10px" }}>Delete</Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
