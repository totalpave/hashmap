
import HMap from '../src/api';
import * as api from '../src/api';
import {HashMap} from '../src/api';
import {HashMap as RealHM} from '../src/HashMap';

describe('Public API', () => {
    it('import HashMap', () => {
        expect(HMap).toBeTruthy();
        expect(HMap).toBe(RealHM);
    });

    it('import * as HashMap', () => {
        expect(api.HashMap).toBeTruthy();
        expect(api.HashMap).toBe(RealHM);
    });

    it('import {HashMap}', () => {
        expect(HashMap).toBeTruthy();
        expect(HashMap).toBe(RealHM);
    });
});
