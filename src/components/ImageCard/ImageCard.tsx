import css from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: React.FC<ImageCardProps> = ({
  image, // Приймає весь об'єкт зображення
  onImageClick, // Приймає функцію
}) => {
  const handleClick = () => {
    onImageClick({
      url: image.urls.regular,
      title: image.alt_description,
    });
  };

  return (
    <div>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;
