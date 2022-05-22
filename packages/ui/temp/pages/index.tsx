import { Div, Input, P } from "react-with-native";
import useStore from "../store";

const HomePage = () => {
  const [name, setName] = useStore("name");
  const [email, setEmail] = useStore("email");
  return (
    <Div className="p-4">
      <P>Hello World!</P>

      <Div className="bg-gray-100 rounded-xl p-4">
        <P>Your name:</P>
        <Input
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
          className="bg-blue-100 rounded-xl"
        />

        <P>Your email: {email}</P>
        <Input
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-blue-100 rounded-xl"
        />
      </Div>
    </Div>
  );
};

export default HomePage;
