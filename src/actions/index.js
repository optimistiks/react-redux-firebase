export const EXAMPLE_ACTION = 'EXAMPLE_ACTION';
export const EXAMPLE_ASYNC_ACTION = 'EXAMPLE_ASYNC_ACTION';
export const EXAMPLE_ASYNC_ACTION_DONE = 'EXAMPLE_ASYNC_ACTION_DONE';
export const EXAMPLE_ASYNC_ACTION_FAIL = 'EXAMPLE_ASYNC_ACTION_FAIL';

export function exampleAction() {
  return { type: EXAMPLE_ACTION };
}

export function exampleAsyncAction() {
  return { type: EXAMPLE_ASYNC_ACTION };
}

export function exampleAsyncActionDone() {
  return { type: EXAMPLE_ASYNC_ACTION_DONE };
}

export function exampleAsyncActionFail() {
  return { type: EXAMPLE_ASYNC_ACTION_FAIL };
}
