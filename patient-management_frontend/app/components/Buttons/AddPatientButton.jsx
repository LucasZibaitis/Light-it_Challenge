import { IoAdd } from "react-icons/io5";
export default function AddPatientButton({ setAddPatient }) {
  return (
    <button
      class="w-64 flex gap-2 py-2 px-4 bg-white items-center rounded-lg text-[#16a34a] font-normal text-2xl transition-all duration-200 hover:bg-[#16a34a] hover:text-white  hover:shadow-lg shadow "
      onClick={() => {
        setAddPatient(true);
      }}
    >
      <IoAdd class="size-8" />
      <span className="hidden sm:inline">Add Patient</span>
    </button>
  );
}
