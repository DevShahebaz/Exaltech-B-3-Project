import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Dashbord = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [target, setTarget] = useState("");

  const [carImage, setCarouselImage] = useState("");
  const [carTitle, setCarouselTitle] = useState("");
  const [carDesc, setCarouselDesc] = useState("");

  const [cardImage, setCardImage] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [cardDesc, setCardDesc] = useState("");

  const [footImage, setFooterImage] = useState("");
  const [footTitle, setFooterTitle] = useState("");
  const [footDesc, setFooterDesc] = useState("");

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: "ADD_LINK", data: { name, link, target } });
  };
  const handleDispatch = () => {
    dispatch({
      type: "ADD_CAROUSEL",
      payload: {
        carouselImage: carImage,
        carouselTitle: carTitle,
        carouselDesc: carDesc,
      },
    });
  };
  const handleCourses = () => {
    dispatch({
      type: "ADD_COURSES",
      payload: {
        courseImg: cardImage,
        courseTitle: cardTitle,
        courseDesc: cardDesc,
      },
    });
  };
  const handleFooter = () => {
    dispatch({
      type: "ADD_FOOTER",
      payload: {
        footerImg: footImage,
        footerTitle: footTitle,
        footerDesc: footDesc,
      },
    });
  };
  return (
    <div style={{ backgroundColor: "gray", borderRadius: "40px" }}>
      <input
        style={{ backgroundColor: "lightcyan", borderRadius: "30px" }}
        type="text"
        placeholder="link name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        style={{ backgroundColor: "lightcyan", borderRadius: "30px" }}
        type="text"
        Placeholder="link address"
        onChange={(e) => setLink(e.target.value)}
      />
      <input
        style={{ backgroundColor: "lightcyan", borderRadius: "30px" }}
        type="text"
        placeholder="link target"
        onChange={(e) => setTarget(e.target.value)}
      />
      <button
        style={{ backgroundColor: "lightcyan", borderRadius: "30px" }}
        onClick={handleClick}
      >
        Dispatch link
      </button>
      <br />
      <hr />
      <input
        style={{ backgroundColor: "lightcyan", borderRadius: "30px" }}
        type="text"
        placeholder="carousel image"
        onChange={(e) => setCarouselImage(e.target.value)}
      />
      <input
        style={{ backgroundColor: "lightcyan", borderRadius: "30px" }}
        type="text"
        placeholder="carousel title"
        onChange={(e) => setCarouselTitle(e.target.value)}
      />
      <input
        style={{ backgroundColor: "lightcyan", borderRadius: "30px" }}
        type="text"
        placeholder="carousel desc"
        onChange={(e) => setCarouselDesc(e.target.value)}
      />
      <button
        style={{ backgroundColor: "lightcyan", borderRadius: "30px" }}
        onClick={handleDispatch}
      >
        Dispatch Carousel
      </button>
      <br />
      <hr />
      <input
        style={{ backgroundColor: "lightcyan", borderRadius: "30px" }}
        type="text"
        placeholder="course image"
        onChange={(e) => setCardImage(e.target.value)}
      />
      <input
        style={{ backgroundColor: "lightcyan", borderRadius: "30px" }}
        type="text"
        placeholder="course title"
        onChange={(e) => setCardTitle(e.target.value)}
      />
      <input
        style={{ backgroundColor: "lightcyan", borderRadius: "30px" }}
        type="text"
        placeholder="course desc"
        onChange={(e) => setCardDesc(e.target.value)}
      />
      <button
        style={{ backgroundColor: "lightcyan", borderRadius: "30px" }}
        onClick={handleCourses}
      >
        Dispatch Courses
      </button>
      <br />
      <hr />
      <input
        style={{ backgroundColor: "lightcyan", borderRadius: "30px" }}
        type="text"
        placeholder="footer image"
        onChange={(e) => setFooterImage(e.target.value)}
      />
      <input
        style={{ backgroundColor: "lightcyan", borderRadius: "30px" }}
        type="text"
        placeholder="footer title"
        onChange={(e) => setFooterTitle(e.target.value)}
      />
      <input
        style={{ backgroundColor: "lightcyan", borderRadius: "30px" }}
        type="text"
        placeholder="footer desc"
        onChange={(e) => setFooterDesc(e.target.value)}
      />
      <button
        style={{ backgroundColor: "lightcyan", borderRadius: "30px" }}
        onClick={handleFooter}
      >
        Dispatch Footer
      </button>
    </div>
  );
};

export default Dashbord;
