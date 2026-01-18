import css from "./ImageCard.module.css";

export default function ImageCard({
  small,
  regular,
  likes,
  name,
  alt_description,
  onOpenModal,
}) {
  return (
    <div>
      <img
        className={css.image}
        onClick={() => {
          onOpenModal({ regular, likes, name });
        }}
        src={small}
        alt={alt_description}
      />
      <p className={css.description}>{alt_description}</p>
    </div>
  );
}
