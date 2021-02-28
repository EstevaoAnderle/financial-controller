import React from 'react';

export default function SearchDescription({ onChangeFilter, searchText }) {
  const handleChangeInput = (event) => {
    const inputText = event.target.value;
    onChangeFilter(inputText);
  };

  return (
    <input
      placeholder="Filtre a descrição do lançamento"
      type="text"
      value={searchText}
      onChange={handleChangeInput}
    />
  );
}
