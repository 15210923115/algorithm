// https://blog.csdn.net/weixin_30363263/article/details/85702725?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control

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
    rotationRL(node) {
        
    }

    // 计算结点高度
    getNodeHeight(node) {
        if (node === null) {
            return -1;// 这个地方既可以返回0，也可以返回-1，就看根结点算第1层结点，还是第0层结点，如果是第0层，则返回-1
        }
        /**
         * 解释为什么是：Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1
         * 举例子：假如有一个数树，根结点为A，左孩子为B，右孩子为C
         * 要计算这个树的高度：只需要计算以结点B为根结点的子树的高度（假如高度为b）和以结点C为根结点的子树的高度（假如高度为c），求出Math.max(b, c)的最大值，然后再加上结点A本身就占据一层的高度，所以最后需要再加上1（结点A是层高的一部分）
         * 
         * 所以以这种层层递归的方式计算以A为根结点的树的高度，最终会遍历到计算叶子结点的高度。因为叶子结点的左孩子和右孩子均为空的，所以都返回了-1，叶子结点的高度就为Math.max(-1, -1) + 1 = 0了。（当node === null，return -1时）
         * 
         * 所以以这种层层递归的方式计算以A为根结点的树的高度，最终会遍历到计算叶子结点的高度。因为叶子结点的左孩子和右孩子均为空的，所以都返回了0，叶子结点的高度就为Math.max(0, 0) + 1 = 1了。（当node === null，return 0时）
         */
        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
    }

    // 获取平衡因子
    getBalanceFactor(node) {
        let heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);// 高度差=左子树高度-右子树高度

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
                return this.rotationLR(node);
            }
        }

        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if (key >= node.right.key) {
                // Right right case
                node = this.rotationRR(node);
            } else {
                // Right left case
                return this.rotationRL(node);
            }
        }

        return node;
    }

    removeNode(node, key) {

    }
    
}