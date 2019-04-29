// eslint-disable-next-line no-empty-function
function emptyThunkAction({ type, service, payload = () => {} }) {
  const selector = typeof payload === 'function' ? payload : () => payload;

  return {
    prebehavior: dispatch => dispatch({ type }),
    apiCall: getState => service(selector(getState())),
    determination: response => response.ok
  };
}

export default emptyThunkAction;
