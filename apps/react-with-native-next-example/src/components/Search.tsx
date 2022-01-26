import React, { useState } from "react";
import { Div, Input, Pressable, Svg } from "react-with-native";
import { useRouter } from "react-with-native-router";
import CgSearch from "../../assets/icons/CgSearch.svg";

function Search({ isHead }: { isHead?: boolean }) {
  const router = useRouter();

  return (
    <Div className="w-full p-4 bg-transparent rounded">
      {/* {isHead ? <SearchIcon /> : <SearchInput />} */}
      <SearchInput />
    </Div>
  );
}

function SearchInput() {
  const router = useRouter();
  return (
    <Input
      type="text"
      aria-label="search"
      className="w-full px-2 py-1 text-gray-900 bg-gray-100 border border-gray-300 rounded"
      placeholder="🔍 Search"
      value={router.query?.search || ""}
      onChange={(e) => {
        router.push(`${router.pathname}?search=${e.target.value}`, undefined, {
          shallow: true,
        });
      }}
    />
  );
}

function SearchIcon() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Div>
      <Pressable className="p-4" onClick={() => setIsOpen(!isOpen)}>
        <SearchInput />
        <Svg
          src={CgSearch}
          width={20}
          height={20}
          className={`${isOpen ? "invisible" : "visible"} text-white`}
        />
      </Pressable>
    </Div>
  );
}

export default Search;
