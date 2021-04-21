import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBttn from "../NavBttn";
import ProfileRow from "./ProfileRow";

const ProfileListViewWrapper = styled.div`
  width: 75%;
  height: 100vh;
  background-color: #fc6701;
  margin: 10px auto 10px auto;

  .navButtons {
    width: 90%;
    padding-top: 10px;
    margin: 0 auto 0 auto;
    display: flex;
    position: relative;
  }

  .searchForm {
    position: absolute;
    width: auto;
    right: 0px;
  }

  .navButton {
    width: 24%;
    margin: 0 0 0 0;
  }

  .search {
    width: 58%;
    margin: 0 0 0 40px;
  }

  .container {
    width: 90%;
    height: 85vh;
    background-color: #064b88;
    margin-left: auto;
    margin-right: auto;
  }

  .pageButtons {
    display: flex;
    width: 10%;
    margin: 0 auto 0 auto;
    padding-top: 10px;
    justify-content: space-between;
  }
`;

function ProfileListView(props) {
  const { digimon, media } = props;
  const tabs = ["Digimon", "Media"];

  const [items, setItems] = useState(digimon);
  const [currentTab, setCurrentTab] = useState("Digimon");
  const [counter, setCounter] = useState(0);
  const [query, setQuery] = useState(null);
  const [reset, setReset] = useState(false);

  const handleNavClick = (e) => {
    e.preventDefault();
    setCurrentTab(e.target.innerText.toLowerCase());
    setCounter(0);
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    if (counter > 0) {
      setCounter(counter - 8);
    }
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    if (items && counter < items.length) {
      setCounter(counter + 8);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery("");
    setItems(
      items.filter((item) => {
        return item.name.toLowerCase().startsWith(query.toLowerCase()) === true;
      })
    );
    setReset(true);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setReset(false);
    if (currentTab === "Digimon") setItems(digimon);
    else setItems(media);
  };

  useEffect(() => {
    if (currentTab) {
      if (currentTab.toLowerCase() === "digimon") setItems(digimon);
      else setItems(media);
    }
    // eslint-disable-next-line
  }, [currentTab]);

  if (!items) {
    return null;
  }

  return (
    <ProfileListViewWrapper>
      <div className="navButtons">
        {tabs.map((tab) => (
          <NavBttn
            key={tab}
            text={tab}
            handleNavClick={handleNavClick}
            currentTab={currentTab}
          />
        ))}
        <form className="searchForm" onSubmit={handleSearch}>
          <input
            id="searchBar"
            className="search"
            placeholder="Enter beginning of a name"
            value={query ? query : ""}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="navButton">Submit</button>
        </form>
      </div>
      <div className="container">
        <ProfileRow
          type={currentTab.toLowerCase()}
          items={items}
          startVal={counter}
        />
        <ProfileRow
          type={currentTab.toLowerCase()}
          items={items}
          startVal={counter + 4}
        />
        <div className="pageButtons">
          {counter === 0 ? (
            <div></div>
          ) : (
            <button onClick={handleBackClick} className="pageButton">
              Back
            </button>
          )}
          {counter + 8 >= items.length ? (
            <div></div>
          ) : (
            <button onClick={handleNextClick}>Next</button>
          )}
          {reset ? <button onClick={handleReset}>Reset</button> : <div></div>}
        </div>
      </div>
    </ProfileListViewWrapper>
  );
}

export default ProfileListView;
