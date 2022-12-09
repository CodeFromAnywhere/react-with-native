# Layout

layout (`OperationClassification` ui-cjs)



# Api reference

## `<AuthenticationLayout />`

Layout that includes default pages and header for authentication


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 AuthenticationLayout (exported const)

Layout that includes default pages and header for authentication


## `<LayoutGrid />`

Style for creating a grid for the layout that is mobile friendly and has menu support



I run into this problem all the time

https://stackoverflow.com/questions/71616561/css-tailwind-grid-height-100vh-not-working

final solution came from here

https://stackoverflow.com/questions/47094742/fullscreen-flex-layouts-necessity-of-intermediate-flex-boxes

Unfortunately, I can't seem to hide stuff anymore for some reason on non-mobile. "lg:flex hidden" just doesn't work, just hides!

My elegant solution was to just use visible/invisible and make the mobile layout hover over the invisible one in case of a small screen, it works!


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 LayoutGrid (exported const)

Style for creating a grid for the layout that is mobile friendly and has menu support



I run into this problem all the time

https://stackoverflow.com/questions/71616561/css-tailwind-grid-height-100vh-not-working

final solution came from here

https://stackoverflow.com/questions/47094742/fullscreen-flex-layouts-necessity-of-intermediate-flex-boxes

Unfortunately, I can't seem to hide stuff anymore for some reason on non-mobile. "lg:flex hidden" just doesn't work, just hides!

My elegant solution was to just use visible/invisible and make the mobile layout hover over the invisible one in case of a small screen, it works!

# Internal

<details><summary>Show internal (5)</summary>
    
  # `<Header />`




| Input      |    |    |
| ---------- | -- | -- |
| props | { publicBundleConfig?: `PublicBundleConfig`, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<PingApi />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 Header (exported const)

## 📄 PingApi (exported const)

## 📄 { StoreProvider, useStore } (exported const)

  </details>

