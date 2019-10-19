import React from 'react';
import { connect } from 'react-redux';
import { getMenu, getSections, getItems } from '../actions/actions';
import { Link } from 'react-router-dom';
import { deriveSectionImage } from '../helpers/deriving';

const ComboMeals = props => {
  return (
    <div className="sections-main">
      {
        (window.onload = () => {
          props.getMenu();
          props.getItems();
          return props.getSections();
        })
      }
      {props.items.length > 0 && props.sections.length > 0 ? (
        props.sections
          .find(sect => sect['_id'] === 'f1a1695f-3af4-461c-96a0-4e98bff7e716')
          .options.map(opt =>
            props.items.map(item => {
              if (item['_id'] === opt['_ref'])
                return (
                  //   do LINK later
                  <Link to={`/`}>
                    <li className="main-item">
                      <img
                        src={`/images/${deriveSectionImage(
                          item.image.asset['_ref']
                        )}`}
                        alt={`Image of ${item.name.en}`}
                      />
                      <h3>{item.name.en}</h3>
                    </li>
                  </Link>
                );
            })
          )
      ) : (
        <h4>Loading...</h4>
      )}

      {/* {props.items.length > 0 ? (
        menuOptions.map(item => {
          return sections.map(el => {
            if (el['_id'] === item['_ref']) {
              return (
                <Link to={`/${getURLname(el.name.en)}`}>
                  <li className={cssClass}>
                    {cssClass !== 'nav-item' ? (
                      <img
                        src={`/images/${deriveSectionImage(
                          el.image.asset['_ref']
                        )}`}
                        alt={`Image of ${el.name.en}`}
                      />
                    ) : (
                      <img
                        src={`/images/${deriveSectionImage(
                          el.carouselImage.asset['_ref']
                        )}`}
                        alt={`Image of ${el.name.en}`}
                      />
                    )}
                    <h3>{el.name.en}</h3>
                  </li>
                </Link>
              );
            }
          });
        })
      ) : (
        <h4>Loading...</h4>
      )} */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items: state.items,
    sections: state.sections
  };
};

export default connect(
  mapStateToProps,
  { getItems, getMenu, getSections }
)(ComboMeals);
