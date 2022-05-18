import { useEffect } from "react";
import { Div, Text, ActivityIndicator } from "react-with-native";
import { FlatListProps } from "./type";

const FlatList = (props: FlatListProps) => {
  const { data, ListItem, connections, FooterComponent, HeaderComponent } =
    props;

  const myDiv = document.getElementById("rwn-flat-list");
  if (myDiv) {
    myDiv.addEventListener("scroll", () => {
      if (myDiv.offsetHeight + myDiv.scrollTop >= myDiv.scrollHeight) {
        connections.fetchNextPage();
      }
    });
  }

  return (
    <Div
      id="rwn-flat-list"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "70vh",
        overflow: "scroll",
        overflowX: "hidden",
      }}
    >
      <Div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        {connections?.isLoading ? (
          <ActivityIndicator size={10} color="white" />
        ) : null}
      </Div>
      {HeaderComponent}
      {data?.map((item, idx) => (
        <ListItem key={idx} item={item} />
      ))}
      {/* <Div style={{ display: "flex", justifyContent: "center", width: "100%" }}> */}
      {FooterComponent}
      {/* </Div> */}
    </Div>
  );
};

export { FlatList };
export default FlatList;
