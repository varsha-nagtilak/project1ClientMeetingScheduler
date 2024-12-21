const express = require("express");
const cors = require("cors");
const mysql=require('mysql');
const bcrypt = require("bcryptjs")

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// set port, listen for requests
const PORT = process.env.PORT || 3000;
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "clientManagementApp",
});


db.connect(
    err => {
        if(err) {
            console.log('connection with db not establish');
        } else {
            console.log('connection with db is establish');
        }
    }
);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });
  
  app.post("/createUser", async (req,res) => {
      const name = req.body.name;
      const email = req.body.email;
      const address = req.body.description;
      const hashedPassword = await bcrypt.hash(req.body.password,10);
       const sqlSearch = "SELECT * FROM user WHERE email = ?"
       const search_query = mysql.format(sqlSearch,[email])
       const sqlInsert = "INSERT INTO user VALUES (0,?,?,?,?)"
       const insert_query = mysql.format(sqlInsert,[name, email, hashedPassword, address])
        db.query (search_query, async (err, result) => {
        if (err) throw (err)
        console.log("------> Search Results")
        console.log(result.length)
        if (result.length != 0) {
         console.log("------> User already exists")
         res.sendStatus(409);
        } 
        else {
         db.query (insert_query, (err, result)=> {
         if (err) throw (err)
         console.log ("--------> Created new User")
         console.log(result.insertId)
         res.status(200).json(result);
        })
       }
      })
      }) //end of app.post()

      //LOGIN (AUTHENTICATE USER)
app.post("/login", (req, res)=> {
    const email = req.body.email
    const password = req.body.password
     const sqlSearch = "Select * from user where email = ?"
     const search_query = mysql.format(sqlSearch,[email])
     db.query (search_query, async (err, result) => {
      
      if (err) throw (err)
      if (result.length == 0) {
       console.log("--------> User does not exist")
       res.sendStatus(404);
      } 
      else {
         const hashedPassword = result[0].password
        if (await bcrypt.compare(password, hashedPassword)) {
        console.log("---------> Login Successful")
       
        res.status(200).send({
            ...result[0]
          });
        } 
        else {
        console.log("---------> Password Incorrect")
        res.sendStatus(401);
        }
      }
     })
    }) //end of app.post()
  

     //insert the data
  app.post("/scheduleMeteeting",(req,res)=>{

    const {topic,noOfPeoples,startDateTime,endDateTime, userId}=req.body;
    const sql='insert into meeting values(0,?,?,?,?,?) '; 
    db.query(sql,[topic, noOfPeoples,startDateTime, endDateTime, userId],(err,result)=>{
      console.log("req.body", req.body)
     if(err){
         console.error('Error in creating meeting',err);
         res.status(500).json({error:'An error occured '});
         } 
         else{
             res.status(200).json({message:'Meeting scheduled Successfully..'});
             console.log('meeting created', result)
         }  
    });
 });

 //get all the meetings ->select * from meeting
 app.get('/meetings/:userId',(req,res)=>{
  const userId=req.params.userId;
  const sql='select * from meeting where userId=?'; 
  db.query(sql,[userId],(err,result)=>{
   if(err){
       console.error('Error in fetching the meetings',err);
       res.status(500).json({error:'An error occured '});
       } 
       else{
           res.status(200).json(result);
       }  
  });
});
