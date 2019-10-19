import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getMenu, getSections } from '../actions/actions';
import { getMenuList } from '../helpers/deriving';

const Menu = props => {
  return (
    <div>
      {
        (window.onload = () => {
          props.getMenu();
          return props.getSections();
        })
      }
      <p>Hello</p>

      {Object.entries(props.menu).length > 0 &&
      Object.entries(props.sections).length ? (
        getMenuList(props.sections, props.menu.options, 'nav-item')
      ) : (
        <p>No Props</p>
      )}
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
  { getMenu, getSections }
)(Menu);
