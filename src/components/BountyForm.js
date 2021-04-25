import React, {useState} from 'react'

const BountyForm = () => {

    const [bounty, setBounty] = useState({
        firstName:"",
        lastName: "",
        bountyAmount: "",
        living: "",
        type: ""
    })

    const handleChange = e => {
        setBounty({...bounty, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        fetch("http://localhost:5000/bountys",  {
           method: 'POST',
           headers: {
               'content-type': 'Application/json'
           },
           body: JSON.stringify(bounty)
       })
       .then(res => res.json())
       .then(res => {window.location.reload()})
       .catch(err => console.log(err))
    }



    return (
      <form onSubmit={handleSubmit}>
          <div>
              <label>First Name</label>
              <input type="text" name="firstName" value={bounty.firstName} onChange={handleChange}/>
          </div>

          <div>
              <label>Last Name</label>
              <input type="text" name="lastName" value={bounty.lastName} onChange={handleChange}/>
          </div>

         
          <div>
              <label>Amount</label>
              <input type="number" name="bountyAmount" value={bounty.bountyAmount} onChange={handleChange}/>
          </div>

          <div>
              <label>Living </label>
              <input type="text" name="living" value={bounty.living} onChange={handleChange}/>
          </div>

          <div>
              <label>Type</label>
              <input type="text" name="type" value={bounty.type} onChange={handleChange}/>
          </div>
    <input type="submit" value="submit" />

        
      </form>
    )
}

export default BountyForm
