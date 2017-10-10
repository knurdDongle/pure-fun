import flatten from '../flatten';

const multiDimensionalArray = [1, [2, [3]]];

describe(`flatten()`, () => {
  it(`flattens a multidimensional array`, () => {
    expect(flatten(multiDimensionalArray)).toEqual([1, 2, 3]);
  });
});
