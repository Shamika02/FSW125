import React from 'react'

const Bounty = ({bounty}) => {


    const handleDelete = (id) => {
       fetch(`http://localhost:5000/${id}`,  {
           method: 'DELETE',
           headers: {
               'content-type': 'Application/json'
           }
       })
       .then(res => res.json())
       .then(res => console.log(res))
       .catch(err => console.log(err))
       window.location.reload()
    }

    return (
        <ul>
            <li>First Name: {bounty.firstName}</li>
            <li>Last Name: {bounty.lastName}</li>
            <li>Amount: ${bounty.bountyAmount}</li>
            <li>Living: {bounty.living}</li>
            <li>Type: {bounty.type}</li>
            <li><button onClick={() => handleDelete(bounty._id)}>delete</button></li>
        </ul>
    )
}

export default Bounty
