"use client";

import useOnPlay from "@/Hooks/useOnPlay";
import { useUser } from "@/Hooks/useUser";
import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import { Song } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface LikedContentProp {
  songs: Song[];
}

const LikedContent: React.FC<LikedContentProp> = ({ songs }) => {
  const onPlay = useOnPlay(songs);

  const router = useRouter();
  const { isLoading, user } = useUser();

  // only let authenticated users to go into liked page
  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  if (songs.length === 0) {
    return (
      <div
        className="
        flex
        flex-col
        gap-y-2
        w-full
        px-6
        text-neutral-400
        "
      >
        No Liked Songs.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 w-full p-6">
      {songs.map((song) => (
        <div
          key={song.id}
          className="flex items-center gap-x-4 w-full"
        >
          <div className="flex-1">
            <MediaItem
              onClick={(id: string) => onPlay(id)}
              data={song}
            />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default LikedContent;
