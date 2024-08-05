import { useDispatch } from "react-redux";
import { deletePatient } from "@/redux/actions";

export default function DeleteConfirmationAlert({
  setDeletePatient,
  setDeleteSuccess,
  editPatientData,
}) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deletePatient(editPatientData.id));
    setDeletePatient(false);
    setDeleteSuccess(true);
  };

  return (
    <div class=" px-8 bg-white rounded-lg flex flex-col items-start shadow-lg  py-8">
      <div class="flex flex-col gap-2">
        <h1 class="text-[#172554] text-3xl font-normal">
          Delete {editPatientData.name}?
        </h1>
        <h2 class="text-[#172554] text-xl font-light">
          Deleting a patient will permanently remove it from your database.
        </h2>
      </div>

      <div class="w-full h-full flex items-center justify-end gap-4 mt-8">
        <button
          onClick={() => setDeletePatient(false)}
          class="bg-white rounded-lg px-4 text-lg text-[#172554] shadow hover:shadow-md transition-all duration-150"
        >
          No, Keep Patient
        </button>
        <button
          onClick={() => handleClick()}
          class="bg-error rounded-lg px-4 text-lg text-white shadow hover:shadow-md transition-all duration-150"
        >
          Yes, Delete Patient
        </button>
      </div>
    </div>
  );
}
