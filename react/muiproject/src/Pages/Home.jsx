import React from "react";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/beautiful-young-girl-pink-t-shirt-smiling-with-pineapple_169016-6175.jpg?semt=ais_hybrid&w=740"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/beautiful-young-girl-pink-t-shirt-smiling-with-pineapple_169016-6175.jpg?semt=ais_hybrid&w=740"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/beautiful-young-girl-pink-t-shirt-smiling-with-pineapple_169016-6175.jpg?semt=ais_hybrid&w=740"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/beautiful-young-girl-pink-t-shirt-smiling-with-pineapple_169016-6175.jpg?semt=ais_hybrid&w=740"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/beautiful-young-girl-pink-t-shirt-smiling-with-pineapple_169016-6175.jpg?semt=ais_hybrid&w=740"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/beautiful-young-girl-pink-t-shirt-smiling-with-pineapple_169016-6175.jpg?semt=ais_hybrid&w=740"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/beautiful-young-girl-pink-t-shirt-smiling-with-pineapple_169016-6175.jpg?semt=ais_hybrid&w=740"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/beautiful-young-girl-pink-t-shirt-smiling-with-pineapple_169016-6175.jpg?semt=ais_hybrid&w=740"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/beautiful-young-girl-pink-t-shirt-smiling-with-pineapple_169016-6175.jpg?semt=ais_hybrid&w=740"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home;
