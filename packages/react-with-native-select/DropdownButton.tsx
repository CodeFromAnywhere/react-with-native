import { ChevronDownIcon } from '@heroicons/react/solid';
import * as React from 'react';

export default function DropdownButton({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) {
  return (
    <div
      onClick={onClick}
      className="flex w-full px-4 py-4 mt-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-sm shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
    >
      <div className="flex-1">{label}</div>
      <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
    </div>
  );
}
