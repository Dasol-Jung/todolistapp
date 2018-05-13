import React from 'react'
import Logo from '../Logo/Logo'
import AppBar from 'material-ui/AppBar';

const toolBar = props =>{

    return(
        <AppBar
            title="Todolist for Celia"
            iconElementLeft={<span></span>}
            titleStyle={{textAlign:"center"}}            >
            <Logo/>
        </AppBar>
    );

}

export default toolBar;