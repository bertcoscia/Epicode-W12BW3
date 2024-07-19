import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsAction, getSimilarProfilesAction } from "../redux/actions";

const Prova = () => {
  const users = useSelector(state => state.similarProfiles.content);
  const comments = useSelector(state => state.comments.content);
  const dispatch = useDispatch();

  const lastComment = comments.length - 1;
  const selectedUserArea = comments.length > 0 ? users.filter(user => user.email === comments[lastComment]?.author)[0]?.area : "No comments available";

  useEffect(() => {
    dispatch(getCommentsAction());
    dispatch(getSimilarProfilesAction());
  }, []);

  return (
    <Container style={{ marginTop: "150px", width: "50%", marginInline: "auto" }}>
      <p> {comments.length > 0 && comments[lastComment].author}</p>
      <h1>{users.length > 0 && { selectedUserArea }}</h1>
    </Container>
  );
};

export default Prova;
