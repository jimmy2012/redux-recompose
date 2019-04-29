function baseThunkAction({
  type,
  target,
  service,
  payload = () => {}, // eslint-disable-line no-empty-function
  successSelector = response => response.data,
  failureSelector = response => response.problem
}) {
  const selector = typeof payload === 'function' ? payload : () => payload;

  return {
    prebehavior: dispatch => dispatch({ type, target }),
    apiCall: getState => service(selector(getState())),
    determination: response => response.ok,
    success: (dispatch, response) =>
      dispatch({ type: `${type}_SUCCESS`, target, payload: successSelector(response) }),
    failure: (dispatch, response) =>
      dispatch({ type: `${type}_FAILURE`, target, payload: failureSelector(response) })
  };
}

export default baseThunkAction;
