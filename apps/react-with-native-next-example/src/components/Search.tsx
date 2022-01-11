import React from "react";
import { useState } from "react";
import { Div, H2, Input } from "react-with-native";
import { useRouter } from "react-with-native-router";

function Search() {
  const router=useRouter();

  return (
      <Div className="w-full p-4 bg-transparent rounded backdrop-blur-sm">
        <Input
          type="text"
          aria-label="search"
          className="w-full px-2 py-1 text-gray-900 bg-gray-100 border border-gray-300 rounded"
          placeholder="🔍 Search"
          value={router.query?.search || ""}
          onChange={e=>{
            router.push(`${router.pathname}?search=${e.target.value}`,undefined,{shallow:true});
            
          }}
        />
    </Div>
  );
}

export default Search;