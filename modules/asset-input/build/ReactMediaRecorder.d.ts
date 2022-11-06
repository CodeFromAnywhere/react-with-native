/**
NB: taken directly from https://github.com/0x006F/react-media-recorder

Fixed the crash by catching it:

Error: There is already an encoder stored which handles exactly the same mime types.

This probably happens because the encoder gets connected more than once if you try to record something another time on the same page...

It shouldn't throw though, because the whole thing simply still works fine!
 */
import { ReactElement } from "react";
export declare type ReactMediaRecorderRenderProps = {
    error: string;
    muteAudio: () => void;
    unMuteAudio: () => void;
    startRecording: () => void;
    pauseRecording: () => void;
    resumeRecording: () => void;
    stopRecording: () => void;
    mediaBlobUrl: undefined | string;
    status: StatusMessages;
    isAudioMuted: boolean;
    previewStream: MediaStream | null;
    previewAudioStream: MediaStream | null;
    clearBlobUrl: () => void;
};
export declare type ReactMediaRecorderHookProps = {
    audio?: boolean | MediaTrackConstraints;
    video?: boolean | MediaTrackConstraints;
    screen?: boolean;
    onStop?: (blobUrl: string, blob: Blob) => void;
    onStart?: () => void;
    blobPropertyBag?: BlobPropertyBag;
    mediaRecorderOptions?: MediaRecorderOptions | undefined;
    customMediaStream?: MediaStream | null;
    stopStreamsOnStop?: boolean;
    askPermissionOnMount?: boolean;
};
export declare type ReactMediaRecorderProps = ReactMediaRecorderHookProps & {
    render: (props: ReactMediaRecorderRenderProps) => ReactElement;
};
export declare type StatusMessages = "media_aborted" | "permission_denied" | "no_specified_media_found" | "media_in_use" | "invalid_media_constraints" | "no_constraints" | "recorder_error" | "idle" | "acquiring_media" | "delayed_start" | "recording" | "stopping" | "stopped" | "paused";
export declare enum RecorderErrors {
    AbortError = "media_aborted",
    NotAllowedError = "permission_denied",
    NotFoundError = "no_specified_media_found",
    NotReadableError = "media_in_use",
    OverconstrainedError = "invalid_media_constraints",
    TypeError = "no_constraints",
    NONE = "",
    NO_RECORDER = "recorder_error"
}
export declare function useReactMediaRecorder({ audio, video, onStop, onStart, blobPropertyBag, screen, mediaRecorderOptions, customMediaStream, stopStreamsOnStop, askPermissionOnMount, }: ReactMediaRecorderHookProps): ReactMediaRecorderRenderProps;
export declare const ReactMediaRecorder: (props: ReactMediaRecorderProps) => ReactElement<any, string | import("react").JSXElementConstructor<any>>;
//# sourceMappingURL=ReactMediaRecorder.d.ts.map