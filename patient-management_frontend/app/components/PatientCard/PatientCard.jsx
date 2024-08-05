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
    <div class="w-96 sm:h-72 shadow-lg bg-white rounded-lg py-8 pl-4 pr-4 flex justify-between">
      <div class="flex flex-col w-full max-w-72 h-full pr-4">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          class="size-28 sm:size-36 rounded-lg mb-4 border border-2 border-secondary"
        />
        <div class="flex flex-col rounded-lg">
          <h1 class="text-2xl font-semibold text-secondary break-words">
            {name}
          </h1>
          <h1 class="text-xl font-normal text-secondary">ID: {id}</h1>
        </div>
      </div>
      <div class="flex">
        <div class="w-0.5 h-full bg-secondary rounded-lg"></div>
        <div class="flex flex-col items-end justify-between pl-4 h-full">
          <CardButton type="edit" patientData={patientData} />
          <CardButton type="detail" patientData={patientData} />
        </div>
      </div>
    </div>
  );
}
