const { WeightedGraph } = require("./weighted-graph");

describe("Weighted Graph & Dijkstra's Algorithm tests", () => {
    test("addVertex() works as expected", () => {
        let graph = new WeightedGraph();
        graph.addVertex("A");
        graph.addVertex("B");
        expect(Object.keys(graph.adjacencyList).length).toEqual(2);
        expect(graph.adjacencyList["A"]).toEqual([]);
        expect(graph.adjacencyList["B"]).toEqual([]);
    });

    test("addEdge() works as expected", () => {
        let graph = new WeightedGraph();
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addEdge("A", "B", 9);
        graph.addEdge("A", "C", 5);
        graph.addEdge("B", "C", 7);
        expect(graph.adjacencyList["A"].length).toEqual(2);
        const edgeAToB = graph.adjacencyList["A"].filter(edge => edge.node == "B")[0];
        expect(edgeAToB.weight).toEqual(9);
        const edgeAToC = graph.adjacencyList["A"].filter(edge => edge.node == "C")[0];
        expect(edgeAToC.weight).toEqual(5);
        const edgeBToC = graph.adjacencyList["B"].filter(edge => edge.node == "C")[0];
        expect(edgeBToC.weight).toEqual(7);
    });

    test("shortestPathDijkstra() works as expected", () => {
        const graph = new WeightedGraph();
        graph.addVertex("A").addVertex("B").addVertex("C").addVertex("D").addVertex("E").addVertex("F");
        graph.addEdge("A", "B", 4);
        graph.addEdge("A", "C", 2);
        graph.addEdge("C", "D", 2);
        graph.addEdge("C", "F", 4);
        graph.addEdge("B", "E", 3);
        graph.addEdge("D", "E", 3);
        graph.addEdge("D", "F", 1);
        graph.addEdge("F", "E", 1);
        expect(graph.shortestPathDijkstra("A", "E")).toEqual(["A", "C", "D", "F", "E"]);
        expect(graph.shortestPathDijkstra("C", "F")).toEqual(["C", "D", "F"]);
    });
});