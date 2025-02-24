import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Companies from "./components/Companies";
import CompaniesForm from "./components/CompaniesForm";
import companyService from "./services/companies";

const App = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    companyService.getAll().then((initialCompanies) => {
      setCompanies(initialCompanies);
    });
  });

  return (
    <div>
      <h3>Add New Company:</h3>
      <CompaniesForm companies={companies} setCompanies={setCompanies} />
      <Filter
        companies={companies}
        filteredList={filteredList}
        setFilteredList={setFilteredList}
      />
      <h1>Hit List</h1>
      <Companies companies={companies} filteredList={filteredList} />
    </div>
  );
};

export default App;
