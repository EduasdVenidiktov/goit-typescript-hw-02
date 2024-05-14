import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import fetchImages from "../Api";
import css from "./App.module.css";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setLoading(false);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
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
        const newPhotos = response.data.results;
        setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
      } catch (error) {
        setError(true);
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
      <ImageModal
        isOpen={isModalOpen}
        image={selectedImage}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;

//=========== работающий код ===========================================================

// import { useEffect, useState } from "react";
// import SearchBar from "./components/SearchBar/SearchBar";
// import Loader from "./components/Loader/Loader";
// import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
// import ImageGallery from "./components/ImageGallery/ImageGallery";
// import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
// import ImageModal from "./components/ImageModal/ImageModal";

// import fetchImages from "../Api";

// import css from "./App.module.css";

// const App = () => {
//   const [photos, setPhotos] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [query, setQuery] = useState(""); // loadMore
//   const [page, setPage] = useState(1); // loadMore зберігаємо номер групи/сторінки
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleSearch = async (newQuery) => {
//     setQuery(newQuery);
//     setPage(1);
//     setLoading(false);
//     setPhotos([]);
//   };

//   const handleLoadMore = () => {
//     setPage(page + 1);
//   };

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//     setIsModalOpen(true); // Эта строка вызывает открытие модального окна
//   };

//   const handleCloseModal = (ev) => {
//     // Перевіряємо, чи була натиснута кнопка Esc
//     if (
//       (ev.type === "keydown" && ev.key == "Escape") ||
//       ev.target.classList.contains(css.closeButton)
//     ) {
//       return;
//     }
//     setSelectedImage(null);
//     setIsModalOpen(false); // Эта строка вызывает закрытие модального окна
//   };

//   useEffect(() => {
//     if (query === "") {
//       //пропускаємо еффект монтування! якщо query це пустая строка або початокве значення стану, то просто виходимо з еффекту і подальший код еффекту не виконується
//       return;
//     }
//     async function fetchData() {
//       try {
//         setError(false);
//         setLoading(true);

//         const response = await fetchImages(query, page);
//         const newPhotos = response.data.results;
//         setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, [query, page]);

//   return (
//     <div className={css.container}>
//       <SearchBar onSubmit={handleSearch} />
//       {error && <ErrorMessage />}
//       {photos.length > 0 && (
//         <ImageGallery images={photos} onImageClick={handleImageClick} />
//       )}
//       {loading && <Loader />}

//       {photos.length > 0 && !loading && (
//         <LoadMoreBtn onClick={handleLoadMore} query={query} />
//       )}
//       <ImageModal
//         isOpen={isModalOpen}
//         imageUrl={selectedImage}
//         onRequestClose={handleCloseModal}
//       />
//     </div>
//   );
// };

// export default App;

//==============================================================================================================
// import { useEffect, useState } from "react";
// import SearchBar from "./components/SearchBar/SearchBar";
// import Loader from "./components/Loader/Loader";
// import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
// import ImageGallery from "./components/ImageGallery/ImageGallery";
// import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
// import ImageModal from "./components/ImageModal/ImageModal";

// import fetchImages from "../Api";

// import css from "./App.module.css";

// const App = () => {
//   const [photos, setPhotos] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [query, setQuery] = useState(""); // loadMore
//   const [page, setPage] = useState(1); // loadMore зберігаємо номер групи/сторінки
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleSearch = async (newQuery) => {
//     setQuery(newQuery);
//     setPage(1);
//     setLoading(false);
//     setPhotos([]);
//   };

//   const handleLoadMore = () => {
//     setPage(page + 1);
//   };

//   const handleImageClick = (imageUrl) => {
//     setSelectedImage(imageUrl);
//     setIsModalOpen(true); // Эта строка вызывает открытие модального окна
//   };

//   const handleCloseModal = () => {
//     setSelectedImage(null);
//     setIsModalOpen(false); // Эта строка вызывает закрытие модального окна
//   };

//   useEffect(() => {
//     if (query === "") {
//       //пропускаємо еффект монтування! якщо query це пустая строка або початокве значення стану, то просто виходимо з еффекту і подальший код еффекту не виконується
//       return;
//     }
//     async function fetchData() {
//       try {
//         setError(false);
//         setLoading(true);

//         const response = await fetchImages(query, page);
//         const newPhotos = response.data.results;
//         setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, [query, page]);

//   return (
//     <div className={css.container}>
//       <SearchBar onSubmit={handleSearch} />
//       {error && <ErrorMessage />}
//       {photos.length > 0 && (
//         <ImageGallery images={photos} onImageClick={handleImageClick} />
//       )}
//       {loading && <Loader />}

//       {photos.length > 0 && !loading && (
//         <LoadMoreBtn onClick={handleLoadMore} query={query} />
//       )}
//       <ImageModal
//         isOpen={isModalOpen}
//         imageUrl={selectedImage}
//         onRequestClose={handleCloseModal}
//       />
//     </div>
//   );
// };

// export default App;
