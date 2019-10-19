import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getMenu } from '../actions/actions';

const Menu = props => {
  return (
    <div>
      <p>Hello</p>
      <button onClick={() => props.getMenu()}>Clik</button>
      {Object.entries(props.menu).length > 0 ? <p>Props</p> : <p>No Props</p>}
      {/* {props.getMenu()} */}
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
