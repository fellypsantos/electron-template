export default function demonstration(state = {}, action) {
  switch (action) {
    case 'SHOW_MESSAGE':
      return { ...state, message: 'Message from demo reducer' };
    default:
      return state;
  }
}
