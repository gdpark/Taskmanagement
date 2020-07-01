const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs =require('fs');
const port = process.env.PORT || 5000;
const multer =require('multer');

const upload_img = multer({ dest: 'upload_img/', limits: { fileSize: 10 * 1024 * 1024 } });

//app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/image',express.static('./upload_img'));

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

app.get('/api/customers', (req,res) => {
   connection.query(
     "select * from customer where isDeleted = 0",
     (err,rows,fields) => {
       res.send(rows);
     }
   );
});

app.delete('/api/customers/:id', (req,res) => {
  let sql = 'update customer set isDeleted = 1 where id= ?';
  let params = [req.param.id];
  connection.query(sql, params,
    (err, rows, fields) => {
    res.send(rows);
    })
});

app.post('/api/customers', upload_img.single('image'), (req, res) => {
  let sql ='INSERT INTO customer VALUES (null,?, ?,?,?,?,now(), 0)';
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