/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This determines the format of the recording. Defaults to `wav;l16`.
 *
 * @default 'wav;l16'
 */
export type ArtifactPlanRecordingFormat = "wav;l16" | "mp3";
export const ArtifactPlanRecordingFormat = {
    WavL16: "wav;l16",
    Mp3: "mp3",
} as const;
