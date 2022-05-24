import { Div, Input, P } from "react-with-native";
import UI from "react-with-native-ui";
import useStore from "../store";

const HomePage = () => {
  const [name, setName] = useStore("name");
  const [email, setEmail] = useStore("email");
  return (
    <Div className="p-4 lg:p-20">
      <P>Welcome to this demo. This project...</P>

      <Div className="bg-gray-200 rounded-xl p-4">
        <P>Your name:</P>
        <Input
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
          className={UI.input}
        />

        <P>Your email:</P>
        <Input
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
          className={UI.input}
        />
      </Div>
    </Div>
  );
};

export default HomePage;
