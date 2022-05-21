import Layout from "@theme/Layout";
import React, { useRef, useState } from "react";
import { Button, Div, P, Strong, Text } from "react-with-native";
import Box from "../components/Box";
import Section from "../components/Section";
import { useRouter } from "react-with-native-router";

const Home = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <Layout noFooter>
      <Div>
        <Section
          className={"bg-main_section justify-center pt-32 pb-28 h-full"}
        >
          <Div className="flex flex-wrap justify-center">
            <Div className="flex-row order-last p-4 space-y-4 lg:order-first">
              <Text className="text-4xl text-brand md:text-6xl">
                React With Native
              </Text>
              <Text className="text-2xl text-white md:text-4xl">
                Write once, see it everywhere
              </Text>
              <Div className="mt-8 pt-7 flex justify-center lg:justify-start">
                <a
                  className="px-6 py-4 text-lg text-white transition duration-300 ease-linear lg:text-xl bg-brand hover:bg-white"
                  href="/about"
                >
                  Get started
                </a>
              </Div>
            </Div>
            <Div className="flex p-4 space-y-6">
              <img
                src="/logo.png"
                height={260}
                width={260}
                className="z-10 text-brand hover:animate-spin"
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
                react-native-web severe limitations.
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
      </Div>

      <footer
        className={
          "flex justify-center items-center border-t p-2 lg:p-6 border-gray-200 bg-white/30"
        }
      >
        <div className="relative w-6 h-6 lg:w-16 lg:h-16">
          <img className="object-fill" src={"logo.png"} alt="Sensible Logo" />
        </div>
        <p className="pl-5 text-sm lg:text-base">
          These Docs are powered by{" "}
          <a
            href="https://sensiblestack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 font-bold"
          >
            Sensible
          </a>{" "}
          and{" "}
          <a
            href="https://docusaurus.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 font-bold"
          >
            Docusaurus
          </a>
        </p>
      </footer>
    </Layout>
  );
};

export default Home;
