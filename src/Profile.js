import React, { useState, useEffect } from "react";
import { Spinner, Container, Row, Jumbotron, CardText } from "reactstrap";
import axios from "axios";

const Profile = (props) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //fetch the user by id and set the state
    const fetchUser = () => {
      axios
        .get(
          "https://jsonplaceholder.typicode.com/users/?id=" +
            props.match.params.userId
        )
        .then((response) => {
          console.log(response);
          setUser(response.data[0]);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    setIsLoading(true);
    fetchUser();
  }, []);
  // if the component still loading
  if (isLoading) {
    return (
      <Container>
        <Row>
          <Spinner
            style={{ width: "3rem", height: "3rem", margin: "auto" }}
            type="grow"
          />
        </Row>
      </Container>
    );
    //if there is no user in the response
  } else if (!user) {
    return <h1>Oups !!!! 404 Not Fount :( </h1>;
  }
  // if evrything is OK show the component
  else
    return (
      <Container>
        <Jumbotron>
          <Row>
            <CardText
              style={{
                width: "100px",
                height: "100px",
                fontSize: "1.5em",
              }}
              className="d-flex justify-content-center align-items-center mr-auto border rounded-circle text-light bg-info text-md"
            >
              {/* check if the user and the user.name  is truthy  */}
              {user && user.name && user.name[0]}
            </CardText>
            {/* check if the user and the user.name  is truthy  */}

            <h1 className="display-3">{user && user.name}</h1>
            {/* check if the user and the user.name  is truthy  */}

            <p className="lead text-center">
              {/* check if the user and the user.address  is truthy   */}
              {/* access to the nested object element  with es11 style user?.address?.street   => value of street */}

              {`${user && user.address && user.address.street} ${
                user && user.address && user.address.suite
              }  ${user && user.adress && user.address.city}`}
            </p>
          </Row>
        </Jumbotron>
      </Container>
    );
};

export default Profile;
