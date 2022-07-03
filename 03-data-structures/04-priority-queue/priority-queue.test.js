const { PriorityQueue } = require("./priority-queue");

describe("PriorityQueue tests", () => {
    test("enqueue() works as expected", () => {
        const queue = new PriorityQueue();
        // Simulate a party where people get to leave as per their importance
        queue.enqueue("King", 0);
        queue.enqueue("Advisor", 1);
        queue.enqueue("Commander", 3);
        queue.enqueue("Soldier", 4);
        queue.enqueue("Peasant", 7);
        expect(queue.values.length).toEqual(5);
        expect(queue.values[0]).toBeTruthy();
        expect(queue.values[0].value).toEqual("King");
        expect(queue.values[1].value).toEqual("Advisor");
    });

    test("dequeue() works as expected", () => {
        const queue = new PriorityQueue();
        queue.enqueue("King", 0);
        queue.enqueue("Advisor", 1);
        queue.enqueue("Commander", 3);
        queue.enqueue("Soldier", 4);
        queue.enqueue("Peasant", 7);
        expect(queue.dequeue().value).toEqual("King");
        expect(queue.values.length).toEqual(4);
        expect(queue.dequeue().value).toEqual("Advisor");
        expect(queue.values.length).toEqual(3);
        expect(queue.dequeue().value).toEqual("Commander");
        expect(queue.values.length).toEqual(2);
        expect(queue.dequeue().value).toEqual("Soldier");
        expect(queue.values.length).toEqual(1);
        expect(queue.dequeue().value).toEqual("Peasant");
        expect(queue.values.length).toEqual(0);
    });
});