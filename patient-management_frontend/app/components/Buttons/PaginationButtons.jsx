import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

export default function PaginationButtons({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
}) {
  return (
    <div className="flex w-36 gap-4 justify-between">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className=" px-4 py-2 rounded-lg bg-white disabled:bg-transparent disabled:hover:shadow  transition-all duration-150 shadow hover:shadow-lg"
      >
        <FaLongArrowAltLeft class="size-8 text-[#134e4a]" />
      </button>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className=" px-4 py-2 rounded-lg bg-white disabled:bg-transparent disabled:hover:shadow transition-all duration-150  shadow hover:shadow-lg"
      >
        <FaLongArrowAltRight class="size-8 text-secondary " />
      </button>
    </div>
  );
}
