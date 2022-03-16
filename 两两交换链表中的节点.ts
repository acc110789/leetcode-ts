

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function swapPairs(head: ListNode | null): ListNode | null {
    const fake = new ListNode(-1)
    fake.next = head

    let last = fake
    let current = head

    while (current) {
        //读取两个节点
        let first = current
        current = current.next
        if (current) {
            let second = current
            current = current.next

            last.next = second
            second.next = first
            first.next = current
            last = first
        } else {
            break
        }
    }
    return fake.next
}