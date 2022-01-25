import { ReactElement } from "react";
import { InputScreen } from "react-with-native-shared-example";
import Documentation from "../../components/docs/Documentation";
import SiteLayout from "../../components/SiteLayout";

const Screen = () => <InputScreen />;

Screen.getLayout = (page: ReactElement) => (
  <SiteLayout>
    <Documentation hasSidebar={true}>{page}</Documentation>
  </SiteLayout>
);

export default Screen;
