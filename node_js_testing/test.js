const chai = require('chai');
const assert = chai.assert;

var className = require('./className');

var addClass = className.addClass;

describe('Add class', function () {

    it('add class to the element', function () {
        let element = { className: '' };
        addClass(element, 'hello-world-testing');
        assert.equal(element.className, 'hello-world-testing');
    });

    it('should not add if the class already exists', function () {
        let element = { className: 'exists' };
        addClass(element, 'exists');

        let numOfClasses = element.className.split(' ').length;
        assert.equal(numOfClasses, 1);
    });

    it('should append new class after existing one', function () {
        let element = { className: 'exists' };
        addClass(element, 'new-testing');

        let classes = element.className.split(' ');
        assert.equal(classes[1], 'new-testing');
    });
});