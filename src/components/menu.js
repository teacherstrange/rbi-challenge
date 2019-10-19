import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getMenu } from '../actions/actions';

const Menu = props => {
  return (
    <div>
      <p>Hello</p>
      {props.getMenu()}
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
  { getMenu }
)(Menu);
