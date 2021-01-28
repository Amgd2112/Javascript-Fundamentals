class Node {
    constructor(value, previous){
        this.value = value;
        this.prev = previous;
    }
}

const _length = new WeakMap();
const _head = new WeakMap();
class Stack {
    constructor(){
        //Private properties
        _length.set(this, 0);
        _head.set(this, null);
    }

    get length(){
        return _length.get(this);
    }

    push(val) {
        // Add at the top of the last node
        let newNode = new Node(val, _head.get(this));
        _head.set(this, newNode);
        // Increment the length
        _length.set(this, _length.get(this) + 1);
    }

    pop() {
        if(!_head.get(this)) throw new Error("No item to pop :(");

        let head = _head.get(this);
        _head.set(this, head.prev);
        _length.set(this, _length.get(this) - 1);
        return head.value;
    }

    peak() {
        if(!_head.get(this)) throw new Error("No item to peak :(");
        return _head.get(this).value;
    }
}



let s = new Stack();

try{
    s.push(10);
    s.push(1);
    s.push(20);
    s.push(-1);
    

    console.log(s.peak())
    console.log(s.length);

    console.log(s.pop());
    console.log(s.pop());
    console.log(s.pop());
    console.log(s.pop());
    console.log(s.length);

    console.log(s.pop());//error

} catch (e) {
    console.log(e);
}