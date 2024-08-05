import CardButton from "../Buttons/CardButton";

export default function PatientCard({
  id,
  name,
  website,
  description,
  avatar,
}) {
  const patientData = { id, name, website, description, avatar };

  return (
    <div className="w-full max-w-sm sm:h-72 shadow-lg bg-white rounded-lg py-8 px-4 flex justify-between">
      <div className="flex flex-col flex-grow">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="max-w-32 w-full h-32 object-cover rounded-lg mb-4 border border-2 border-secondary"
        />
        <h1 className="text-xl font-semibold text-secondary break-words">
          {name}
        </h1>
        <h2 className="text-lg font-normal text-secondary">ID: {id}</h2>
      </div>
      <div class="w-0.5 h-full bg-secondary rounded-lg"></div>
      <div className="flex flex-col justify-between ml-4">
        <CardButton type="edit" patientData={patientData} />
        <CardButton type="detail" patientData={patientData} />
      </div>
    </div>
  );
}
