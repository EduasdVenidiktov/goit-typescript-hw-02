export type ImageModalProps = {
  isOpen: boolean;
  image: string | undefined;
  onClose: () => void;
};

export type CustomStyles = {
  content: React.CSSProperties;
};
