import { AnyAction } from 'redux';

/**
 * Lets you dispatch promises in addition to actions.
 */
export const promiseMiddleware = (store:any) => (next: any) => (action: AnyAction) => {

  if (!isPromise(action))
    return next(action);

  return Promise.resolve(action.payload)
    .then((payload) => store.dispatch({ ...action, payload: payload }))
    .catch((error) => console.error(error))
}

const isPromise = (action: AnyAction) => !!action.payload && typeof action.payload.then === 'function'
