import React, { useEffect, useRef, useState } from "react";

interface VideolityImageProps {
  src: string;
  viewRatio?: string;
}

const VideolityImage: React.FC<VideolityImageProps> = ({
  src,
  viewRatio = "16:9",
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [aspectRatio, setAspectRatio] = useState<number>(1);

  useEffect(() => {
    const calculateAspectRatio = () => {
      if (viewRatio) {
        const [width, height] = viewRatio.split(":").map(Number);
        setAspectRatio(width / height);
      }
    };

    calculateAspectRatio();
  }, [viewRatio]);

  const handleResize = () => {
    const image = imageRef.current;
    if (image) {
      const width = image.offsetWidth;
      image.style.height = `${width / aspectRatio}px`;
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [aspectRatio]);

  return (
    <img ref={imageRef} src={src} style={{ width: "100%", height: "auto" }} />
  );
};

export default VideolityImage;
