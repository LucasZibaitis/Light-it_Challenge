"use client";
import { useSelector } from "react-redux";
import PatientCard from "@/app/components/PatientCard/PatientCard";
import CloseButton from "@/app/components/Buttons/CloseButton";

export default function PatientDetail({ setEditPatientData }) {
  const detailPatientData = useSelector((state) => state.detailPatientData);
  const hasDetailPatientData =
    detailPatientData && Object.keys(detailPatientData).length > 0;
  const { name, avatar, website, description, id } = detailPatientData;

  return (
    <div
      class={`w-full h-full flex items-start md:items-center justify-center fixed z-10 py-10 ${
        hasDetailPatientData ? "opacity-100" : "opacity-0"
      } transition-all duration-1000`}
    >
      <div class="items-center lg:items-start h-full lg:h-2/3 justify-start md:justify-center w-full flex gap-4 flex flex-col lg:flex-row">
        <PatientCard
          name={name}
          avatar={avatar}
          id={id}
          description={description}
          website={website}
          setEditPatientData={setEditPatientData}
        />
        <div class="bg-tertiary w-full lg:w-1/3   flex flex-col py-8 px-2 gap-6 shadow-xl rounded-lg relative">
          <CloseButton type="detail" />
          <div class="flex flex-col px-6 gap-2 ">
            <h1 class="text-xl text-[#172554] font-semibold">Description</h1>
            <p class="md:h-96 md:max-h-96 text-sm rounded-lg px-2 py-2 bg-white text-[#172554] break-words">
              {description}
            </p>
          </div>
          <div class="flex flex-col px-6 gap-2 ">
            <h1 class="text-xl font-semibold text-[#172554]">Website</h1>
            <a
              class="px-2 py-2 bg-white text-[#172554] text-sm rounded-lg hover:underline"
              href={website}
            >
              {website}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
