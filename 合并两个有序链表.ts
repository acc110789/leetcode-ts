

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let head = new ListNode()
    let node = head

    while (list1 || list2) {
        if (!list1) {
            //仅剩下list2
            node.next = list2
            break
        }

        if (!list2) {
            //仅剩下list1
            node.next = list1
            break
        }

        if (list1.val <= list2.val) {
            node.next = list1
            node = node.next
            list1 = list1.next
        } else {
            node.next = list2
            node = node.next
            list2 = list2.next

        }
    }
    return head.next
}