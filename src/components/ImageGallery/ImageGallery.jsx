import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ gallery, onOpenModal }) {
  return (
    <ul className={css.list}>
      {gallery.map(
        ({
          id,
          urls: { small, regular },
          likes,
          user: { name },
          alt_description,
        }) => (
          <li key={id}>
            <div>
              <ImageCard
                small={small}
                regular={regular}
                likes={likes}
                name={name}
                alt_description={alt_description}
                onOpenModal={onOpenModal}
              />
            </div>
          </li>
        )
      )}
    </ul>
  );
}
