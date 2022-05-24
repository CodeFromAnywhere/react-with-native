export const bareInputClass = `text-sm px-3 text-gray-700 border-gray-300 border rounded-md focus:outline-none`;
export const inputClass = `w-full ${bareInputClass}`;

const UI = {
  bareInput: bareInputClass,
  textInput: `${inputClass} py-4`,
  input: `${inputClass} py-4`,
  selectInput: `${inputClass} py-3`,
  dateInput: `${inputClass} py-3`,
};

export default UI;
