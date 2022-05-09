import { getLoader } from "./getLoader";
import { ElectronLoadingLoaderOptions } from "./types";

const defaultLoader: ElectronLoadingLoaderOptions = {
  loader: "plane",
  color: "#000",
  backgroundColor: "#fff",
  // label: "",
  size: 40,
  duration: 0,
};

const domReady = (
  condition: DocumentReadyState[] = ["complete", "interactive"]
) => {
  return new Promise((resolve) => {
    if (condition.includes(document.readyState)) {
      resolve(true);
    } else {
      document.addEventListener("readystatechange", () => {
        if (condition.includes(document.readyState)) {
          resolve(true);
        }
      });
    }
  });
};

export const createLoading = (options = {} as ElectronLoadingLoaderOptions) => {
  const { loader, color, backgroundColor, size, duration } = {
    ...defaultLoader,
    ...options,
  };
  const wrapperClassName = "electron-loading-wrapper";
  const wrapper = document.createElement("div");
  wrapper.className = wrapperClassName;
  const wrapperStyle = document.createElement("style");
  const wrapperStyleContent = `
  .${wrapperClassName} {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${backgroundColor};
    z-index: 9;
  }
  `;
  wrapperStyle.innerHTML = wrapperStyleContent;
  wrapperStyle.id = "electron-loading-wrapper-style";

  const { loaderElements, loaderStyle } = getLoader({ loader, color, size });

  wrapper.appendChild(loaderElements);

  return {
    startLoading: () => {
      domReady().then(() => {
        document.head.appendChild(wrapperStyle);
        document.head.appendChild(loaderStyle);
        document.body.appendChild(wrapper);
      });
    },
    stopLoading: () => {
      setTimeout(() => {
        document.head.removeChild(wrapperStyle);
        document.head.removeChild(loaderStyle);
        document.body.removeChild(wrapper);
      }, duration);
    },
  };
};
