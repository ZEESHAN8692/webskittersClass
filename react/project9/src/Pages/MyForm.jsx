import MyFormCom from "../Components/MyFormCom";

const MyForm = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token = sessionStorage.getItem("token");
  //   if (token) {
  //     navigate("/dashboard");
  //   }
  // }, []);
  return (
    <>
      <div className="container">
        <br />
        <br />
        <MyFormCom />
      </div>
    </>
  );
};

export default MyForm;
