/**
 * @flow
 * Sleep an amount of seconds before executing the next call
 */
export default (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));