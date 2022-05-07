export type ElectronLoaderType =
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

export type ElectronLoaderColor = string;
export type ElectronLoaderBackgroundColor = string;
// export type ElectronLoaderLabel = string;
export type ElectronLoaderSize = number;

export type ElectronLoaderOptions = {
  loader?: ElectronLoaderType;
  color?: ElectronLoaderColor;
  backgroundColor?: ElectronLoaderBackgroundColor;
  // label?: ElectronLoaderLabel;
  size?: ElectronLoaderSize;
};
