import { getLoader } from "./getLoader";
import { ElectronLoader } from "./type";

const defaultLoader: ElectronLoader = {
  loader: "plane",
  color: "#000",
  backgroundColor: "#fff",
  label: "",
  size: 40,
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

export const useLoading = (options = {} as ElectronLoader) => {
  const { loader, color, backgroundColor, size } = {
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
    startLoading: async () => {
      await domReady();

      document.head.appendChild(wrapperStyle);
      document.head.appendChild(loaderStyle);
      document.body.appendChild(wrapper);
    },
    stopLoading: () => {
      document.head.removeChild(wrapperStyle);
      document.head.removeChild(loaderStyle);
      document.body.removeChild(wrapper);
    },
  };
};
