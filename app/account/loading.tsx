"use client";

import { CircleLoader } from "react-spinners";

import Box from "@/components/Box";

const Loading = () => {
  return (
    <Box className="h-full flex items-center justify-center">
      <CircleLoader color="#c05e21" size={40} />
    </Box>
  );
};

export default Loading;
