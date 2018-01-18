import React, { PropTypes as T } from 'react';

import styles from './styles.module.css';

export class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    };
  }

  render() {
    const { place } = this.props;
    return (
      <div
        onClick={() => this.props.onClick(place.place_id)}
        className='item'
      >
        <h5>{place.name}</h5>
      </div>
    );
  }
}

export default Item;