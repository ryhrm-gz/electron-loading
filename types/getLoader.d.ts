/**
 * Loader designed by
 * https://tobiasahlin.com/spinkit
 **/
import { ElectronLoaderType, ElectronLoaderColor, ElectronLoaderSize } from "./type";
export declare const getLoader: ({ loader, color, size, }: {
    loader?: ElectronLoaderType | undefined;
    color?: string | undefined;
    size?: number | undefined;
}) => {
    loaderElements: Element;
    loaderStyle: HTMLStyleElement;
};
//# sourceMappingURL=getLoader.d.ts.map