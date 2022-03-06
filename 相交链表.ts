class ListNode {
    value: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.value = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

type MyNode = ListNode | null


function getIntersectionNode(headA: MyNode, headB: MyNode): MyNode {
    let nodes = getSameLengthNode(headA, headB)

    let first = nodes[0]
    let second = nodes[1]

    if (!first) return null
    if (!second) return null

    return findCommonNode(first, second)
}

function getSameLengthNode(headA: MyNode, headB: MyNode): [MyNode, MyNode] {
    if (!headA) return [null, null]
    if (!headB) return [null, null]

    let tmpA: MyNode = headA
    let tmpB: MyNode = headB

    while (tmpA && tmpB) {
        tmpA = tmpA.next
        tmpB = tmpB.next
    }

    if (tmpA) {
        return [getRealNode(headA, tmpA) , headB]
    } else if (tmpB) {
        return [headA, getRealNode(headB, tmpB)]
    } else {
        return [headA, headB]
    }
}

function getRealNode(head: ListNode, remain: ListNode): MyNode {
    let count = 0

    let tmp: MyNode = remain
    while (tmp) {
        tmp = tmp.next
        count ++
    }

    let result = head

    while (count) {
        result = result.next
        count --
    }

    return result
}


function findCommonNode(headA: ListNode, headB: ListNode): MyNode {
    let tmpA: MyNode = headA
    let tmpB: MyNode = headB

    while (tmpA && tmpB && tmpA !== tmpB) {
        tmpA = tmpA.next
        tmpB = tmpB.next
    }

    return tmpA
}