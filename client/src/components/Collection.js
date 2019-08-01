import React from 'react';
import CollectionItem from './CollectionItem.js';

const Collection = (props) => {
  return (
    <div className="container" id="collection">
      {props.collection.map((image, i) =>
        <CollectionItem image={image} key={i}/>
      )}
    </div>
  )
};

export default Collection;