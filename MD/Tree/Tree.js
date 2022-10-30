class Tree {
  constructor(root) {
    this.root = root;
    this.left = null;
    this.right = null;
  }
  preOrderHelper(root) {
    if (root !== null) {
      console.log(root.data);
      preOrderHelper(root.left);
      preOrderHelper(root.right);
    }
  }

  preOrder() {
    preOrderHelper(this.root);
  }
}

// let root = null;
// root = new Tree();

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// start
// độ sâu giá trị đầu tiên
// use stack

const depthFirstValues = async function (root) {
  if (root == 0) return [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current.value);
    if (current.left) {
      stack.push(current.left);
    }
    if (current.right) {
      stack.push(current.right);
    }
  }
};

const DepthFirstValues = async function (root) {
  if (root === null) return [];
  const leftValues = DepthFirstValues(root.left); // [b,d,e]
  const rightValues = DepthFirstValues(root.right); // [c,f]
  return [root.value, ...leftValues, ...rightValues];
};

// bề rộng giá trị dầu tiên
// user queue
const breadthFirstValues = async (root) => {
  if (root === null) return [];
  const values = [];
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    values.push(current.value);
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return values;
};

// cây bao gồm

const treeIncludes = (root, target) => {
  if (root === null) return false;
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.value === target) {
      return true;
    }
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return false;
};

const TreeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.value == target) return true;
  return TreeIncludes(root.left, target) || TreeIncludes(root.right, target);
};


// tree sum
