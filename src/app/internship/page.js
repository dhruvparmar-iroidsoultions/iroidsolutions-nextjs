import TopBg from "@/components/topBg";
import WhyJoinUsJob from "@/components/why-join-us-job";
import "@/components/why-join-us-job/index.css";
import Image from "next/image";
import "./page.css";

const Internship = () => {
  const internshipIn = [
    {
      img: "/internship-in-android.png",
      tech: "Android Development",
    },
    {
      img: "/internship-in-ios.png",
      tech: "iOS Development",
    },
    {
      img: "/internship-in-flutter.png",
      tech: "Flutter Development",
    },
    {
      img: "/internship-in-php.png",
      tech: "PHP Development",
    },
    {
      img: "/internship-in-laravel.png",
      tech: "Laravel Development",
    },
    {
      img: "/internship-in-designing.png",
      tech: "Web Designing",
    },
    {
      img: "/internship-in-ui-ux.png",
      tech: "UI/UX Designing",
    },
    {
      img: "/internship-in-react-native.png",
      tech: "React Native",
    },
    {
      img: "/internship-in-react.png",
      tech: "React JS",
    },
    {
      img: "/internship-in-javascript.png",
      tech: "Node.JS Development",
    },
  ];

  return (
    <>
      <TopBg
        state={"Internship Opportunities At iRoid Solutions"}
        text={"Make a fresh start of your career with iRoid"}
      />
      <WhyJoinUsJob />
      <div className="container py-3 py-lg-5">
        <p className="fs-1 fw-semibold text-center">
          We are providing the internships in below technologies
        </p>
        <p className="fs-5 fw-medium text-center mx-auto text-00000099">
          Unlock your potential with our diverse internship opportunities.
        </p>
        <div className="my-3 my-lg-5 py-3 py-md-5 container benefit-card-container interships-in">
          {internshipIn.map((internship, idx) => (
            <div
              className="p-2 p-lg-4 text-center benefit-card rounded-4 d-flex flex-column align-items-center justify-content-around"
              key={idx}
            >
              <div className="benefit-img-con flexElem d-flex align-items-center justify-content-center">
                <Image src={internship.img} alt="" width={70} height={70} />
              </div>
              <p className="fs-5 fw-semibold flexElem d-flex align-items-center justify-content-center m-0 mb-sm-2 mb-lg-0">
                {internship.tech}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-3 p-lg-5 intership-procedure">
        <p className="fs-1 fw-semibold text-005490 text-center mb-0 my-sm-4">
          Procedures for submitting an internship application
        </p>
        <div className="my-3 my-sm-5">
          <div className="p-2 p-sm-3 p-lg-5 mx-auto bg-white rounded-5 procedures-container">
            <div className="procedures d-flex gap-3">
              <Image src={"/internship-procedure.png"} width={25} height={25} />
              <div className="mb-3">
                <p className="fs-5 fw-semibold text-005490 mb-0">
                  Interview Process:
                </p>
                <p className="">
                  There will be Three rounds of the interview process.
                </p>
                <ul className="procedures-ul list-unstyled">
                  <li>
                    Practical Evaluation: You will be asked to develop an
                    example in your preferred language (Java, PHP, Android,
                    iPhone, C/C++)
                  </li>
                  <li>Technical Interview: Question - Answers</li>
                  <li>HR Round</li>
                </ul>
              </div>
            </div>
            <div className="procedures d-flex gap-3">
              <Image src={"/internship-procedure.png"} width={25} height={25} />
              <div className="mb-3">
                <p className="fs-5 fw-semibold text-005490">Stipend:</p>
                <ul className="procedures-ul list-unstyled">
                  <li>
                    Depending upon your performance in the interview, you will
                    get paid the stipend during the 6 months of the internship
                    period.
                  </li>
                </ul>
              </div>
            </div>
            <div className="procedures d-flex gap-3">
              <Image src={"/internship-procedure.png"} width={25} height={25} />
              <div className="mb-3">
                <p className="fs-5 fw-semibold text-005490">
                  Employment Agreement::
                </p>
                <ul className="procedures-ul list-unstyled">
                  <li>
                    1 year of Employment agreement after 6 months of the
                    internship period.
                  </li>
                </ul>
              </div>
            </div>
            <div className="procedures d-flex gap-3">
              <Image src={"/internship-procedure.png"} width={25} height={25} />
              <div className="mb-3">
                <p className="fs-5 fw-semibold text-005490">Skills Required:</p>
                <ul className="procedures-ul list-unstyled">
                  <li>Strong command on programming</li>
                  <li>Strong OOPS concepts</li>
                  <li>Good English communication skills</li>
                  <li>Quick Learner</li>
                  <li>Good team player</li>
                  <li>Hard-working</li>
                  <li>Self-Motivated</li>
                  <li>Disciplined</li>
                  <li>Passion for work</li>
                </ul>
              </div>
            </div>
            <div className="procedures d-flex gap-3">
              <Image src={"/internship-procedure.png"} width={25} height={25} />
              <div className="mb-3">
                <p className="fs-5 fw-semibold text-005490">Benefits:</p>
                <ul className="procedures-ul list-unstyled">
                  <li>Flexible and friendly environments</li>
                  <li>
                    Great opportunity to work on many exciting projects with
                    seniors
                  </li>
                  <li>
                    You will be also given the opportunity to work on the live
                    projects individually
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Internship;
