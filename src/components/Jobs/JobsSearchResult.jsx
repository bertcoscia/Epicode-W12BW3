import { useEffect, useState } from "react";
import { auth } from "../../redux/actions";
import SingleJob from "./SingleJob";

const JobsSearchResult = ({ search_query }) => {
  const [jobs, setJobs] = useState([]);

  const fetchSearchJobs = query => {
    fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query, {
      headers: {
        Authorization: auth
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Couldn't get data - @fetchSearchJobs");
        }
      })
      .then(jobs => {
        setJobs(jobs.data);
      });
  };

  useEffect(() => {
    fetchSearchJobs(search_query);
  }, [jobs]);

  return (
    <>
      <div className="card p-3 mb-2">
        <h2 className="h4 mb-3">Results for: {search_query}</h2>
        <small className="text-muted">{jobs.length} results</small>
      </div>
      {jobs.length > 0 && (
        <>
          <div className="card p-3 mb-2">
            {jobs.map(job => (
              <SingleJob key={job._id} job={job} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default JobsSearchResult;
