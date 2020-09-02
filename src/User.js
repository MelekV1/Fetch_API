import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { Link } from "react-router-dom";

const User=({user})=>{
  return(
      <div className="card">
        <Card body outline color="info">
          <img src="pingo.png" width="50" alt="user"/>
          <CardTitle>{user.name}</CardTitle>
          <CardText>{user.email}</CardText>
          <Button color="secondary">
            <Link className="text-light" to={`/profile/${user.id}`}>
                  FullData
            </Link>
          </Button>
        </Card>
      </div>
  )
}
export default User
