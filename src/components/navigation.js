import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Navigation = props => {
  return (
    <div>
      <ul>
        <li>HOME</li>
        {Object.entries(props.menu).length > 0 &&
        Object.entries(props.sections).length > 0 ? (
          props.menu.options.map(item => {
            return (
              <li>
                {props.sections.map(el => {
                  if (el['_id'] === item['_ref']) {
                    return el.name.en;
                  }
                })}
              </li>
            );
          })
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
