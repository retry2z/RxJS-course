import { ReplaySubject } from 'rxjs';

const $subject = new ReplaySubject(30, 2000);

$subject.subscribe(
    (data: any) => addItem('Observer1: ' + data),
    (err: any) => console.error(err),
    () => console.log('Observer Completed')
);

let i = 1;
setInterval(() => $subject.next(i++), 1000);

setTimeout(() => {
    const $observer = $subject.subscribe(
        (data: any) => addItem('Observer2: ' + data)
    )
}, 5000)


function addItem(val: any) {
    const node = document.createElement("li");
    node.textContent = val;
    document.getElementById("output").appendChild(node);
}