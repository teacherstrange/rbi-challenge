import React from 'react';
import { connect } from 'react-redux';
import { getMenu, getSections, getItems } from '../actions/actions';
import Items from './items';

const DrinksCoffee = props => {
  return (
    <>
      {
        (window.onload = () => {
          props.getMenu();
          props.getItems();
          return props.getSections();
        })
      }
      <Items sectionId="section_5599" />
    </>
  );
};

export default connect(
  null,
  { getItems, getMenu, getSections }
)(DrinksCoffee);
