import { put } from "redux-saga/effects";
import { getBranches } from '../service/fipeApi';

export function* getBranchesSaga() {
    // console.log("@guiamedico/sagas getProdutosSaga");

    try {
        const response = yield getBranches();
        yield put({ type: "GET_BRANCHES_SUCCESS", payload: response })
    } catch (err) {
        yield put({ type: "GET_BRANCHES_ERROR", payload: [] })
    }
}
