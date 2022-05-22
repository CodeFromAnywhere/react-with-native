import { Div, Span } from "react-with-native";

const SelectedIcon = ({ selected }: { selected: boolean }) => {
  return (
    <Div className="flex items-center justify-center w-6 h-6 border-2 border-blue-400 rounded-full">
      {selected ? (
        <Span className="w-4 h-4 bg-blue-400 rounded-full" aria-hidden="true" />
      ) : null}
    </Div>
  );
};
export default SelectedIcon;
