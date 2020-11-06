import api from './apiUtil'

export const getManagerInfo = (managerName) => {
  return api.get(`/manager/userName=search?managerName=${managerName}`);
};

export const getCareerHighTier = (accessId) => {
  return api.get(`/manager/searchTier?accessId=${accessId}`);
};

// export const getManagerInfo = (managerName) => {
//   return api.get(`/manager/userName=search?managerName=${managerName}`);
// };
//
// export const getManagerInfo = (managerName) => {
//   return api.get(`/manager/userName=search?managerName=${managerName}`);
// };