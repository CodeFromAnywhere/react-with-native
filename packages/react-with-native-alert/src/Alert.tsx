import { AlertStatic } from "react-native";
import Portal from "./Portal";

type Parameters<T> = T extends (...args: infer T) => any ? T : never;

type AlertPropsArray = Parameters<AlertStatic["alert"]>;

export const Alert = ({
  props: [title, message, options, buttons],
}: {
  props: AlertPropsArray;
}) => {
  return (
    <div id={"__alertprovider"}>
      kjkljklj{title}: {message}
    </div>
  );
};

export const alert: AlertStatic["alert"] = (...args) => {
  return (
    <Portal>
      <Alert props={args} />
    </Portal>
  );
};

export default alert;
