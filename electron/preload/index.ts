import { useLoading } from "../../src/";
import { contextBridge } from "electron";

const { startLoading, stopLoading } = useLoading();

startLoading();

contextBridge.exposeInMainWorld("stopLoading", stopLoading);
