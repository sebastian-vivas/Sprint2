/* eslint-disable react/prop-types */
import companyService from "../services/companies";

const Companies = ({ companies, filteredList }) => {
  const removeCompany = (id) => {
    return function (event) {
      event.preventDefault();
      companyService.remove(id);
    };
  };

  return (
    <div>
      {filteredList.length === 0 &&
        companies.map((company) => (
          <p key={company.id}>
            {company.name}
            {" -"} {company.position}
            {" - "}
            <a href={company.link} target="_blank">
              See Listing
            </a>
            {" - "}
            <button onClick={removeCompany(company.id)}>Delete</button>
          </p>
        ))}
      {filteredList.length > 0 && (
        <p key={filteredList[0].id}>
          {filteredList[0].name} {" - "} {filteredList[0].position}
          {" - "}
          <a href={filteredList[0].link} target="_blank">
            See Listing
          </a>
          {" - "}
          <button onClick={removeCompany(filteredList[0].id)}>Delete</button>
        </p>
      )}
    </div>
  );
};

export default Companies;
