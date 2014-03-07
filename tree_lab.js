// Lab instructions.
// insert new values into the binary tree
// such that, values on the left are less than
// the current value. values on the right are 
// greater than or equal.

function BinaryTree(value) {
  this.value = value || null;
  this.leftChild = null;
  this.rightChild = null;
}

// per lab, requested to write an isEmpty function
// returning true if left and right children are null.
// methinks better named...
BinaryTree.prototype.noChildren = function() {
  return (this.leftChild === null && this.rightChild === null);
};

// PRE coding pseudo code...
// if newval < tree.val, look left
//    if nothing left, add left
//    else go left, check again
// else (look right)
//    if nothing right, add right
//    else go right, check again
BinaryTree.prototype.insertValue = function(newValue) {
  // handle an empty root node
  if (this.value === null) {
    this.value = newValue;
  }
  else {
    // insert newValue into an existing/populated tree  
    if (newValue < this.value) {
      if (this.leftChild === null) {
        this.leftChild = new BinaryTree(newValue);
      }
      else {
        treeInsertValue(this.leftChild, newValue);
      }
    }
    else {
      if (this.rightChild === null) {
        this.rightChild = new BinaryTree(newValue);
      }
      else {
        treeInsertValue(this.rightChild, newValue);
      }
    }
  }
};

// non-prototype function version (wrote this prior to prototype version)
function treeInsertValue(tree, newValue) {
  // handle an empty root node
  if (tree.value === null) {
    tree.value = newValue;
  }
  else {
    // insert newValue into an existing/populated tree  
    if (newValue < tree.value) {
      if (tree.leftChild === null) {
        tree.leftChild = new BinaryTree(newValue);
      }
      else {
        treeInsertValue(tree.leftChild, newValue);
      }
    }
    else {
      if (tree.rightChild === null) {
        tree.rightChild = new BinaryTree(newValue);
      }
      else {
        treeInsertValue(tree.rightChild, newValue);
      }
    }
  }
}

bt = new BinaryTree();
treeInsertValue(bt, 17);
treeInsertValue(bt, 9);
treeInsertValue(bt, 25);
treeInsertValue(bt, 14);


// my (self written) count leafs function
var leafCount = 0;

function countLeaves(tree) {
  // if the node is a leaf, increment leaf count
  if (tree.noChildren()) {    
    leafCount++;
  }
  else {
    // count all leaves on the left
    if (tree.leftChild !== null) {
      countLeaves(tree.leftChild);
    }
    // count all leaves on the right
    if (tree.rightChild !== null) {
      countLeaves(tree.rightChild);
    }
  }
  // return incremented leaf count (recursively adds both sides)
  return leafCount;
}

// CLASS DISCUSSED SOLUTION (pseudo code)
// countLeaves(node)
//   if node is null
//     return 0
//   if left and right null
//     return 1
//   return countLeaves(node left) + countLeaves(node right)
// end
var root = { left: null, right: null };

function countLeaves2(node) {
  if (node === null) {
    return 0;
  }

  if (node.left === null && node.right === null) {
    return 1;
  }

  return countLeaves2(node.left) + countLeaves2(node.right);
}
// cool solution in that no count var is needed.
// cumulated count is maintained by stack.

// only the root
countLeaves2(root);

// give the root a left node
root.left = { left: null, right: null };

// count with the root having a left child
countLeaves2(root);

// give the root a right node
root.right = { left: null, right: null };

// count with the root having a left and a right
countLeaves2(root);

