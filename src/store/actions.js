import { ActionTypes } from './types';

import axios from 'axios';

export const getCompetitionData = () => {
  return (dispatch) => {
    dispatch(getCompetitionRequest());

    axios
      .get(
        `https://storage.googleapis.com/static-production.netcosports.com/temp/serie_a_competition.json`
      )
      .then((res) => {
        dispatch(
          getCompetitionSuccess({
            teams: res.data.SoccerFeed.SoccerDocument.Team,
            teamRecord:
              res.data.SoccerFeed.SoccerDocument.Competition.TeamStandings
                .TeamRecord,
          })
        );
      })
      .catch((err) => {
        dispatch(getCompetitionFailure(err.message));
      });
  };
};

const getCompetitionSuccess = (data) => ({
  type: ActionTypes.GET_COMPETITION_SUCCESS,
  payload: {
    ...data,
  },
});

const getCompetitionRequest = () => ({
  type: ActionTypes.GET_COMPETITION_REQUEST,
});

const getCompetitionFailure = (error) => ({
  type: ActionTypes.GET_COMPETITION_FAILURE,
  payload: {
    error,
  },
});
