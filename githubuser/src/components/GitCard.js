import React from "react";
import styled from "styled-components";


const Card = styled.div`
  background-color: black;
  width: 480px;
  height: auto;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 1px 4px black;
  text-align: center;
  margin: 15px auto;
  color:white;
`;

const Title = styled.div`
  font-size: 25px;
  border-bottom: 1px solid lightgrey;
  font-weight: 500;
  color:white;
`;

const CardImage = styled.img`
    width: 200px;
    height: 200px;
    padding: 5px;
`;

const GitCard = ({ user, image, location, bio, following, login }) => {
    return (
        <Card>
            <CardImage src={image} alt="image of the user" />
            <Title>Name: {user}</Title>
            <p className="location">Location: {location}</p>
            <p className="bio">Bio: {bio}</p>
            <p className="following">Following: {following}</p>
            <p className="following">Login: {login}</p>

        </Card>
    )
}

export default GitCard; 