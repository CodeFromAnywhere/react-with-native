**UPDATE** No need for these workarounds anymore! You can simply use the newer version of next.js. Couldn't find exactly when they added support, but in `13.3.1` it just magically works! Related RFC: https://github.com/vercel/next.js/discussions/31517

# Before

Use `next/dynamic` if you want to use this in next.js, as it will crash when it is tried with SSR.

See https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr for more info.

```ts
import dynamic from "next/dynamic";

const AssetUI = dynamic(() => import("asset-ui"), {
  ssr: false,
});
```

You can also just use `asset-input-next`, where I did this for you!

The problem with this, though, is we can't easily create components without using `next/dynamic`. Every component needs to expose the regular one and the one that is wrapped with `next/dynamic`. This is annoying because next is a huge dependency, so it requires you to create two packages every time: a regular one and one for next.js support.

The reason why it's crashing is because `new Worker(xyz)` is executed during SSR within a Node.js environment. In the browser, `Worker` is a global class, but in Next.js it doesn't exist.

It gets executed by this file: `/node_modules/extendable-media-recorder-wav-encoder-broker/src/module.ts`

it is imported here: `/Users/king/King/operations/node_modules/extendable-media-recorder-wav-encoder/src/module.ts`
