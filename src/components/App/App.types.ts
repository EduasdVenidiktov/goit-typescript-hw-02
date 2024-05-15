export interface NewPhotos {
  query: string;
  page: number;
}

export interface Photo {
  id?: number;
  url: string;
  title?: string;
}
//======================================================================================

// import { MouseEventHandler } from "react";

// export type Photo = {};

// export type AppProps = {
//   query: string;
//   newQuery: string;
//   page: number;
// };

// export type SearchBarProps = {
//   onSubmit: (query: string) => void;
// };

// export type LoaderProps = {
//   // Типи пропсів для компонента Loader
// };

// export type ImageGalleryProps = {
//   images: Photo[];
//   onImageClick: (image: Photo) => void;
// };

// export type LoadMoreBtnProps = {
//   onClick: MouseEventHandler<HTMLButtonElement>;
//   query: string;
// };

// export type ImageModalProps = {
//   isOpen: boolean;
//   image: Photo | null;
//   onClose: MouseEventHandler<HTMLButtonElement>;
// };

// export type ErrorMessageProps = {
//   errorMessage: string;
// };
