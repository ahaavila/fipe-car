import * as types from '../types';
import { api } from '../../service/api';
import { vehicleInterface } from '../../utils/interface';

export const fetchBranches = () => async dispatch => {
  const response = await api.get('/carros/marcas');  
  dispatch({
    type: types.GET_BRANCHES,
    payload: response.data
  })
}

export const fetchModels = (branchId: string) => async dispatch => {
  const response = await api.get(`/carros/marcas/${branchId}/modelos`);
  dispatch({
    type: types.GET_MODELS,
    payload: response.data.modelos
  })
}

export const fetchYears = (branchId: string, modelId: string) => async dispatch => {
  const response = await api.get(`/carros/marcas/${branchId}/modelos/${modelId}/anos`);
  dispatch({
    type: types.GET_YEARS,
    payload: response.data
  });
}

export const setVehicle = (data: vehicleInterface) => async dispatch => {
  dispatch({
    type: types.SET_VEHICLE,
    payload: {
      brand: data.brand,
      model: data.model,
      year: data.year,
    }
  })
}

export const fetchVehicle = (data: vehicleInterface) => async dispatch => {
  const response = await api.get(`/carros/marcas/${data.brand.codigo}/modelos/${data.model.codigo}/anos/${data.year.codigo}`);
  console.log(response);
  
  dispatch({
    type: types.GET_VEHICLE,
    payload: response.data
  })
}
