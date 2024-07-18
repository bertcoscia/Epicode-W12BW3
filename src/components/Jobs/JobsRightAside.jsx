import { ArrowRight } from "react-bootstrap-icons";

function JobsRightAside() {
  return (
    <>
      <div className="jobs-page-right-aside bg-white rounded p-3 card mb-2">
        <h5>Jobs seeker guidance</h5>
        <p className="text-muted"> Reccomended based on your activity</p>
        <div
          className="d-flex justify-content-between align-items-center mb-2"
          style={{ backgroundColor: "#F8FAFD" }}
        >
          <h5>I want to improve my resume</h5>
          <img
            className="rounded"
            style={{ width: "74px", height: "60px" }}
            src="https://thispersondoesnotexist.com/"
            alt=""
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nam
          ipsam molestias aspernatur velit molestiae ipsa voluptas libero. Qui
          quae reiciendis molestias porro dignissimos error laboriosam obcaecati
          placeat, nesciunt harum.
        </p>
        <p className="text-secondary fw-semibold">
          Show More
          <ArrowRight className="ms-2" />
        </p>
      </div>
      <div className="d-flex justify-content-center flex-wrap column-gap-3 px-3 my-2">
        <a
          href="#home"
          className="link-secondary text-decoration-none home-footer-link"
        >
          <small>About</small>
        </a>
        <a
          href="#home"
          className="link-secondary text-decoration-none home-footer-link"
        >
          <small>Accessibility</small>
        </a>
        <a
          href="#home"
          className="link-secondary text-decoration-none home-footer-link"
        >
          <small>Help Center</small>
        </a>
        <a
          href="#home"
          className="link-secondary text-decoration-none home-footer-link"
        >
          <small>Privacy & Terms</small>
        </a>
        <a
          href="#home"
          className="link-secondary text-decoration-none home-footer-link"
        >
          <small>Ad Choices</small>
        </a>
        <a
          href="#home"
          className="link-secondary text-decoration-none home-footer-link"
        >
          <small>Advertising</small>
        </a>
        <a
          href="#home"
          className="link-secondary text-decoration-none home-footer-link"
        >
          <small>Business Services</small>
        </a>
        <a
          href="#home"
          className="link-secondary text-decoration-none home-footer-link"
        >
          <small>Get the LinkedIn app</small>
        </a>
        <a
          href="#home"
          className="link-secondary text-decoration-none home-footer-link"
        >
          <small>More</small>
        </a>
      </div>
    </>
  );
}
export default JobsRightAside;
