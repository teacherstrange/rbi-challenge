import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getMenuList } from '../helpers/deriving';
import { Link } from 'react-router-dom';

const ComboMeals = props => {
  return (
    <div>
      <h>Meals</h>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    sections: state.sections
  };
};

export default connect(
  mapStateToProps,
  {}
)(ComboMeals);
