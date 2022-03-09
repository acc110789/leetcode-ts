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


function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    let result: number[][] = []
    if (!root) return result

    function traverse(node: TreeNode, path: number[], sum: number) {
        if (!node.left && !node.right) {
            //叶子节点
            if (sum + node.val == targetSum) {
                const pathCopy = path.slice(0)
                pathCopy.push(node.val)
                result.push(pathCopy)
            }
            return
        }

        path.push(node.val)
        const newSum = sum + node.val
        if (node.left) traverse(node.left, path, newSum)
        if (node.right) traverse(node.right, path, newSum)
        path.pop()
    }

    traverse(root, [], 0)
    return result
}