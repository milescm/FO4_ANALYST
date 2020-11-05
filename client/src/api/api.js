import api from './apiUtil'

export const getManagerInfo = (managerName) => {
  return api.get(`/manager/userName=search?managerName=${managerName}`);
};