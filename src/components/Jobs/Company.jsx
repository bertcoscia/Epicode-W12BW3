import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { auth } from "../../redux/actions";
import SingleJob from "./SingleJob";

const Company = () => {
  const company_name = useParams();

  const [jobs, setJobs] = useState([]);

  const fetchJobsByCompany = company_name => {
    fetch("https://strive-benchmark.herokuapp.com/api/jobs?company=" + company_name, {
      headers: {
        Authorization: auth
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Couldn't get data - @fetchJobsByCompany");
        }
      })
      .then(jobs => {
        setJobs(jobs.data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchJobsByCompany(company_name.company_name);
  }, []);

  return (
    <Container style={{ marginTop: "110px" }} className="home-flex-container">
      <div className="card p-3 mb-2 mx-auto" style={{ width: "80%" }}>
        <h1 className="mb-3">{company_name.company_name}</h1>
        {jobs.length > 0 && (
          <h5>
            {company_name.company_name} has {jobs.length} job openings - find the one for you.
          </h5>
        )}
      </div>
      {jobs.length > 0 &&
        jobs.map(job => (
          <div className="card p-3 mb-2 mx-auto" style={{ width: "80%" }} key={job._id}>
            <SingleJob job={job} />
          </div>
        ))}
    </Container>
  );
};

export default Company;
