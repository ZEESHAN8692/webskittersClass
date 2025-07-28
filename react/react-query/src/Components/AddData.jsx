// import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useAddData } from "../Hooks/AddData";

// const postData = async (data) => {
//   let res = await axios.post("http://localhost:3000/user", data);
//   console.log(res);
//   return res;
// };

const AddData = () => {
  let { mutate } = useAddData();
  
//   useMutation({
//     mutationFn: postData,
//     onSuccess: () => {
//       alert("Data Added Successfully");
//     },
//     onError: (error) => {
//       alert(error);
//     },
//   });
  const { register, handleSubmit } = useForm();

  const SubmitHandler = (data) => {
    console.log(data);
    mutate(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <input type="text" placeholder="Enter Name" {...register("name")} />
        <input type="text" placeholder="Enter Age" {...register("age")} />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default AddData;
