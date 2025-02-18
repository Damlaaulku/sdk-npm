import React, { useEffect, useRef } from "react";

interface VideolityIFrameProps {
  src: string;
  viewRatio?: string;
}

const VideolityPlayer: React.FC<VideolityIFrameProps> = ({
  src,
  viewRatio = "16:9",
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const aspectRatio =
    parseFloat(viewRatio.split(":")[0]) / parseFloat(viewRatio.split(":")[1]);

  const handleResize = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      const width = iframe.offsetWidth;
      iframe.style.height = `${width / aspectRatio}px`;
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [aspectRatio]);

  return (
    <iframe
      ref={iframeRef}
      src={`${src}&viewRatio=${viewRatio}`}
      style={{ width: "100%", border: "none" }}
      allowFullScreen
    />
  );
};

export default VideolityPlayer;
