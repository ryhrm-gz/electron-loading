import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <div>
      <div>
        <div>
          <p>electron-loading</p>
        </div>
      </div>
    </div>
  </StrictMode>
);

window.stopLoading();
