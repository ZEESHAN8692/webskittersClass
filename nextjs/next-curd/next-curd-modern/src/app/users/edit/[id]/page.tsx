"use client";
import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchUsers, updateUser, type User } from "@/redux/userSlice";
import UserForm from "@/components/UserForm";

export default function EditUserPage() {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const users = useAppSelector((s) => s.users.data);
  const [fallbackUser, setFallbackUser] = useState<Partial<User> | null>(null);

  const current = useMemo(
    () => users.find((u) => u.id === userId) || fallbackUser || undefined,
    [users, userId, fallbackUser]
  );

  useEffect(() => {
    if (!users.length) dispatch(fetchUsers());
    if (!users.length) {
      fetch(`/api/users/${userId}`).then(r => r.json()).then(setFallbackUser as any);
    }
  }, [dispatch, users.length, userId]);

  if (!current) return null;

  return (
    <UserForm
      initial={current}
      submitText="Update User"
      onSubmit={async (values) => {
        await dispatch(updateUser({ id: userId, user: values }));
        router.push("/users");
      }}
    />
  );
}
