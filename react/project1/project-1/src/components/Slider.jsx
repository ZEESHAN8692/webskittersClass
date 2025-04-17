const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://img.freepik.com/free-photo/nice-work-cool-portrait-delighted-stylish-confident-goodlooking-redhead-female-purple-swea_1258-140018.jpg?t=st=1744628027~exp=1744631627~hmac=5da9c8902b71ec53cd3239a099eaff53dbf8f78635221a1f80cca83ec0e80090&w=826"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/charming-assertive-female-shop-assistant-pointing-upper-left-corner-promote-cool-product-smili_1258-136077.jpg?t=st=1744628054~exp=1744631654~hmac=7e69824549592e813366e8decf62abf6ae3c51b7069800e655145f248bcb41dd&w=826"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/nice-work-cool-portrait-delighted-stylish-confident-goodlooking-redhead-female-purple-swea_1258-140018.jpg?t=st=1744628027~exp=1744631627~hmac=5da9c8902b71ec53cd3239a099eaff53dbf8f78635221a1f80cca83ec0e80090&w=826"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />
    </>
  );
};

export default Slider;
