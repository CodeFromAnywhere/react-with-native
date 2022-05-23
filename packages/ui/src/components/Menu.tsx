import { Button, Div, Li, Ul } from "react-with-native";
import * as Pages from "../pages";
import { useRouter } from "react-with-native-router";
const Menu = ({ menu }: { menu?: string[] }) => {
  const router = useRouter();

  if (!menu) {
    menu = Object.keys(Pages);
  }
  return (
    <Ul>
      {menu.map((page) => {
        return (
          <Li key={`page${page}`}>
            <Button
              className="p-4"
              textClassName="text-3xl hover:text-blue-800"
              onClick={() => router.push(page === "index" ? "/" : page)}
            >
              {page.charAt(0).toUpperCase().concat(page.slice(1))}
            </Button>
          </Li>
        );
      })}
    </Ul>
  );
};

export default Menu;
