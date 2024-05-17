import { Photo } from "../App/App.types";

export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

export interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Photo) => void;
}
