export const initialState = {};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "update":
      return { ...initialState, state };
    default:
      throw new Error();
  }
};
