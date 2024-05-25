import React, { useState } from 'react';
import './style.css';
import Card from '../Cards/Card';
import collegesData from '../../CollegeData';

const College_table = () => {

  // State variables for search query, sort criteria, and sort order
  const [searchQuery, setSearchQuery] = useState('');
  // sortCriteria is used to store the current sorting criteria
  const [sortCriteria, setSortCriteria] = useState(null);
  // sortOrder is used to store the current sorting order (either 'ascending' or 'descending')
  const [sortOrder, setSortOrder] = useState('ascending');

  // Handler for search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // This is a function named handleSortChange that updates the sortCriteria and sortOrder state 
  // variables when the value of the sorting dropdown changes.
  const handleSortChange = (e) => {
    const value = e.target.value;
    const [criteria, order] = value.split('-'); //ex. set fees as criteria and asc as orderfees-ascending
    setSortCriteria(criteria);
    setSortOrder(order);
  };

  // Apply sorting to colleges data based on sort criteria and order
  let sortedColleges = [...collegesData]; // store copy of original data array
  // If a sorting criteria is selected (sortCriteria is not null) then sort
  if (sortCriteria) {
    // comparator to sort two values
    sortedColleges.sort((a, b) => {
      const valueA = a[sortCriteria];
      const valueB = b[sortCriteria];
      // Compare values based on sort order
      // It then compares the values and returns -1, 1, or 0 based on 
      // whether valueA is less than, greater than, or equal to valueB.
      //The comparison function considers the sorting order (sortOrder) 
      // to determine whether to sort in ascending or descending order.
      if (valueA < valueB) {
        return sortOrder === 'ascending' ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortOrder === 'ascending' ? 1 : -1;
      }
      return 0; // Values are equal
    });
  }

  // Filter colleges based on search query using filter method 
  const filteredColleges = sortedColleges.filter((college) =>
    college.college.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <h1 className='heading'>CollegeDunia</h1>
      <div className="searchbar">
        <input
          type="text"
          name=""
          id="search"
          placeholder="Search College"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="sorting-dropdown">
        <select onChange={handleSortChange}>
          <option value="">Sort By</option>
          <option value="fees-ascending">Fees (Asc)</option>
          <option value="fees-descending">Fees (Desc)</option>
          <option value="userReviews-ascending">User Reviews (Asc)</option>
          <option value="userReviews-descending">User Reviews (Desc)</option>
          <option value="ranking-ascending">Ranking (Asc)</option>
          <option value="ranking-descending">Ranking (Desc)</option>
        </select>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th className='cdrank'>CD Rank</th>
              <th className='college'>Colleges</th>
              <th className='fee'>CourseFees</th>
              <th className='placement'>Placements</th>
              <th className='review'>User Reviews</th>
              <th className='rank'>Ranking</th>
            </tr>
          </thead>
        </table>
        <div className="table-data">
        {/* we render the Card components using the filteredColleges array instead of the original collegesData. */}
          {filteredColleges.map((college, index) => (
              <Card key={index} data={college} />
            ))}
        </div>
      </div>
    </>
  );
}

export default College_table;
