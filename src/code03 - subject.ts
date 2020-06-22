import { Subject } from 'rxjs';

const $subject = new Subject();

const $observer1 = $subject.subscribe(
    (data: any) => addItem('Observer1: ' + data),
    (err: any) => console.error(err),
    () => console.log('Observer Completed')
);

$subject.next('The fist thing has been sent');

const $observer2 = $subject.subscribe(
    (data: any) => addItem('Observer2: ' + data)
);

$subject.next('The second thing has been sent');
$subject.next('The third thing has been sent');

$observer2.unsubscribe();

$subject.next('Another thing has been sent');


function addItem(val: any) {
    const node = document.createElement("li");
    node.textContent = val;
    document.getElementById("output").appendChild(node);
}