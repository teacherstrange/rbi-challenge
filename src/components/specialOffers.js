import React from 'react';
import { connect } from 'react-redux';
import { getMenu, getSections, getItems } from '../actions/actions';
import Items from './items';

const SpecialOffers = props => {
  return (
    <>
      {
        (window.onload = () => {
          props.getMenu();
          props.getItems();
          return props.getSections();
        })
      }
      <Items sectionId="f509ca10-85d9-4ad2-842e-3279195e4912" />
    </>
  );
};

export default connect(
  null,
  { getItems, getMenu, getSections }
)(SpecialOffers);
