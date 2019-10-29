import React from 'react';

const SearchPanel = () => {
  const text = 'Type here to search';
  const styles = {
    fontSize: '20px'
  }

  return <input style={ styles } placeholder={ text }></input>;
}

export default SearchPanel;
