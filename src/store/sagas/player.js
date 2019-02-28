import { call, put } from "redux-saga/effects";
import RNSound from "react-native-sound/sound";

import { Creators as PlayerActions } from "../../store/ducks/player";

const Sound = new RNSound();

export function* play() {
  try {
    yield call(Sound.play);
  } catch (err) {
    console.log(err);
  }
}

export function* setSong(action) {
  try {
    if (Sound.isLoaded()) yield call(Sound.release);

    yield call(Sound.init, action.payload.song.file);
    yield call(play);

    yield put(PlayerActions.setSongSuccess(action.payload.song));
  } catch (err) {
    yield put(PlayerActions.setSongFailure("Erro ao iniciar música"));
  }
}
