import { Pencil } from "react-bootstrap-icons";

const SingleExperience = ({ experience }) => {
  const monthName = monthNumber => {
    switch (monthNumber) {
      case "01":
        return "Jan ";
      case "02":
        return "Feb ";
      case "03":
        return "Mar ";
      case "04":
        return "Apr ";
      case "05":
        return "May ";
      case "06":
        return "Jun ";
      case "07":
        return "Jul ";
      case "08":
        return "Aug ";
      case "09":
        return "Sep ";
      case "10":
        return "Oct ";
      case "11":
        return "Nov ";
      case "12":
        return "Dec ";
    }
  };

  const startMonth = experience.startDate.substring(5, 7);
  let endMonth;
  if (experience.endDate) {
    endMonth = experience.endDate.substring(5, 7);
  }

  return (
    <div className="d-flex border-0 pb-2 my-2 border border-bottom">
      <div>
        <img style={{ width: "48px", height: "48px" }} src={experience.image} alt="pic profile agency" />
      </div>
      <div className="ms-2 w-100">
        <div className="d-flex justify-content-between">
          <h5 className="mb-0">{experience.role}</h5>
          <Pencil style={{ cursor: "pointer" }} />
        </div>
        <p className="mb-0">{experience.company}</p>
        <p className="mb-0 text-muted">
          {monthName(startMonth)}
          {experience.startDate.substring(0, 4)} - {monthName(endMonth)}
          {experience.endDate && experience.endDate.substring(0, 4)}
        </p>
        <p className="text-muted">{experience.area}</p>
        <p className="pt-0">{experience.description}</p>
      </div>
    </div>
  );
};

export default SingleExperience;
