import * as types from '../types';
import { api } from '../../service/api';

export const fetchBranches = () => async dispatch => {
  const response = await api.get('/carros/marcas');  
  dispatch({
    type: types.GET_BRANCHES,
    payload: response.data
  })
}

export const fetchModels = (branchId: number) => async dispatch => {
  const response = await api.get(`/carros/marcas/${branchId}/modelos`);
  dispatch({
    type: types.GET_MODELS,
    payload: response.data.modelos
  })
}

export const fetchYears = (branchId: number, modelId: number) => async dispatch => {
  const response = await api.get(`/carros/marcas/${branchId}/modelos/${modelId}/anos`);
  dispatch({
    type: types.GET_YEARS,
    payload: response.data
  });
}