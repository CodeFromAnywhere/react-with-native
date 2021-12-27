import { SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import DropdownButton from "./DropdownButton";
import { ChildrenType, ID, Item } from "./types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import SelectedIcon from "./SelectedIcon";
import { Button, Div, Label } from "react-with-native";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const SelectDrawer = <T extends unknown>({
  options,
  value,
  onChange,
  title,
  children,
  className,
  hasReset,
  id,
}: {
  value: Item<T>;
  options: Item<T>[];
  onChange?: (value: Item<T> | null) => void;
  title: string;
  children?: ChildrenType<T>;
  className?: string;
  hasReset?: boolean;
  id?: ID;
}) => {
  const [open, setOpen] = useState(false);

  const [customId, setCustomId] = useState<ID>();

  function switchOpen() {
    setOpen(!open);
  }

  function reset() {
    onChange?.(null);
    switchOpen();
  }

  const valueNoOption = !options.find((x) => x.value === value.value);
  const realValue: Item<T> = value || { label: title, value: undefined as T };

  return (
    <Div>
      {children ? (
        children({
          onClick: (e, id) => {
            switchOpen();
            setCustomId(id);
          },
          value: realValue,
          className,
        })
      ) : (
        <DropdownButton onClick={switchOpen} label={value.label} />
      )}
      <SwipeableDrawer
        anchor={"bottom"}
        open={open}
        onClose={switchOpen}
        onOpen={switchOpen}
        sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
      >
        <StyledBox
          sx={{
            padding: 2,
            marginBottom: 20,
          }}
          role="presentation"
        >
          <Div className="grid grid-cols-4 mb-10">
            <Button
              // disabled={valueNoOption}
              className={`text-left ${
                valueNoOption ? "disabled:opacity-50" : "text-pink"
              }`}
              onClick={reset}
            >
              {hasReset ? "Reset" : null}
            </Button>
            <div className="col-span-2 font-bold text-center">{title}</div>
            <Button className="text-right text-pink" onClick={switchOpen}>
              Ready
            </Button>
          </Div>
          <Div className="flex flex-col">
            {options.map((option, index) => {
              // TODO do a shallow diff compare, or add id to Item for example.
              const isSelected = option.label === value.label;
              return (
                <Div
                  key={index}
                  onClick={(e) => {
                    option.onClick?.(customId ? customId : id);
                    onChange?.(option);
                    switchOpen();
                  }}
                  className="flex items-center mb-2"
                >
                  <Label className="flex-1 min-w-0 text-t-primary">
                    {option.label}
                  </Label>
                  <SelectedIcon selected={isSelected} />
                </Div>
              );
            })}
          </Div>
        </StyledBox>
      </SwipeableDrawer>
    </Div>
  );
};

export default SelectDrawer;
