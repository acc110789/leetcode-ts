
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1) return l2
    if (!l2) return l1

    let head = new ListNode(0)
    let current = head
    let n1 = l1
    let n2 = l2
    let carry = 0
    while (n1 || n2 || carry > 0) {
        let value = carry
        if (n1) {
            value += n1.val
            n1 = n1.next
        }
        if (n2) {
            value += n2.val
            n2 = n2.next
        }
        carry = Math.floor(value / 10)
        let node = new ListNode(value % 10)
        current.next = node
        current = node
    }

    return head.next
}