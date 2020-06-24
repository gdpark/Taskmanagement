import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customer = [{
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

class App extends Component{
  render(){
    return(
      <div>
        {
          customer.map(c => {
            return(
              <Customer
              key={c.id}
              id={c.id}
              image ={c.image}
              name={c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}
              ></Customer>
            );
          })
        }
     </div>
    );
  }
}

export default App;
