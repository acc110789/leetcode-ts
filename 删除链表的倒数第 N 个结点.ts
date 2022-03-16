class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (n < 1) return head

    function getCount(node: ListNode | null) {
        let count = 0
        while (node) {
            count++
            node = node.next
        }
        return count
    }

    const count = getCount(head)
    if (n > count) return head

    const removeIndex = count - n

    const fake = new ListNode(-1)
    fake.next = head

    let currentIndex = 0
    let last = fake
    let current = head
    while (current) {
        if (currentIndex == removeIndex) {
            //移除当前节点
            last.next = current.next
            break
        }
        last = current
        current = current.next
        currentIndex++
    }
    return fake.next
}