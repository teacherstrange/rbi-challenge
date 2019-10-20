import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../styles/navigation.scss';
import { getMenuList } from '../helpers/deriving';
import { NavLink } from 'react-router-dom';

const Navigation = props => {
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <NavLink activeClassName="current" exact to="/">
          <li className="nav-item logo">
            <img src="/images/logo.png" alt="Burger King Logo" />
            <h3>HOME</h3>
          </li>
        </NavLink>
        {Object.entries(props.menu).length > 0 &&
        Object.entries(props.sections).length > 0 ? (
          getMenuList(props.sections, props.menu.options, 'nav-item')
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    menu: state.menu,
    sections: state.sections
  };
};

export default connect(
  mapStateToProps,
  {}
)(Navigation);
