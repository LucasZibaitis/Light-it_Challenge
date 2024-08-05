import { setEditPatientData } from "@/redux/actions";
import { useDispatch } from "react-redux";

export default function SuccessAlert({ type, patientName, setAddPatient }) {
  const dispatch = useDispatch();
  const renderMessage = (type) => {
    if (type === "add") {
      return `The patient ${patientName} was added successfully.`;
    }
    if (type === "edit") {
      return `The patient ${patientName} was edited successfully.`;
    }
    if (type === "delete") {
      return `The patient ${patientName} was deleted successfully.`;
    }
  };

  const handleClick = (type) => {
    if (type === "add") {
      setAddPatient(false);
    }
    if (type === "edit" || type === "delete") {
      dispatch(setEditPatientData());
    }
  };

  return (
    <div class="lg:h-36 px-8 bg-white rounded-lg flex flex-col items-center justify-between shadow-lg gap-4 py-8">
      <h1 class="text-green-700 text-3xl font-light">{renderMessage(type)}</h1>
      <button
        onClick={() => handleClick(type)}
        class="bg-white rounded-lg px-4 text-lg text-[#172554] shadow hover:shadow-md transition-all duration-150"
      >
        Back
      </button>
    </div>
  );
}
