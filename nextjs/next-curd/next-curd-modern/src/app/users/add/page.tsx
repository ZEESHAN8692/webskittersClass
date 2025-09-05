"use client";
import { useRouter } from "next/navigation";
import UserForm from "@/components/UserForm";
import { addUser } from "@/redux/userSlice";
import { useAppDispatch } from "@/redux/hooks";

export default function AddUserPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <UserForm
      submitText="Create User"
      onSubmit={async (values) => {
        await dispatch(addUser(values as any));
        router.push("/users");
      }}
    />
  );
}
