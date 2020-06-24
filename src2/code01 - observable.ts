import { Observable } from 'rxjs';

const $observable = Observable.create((observer: any) => {
    try {
        observer.next('Hi');
        observer.next('How are you');

        setInterval(() => {
            observer.next('Im fine.')
        }, 2000)

        setTimeout(() => {
            observer.complete();
            observer.next('This wont show');
        }, 10001);

    } catch (err) {
        observer.error(err);
    }
});

const $observer1 = $observable.subscribe(
    (x: any) => addItem('1st -> ' + x),
    (err: any) => console.error(err),
    () => addItem('Observer has completed')
);

const $observer2 = $observable
$observer2.subscribe((x: any) => addItem('2nd -> ' + x));

setTimeout(() => {
    $observer1.unsubscribe();
    console.log('done');
}, 6001)

function addItem(val: any) {
    const node = document.createElement("li");
    node.textContent = val;
    document.getElementById("output").appendChild(node);
}