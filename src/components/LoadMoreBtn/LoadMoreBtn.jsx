
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick, query }) => {
  const handleClick = () => {
    onClick(query); // Передаем текущее значение query при нажатии кнопки Load More
  };

  return (
    <div>
      <button className={css.loadMoreBtn} onClick={handleClick}>
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;