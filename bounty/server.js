const express = require('express');
const app = express();
const {v4:uuidv4} = require('uuid');

const PORT = 3000;

app.use(express.json())

let bountys=[

    { firstName:'Stephanie',lastName:'Peters',living: 'no',bountyAmount: '25,000',type: 'sith', _id: uuidv4()},
    { firstName:'Stevie',lastName:'Jackson',living: 'yes',bountyAmount: '125,000',type: 'sith', _id: uuidv4()},
    { firstName:'Tony',lastName:'Williams',living: 'yes',bountyAmount: '55,000',type: 'jedi', _id: uuidv4()},
];

app.get('/bountys',(req, res) => {
    res.send(bountys)
   })

   app.get('/:bountyId',(req, res) => {
       console.log(req.params)
    const bountyId = req.params.bountyId;
    const singularBounty = bounty.find (bounty => bounty._id === bountyId);
     res.send(singularBounty);
   })
  
app.post('/bountys',(req, res) => {
    const newBounty = req.body;
    newBounty._id
    bountys.push(newBounty);
    res.send('new bounty added')

    console.log(bountys)
    res.send(`successfully added ${newBounty. firstName} to the database`)
})
app.delete('/:bountyId', (req,res) =>{
    const bountyId = req.params.bountyId;
    const bountyIndex = bountys.findIndex(bounty => bounty._id ===bountyId);
    bountys.splice(bountyIndex, 1);
    
    res.send('bounty has been deleted!')
    })

 app.listen(PORT,() => {
    console.log(`App started on port:${PORT}`)
    })