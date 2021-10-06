import React from 'react'
import { Link } from 'react-router-dom';
export const PortfolioItem = (props) => {
    console.log(props)
    return (
    <div>
        hi  {props.match.params.id}
    </div>
    )
}
export default PortfolioItem;
