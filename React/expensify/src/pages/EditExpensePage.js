import React from 'react'

export const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
            EditExpensePage params {props.match.params.id}
        </div>
    )
}
export default EditExpensePage;
