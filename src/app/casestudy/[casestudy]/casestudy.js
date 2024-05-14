import "./page.css";
import CsTypo from "@/pages/casestudy/cstypo";
import TopBg from "@/components/topBg";
import Image from "next/image";
import ContactUs from "@/components/contactUs";
import ProjectVideo from "./project-video";
import ProjectClientPlayer from "./project-client-player";

const CaseStudyCom = ({ caseStudy }) => {
  // console.log(caseStudy);
  const removeTags = (html) => {
    const cleanText = html?.replace(/<[^>]*>/g, "");
    return cleanText;
  };
  return (
    <>
      <TopBg state={caseStudy.title} text={caseStudy.subtitle} />
      <div className="container pt-5">
        <Image
          className="casestudy-img rounded-5"
          src={caseStudy.cover_image}
          alt=""
          width={1600}
          height={900}
        />
        <div className="about-client my-3 my-lg-5">
          <p className="client fs-3 fw-semibold text-005490 lh-base mb-0">
            About Client
          </p>
          <div
            className="dangerouslySetInnerHTML-div"
            dangerouslySetInnerHTML={{ __html: caseStudy.about_client }}
          />
        </div>
        <div className="about-project my-3 my-lg-5">
          <p className="ab-project fs-3 fw-semibold text-005490 lh-base mb-0">
            About Project
          </p>
          <div
            className="dangerouslySetInnerHTML-div"
            dangerouslySetInnerHTML={{ __html: caseStudy.project_overview }}
          />
        </div>

        <div className="project-images d-flex flex-wrap align-items-center justify-content-between gap-3 gap-lg-5">
          {caseStudy.portfolio_image.map((img, idx) => (
            <Image
              className="casestudy-img"
              src={img.image}
              alt=""
              width={1600}
              height={900}
              key={idx}
            />
          ))}
        </div>

        <div className="business-needs my-3 my-lg-5">
          <p className="b-needs fs-3 fw-semibold text-005490 lh-base mb-0">
            Business Needs
          </p>
          <div
            className="dangerouslySetInnerHTML-div"
            dangerouslySetInnerHTML={{ __html: caseStudy.client_requirement }}
          />
        </div>
        <div className="challenges my-3 my-lg-5">
          <p className="chanllenge fs-3 fw-semibold text-005490 lh-base mb-0">
            Challenges
          </p>
          <div
            className="dangerouslySetInnerHTML-div"
            dangerouslySetInnerHTML={{ __html: caseStudy.challenges }}
          />
        </div>
        <div className="project-video">
          <ProjectVideo
            img={caseStudy.portfolio_one_image}
            videoUrl={`https://iroiddev.iroidsolutions.com/iroid-website/public/storage/${caseStudy.project_video}`}
          />
        </div>

        <CsTypo
          csFontFamily={caseStudy.alphabet}
          colorPallete={[caseStudy.color1, caseStudy.color2, caseStudy.color3]}
        />
        <div className="our_process my-3 my-lg-5">
          <p className="process fs-3 fw-semibold text-005490 lh-base mb-0">
            Our Process
          </p>
          <div
            className="dangerouslySetInnerHTML-div"
            dangerouslySetInnerHTML={{ __html: caseStudy.our_process }}
          />
        </div>
      </div>
      <div className="tech_stack py-5 px-3">
        <p className="tech-stack fs-1 fw-bolder text-005490 lh-base mb-lg-5 text-center">
          Technology Stack
        </p>
        <div className="tech_stacks d-flex align-items-center justify-content-center">
          {caseStudy.tech_stack.map((tech, idx) => (
            <div
              className="d-flex flex-column align-items-center justify-content-center"
              key={idx}
            >
              <p className="fs-6 fw-semibold text-capitalize">
                {tech.subtitle}
              </p>
              <div className="tech-card flexElem rounded-4 border-0 bg-white d-flex flex-column align-items-center justify-content-center p-2 px-lg-5 py-lg-4">
                <Image
                  className="casestudy-img tech-card-img mb-4"
                  src={tech.tech_stack_image}
                  alt={tech.title}
                  width={100}
                  height={100}
                />
                <p className="flexElem fs-6 fw-medium opacity-75 mb-0">
                  {tech.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        {/*  */}
        <div className="suggested_approach my-3 my-lg-5">
          <p className="process fs-3 fw-semibold text-005490 lh-base mb-0">
            Suggested Approach
          </p>
          <div
            className="dangerouslySetInnerHTML-div"
            dangerouslySetInnerHTML={{ __html: caseStudy.suggested_approach }}
          />
        </div>
        {/*  */}
        <div className="solutions my-3 my-lg-5">
          <p className="process fs-3 fw-semibold text-005490 lh-base mb-0">
            Solutions
          </p>
          <div
            className="dangerouslySetInnerHTML-div"
            dangerouslySetInnerHTML={{ __html: caseStudy.solutions }}
          />
        </div>
        {/*  */}
        <div className="result my-3 my-lg-5 p-3 py-lg-3 px-lg-4 rounded-4">
          <p className="process fs-5 fw-semibold text-005490 lh-base mb-0">
            Results
          </p>
          <div
            className="dangerouslySetInnerHTML-div"
            dangerouslySetInnerHTML={{ __html: caseStudy.result }}
          />
        </div>
        {/* design pending */}
        <div className="client_overview pt-5">
          <p className="fs-1 fw-bolder text-center">Client Review</p>
          <div className="client-testimonial mx-auto text-start">
            <div
              className="d-flex flex-wrap flex-lg-nowrap align-items-center p-2 rounded-4"
              style={{ background: "#F2F2F2" }}
              key={caseStudy.id}
            >
              <div className="ct-left p-3 p-md-5">
                <Image src={"/quote-up.svg"} alt="''" width={50} height={50} />
                {/* <p className="mb-lg-5 lh-base fs-6">
                  “{removeTags(caseStudy.client_descriptions)}.”
                </p> */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: caseStudy.client_descriptions,
                  }}
                />
                <h3 className="fw-bolder" style={{ color: "#005490" }}>
                  {caseStudy.client_name}
                </h3>
                <h4 className="fw-medium">{caseStudy.client_position}</h4>
              </div>
              <div className="ct-right position-relative w-100 h-100">
                <Image
                  className="rounded-4 object-fit-cover w-100"
                  src={`${caseStudy.profile}`}
                  alt=""
                  width={1600}
                  height={325}
                />
                <Image
                  className="position-absolute top-50 start-50 translate-middle"
                  src={`/PlayBtn.svg`}
                  alt=""
                  width={55}
                  height={55}
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#project-video-modal"
                />
                <div
                  className="modal fade"
                  id="project-client-modal"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="project-client-modalLabel"
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

                      <ProjectClientPlayer
                        url={`https://iroiddev.iroidsolutions.com/iroid-website/public/storage/${caseStudy.client_video}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default CaseStudyCom;
