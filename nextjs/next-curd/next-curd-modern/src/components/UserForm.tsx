"use client";
import { useState } from "react";
import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import type { User } from "@/redux/userSlice";

type Props = {
  initial?: Partial<User>;
  onSubmit: (values: { name: string; email: string; phone?: string; website?: string }) => void;
  submitText: string;
};

export default function UserForm({ initial, onSubmit, submitText }: Props) {
  const [values, setValues] = useState({
    name: initial?.name || "",
    email: initial?.email || "",
    phone: initial?.phone || "",
    website: initial?.website || "",
  });

  const handleChange = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, [k]: e.target.value });

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>{submitText}</Typography>
      <Stack spacing={2} component="form"
        onSubmit={(e) => { e.preventDefault(); onSubmit(values); }}>
        <TextField label="Name" value={values.name} onChange={handleChange("name")} required />
        <TextField label="Email" value={values.email} onChange={handleChange("email")} type="email" required />
        <TextField label="Phone" value={values.phone} onChange={handleChange("phone")} />
        <TextField label="Website" value={values.website} onChange={handleChange("website")} />
        <Box>
          <Button type="submit" variant="contained">{submitText}</Button>
        </Box>
      </Stack>
    </Paper>
  );
}
