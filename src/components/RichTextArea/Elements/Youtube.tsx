import * as React from "react";

const Youtube = ({
  children,
  videoId,
  attributes,
}: {
  children: any;
  videoId?: string;
  attributes?: any;
}) => {
  return (
    <div {...attributes} className="flex my-3">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        aria-label="Youtube video"
        frameBorder="0"
        width="560"
        height="315"
      ></iframe>
      {children}
    </div>
  );
};
export default Youtube;
