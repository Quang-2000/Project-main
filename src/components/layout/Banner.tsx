import React from "react";

const Banner = () => {
  return (
    <div className="container">
      <div
        id="carouselExampleRide"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://bizweb.dktcdn.net/100/378/907/themes/754099/assets/slider_5.jpg?1628222565520"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://bizweb.dktcdn.net/100/378/907/themes/754099/assets/banner2.jpg?1628222565520"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.websosanh.vn/v2/users/review/images/nhung-loai-thuc-an-cho-meo-con/cdoashpp0twl5.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://bizweb.dktcdn.net/100/471/858/themes/902424/assets/section_home_banner2.jpg?1701247547053"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.tgdd.vn/Files/2021/04/27/1346688/danh-gia-thuc-an-cho-meo-catsrang-co-tot-khong-202206061446451463.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
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
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
