/*
The MIT License (MIT)

Copyright (c) 2019 TotalPave Inc

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

import {
    DictionaryIterator
} from '@breautek/iterator';

export interface IHashMapData<T> {
    [key: string]: T;
}

export default class HashMap<T> {
    private $data: IHashMapData<T>;

    public constructor(data?: IHashMapData<T>) {
        this.$data = data || {};
    }

    public set(key: string, value: T): HashMap<T> {
        this.$data[key] = value;
        return this;
    }

    public get(key: string): T {
        return this.$data[key];
    }

    public keys(): Array<string> {
        return Object.keys(this.$data);
    }

    public iterator(): DictionaryIterator<T> {
        return new DictionaryIterator(this.$data);
    }

    public toArray(): Array<T> {
        let arr: Array<T> = [];

        let iterator: DictionaryIterator<T> = this.iterator();
        while (iterator.hasNext()) {
            arr.push(iterator.next().value);
        }

        return arr;
    }
}

export {HashMap};
