import { Button } from "react-bootstrap";
import { InfoSquareFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const HomeRightAside = () => {
  const profile = useSelector(state => state.profile.content);

  return (
    <aside style={{ flexShrink: "0", flexBasis: "300px" }} className="d-none d-lg-block">
      <div className="bg-white rounded p-3 mb-2 card">
        <div className="d-flex justify-content-between">
          <h3>LinkedIn news</h3>
          <InfoSquareFill className="align-self-center" />
        </div>
        <p className="text-muted">Top stories</p>

        <div className="mb-3">
          <strong>
            <h6 className="m-0">Recommend a book for the summer</h6>
          </strong>
          <small className="text-muted">Top news</small>
        </div>
        <div className="d-flex">
          <p className="text-muted">Today&apos;s puzzle games</p>
          <small className="rounded align-self-start ms-3 px-2" style={{ backgroundColor: "#FCE3BC", color: "#523A51" }}>
            NEW
          </small>
        </div>

        <div className="d-flex mb-3">
          <img src="https://static.licdn.com/aero-v1/sc/h/3zbbe4rnqg4embu5uy17dpiph" alt="" className="align-self-center me-2" style={{ height: "45px", width: "40px" }} />
          <div>
            <h6 className="mb-1">
              <strong>Pinpoint</strong> <span className="text-muted"> #78</span>
            </h6>
            <small className="text-muted">Guess the category</small>
          </div>
        </div>
        <div className="d-flex mb-3">
          <img src="https://static.licdn.com/aero-v1/sc/h/25itbd3dpc6ockbgvdhot9qp1" alt="" className="align-self-center me-2" style={{ height: "45px", width: "40px" }} />
          <div>
            <h6 className="mb-1">
              <strong>Queens</strong> <span className="text-muted"> #78</span>
            </h6>
            <small className="text-muted">Crown each region</small>
          </div>
        </div>
        <div className="d-flex">
          <img src="https://static.licdn.com/aero-v1/sc/h/8ilyk40nkjoeuzohmqsoc6iiv" alt="" className="align-self-center me-2" style={{ height: "45px", width: "40px" }} />
          <div>
            <h6 className="mb-1">
              <strong>Crossclimb</strong> <span className="text-muted"> #78</span>
            </h6>
            <small className="text-muted">Unlock a trivia ladder</small>
          </div>
        </div>
      </div>

      <div className="bg-white rounded p-3 text-center card">
        <small className="text-muted">{`${profile.name}, unlock your full potential with LinkedIn Premium`}</small>
        <div className="d-flex justify-content-center my-3">
          <img src={profile.image} alt="" style={{ height: "70px", width: "70px" }} className="rounded-circle me-3" />
          <img src="https://media.licdn.com/dms/image/D5610AQG472GRwcHZJQ/image-shrink_1280/0/1710175969658?e=1721487600&v=beta&t=_IDwzQpFquuMqdVVE-0VidnGrXVqBJP92q4O7zpmkYw" alt="" style={{ height: "70px", width: "70px" }} />
        </div>
        <p className="text-light-emphasis">See who&apos;s viewed your profile in the last 90 days</p>
        <Button variant="outline-primary" className="rounded-pill px-3">
          Try for free
        </Button>
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

      <div className="d-flex justify-content-center">
        <img className="me-2" src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr" alt="" />
        <small>LinkedIn Corporation &copy; 2024</small>
      </div>
    </aside>
  );
};

export default HomeRightAside;
