class Hashtable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    set(key, info) {
        let location = this._hash(key);
        this.data[location] = info;
    }

    get(key) {
        return this.data[this._hash(key)];
    }
}

const myHashTable = new Hashtable(50);
myHashTable.set('grapes', 10000);
console.log(myHashTable.get('grapes')); // output: 10000;