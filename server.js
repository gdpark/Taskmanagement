const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

//app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req,res) => {
    res.send([{
        'id':1,
        'image':'http://placeimg.com/64/64/any',
        'name':'홍길동',
        'birthday':'19821110',
        'gender':'남자',
        'job':'programmer',
      },
      {
      
        'id':2,
        'image':'http://placeimg.com/64/64/any',
        'name':'홍길동1',
        'birthday':'19821111',
        'gender':'남자',
        'job':'programmer',
      },
      {
      
        'id':3,
        'image':'http://placeimg.com/64/64/any',
        'name':'홍길동2',
        'birthday':'19821112',
        'gender':'남자',
        'job':'programmer',
      }
      ]
     );
});

app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express!'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));