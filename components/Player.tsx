"use client";

import useGetSongbyId from "@/Hooks/useGetSongById";
import useLoadSongUrl from "@/Hooks/useLoadSongUrl";
import usePlayer from "@/Hooks/usePlayer";

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongbyId(player.activeId);

  const songUrl = useLoadSongUrl(song!);

  // turn off player if conditions don't meet
  if (!song || !songUrl || !player.activeId) {
    return null;
  }

  return (
    <div
      className="
        fixed
        bottom-0
        bg-black
        w-full
        py-2
        h-[80px]
        px-4
      "
    >
      <div>Player</div>
    </div>
  );
};

export default Player;
