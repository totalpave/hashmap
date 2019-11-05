
import HMap from '../src/api';
import * as HM from '../src/api';
import {HashMap} from '../src/api';

describe('Public API', () => {
    it('import HashMap', () => {
        expect(HMap).toBeTruthy();
    });

    it('import * as HashMap', () => {
        expect(HM).toBeTruthy();
    });

    it('import {HashMap}', () => {
        expect(HashMap).toBeTruthy();
    });
});
