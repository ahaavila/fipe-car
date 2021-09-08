export const GET_BRANCHES = "GET_BRANCHES";
export const GET_BRANCHES_SUCCESS = "GET_BRANCHES_SUCCESS";
export const GET_BRANCHES_ERROR = "GET_BRANCHES_ERROR";

export const getBranches = () => ({ type: GET_BRANCHES });

export interface GuiaMedicoState {
  isGettingBranches: boolean,
  BranchesList: Array<{ nome: string, codigo: number }>,
}