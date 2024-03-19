import Navigation from "./Navigation";
import { createUseStyles } from "react-jss";
import style from "./Style";
import Products from "./Products";
import Team from "./Team";
import CustomerAnalytics from "./CustomerAnalytics";
import { useEffect, useState } from "react";

const useStyles = createUseStyles(style);

const App = () => {
  const classes = useStyles();

  const [sortedCustomers, setSortedCustomers] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);

  const pages = [
    { id: 0, title: "Products", content: <Products inventory={inventory} /> },
    { id: 1,
      title: "Customer Analytics",
      content: <CustomerAnalytics inventory={inventory} sortedCustomers={sortedCustomers} updateSort={setSortedCustomers}/> },
    { id: 2, title: "The Team", content: <Team key="team" /> },
  ];

  useEffect(() => {
    fetch("./products.json")
      .then((response) => response.json())
      .then(
        (tempInventory) => {
          fetch("./customers.json")
            .then((response) => response.json())
            .then(
              (result) => {
                let sortedData = result.map((user) => {
                  let total = 0;
                  user.purchases.forEach((purchased) => {
                    const product = tempInventory.find(
                      (product) => product.id === purchased.productID
                    );

                    if (product) {
                      total += product.price * purchased.quantity;
                    }
                  });
                  total = total.toFixed(2);
                  return {
                    fullName: `${user.name.title} ${user.name.first} ${user.name.last}`,
                    fullAddress: `${user.location.street.number} ${user.location.street.name}, 
                                          ${user.location.city} ${user.location.state} ${user.location.postcode}, 
                                          ${user.location.country}`,
                    email: user.email,
                    revenue: total,
                    thumbnail: user.picture.thumbnail,
                  };
                });
                setSortedCustomers(sortedData);
                setInventory(tempInventory);
                setCurrentPage({
                  id: 0,
                  title: "Products",
                  content: <Products inventory={tempInventory} />,
                });
                setIsLoaded(true);
              },
              (error) => {
                setError(error);
              }
            );
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  return (
    <div className={classes.app}>
      <Navigation pages={pages} onPageSelect={setCurrentPage} />
      <article className={classes.mainBody}>
        <h2 className={classes.bodyHeader}>
          {isLoaded ? currentPage.title : "Loading..."}
        </h2>
        {isLoaded ? currentPage.content : ""}
      </article>
    </div>
  );
};

export default App;
