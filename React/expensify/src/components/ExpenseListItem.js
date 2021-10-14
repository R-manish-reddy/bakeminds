import React from "react";
import { Link } from "react-router-dom";


const ExpenseListItem =({dispatch,id,description,amount,createdAt})=>{

    return(
        <div>
        <Link to={`/Edit/${id}`}>
        <h3>{description}</h3>
        </Link>
            
            <p>{amount} - {createdAt}</p>
           
        </div>
    )
}


export default ExpenseListItem;