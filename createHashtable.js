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

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address] = [[key, value]];
    }

    get(key) {
        
    }

}

const myHashTable = new Hashtable(50);
console.log(myHashTable.set('grapes', 10000));
console.log(myHashTable); // output: 10000;