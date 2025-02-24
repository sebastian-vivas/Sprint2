/* eslint-disable react/prop-types */
import { useState } from "react";
import companyService from "../services/companies";

const CompaniesForm = ({ companies, setCompanies }) => {
  const [newName, setNewName] = useState("");
  const [newPosition, setNewPosition] = useState("");
  const [newLink, setNewLink] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePositionChange = (event) => {
    setNewPosition(event.target.value);
  };

  const handleLinkChange = (event) => {
    setNewLink(event.target.value);
  };

  const addCompany = (event) => {
    event.preventDefault();

    if (companies.find((e) => e.link === newLink)) {
      alert(`This job has already been added.`);
      setNewLink("");
      return;
    }

    const companyObject = {
      name: newName,
      position: newPosition,
      link: newLink,
      id: `${Math.floor(Math.random() * 100)}`,
    };

    companyService.create(companyObject).then((returnedPerson) => {
      setCompanies(companies.concat(returnedPerson));
      setNewName("");
      setNewPosition("");
      setNewLink("");
    });
  };

  return (
    <form onSubmit={addCompany}>
      <div>
        Name: <input value={newName} onChange={handleNameChange} /> Position:{" "}
        <input value={newPosition} onChange={handlePositionChange} /> Job
        Listing: <input value={newLink} onChange={handleLinkChange} />{" "}
        <button type="submit">submit</button>
      </div>
    </form>
  );
};

export default CompaniesForm;
