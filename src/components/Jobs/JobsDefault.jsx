import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { ArrowRight, Search } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import SingleJob from "./SingleJob";
import { getJobsAction } from "../../redux/actions";

const JobsDefault = () => {
  const jobs = useSelector(state => state.jobs.content);
  const [hasFetched, setHasFetched] = useState(false);
  const [randomCategories, setRandomCategories] = useState([]);
  const dispatch = useDispatch();

  const [category, setCategory] = useState("");

  const jobsCategories = ["All others", "Data", "Finance / Legal", "Product", "Marketing", "Customer Service", "Software Development", "DevOps / Sysadmin", "Human Resources", "Writing", "Sales", "Design", "Business", "QA", "Teaching"];

  const jobsCategories1 = ["All others", "Data", "Finance / Legal", "Product", "Marketing"];
  const jobsCategories2 = ["Customer Service", "Software Development", "DevOps / Sysadmin", "Human Resources", "Writing"];
  const jobsCategories3 = ["Sales", "Design", "Business", "QA", "Teaching"];

  useEffect(() => {
    const randomCategory1 = jobsCategories1[Math.floor(Math.random() * jobsCategories1.length)];
    const randomCategory2 = jobsCategories2[Math.floor(Math.random() * jobsCategories2.length)];
    const randomCategory3 = jobsCategories3[Math.floor(Math.random() * jobsCategories3.length)];

    setRandomCategories([randomCategory1, randomCategory2, randomCategory3]);

    dispatch(getJobsAction());
    setHasFetched(true);
  }, []);

  return (
    <>
      <div className="card p-3 mb-2">
        <h1 className="h3">Find open jobs</h1>
        <small className="text-muted">Find relevant jobs for you</small>
        <div className="d-flex flex-wrap my-3 row-gap-2">
          {jobsCategories.map(category => (
            <Button variant="outline-primary" className="rounded-pill px-2 py-0 me-2" key={category} onClick={() => setCategory({ category })}>
              <Search width={15} height={15} className="me-1" />
              <small>{category}</small>
            </Button>
          ))}
        </div>
      </div>
      {category === "" ? (
        <>
          {jobs.length > 0 ? (
            <>
              {hasFetched && (
                <>
                  <div className="card p-3 mb-2">
                    <h2 className="h4 mb-3">Open positions: {randomCategories[0]}</h2>
                    {jobs
                      .filter(job => job.category === randomCategories[0])
                      .slice(-3)
                      .map(job => (
                        <SingleJob key={job._id} job={job} />
                      ))}
                    <h5 className="text-center">
                      See all jobs
                      <span>
                        <ArrowRight />
                      </span>
                    </h5>
                  </div>
                  <div className="card p-3 mb-2">
                    <h2 className="h4 mb-3">Open positions: {randomCategories[1]}</h2>
                    {jobs
                      .filter(job => job.category === randomCategories[1])
                      .slice(-3)
                      .map(job => (
                        <SingleJob key={job._id} job={job} />
                      ))}
                    <h5 className="text-center">
                      See all jobs
                      <span>
                        <ArrowRight />
                      </span>
                    </h5>
                  </div>
                  <div className="card p-3 mb-2">
                    <h2 className="h4 mb-3">Open positions: {randomCategories[2]}</h2>
                    {jobs
                      .filter(job => job.category === randomCategories[2])
                      .slice(-3)
                      .map(job => (
                        <SingleJob key={job._id} job={job} />
                      ))}
                    <h5 className="text-center">
                      See all jobs
                      <span>
                        <ArrowRight />
                      </span>
                    </h5>
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="d-flex justify-content-center mt-5">
              <Spinner animation="border" variant="primary" className="mt-5" />
            </div>
          )}
        </>
      ) : (
        <div className="card p-3 mb-2">
          <h2 className="h4 mb-3">{`Open positions category: ${category.category}`} </h2>
          {jobs
            .filter(job => job.category === category.category)
            .slice(-15)
            .map(job => (
              <SingleJob key={job._id} job={job} />
            ))}
        </div>
      )}
    </>
  );
};

export default JobsDefault;
