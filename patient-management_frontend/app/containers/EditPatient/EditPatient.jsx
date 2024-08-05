import { deletePatient, editPatient } from "@/redux/actions";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { validateForm } from "@/common/utils";
import SuccessAlert from "../../components/Alerts/SuccessAlert";
import Form from "../../components/Forms/Form";
import DeleteConfirmationAlert from "../../components/Alerts/DeleteConfirmationAlert";

export default function EditPatient() {
  const dispatch = useDispatch();
  const editPatientData = useSelector((state) => state.editPatientData);
  const [editedPatient, setEditedPatient] = useState(editPatientData);
  const [errors, setErrors] = useState({});
  const [editSuccess, setEditSuccess] = useState(false);
  const [deletePatient, setDeletePatient] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPatient({ ...editedPatient, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(editedPatient);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(editPatient(editedPatient));
      setEditSuccess(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleDelete = () => {
    setDeletePatient(true);
  };

  return (
    <div class="w-full h-full flex items-start md:items-center justify-center fixed z-30 py-10">
      {editSuccess ? (
        <SuccessAlert type="edit" patientName={editedPatient.name} />
      ) : deletePatient ? (
        <DeleteConfirmationAlert
          setDeleteSuccess={setDeleteSuccess}
          patientName={editPatientData.name}
          editPatientData={editPatientData}
          setDeletePatient={setDeletePatient}
        />
      ) : deleteSuccess ? (
        <SuccessAlert
          type="delete"
          patientName={editPatientData.name}
          setDeleteSuccess={setDeleteSuccess}
        />
      ) : (
        <Form
          errors={errors}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleDelete={handleDelete}
          setDeletePatient={setDeletePatient}
          formData={editedPatient}
          type="edit"
        />
      )}
    </div>
  );
}
