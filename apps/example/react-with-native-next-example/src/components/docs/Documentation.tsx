import React, { ReactElement } from "react";
import { Div } from "react-with-native";
import Container from "./Container";
import DocFooter from "./DocFooter";
import Sidebar from "./sidebar/Sidebar";

function Documentation({
  children,
  hasSidebar,
}: {
  children: ReactElement;
  hasSidebar: boolean;
}) {
  return (
    <Div className="flex-1 w-screen h-screen">
      <Div className="relative flex w-full">
        {hasSidebar ? <Sidebar /> : null}
        <Div className="flex-1 w-full">
          <Container>
            <Div className="static">
              {children}
              <DocFooter />
            </Div>
          </Container>
        </Div>
      </Div>
    </Div>
  );
}

export default Documentation;
