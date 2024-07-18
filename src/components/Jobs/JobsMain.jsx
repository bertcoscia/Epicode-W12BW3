import JobsDefault from "./JobsDefault";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import JobsSearchResult from "./JobsSearchResult";

const JobsMain = () => {
  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, []);

  return <main>{params.search_query ? <JobsSearchResult search_query={params.search_query} /> : <JobsDefault />}</main>;
};

export default JobsMain;
