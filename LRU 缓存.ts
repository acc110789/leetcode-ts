
class Entry {

    prev: Entry | null = null
    next: Entry | null = null

    constructor(private _data: [number, number]) {}


    unlink() {
        if (this.prev) {
            this.prev.next = this.next
        }

        if (this.next) {
            this.next.prev = this.prev
        }

        this.prev = null
        this.next = null
    }

    /**
     * 将entry插入到当前节点之前
     * */
    linkToBefore(entry: Entry) {
        let oldPrev = this.prev

        this.prev = entry
        entry.prev = oldPrev

        if (oldPrev) {
            oldPrev.next = entry
        }
        entry.next = this
    }

    get value(): number {
        return this._data[1]
    }

    set value(num: number) {
        this._data[1] = num
    }

    get key(): number {
        return this._data[0]
    }

}

class LRUCache {

    private readonly cap: number
    private cache = new Map<number, Entry>()

    private head: Entry = new Entry([0, 0])
    private tail: Entry = new Entry([0, 0])

    constructor(capacity: number) {
        this.cap = capacity
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    get(key: number): number {
        let entry = this.cache.get(key)
        if (!entry) return -1

        entry.unlink()
        this.tail.linkToBefore(entry)
        return entry.value
    }

    put(key: number, value: number): void {
        let entry = this.cache.get(key)
        if (entry) {
            entry.unlink()
            this.tail.linkToBefore(entry)
            entry.value = value
            return
        }

        if (this.cache.size == this.cap) {
            //移除一个节点
            let node = this.head.next
            if (node && node !== this.tail) {
                node.unlink()
                this.cache.delete(node.key)
            }
        }

        let newEntry = new Entry([key, value])
        this.tail.linkToBefore(newEntry)
        this.cache.set(key, newEntry)
    }
}