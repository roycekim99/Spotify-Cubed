"use client";

import Image from "next/image";

import useLoadImage from "@/Hooks/useLoadImage";
import { Song } from "@/types";

interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const imageUrl = useLoadImage(data);

  const handleOnClick = () => {
    if (onClick) {
      return onClick(data.id);
    }

    // TODO: Default turn on player
  };

  return (
    <div
      onClick={handleOnClick}
      className="
    flex
    items-center
    gap-x-3
    cursor-pointer
    hover:bg-neutral-800/50
    w-full
    p-2
    rounded-md
  
  "
    >
      <div
        className="
      relative
      rounded-2xl
      min-h-[48px]
      min-w-[48px]
      overflow-hidden
    "
      >
        <Image
          fill
          src={imageUrl || "/image/liked.png"}
          alt="Media Item"
          className="Object-cover"
        />
      </div>
      <div
        className="
        flex
        flex-col
        gap-y-1
        overflow-hidden
      "
      >
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">
          {data.author}
        </p>
      </div>
    </div>
  );
};

export default MediaItem;
