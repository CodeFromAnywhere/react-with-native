# 🔐 Authentication

`authentication` provides all kinds of components to implement an authentication layer into your project.

# Usage

1. Ensure you have `react-with-native-notification` and `react-with-native-alert` setup in your project, including the css!
2. Use the `LoginWrapper` around your whole project to ensure your user gets an authToken
3. Use `api-store` in your store to provide the possibility to store the authToken
4. Now you can use `LoginForm`, `MeAuthenticationInfo`, `SignupForm` and `UpdateMeForm` anywhere in your app to use those functionalities. They work out of the box!
5. If you want to customise anything, you can use the following and build anything with your authenticated user data

```ts
const meQuery = queries.useGetMeWithContext();
const me = meQuery.data?.result;
```
