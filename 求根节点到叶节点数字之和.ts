class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function sumNumbers(root: TreeNode | null): number {
    let sum = 0
    if (!root) return sum

    function traverse(node: TreeNode, currentSum: number) {
        let newSum = currentSum * 10 + node.val
        if (!node.left && !node.right) {
            sum += newSum
            return
        }

        if (node.left) traverse(node.left, newSum)
        if (node.right) traverse(node.right, newSum)
    }
    traverse(root, 0)
    return sum
}