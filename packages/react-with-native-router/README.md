# React with native router

react-with-native-router (`OperationClassification` ui-es5)



# Docs

<details><summary>README.md</summary>
    
  # Router

## `NB: Experimental package!`

`react-with-native-router` exposes `useNavigation` and `useRouter` which are 1:1 wrappers around `useNavigation` from `react-navigation` and `useRouter` from `next/router` respectively, and provide the most suitable result on web and native.

Creating screens and pages should still be done with `react-navigation` on `react-native` and using the `/pages` folder in `next.js`.

## Installation

```bash
yarn add react-with-native-router
```

In react-native-apps, you also need to be using [react-navigation](https://reactnavigation.org/) in order to use this.

## Usage

```tsx
import { useRouter, useNavigation } from "react-with-native-router";
import { Button, P } from "react-with-native";
const YourPage = () => {
  // of course, it's better to just use one of them
  // as they have the same functionality (just a different api)
  const router = useRouter();
  const navigation = useNavigation();

  return (
    <Div>
      <Button onClick={() => router.push("/")}>
        <P>Go home</P>
      </Button>

      <Button onClick={() => navigation.navigate("login")}>
        <P>Login</P>
      </Button>
    </Div>
  );
};
```

  </details>

# Api reference

## useRouter()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 useRouter (exported const)

# Internal

<details><summary>Show internal (1)</summary>
    
  # useNavigation()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { addListener: {  }, <br />canGoBack: {  }, <br />dispatch: {  }, <br />getParent: {  }, <br />getState: {  }, <br />goBack: {  }, <br />isFocused: {  }, <br />removeListener: {  }, <br />reset: {  }, <br />setOptions: {  }, <br />setParams: {  }, <br />navigate: {  }, <br /> }   |    |

  </details>

