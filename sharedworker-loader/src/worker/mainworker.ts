const sharedWorkerGloabal: SharedWorker.SharedWorkerGlobalScope = self as any;
//bundling other node libraries
import { workerKid } from "./workerkid";
import {AlertPrinter} from  "../printer";

sharedWorkerGloabal.onconnect = (e: MessageEvent) => {
    const port = e.ports[0];

    port.onmessage = (e: MessageEvent) => {
        if (e.data === "ping") {
            port.postMessage("Response from worker!");
        }
    }
}
