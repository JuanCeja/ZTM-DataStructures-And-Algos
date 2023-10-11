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
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            for(let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key){
                    return currentBucket[i][0];
                }
            }
        }
        return undefined;
    }

}

const myHashTable = new Hashtable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);

console.log(myHashTable.get('apples'));
console.log(myHashTable);