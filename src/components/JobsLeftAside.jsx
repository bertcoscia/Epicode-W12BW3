import {
  BookmarkFill,
  FileEarmarkTextFill,
  ListUl,
  PencilSquare,
  PlayBtnFill,
} from "react-bootstrap-icons";

function JobsLeftAside() {
  return (
    <>
      {/* LEFT ASIDE */}
      <div className="jobs-page-left-aside bg-white rounded p-3 card mb-2">
        <div className="d-flex mb-3">
          <BookmarkFill /> <h6 className="ms-2">My jobs</h6>
        </div>
        <div className="d-flex mb-3">
          <ListUl /> <h6 className="ms-2 ">Preferences</h6>
        </div>
        <div className="d-flex mb-3">
          <FileEarmarkTextFill /> <h6 className="ms-2">Interview Prep</h6>
        </div>
        <div className="d-flex">
          <PlayBtnFill /> <h6 className="ms-2">Job seeker guidance</h6>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-outline-primary rounded-pill px-4 fw-semibold btn-free-jobs "
      >
        <PencilSquare className="me-2" />
        Post a free job
      </button>
    </>
  );
}
export default JobsLeftAside;
