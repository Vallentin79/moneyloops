import { useState } from "react";

export default function UseVideoModal() {
    const [isVideoOpen, setisVideoOpen] = useState(false);
  
    const toggleVideo = () => {
      setisVideoOpen(!isVideoOpen);
    };
  
    return {
      isVideoOpen,
      toggleVideo
    };
  }