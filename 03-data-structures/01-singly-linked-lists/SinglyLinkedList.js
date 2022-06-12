const { Node } = require("./Node");

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    // Remove from the end
    pop() {
        if (this.length == 0) return undefined;
        if (this.length == 1) {
            let node = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return node.val;
        } else {
            let node = this.head;
            while (node.next != this.tail) {
                node = node.next;
            }
            let val = this.tail.val;
            this.tail = node;
            this.length--;
            return val;
        }
    }

    // Remove from beginning
    shift() {
        if (this.length == 0) return undefined;
        let val = this.head.val;
        this.head = this.head.next;
        if (this.length == 1) this.tail = null;
        this.length--;
        return val;
    }

    // add at the beginning
    unshift(val) {
        let node = new Node(val);
        if (this.length == 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    // Retrive the item at the given position ("index")
    get(position) {
        if (position >= this.length) return undefined;
        let node = this.head;
        for (let i = 0; i < position; i++) {
            node = node.next;
        }
        return node.val;
    }

    set(position, val) {
        if (position >= this.length) return this;
        let node = this.head;
        for (let i = 0; i < position; i++) {
            node = node.next;
        }
        node.val = val;
        return this;
    }

    insert(position, val) {
        if (position >= this.length) return this;
        let node = new Node(val);

        if (position == 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let forwardPointer = this.head;
            let backwardPointer = this.head;
            for (let i = 0; i < position; i++) {
                backwardPointer = forwardPointer;
                forwardPointer = forwardPointer.next;
            }
            // after this, forwardPointer points to the position we're interested in
            backwardPointer.next = node;
            node.next = forwardPointer;
        }
        this.length++;
        return this;
    }

    remove(position) {
        if (position >= this.length) return this;

        if (this.length == 1) {
            this.head = this.tail = null;
            this.length--;
            return this;
        }

        let [backwardPointer, currentPointer] = this.getPointersForPosition(position);
        // after this, forwardPointer points to the position we're interested in
        backwardPointer.next = currentPointer.next;
        this.length--;
        return this;
    }

    reverse() {
        if (this.length == 0) return this;
        return this.reverseHelper();
    }

    reverseHelper(pos = 0, newList = null) {
        if (pos == this.length - 1) {
            newList = new SinglyLinkedList();
            newList.push(this.get(pos));
            return newList;
        };
        return this.reverseHelper(pos + 1, newList).push(this.get(pos));
    }

    getPointersForPosition(position) {
        let currentPointer = this.head;
        let backwardPointer = this.head;
        for (let i = 0; i < position; i++) {
            backwardPointer = currentPointer;
            currentPointer = currentPointer.next;
        }

        return [backwardPointer, currentPointer];
    }

}

module.exports = { SinglyLinkedList };