import axiosInstance from "../api/axiosInstance";
import { user_end } from "../api/base_url";

export const addUser = (user) => {
  const res = axiosInstance.post(user_end, user);
  return res;
};

export const getUser = () => {
  const res = axiosInstance.get(user_end);
  return res;
};

export const getUserById = (id) => {
  const res = axiosInstance.get(`${user_end}/${id}`);
  return res;
};

export const updateUser = (id, user) => {
  const res = axiosInstance.put(`${user_end}/${id}`, user);
  return res;
};

export const deleteUser = (id) => {
  const res = axiosInstance.delete(`${user_end}/${id}`);
  return res;
};
