"use client";

import useOnPlay from "@/Hooks/useOnPlay";
import SongItem from "@/components/SongItem";
import { Song } from "@/types";

interface PageContentProps {
  songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs);

  if (!songs) {
    return (
      <div className="mt-4 text-neutral-400">
        No songs here yet :(
      </div>
    );
  }

  return (
    <div
      className="
        grid  
        grid-col-2
        sm: grid-cols-3
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-8
        gap-4
        mt-4
        "
    >
      {songs.map((item) => (
        <SongItem
          key={item.id}
          onClick={(id: string) => onPlay(id)}
          data={item}
        />
      ))}
    </div>
  );
};

export default PageContent;
