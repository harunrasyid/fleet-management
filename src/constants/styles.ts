export const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#1D4ED8" // selected: blue-700
      : state.isFocused
        ? "#DBEAFE" // hovered: blue-100
        : "white",
    color: state.isSelected ? "white" : "black",
    padding: 10,
    cursor: "pointer",
  }),
  multiValue: (provided: any) => ({
    ...provided,
    backgroundColor: "#BFDBFE", // blue-200
  }),
  multiValueLabel: (provided: any) => ({
    ...provided,
    color: "#1E40AF", // blue-900
  }),
  multiValueRemove: (provided: any) => ({
    ...provided,
    color: "#1E40AF",
    ":hover": {
      backgroundColor: "#60A5FA", // blue-400
      color: "white",
    },
  }),
};
