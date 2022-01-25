import React from "react";
import { Button, Div, Svg, Text } from "react-with-native";
import Box from "./Box";
import Section from "./Section";
import ReactGlobe from "../../../assets/icons/ReactGlobe.svg";
import { useRouter } from "react-with-native-router";

function HomeWrapper() {
  const router = useRouter();
  return (
    <Div>
      <Section className={"bg-main_section justify-center pt-32 pb-28"}>
        <Div className="flex flex-wrap justify-center">
          <Div className="flex-row order-last p-4 space-y-4 lg:order-first">
            <Text className="text-4xl text-brand md:text-6xl">
              React With Native
            </Text>
            <Text className="text-2xl text-white md:text-4xl">
              Write once, see it everywhere
            </Text>
            <Button
              className="px-6 py-4 text-lg transition duration-300 ease-linear lg:text-xl bg-brand hover:bg-white"
              onClick={() => router.push("/docs/gettingStarted")}
            >
              Get started
            </Button>
            <Button
              className="px-6 py-4 text-lg transition duration-300 ease-linear lg:text-xl text-brand hover:text-white"
              onClick={() => router.push("/docs/learnBasics")}
            >
              Learn basics ›
            </Button>
          </Div>
          <Div className="flex p-4 space-y-6">
            <Svg
              src={ReactGlobe}
              height={260}
              width={260}
              className="z-10 text-brand"
            />
          </Div>
        </Div>
      </Section>

      <Section className="justify-center py-40 bg-dark_section">
        <Div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-4">
          <Box className="text-white bg-main_section">
            <Text>Something</Text>
          </Box>
          <Box className="text-white bg-main_section">
            <Text>Something</Text>
          </Box>
          <Box className="text-white bg-main_section">
            <Text>Something</Text>
          </Box>
          <Box className="text-white bg-main_section">
            <Text>Something</Text>
          </Box>
        </Div>
      </Section>

      <Section className={"py-40 text-white bg-dark_1_section justify-center"}>
        <Text>Something</Text>
      </Section>
    </Div>
  );
}

export default HomeWrapper;
