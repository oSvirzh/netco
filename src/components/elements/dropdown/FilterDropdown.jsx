import React from 'react';
import styled from 'styled-components';
import { Dropdown } from './Dropdown';
import { theme } from '../../../styles/theme';
import { device } from '../../../styles/device';

const Item = styled.div`
  font-size: 14px;
  padding: 5px 10px 4px 10px;
  color: ${theme.colors.baseTextColor};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px ${theme.colors.baseBorderColor};
  border-radius: 15px;
  padding-right: 10px;
  margin-top: 15px;

  &:not(:last-child) {
    margin-right: 30px;
  }

  @media ${device.tablet} {
    margin-top: 0;
  }
`;

const countryList = [
  { name: 'Filter text' },
  { name: 'Second filter text' },
  { name: 'Second filter text' },
];

const itemRenderer = ({ name }) => <Item>{name}</Item>;

const FilterDropdown = () => (
  <Wrapper>
    <Dropdown
      itemRenderer={itemRenderer}
      items={countryList}
      arrowColor={theme.colors.baseBorderColor}
    />
  </Wrapper>
);

export { FilterDropdown };
