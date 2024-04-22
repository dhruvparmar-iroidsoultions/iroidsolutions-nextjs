import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const ScrollerLine = () => {
  return (
    <div className="scroller-line-container my-2 my-lg-5">
      <Marquee className="py-3 py-md-4">
        <div className="row">
          <div className="col mx-2 mx-md-3 mx-lg-5">
            <Image
              className="w-100"
              src={"/yeti-visit.svg"}
              alt="yeti-visit"
              width={700}
              height={70}
            />
          </div>
          <div className="col mx-2 mx-md-3 mx-lg-5">
            <Image
              className="w-100"
              src={"/intelli sports.svg"}
              alt="intelli sports"
              width={700}
              height={70}
            />
          </div>
          <div className="col mx-2 mx-md-3 mx-lg-5">
            <Image
              className="w-100"
              src={"/Blue-Elephants.svg"}
              alt="Blue-Elephants"
              width={700}
              height={70}
            />
          </div>
          <div className="col mx-2 mx-md-3 mx-lg-5">
            <Image
              className="w-100"
              src={"/subway.svg"}
              alt="subway"
              width={700}
              height={70}
            />
          </div>
          <div className="col mx-2 mx-md-3 mx-lg-5">
            <Image
              className="w-100"
              src={"/klapty.svg"}
              alt="klapty"
              width={700}
              height={70}
            />
          </div>
          <div className="col mx-2 mx-md-3 mx-lg-5">
            <Image
              className="w-100"
              src={"/dribble-bridge.svg"}
              alt="dribble-bridge"
              width={700}
              height={70}
            />
          </div>
          <div className="col mx-2 mx-md-3 mx-lg-5">
            <Image
              className="w-100"
              src={"/poptaps.svg"}
              alt="poptaps"
              width={700}
              height={70}
            />
          </div>
          <div className="col mx-2 mx-md-3 mx-lg-5">
            <Image
              className="w-100"
              src={"/juthoor.svg"}
              alt="juthoor"
              width={700}
              height={70}
            />
          </div>
        </div>
      </Marquee>
      <Marquee className="py-3 py-md-4" direction="right">
        <div className="row row-cols-lg-8 w-100">
          <div className="col mx-2 mx-md-3 mx-lg-5">
            <Image
              className="w-100"
              src={"/yoyo-kids.svg"}
              alt="yoyo-kids"
              width={700}
              height={70}
            />
          </div>
          <div className="col mx-2 mx-md-3 mx-lg-5">
            <Image
              className="w-100"
              src={"/iuncta2.svg"}
              alt="iuncta2"
              width={700}
              height={70}
            />
          </div>
          <div className="col mx-2 mx-md-3 mx-lg-5">
            <Image
              className="w-100"
              src={"/Medics2You.svg"}
              alt="Medics2You"
              width={700}
              height={70}
            />
          </div>
          <div className="col mx-2 mx-md-3 mx-lg-5">
            <Image
              className="w-100"
              src={"/ets.svg"}
              alt="ets"
              width={100}
              height={70}
            />
          </div>
          <div className="col mx-2 mx-md-3 mx-lg-5">
            <Image
              className="w-100"
              src={"/rovio.svg"}
              alt="rovio"
              width={700}
              height={70}
            />
          </div>
          <div className="col mx-2 mx-md-3 mx-lg-5">
            <Image
              className="w-100"
              src={"/ab-coach.svg"}
              alt="ab-coach"
              width={700}
              height={70}
            />
          </div>
          <div className="col mx-2 mx-md-3 mx-lg-5">
            <Image
              className="w-100"
              src={"/Tendask.svg"}
              alt="Tendask"
              width={700}
              height={70}
            />
          </div>
          <div className="col mx-2 mx-md-3 mx-lg-5">
            <Image
              className="w-100"
              src={"/fitness factory.svg"}
              alt="fitness factory"
              width={700}
              height={70}
            />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default ScrollerLine;
