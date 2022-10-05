import {Cache} from "../src/cache";

let cache = new Cache();

cache.add(12, 'hello', 5);
cache.add(32, 'world', 2);
cache.add(32, 'world', 2);
cache.add(32, 'world', 2);
cache.add(32, 'world', 3);
cache.add('str', 'this is a string', 1);

test('getLength', () => {
	expect(cache.getLength()).toBe(2);
});

test('isKey', () => {
	expect(cache.isKey(12)).toBe(true);
	expect(cache.isKey(32)).toBe(true);
	expect(cache.isKey(1)).toBe(false);
	expect(cache.isKey(-1)).toBe(false);
});

test('getCounter', () => {
	expect(cache.getCounter(12)).toBe(5);
	expect(cache.getCounter(32)).toBe(3);
	expect(cache.getCounter(-4232)).toBe(null);
});

test('getValue', () => {
	expect(cache.getValue(12) == 'hello' && cache.getCounter(12) == 4).toBe(true);
	expect(cache.getValue(32) == 'world' && cache.getCounter(32) ==2).toBe(true);
});
