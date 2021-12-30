import { useEffect } from "react";
import ReactDOM from "react-dom";

const canUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

const Portal = ({ node, children }: { node?: any; children: any }) => {
  let defaultNode = null;

  useEffect(() => {
    return () => {
      if (defaultNode) {
        document.body.removeChild(defaultNode);
      }
      defaultNode = null;
    };
  }, []);

  if (!canUseDOM) {
    return null;
  }
  if (!node && !defaultNode) {
    defaultNode = document.createElement("div");
    document.body.appendChild(defaultNode);
  }

  return ReactDOM.createPortal(children, node || defaultNode);
};

export default Portal;
