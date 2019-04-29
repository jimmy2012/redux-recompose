import externalBaseAction from '../injections/externalBaseAction';
import baseThunkAction from '../injections/baseThunkAction';
import emptyThunkAction from '../injections/emptyThunkAction';
import singleCallThunkAction from '../injections/singleCallThunkAction';
import composeInjections from '../injections/composeInjections';
import mergeInjections from '../injections/mergeInjections';

const ensembleInjections = action => {
  let base = null;
  switch (true) {
    case action.external:
      base = externalBaseAction(action);
      break;
    case !action.type:
      base = singleCallThunkAction(action);
      break;
    case action.target:
      base = baseThunkAction(action);
      break;
    default:
      base = emptyThunkAction(action);
      break;
  }

  if (!action.injections) {
    return base;
  }
  const injections =
    action.injections.constructor === Array ? mergeInjections(action.injections) : action.injections;

  return { ...base, ...injections };
};

const fetchMiddleware = ({ dispatch }) => next => action =>
  action.service ? dispatch(composeInjections(ensembleInjections(action))) : next(action);
export default fetchMiddleware;
