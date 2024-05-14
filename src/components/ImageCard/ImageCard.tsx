import css from "./ImageCard.module.css";

const ImageCard = ({ photo, alt_description, onClick }) => {
  return (
    <div>
      <img
        className={css.image}
        src={photo}
        alt={alt_description}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;

//============================================================================================
// import css from "./ImageCard.module.css";

// const ImageCard = ({ photo, alt_description, onClick }) => {
//   return (
//     <div onClick={onClick}>
//       <img className={css.image} src={photo} alt={alt_description} />
//     </div>
//   );
// };

// export default ImageCard;

//====================  до сдачи ментору ========================================================================
// import ImageModal from "../ImageModal/ImageModal";
// import css from "./ImageCard.module.css";

// const ImageCard = ({
//   photo,
//   alt_description,
//   largePhoto,
//   isModalOpen,
//   setIsModalOpen,
// }) => {
//   return (
//     <div>
//       <img
//         className={css.image}
//         src={photo}
//         alt={alt_description}
//         onClick={() => setIsModalOpen(true)}
//       />

//       {isModalOpen && (
//         <ImageModal
//           isOpen={isModalOpen}
//           image={largePhoto}
//           onClose={() => setIsModalOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default ImageCard;
