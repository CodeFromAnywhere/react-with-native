import React from "react";
import { Button, Div, P, Strong, Svg, Text } from "react-with-native";
import Box from "./Box";
import Section from "./Section";
import ReactGlobe from "../../../assets/icons/ReactGlobe.svg";
import { useRouter } from "react-with-native-router";

function HomeWrapper() {
  const router = useRouter();
  return (
    <Div>
      <Section className={"bg-main_section justify-center pt-32 pb-28 h-full"}>
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

      <Section className="justify-center px-20 py-14 lg:px-72 md:px-20 bg-dark_section">
        <Div className="grid gap-4 p-4 px-12 md:grid-cols-1 lg:grid-cols-2">
          <Div className="flex-1 text-center ">
            <Text className="text-2xl text-white bold">Open source</Text>
            <P className="p-4 text-white">
              React With Native is an open-source framework that solves
              react-native-web's severe limitations.
            </P>

            <P className="p-4 text-white">
              Share <Strong>90%</Strong> of your cosebase between your Next.js
              app and React Native app still keeping their bundles as small as
              possible.
            </P>
          </Div>

          <Div className="flex-1 text-center">
            <Text className="text-2xl text-white bold">
              React to React Native
            </Text>
            <P className="p-4 text-white">
              Convert your React applications into React Native apps.
            </P>

            <P className="p-4 text-white">
              Easy way to extend your React (Next.js) app so it can also be
              rendered in React Native
            </P>
          </Div>
        </Div>
      </Section>

      {/* <Section className="justify-center py-40 bg-dark_section">
        <Div>
          <Text className="text-3xl text-center text-white">WHY?</Text>

          <Div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-4">
            <Box className="text-white bg-main_section">
              <Text>Solve react-native-web's severe limitations</Text>
            </Box>
            <Box className="text-white bg-main_section">
              <Text>
                Share <Strong>90%</Strong> of your cosebase between your Next.js
                app and React Native app still keeping their bundles as small as
                possible
              </Text>
            </Box>
            <Box className="text-white bg-main_section">
              <Text>
                To provide an easy way to extend your React (Next.js) app so it
                can also be rendered in React Native
              </Text>
            </Box>
            <Box className="text-white bg-main_section">
              <Text>
                Because most companies come from the react side and want an app
                later, not the other way around
              </Text>
            </Box>
          </Div>
        </Div>
      </Section> */}
      {/* <Section className={"py-40 text-white bg-dark_1_section justify-center"}>
        <Text>Something</Text>
      </Section> */}
    </Div>
  );
}

export default HomeWrapper;
