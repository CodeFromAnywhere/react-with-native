import { ReactElement } from "react";
import { FormScreen } from "react-with-native-shared-example";
import Documentation from "../../components/docs/Documentation";
import SiteLayout from "../../components/SiteLayout";
const Screen = () => <FormScreen />;

Screen.getLayout = (page: ReactElement) => (
  <SiteLayout>
    <Documentation hasSidebar={true}>{page}</Documentation>
  </SiteLayout>
);
export default Screen;
