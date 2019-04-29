import mergeInjections from '../mergeInjections';

function composeInjections(...injections) {
  const injectionsDescription = mergeInjections(injections);

  const {
    prebehavior = () => {}, // eslint-disable-line no-empty-function
    apiCall = () => {}, // eslint-disable-line no-empty-function
    determination = () => true,
    success = () => true,
    postSuccess = () => {}, // eslint-disable-line no-empty-function
    postBehavior = () => {}, // eslint-disable-line no-empty-function
    postFailure = () => {}, // eslint-disable-line no-empty-function
    failure = () => {}, // eslint-disable-line no-empty-function
    statusHandler = () => true
  } = injectionsDescription;

  return async (dispatch, getState) => {
    prebehavior(dispatch);
    const response = await apiCall(getState);
    postBehavior(dispatch, response);
    if (determination(response)) {
      const shouldContinue = success(dispatch, response, getState());
      if (shouldContinue) {
        postSuccess(dispatch, response, getState());
      }
    } else {
      const shouldContinue = statusHandler(dispatch, response, getState());
      if (shouldContinue) {
        failure(dispatch, response, getState());
        postFailure(dispatch, response, getState());
      }
    }
  };
}

export default composeInjections;
