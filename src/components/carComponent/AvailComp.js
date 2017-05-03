import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

// const Availablity = () => (
//   <div>
//     <Paper style={style}>
//       <Menu>
//         <MenuItem primaryText="12 - 1 PM" />
//         <MenuItem primaryText="1 - 2 PM" />
//         <MenuItem primaryText="2 - 3 PM" />
//         <MenuItem primaryText="3 - 4 PM" />
//         <MenuItem primaryText="5 - 6 PM" />
//         <MenuItem primaryText="6 - 7 PM" />
//         <MenuItem primaryText="7 - 8 PM" />
//         <MenuItem primaryText="8 - 9 PM" />
//       </Menu>
//     </Paper>
//     <Paper style={style}>
//       <Menu>
//         <MenuItem primaryText="Refresh" />
//         <MenuItem primaryText="Help &amp; feedback" />
//         <MenuItem primaryText="Settings" />
//         <MenuItem primaryText="Sign out" />
//       </Menu>
//     </Paper>
//   </div>
// );

// export default Availablity;

export default class Availablity extends React.Component {

	render () {
		return (
	    <div style={{float: 'left'}}>
	      <MuiThemeProvider>    
	        <RaisedButton label="Rent Car" primary={true} style={true} onClick={this.handleSubmit}/>
	      </MuiThemeProvider>
	    </div>
	    );
	}
}
