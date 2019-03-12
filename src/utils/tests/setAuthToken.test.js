import axios from 'axios';
import setAuthToken from '../setAuthToken';
import expect from 'expect';

describe('Test auth', () => {
  const authToken = 'nxsnrf';
  it('should set token', () => {
    setAuthToken(authToken);
    expect(axios.defaults.headers.common.Authorization).toEqual(
      `Bearer ${authToken}`
    );
  });

  it('should not set token', () => {
    setAuthToken(false);
    expect(axios.defaults.headers.common.Authorization).toEqual(undefined);
  });
});
