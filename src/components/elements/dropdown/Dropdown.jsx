import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const DropdownContainer = styled.div`
  position: relative;
`;

const DropDownHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-right: 10px;
  cursor: pointer;
  font-size: 12px;
  color: ${theme.colors.activeTextColor};

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: calc(50% - 5px);
    display: block;
    width: 5px;
    height: 5px;
    border-left: 2px solid
      ${(props) => (props.arrowColor ? props.arrowColor : 'currentColor')};
    border-bottom: 2px solid
      ${(props) => (props.arrowColor ? props.arrowColor : 'currentColor')};
    transform: rotate(-45deg);
  }

  &:hover {
    opacity: 0.7;
  }
`;

const DropDownListContainer = styled.div`
  z-index: 2;
  position: absolute;
  top: 100%;
  margin-top: 5px;
  cursor: pointer;
  background: ${theme.colors.dropdownBackground};
`;

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  opacity: 0.9;

  &:hover {
    opacity: 0.7;
  }
`;

const Dropdown = ({ itemRenderer, arrowColor, items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(1);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <DropdownContainer>
      <DropDownHeader onClick={toggling} arrowColor={arrowColor}>
        {itemRenderer(items[currentItem])}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {items.map((item, index) => (
              <ListItem
                onClick={() => {
                  setCurrentItem(index);
                  toggling();
                }}
              >
                {itemRenderer(item)}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropdownContainer>
  );
};

export { Dropdown };
