import { useLoading } from "../../src/";
import { contextBridge } from "electron";

const { startLoading, stopLoading } = useLoading({
  loader: "chase",
  color: "#fff",
  backgroundColor: "#000",
  duration: 3000,
});

startLoading();

contextBridge.exposeInMainWorld("stopLoading", stopLoading);
