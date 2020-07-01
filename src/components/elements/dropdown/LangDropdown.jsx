import React from 'react';
import styled from 'styled-components';
import flag from '../../../assets/images/icon-flag.png';
import { Dropdown } from './Dropdown';

const FlagIcon = styled.img`
  max-height: 17px;
  margin-right: 5px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 10px;
  text-transform: uppercase;
  font-size: 12px;
`;

const countryList = [{ name: 'Eng' }, { name: 'Ru' }, { name: 'Ua' }];

const itemRenderer = ({ name }) => (
  <Item>
    <FlagIcon src={flag} />
    <span>{name}</span>
  </Item>
);

const LangDropdown = () => (
  <Dropdown itemRenderer={itemRenderer} items={countryList}></Dropdown>
);

export { LangDropdown };
