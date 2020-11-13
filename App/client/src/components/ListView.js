import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import NavBttn from './NavBttn';
import Row from './Row';

const ListViewWrapper = styled.div`
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
    margin: 0 auto 0 auto;
  }

  .pageButtons {
    display: flex;
    width: 10%;
    margin: 0 auto 0 auto;
    padding-top: 10px;
    justify-content: space-between;
  }
`;

function ListView(props){
  const {type, tabs, defaultTab, favItems, setFavItems} = props;

  const [items, setItems] = useState([]);
  const [currentTab, setCurrentTab] = useState(defaultTab);
  const [counter, setCounter] = useState(0);
  const [query, setQuery] = useState(null);
  const [reset, setReset] = useState(false);

  const handleNavClick = (e) => {
    e.preventDefault();
    setCurrentTab(e.target.innerText.toLowerCase());
    setCounter(0);
  }

  const handleBackClick = (e) => {
    e.preventDefault();
    if(counter > 0){
      setCounter(counter-8);
    }
  }

  const handleNextClick = (e) => {
    e.preventDefault();
    if(items && counter < items.length){
      setCounter(counter+8);
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery('');
    setItems(items.filter(item => {return item.name.toLowerCase().startsWith(query.toLowerCase()) === true}))
    setReset(true);
  }

  async function fetchItems() {
    if(type && currentTab){
      const response = currentTab === "all" ?
        await fetch(`/api/${type}/`) : await fetch(`/api/${type}/${currentTab}/`);
      const responseData = await response.json();
      setItems(responseData.data);
    }
  }

  const handleReset = (e) => {
    e.preventDefault();
    setReset(false);
    fetchItems();
  }

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line
  }, [currentTab]);

  if(!items){
    return null;
  }

  return (
    <ListViewWrapper>
        <div className="navButtons">
          {tabs.map(tab => <NavBttn key={tab} text={tab} handleNavClick={handleNavClick} currentTab={currentTab}/>)}
          <form className="searchForm" onSubmit={handleSearch}>
            <input id="searchBar" className="search" placeholder="Enter beginning of a name" value={query ? query: ''} onChange={(e) => setQuery(e.target.value)}/>
            <button className="navButton">Submit</button>
          </form>
        </div>
        <div className="container">
          <Row type = {type} favItems= {favItems} setFavItems={setFavItems} items = {items} startVal={counter}/>
          <Row type = {type} favItems= {favItems} setFavItems={setFavItems} items = {items} startVal={counter+4}/>
          <div className="pageButtons">
            {counter === 0 ? <div></div> : <button onClick={handleBackClick} className="pageButton">Back</button>}
            {counter + 8 >= items.length ? <div></div>: <button onClick={handleNextClick}>Next</button>}
            {reset ? <button onClick={handleReset}>Reset</button>: <div></div>}
          </div>
        </div>
    </ListViewWrapper>
  )
}

export default ListView;
