Make sure we are covering all the HTML tags (which are used with React).
These tags must be capitalized and have the same name as the HTML ones.

For example:

HTML: `<div>`
RWN: `<Div>`

To create a tag you will have to create three files:

- TagName.tsx: used for React. You should create the RWN tag using the original HMTL tag;
- TagName.native.tsx: used for React Native (RN). You should create the RWN tag using the RN components and tailwind.
- TagName.type.ts: define the types for both platforms. Pay attention about the different React HTML types.

Make sure to test on both platforms.
Don't use external dependencies.
You can use others RWN tags to create a new one.

