import Modal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({ isOpen, onRequestClose, imageUrl }) {
  if (!imageUrl) return null;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img src={imageUrl.regular} alt="Large image" className={css.image} />
      <p className={css.likes}>Likes: {imageUrl.likes}</p>
      <p className={css.author}>Author: {imageUrl.name}</p>
      <button className={css.closeButton} onClick={onRequestClose}>
        Close
      </button>
    </Modal>
  );
}
