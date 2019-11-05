

import HashMap, {IHashMapData} from '../src/HashMap';

describe('HashMap', () => {
    describe('constructor', () => {
        it('Defaults to {}', () => {
            let hmap: HashMap<any> = new HashMap<any>();
            expect(hmap.keys().length).toBe(0);
        });

        it('Accepts data in constructor', () => {
            let data: IHashMapData<any> = {
                test: '123'
            };
            let hmap: HashMap<any> = new HashMap<any>(data);
            expect(hmap.get('test')).toBe('123');
        });
    });

    describe('set', () => {
        let hmap: HashMap<string> = null;

        beforeEach(() => {
            hmap = new HashMap<string>();
        });

        it('can set new property', () => {
            hmap.set('name', 'John');
            expect(hmap.keys().length).toBe(1);
            expect(hmap.get('name')).toBe('John');
        });

        it('can override property', () => {
            hmap.set('name', 'John');
            hmap.set('name', 'Smith');
            expect(hmap.keys().length).toBe(1);
            expect(hmap.get('name')).toBe('Smith');
        });
    });

    describe('keys', () => {
        it('can get list of keys', () => {
            let hmap: HashMap<string> = new HashMap<string>({
                fname: 'John',
                lname: 'Smith'
            });

            let keys: Array<string> = hmap.keys();
            expect(keys).toEqual([ 'fname', 'lname' ]);
        });
    });
});
