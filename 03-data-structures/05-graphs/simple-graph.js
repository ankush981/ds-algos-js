class SimpleGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        // Ignore Vertex if already exists
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
        return this;
    }

    addEdge(vertex1, vertex2) {
        // Add two-way connection
        if (!this.adjacencyList[vertex1]) this.adjacencyList[vertex1] = [];
        if (!this.adjacencyList[vertex2]) this.adjacencyList[vertex2] = [];

        if (this.adjacencyList[vertex1].indexOf(vertex2) == -1) this.adjacencyList[vertex1].push(vertex2);
        if (this.adjacencyList[vertex2].indexOf(vertex1) == -1) this.adjacencyList[vertex2].push(vertex1);
        return this;
    }

    removeEdge(vertex1, vertex2) {
        // We need to check the connection both ways
        if (this.adjacencyList[vertex1]) {
            const newList = this.adjacencyList[vertex1].filter(v => v != vertex2);
            this.adjacencyList[vertex1] = newList;
        }

        if (this.adjacencyList[vertex2]) {
            const newList = this.adjacencyList[vertex2].filter(v => v != vertex1);
            this.adjacencyList[vertex2] = newList;
        }

        return this;
    }

    removeVertex(vertex) {
        const keysToRemove = this.adjacencyList[vertex];
        delete this.adjacencyList[vertex];
        // Also need to remove edges this vertex was involved in
        for (const key of keysToRemove) {
            this.removeEdge(vertex, key);
        }
        return this;
    }

    depthFirstTraveseRecursive(startVertex) {
        const result = [];
        const visitedNodes = {};
        const adjacencyList = this.adjacencyList; // prevent problems with "this" later on

        // helper function
        (function dfs(vertex) {
            if (!vertex) return null;
            visitedNodes[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighhbor => {
                if (!visitedNodes[neighhbor]) return dfs(neighhbor);
            });
        })(startVertex);
        return result;
    }

    depthFirstTraveseIterative(startVertex) {
        const result = [];
        const stack = [startVertex];
        const visited = {};
        visited[startVertex] = true;

        while (stack.length) {
            const currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }

    breadthFirstTraversal(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;

        while (queue.length) {
            const currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}

module.exports = { SimpleGraph };