import DOMPurify from "dompurify";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleJob = ({ job }) => {
  const stripHtml = html => {
    const clean = DOMPurify.sanitize(html, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
    return clean;
  };

  return (
    <div className="mb-3">
      <a href={job.url} target="_blank" className="fs-4">
        {job.title}
      </a>
      <Link to={`/company/${job.company_name}`} className="text-secondary-emphasis d-block text-decoration-none my-2 h5">
        {job.company_name}
      </Link>
      <h6 className="text-muted">{job.candidate_required_location}</h6>
      <p className="line-clamp-3">{stripHtml(job.description)}</p>
      <div className="d-flex justify-content-end">
        <Button as={Link} to={job.url} target="_blank" variant="outline-primary" className="rounded-pill">
          See details
        </Button>
      </div>
    </div>
  );
};

export default SingleJob;
