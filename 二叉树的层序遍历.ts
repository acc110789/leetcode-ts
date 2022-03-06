
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


function levelOrder(root: TreeNode | null): number[][] {
    let result: number[][] = []
    if (!root) return result

    let nodes: TreeNode[] = []
    nodes.push(root)

    while (nodes.length > 0) {
        let currentLevelResult: number[] = []
        let nextLevelNodes: TreeNode[] = []
        nodes.forEach((value, index, array) => {
            currentLevelResult.push(value.val)
            if (value.left) nextLevelNodes.push(value.left)
            if (value.right) nextLevelNodes.push(value.right)
        })
        result.push(currentLevelResult)
        nodes = nextLevelNodes
    }

    return result
}