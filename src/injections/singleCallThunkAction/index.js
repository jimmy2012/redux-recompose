// eslint-disable-next-line no-empty-function
function singleCallThunkAction({ service, payload = () => {} }) {
  const selector = typeof payload === 'function' ? payload : () => payload;

  return {
    apiCall: getState => service(selector(getState())),
    determination: response => response.ok
  };
}

export default singleCallThunkAction;
