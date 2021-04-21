import React from "react";
import styled from "styled-components";

const AuthorizedHomeWrapper = styled.div`
  width: 75%;
  height: 80vh;
  background-color: #fc6701;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  .info {
    width: 80%;
    height: 100%;
    margin: auto;
    font-family: "Architects Daughter", cursive;
    color: #064b88;
  }

  .header {
    text-align: center;
    font-size: 40px;
  }

  .sub-heading {
    text-align: center;
    font-size: 30px;
  }

  .list {
    width: 80%;
    margin: auto;
    font-size: 20px;
  }
`;

function AuthorizedHome() {
  return (
    <AuthorizedHomeWrapper>
      <div className="info">
        <h1 className="header">Digicyclopedia</h1>
        <h2 className="sub-heading">
          On this site you can do many wonderful things related to Digimon.
        </h2>
        <ul className="list">
          <li className="list-item">
            You can view digimon of different levels by clicking the Digimon tab
            on the navigation bar. If you click on one of the digimon shown that
            will take you to a detail page for the digimon which shows
            information and evolutions for the digimon.
          </li>
          <li className="list-item">
            If you click on the Media tab of the navigation bar you will be
            taken to a page that shows different types of digimon media in a
            similar manner to the digimon page.
          </li>
          <li className="list-item">
            If you click on the profile page you will be taken to your profile.
            On this page you can update your profile information and view your
            different favorited digimon and digimon media.
          </li>
        </ul>
      </div>
    </AuthorizedHomeWrapper>
  );
}

export default AuthorizedHome;
