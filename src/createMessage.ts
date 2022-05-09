import {
  ElectronLoadingLoaderColor,
  ElectronLoadingMessage,
  ElectronLoadingMessageColor,
  ElectronLoadingMessageFontSize,
} from "./types";

export const createMessage = ({
  message,
  messageColor,
  messageFontSize,
  color,
}: {
  message?: ElectronLoadingMessage;
  messageColor?: ElectronLoadingMessageColor;
  messageFontSize?: ElectronLoadingMessageFontSize;
  color?: ElectronLoadingLoaderColor;
}): {
  messageElement: HTMLParagraphElement | null;
  messageStyle: string;
} => {
  if (!message) {
    return {
      messageElement: null,
      messageStyle: "",
    };
  }
  const className = "electron-loading-message";

  const style = `
  .${className} {
    color: ${messageColor ?? color};
    font-size: ${messageFontSize}px;
    margin-top: 20px;
  }`;

  const element = document.createElement("p");
  element.className = className;
  element.textContent = message;

  return {
    messageElement: element,
    messageStyle: style,
  };
};
