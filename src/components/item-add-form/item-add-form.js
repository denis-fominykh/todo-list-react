import React, { Component } from 'react';

import './item-add-form.scss';

class ItemAddForm extends Component {

  render() {
    return (
      <div className="item-add-form">
        <button className="btn btn-outline-secondary"
        onClick={ () => this.props.onItemAdded('hello world') }>
          Add Item
        </button>
      </div>
    )
  }

}

export default ItemAddForm;
