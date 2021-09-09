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
    default:
      return state
  }
}