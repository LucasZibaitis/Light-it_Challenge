import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
export default function SearchBarInput({ searchPatient, setSearchPatient }) {
  const [searchOver, setSearchOver] = useState(false);
  const handleSearchChange = (e) => {
    setSearchPatient(e.target.value);
  };

  return (
    <div class="flex h-full relative">
      <IoIosSearch
        class={`size-8 absolute bottom-2 left-2 transition-all duration-200  ${
          searchOver ? "text-secondary" : "text-[#9ca3af] "
        }`}
      />
      <input
        onMouseOver={() => {
          setSearchOver(true);
        }}
        onMouseOut={() => {
          setSearchOver(false);
        }}
        onChange={(e) => handleSearchChange(e)}
        value={searchPatient}
        class="w-56 lg:w-full h-full pl-12 bg-white px-4 shadow text-2xl text-secondary font-normal rounded-lg placeholder:text-[#9ca3af] hover:placeholder:text-secondary transition-all duration-200 placeholder:transition-all placeholder:duration-200 outline-secondary "
        placeholder="Search patient..."
      ></input>
    </div>
  );
}
