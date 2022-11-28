# Editing authorization

By default, all functions are only available for admins. To allow public access to a backend function through the api, ensure the function gets indexed with the proper permissions. By default, the functions are `search, read`. You can change them by adding frontmatter like this

```ts
/**
---
publicAuthorization: read, search, execute
---

Your doccomment here
*/
```

This overwrites the public authorisation.

# Editing api availability

By default, every exported backend function will become available through the api after indexation of the operation and generating the SDK.

If you want to disable that for a function, you can do so by disabling it altogether, by adding this parameter into your frontmatter.

```ts
/**
---
isApiExposed: false
---

Your doccomment here
*/
const yourFunction = () => void
```
