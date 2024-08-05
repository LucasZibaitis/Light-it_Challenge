import { IoClose } from "react-icons/io5";
import { setDetailPatientData, setEditPatientData } from "@/redux/actions";
import { useDispatch } from "react-redux";

export default function CloseButton({ type, setAddPatient }) {
  const dispatch = useDispatch();
  const handleCloseClick = (type) => {
    if (type === "add") {
      setAddPatient(false);
    }
    if (type === "edit" || type === "detail") {
      dispatch(setDetailPatientData());
      dispatch(setEditPatientData());
    }
  };

  return (
    <button
      class="absolute top-2 right-2 hover:scale-110 transition-all duration-150"
      onClick={() => handleCloseClick(type)}
    >
      <IoClose class="size-8 text-error" />
    </button>
  );
}
