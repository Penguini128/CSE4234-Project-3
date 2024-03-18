import { createUseStyles } from "react-jss";
import CustomerTableRow from "./CustomerTableRow";

import style from "./Style";

const useStyles = createUseStyles(style);

const CustomerAnalytics = ({ sortedCustomers, updateSort }) => {
  const headers = ["Name", "Address", "Email", "Revenue", ""];
  const sortable = [true, true, true, false, false];

  const classes = useStyles();

  function updateSort(fieldName, order) {
    let sign = order === "asc" ? 1 : -1;
    let sortedData = [];
    if (fieldName === "Name")
      sortedData = sortedCustomers
        .slice()
        .sort((a, b) => sign * a.fullName.localeCompare(b.fullName));
    else if (fieldName === "Address")
      sortedData = sortedCustomers
        .slice()
        .sort((a, b) => sign * a.fullAddress.localeCompare(b.fullAddress));
    else if (fieldName === "Email")
      sortedData = sortedCustomers
        .slice()
        .sort((a, b) => sign * a.email.localeCompare(b.email));

    updateSort(sortedData);
  }

  return (
    <div className={classes.tableContent}>
      <section className={classes.customerRow}>
        {headers.map((header, index) => (
          <h4 key={header} className={classes.tableCellHeader}>
            {header}
            {sortable[index] ? (
              <span
                className={classes.sortArrow}
                onClick={() => updateSort(header, "desc")}
              >
                {" "}
                &#8595;{" "}
              </span>
            ) : (
              ""
            )}
            {sortable[index] ? (
              <span
                className={classes.sortArrow}
                onClick={() => updateSort(header, "asc")}
              >
                {" "}
                &#8593;{" "}
              </span>
            ) : (
              ""
            )}
          </h4>
        ))}
      </section>

      {sortedCustomers.map((user, index) => {
        let colored = index % 2 == 1 ? true : false;
        return (
          <CustomerTableRow key={user.fullName} user={user} colored={colored} />
        );
      })}
    </div>
  );
};

export default CustomerAnalytics;
