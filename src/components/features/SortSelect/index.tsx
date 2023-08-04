import React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import Select, { StylesConfig, ActionMeta, OnChangeValue } from 'react-select';
import { setSortBy } from '@/store/slices/products/productsSlice';
type Option = {
  value: string;
  label: string;
};

type CustomStyles = StylesConfig<Option, boolean> & {
  [key: string]: any;
};

const SortSelect = () => {
  const selectOptions: Option[] = [
    { value: 'none', label: 'No Sort' },
    { value: 'name', label: 'Name' },
    { value: 'rating', label: 'Rating' },
    { value: 'latest', label: 'Newest' },
    { value: 'high-to-low', label: 'By price: high to low' },
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

  const dispatch = useAppDispatch();

  const { sortBy } = useAppSelector((state) => state.products);
  const handleSelectionChange = (selectedOption: OnChangeValue<Option, boolean>) => {
    if (selectedOption) {
      const value = (selectedOption as Option).value;
      dispatch(setSortBy(value));
    }
  };

  return (
    <Select
      styles={customStyles}
      options={selectOptions}
      value={selectOptions.find((option) => option.value === sortBy)}
      onChange={handleSelectionChange}
      placeholder="Sort by..."
    />
  );
};

export default SortSelect;
