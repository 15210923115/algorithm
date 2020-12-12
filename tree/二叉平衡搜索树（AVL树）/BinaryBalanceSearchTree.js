const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5
  };

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinaryBalanceSearchTree {
    constructor() {
        this.root = null;
    }

    /**
     * Left left case: rotate right
     *
     *       b                           a
     *      / \                         / \
     *     a   e -> rotationLL(b) ->   c   b
     *    / \                             / \
     *   c   d                           d   e
     *
     * @param node Node<T>
     */
    rotationLL(node) {
        let tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
    }

    /**
     * Right right case: rotate left
     *
     *     a                              b
     *    / \                            / \
     *   c   b   -> rotationRR(a) ->    a   e
     *      / \                        / \
     *     d   e                      c   d
     *
     * @param node Node<T>
     */
    rotationRR(node) {
        let tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
    }

    /**
     * Left right case: rotate left then right
     * @param node Node<T>
     */
    rotationLR(node) {

    }

    /**
     * Right left case: rotate right then left
     * @param node Node<T>
     */
    rotationRl(node) {
        
    }

    // 计算节点高度
    getNodeHeight(node) {
        /**
         * 所以以这种层层递归的方式计算A树的高度，最终会遍历到计算叶子节点的高度。因为叶子节点的左孩子和右孩子均为空的，所以都返回了-1，叶子节点的高度就为Math.max(-1, -1) + 1 = 0了。
         */
        if (node === null) {
            return -1;
        }
        /**
         * 解释为什么是：Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1
         * 举例子：假如有一个数树，根节点为A，左孩子为B，右孩子为C
         * 要计算这个树的高度：只需要计算以节点B为根节点的子树的高度（假如高度为b）和以节点C为根节点的子树的高度（假如高度为c），求出Math.max(b, c)的最大值，然后再加上节点A本身就占据一层的高度，所以最后需要再加上1（把节点A加入到层高的一部分）
         * 
         * 所以以这种层层递归的方式计算A树的高度，最终会遍历到计算叶子节点的高度。因为叶子节点的左孩子和右孩子均为空的，所以都返回了-1，叶子节点的高度就为Math.max(-1, -1) + 1 = 0了。
         */
        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
    }

    // 获取平衡因子（注意：不要把节点高度和节点的平衡因子搞混了，节点高度考虑的是节点最长的那一条边的高度，平衡因子是节点左右两棵树的高度差）
    getBalanceFactor(node) {
        let heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);// 高度差

        switch (heightDifference) {
            case -2: return BalanceFactor.UNBALANCED_RIGHT;
            case -1: return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case  1: return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case  2: return BalanceFactor.UNBALANCED_LEFT;
            default: return BalanceFactor.BALANCED;
        }
    }

    insert(key) {
        this.root = this.insertNode(this.root, key);
    }

    insertNode(node, key) {
        if (node === null) {
            return new Node(key);
        }
        if (key < node.key) {
            node.left = this.insertNode(node.left, key);
        } else if (key >= node.key) {
            node.right = this.insertNode(node.right, key);
        } else {
            return node; // duplicated key
        }

        // verify if tree is balanced
        let balanceFactor = this.getBalanceFactor(node);

        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            if (key  < node.left.key) {
                // Left left case
                node = this.rotationLL(node);
            } else {
                // Left right case
                return this.rotationLr(node);
            }
        }

        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if (key >= node.right.key) {
                // Right right case
                node = this.rotationRR(node);
            } else {
                // Right left case
                return this.rotationRl(node);
            }
        }

        return node;
    }

    removeNode(node, key) {

    }
    
}