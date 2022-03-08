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


function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length <= 0) return null

    let rootValue = preorder[0]
    let rootNode = new TreeNode(rootValue, null, null)
    if (preorder.length == 1) {
        return rootNode
    }

    let rootValueInorderIndex = inorder.indexOf(rootValue)

    let leftTreeInorder = inorder.slice(0, rootValueInorderIndex)
    if (leftTreeInorder.length > 0) {
        //存在左子树
        let leftTreePreorder = preorder.slice(1, 1 + leftTreeInorder.length)
        rootNode.left = buildTree(leftTreePreorder, leftTreeInorder)
    }

    const remainLength = preorder.length - 1 -leftTreeInorder.length
    if (remainLength > 0) {
        //存在右子树
        let rightTreeInorder = inorder.slice(-remainLength)
        let rightTreePreorder = preorder.slice(-remainLength)
        rootNode.right = buildTree(rightTreePreorder, rightTreeInorder)
    }

    return rootNode
}