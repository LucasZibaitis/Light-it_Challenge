import PatientCard from "@/app/components/PatientCard/PatientCard";

export default function PatientsPagination({ currentPatients }) {
  return (
    <div className="w-full justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 h-full">
      {currentPatients.map((patient) => (
        <PatientCard
          key={patient.id}
          id={patient.id}
          name={patient.name}
          avatar={patient.avatar}
          description={patient.description}
          website={patient.website}
        />
      ))}
    </div>
  );
}
