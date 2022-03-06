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


function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true

    return isSymmetricImpl(root.left, root.right)
}

function isSymmetricImpl(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) return true
    if (!left) return false
    if (!right) return false

    if (left.val !== right.val) return false

    return isSymmetricImpl(left.right, right.left) && isSymmetricImpl(left.left, right.right)
}