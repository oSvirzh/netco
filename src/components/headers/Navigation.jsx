import React from 'react';
import styled from 'styled-components';
import { Link } from '../elements/links/Link';
import { SocialLinks } from './Social';
import { Panel } from './Panel';
import { device } from '../../styles/device';

const Menu = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media ${device.mobileL} {
    justify-content: flex-end;
    flex-direction: row;
  }
`;

const Item = styled.li`
  display: block;

  @media ${device.mobileL} {
    &:not(:first-child) {
      margin-left: 30px;
    }
  }
`;

const LogoWrapper = styled.div`
  display: block;
  max-width: 50px;
  flex: 1 0 auto;
`;

const Logo = styled.img`
  width: 100%;
`;

const Nav = styled.nav`
  flex: 1 1 calc(50% - 50px);
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  padding: 20px;
  margin: auto;

  @media ${device.tablet} {
    padding: 21px 70px;
  }
`;

const Navigations = () => (
  <Container>
    <SocialLinks />
    <Panel />
    <LogoWrapper>
      <Logo
        src="http://images.akamai.opta.net/football/team/badges_150/125.png"
        alt=""
      />
    </LogoWrapper>
    <Nav>
      <Menu>
        <Item>
          <Link href="#">Tickets</Link>
        </Item>
        <Item>
          <Link href="#" active>
            Season
          </Link>
        </Item>
        <Item>
          <Link href="#">Medias</Link>
        </Item>
        <Item>
          <Link href="#">Team</Link>
        </Item>
        <Item>
          <Link href="#">Club</Link>
        </Item>
        <Item>
          <Link href="#">Inviola</Link>
        </Item>
        <Item>
          <Link href="#">Shop</Link>
        </Item>
      </Menu>
    </Nav>
  </Container>
);

export { Navigations };
