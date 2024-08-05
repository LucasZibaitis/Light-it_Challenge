import axios from "axios";
export const SET_PATIENTS = "SET_PATIENTS";
export const LOADING_PATIENTS = "LOADING_PATIENTS";
export const DELETE_PATIENT = "DELETE_PATIENT";
export const EDIT_PATIENT = "EDIT_PATIENT";
export const SET_EDIT_PATIENT_DATA = "SET_EDIT_PATIENT_DATA";
export const SET_DETAIL_PATIENT_DATA = "SET_DETAIL_PATIENT_DATA";
export const ADD_PATIENT = "ADD_PATIENT";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const setPatients = () => {
  return async (dispatch) => {
    dispatch({
      type: LOADING_PATIENTS,
      payload: true,
    });

    try {
      const response = await axios.get(apiUrl);

      dispatch({
        type: SET_PATIENTS,
        payload: response.data,
      });
      dispatch({ type: LOADING_PATIENTS, payload: false });
    } catch (e) {
      console.log(e);
      dispatch({ type: LOADING_PATIENTS, payload: false });
    }
  };
};

export const deletePatient = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_PATIENT,
      payload: id,
    });
  };
};

export const editPatient = (patient) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_PATIENT,
      payload: patient,
    });
  };
};

export const setDetailPatientData = (patient) => {
  return (dispatch) => {
    dispatch({
      type: SET_DETAIL_PATIENT_DATA,
      payload: patient,
    });
  };
};

export const setEditPatientData = (patient) => {
  return (dispatch) => {
    dispatch({
      type: SET_EDIT_PATIENT_DATA,
      payload: patient,
    });
  };
};

export const addPatient = (patient) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PATIENT,
      payload: patient,
    });
  };
};
