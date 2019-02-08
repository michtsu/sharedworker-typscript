import {AlertPrinter, Printer} from "./printer";
import {PromptReader, Reader} from "./reader";
import MySharedWorker = require("sharedworker-loader?name=worker.js!./worker/mainworker");

class IOManager {
    constructor(private reader: Reader, private printer: Printer) {
    }

    performIO() {
        let worker = new MySharedWorker();
        worker.port.onmessage = (ev: MessageEvent) => {
            this.printer.print(ev.data);
        };
        
        setInterval( () => {
            worker.port.postMessage("ping")
        }, 2000 );
    }
}

const magicIO = new IOManager(new PromptReader(), new AlertPrinter());
export = magicIO;
