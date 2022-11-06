/// <reference types="react" />
import { ReactMediaRecorderRenderProps } from "./ReactMediaRecorder";
/**
 * Only used for media-recorder component, no need to put it in types
 */
export declare type MediaRecorderType = "audio" | "video" | "screen";
export declare const MediaRecorderComponent: (props: ReactMediaRecorderRenderProps & {
    type: MediaRecorderType;
}) => JSX.Element;
export declare const MediaRecorder: (props: {
    type: MediaRecorderType;
    withBlob: (blobUrl: string, blob: Blob) => void;
}) => JSX.Element;
//# sourceMappingURL=MediaRecorder.d.ts.map