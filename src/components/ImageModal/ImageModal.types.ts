import { Photo } from "../App/App.types";

export type ImageModalProps = {
  isOpen: boolean;
  image: Photo;
  onClose: () => void;
};

export type CustomStyles = {
  content: React.CSSProperties;
};
