const SelectedIcon = ({ selected }: { selected: boolean }) => {
  return (
    <div className="flex items-center justify-center w-6 h-6 border-2 rounded-full border-pink">
      {selected ? (
        <span className="w-4 h-4 rounded-full bg-pink" aria-hidden="true" />
      ) : null}
    </div>
  );
};
export default SelectedIcon;
