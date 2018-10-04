describe('Array', function() {
    let assert = chai.assert;
    it('array should be empty', function() {
        let arr = [];

        assert.equal(arr.length, 0);
    });

    it('sum should be 2', function() {
        let arr = [1, 1];
        let sum = arr[0] + arr[1];

        assert.equal(sum, 2);
    });
});