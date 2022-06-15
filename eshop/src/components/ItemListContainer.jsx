import React from "react";

const ItemListContainer = (props) => {
    return(
        <div className='w-75 border border-1 border-success rounded mx-auto my-5 py-3'>
            {props.greeting}
        </div>
    )
}

export default ItemListContainer;