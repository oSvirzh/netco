import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Facebook } from '../../assets/images/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/images/icons/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/images/icons/twitter.svg';
import { ReactComponent as Youtube } from '../../assets/images/icons/youtube.svg';
import { ReactComponent as Twitch } from '../../assets/images/icons/twitch.svg';
import mediacom from '../../assets/images/logo-mediacom.png';
import { theme } from '../../styles/theme';
import { device } from '../../styles/device';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
  flex-basis: 50%;
  order: 1;

  @media ${device.tabletL} {
    flex-basis: 100%;
  }

  @media ${device.mobileL} {
    order: 0;
  }
`;

const SocialList = styled.div`
  display: flex;
  align-items: center;
  border-right: solid 1px rgba(255, 255, 255, 0.4);
`;

const Link = styled.a`
  display: flex;
  color: ${theme.colors.link};
  margin-right: 20px;

  &:not(:hover) {
    opacity: 0.4;
  }
`;

const MediacomLogo = styled.img`
  max-height: 18px;
  margin-left: 20px;
`;

const SocialLinks = () => (
  <Wrapper>
    <SocialList>
      <Link href="#">
        <Facebook />
      </Link>
      <Link href="#">
        <Instagram />
      </Link>
      <Link href="#">
        <Twitter />
      </Link>
      <Link href="#">
        <Youtube />
      </Link>
      <Link href="#">
        <Twitch />
      </Link>
    </SocialList>
    <MediacomLogo src={mediacom} />
  </Wrapper>
);

export { SocialLinks };
