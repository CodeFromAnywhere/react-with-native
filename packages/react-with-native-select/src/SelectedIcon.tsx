import { Div } from "react-with-native";

const SelectedIcon = ({ selected }: { selected: boolean }) => {
  return (
    <Div className="flex items-center justify-center w-6 h-6 border-2 rounded-full border-pink">
      {selected ? (
        <Span className="w-4 h-4 rounded-full bg-pink" aria-hidden="true" />
      ) : null}
    </Div>
  );
};
export default SelectedIcon;
