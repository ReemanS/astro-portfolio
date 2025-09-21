import { useState } from "react";
import image1 from "@/assets/images/my-img-1.png";
import image2 from "@/assets/images/my-img-2.png";
import image3 from "@/assets/images/my-img-3.png";

export default function ImageSwitcher() {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      className="relative mx-auto w-11/12 md:w-full h-[420px] cursor-pointer"
      onClick={handleImageClick}
    >
      {images.map((image, index) => {
        const isActive = index === currentIndex;
        const isNext = index === (currentIndex + 1) % images.length;
        const isPrev =
          index === (currentIndex - 1 + images.length) % images.length;

        let zIndex = 1;
        let transform = "translateX(0) translateY(0) rotate(0deg)";
        let opacity = 0.3;

        if (isActive) {
          zIndex = 30;
          transform = "translateX(0) translateY(0) rotate(0deg)";
          opacity = 1;
        } else if (isNext) {
          zIndex = 20;
          transform = "translateX(8px) translateY(8px) rotate(3deg)";
          opacity = 0.7;
        } else if (isPrev) {
          zIndex = 10;
          transform = "translateX(-8px) translateY(8px) rotate(-3deg)";
          opacity = 0.7;
        }

        return (
          <img
            key={index}
            src={image.src}
            alt={`Image of Reeman - ${index + 1}`}
            title="Try clicking the image!"
            className="absolute top-0 left-0 w-full h-[420px] object-cover rounded-lg transition-all duration-300 ease-in-out shadow-lg"
            style={{
              zIndex,
              transform,
              opacity,
            }}
          />
        );
      })}
    </div>
  );
}
