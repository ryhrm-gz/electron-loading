import { createWrapper } from "./createWrapper";
import { createLoader } from "./createLoader";
import { ElectronLoadingLoaderOptions } from "./types";
import { createMessage } from "./createMessage";

const defaultLoader: ElectronLoadingLoaderOptions = {
  loader: "plane",
  color: "#000",
  backgroundColor: "#fff",
  size: 40,
  messageFontSize: 14,
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
  const {
    loader,
    color,
    backgroundColor,
    size,
    duration,
    message,
    messageColor,
    messageFontSize,
  } = {
    ...defaultLoader,
    ...options,
  };

  const { wrapperElement, wrapperStyle } = createWrapper({ backgroundColor });
  const { loaderElements, loaderStyle } = createLoader({ loader, color, size });
  const { messageElement, messageStyle } = createMessage({
    message,
    messageColor,
    messageFontSize,
    color,
  });

  const styleElement = document.createElement("style");
  const styleContent = wrapperStyle + loaderStyle + messageStyle;
  styleElement.innerHTML = styleContent;

  wrapperElement.appendChild(loaderElements);
  messageElement && wrapperElement.appendChild(messageElement);

  return {
    startLoading: () => {
      domReady().then(() => {
        document.head.appendChild(styleElement);
        document.body.appendChild(wrapperElement);
      });
    },
    stopLoading: () => {
      setTimeout(() => {
        document.head.removeChild(styleElement);
        document.body.removeChild(wrapperElement);
      }, duration);
    },
  };
};
