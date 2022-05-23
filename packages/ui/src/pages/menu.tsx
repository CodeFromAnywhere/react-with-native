import { Div, P } from "react-with-native";
import { Menu } from "../components";

const MenuPage = () => {
  return (
    <Div className="bg-gray-300 p-4 h-screen w-screen">
      <P className="font-bold">Menu</P>
      <Menu />
    </Div>
  );
};
export default MenuPage;
