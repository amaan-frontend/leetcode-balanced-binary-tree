/**
 * Definition for a binary tree node.
  * function TreeNode(val, left, right) {
   *     this.val = (val === undefined ? 0 : val);
    *     this.left = (left === undefined ? null : left);
     *     this.right = (right === undefined ? null : right);
      * }
       */

/**
 * @param {TreeNode} root
  * @return {boolean}
   */
var isBalanced = function (root) {
    // Helper function to calculate the height of a tree
    function getHeight(node) {
        if (node === null) {
            return 0;
        }

        const leftHeight = getHeight(node.left);
        const rightHeight = getHeight(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    // Helper function to check if a tree is height-balanced
    function isBalancedHelper(node) {
        if (node === null) {
            return true;
        }

        const leftHeight = getHeight(node.left);
        const rightHeight = getHeight(node.right);

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return false;
        }

        return isBalancedHelper(node.left) && isBalancedHelper(node.right);
    }

    return isBalancedHelper(root);
};
                                                                                                                                                                                                                           
