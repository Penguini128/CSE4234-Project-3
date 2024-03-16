import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import CustomerTableRow from "./CustomerTableRow";

import style from "./Style";

const useStyles = createUseStyles(style);

const CustomerAnalytics = () => {

    const headers = ["Name", "Address", "Email", "Revenue", ""];
    const sortable = [true, true, true, false, false];

    const classes = useStyles();

    const [sort, setSort] = useState({ field: "", order: "" });
    const [sortedCustomers, setSortedCustomers] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        async function fetchData() {
            try {
                const customersResponse = await fetch("./customers.json");
                const productsResponse = await fetch("./products.json");
                
                if (!customersResponse.ok) throw new Error("Failed to fetch customer data");
                if (!productsResponse.ok) throw new Error("Failed to fetch product data");
                
                const customersJson = await customersResponse.json();
                const productsJson = await productsResponse.json();
                
                let sortedData = customersJson.map((user) => {
                    let total = 0;
                    user.purchases.forEach((purchased) => {
                        const product = productsJson?.find(
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
                        thumbnail: user.picture.thumbnail
                    }
                }, [])
                setSortedCustomers(sortedData);
            } catch (error) {
                setError(error);
            }
        }

        fetchData();

        if (sort == "") return;
    })

    if (error != null) {
        return <p> Error: {error.message}</p>;
    } else if (sortedCustomers == null) {
        return <p>Loading...</p>;
    }
    else return (
        <div className={classes.tableContent}>
            <section className={classes.customerRow}>
            {
                headers.map((header, index) => (
                    <h4 className={classes.tableCellHeader}>{header}
                    { sortable[index] ? <span className={classes.sortArrow} onClick={() => setSort({ field: "Name", order: "asc" })}> &#8595; </span> 
                                      : "" }
                    { sortable[index] ? <span className={classes.sortArrow} onClick={() => setSort({ field: "Name", order: "desc" })}> &#8593; </span> 
                                      : "" }
                    </h4>
                ))
            }
            </section>

            {
                sortedCustomers.map((user, index) => {
                    let colored = index % 2 == 1 ? true : false;
                    return (
                        <CustomerTableRow user={user} colored={colored}/>
                    )
                })
            }

            { /*headers.find((item) => item === sort.field) &&
                reducedUserData.map((user, index) => {
                    return (
                        <div
                            className={`${classes.flex} ${classes.hover_alice} ${classes.max_w_80}`}
                            key={user.email}
                        >
                            <section
                                className={`${classes.name}    ${
                                    index % 2 ? classes.bg_slate : ""
                                }    ${classes.mx_1} ${classes.p_10}`}
                            >
                                {user.fullName}
                            </section>
                            <section
                                className={`${classes.Address}    ${
                                    index % 2 ? classes.bg_slate : ""
                                } ${classes.p_10} ${classes.mx_1}`}
                            >
                                {user.fullAddress}
                            </section>
                            <section
                                className={`${classes.Email} ${
                                    index % 2 ? classes.bg_slate : ""
                                }    ${classes.p_10} ${classes.mx_1}`}
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
                                className={`${classes.avatar}    ${
                                    index % 2 ? classes.bg_slate : ""
                                }    ${classes.p_10} ${classes.mx_1}`}
                            >
                                <img
                                    src={user.thumbnail}
                                    alt={user.fullName}
                                    className={`${classes.border_rounded} `}
                                />
                            </section>
                        </div>
                    );
                })*/}

            {/*sort.field !== "Title" &&
                sortUserData.map((user, index) => {
                    console.log(sortUserData);
                    return (
                        <div
                            className={`${classes.flex} ${classes.hover_alice} ${classes.max_w_80}`}
                            key={user.email}
                        >
                            <section
                                className={`${classes.name}    ${
                                    index % 2 ? classes.bg_slate : ""
                                }    ${classes.mx_1} ${classes.p_10}`}
                            >
                                {user.fullName}
                            </section>
                            <section
                                className={`${classes.Address}    ${
                                    index % 2 ? classes.bg_slate : ""
                                } ${classes.p_10} ${classes.mx_1}`}
                            >
                                {user.fullAddress}
                            </section>
                            <section
                                className={`${classes.Email} ${
                                    index % 2 ? classes.bg_slate : ""
                                }    ${classes.p_10} ${classes.mx_1}`}
                            >
                                {user.email}
                            </section>
                            <section
                                className={`${classes.Revenue} ${
                                    index % 2 ? classes.bg_slate : ""
                                } ${classes.p_10} ${classes.mx_1}`}
                            >
                                {user.Revenue}
                            </section>
                            <section
                                className={`${classes.avatar}    ${
                                    index % 2 ? classes.bg_slate : ""
                                }    ${classes.p_10} ${classes.mx_1}`}
                            >
                                <img
                                    src={user.thumbnail}
                                    alt={user.fullName}
                                    className={`${classes.border_rounded} `}
                                />
                            </section>
                        </div>
                    );
                })*/}
        </div>
    );
};

export default CustomerAnalytics;
