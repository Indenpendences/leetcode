var preorderTraversal = function (root, arr = []) {
    if (!root) return arr;
    return [root.val,...preorderTraversal(root.left, arr),...preorderTraversal(root.right, arr)];
  };