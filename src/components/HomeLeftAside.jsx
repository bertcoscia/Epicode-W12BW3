import { Button } from "react-bootstrap";
import { BookmarkFill, Plus } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomeLeftAside = () => {
  const profile = useSelector(state => state.profile.content);

  const heroImages = [
    "https://i.pinimg.com/originals/76/e9/23/76e9238fca30a0fc41b6f5fac75b516b.jpg",
    "https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg",
    "https://rerouting.ca/wp-content/uploads/2020/12/1.png",
    "https://wallpapers.com/images/hd/technology-linkedin-background-dce01jsbpnn0z2ej.jpg",
    "https://media.licdn.com/dms/image/D4D16AQHGgsaoCKwe1Q/profile-displaybackgroundimage-shrink_350_1400/0/1694655079860?e=1726704000&v=beta&t=pM6PCGSE0aK28lWZWT1_jdA2txQwEVoSJS8aYYT_6R8"
  ];

  const randomHeroImage = heroImages[Math.floor(Math.random() * heroImages.length)];

  return (
    <div style={{ flexShrink: "0", flexBasis: "225px" }} className="d-none d-lg-block">
      <div className="bg-white rounded card">
        <div className="position-relative mb-4">
          <img src={randomHeroImage} alt="background" className="object-fit-cover img-fluid  rounded-top" style={{ height: "90px", width: "100%" }} />
          <Link to={"/profile"}>
            <img src={profile.image} alt="propic" className="rounded-circle border position-absolute top-100 start-50 translate-middle" style={{ height: "64px", width: "64px" }} />
          </Link>
        </div>
        <div className="text-center mt-4 "></div>
        <h5 className="text-center">{`${profile.name} ${profile.surname}`}</h5>
        <p className="text-center fs-6 text-muted">{profile.title}</p>
        <hr />
        <div className="d-flex justify-content-between px-3 mb-3">
          <small>Profile viewers</small>
          <small>{Math.floor(Math.random() * 250)}</small>
        </div>
        <div className="d-flex justify-content-between px-3">
          <small>Post impressions</small>
          <small>{Math.floor(Math.random() * 250)}</small>
        </div>
        <hr />
        <div className="border-bottom px-3 mb-3">
          <small className="text-muted">Achieve your career goals</small>
          <div className="d-flex align-items-center mt-2 mb-3 column-gap-2">
            <img src="https://media.licdn.com/dms/image/D5610AQG472GRwcHZJQ/image-shrink_1280/0/1710175969658?e=1721487600&v=beta&t=_IDwzQpFquuMqdVVE-0VidnGrXVqBJP92q4O7zpmkYw" alt="chip orange" style={{ width: "20px", height: "20px" }} />
            <small>Try Premium for €0</small>
          </div>
        </div>

        <div className="d-flex px-3 pb-3 align-items-center column-gap-2">
          <BookmarkFill />
          <strong>
            <small>Saved elements</small>
          </strong>
        </div>
      </div>

      <div className="bg-white rounded my-2 p-3 card">
        <a href="#home" className="text-decoration-none home-left-aside-link">
          <small>Groups</small>
        </a>
        <div className="d-flex justify-content-between my-2">
          <a href="#home" className="text-decoration-none home-left-aside-link">
            <small>Events</small>
          </a>
          <Plus style={{ width: "25px", height: "25px" }} />
        </div>
        <a href="#home" className="text-decoration-none home-left-aside-link">
          <small>Followed hashtags</small>
        </a>
        <hr />
        <Button variant="outline-secondary" className="border-0 w-100 p-0">
          <strong>
            <small>Discover more</small>
          </strong>
        </Button>
      </div>
    </div>
  );
};

export default HomeLeftAside;
