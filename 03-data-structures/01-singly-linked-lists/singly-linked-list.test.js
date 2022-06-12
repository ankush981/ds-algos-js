const { SinglyLinkedList } = require("./SinglyLinkedList");

describe("Singly linked list", () => {
    test("push() works as expected", () => {
        let list = new SinglyLinkedList();
        list.push(1);
        list.push(2);
        expect(list.length).toEqual(2);
    });

    test("pop() works as expected", () => {
        let list = new SinglyLinkedList();
        list.push(1);
        list.push(2);
        let popped = list.pop();
        expect(popped).toEqual(2);
        expect(list.length).toEqual(1);
        popped = list.pop();
        expect(popped).toEqual(1);
        expect(list.length).toEqual(0);
        popped = list.pop();
        expect(popped).toEqual(undefined);
        expect(list.length).toEqual(0);
    });

    test("shift() works as expected", () => {
        let list = new SinglyLinkedList();
        list.push(1);
        list.push(2);
        let val = list.shift();
        expect(val).toEqual(1);
        expect(list.length).toEqual(1);
        val = list.shift();
        expect(val).toEqual(2);
        expect(list.length).toEqual(0);
        val = list.shift();
        expect(val).toEqual(undefined);
        expect(list.length).toEqual(0);
    });

    test("unshift() works as expected", () => {
        let list = new SinglyLinkedList();
        list.unshift(1);
        expect(list.length).toEqual(1);
        list.unshift(2);
        expect(list.length).toEqual(2);
        let val = list.shift();
        expect(val).toEqual(2);
        expect(list.length).toEqual(1);
    });

    test("get() works as expected", () => {
        let list = new SinglyLinkedList();
        expect(list.get(0)).toEqual(undefined);
        expect(list.get(7)).toEqual(undefined);

        list.push(10).push(20).push(30);
        expect(list.get(0)).toEqual(10);
        expect(list.get(1)).toEqual(20);
        expect(list.get(2)).toEqual(30);

        list.shift();
        expect(list.get(0)).toEqual(20);
    });

    test("set() works as expected", () => {
        let list = new SinglyLinkedList();
        list.set(0, 10);
        expect(list.length).toEqual(0);
        list.push(1).push(2).push(3);
        expect(list.length).toEqual(3);
        list.set(0, 10);
        expect(list.length).toEqual(3);
        expect(list.get(0)).toEqual(10);
        expect(list.get(1)).toEqual(2);
    });

    test("insert() works as expected", () => {
        let list = new SinglyLinkedList();
        list.push(1).push(2);
        list.insert(0, 0);
        expect(list.length).toEqual(3);
        expect(list.get(0)).toEqual(0);
        expect(list.get(1)).toEqual(1);
        list.insert(2, 3); // 0 -> 1 -> 3 -> 2
        expect(list.length).toEqual(4);
        expect(list.get(2)).toEqual(3);
    });

    test("remove() works as expected", () => {
        let list = new SinglyLinkedList();
        list.push(1).push(2).push(3).push(4);
        list.remove(1);
        expect(list.length).toEqual(3);
        expect(list.get(0)).toEqual(1);
        expect(list.get(1)).toEqual(3);
        expect(list.get(2)).toEqual(4);
    });

    test("reverse() works as expected", () => {
        let list = new SinglyLinkedList();
        list.push("a").push("b").push("c");
        let reversedList = list.reverse();
        expect(reversedList.length).toEqual(3);
        expect(reversedList.get(0)).toEqual("c");
        expect(reversedList.get(1)).toEqual("b");
        expect(reversedList.get(2)).toEqual("a");
    });
});