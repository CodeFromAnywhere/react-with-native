import { ReactElement } from "react";
import { Div } from "react-with-native";
import Home from "../components/home/Home";
import SiteLayout from "../components/SiteLayout";

const Index = () => (
  <SiteLayout>
    <Div className="flex-1 w-full">
      <Home />
    </Div>
  </SiteLayout>
);

export default Index;

//   <Text className="p-4 text-2xl">Welcome to react-with-native</Text>
//   <P className="w-1/2 p-4">
//     Welcome to the react-with-native community. Together we are working to
//     build a framework to empower everyone to turn their ideas into web and
//     mobile applications on any platform.
//   </P>
