import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Link } from '../elements/links/Link';
import React from 'react';

const Container = styled.nav`
  display: flex;
  background-color: ${theme.colors.subheader};
`;

const Menu = styled.ul`
  box-sizing: content-box;
  display: flex;
  width: 100%;
  max-width: 920px;
  margin: auto;
  padding: 0 15px;
`;

const Item = styled.li`
  display: block;

  &:not(:first-child) {
    margin-left: 30px;
  }
`;

const Subheader = () => (
  <Container>
    <Menu>
      <Item>
        <Link disabled href="#">
          Calendar & Results
        </Link>
      </Item>
      <Item>
        <Link active href="#">
          Standings
        </Link>
      </Item>
    </Menu>
  </Container>
);

export { Subheader };
