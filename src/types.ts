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
// export type ElectronLoaderLabel = string;
export type ElectronLoadingLoaderSize = number;

export type ElectronLoadingLoaderOptions = {
  loader?: ElectronLoadingLoaderType;
  color?: ElectronLoadingLoaderColor;
  backgroundColor?: ElectronLoadingBackgroundColor;
  // label?: ElectronLoaderLabel;
  size?: ElectronLoadingLoaderSize;
};
