import React from "react";

import Auxilliary from "../../../hoc/Auxialliary";

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (<li key={igKey}>
                <span style={{textTransform: "capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>)
        })
    return(
        <Auxilliary>
            <h3>Your Order</h3>
            <p>A delivious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Auxilliary>
    )
};

export default orderSummary;