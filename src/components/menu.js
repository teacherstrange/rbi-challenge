import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getMenu, getSections } from '../actions/actions';

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
      {Object.entries(props.menu).length > 0 ? <p>Props</p> : <p>No Props</p>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    menu: state.menu
  };
};

export default connect(
  mapStateToProps,
  { getMenu, getSections }
)(Menu);
