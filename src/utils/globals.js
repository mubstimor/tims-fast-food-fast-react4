export const changelistener = state => event => {
  state.setState({ [event.target.name]: event.target.value });
};
