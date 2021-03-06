/**
 * @flow
 * Map over an array of promises
 */
export default (inputs: Array<any>, mapper: Function): Promise<*> => {
  const promises = [];

  inputs.forEach(i => i instanceof Promise ? promises.push(i) : promises.push(mapper(i)));

  return Promise.all(promises);
};
