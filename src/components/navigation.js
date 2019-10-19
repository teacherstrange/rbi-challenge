import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import "../../public/images"

const Navigation = props => {
  return (
    <div>
      <ul>
        <li>
          <img src="" />
          <h3>HOME</h3>
        </li>
        {Object.entries(props.menu).length > 0 &&
        Object.entries(props.sections).length > 0 ? (
          props.menu.options.map(item => {
            return props.sections.map(el => {
              if (el['_id'] === item['_ref']) {
                return (
                  <li>
                    <img
                      src={`/images/${deriveSectionImage(
                        el.image.asset['_ref']
                      )}`}
                    />
                    <h3>{el.name.en}</h3>
                  </li>
                );
              }
            });
          })
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

// Takes in a reference string from sections "db" and
// manipulates it in a way to make it look like a valid image name.
const deriveSectionImage = str => {
  let arr = str.split('-');
  return arr[1] + '-' + arr[2] + '.' + arr[3];
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
