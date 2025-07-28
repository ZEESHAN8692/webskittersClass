import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const postData = async (data) => {
  let res = await axios.post("http://localhost:3000/user", data);
  console.log(res);
  return res;
};

export const useAddData = () => {
  return useMutation({
    mutationFn: postData,
    onSuccess: () => {
      alert("Data Added Successfully");
    },
    onError: (error) => {
      alert(error);
    },
  });
};
