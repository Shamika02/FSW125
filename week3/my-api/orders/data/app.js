const express = require('express');
const app = express();


app.get("/", function(req, res) {
   res.json({title:"My Bounties"})
});
app.get("/bounty1", function(req, res) {
   res.json({firstName: 'Stephanie',lastName:"Peters",living: "no",
   bountyAmount: "25,000",
   type: "sith",
   id: "14253"})
});

app.get("/bounty2", function(req, res) {
res.json({firstName: 'William',lastName:"Davis",living: "yes",
bountyAmount: "125,000",
type: "sith",
id: "255253"})
});

app.get("/bounty3", function(req, res) {
   res.json({firstName: 'Tiffany',lastName:"White",living: "yes",
   bountyAmount: "15,000",
   type: "Jedi",
   id: "925863"})
   });

app.listen(3005,function() {
console.log('Listening on port 3005')
})