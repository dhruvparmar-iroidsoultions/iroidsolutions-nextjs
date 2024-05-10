"use client";

import dynamic from "next/dynamic";
import ReactPlayer from "react-player";

// This component has been created just for seo purpose

const ProjectClientPlayer = ({ url }) => {
  return <ReactPlayer className="react-player" url={url} controls />;
};

// export default ProjectClientPlayer;

export default dynamic(() => Promise.resolve(ProjectClientPlayer), {
  ssr: false,
});
