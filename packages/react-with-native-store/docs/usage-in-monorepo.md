If you are working with a monorepo, here are some tips for you. I had to learn it the hard way and after a lot of trial and error I came to this conclusion.

# Don't always use the hook/Provider directly

It can be a hassle having to use 17 different providers and hooks if you have smaller parts of your complete store in accross different packages. It's better only to use a single provider in your app, that combines all different stores you created across different packages. You should therefore not import the provider 17 times, but just:

- combine `XyzStoreType` of all your different packages into the complete `StoreType`
- combine all `xyzInitialValues` of all yoiur different packages into the complete `initialValues`
- use the result of the above with `createStore` to get your `useStore` and `StoreProvider`
- In your app, you can just use one hook and one provider. Much easier!

# Declare your storage where you need 'em

- In the different packages you don't need to provide the provider there, as long as you have the combined provider all the way up your app. In the different packages, you can create another `useStore` which is simply a subset of the complete store, and is only used in this package
