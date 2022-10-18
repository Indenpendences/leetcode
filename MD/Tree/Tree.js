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
