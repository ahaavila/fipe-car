import * as types from '../types';

const initialState = {
  branches: [],
  loadingBranches: false,
  errorLoadingBranches: null,

  models: [],
  loadingModels: false,
  errorLoadingModels: null,

  years: [],
  loadingYears: false,
  errorLoadingYears: null,

  price: [],
  loadingPrice: false,
  errorLoadingPrice: null,

  vehicle: {
    brand: {
      nome: '',
      codigo: 0,
    },
    model: {
      nome: '',
      codigo: 0,
    },
    year: {
      nome: '',
      codigo: 0,
    }
  },
  loadingVehicle: false,
  errorLoadingVehicle: null,
}

export const branchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BRANCHES:
      return {
        ...state,
        branches: action.payload,
        loadingBranches: false,
        errorLoadingBranches: null,
      }
    case types.GET_MODELS:
      return {
        ...state,
        models: action.payload,
        loadingModels: false,
        errorLoadingModels: null,
      }
    case types.GET_YEARS:
      return {
        ...state,
        years: action.payload,
        loadingYears: false,
        errorLoadingYears: null,
      }
    case types.GET_VEHICLE: 
      return {
        ...state,
        price: action.payload,
        loadingPrice: false,
        errorLoadingPrice: null,
      }
    case types.SET_VEHICLE:
      return {
        ...state,
        vehicle: action.payload,
        loadingVehicle: false,
        errorLoadingVehicle: null,
      }
    default:
      return state
  }
}