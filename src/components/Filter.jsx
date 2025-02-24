/* eslint-disable react/prop-types */
import { useState } from "react";

const Filter = ({ companies, filteredList, setFilteredList }) => {
  const [searchName, setSearchName] = useState("");

  const handleFindNameChange = (event) => {
    setSearchName(event.target.value);
    companies.find((e) => {
      if (
        e.name.includes(event.target.value) ||
        e.position.includes(event.target.value)
      ) {
        setFilteredList(
          filteredList.concat([
            { name: `${e.name}`, position: `${e.position}`, link: `${e.link}` },
          ])
        );
      }
    });

    if (searchName.length <= 1) {
      setFilteredList([]);
    }
  };

  return (
    <>
      <p>Search Hit List:</p>
      <input value={searchName} onChange={handleFindNameChange} />
    </>
  );
};

export default Filter;
