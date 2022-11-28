import { WatchEventType } from "./WatchEventType";
/**
 * If you type a function as this interface, it will be included in the watcher of your project.
 *
 * Ensure you specify the filter. The function will only be executed from the watcher if there's a filechange within your project, and the filter is true.
 */
export declare type ProjectWatcher = {
    (eventName: WatchEventType, path: string): any;
    filter: (eventName: WatchEventType, path: string) => boolean;
};
//# sourceMappingURL=ProjectWatcher.d.ts.map