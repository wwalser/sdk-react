import keyMirror from 'keymirror';

const actions = keyMirror({
  SET: null,
  NEXT: null,
  PREV: null,
});

// List of the keys to use as react proptyes check
const actionKeys = Object.keys(actions);

actions.list = actionKeys;

export default actions;
