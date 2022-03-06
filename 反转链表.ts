
// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return head

    let prev = null
    let next = head

    while (next) {
        let tmp = next.next

        next.next = prev

        //for next round
        prev = next
        next = tmp
    }

    return prev
}