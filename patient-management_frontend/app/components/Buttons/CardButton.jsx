import { RiEditCircleFill } from "react-icons/ri";
import { IoInformationCircle } from "react-icons/io5";
import { setDetailPatientData } from "@/redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { setEditPatientData } from "@/redux/actions";

export default function CardButton({ type, patientData }) {
  const dispatch = useDispatch();
  const detailPatientData = useSelector((state) => state.detailPatientData);
  const hasDetailPatientData =
    detailPatientData && Object.keys(detailPatientData).length > 0;

  const handleEditClick = () => {
    dispatch(setDetailPatientData());
    dispatch(setEditPatientData(patientData));
  };

  const handleDetailClick = () => {
    dispatch(setDetailPatientData(patientData));
  };
  return (
    <>
      {type === "edit" ? (
        <button
          className="hover:scale-110 transition-all duration-150"
          onClick={handleEditClick}
        >
          <RiEditCircleFill className="size-9 text-secondary" />
        </button>
      ) : (
        <button
          className={`${
            hasDetailPatientData ? "hidden" : ""
          } hover:scale-110 transition-all duration-150`}
          onClick={handleDetailClick}
        >
          <IoInformationCircle className="size-10 text-secondary" />
        </button>
      )}
    </>
  );
}
