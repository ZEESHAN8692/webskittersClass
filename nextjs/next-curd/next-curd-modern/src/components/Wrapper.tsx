"use client";
import { Container, CssBaseline } from "@mui/material";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />
      <Container sx={{ py: 4 }}>{children}</Container>
    </>
  );
}
