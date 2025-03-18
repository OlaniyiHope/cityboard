import "./VideoCarousel.css";
import React from "react";
import { Carousel } from "react-bootstrap";

import ReactPlayer from "react-player";
import "./style.scss";

// <link
// rel="stylesheet"
// href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
// integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
// crossorigin="anonymous"
// />

const Video = () => {
  const videoProperties = [
    {
      id: 1,
      title: "Video 1",
      src: "https://res.cloudinary.com/dftygokow/video/upload/v1693441077/Tim_Godfrey_ft_Travis_Greene_-_Nara_Official_Video_hpdwbt.mp4",
      credit: "",
    },
    {
      id: 2,
      title: "Video 2",
      src: "https://res.cloudinary.com/dftygokow/video/upload/v1693441077/Tim_Godfrey_ft_Travis_Greene_-_Nara_Official_Video_hpdwbt.mp4",
      credit: "",
    },
    {
      id: 3,
      title: "Video 3",
      src: "https://res.cloudinary.com/dftygokow/video/upload/v1693441077/Tim_Godfrey_ft_Travis_Greene_-_Nara_Official_Video_hpdwbt.mp4",
      credit: "",
    },
  ];

  return (
    <div>
      <Carousel style={{ margin: "auto" }}>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                url={videoObj.src}
                className="love"
                width="100%"
                controls={true}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Video;
