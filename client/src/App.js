import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import TableContainer from '@material-ui/core/TableContainer';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
  
})

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


class App extends Component{

  state ={
    customers: ""
  }

  componentDidMount(){
    this.callApi()
    .then(res=> this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render(){

    const {classes} = this.props;

    return(
      <TableContainer component={Paper}>
        <Table className = {classes.table} aria-label="simple table">
          <TableHead>
            <StyledTableCell align="center">번호</StyledTableCell>
            <StyledTableCell align="center">이미지</StyledTableCell>
            <StyledTableCell align="center">이름</StyledTableCell>
            <StyledTableCell align="center">생년월일</StyledTableCell>
            <StyledTableCell align="center">성별</StyledTableCell>
            <StyledTableCell align="center">직업</StyledTableCell>
          </TableHead>
          <TableBody> {
          this.state.customers ? this.state.customers.map(c => {
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
          }) : ""
        }
        </TableBody>
       
        </Table>
     
     </TableContainer>
    );
  }
}

export default withStyles(styles)(App);
