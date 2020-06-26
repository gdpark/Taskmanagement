const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs =require('fs');
const port = process.env.PORT || 5000;

const multer =require('multer');
const upload_img = multer({dest: './upload_img'});

//app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password : conf.password,
    port : conf.port,
    database: conf.database
});
connection.connect();

app.use('/image',express.static('./upload_img'));

app.get('/api/customers', (req,res) => {
   connection.query(
     "select * from customer",
     (err,rows,fields) => {
       res.send(rows);
     }
   );
});

app.post('/api/customers',upload_img.single('image'), (res, req) => {
  let sql ='insert into customer values (null, ?,?,?,?,?)';
  let image = '/image/' + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image,name, birthday, gender, job]
  connection.query(sql, params, (err, rows, fields)=> {
      res.send(rows);
      console.log(err);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));