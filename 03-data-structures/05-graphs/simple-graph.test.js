const { SimpleGraph } = require("./simple-graph");

describe("SimpleGraph tests", () => {
    test("addVertex() works as expected", () => {
        const graph = new SimpleGraph();
        expect(graph.adjacencyList).toEqual({});
        graph.addVertex("A");
        expect(Object.keys(graph.adjacencyList).length).toEqual(1);
        expect(Object.keys(graph.adjacencyList)[0]).toEqual("A");
        graph.addVertex("B");
        expect(Object.keys(graph.adjacencyList).length).toEqual(2);
        expect(Object.keys(graph.adjacencyList)[1]).toEqual("B");
        expect(graph.adjacencyList["A"]).toEqual
    });

    test("addEdge() works as expected", () => {
        const graph = new SimpleGraph();
        graph.addEdge("A", "B").addEdge("C", "D");
        expect(Object.keys(graph.adjacencyList).length).toEqual(4);
        expect(graph.adjacencyList["A"]).toEqual(["B"]);
        expect(graph.adjacencyList["B"]).toEqual(["A"]);
        graph.addEdge("A", "E");
        expect(Object.keys(graph.adjacencyList).length).toEqual(5);
        expect(graph.adjacencyList["A"]).toEqual(["B", "E"]);
    });

    test("removeEdge() works as expected", () => {
        const graph = new SimpleGraph();
        graph.addEdge("A", "B").addEdge("C", "D");
        graph.removeEdge("C", "D");
        expect(graph.adjacencyList["C"]).toEqual([]);
        expect(graph.adjacencyList["D"]).toEqual([]);
        expect(graph.adjacencyList["A"]).toEqual(["B"]);
        expect(graph.adjacencyList["B"]).toEqual(["A"]);
    });

    test("removeVertex() works as expected", () => {
        const graph = new SimpleGraph();
        graph.addEdge("A", "B").addEdge("C", "D").addEdge("A", "E");
        // Now, A -> B, A-> E, and C-> D are the three connections
        graph.removeVertex("A");
        expect(graph.adjacencyList["A"]).toEqual(undefined);
        expect(graph.adjacencyList["B"].indexOf("A")).toEqual(-1);
        expect(graph.adjacencyList["E"].indexOf("A")).toEqual(-1);
        // C and D are unaffected
        expect(graph.adjacencyList["C"]).toEqual(["D"]);
        expect(graph.adjacencyList["D"]).toEqual(["C"]);
    });

    test("DFS recursive works as expected", () => {
        const graph = new SimpleGraph();
        graph.addEdge("A", "B");
        graph.addEdge("A", "C");
        graph.addEdge("B", "D");
        graph.addEdge("C", "E");
        graph.addEdge("D", "E");
        graph.addEdge("D", "F");
        graph.addEdge("E", "F");
        expect(graph.depthFirstTraveseRecursive("A")).toEqual(['A', 'B', 'D', 'E', 'C', 'F']); // Test output copied from console.log!
    });

    test("DFS iterative works as expected", () => {
        const graph = new SimpleGraph();
        graph.addEdge("A", "B");
        graph.addEdge("A", "C");
        graph.addEdge("B", "D");
        graph.addEdge("C", "E");
        graph.addEdge("D", "E");
        graph.addEdge("D", "F");
        graph.addEdge("E", "F");
        expect(graph.depthFirstTraveseIterative("A")).toEqual(['A', 'C', 'E', 'F', 'D', 'B']); // Test output copied from console.log!
    });

    test("BFS works as expected", () => {
        const graph = new SimpleGraph();
        graph.addEdge("A", "B");
        graph.addEdge("A", "C");
        graph.addEdge("B", "D");
        graph.addEdge("C", "E");
        graph.addEdge("D", "E");
        graph.addEdge("D", "F");
        graph.addEdge("E", "F");
        expect(graph.breadthFirstTraversal("A")).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
    });
});