import React, { useEffect } from 'react';
import { ContentContainer } from '../../components/layout/LayoutComponents';
import { Table } from '../../components/tables/Table';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getCompetitionData } from '../../store/actions';
import filter from 'lodash/filter';
import { FilterDropdown } from '../../components/elements/dropdown/FilterDropdown';
import { device } from '../../styles/device';

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 30px;

  @media ${device.tablet} {
    flex-wrap: nowrap;
  }
`;

const H2 = styled.h2`
  margin: 0;
  text-transform: uppercase;
  margin-right: auto;
  width: 100%;

  @media ${device.tablet} {
    width: auto;
  }
`;

const TeamLogo = styled.img`
  max-width: 25px;
`;

const Team = styled.div`
  display: flex;
  align-items: center;
`;

const TeamName = styled.div`
  font-size: 0;

  @media ${device.mobileL} {
    margin-left: 4px;
    font-size: inherit;
  }
`;

const StandingsComponent = ({ getCompetitionData, data, currentTeam }) => {
  useEffect(() => {
    getCompetitionData();
  }, []);

  const dataForTable =
    data &&
    data.teams.map((item, index) => {
      const additionalData = filter(
        data.teamRecord,
        (record) => record['@attributes'].TeamRef === item['@attributes'].uID
      );

      const compData = {
        id: index,
        name: item.Name,
        ...additionalData[0].Standing,
      };

      compData.name === currentTeam
        ? (compData.active = true)
        : (compData.active = false);

      console.log('compData', compData);

      return compData;
    });

  return (
    <ContentContainer>
      <Header>
        <H2>Standings</H2>
        <FilterDropdown />
        <FilterDropdown />
        <FilterDropdown />
      </Header>
      <Table.Table>
        <tbody>
          <Table.Row>
            <Table.Th colSpan="2">Positions</Table.Th>
            <Table.Th>Pts.</Table.Th>
            <Table.Th>P.</Table.Th>
            <Table.Th>W.</Table.Th>
            <Table.Th>D.</Table.Th>
            <Table.Th>L.</Table.Th>
            <Table.Th>GF.</Table.Th>
            <Table.Th>GA.</Table.Th>
            <Table.Th>GD.</Table.Th>
          </Table.Row>
          {dataForTable &&
            dataForTable.map(
              ({
                Position,
                name,
                Points,
                Played,
                Won,
                Drawn,
                Lost,
                For,
                Against,
                active,
              }) => (
                <Table.Row className={active && 'active'}>
                  <Table.Td strong>{Position}</Table.Td>
                  <Table.Td strong>
                    <Team>
                      <TeamLogo
                        src="http://images.akamai.opta.net/football/team/badges_150/125.png"
                        alt=""
                      />
                      <TeamName>{name}</TeamName>
                    </Team>
                  </Table.Td>
                  <Table.Td strong>{Points}</Table.Td>
                  <Table.Td>{Played}</Table.Td>
                  <Table.Td>{Won}</Table.Td>
                  <Table.Td>{Drawn}</Table.Td>
                  <Table.Td>{Lost}</Table.Td>
                  <Table.Td>{For}</Table.Td>
                  <Table.Td>{Against}</Table.Td>
                  <Table.Td>{For - Against}</Table.Td>
                </Table.Row>
              )
            )}
        </tbody>
      </Table.Table>
    </ContentContainer>
  );
};

export const Standings = connect(
  (state) => ({
    data: state.data,
    currentTeam: state.currentTeam,
  }),
  {
    getCompetitionData,
  }
)(StandingsComponent);
