export type ToggleState = {
  isDark: boolean;
  fSize: number;
};

type ToggleAction =
  | { type: "TOGGLE" }
  | { type: "INCREMENT" }
  | { type: "DECREMENT" };

export const toggleReducer = (
  state: ToggleState,
  action: ToggleAction,
): ToggleState => {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        isDark: !state.isDark,
      };

    case "INCREMENT":
      return {
        ...state,
        fSize: state.fSize + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        fSize: state.fSize - 1,
      };

    default:
      return state;
  }
};
