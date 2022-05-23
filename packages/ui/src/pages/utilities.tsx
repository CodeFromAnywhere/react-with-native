import { Button, Div, P } from "react-with-native";
import { toast } from "react-with-native-notification";
// import { useAlert } from "react-with-native-alert";
const HomePage = () => {
  //const alert = useAlert();

  //console.log({ alert });
  return (
    <Div className="p-4">
      <P>Utilities</P>

      <Div>
        <Button
          onClick={() => toast({ title: "Yes yes", body: "This is a toast" })}
          className="bg-black p-2 rounded-xl"
          textClassName="text-white"
        >
          Get a notification
        </Button>

        <Button
          onClick={() => alert?.("Hello world!")}
          className="bg-black p-2 rounded-xl"
          textClassName="text-white"
        >
          Get an alert
        </Button>
      </Div>
    </Div>
  );
};

export default HomePage;
