import React from 'react';
import mui from 'material-ui';
import  Paper  from 'material-ui/Paper';
import * as PropTypes from "react/lib/ReactPropTypes";
import PostItStore from '../../stores/PostItStore'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashContainer from '../DashContainer.js';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Redirect } from 'react-router-dom'


const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    body: {
        backgroundColor: '#edecec',
        display: 'flex',
        flex: 1,
        overflow: 'hidden',
    },
    content: {
        flex: 1,
        padding: '2em',
    },
};

class Dashboard extends React.Component {
	constructor(props){
    super(props);
    this.state = {
      isAuthenticated: PostItStore.getIsAuthenticated()
    }
  }

  componentWillMount ()  {
     PostItStore.addChangeListener(this._onChange);
  }


  componentWillUnmount () {
    PostItStore.removeChangeListener(this._onChange);
  }

  
    
    render() {
      if (this.state.isAuthenticated == false) {
            return (
                <Redirect to="/signin"/>
            )
        }
        else {

            return (
                  <div style={{
          display: 'flex',
          flexFlow: 'row wrap',
          maxWidth: 1200,
          width: '100%',
          margin: '30px auto 30px'
        }}>
      <MuiThemeProvider>
        <DashContainer />
      </MuiThemeProvider>
      </div>
    );
  }

}
_onChange(){
        this.setState({
          isAuthenticated: PostItStore.getIsAuthenticated()
        });
      
    } 
 
  
}
Dashboard.propTypes = {
    isAuthenticated: PropTypes.bool
};
export default Dashboard;
