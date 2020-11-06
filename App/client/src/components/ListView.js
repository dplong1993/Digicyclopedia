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
  }

  .navButton {
    width: 11%;
    margin: 0 0 0 0;
  }

  .search {
    width: 20%;
    margin: 0 0 0 55px;
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
  const [counter, setCounter] = useState(0);
  const [query, setQuery] = useState(null);
  const [reset, setReset] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    props.setCurrentTab(e.target.innerText.toLowerCase());
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
    if(props.items && counter < props.items.length){
      setCounter(counter+8);
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery('');
    props.setItems(props.items.filter(item => {return item.name.toLowerCase().startsWith(query.toLowerCase()) == true}))
    setReset(true);
  }

  async function fetchItems() {
    const response = await fetch(`/api/${props.type}/${props.currentTab}/`);
    const responseData = await response.json();
    props.setItems(responseData.data);
  }

  const handleReset = (e) => {
    e.preventDefault();
    setReset(false);
    fetchItems();
  }

  useEffect(() => {
    fetchItems();
  }, []);

  if(!props.items){
    return null;
  }

  return (
    <ListViewWrapper>
        <div className="navButtons">
          {props.tabs.map(tab => <NavBttn text={tab} handleClick={handleClick} currentTab={props.currentTab}/>)}
          <input id="searchBar" className="search" placeholder="Enter beginning of a name" value={query} onChange={(e) => setQuery(e.target.value)}/>
          <button className="navButton" onClick={handleSearch}>Submit</button>
        </div>
        <div className="container">
          <Row type = {props.type} items = {props.items} startVal={counter}/>
          <Row type = {props.type} items = {props.items} startVal={counter+4}/>
          <div className="pageButtons">
            {counter === 0 ? <div></div> : <button onClick={handleBackClick} className="pageButton">Back</button>}
            {counter + 8 >= props.items.length ? <div></div>: <button onClick={handleNextClick}>Next</button>}
            {reset ? <button onClick={handleReset}>Reset</button>: <div></div>}
          </div>
        </div>
    </ListViewWrapper>
  )
}

export default ListView;
