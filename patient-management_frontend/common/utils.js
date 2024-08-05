export const validateForm = (patientData) => {
  const errors = {};
  const nameRegex = /^[\p{L}\s.'-]+$/u;
  const urlRegex = /^(https?:\/\/)?(www\.)?[^\s]+\.[^\s]+$/;

  if (!patientData.name || !/\S/.test(patientData.name)) {
    errors.name = "Name is required.";
  } else if (patientData.name.length > 30) {
    errors.name = "Name must be at most 30 characters.";
  } else if (!nameRegex.test(patientData.name)) {
    errors.name = "Name can not contain numbers.";
  }

  if (patientData.avatar && !urlRegex.test(patientData.avatar)) {
    errors.avatar = "Avatar must be a valid URL.";
  }
  if (patientData.website && patientData.website.length > 50) {
    errors.website = "Website URL must be at most 50 characters.";
  }
  if (patientData.description && patientData.description.length > 1200) {
    errors.description = "Description must be at most 1200 characters.";
  }
  return errors;
};
