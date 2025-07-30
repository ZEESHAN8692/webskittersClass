import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteUser, getUser } from "../queryFunction/queryFunction";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import CommonFile from "../components/CommonFile";
import ShowData from "../components/showData";
const Home = () => {
  const [show, setShow] = useState(false);
  const [showAddModel, setShowAddModel] = useState(false);
  const [showUserId, setShowUserId] = useState(null);
  const [updateId, setUpdateId] = useState(false);
  // console.log("Update Id ", updateId);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: getUser,
  });
  // console.log("Data user ", data?.data);
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      toast.success("User deleted successfully");
      queryClient.invalidateQueries(["users"]);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const handleDelete = (id) => {
    mutate(id);
  };

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShowUserId(id);
    setShow(true);
  };
  const handleCloseAddModel = () => setShowAddModel(false);
  const handleShowAddModel = (id) => {
    if (id) {
      setUpdateId(id);
    }
    setShowAddModel(true);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  return (
    <>
      <div className="d-flex justify-content-end p-3">
        <Button variant="success" onClick={handleShowAddModel}>
          Add Data
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#2E4053" }}>
          Chocolate Shop
        </h1>
        <table className="table table-primary">
          <thead>
            <tr>
              <th scope="col">Field Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.quantity}</td>
                <td>{user.price}</td>
                <td>{user?.description}</td>
                <td className="d-flex gap-2">
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => handleShow(user.id)}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => handleShowAddModel(user.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Model */}

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Show Single Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ShowData id={showUserId} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Add Model */}
      <Modal show={showAddModel} onHide={handleCloseAddModel} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            {typeof updateId === "object" ? "Add Data" : "Update Data"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <CommonFile id={updateId} closModel={handleCloseAddModel} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddModel}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
