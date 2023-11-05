"use client";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

const Library = () => {
  const onClick = () => {
    // TODO: handle on click
  };

  // Display list of songs
  return (
    <div className="flex flex-col">
      <div
        className="
        flex
        items-center
        justify-between
        px-5
        pt-4
        "
      >
        {/* Top Header of Libary */}
        <div
          className="
        inline-flex
        items-center
        gap-x-2"
        >
          {/* Playlist Icon */}
          <TbPlaylist
            className="text-neutral-400"
            size={35}
          />
          {/* Text */}
          <p
            className="
            text-neutral-400
            font-medium
            text-md
            "
          >
            Your Library
          </p>
        </div>

        {/* Plus icon */}
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="
            text-neutral-400
            cursor-pointer
            hover:text-white
            transition
          "
        />
      </div>
      <div
        className="
      flex
      flex-col
      gap-y-2
      mt-4
      px-3"
      >
        List of Songs Here
      </div>
    </div>
  );
};

export default Library;
