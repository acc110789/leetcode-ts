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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (inorder.length <= 0) return null

    const rootValue = postorder[postorder.length - 1]
    const rootNode = new TreeNode(rootValue)

    if (postorder.length == 1) return rootNode

    const rootIndexInorder = inorder.indexOf(rootValue)
    if (rootIndexInorder < inorder.length - 1) {
        //右子树存在
        const rightTreeInorder = inorder.slice(rootIndexInorder + 1)
        const rightTreePostorder = postorder.slice(-(rightTreeInorder.length + 1), -1)
        rootNode.right = buildTree(rightTreeInorder, rightTreePostorder)
    }

    if (rootIndexInorder > 0) {
        //左子树存在
        rootNode.left = buildTree(inorder.slice(0, rootIndexInorder), postorder.slice(0, rootIndexInorder))
    }
    return rootNode
}