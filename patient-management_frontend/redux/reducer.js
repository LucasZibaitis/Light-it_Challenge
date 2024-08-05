import {
  SET_PATIENTS,
  LOADING_PATIENTS,
  DELETE_PATIENT,
  EDIT_PATIENT,
  SET_DETAIL_PATIENT_DATA,
  SET_EDIT_PATIENT_DATA,
  ADD_PATIENT,
} from "./actions";

const initialState = {
  patients: [],
  loadingPatients: true,
  editPatientData: {},
  detailPatientData: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PATIENTS:
      return { ...state, patients: action.payload };
    case LOADING_PATIENTS:
      return { ...state, loadingPatients: action.payload };
    case DELETE_PATIENT:
      return {
        ...state,
        patients: state.patients.filter(
          (patient) => patient.id !== action.payload
        ),
      };
    case EDIT_PATIENT:
      return {
        ...state,
        patients: state.patients.map((patient) =>
          patient.id === action.payload.id ? action.payload : patient
        ),
      };
    case SET_DETAIL_PATIENT_DATA:
      return { ...state, detailPatientData: action.payload };
    case SET_EDIT_PATIENT_DATA:
      return { ...state, editPatientData: action.payload };
    case ADD_PATIENT:
      return { ...state, patients: [action.payload, ...state.patients] };
    default:
      return state;
  }
};

export default rootReducer;
