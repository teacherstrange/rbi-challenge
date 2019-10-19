import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Navigation = props => {
  return (
    <div>
      <ul>
        <li>Home</li>
        {Object.entries(props.menu).length > 0 ? (
          props.menu.options.map(opt => <p>{opt['_ref']}</p>)
        ) : (
          <></>
        )}
      </ul>
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
  {}
)(Navigation);
