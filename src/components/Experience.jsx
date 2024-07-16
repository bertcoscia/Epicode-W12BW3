import { Pencil, PlusLg } from "react-bootstrap-icons";
import SingleExperience from "./SingleExperience";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getExperienceAction } from "../redux/actions";

const Experience = ({ id }) => {
  const dispatch = useDispatch();
  const experience = useSelector(state => state.experience.content);

  useEffect(() => {
    dispatch(getExperienceAction(id));
  }, []);

  return (
    <div id="experience" className="card bg-white pt-4 px-3 rounded mb-2">
      <div className="d-flex justify-content-between">
        <h3>Experience</h3>
        <div className="d-flex">
          <PlusLg className="me-3" />
          <Pencil />
        </div>
      </div>
      {experience.length > 0 && experience.map(item => <SingleExperience key={item._id} experience={item} />)}
    </div>
  );
};

export default Experience;
