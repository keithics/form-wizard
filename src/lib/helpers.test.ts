import { expect, test } from '@jest/globals';

import { getParams } from './helpers';

describe('Parsing GET queries', () => {
  test('getParams query', () => {
    window.location.search = '?one=1&two=2';

    expect(getParams()).toMatchSnapshot();
  });
});
