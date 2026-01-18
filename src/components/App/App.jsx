import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import toast, { Toaster } from "react-hot-toast";

import { fetchImages } from "../../photoService";
import { useEffect, useState } from "react";

export default function App() {
  const [images, setImages] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [queryValue, setQueryValue] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleSearch = (query) => {
    if (query === queryValue) {
      toast("You already searched this query 🙂");
      return;
    }
    setQueryValue(query);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (queryValue === "") {
      return;
    }

    async function getData() {
      setIsLoading(true);
      setError(false);
      try {
        const data = await fetchImages(queryValue, page);
        if (data.results.length === 0) {
          toast.error("No images found");
          return;
        }
        setHasMore(page < data.total_pages);
        setImages((prevImages) => {
          return [...prevImages, ...data.results];
        });
      } catch (error) {
        setError(true);
        toast.error("Something went wrong! Try again.");
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [page, queryValue]);

  const openModal = (imageData) => {
    setSelectedImage(imageData);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onClickLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {error && <ErrorMessage />}

      {images.length > 0 && (
        <ImageGallery gallery={images} onOpenModal={openModal} />
      )}

      {isLoading && <Loader />}

      {images.length > 0 && !isLoading && hasMore && (
        <LoadMoreBtn onClick={onClickLoadMore} />
      )}

      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImage}
      />
      <Toaster position="top-right" />
    </>
  );
}
