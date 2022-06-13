const { BinarySearchTree } = require("./tree");

describe("BinarySearchTree testing", () => {
    test("insert() works as expected", () => {
        const tree = new BinarySearchTree();
        tree.insert(5).insert(10).insert(1).insert(3);
        expect(tree.root.val).toEqual(5);
        expect(tree.root.left.val).toEqual(1);
        expect(tree.root.left.left).toEqual(null);
        expect(tree.root.left.right.val).toEqual(3);
        expect(tree.root.right.val).toEqual(10);
        expect(tree.root.right.left).toEqual(null);
        expect(tree.root.right.right).toEqual(null);
    });

    test("find() works as expected", () => {
        const tree = new BinarySearchTree();
        expect(tree.find(1)).toEqual(undefined);
        tree.insert(1).insert(2).insert(3);
        expect(tree.find(1)).toEqual(true);
        expect(tree.find(2)).toEqual(true);
        expect(tree.find(3)).toEqual(true);
        expect(tree.find(4)).toEqual(false);
    });

    test("BFS() works as expected", () => {
        const tree = new BinarySearchTree();
        tree.insert(10);
        expect(tree.BFS()).toEqual([10]);
        tree.insert(5).insert(20);
        expect(tree.BFS()).toEqual([10, 5, 20]);
        tree.insert(2).insert(6).insert(12).insert(15);
        expect(tree.BFS()).toEqual([10, 5, 20, 2, 6, 12, 15]);
    });

    test("DFSPreOrder() works as expected", () => {
        const tree = new BinarySearchTree();
        tree.insert(10).insert(5).insert(2).insert(7).insert(15).insert(12).insert(18);
        expect(tree.DFSPreOrder()).toEqual([10, 5, 2, 7, 15, 12, 18]);
    });

    test("DFSPostOrder() works as expected", () => {
        const tree = new BinarySearchTree();
        tree.insert(10).insert(5).insert(2).insert(7).insert(15).insert(12).insert(18);
        expect(tree.DFSPostOrder()).toEqual([2, 7, 5, 12, 18, 15, 10]);
    });

    test("DFSInOrder() works as expected", () => {
        const tree = new BinarySearchTree();
        tree.insert(10).insert(5).insert(2).insert(7).insert(15).insert(12).insert(18);
        expect(tree.DFSInOrder()).toEqual([2, 5, 7, 10, 12, 15, 18]);
    });
});