# Reader ui

reader-ui (`OperationClassification` ui-esm)



# Docs

<details><summary>deployment.md</summary>
    
  As you may have noticed, this library doesn't do any api calls and can be used in a completely static way.

If you want to deploy your markdown assets statically though, you must fill your `public` folder in your next.js project with all the assets you referred to in your markdown files, otherwise they won't be able to be found!

Luckily, we've created a little script for you to easily do this. It can be found in the package.json scripts if you've used the template. It's called `fillPublic`, and it simply runs `node fillPublic.js`, which should be a file in your folder.

All it does, is require all pages that you also require in your `getStaticPaths` function. It then filters out all `WebPage`s that aren't markdown, and will fill your public folder with all assets found in the markdown files.

If you want to use your reader pages in a production environment, all you have to do is make sure you alter the script as needed, and run it at your deployment environment.

What it looks like:

```js
const { copyReaderStaticAssets } = require("collect-static-assets");
// import your function here to get all pages for your website (including the `FileWebPage`[])
// const { getAllMyPages } = require("my-node-operation");

const fillPublic = async () => {
  // It is undefined now, but you can simply remove that and uncomment the line below.
  // const pages = await getAllMyPages();
  const pages = undefined;
  if (!pages) return;
  return copyReaderStaticAssets(process.cwd(), pages);
};
fillPublic();
```

As you can see in the comments, you need to require your `WebPage`[] and provide it to the `copyReaderStaticAssets` function.

Once you save this and attach it to the build process in your deployment, your deployment will always include your static assets in the public folder, and your assets will be able to be found.

Boom!

  </details>

# Api reference

## `<DocsReaderLayout />`

| Input      |    |    |
| ---------- | -- | -- |
| props | `MarkdownReaderPageProps` |  |
| **Output** | `JSX.Element`   |    |



## 📄 DocsReaderLayout (exported const)

# Internal

<details><summary>Show internal (13)</summary>
    
  # `<AugmentedWordComponent />`




| Input      |    |    |
| ---------- | -- | -- |
| props | { augmentedWord: `AugmentedWord`, <br />augmentedWordObject: `MappedObject<AugmentedWord>`, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<Dictionary />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { augmentedWordObject: `MappedObject<AugmentedWord>`, <br />word?: string, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<Header />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { publicBundleConfig?: {  }, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<Layout />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { publicBundleConfig?: {  }, <br />children: {  }, <br />augmentedWordObject?: `MappedObject<AugmentedWord>`, <br />menu: `MenuObjectType<FilePage>`, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<ReaderPageContent />`

This is rendering a `WebMarkdownFile` and optionally navigation.


| Input      |    |    |
| ---------- | -- | -- |
| props | `ReaderPageContentProps` |  |
| **Output** | `JSX.Element`   |    |



## `<ReaderPageHeader />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { markdownFile?: {  }, <br />projectRelativeMarkdownPath?: string, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## 📄 AugmentedWordComponent (exported const)

## 📄 Dictionary (exported const)

## 📄 Header (exported const)

## 📄 Layout (exported const)

## 📄 ReaderPageContent (exported const)

This is rendering a `WebMarkdownFile` and optionally navigation.


## 📄 ReaderPageHeader (exported const)

## 📄 { useStore, StoreProvider } (exported const)

  </details>

