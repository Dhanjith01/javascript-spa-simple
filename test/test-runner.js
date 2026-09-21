const test = require('node:test');
const assert = require('node:assert');

test('addition works', () => {
    assert.strictEqual(1 + 1, 2);
});

test('checks if element exists in array', () => {
    const array = [1, 2, 3, 4, 5];

    assert.strictEqual(array.includes(3), true);
});

test('checks if element does not exist in array', () => {
    const array = [1, 2, 3, 4, 5];

    assert.strictEqual(array.includes(10), false);
});

test('checks if object has a property', () => {
    const user = {
        name: 'Alice',
        age: 25
    };

    assert.strictEqual(Object.prototype.hasOwnProperty.call(user, 'name'), true);
});

test('checks if string has a prefix', () => {
    const text = 'Hello World';

    assert.strictEqual(text.startsWith('Hello'), true);
});