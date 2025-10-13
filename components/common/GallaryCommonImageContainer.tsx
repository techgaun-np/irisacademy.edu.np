import React from "react";
import Image from "next/image";

interface GallaryCommonImageContainerProps {
  title?: string;
  description?: string;
  src: string;
  width?: number;
  height?: number;
  className?: string;
  imageClassName?: string;
}

const GallaryCommonImageContainer: React.FC<
  GallaryCommonImageContainerProps
> = ({
  title,
  description,
  src,
  width = 400,
  height = 300,
  className = "",
  imageClassName = "",
}) => {
  return (
    <div className={`flex flex-col items-center text-center p-2 ${className}`}>
      <Image
        src={src}
        alt={title ?? description ?? "Gallery Image"}
        width={width}
        height={height}
        className={`object-cover ${imageClassName}`}
      />
      {title && (
        <h3 className="mt-4 text-lg text-white font-semibold">{title}</h3>
      )}
      {description && (
        <p className="mt-1 text-sm font-bold text-white italic">
          {description}
        </p>
      )}
    </div>
  );
};

export default GallaryCommonImageContainer;
