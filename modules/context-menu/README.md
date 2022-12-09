# Context menu

context-menu (`OperationClassification` ui-cjs)



# Api reference

## useContextMenu()

Use this if you want to render a context menu where the menu closes if you click one of the items.

Optionally, you can create a custom renderer for it.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { renderContextMenu: {  }, <br />openContextMenuProps: { ref: { current?: ul / , <br /> }, <br />onContextMenu: {  }, <br />onTouchStart: {  }, <br />onTouchEnd: {  }, <br />onClick: {  }, <br />style: `React.CSSProperties`, <br /> }, <br />onClose: {  }, <br />isOpen: boolean, <br /> }   |    |



## 📄 useContextMenu (exported const)

Use this if you want to render a context menu where the menu closes if you click one of the items.

Optionally, you can create a custom renderer for it.

# Internal

<details><summary>Show internal (6)</summary>
    
  # `<ContextMenuItemComponent />`




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## useContextPopper()

Use this hook if you want to create your own custom render that opens on the right location once the `.onContextMenu` is fired.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { isOpen: boolean, <br />renderContextPopper: {  }, <br />onClose: {  }, <br />openContextPopperProps: { ref: { current?: ul / , <br /> }, <br />onContextMenu: {  }, <br />onTouchStart: {  }, <br />onTouchEnd: {  }, <br />onClick: {  }, <br />style: `React.CSSProperties`, <br /> }, <br /> }   |    |



## useContext()

Use this if you want to create a completely custom behavior from a context action. On top of the default `.onContextMenu` behavior, this hook enables the possibility for a custom hold duration on mobile.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { onContextMenu: {  }, <br />onTouchStart: {  }, <br />onTouchEnd: {  }, <br />onClick: {  }, <br />style: { userSelect?: none / -moz-initial / inherit / initial / revert / revert-layer / unset / -moz-none / all / auto / contain / element / text, <br /> }, <br /> }   |    |



## 📄 ContextMenuItemComponent (exported const)

## 📄 useContextPopper (exported const)

Use this hook if you want to create your own custom render that opens on the right location once the `.onContextMenu` is fired.


## 📄 useContext (exported const)

Use this if you want to create a completely custom behavior from a context action. On top of the default `.onContextMenu` behavior, this hook enables the possibility for a custom hold duration on mobile.
  </details>

