import { SwipeableDrawer } from '@mui/material';
import { useState } from 'react';
import DropdownButton from './DropdownButton';
import { Item } from './types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import SelectedIcon from './SelectedIcon';
import { t } from 'i18next';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const SelectDrawer = <T extends unknown>({
  options,
  value,
  onChange,
  title,
}: {
  value: Item<T>;
  options: Item<T>[];
  onChange: (value: Item<T> | null) => void;
  title: string;
}) => {
  const [open, setOpen] = useState(false);

  function switchOpen() {
    setOpen(!open);
  }

  function reset() {
    onChange(null);
    switchOpen();
  }

  const valueNoOption = !options.find((x) => x.value === value.value);

  return (
    <div>
      <DropdownButton onClick={switchOpen} label={value.label} />
      <SwipeableDrawer
        anchor={'bottom'}
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
          <div className="grid grid-cols-4 mb-10">
            <button
              disabled={valueNoOption}
              className={`text-left ${
                valueNoOption ? 'disabled:opacity-50' : 'text-pink'
              }`}
              onClick={reset}
            >
              {t('app.ui.reset')}
            </button>
            <div className="col-span-2 font-bold text-center">{title}</div>
            <button className="text-right text-pink" onClick={switchOpen}>
              {t('app.ui.ready')}
            </button>
          </div>
          <div className="flex flex-col">
            {options.map((option, index) => {
              // @TODO do a shallow diff compare, or add id to Item for example.
              const isSelected = option.label === value.label;
              return (
                <div
                  key={index}
                  onClick={() => {
                    onChange(option);
                    switchOpen();
                  }}
                  className="flex items-center mb-2"
                >
                  <label className="flex-1 min-w-0 text-t-primary">
                    {option.label}
                  </label>
                  <SelectedIcon selected={isSelected} />
                </div>
              );
            })}
          </div>
        </StyledBox>
      </SwipeableDrawer>
    </div>
  );
};

export default SelectDrawer;
