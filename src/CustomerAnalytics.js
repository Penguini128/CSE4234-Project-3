import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import CustomerTableRow from "./CustomerTableRow";

import style from "./Style";

const useStyles = createUseStyles(style);

const CustomerAnalytics = () => {

    const headers = ["Name", "Address", "Email", "Revenue", ""];
    const sortable = [true, true, true, false, false];

    const classes = useStyles();

    const [isLoaded, setIsLoaded] = useState(0);
    const [sortedCustomers, setSortedCustomers] = useState([]);
    const [inventory, setInventory] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("./products.json")
        .then(response => response.json())
        .then(
            (result) => {
                setIsLoaded(isLoaded + 1);
                setInventory(result);
            },

            (error) => {
                setError(error);
            }
        )

        fetch("./customers.json")
        .then(response => response.json())
        .then(
            (result) => {
                setIsLoaded(isLoaded + 1);

                let sortedData = result.map((user) => {
                    let total = 0;
                    user.purchases.forEach((purchased) => {
                        const product = inventory?.find(
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
                setSortedCustomers(sortedData)
            },

            (error) => {
                setError(error);
            }
        )
                
    }, [])
    
    function updateSort(fieldName, order) {
        let sign = order === "asc" ? 1 : -1;
        let sortedData = [];
        if (fieldName === "Name") 
            sortedData = sortedCustomers.slice().sort((a, b) => (sign * a.fullName.localeCompare(b.fullName)));
        else if (fieldName === "Address") 
            sortedData = sortedCustomers.slice().sort((a, b) => (sign * a.fullAddress.localeCompare(b.fullAddress)));
        else if (fieldName === "Email")
            sortedData = sortedCustomers.slice().sort((a, b) => (sign * a.email.localeCompare(b.email)));
        
        setSortedCustomers(sortedData);
    }

    if (error) {
        return <p> Error: {error.message}</p>;
    } else if (!isLoaded) {
        return <p>Loading...</p>;
    }
    else return (
        <div className={classes.tableContent}>
            <section className={classes.customerRow}>
            {
                headers.map((header, index) => (
                    <h4 className={classes.tableCellHeader}>{header}
                    { sortable[index] ? <span className={classes.sortArrow} onClick={() => updateSort(header, "desc")}> &#8595; </span> 
                                      : "" }
                    { sortable[index] ? <span className={classes.sortArrow} onClick={() => updateSort(header, "asc")}> &#8593; </span> 
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
        </div>
    );
};

export default CustomerAnalytics;
