export default function NoCardsAlert({ setSearchPatient }) {
  const handleClearClick = () => {
    setSearchPatient("");
  };

  return (
    <div class="flex flex-col items-center justify-center gap-4 w-full h-full">
      <h1 class="text-4xl text-secondary font-light">
        Can't find that Patient...
      </h1>
      <button
        onClick={() => {
          handleClearClick();
        }}
        class="px-4 py-1 text-xl shadow rounded-lg bg-secondary text-white font-light hover:shadow-lg transition-all duration-200"
      >
        Clear search
      </button>
    </div>
  );
}
