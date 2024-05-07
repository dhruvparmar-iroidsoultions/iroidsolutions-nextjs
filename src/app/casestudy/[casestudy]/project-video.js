"use client";

import Image from "next/image";
import ReactPlayer from "react-player";
import dynamic from "next/dynamic";

const ProjectVideo = ({ img, videoUrl }) => {
  return (
    <div className="project-img position-relative rounded-5 overflow-hidden my-3 my-lg-5">
      <Image className="casestudy-img" src={img} width={900} height={600} />
      <Image
        className="casestudy-img position-absolute top-50 start-50 translate-middle project-playbtn"
        src={"/project-play.png"}
        width={900}
        height={600}
        data-bs-toggle="modal"
        data-bs-target="#project-video-modal"
      />
      <div
        className="modal fade"
        id="project-video-modal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="project-video-modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered d-flex flex-column align-items-center justify-content-center">
          <div className="modal-content d-flex flex-column align-items-center justify-content-center position-relative">
            <button
              type="button"
              className="btn-close position-absolute"
              id="closeModal"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>

            <ReactPlayer className="react-player" url={videoUrl} controls />
          </div>
        </div>
      </div>
    </div>
  );
};

// export default ProjectVideo;
export default dynamic(() => Promise.resolve(ProjectVideo), { ssr: false });
