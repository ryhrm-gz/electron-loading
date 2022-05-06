/**
 * Loader designed by
 * https://tobiasahlin.com/spinkit
 **/

import {
  ElectronLoaderType,
  ElectronLoaderColor,
  ElectronLoaderSize,
} from "./type";

export const getLoader = ({
  loader,
  color,
  size,
}: {
  loader?: ElectronLoaderType;
  color?: ElectronLoaderColor;
  size?: ElectronLoaderSize;
}) => {
  let elements: string = "";
  let style: string = "";
  const className = `electron-loading-sk-${loader}`;
  const px = `${size}px`;

  if (loader === "plane") {
    elements = `<div class="${className}"></div>`;
    style = `
      .${className} {
        width: ${px};
        height: ${px};
        background-color: ${color};
        animation: ${className} 1.2s infinite ease-in-out; 
      }
      
      @keyframes ${className} {
        0% {
          transform: perspective(120px) rotateX(0deg) rotateY(0deg); 
        } 50% {
          transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); 
        } 100% {
          transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); 
        } 
      }`;
  }

  if (loader === "chase") {
    elements = `
      <div class="${className}">
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
      </div>`;

    style = `
      .${className} {
        width: ${px};
        height: ${px};
        position: relative;
        animation: ${className} 2.5s infinite linear both; 
      }
      
      .${className}-dot {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0; 
        animation: ${className}-dot 2.0s infinite ease-in-out both; 
      }
      
      .${className}-dot:before {
        content: '';
        display: block;
        width: 25%;
        height: 25%;
        background-color: ${color};
        border-radius: 100%;
        animation: ${className}-dot-before 2.0s infinite ease-in-out both; 
      }
      
      .${className}-dot:nth-child(1) { animation-delay: -1.1s; }
      .${className}-dot:nth-child(2) { animation-delay: -1.0s; }
      .${className}-dot:nth-child(3) { animation-delay: -0.9s; }
      .${className}-dot:nth-child(4) { animation-delay: -0.8s; }
      .${className}-dot:nth-child(5) { animation-delay: -0.7s; }
      .${className}-dot:nth-child(6) { animation-delay: -0.6s; }
      .${className}-dot:nth-child(1):before { animation-delay: -1.1s; }
      .${className}-dot:nth-child(2):before { animation-delay: -1.0s; }
      .${className}-dot:nth-child(3):before { animation-delay: -0.9s; }
      .${className}-dot:nth-child(4):before { animation-delay: -0.8s; }
      .${className}-dot:nth-child(5):before { animation-delay: -0.7s; }
      .${className}-dot:nth-child(6):before { animation-delay: -0.6s; }
      
      @keyframes ${className} {
        100% { transform: rotate(360deg); } 
      }
      
      @keyframes ${className}-dot {
        80%, 100% { transform: rotate(360deg); } 
      }
      
      @keyframes ${className}-dot-before {
        50% {
          transform: scale(0.4); 
        } 100%, 0% {
          transform: scale(1.0); 
        } 
      }`;
  }

  if (loader === "bounce") {
    elements = `
      <div class="${className}">
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
      </div>`;

    style = `
      .${className} {
        width: ${px};
        height: ${px};
        position: relative;
      }
      
      .${className}-dot {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: ${color};
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        animation: ${className} 2s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955); 
      }
      
      .${className}-dot:nth-child(2) { animation-delay: -1.0s; }
      
      @keyframes ${className} {
        0%, 100% {
          transform: scale(0);
        } 45%, 55% {
          transform: scale(1); 
        } 
      }`;
  }

  if (loader === "wave") {
    elements = `
      <div class="${className}">
        <div class="${className}-rect"></div>
        <div class="${className}-rect"></div>
        <div class="${className}-rect"></div>
        <div class="${className}-rect"></div>
        <div class="${className}-rect"></div>
      </div>`;

    style = `
      .${className} {
        width: ${px};
        height: ${px};
        display: flex;
        justify-content: space-between;
      }
      
      .${className}-rect {
        background-color: ${color};
        height: 100%;
        width: 15%;
        animation: ${className} 1.2s infinite ease-in-out; 
      }
      
      .${className}-rect:nth-child(1) { animation-delay: -1.2s; }
      .${className}-rect:nth-child(2) { animation-delay: -1.1s; }
      .${className}-rect:nth-child(3) { animation-delay: -1.0s; }
      .${className}-rect:nth-child(4) { animation-delay: -0.9s; }
      .${className}-rect:nth-child(5) { animation-delay: -0.8s; }
      
      @keyframes ${className} {
        0%, 40%, 100% {
          transform: scaleY(0.4); 
        } 20% {
          transform: scaleY(1); 
        } 
      }`;
  }

  if (loader === "pulse") {
    elements = `<div class="${className}"></div>`;

    style = `
      .${className} {
        width: ${px};
        height: ${px};
        background-color: ${color};
        border-radius: 100%;
        animation: ${className} 1.2s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955); 
      }
      
      @keyframes ${className} {
        0% {
          transform: scale(0); 
        } 100% {
          transform: scale(1);
          opacity: 0; 
        }
      }`;
  }

  if (loader === "flow") {
    elements = `
      <div class="${className}">
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
      </div>`;

    style = `
      .${className} {
        width: calc(${px} * 1.3);
        height: calc(${px} * 1.3);
        display: flex;
        justify-content: space-between;
      }
      
      .${className}-dot {
        width: 25%;
        height: 25%;
        background-color: ${color};
        border-radius: 50%;
        animation: ${className} 1.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s infinite both;
      }
      
      .${className}-dot:nth-child(1) { animation-delay: -0.30s; }
      .${className}-dot:nth-child(2) { animation-delay: -0.15s; }
      
      @keyframes ${className} {
        0%, 80%, 100% {
          transform: scale(0.3); }
        40% {
          transform: scale(1); 
        }
      }`;
  }

  if (loader === "swing") {
    elements = `
      <div class="${className}">
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
      </div>`;

    style = `
      .${className} {
        width: ${px};
        height: ${px};
        position: relative;
        animation: ${className} 1.8s infinite linear; 
      }
        
      .${className}-dot {
        width: 45%;
        height: 45%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        background-color: ${color};
        border-radius: 100%;
        animation: ${className}-dot 2s infinite ease-in-out; 
      }
      
      .${className}-dot:nth-child(2) {
        top: auto;
        bottom: 0;
        animation-delay: -1s; 
      }
      
      @keyframes ${className} {
        100% {
          transform: rotate(360deg); 
        } 
      }
      
      @keyframes ${className}-dot {
        0%, 100% {
          transform: scale(0.2); }
        50% {
          transform: scale(1); 
        } 
      }`;
  }

  if (loader === "circle") {
    elements = `
      <div class="${className}">
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
      </div>`;

    style = `
      .${className} {
        width: ${px};
        height: ${px};
        position: relative; 
      }
      
      .${className}-dot {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
      }
      
      .${className}-dot:before {
          content: '';
          display: block;
          width: 15%;
          height: 15%;
          background-color: ${color};
          border-radius: 100%;
          animation: ${className} 1.2s infinite ease-in-out both; 
      }
      
      .${className}-dot:nth-child(1) { transform: rotate(30deg); }
      .${className}-dot:nth-child(2) { transform: rotate(60deg); }
      .${className}-dot:nth-child(3) { transform: rotate(90deg); }
      .${className}-dot:nth-child(4) { transform: rotate(120deg); }
      .${className}-dot:nth-child(5) { transform: rotate(150deg); }
      .${className}-dot:nth-child(6) { transform: rotate(180deg); }
      .${className}-dot:nth-child(7) { transform: rotate(210deg); }
      .${className}-dot:nth-child(8) { transform: rotate(240deg); }
      .${className}-dot:nth-child(9) { transform: rotate(270deg); }
      .${className}-dot:nth-child(10) { transform: rotate(300deg); }
      .${className}-dot:nth-child(11) { transform: rotate(330deg); }
      .${className}-dot:nth-child(1):before { animation-delay: -1.1s; }
      .${className}-dot:nth-child(2):before { animation-delay: -1s; }
      .${className}-dot:nth-child(3):before { animation-delay: -0.9s; }
      .${className}-dot:nth-child(4):before { animation-delay: -0.8s; }
      .${className}-dot:nth-child(5):before { animation-delay: -0.7s; }
      .${className}-dot:nth-child(6):before { animation-delay: -0.6s; }
      .${className}-dot:nth-child(7):before { animation-delay: -0.5s; }
      .${className}-dot:nth-child(8):before { animation-delay: -0.4s; }
      .${className}-dot:nth-child(9):before { animation-delay: -0.3s; }
      .${className}-dot:nth-child(10):before { animation-delay: -0.2s; }
      .${className}-dot:nth-child(11):before { animation-delay: -0.1s; }
      
      @keyframes ${className} {
        0%, 80%, 100% {
          transform: scale(0); }
        40% {
          transform: scale(1); 
        } 
      }`;
  }

  if (loader === "circle-fade") {
    elements = `
      <div class="${className}">
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
        <div class="${className}-dot"></div>
      </div>`;

    style = `
      .${className} {
        width: ${px};
        height: ${px};
        position: relative; 
      }
      
      .${className}-dot {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0; 
      }
      
      .${className}-dot:before {
        content: '';
        display: block;
        width: 15%;
        height: 15%;
        background-color: ${color};
        border-radius: 100%;
        animation: ${className} 1.2s infinite ease-in-out both; 
      }
      
      .${className}-dot:nth-child(1)  { transform: rotate(30deg);  }
      .${className}-dot:nth-child(2)  { transform: rotate(60deg);  }
      .${className}-dot:nth-child(3)  { transform: rotate(90deg);  }
      .${className}-dot:nth-child(4)  { transform: rotate(120deg); }
      .${className}-dot:nth-child(5)  { transform: rotate(150deg); }
      .${className}-dot:nth-child(6)  { transform: rotate(180deg); }
      .${className}-dot:nth-child(7)  { transform: rotate(210deg); }
      .${className}-dot:nth-child(8)  { transform: rotate(240deg); }
      .${className}-dot:nth-child(9)  { transform: rotate(270deg); }
      .${className}-dot:nth-child(10) { transform: rotate(300deg); }
      .${className}-dot:nth-child(11) { transform: rotate(330deg); }
      .${className}-dot:nth-child(1):before  { animation-delay: -1.1s; }
      .${className}-dot:nth-child(2):before  { animation-delay: -1.0s; }
      .${className}-dot:nth-child(3):before  { animation-delay: -0.9s; }
      .${className}-dot:nth-child(4):before  { animation-delay: -0.8s; }
      .${className}-dot:nth-child(5):before  { animation-delay: -0.7s; }
      .${className}-dot:nth-child(6):before  { animation-delay: -0.6s; }
      .${className}-dot:nth-child(7):before  { animation-delay: -0.5s; }
      .${className}-dot:nth-child(8):before  { animation-delay: -0.4s; }
      .${className}-dot:nth-child(9):before  { animation-delay: -0.3s; }
      .${className}-dot:nth-child(10):before { animation-delay: -0.2s; }
      .${className}-dot:nth-child(11):before { animation-delay: -0.1s; }
      
      @keyframes ${className} {
        0%, 39%, 100% {
          opacity: 0;
          transform: scale(0.6);
        } 40% {
          opacity: 1; 
          transform: scale(1);
        }
      }`;
  }

  if (loader === "grid") {
    elements = `
      <div class="${className}">
        <div class="${className}-cube"></div>
        <div class="${className}-cube"></div>
        <div class="${className}-cube"></div>
        <div class="${className}-cube"></div>
        <div class="${className}-cube"></div>
        <div class="${className}-cube"></div>
        <div class="${className}-cube"></div>
        <div class="${className}-cube"></div>
        <div class="${className}-cube"></div>
      </div>`;

    style = `
      .${className} {
        width: ${px};
        height: ${px};
        /* Cube positions
        * 1 2 3
        * 4 5 6
        * 7 8 9
        */ 
      }
      .${className}-cube {
          width: 33.33%;
          height: 33.33%;
          background-color: ${color};
          float: left;
          animation: ${className} 1.3s infinite ease-in-out; 
      }
      .${className}-cube:nth-child(1) { animation-delay: 0.2s; }
      .${className}-cube:nth-child(2) { animation-delay: 0.3s; }
      .${className}-cube:nth-child(3) { animation-delay: 0.4s; }
      .${className}-cube:nth-child(4) { animation-delay: 0.1s; }
      .${className}-cube:nth-child(5) { animation-delay: 0.2s; }
      .${className}-cube:nth-child(6) { animation-delay: 0.3s; }
      .${className}-cube:nth-child(7) { animation-delay: 0.0s; }
      .${className}-cube:nth-child(8) { animation-delay: 0.1s; }
      .${className}-cube:nth-child(9) { animation-delay: 0.2s; }
      
      @keyframes ${className} {
        0%, 70%, 100% {
          transform: scale3D(1, 1, 1); 
        } 35% {
          transform: scale3D(0, 0, 1); 
        } 
      }`;
  }

  if (loader === "fold") {
    elements = `
      <div class="${className}">
        <div class="${className}-cube"></div>
        <div class="${className}-cube"></div>
        <div class="${className}-cube"></div>
        <div class="${className}-cube"></div>
      </div>`;

    style = `
      .${className} {
        width: ${px};
        height: ${px};
        position: relative;
        transform: rotateZ(45deg); 
      }
      .${className}-cube {
        float: left;
        width: 50%;
        height: 50%;
        position: relative;
        transform: scale(1.1); 
      }
      
      .${className}-cube:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${color};
        animation: ${className} 2.4s infinite linear both;
        transform-origin: 100% 100%; 
      }
      .${className}-cube:nth-child(2) { transform: scale(1.1) rotateZ(90deg); }
      .${className}-cube:nth-child(4) { transform: scale(1.1) rotateZ(180deg); }
      .${className}-cube:nth-child(3) { transform: scale(1.1) rotateZ(270deg); }
      .${className}-cube:nth-child(2):before { animation-delay: 0.3s; }
      .${className}-cube:nth-child(4):before { animation-delay: 0.6s; }
      .${className}-cube:nth-child(3):before { animation-delay: 0.9s; }
      
      @keyframes ${className} {
        0%, 10% {
          transform: perspective(140px) rotateX(-180deg);
          opacity: 0; 
        } 25%, 75% {
          transform: perspective(140px) rotateX(0deg);
          opacity: 1; 
        } 90%, 100% {
          transform: perspective(140px) rotateY(180deg);
          opacity: 0;
        } 
      }`;
  }

  if (loader === "wander") {
    elements = `
      <div class="${className}">
        <div class="${className}-cube"></div>
        <div class="${className}-cube"></div>
        <div class="${className}-cube"></div>
        <div class="${className}-cube"></div>
      </div>`;

    style = `
      .${className} {
        width: ${px};
        height: ${px};
        position: relative; 
      }
      
      .${className}-cube {
        background-color: ${color};
        width: 20%;
        height: 20%;
        position: absolute;
        top: 0;
        left: 0;
        --${className}-distance: calc(${px} * 0.75);
        animation: ${className} 2.0s ease-in-out -2.0s infinite both;
      }
      .${className}-cube:nth-child(2) { animation-delay: -0.5s; }
      .${className}-cube:nth-child(3) { animation-delay: -1.0s; }
      
      @keyframes ${className} {
        0% {
          transform: rotate(0deg); 
        } 25% {
          transform: translateX(var(--${className}-distance)) rotate(-90deg) scale(0.6); 
        } 50% { /* Make FF rotate in the right direction */
          transform: translateX(var(--${className}-distance)) translateY(var(--${className}-distance)) rotate(-179deg); 
        } 50.1% {
          transform: translateX(var(--${className}-distance)) translateY(var(--${className}-distance)) rotate(-180deg); 
        } 75% {
          transform: translateX(0) translateY(var(--${className}-distance)) rotate(-270deg) scale(0.6);
        } 100% {
          transform: rotate(-360deg); 
        }
      }`;
  }

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = elements;

  const styleNode = document.createElement("style");
  styleNode.innerHTML = style;

  return {
    loaderElements: tempDiv.firstElementChild ?? tempDiv,
    loaderStyle: styleNode,
  };
};
