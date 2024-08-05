import CloseButton from "../Buttons/CloseButton";

export default function Form({
  errors,
  handleSubmit,
  handleChange,
  handleDelete,
  type,
  formData,
  setAddPatient,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      class="w-4/5 sm:w-3/5 xl:w-2/5 2xl:w-1/5 flex flex-col bg-tertiary rounded-lg items-center py-8 px-8 shadow-xl gap-8 relative"
    >
      <CloseButton type={type} setAddPatient={setAddPatient} />
      <div class="flex flex-col w-full gap-2">
        <label class="text-md text-[#172554] font-semibold">Name</label>
        <input
          class="h-7 rounded-lg outline-1 outline-[#172554] text-[#172554] pl-2 text-sm shadow-inner"
          onChange={handleChange}
          name="name"
          value={formData.name}
        ></input>
        {errors.name && <p class="text-xs text-error">{errors.name}</p>}
      </div>
      <div class="flex flex-col w-full gap-2">
        <label class="text-md text-[#172554] font-semibold">Avatar</label>
        <input
          class="h-7 rounded-lg outline-1 outline-[#172554] text-[#172554] pl-2 text-sm  shadow-inner"
          name="avatar"
          onChange={handleChange}
          value={formData.avatar}
        ></input>
        {errors.avatar && <p class="text-xs text-error">{errors.avatar}</p>}
      </div>
      <div class="flex flex-col w-full gap-2">
        <label class="text-lg text-[#172554] font-semibold">Description</label>
        <textarea
          class="rounded-lg h-28 resize-none outline-1 outline-[#172554] text-[#172554] pl-2 py-1 text-sm  shadow-inner"
          name="description"
          onChange={handleChange}
          value={formData.description}
        />
        {errors.description && (
          <p class="text-xs text-error">{errors.description}</p>
        )}
      </div>
      <div class="flex flex-col w-full gap-2">
        <label class="text-md text-[#172554] font-semibold">Website</label>
        <input
          class="h-7 rounded-lg outline-1 outline-[#172554] pl-2 py-2 text-sm text-[#172554] shadow-inner"
          name="website"
          onChange={handleChange}
          value={formData.website}
        ></input>
        {errors.website && <p class="text-xs text-error"> {errors.website}</p>}
      </div>
      <div class="flex flex-col justify-between h-full">
        <button
          type="submit"
          class="hover:brightness-110 rounded-lg h-10 px-3 shadow text-xl text-white font-semibold hover:shadow-md bg-[#16a34a] hover:text-white transition-all duration-150"
        >
          Save Patient
        </button>
        {type === "edit" && (
          <button
            onClick={() => handleDelete()}
            class=" h-8 px-3 text-md text-error hover:underline  transition-all duration-150"
          >
            Delete Patient
          </button>
        )}
      </div>
    </form>
  );
}
