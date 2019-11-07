import React, { Component } from 'react';

import './search-panel.scss';

class SearchPanel extends Component {


  render() {
    return (
      <input type="text"
                className="form-control search-input"
                placeholder="type to search" />
    );
  }
}

export default SearchPanel;
