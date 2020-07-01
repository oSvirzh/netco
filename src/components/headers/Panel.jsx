import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Menu } from '../../assets/images/icons/menu.svg';
import { ReactComponent as Search } from '../../assets/images/icons/search.svg';
import { ReactComponent as Profile } from '../../assets/images/icons/profile.svg';
import { LangDropdown } from '../elements/dropdown/LangDropdown';
import { device } from '../../styles/device';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 50%;
  order: -1;

  @media ${device.tabletL} {
    order: 0;
  }
`;

const Hamburger = styled.div`
  margin-right: 40px;
`;

const Item = styled.div`
  &:not(:last-child) {
    margin-right: 25px;
  }
`;

const Panel = () => (
  <Wrapper>
    <Hamburger>
      <Menu />
    </Hamburger>
    <Item>
      <Search />
    </Item>
    <Item>
      <Profile />
    </Item>
    <Item>
      <LangDropdown />
    </Item>
  </Wrapper>
);

export { Panel };
