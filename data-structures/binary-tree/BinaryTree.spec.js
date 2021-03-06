const {
  BinaryTreeNode,
  BinaryTreeAnalyzer,
  preOrderRecursiveTraversalStrategy,
  inOrderRecursiveTraversalStrategy,
  postOrderRecursiveTraversalStrategy,
  preOrderIterativeTraversalStrategy,
  inOrderIterativeTraversalStrategy,
  postOrderIterativeTraversalStrategy,
  levelOrderTraversalStrategy,
} = require('./BinaryTree');

const binaryTree = new BinaryTreeNode(10);

binaryTree.left = new BinaryTreeNode(15);
binaryTree.left.left = new BinaryTreeNode(3);
binaryTree.left.right = new BinaryTreeNode(6);
binaryTree.left.left.left = new BinaryTreeNode(5);

binaryTree.right = new BinaryTreeNode(30);
binaryTree.right.right = new BinaryTreeNode(2);
binaryTree.right.right.left = new BinaryTreeNode(9);
binaryTree.right.right.right = new BinaryTreeNode(8);

const preOrderResult = [10, 15, 3, 5, 6, 30, 2, 9, 8];
const inOrderResult = [5, 3, 15, 6, 10, 30, 9, 2, 8];
const postOrderResult = [5, 3, 6, 15, 9, 8, 2, 30, 10];
const levelOrderResut = [10, 15, 30, 3, 6, 2, 5, 9, 8];

describe('Traversing a Binary Tree using a preOrderRecursiveTraversalStrategy', () => {
  test('should visit each BinaryTreeNode pre-order.', () => {
    const values = [];
    const analyzer = new BinaryTreeAnalyzer(preOrderRecursiveTraversalStrategy);
    analyzer.printValues(binaryTree, value => values.push(value));
    expect(values).toEqual(preOrderResult);
  });
});

describe('Traversing a Binary Tree using a inOrderRecursiveTraversalStrategy', () => {
  test('should visit each BinaryTreeNode in-order.', () => {
    const values = [];
    const analyzer = new BinaryTreeAnalyzer(inOrderRecursiveTraversalStrategy);
    analyzer.printValues(binaryTree, value => values.push(value));
    expect(values).toEqual(inOrderResult);
  });
});

describe('Traversing a Binary Tree using a postOrderRecursiveTraversalStrategy', () => {
  test('should visit each BinaryTreeNode post-order.', () => {
    const values = [];
    const analyzer = new BinaryTreeAnalyzer(
      postOrderRecursiveTraversalStrategy,
    );
    analyzer.printValues(binaryTree, value => values.push(value));
    expect(values).toEqual(postOrderResult);
  });
});

describe('Traversing a Binary Tree using a preOrderIterativeTraversalStrategy', () => {
  test('should visit each BinaryTreeNode pre-order.', () => {
    const values = [];
    const analyzer = new BinaryTreeAnalyzer(preOrderIterativeTraversalStrategy);
    analyzer.printValues(binaryTree, value => values.push(value));
    expect(values).toEqual(preOrderResult);
  });
});

describe('Traversing a Binary Tree using a inOrderIterativeTraversalStrategy', () => {
  test('should visit each BinaryTreeNode in-order.', () => {
    const values = [];
    const analyzer = new BinaryTreeAnalyzer(inOrderIterativeTraversalStrategy);
    analyzer.printValues(binaryTree, value => values.push(value));
    expect(values).toEqual(inOrderResult);
  });
});

describe('Traversing a Binary Tree using a postOrderIterativeTraversalStrategy', () => {
  test('should visit each BinaryTreeNode post-order.', () => {
    const values = [];
    const analyzer = new BinaryTreeAnalyzer(
      postOrderIterativeTraversalStrategy,
    );
    analyzer.printValues(binaryTree, value => values.push(value));
    expect(values).toEqual(postOrderResult);
  });
});

describe('Traversing a Binary Tree using a levelOrderTraversalStrategy', () => {
  test('should visit each BinaryTreeNode level-order.', () => {
    const values = [];
    const analyzer = new BinaryTreeAnalyzer(levelOrderTraversalStrategy);
    analyzer.printValues(binaryTree, value => values.push(value));
    expect(values).toEqual(levelOrderResut);
  });
});
