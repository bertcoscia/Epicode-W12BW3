import { ArrowRight } from "react-bootstrap-icons";

function JobsRightAside() {
  return (
    <aside style={{ flexShrink: "0", flexBasis: "300px" }} className="d-none d-lg-block">
      <div className="jobs-page-right-aside bg-white rounded p-3 card mb-2">
        <h5>Jobs seeker guidance</h5>
        <p className="text-muted"> Reccomended based on your activity</p>
        <div className="d-flex justify-content-between align-items-center mb-2 p-2" style={{ backgroundColor: "#F8FAFD" }}>
          <h6>I want to improve my resume</h6>
          <img
            className="rounded-2"
            style={{ width: "80px", height: "56px" }}
            src="https://www.linkedin.com/dms/prv/image/C4D0DAQFdDVwn9b17iA/learning-public-crop_60_100/0/1568251157263?m=AQKnpIbjIDzZ0wAAAZDFMemjblJ1fFjCpD8nCRBVAQBM94H4Jel9FlkQnw&e=1721381701&v=beta&t=K7mJjPbqxKhzCudTmvJLtbQpLfYOLIqKExMABM152wE"
            alt=""
          />
        </div>
        <small>Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity.</small>
        <small className="text-secondary fw-semibold mt-2" style={{ cursor: "pointer" }}>
          Show More
          <ArrowRight className="ms-2" />
        </small>
      </div>
      <div className="d-flex justify-content-center flex-wrap column-gap-3 px-3 my-2">
        <a href="#home" className="link-secondary text-decoration-none home-footer-link">
          <small>About</small>
        </a>
        <a href="#home" className="link-secondary text-decoration-none home-footer-link">
          <small>Accessibility</small>
        </a>
        <a href="#home" className="link-secondary text-decoration-none home-footer-link">
          <small>Help Center</small>
        </a>
        <a href="#home" className="link-secondary text-decoration-none home-footer-link">
          <small>Privacy & Terms</small>
        </a>
        <a href="#home" className="link-secondary text-decoration-none home-footer-link">
          <small>Ad Choices</small>
        </a>
        <a href="#home" className="link-secondary text-decoration-none home-footer-link">
          <small>Advertising</small>
        </a>
        <a href="#home" className="link-secondary text-decoration-none home-footer-link">
          <small>Business Services</small>
        </a>
        <a href="#home" className="link-secondary text-decoration-none home-footer-link">
          <small>Get the LinkedIn app</small>
        </a>
        <a href="#home" className="link-secondary text-decoration-none home-footer-link">
          <small>More</small>
        </a>
      </div>
    </aside>
  );
}
export default JobsRightAside;
