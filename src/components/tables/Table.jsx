import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/device';

const Table = {
  Table: styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 5px;
  `,
  Row: styled.tr`
    background: ${theme.colors.tableBackground};

    &:not(:first-child) {
      margin-bottom: 5px;
    }

    &.active {
      background: ${theme.colors.tableBackgroundActive};

      & th,
      td {
        color: ${theme.colors.tableTextActive};
      }
    }
  `,
  Th: styled.th`
    text-align: left;
    font-size: 11px;
    padding: 8px;

    @media ${device.mobileL} {
      padding: 14px 10px;
    }

    @media ${device.tablet} {
      padding: 18px 15px;
    }

    &:first-child {
      border-top-left-radius: 8.6px;
      border-bottom-left-radius: 8.6px;

      @media ${device.mobileL} {
        padding-left: 15px;
      }

      @media ${device.tablet} {
        padding-left: 30px;
      }
    }

    &:last-child {
      border-top-right-radius: 8.6px;
      border-bottom-right-radius: 8.6px;
    }
  `,
  Td: styled.td`
    font-size: 12px;
    border-left: 5px solid ${(props) => props.markColor || 'transperent'};
    font-weight: ${({ strong }) => (strong ? 'bold' : 'normal')};
    padding: 8px;

    @media ${device.mobileL} {
      padding: 14px 10px;
    }

    @media ${device.tablet} {
      padding: 18px 15px;
    }

    &:first-child {
      border-top-left-radius: 8.6px;
      border-bottom-left-radius: 8.6px;

      @media ${device.mobileL} {
        padding-left: 15px;
      }

      @media ${device.tablet} {
        padding-left: 30px;
      }
    }

    &:last-child {
      border-top-right-radius: 8.6px;
      border-bottom-right-radius: 8.6px;
    }
  `,
};

export { Table };
