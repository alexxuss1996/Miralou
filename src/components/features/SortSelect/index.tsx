import React from 'react';
import Select, { StylesConfig } from 'react-select';
type Option = {
  value: string;
  label: string;
};

type CustomStyles = StylesConfig<Option, boolean> & {
  [key: string]: any;
};

const SortSelect = () => {
  const selectOptions: Option[] = [
    { value: 'name', label: 'Name' },
    { value: 'rating', label: 'Rating' },
    { value: 'newest', label: 'Newest' },
    { value: 'high-to-low', label: 'By price: high to low' },
    { value: 'low-to-high', label: 'By price: low to high' },
  ];
  const customStyles: CustomStyles = {
    control: (provided, state) => ({
      ...provided,
      height: '100%',
      backgroundColor: state.isFocused ? '#fafafa' : '#f8f8f5',
      fontSize: '16px',
      padding: '8px 24px',
      width: '260px',
      fontWeight: 'light',
      border: 'none',
      borderRadius: 0,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'lightgray' : 'white',
      color: '#0c0c0c',
      padding: '8px 24px',
      fontSize: '16px',
      width: '260px',
      borderRadius: 0,
      fontWeight: 'light',
      '&:hover': { backgroundColor: 'lightgray' },
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: 0,
      marginTop: '1px',
      zIndex: '100',
    }),
    menuList: (provided) => ({
      ...provided,
      padding: 0,
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.isFocused ? '#333' : '#909090',
      transitionDuration: '300ms',
      transitionTimingFunction: 'ease-in-out',
      transitionProperty: 'transform',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : undefined,
      '& svg': {
        strokeWidth: '.1px',
        width: '24px',
        height: '24px',
      },
      '&:hover': {
        color: 'black',
      },
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: '0c0c0c',
    }),
  };

  return <Select styles={customStyles} options={selectOptions} placeholder="Sort by..." />;
};

export default SortSelect;
