/**
    我们将要实现二叉搜索树的如下功能：
    insert(key)：向树中插入一个新的键
    search(key)：在树中查找一个键，如果键存在，则返回true，否则返回false
    inOrderTraverse()：通过中序遍历方式遍历所有节点
    preOrderTraverse()：通过先序遍历方式遍历所有节点
    postOrderTraverse()：通过后序遍历方式遍历所有节点
    min()：返回树中最小的值（键）
    max()：返回树中最大的值（键）
    remove(key)：从树中移除某个键
 */



// 定义节点对象
class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null; // 根节点
    }
    
    insert(key) {
        let newNode = new Node(key);
        if (this.root === null) {
            this.root = newNode;
        } else {
            insertNode(this.root, newNode);
        }

        function insertNode(node, newNode) {
            if (newNode.key < node.key) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    insertNode(node.left, newNode);
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    insertNode(node.right, newNode);
                }
            }
        }
    }
    
    search(key) {

    }
    
    inOrderTraverse(callback) {
        inOrderTraverseNode(this.root, callback);

        function inOrderTraverseNode(node, callback) {
            if (node !== null) {
                inOrderTraverseNode(node.left, callback);
                callback(node.key);
                inOrderTraverseNode(node.right, callback);
            }
        }
    }
    
    preOrderTraverse(callback) {
        preOrderTraverseNode(this.root, callback);

        function preOrderTraverseNode(node, callback) {
            if (node !== null) {
                callback(node.key);
                preOrderTraverseNode(node.left, callback);
                preOrderTraverseNode(node.right, callback);
            }
        }
    }
    
    postOrderTraverse(callback) {
        postOrderTraverseNode(this.root, callback);

        function postOrderTraverseNode(node, callback) {
            if (node !== null) {
                postOrderTraverseNode(node.left, callback);
                postOrderTraverseNode(node.right, callback);
                callback(node.key);
            }
        }
    }
    
    min() {

    }
    
    max() {

    }
    
    remove(key) {

    }
}

let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

function print(text) {
    return function printNode(value) {
        console.log(text+value);
    }
}

tree.inOrderTraverse(print("中序遍历："));
console.log("\n");
tree.preOrderTraverse(print("先序遍历："));
console.log("\n");
tree.postOrderTraverse(print("后序遍历"));

