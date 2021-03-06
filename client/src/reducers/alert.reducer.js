import { alertConstants } from '../constants';

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.payload.message
      };
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.payload.message
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}