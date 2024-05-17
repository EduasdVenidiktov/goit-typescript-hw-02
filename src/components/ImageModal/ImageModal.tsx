import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { KeyboardEvent } from "react";
import { CustomStyles, ImageModalProps } from "./ImageModal.types";

const customStyles: CustomStyles = {
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

function ImageModal({ isOpen, image, onClose }: ImageModalProps) {
  const handleCloseModal = (ev: KeyboardEvent<HTMLDivElement>) => {
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
        <img src={image.url} width="800" alt={image.title} />
      </Modal>
    </>
  );
}

export default ImageModal;
