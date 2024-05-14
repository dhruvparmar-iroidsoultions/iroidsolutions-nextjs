"use client";

import axiosApi from "@/api/axiosConfig";
import Button from "@/components/button";
import LifeAtIroidCard from "@/components/lifeAtCard";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const LifeAtIroidDemo = () => {
  const [demos, setDemos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const getDemo = async () => {
    try {
      const { data } = await axiosApi.get("/life-at-iroids?page=1&limit=3");
      setDemos(data.data);
    } catch (error) {
      console.error("Getting Error in Fetching Demos ", error);
    }
  };

  useEffect(() => {
    getDemo();
  }, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="functions">
        {demos.map((demo) => (
          <LifeAtIroidCard
            info={demo}
            key={demo.id}
            videoLink={setVideoLink}
            openModal={setIsModalOpen}
          />
        ))}
        <div
          className="modal fade"
          id="demoVideoModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="demoVideoModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered bg-transparent d-flex flex-column align-items-center justify-content-center">
            <div className="modal-content bg-transparent border-0 d-flex flex-column align-items-center justify-content-center position-relative">
              <button
                type="button"
                className="btn-close position-absolute"
                id="closeModal"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setIsModalOpen(false)}
              ></button>
              {isModalOpen && (
                <ReactPlayer
                  className="react-player"
                  url={videoLink}
                  controls
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Button linkPath={"/life-at-iroid"} />
    </div>
  );
};

export default LifeAtIroidDemo;
