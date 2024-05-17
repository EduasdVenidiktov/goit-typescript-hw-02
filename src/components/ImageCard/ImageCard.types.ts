export interface Image {
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  id: string;
}

export interface ImageCardProps {
  image: Image;
  onImageClick: (details: { url: string; title: string }) => void;
}

// export interface ImageCardProps {
//   photo: string;
//   alt_description: string;
//   onClick: () => void;
// }
