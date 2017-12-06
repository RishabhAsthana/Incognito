import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import './Header.css';

const Logo = () => (
    <div>
        Incognito
    </div>
)

class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item header><Logo/></Menu.Item>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} href="/" />
        <Menu.Item name='feed' active={activeItem === 'feed'} onClick={this.handleItemClick} href="/feed"/>
        <Menu.Item name='statistics' active={activeItem === 'statistics'} onClick={this.handleItemClick} href="/statistics" />
        <Menu.Item name='logout' position='right' active={activeItem === 'logout'} onClick={this.handleItemClick} href="/login" />        
      </Menu>    )
  }
}

export default Header;
