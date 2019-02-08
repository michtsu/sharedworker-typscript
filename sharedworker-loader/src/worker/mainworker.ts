const sharedWorkerGloabal: SharedWorker.SharedWorkerGlobalScope = self as any;

sharedWorkerGloabal.onconnect = (e: MessageEvent) => {
    const port = e.ports[0];

    port.onmessage = (e: MessageEvent) => {
        if (e.data === "ping") {
            port.postMessage("Response from worker!");
        }
    }
}
