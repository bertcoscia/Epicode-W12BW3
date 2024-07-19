import { Card } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import SingleSimilarProfile from "../SingleSimilarProfile";

const ProfileRightAside = () => {
  const similarProfiles = useSelector(state => state.similarProfiles.content);

  const randomProfilesArray1 = similarProfiles.slice(0, 80);
  const randomProfilesArray2 = similarProfiles.slice(81, 160);
  const randomProfilesArray3 = similarProfiles.slice(161, 240);
  const randomProfilesArray4 = similarProfiles.slice(241, 320);
  const randomProfilesArray5 = similarProfiles.slice(321, 397);
  const randomProfile1 = randomProfilesArray1[Math.floor(Math.random() * randomProfilesArray1.length)];
  const randomProfile2 = randomProfilesArray2[Math.floor(Math.random() * randomProfilesArray2.length)];
  const randomProfile3 = randomProfilesArray3[Math.floor(Math.random() * randomProfilesArray3.length)];
  const randomProfile4 = randomProfilesArray4[Math.floor(Math.random() * randomProfilesArray4.length)];
  const randomProfile5 = randomProfilesArray5[Math.floor(Math.random() * randomProfilesArray4.length)];

  /*   const spotImages = [
    "https://cdn.startupitalia.eu/wp-content/uploads/2022/03/09163817/Epicode-22-scaled.jpg",
    "https://media.licdn.com/dms/image/C4D12AQEGosS8DJn1gQ/article-cover_image-shrink_720_1280/0/1652351111470?e=2147483647&v=beta&t=-htMSlPXJg8-SB41qubuKouxF5xvXHtLuSokDr8Hcko",
    "https://brand-news.it/wp-content/uploads/2022/09/spot-nuovo-big-mac-2022.jpg",
    "https://www.amalthea.it/blog/wp-content/uploads/2021/07/pubblicita-famose-zio-sam-1917.jpg",
    "https://img2.tokyvideo.com/videos/939/9395/previews/previews_0012_custom_1569828058.697.jpg"
  ];
  const randomSpotImage = spotImages[Math.floor(Math.random() * spotImages.length)]; */

  return (
    <aside className="profile-aside d-none d-lg-block">
      <div className="card p-3">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Profile language</h5> <Pencil className="ms-auto" />
        </div>
        <p>English</p>
        <hr />

        <div className="d-flex justify-content-between align-items-center mt-3">
          <h5>Public profile & URL</h5> <Pencil className="ms-auto" />
        </div>
        <p>www.linkedin.com/in/profile</p>
      </div>

      <Card className="mt-2" style={{ position: "sticky", top: "85px" }}>
        <h6 className="p-3">Other similar profiles</h6>
        {similarProfiles.length > 0 && (
          <>
            <SingleSimilarProfile profile={randomProfile5} />
            <SingleSimilarProfile profile={randomProfile1} />
            <SingleSimilarProfile profile={randomProfile2} />
            <SingleSimilarProfile profile={randomProfile3} />
            <SingleSimilarProfile profile={randomProfile4} />
          </>
        )}
      </Card>
    </aside>
  );
};

export default ProfileRightAside;
