import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick, query }) => {
  const handleClick = () => {
    onClick(query); // Передаємо поточне значення query при натисканні кнопки Load More
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
