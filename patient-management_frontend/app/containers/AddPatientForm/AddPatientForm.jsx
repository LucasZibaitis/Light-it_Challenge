"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPatient } from "@/redux/actions";
import { validateForm } from "@/common/utils";
import SuccessAlert from "@/app/components/Alerts/SuccessAlert";
import Form from "@/app/components/Forms/Form";

export default function AddPatientForm({ setAddPatient }) {
  const dispatch = useDispatch();
  const [newPatient, setNewPatient] = useState({
    name: "",
    avatar: "",
    description: "",
    website: "",
    id: Date.now().toString(),
  });
  const [errors, setErrors] = useState({});
  const [addSuccess, setAddSuccess] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPatient({ ...newPatient, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(newPatient);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(addPatient(newPatient));
      setAddSuccess(true);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div class="w-full h-full flex items-start md:items-center justify-center fixed z-10 py-10">
      {addSuccess ? (
        <SuccessAlert
          type="add"
          patientName={newPatient.name}
          setAddPatient={setAddPatient}
        />
      ) : (
        <Form
          errors={errors}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={newPatient}
          setAddPatient={setAddPatient}
          type="add"
        />
      )}
    </div>
  );
}
