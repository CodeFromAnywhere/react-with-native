import React, { useCallback, useEffect, useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
export const AlertContext = React.createContext({});

export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);
  const [value, setValue] = useState("");

  const textInputRef = useRef(null);

  const theAlert = alerts[0];
  useEffect(() => {
    textInputRef.current?.focus();
  }, [textInputRef, alerts.length]);

  const alert = useCallback(
    (title, message, buttons, options) => {
      setValue("");

      console.log("lengte", alerts.length);

      // alerts copy.
      const newAlerts = [...alerts];
      if (!alerts.map((x) => x.options.key).includes(options.key)) {
        newAlerts.push({ title, message, buttons, options });
      }
      //NB: copy needed!!!
      setAlerts([...newAlerts]);
    },
    [setValue, alerts, setAlerts]
  );

  return (
    <AlertContext.Provider value={alert}>
      {children}
      {alerts.length > 0 ? (
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: theAlert.options?.textInput ? 200 : 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#DDD",
              borderRadius: 20,
              width: "80%",
              alignItems: "center",
            }}
          >
            {(theAlert.title || theAlert.message) && (
              <View style={{ padding: 20 }}>
                {theAlert.title && (
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      textAlign: "center",
                    }}
                  >
                    {theAlert.title}
                  </Text>
                )}
                {theAlert.message && (
                  <Text style={{ textAlign: "center" }}>
                    {theAlert.message}
                  </Text>
                )}
              </View>
            )}

            {theAlert.options?.component && (
              <View style={{ padding: 20 }}>{theAlert.options.component}</View>
            )}

            {theAlert.options?.textInput && (
              <View style={{ padding: 20, width: "100%" }}>
                <TextInput
                  value={value}
                  onChangeText={setValue}
                  ref={textInputRef}
                  style={{
                    fontSize: 18,
                    backgroundColor: "white",
                    width: "100%",
                    borderRadius: 3,
                    padding: 3,
                  }}
                  keyboardType={theAlert.options?.keyboardType}
                />
              </View>
            )}

            <View
              style={{ width: "100%", height: 1, backgroundColor: "#BBB" }}
            />

            {theAlert.buttons ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                {theAlert.buttons.map((button, index) => (
                  <TouchableOpacity
                    key={`${theAlert.options.key}button${index}`}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      flex: 1,
                      borderRightColor: "#BBB",
                      borderRightWidth:
                        index < theAlert.buttons.length - 1 ? 1 : 0,
                    }}
                    onPress={() => {
                      const newAlerts = [...alerts];
                      newAlerts.shift();

                      console.log("newAlerts", newAlerts.length);

                      // NB: we need to make a copy here, otherwise it has the same reference and the component thinks that it didn't change.
                      setAlerts([...newAlerts]);

                      setValue("");

                      button.onPress?.(value);
                    }}
                  >
                    <Text
                      style={{
                        color: "blue",
                        fontSize: 18,
                      }}
                    >
                      {button.text}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            ) : (
              <TouchableOpacity
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 40,
                }}
                onPress={() => {
                  const newAlerts = alerts.filter(
                    (x) => x.options.key !== theAlert.options.key
                  );

                  console.log("newAlerts", newAlerts.lenth);

                  // NB: we need to make a copy here, otherwise it has the same reference and the component thinks that it didn't change.
                  setAlerts([...newAlerts]);
                }}
              >
                <Text style={{ color: "blue", fontSize: 18 }}>
                  {getText("ok")}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ) : null}
    </AlertContext.Provider>
  );
};

// create the consumer as higher order component
export const withAlert = (ChildComponent) => (props) =>
  (
    <AlertContext.Consumer>
      {(context) => <ChildComponent {...props} alert={context} />}
    </AlertContext.Consumer>
  );
