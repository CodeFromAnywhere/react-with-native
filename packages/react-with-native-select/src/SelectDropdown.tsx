/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import SelectedIcon from "./SelectedIcon";
import { Svg } from "react-with-native";
import AiFillCaretDown from "./assets/AiFillCaretDown.svg";
import AiFillCaretUp from "./assets/AiFillCaretUp.svg";
import { Item } from "./types";
import { Div, Span } from "react-with-native";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const renderOption = <T extends unknown>({
  item,
  selected,
  active,
  isHeader,
  isOpen,
}: {
  item?: Item<T>;
  selected?: boolean;
  active?: boolean;
  isHeader?: boolean;
  isOpen?: boolean;
}) => {
  const Icon = item?.icon;

  return (
    <Div className="flex justify-between">
      <Div className="flex items-center">
        <Span
          className={classNames(
            selected || active ? "font-semibold text-pink" : "font-normal",
            "ml-3 block truncate"
          )}
        >
          {item?.label}
        </Span>
        {Icon && <Icon />}
      </Div>

      {isHeader ? (
        <Div className="flex items-center justify-center w-6 h-6">
          {isOpen ? <Svg src={AiFillCaretUp} /> : <Svg src={AiFillCaretDown} />}
        </Div>
      ) : (
        <SelectedIcon selected={selected!} />
      )}
    </Div>
  );
};

export default function SelectDropDown<T>({
  title,
  value,
  onChange,
  options,
  className,
  children,
}: {
  title?: string;
  value: Item<T>;
  onChange?: (value: Item<T>) => void;
  options: Item<T>[];
  className?: string;
  children?: any;
}) {
  const onChangeFn = onChange ? onChange : () => null;
  console.log("we've the newest");
  return (
    <Listbox value={value} onChange={onChangeFn}>
      {({ open }) => (
        <>
          {title && (
            <Listbox.Label className="block text-sm font-medium text-gray-700">
              {title}
            </Listbox.Label>
          )}
          <Div className={`relative mt-1 ${className}`}>
            <Listbox.Button className="relative z-0 w-full py-2 pl-3 pr-3 text-left bg-white border border-gray-300 rounded-sm shadow-sm cursor-default focus:outline-none focus:ring-1 sm:text-sm">
              {renderOption({
                item: value,
                isHeader: true,
                isOpen: open,
              })}
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-sm shadow-lg max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((option, index) => (
                  <Listbox.Option
                    key={`option${index}`}
                    className={({ active }) =>
                      classNames(
                        "text-gray-900",
                        "cursor-pointer select-none relative py-2 pl-3 pr-3"
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) =>
                      renderOption({ item: option, active, selected })
                    }
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </Div>
        </>
      )}
    </Listbox>
  );
}
