import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsAction, getSimilarProfilesAction } from "../redux/actions";

const Prova = () => {
  const users = useSelector(state => state.similarProfiles.content);
  const comments = useSelector(state => state.comments.content);
  const dispatch = useDispatch();

  // Calcola l'indice dell'ultimo commento solo se ci sono commenti
  const lastCommentIndex = comments.length > 0 ? comments.length - 1 : null;
  const lastComment = lastCommentIndex !== null ? comments[lastCommentIndex] : null;

  useEffect(() => {
    dispatch(getCommentsAction());
    dispatch(getSimilarProfilesAction());
  }, [dispatch]);

  // Filtra e rimuove duplicati
  const uniqueFilteredUsers = lastComment ? [...new Map(users.filter(user => user.email === lastComment.author).map(user => [user.id, user])).values()] : [];

  return (
    <Container style={{ marginTop: "150px", width: "50%", marginInline: "auto" }}>
      {lastComment ? (
        <div>
          <h2>Author: {lastComment.author}</h2>
          {uniqueFilteredUsers.length > 0 ? (
            uniqueFilteredUsers.map(user => (
              <h1 key={user.id}>
                {user.name} {user.surname}
              </h1>
            ))
          ) : (
            <p>No users found with this email</p>
          )}
        </div>
      ) : (
        <p>No comments available</p>
      )}
    </Container>
  );
};

export default Prova;
