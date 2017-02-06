import React from 'react';


class Header extends React.Component{
  render() {
    return (
    <div className="layout-menu-user blog_header">
        <div className="user_message">
        </div>
    </div>
    );
  }
}

Header.propTypes = {router: React.PropTypes.object.isRequired}
export default Header;
