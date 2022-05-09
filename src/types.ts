export type ElectronLoadingLoaderType =
  | "plane"
  | "chase"
  | "bounce"
  | "wave"
  | "pulse"
  | "flow"
  | "swing"
  | "circle"
  | "circle-fade"
  | "grid"
  | "fold"
  | "wander";

export type ElectronLoadingLoaderColor = string;
export type ElectronLoadingBackgroundColor = string;
export type ElectronLoadingLoaderSize = number;
export type ElectronLoadingMessage = string;
export type ElectronLoadingMessageColor = string;
export type ElectronLoadingMessageFontSize = number;
export type ElectronLoadingDuration = number;

export type ElectronLoadingLoaderOptions = {
  loader?: ElectronLoadingLoaderType;
  color?: ElectronLoadingLoaderColor;
  backgroundColor?: ElectronLoadingBackgroundColor;
  size?: ElectronLoadingLoaderSize;
  message?: ElectronLoadingMessage;
  messageColor?: ElectronLoadingMessageColor;
  messageFontSize?: ElectronLoadingMessageFontSize;
  duration?: ElectronLoadingDuration;
};
