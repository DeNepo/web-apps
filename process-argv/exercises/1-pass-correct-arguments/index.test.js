'use strict';

// pass the correct command line arguments to pass these tests

const userArguments = process.argv.slice(2);

describe('the user arguments should be like:', () => {
  it('three arguments', () => {
    expect(userArguments.length).toEqual(3);
  });
  it('first one is "gorgeous"', () => {
    expect(userArguments[0]).toEqual('gorgeous');
  });
  it('second one is "spiced"', () => {
    expect(userArguments[1]).toEqual('spiced');
  });
  it('third one is "potato"', () => {
    expect(userArguments[2]).toEqual('potato');
  });
  it('together they are: ["gorgeous", "spiced", "potato"]', () => {
    expect(userArguments).toEqual(['gorgeous', 'spiced', 'potato']);
  });
});
