export const bareInputClass = `text-sm px-3 text-gray-700 border-gray-300 border rounded-md focus:outline-none`;
export const inputClass = `w-full ${bareInputClass}`;

export const UI = {
  bareInput: bareInputClass,
  textInput: `${inputClass} py-4`,
  input: `${inputClass} py-4`,
  // NB: py doens't work for a select-input on safari
  selectInput: `${inputClass} bg-white h-9`,
  dateInput: `${inputClass} py-3`,
};
