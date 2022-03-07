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


function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false

    function hasPathSumImpl(root: TreeNode, targetSum: number, currentSum: number): boolean {
        const newCurrentSum = currentSum + root.val

        if (!root.left && !root.right) return newCurrentSum == targetSum
        if (root.left && hasPathSumImpl(root.left, targetSum, newCurrentSum)) return true
        if (root.right && hasPathSumImpl(root.right, targetSum, newCurrentSum)) return true
        return false
    }
    return hasPathSumImpl(root, targetSum, 0)
}