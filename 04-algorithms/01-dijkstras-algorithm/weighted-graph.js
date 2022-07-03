// A highly inefficient (n*log(n)) priority queue that serves the purpose
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(node, priority) {
        this.values.push({ node, priority });
        this.values.sort((a, b) => a.priority - b.priority); // the n*log(g) shit!
    }

    dequeue() {
        return this.values.shift();
    }
};

// To keep things simple, we will not check for edge cases in this implentation
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        return this;
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
        return this;
    }

    shortestPathDijkstra(start, finish) {
        const queue = new PriorityQueue();
        const distances = {};
        const previous = {}; // for each vertex, stores the previous vertex that resulted in the shortest path to reach the vertex

        this.initializeDijkstra({ queue, distances, previous, start });

        // as long as there's something to visit
        while (queue.values.length) {
            let smallest = queue.dequeue(); // "A", "B", etc.
            if (smallest.node == finish) {
                // We are done. Build the final path
                const path = [];
                let node = smallest.node;
                while (previous[node]) {
                    path.push(node);
                    node = previous[node];
                }
                path.push(start);
                return path.reverse();
            }

            if (smallest.node || distances[smallest.node] !== Infinity) {
                // Visit all neighbors
                for (const neighbor of this.adjacencyList[smallest.node]) {
                    // Calculate new distance to neighboring node
                    let candidateWeight = distances[smallest.node] + neighbor.weight;
                    if (candidateWeight < distances[neighbor.node]) {
                        // update new smallest distance from `start` to neighbor
                        distances[neighbor.node] = candidateWeight;
                        // update previous node of the neighbor as the newfound shortest path
                        previous[neighbor.node] = smallest.node;
                        // Enqueue into the queue so that its neighbors can be examnied later
                        queue.enqueue(neighbor.node, candidateWeight);
                    }
                }
            }
        }

    }

    initializeDijkstra({ queue, distances, previous, start }) {
        for (let vertex in this.adjacencyList) {
            if (vertex == start) {
                distances[vertex] = 0;
                queue.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                queue.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
    }
}

module.exports = { WeightedGraph };