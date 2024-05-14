import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (query.trim() === "") {
      toast.error(" Please enter search term!");
      return;
    }
    // После нажатия кнопки "Search" вызываем функцию onSubmit и передаем в нее значение query
    onSubmit(query);
    // Сбрасываем значение query после отправки формы, если не требуется сохранять его
    setQuery("");
  };

  return (
    <header className={css.formContainer}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          name="query"
          placeholder="Search photo..."
          onChange={(e) => setQuery(e.target.value)}
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
          >
            <path
              d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
                    c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
                    M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
                    z"
            />
          </svg>
        </button>
      </form>
      <Toaster position="top-center" />
    </header>
  );
};
export default SearchBar;
