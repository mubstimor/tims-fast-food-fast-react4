import axios from 'axios';
import isEmpty from '../isEmpty';
import expect from 'expect';

describe('Test isEmpty', () => {
  it('should test isEmpty returns false', () => {
    const obj = { name: 'Tim' };
    expect(isEmpty(obj)).toEqual(false);
  });

  it('should test isEmpty returns true', () => {
    const obj = {};
    expect(isEmpty(obj)).toEqual(true);
  });

});
