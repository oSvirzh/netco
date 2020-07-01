import React from 'react';
import { Navigations } from '../headers/Navigation';
import { Subheader } from '../headers/Subheader';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const CommonLayout = ({ children }) => (
  <>
    <Header>
      <Navigations/>
      <Subheader />
    </Header>
    <ContentWrapper>{children}</ContentWrapper>
  </>
);

const ContentWrapper = styled.div`
  background-color: ${theme.colors.baseBodyColor};
`;

const Header = styled.header`
  background-color: ${theme.colors.header};
`;

export { CommonLayout };
