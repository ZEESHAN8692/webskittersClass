import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {
  addUser,
  updateUser,
  getUserById,
} from "../queryFunction/queryFunction";

const CommonFile = ({ id, closModel }) => {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();

  const isEdit = Boolean(id);

  const { data } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
    enabled: isEdit,
  });

  useEffect(() => {
    if (isEdit && data?.data) {
      reset(data.data);
    }
  }, [isEdit, data, reset]);
  const addMutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      toast.success("User added successfully");
      queryClient.invalidateQueries(["users"]);
      closModel();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const updateMutation = useMutation({
    mutationFn: (formData) => updateUser(id, formData),
    onSuccess: () => {
      toast.success("User updated successfully");
      queryClient.invalidateQueries(["users"]);
      closModel();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (formData) => {
    if (isEdit) {
      updateMutation.mutate(formData);
    } else {
      addMutation.mutate(formData);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}
    >
      <Form.Group controlId="formFieldName" style={{ marginBottom: "15px" }}>
        <Form.Label>Field Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter field name"
          {...register("name")}
        />
      </Form.Group>

      <Form.Group controlId="formQuantity" style={{ marginBottom: "15px" }}>
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter quantity"
          {...register("quantity")}
        />
      </Form.Group>

      <Form.Group controlId="formPrice" style={{ marginBottom: "15px" }}>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter price"
          {...register("price")}
        />
      </Form.Group>

      <Form.Group controlId="formDescription" style={{ marginBottom: "15px" }}>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter description"
          {...register("description")}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {isEdit ? "Update Data" : "Add Data"}
      </Button>
    </Form>
  );
};

export default CommonFile;
