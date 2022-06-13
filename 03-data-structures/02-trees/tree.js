class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        // Go on comparing until we find a leaf node whose left or right 
        // in null (as needed).
        const newNode = new Node(val);
        if (this.root == null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (val == currentNode.val) break; // ignore duplicates
                if (val < currentNode.val) {
                    if (currentNode.left == null) {
                        currentNode.left = newNode;
                        break;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else {
                    if (currentNode.right == null) {
                        currentNode.right = newNode;
                        break;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }

        return this;
    }

    find(val) {
        if (!this.root) return undefined;
        let currentNode = this.root;
        while (true) {
            if (currentNode.val == val) return true;
            if (val < currentNode.val) {
                if (!currentNode.left) return false;
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) return false;
                currentNode = currentNode.right;
            }
        }
    }

    BFS() {
        if (!this.root) return undefined;
        let data = [];
        let queue = [];

        queue.push(this.root);
        let node;
        while (queue.length) {
            node = queue.shift(); // save memory by not using `const` every time
            data.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data;
    }

    DFSPreOrder() {
        let data = [];

        function traverse(node) {
            data.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }

    DFSPostOrder() {
        let data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.val);
        }

        traverse(this.root);
        return data;
    }

    DFSInOrder() {
        let data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.val);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }
}

module.exports = { BinarySearchTree }