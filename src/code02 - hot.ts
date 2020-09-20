import { Observable, fromEvent } from 'rxjs';
import { share } from 'rxjs/operators';

const $observable = fromEvent(document, 'mousemove');

setTimeout(() => {
    $observable.subscribe(
        (x: any) => addItem(x)
    );
}, 2000);



function addItem(val: any) {
    const node = document.createElement("li");
    node.textContent = val;
    document.getElementById("output").appendChild(node);
}