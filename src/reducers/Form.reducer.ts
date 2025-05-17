interface ErrorMessage {
    message: string
}

export type FormState = Record<string, string>;

type Errors = Record<string, ErrorMessage>;

type FormAction =
  | { type: "SET_VALUE"; field: string; value: string }
  | { type: "SET_ERROR"; field: string; message: string }
  | { type: "CLEAR_ERRORS" };

  export function formReducer(state: { values: FormState; errors: Errors }, action: FormAction) {
    
    switch (action.type) {
      case "SET_VALUE":
        console.log("values state", state);
        return {
          ...state,
          values: { ...state.values, [action.field]: action.value },
          errors: { ...state.errors, [action.field]: { message: "" } }, // Ensure ErrorMessage format
        };
  
      case "SET_ERROR":
        console.log("errors state", state);
        return {
          ...state,
          errors: { ...state.errors, [action.field]: { message: action.message } }, // Wrap in ErrorMessage object
        };
  
      case "CLEAR_ERRORS":
        console.log("clear state", state);
        return {
          ...state,
          errors: {},
        };
  
      default:
        console.log("default state", state);
        return state;
    }
  }
  

//  export function formReducer(state: {values: FormState, errors: Errors}, action: FormAction){
//     switch(action.type){
//         case "SET_VALUE":
//             return {
//                 ...state,
//                 values: {...state.values, [action.field]: action.value},
//                 errors: {...state.errors, [action.field]: ""}
//             };
//         case "SET_ERROR":
//             return{
//                 ...state,
//                 errors: {...state.errors, [action.field]: action.message}
//             };
//         case "CLEAR_ERRORS":
//             return {
//                 ...state,
//                 errors: {}
//             }
//         default:
//             return state
//     }
//   }