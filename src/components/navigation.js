import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../styles/navigation.scss';
import { getMenuList } from '../helpers/deriving';
import { Link } from 'react-router-dom';

const Navigation = props => {
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <Link to="/">
          <li className="nav-item logo">
            <img src="/images/logo.png" />
            <h3>HOME</h3>
          </li>
        </Link>
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
