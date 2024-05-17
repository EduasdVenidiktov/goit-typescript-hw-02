import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import fetchImages from "../../Api";
import css from "./App.module.css";
import { Photo } from "./App.types";
import toast from "react-hot-toast";
import { Image } from "../ImageGallery/ImageGallery.types";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const App = () => {
  const [photos, setPhotos] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<Photo | null>(
    null // змінено з null на undefined, зі старту
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSearch = async (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setLoading(false);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleImageClick = (image: Photo) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal: () => void = () => {
    setSelectedImage(null); // змінено з null на undefined
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function fetchData() {
      try {
        setError(false);
        setLoading(true);

        const response = await fetchImages(query, page);
        const newPhotos = response.results;
        setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
      } catch (error) {
        setError(true);
        toast.error("Щось пішло не так... 🙁"); // Використовуємо toast.error для відображення помилки
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      <ImageGallery images={photos} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {!loading && photos.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore} query={query} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          image={selectedImage}
          onClose={handleCloseModal}
        />
      )}
      ;
    </div>
  );
};

export default App;
