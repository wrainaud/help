import React from 'react'
import Item from './Item'
import styles from './styles.module.css'
import Detail from '../Detail/Detail';

export class Listing extends React.Component {
  render() {
    return (
      <div className="container">
        <Item detail={Detail} key={this.props.place.id} />
      </div>
    )
  }
}

export default Listing
