const express = require('express');
const mysql = require('mysql');
const cors = require ('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const { default: reportWebVitals } = require('../frontend/src/reportWebVitals');

const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database: "signup",
    port:8889
})


app.post('/signup',(req,res)=> {
    const sql ="INSERT INTO login(name,surname,email,username,password, uniquekey) VALUES (?)";
    const values = [
        req.body.name,
        req.body.surname,
        req.body.email,
        req.body.username,
        req.body.password,
        req.body.uniquekey

    ]
    db.query(sql, [values], (err,data)=> {
      

      if(err){
        return res.json({fail: true});
      }  else {
        console.log('Inserting values: ', values);
        return res.json("Succes");
      }
      
    })
}
)
app.post('/forgotpassword', (req, res) => {
  const sql = "SELECT * FROM login WHERE email=? AND uniquekey=?";
  const values = [req.body.email, req.body.uniquekey];
  db.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.json({ fail: true });
    } else if (data.length === 0) {
      return res.json({ fail: true });
    } else {
      const updateSql = "UPDATE login SET password=? WHERE email=? AND uniquekey=?";
      const updateValues = [req.body.password, req.body.email, req.body.uniquekey];
      db.query(updateSql, updateValues, (updateErr, updateData) => {
        if (updateErr) {
          console.error(updateErr);
          return res.json({ fail: true });
        } else {
          return res.json({ success: true });
        }
      });
    }
  });
});

app.post('/editprofile',(req,res)=> {
  const sql ="UPDATE login SET name=?,surname=?,username=?,password=? WHERE email=?";
  const values = [
    
    req.body.name,
    req.body.surname,
    req.body.username,
    req.body.password,
    req.body.email
    
    
  ];
  db.query(sql, values, (err,data)=> {
    console.log('Inserting values: ', values);

    if (err) {
      console.error(err);
      return res.json("Error updating password");
  }
  return res.json({success:true});
  })
}
)

app.post('/login', (req,res)=> {
  const sql ="SELECT * FROM login WHERE email = ? AND password = ?  ";
  
  db.query(sql,[req.body.email, req.body.password ], (err,data)=>{
    if(err){
      return res.json("Error");
    }  
    if(data.length > 0){
      const username=data[0].username;
      const name=data[0].name;
      const surname=data[0].surname;
      const memberstatus = data[0].memberstatus;
      return res.json({success: true, username , name , surname, memberstatus })
      ;
    } else {
      return res.json("Fail");
    }
  })

}
)

app.listen(8081,()=>{
    console.log("listening");
})