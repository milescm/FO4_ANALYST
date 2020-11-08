import api from './apiUtil'

export const getManagerInfo = (managerName) => {
  return api.get(`/manager/userName=search?managerName=${managerName}`);
};

export const getCareerHighTier = (accessId) => {
  return api.get(`/manager/searchTier?accessId=${accessId}`);
};

export const getMatchID = (accessId) => {
  return api.get(`/manager/getMatchID?accessId=${accessId}`);
};

export const getMatchData = (matchID) => {
  return api.get(`/manager/getMatchData?matchID=${matchID}`);
};

