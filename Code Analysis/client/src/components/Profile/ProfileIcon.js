import React from 'react';
import { 
	Dropdown, 
	DropdownToggle, 
	DropdownMenu, 
	DropdownItem } 
from 'reactstrap';
import './ProfileIcon.css';


class ProfileIcon extends React.Component {
	constructor(props) {
		super(props);
		// this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen:false
		}
	}

	toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

	render(){
		return(
			<div className ="pa2 tc">
				<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
			            <DropdownToggle
					          tag="span"
					          // onClick={this.toggle}
					          data-toggle="dropdown"
					          aria-expanded={this.state.dropdownOpen}
					        ><img  src="http://tachyons.io/img/logo.jpg"
								  className="br-100 ba h3 w3 dib" alt="avatar" />
					        </DropdownToggle>
			        <DropdownMenu
			        right 
			        className='b--transparent shadow-5' 
			        style={{marginTop: '20px', backgroundColor: 'rgba(255,255,255,0.5)'}}>
			          <DropdownItem onClick = {this.props.toggleModal}>Update Profile</DropdownItem>
			          <DropdownItem onClick = {() => this.props.onRouteChange('signout')} >Sign Out</DropdownItem>
			        </DropdownMenu>
			      </Dropdown>

			</div>
			);
	}
}

export default ProfileIcon;