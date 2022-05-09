import { ElectronLoadingBackgroundColor } from "./types";

export const createWrapper = ({
  backgroundColor,
}: {
  backgroundColor?: ElectronLoadingBackgroundColor;
}) => {
  const className = "electron-loading-wrapper";
  const wrapper = document.createElement("div");
  wrapper.className = className;
  const style = `
  .${className} {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background-color: ${backgroundColor};
    z-index: 9;
  }
  `;

  return {
    wrapperElement: wrapper,
    wrapperStyle: style,
  };
};
