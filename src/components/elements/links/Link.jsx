import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Link = styled.a`
  position: relative;
  display: block;
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: none;
  color: ${theme.colors.link};
  padding: 10px 0;
  
  &:hover {
  opacity: 0.8;
  }

  ${(props) =>
    props.disabled && {
      opacity: '0.4',
    }}

  ${(props) =>
    props.active && {
      '&:after': {
        content: `''`,
        display: 'flex',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        height: '2px',
        width: '50%',
        maxWidth: '100%',
        backgroundColor: theme.colors.link,
      },
    }};
`;

export { Link };
