import React, { useState } from 'react';
import './searchBar.scss';

const SearchBar = (/*{placeholder, data}*/) => {
  const [input, setInput] = useState(''); //we use useState to figured out what the user input is
  const fetchData = value => {
    //to be able to fetch data from external API
    fetch('http://localhost:9000/api/articles?eagerload=true') //get all articles from API
      .then(response => response.json())
      .then(json => {
        // const results = json.filter((article) => {
        //     return (value && article && article.toLowerCase().includes(value));
        console.log(json);
        //});
        // console.log(results)
      });
  };
  const handleChange = value => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="contentheader">
      <div className="search">
        <div className="search-controls">
          <label htmlFor="searchlayout-searchinput">Search</label>
          <input
            type="search"
            placeholder="Type to search…"
            value={input} //the value should be the value that user input
            onChange={e => handleChange(e.target.value)} //if the value is changed we take the new value
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            required
            maxLength={512}
            className="ais-SearchBox-input"
          />
          <button type="submit" title="Submit your search query." className="ais-SearchBox-submit">
            <svg className="ais-SearchBox-submitIcon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 40 40">
              <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>
            </svg>
          </button>
        </div>
        <div className="searchRefine">
          <div className="filterLabel">
            <label>Narrow results:</label>
          </div>
          <div className="filterDate">
            <select className="searchdd">
              <option value="all">All dates</option>
              <option value="today">Today</option>
              <option value="past 7 days">Past 7 Days</option>
              <option value="past 30 days">Past 30 Days</option>
              <option value="past 90 days">Past 90 Days</option>
              <option value="past year">Past Year</option>
            </select>
          </div>
          <div className="filterProg">
            <select className="searchdd">
              <option value="">All Categories</option>
              <option value="All Things Considered">All Things Considered</option>
              <option value="World">World </option>
              <option value="National">National</option>
              <option value="Business">Business</option>
              <option value="Technology"> Technology</option>
              <option value="Science"> Science</option>
              <option value="Art & Culture">Art & Culture</option>
              <option value="Politics">Politics</option>
              <option value="Climate">Climate</option>
              <option value="Food">Food</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;