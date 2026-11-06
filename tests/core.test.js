import {test} from 'node:test';import assert from 'node:assert/strict';import * as c from '../dist/core.js';
test('valid interval bounds and score',()=>{for(const r of [0,.1,.5,.999]){const q=c.question(r);assert.ok(q.interval>=1&&q.interval<=12)}assert.equal(c.score(2,3),67);assert.equal(c.score(0,0),0)});
