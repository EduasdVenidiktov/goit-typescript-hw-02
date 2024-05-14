import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.itemList}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard
            photo={image.urls.small}
            alt_description={image.alt_description}
            onClick={() => onImageClick(image.urls.regular)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

//=====================================================================================
// import ImageCard from "../ImageCard/ImageCard";
// import css from "./ImageGallery.module.css";

// const ImageGallery = ({ images }) => {
//   return (
//     <ul className={css.itemList}>
//       {images.map((image) => (
//         <li key={image.id}>
//           <ImageCard
//             photo={image.urls.small}
//             largePhoto={image.urls.regular}
//             description={image.alt_description}
//           ></ImageCard>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ImageGallery;
