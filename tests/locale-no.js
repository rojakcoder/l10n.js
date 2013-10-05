(function () {
test('toLocaleString unaffected', function () {
    var input = "The quick brown fox jumps over the lazy dog.",
        expected = "The quick brown fox jumps over the lazy dog.";
    equal(input, expected, 'This should work with no problem.');
    equal(input.toLocaleString(), expected, 'l10ns.js does not alter the default behaviour.');
});
})();

