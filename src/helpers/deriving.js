import React from 'react';
import { Link } from 'react-router-dom';
// Takes in a reference string from sections "db" and
// manipulates it in a way to make it look like a valid image name.
export const deriveSectionImage = str => {
  let arr = str.split('-');
  return arr[1] + '-' + arr[2] + '.' + arr[3];
};

// Returns a <li> list of menu items w/ name and image
export const getMenuList = (sections, menuOptions, cssClass) => {
  return menuOptions.map(item => {
    return sections.map(el => {
      if (el['_id'] === item['_ref']) {
        return (
          <Link to={`/`}>
            <li className={cssClass}>
              <img
                src={`/images/${deriveSectionImage(el.image.asset['_ref'])}`}
                alt={`Image of ${el.name.en}`}
              />
              <h3>{el.name.en}</h3>
            </li>
          </Link>
        );
      }
    });
  });
};
