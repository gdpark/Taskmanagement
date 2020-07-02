import React from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles } from '@material-ui/core/styles';
import CustomerDelete from './CustomerDelete';

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

class Customer extends React.Component {

//   constructor(props){
//     super(props);
//     this.state = {
//     }
// }
 
    render(){

        return(
               <StyledTableRow key={this.props.id}>
               <StyledTableCell  align="center">{this.props.id}</StyledTableCell >
               <StyledTableCell  align="center"><img src={this.props.image} alt="profile"></img></StyledTableCell >
               <StyledTableCell  align="center">{this.props.name}</StyledTableCell >
               <StyledTableCell  align="center">{this.props.birthday}</StyledTableCell >
               <StyledTableCell  align="center">{this.props.gender}</StyledTableCell >
               <StyledTableCell  align="center">{this.props.job}</StyledTableCell >
               <StyledTableCell><CustomerDelete  stateRefresh = {this.props.stateRefresh} id={this.props.id}/></StyledTableCell>
               </StyledTableRow>
          
        );
    }
    
}

export default Customer;