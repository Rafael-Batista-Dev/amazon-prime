import React, { Component } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

class Slide extends Component {
  render() {
    const images = [
      {
        original:
          "https://cdn.mos.cms.futurecdn.net/SBt9pB7xnjNdcerRHBBhxh.jpg",
      },
      {
        original:
          "https://reservacinefila.com.br/wp-content/uploads/2019/07/amazon_studios-crny_s1-full-image_gallerybackground-en-us-1558475729115._ri_-1024x576.jpg",
      },
      {
        original:
          "https://img-www.tf-cdn.com/show/2/american-gods.jpeg?_v=20170607041833&fit=crop&crop=faces%20entropy&w=1200&h=630",
      },
    ];

    return <ImageGallery items={images} autoPlay={true} slideDuration={1000} />;
  }
}

export default Slide;
