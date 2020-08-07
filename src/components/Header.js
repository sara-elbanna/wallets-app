import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

class Header extends React.Component{

    render(){
        return <div>
                <Menu mode="horizontal">
                    <Menu.Item key="home" >
                        
                    </Menu.Item>
                    <Menu.Item key="wallets" >
                       <Link to='/'>
                            Wallets
                       </Link> 
                    </Menu.Item>
                    <Menu.Item key="currencies" >
                        <Link to='/currencies'>
                            Currencies
                       </Link> 
                        
                    </Menu.Item>
                </Menu>
        </div>
    }
}

export default Header