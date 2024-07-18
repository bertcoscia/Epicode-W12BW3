import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobsAction } from "../../redux/actions";

const JobsMain = () => {
  const jobs = useSelector(state => state.jobs.content);
  const dispatch = useDispatch();

  const jobsCategories = ["All others", "Data", "Finance / Legal", "Product", "Marketing", "Customer Service", "Software Development", "DevOps / Sysadmin", "Human Resources", "Writing", "Sales", "Design", "Business", "QA", "Teaching"];

  const randomCategory1 = jobsCategories[Math.floor(Math.random() * jobsCategories.length)];
  const randomCategory2 = jobsCategories[Math.floor(Math.random() * jobsCategories.length)];
  const randomCategory3 = jobsCategories[Math.floor(Math.random() * jobsCategories.length)];

  useEffect(() => {
    dispatch(getJobsAction());
    console.log(randomCategory1);
    console.log(randomCategory2);
    console.log(randomCategory3);
  }, []);

  return (
    <main>
      <div className="card p-3 mb-2">
        <h1 className="h3">Find open jobs</h1>
        <small className="text-muted">Find relevant jobs for you</small>
      </div>
      <div className="card p-3 mb-2">
        <h1 className="h3">Find open jobs</h1>
        <small className="text-muted">Find relevant jobs for you</small>
      </div>
    </main>
  );
};

export default JobsMain;
