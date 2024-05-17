import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGallery.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className={css.itemList}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard
            image={image} // Передаємо весь об'єкт зображення
            onImageClick={onImageClick} // Передаємо функцію
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
