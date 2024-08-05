"use client";
import { useEffect, useState } from "react";
import PatientDetail from "./containers/PatientDetail/PatientDetail";
import AddPatientForm from "./containers/AddPatientForm/AddPatientForm";
import EditPatient from "./containers/EditPatient/EditPatient";
import { useSelector, useDispatch } from "react-redux";
import { setPatients } from "@/redux/actions";
import NoCardsAlert from "./components/Alerts/NoCardsAlert";
import LoadingAlert from "./components/Alerts/LoadingAlert";
import PatientsPagination from "./containers/PatientsPagination/PatientsPagination";
import PaginationButtons from "./components/Buttons/PaginationButtons";
import SearchBarInput from "./components/Inputs/SearchBarInput";
import AddPatientButton from "./components/Buttons/AddPatientButton";
import usePagination from "./hooks/usePagination";

export default function Home() {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients);
  const loadingPatients = useSelector((state) => state.loadingPatients);
  const detailPatientData = useSelector((state) => state.detailPatientData);
  const editPatientData = useSelector((state) => state.editPatientData);
  const hasDetailPatientData =
    detailPatientData && Object.keys(detailPatientData).length > 0;
  const hasEditPatientData =
    editPatientData && Object.keys(editPatientData).length > 0;
  const [addPatient, setAddPatient] = useState(false);
  const [searchPatient, setSearchPatient] = useState("");
  const patientsPerPage = 6;
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchPatient.toLowerCase())
  );
  const {
    currentItems: currentPatients,
    currentPage,
    totalPages,
    handleNextPage,
    handlePrevPage,
  } = usePagination(filteredPatients, patientsPerPage);

  useEffect(() => {
    dispatch(setPatients());
  }, []);

  return (
    <main className="flex flex-col h-screen items-center relative">
      <div
        class={`h-full w-full flex flex-col items-center justify-start gap-14 py-8 ${
          hasDetailPatientData || addPatient || hasEditPatientData
            ? "opacity-20"
            : "opacity-100"
        } transition-all duration-300`}
      >
        <div class="w-full flex justify-center gap-4">
          <PaginationButtons
            currentPage={currentPage}
            totalPages={totalPages}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
          />
          <SearchBarInput
            searchPatient={searchPatient}
            setSearchPatient={setSearchPatient}
          />
          <AddPatientButton setAddPatient={setAddPatient} />
        </div>
        <div class="w-full 2xl:h-4/6">
          {loadingPatients ? (
            <LoadingAlert />
          ) : filteredPatients.length < 1 ? (
            <NoCardsAlert setSearchPatient={setSearchPatient} />
          ) : (
            <PatientsPagination currentPatients={currentPatients} />
          )}
        </div>
      </div>
      {addPatient && <AddPatientForm setAddPatient={setAddPatient} />}
      {hasDetailPatientData && <PatientDetail />}
      {hasEditPatientData && <EditPatient />}
    </main>
  );
}
