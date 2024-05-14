import Modal from "react-modal";
import css from "./ImageModal.module.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root"); // Виановюємо #root як елемент DOM для модального окна

function ImageModal({ isOpen, image, onClose }) {
  const handleCloseModal = (ev) => {
    // Перевіряємо, чи була натиснута кнопка Esc
    if (ev.type === "keydown" && ev.key !== "Escape") {
      return;
    }
    onClose();
  };

  return (
    <>
      <Modal
        className={css.modalImage}
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Image Modal"
      >
        <button className={css.closeButton} onClick={onClose}>
          X
        </button>

        <img src={image} width="800" />
      </Modal>
    </>
  );
}

export default ImageModal;

//==========================================================================================
// import Modal from "react-modal";
// import css from "./ImageModal.module.css";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };
// Modal.setAppElement("#root"); // Встановлюємо #root як елемент DOM для модального окна

// function ImageModal({ imageUrl, isOpen, onClose }) {
//   const handleCloseModal = (ev) => {
//     // Перевіряємо, чи була натиснута кнопка Esc
//     if (ev.type === "keydown" && ev.key !== "Escape") {
//       return;
//     }
//     onClose(); // Тут ми викликаємо функцію закриття безпосередньо
//   };

//   return (
//     <>
//       <Modal
//         className={css.modalImage}
//         isOpen={isOpen}
//         onRequestClose={handleCloseModal}
//         style={customStyles}
//         contentLabel="Image Modal"
//       >
//         <button className={css.closeButton} onClick={onClose}>
//           X
//         </button>

//         <img src={imageUrl} width="500" />
//       </Modal>
//     </>
//   );
// }

// export default ImageModal;

//======================================================================================================
// import Modal from "react-modal";
// import css from "./ImageModal.module.css";
// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };
// Modal.setAppElement("#root"); // Виановюємо #root як елемент DOM для модального окна

// function ImageModal({ isOpen, image, onClose }) {
//   const handleCloseModal = (ev) => {
//     // Перевіряємо, чи була натиснута кнопка Esc
//     if (ev.type === "keydown" && ev.key !== "Escape") {
//       return;
//     }
//     onClose();
//   };

//   return (
//     <>
//       <Modal
//         className={css.modalImage}
//         isOpen={isOpen}
//         onRequestClose={handleCloseModal}
//         style={customStyles}
//         contentLabel="Image Modal"
//       >
//         <button className={css.closeButton} onClick={() => onClose()}>
//           X
//         </button>

//         <img src={image} width="500" />
//       </Modal>
//     </>
//   );
// }

// export default ImageModal;
