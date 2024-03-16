import { useEffect, useState } from "react";
import colors from "./Colors";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  flex: {
    display: "flex",
  },
  title: {
    width: "20%",
  },
  name: {
    width: "15%",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
  Address: {
    width: "30%",
  },
  Email: {
    width: "25%",
  },
  Revenue: {
    width: "15%",
    textAlign: "right",
  },
  avatar: {
    width: "10%",
    textAlign: "center",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
  },
  user_row: {
    borderRadius: "10px",
  },
  row_width: {
    width: "100%",
  },
  border_rounded: {
    clipPath: "circle(50%)",
  },
  bg_slate: {
    backgroundColor: "#D0D0D065",
  },
  rounded_md: {
    borderRadius: "10px",
  },
  p_10: {
    padding: "10px",
  },
  pl_4: {
    paddingLeft: "4px",
  },
  pl_6: {
    paddingLeft: "6px",
  },
  mx_1: {
    margin: "0 2px",
  },
  max_w_80: { maxWidth: "80%" },
  hover_alice: {
    "&:hover": {
      backgroundColor: "aliceblue",
    },
  },
});
const CustomerAnalytics = () => {
  const classes = useStyles();

  const [userData, setUserData] = useState([]);
  const [reducedUserData, setReducedUserData] = useState([]);
  const [sortUserData, setSortUserData] = useState([]);
  const [error, setError] = useState(null);
  const [productData, setProductData] = useState([]);
  const [sort, setSort] = useState({ field: "title", order: "asc" });

  useEffect(() => {
    Promise.all([fetch("./customers.json"), fetch("./products.json")])
      .then(([customersResponse, productsResponse]) => {
        if (!customersResponse.ok) {
          throw new Error("Network response for customers was not ok");
        }
        if (!productsResponse.ok) {
          throw new Error("Network response for products was not ok");
        }
        return Promise.all([customersResponse.json(), productsResponse.json()]);
      })
      .then(([customersData, productsData]) => {
        setUserData(customersData);
        setProductData(productsData);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  useEffect(() => {
    const transformedUserData = userData.map((user) => {
      return {
        fullName: `${user.name.title} ${user.name.first} ${user.name.last}`,
        fullAddress: `${user.location.street.number} ${user.location.street.name}, ${user.location.city} ${user.location.state} ${user.location.postcode}, ${user.location.country}`,
        email: user.email,
        revenue: countRevenue(user.purchases),
        thumbnail: user.picture.thumbnail,
      };
    });
    setReducedUserData(transformedUserData);
  }, [userData]);

  useEffect(() => {
    const column = sort.field;
    const sortType = sort.order;
    if (column === tableHeader[0] && sortType === "desc") {
      setSortUserData(
        reducedUserData.slice().sort((a, b) => {
          return b.fullName.localeCompare(a.fullName);
        })
      );
    }
    if (column === tableHeader[0] && sortType === "asc") {
      setSortUserData(
        reducedUserData.slice().sort((a, b) => {
          return a.fullName.localeCompare(b.fullName);
        })
      );
    }
  }, [sort]);

  let countRevenue = (purchase) => {
    let total = 0;
    purchase.forEach((purchased) => {
      const product = productData?.find(
        (product) => product.id === purchased.productID
      );
      if (product) {
        total += product.price * purchased.quantity;
      }
    });
    return total.toFixed(2);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }
  const tableHeader = ["Name", "Address", "Email", "Revenue"];

  return (
    <div className="product-content">
      <div className={`${classes.flex}   ${classes.max_w_80}`}>
        <div
          className={`${classes.name} ${classes.bg_slate} ${classes.mx_1} ${classes.p_10}`}
        >
          Name{" "}
          <span
            class="arrow-down"
            onClick={() => setSort({ field: "Name", order: "asc" })}
          >
            {" "}
            &#8595;
          </span>
          <span
            class="arrow-down"
            onClick={() => setSort({ field: "Name", order: "desc" })}
          >
            {" "}
            &#8593;
          </span>
        </div>
        <div
          className={`${classes.Address} ${classes.bg_slate} ${classes.mx_1} ${classes.p_10}`}
        >
          Address
        </div>
        <div
          className={`${classes.Email} ${classes.bg_slate} ${classes.mx_1} ${classes.p_10}`}
        >
          Email
          <span
            class="arrow-down"
            onClick={() => setSort({ field: "email", order: "asc" })}
          >
            {" "}
            &#8595;
          </span>
          <span
            class="arrow-down"
            onClick={() => setSort({ field: "email", order: "desc" })}
          >
            {" "}
            &#8593;
          </span>
        </div>
        <div
          className={`${classes.Revenue} ${classes.bg_slate} ${classes.mx_1} ${classes.p_10}`}
        >
          Revenue
        </div>
        <div
          className={`${classes.avatar} ${classes.bg_slate} ${classes.mx_1} ${classes.p_10}`}
        ></div>
      </div>

      {!tableHeader.find((item) => item === sort.field) &&
        reducedUserData.map((user, index) => {
          return (
            <div
              className={`${classes.flex} ${classes.hover_alice} ${classes.max_w_80}`}
              key={user.email}
            >
              <section
                className={`${classes.name}  ${
                  index % 2 ? classes.bg_slate : ""
                }  ${classes.mx_1} ${classes.p_10}`}
              >
                {user.fullName}
              </section>
              <section
                className={`${classes.Address}  ${
                  index % 2 ? classes.bg_slate : ""
                } ${classes.p_10} ${classes.mx_1}`}
              >
                {user.fullAddress}
              </section>
              <section
                className={`${classes.Email} ${
                  index % 2 ? classes.bg_slate : ""
                }  ${classes.p_10} ${classes.mx_1}`}
              >
                {`${user.email}`}
              </section>
              <section
                className={`${classes.Revenue} ${
                  index % 2 ? classes.bg_slate : ""
                } ${classes.p_10} ${classes.mx_1}`}
              >
                {user.revenue}
              </section>
              <section
                className={`${classes.avatar}  ${
                  index % 2 ? classes.bg_slate : ""
                }  ${classes.p_10} ${classes.mx_1}`}
              >
                <img
                  src={user.thumbnail}
                  alt={user.fullName}
                  className={`${classes.border_rounded} `}
                />
              </section>
            </div>
          );
        })}

      {sort &&
        sort.field !== "Title" &&
        sortUserData.map((user, index) => {
          console.log(sortUserData);
          return (
            <div
              className={`${classes.flex} ${classes.hover_alice} ${classes.max_w_80}`}
              key={user.email}
            >
              <section
                className={`${classes.name}  ${
                  index % 2 ? classes.bg_slate : ""
                }  ${classes.mx_1} ${classes.p_10}`}
              >
                {user.fullName}
              </section>
              <section
                className={`${classes.Address}  ${
                  index % 2 ? classes.bg_slate : ""
                } ${classes.p_10} ${classes.mx_1}`}
              >
                {user.fullAddress}
              </section>
              <section
                className={`${classes.Email} ${
                  index % 2 ? classes.bg_slate : ""
                }  ${classes.p_10} ${classes.mx_1}`}
              >
                {`${user.email}`}
              </section>
              <section
                className={`${classes.Revenue} ${
                  index % 2 ? classes.bg_slate : ""
                } ${classes.p_10} ${classes.mx_1}`}
              >
                {user.Revenue}
              </section>
              <section
                className={`${classes.avatar}  ${
                  index % 2 ? classes.bg_slate : ""
                }  ${classes.p_10} ${classes.mx_1}`}
              >
                <img
                  src={user.thumbnail}
                  alt={user.fullName}
                  className={`${classes.border_rounded} `}
                />
              </section>
            </div>
          );
        })}
    </div>
  );
};

export default CustomerAnalytics;
