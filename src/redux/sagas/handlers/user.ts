import { call, put } from "redux-saga/effects";
import { setUser } from "../../ducks/user";
import { requestGetUser } from "../requests/user";


export function* handleGetUser( ) {
  try {
    const { data }= yield call(requestGetUser);
    yield put(setUser(data));

  } catch (error) {
    console.log(error)
  }
}