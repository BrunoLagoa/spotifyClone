import api from "../../services/api";
import { call, put } from "redux-saga/effects";

import { Creators as AlbumsActions } from "../ducks/albums";

export function* getAlbums() {
  try {
    const response = yield call(api.get, "/albums");

    yield put(AlbumsActions.getAlbumsSuccess(response.data));
  } catch (err) {
    yield put(AlbumsActions.getAlbumsFailure("Erro ao buscar albums da api."));
  }
}
