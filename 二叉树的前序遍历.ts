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


function preorderTraversal(root: TreeNode | null): number[] {
    let result = []
    if (!root) return result

    function traverse(node: TreeNode) {
        result.push(node.val)
        if (node.left) traverse(node.left)
        if (node.right) traverse(node.right)
    }
    traverse(root)
    return result
}