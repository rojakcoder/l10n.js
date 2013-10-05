test('1 locale (default)', function () {
    var input = "There is 1 book on the shelf.",
        inputVar = '%sentence',
        expected = "There is 1 book on the shelf.";

    //initiate 1 locale
    String.toLocaleString({
        'en': {
            '%sentence': 'There is 1 book on the shelf.'
        }
    });

    equal(input, expected, 'This should work with no problem.');
    equal(input.toLocaleString(), expected,
        'This should also work with no problem.');
    equal(inputVar, '%sentence',
        'Wrong way to use l10n.');
    equal(inputVar.toLocaleString(), expected,
        'Translation with variable successful.');
});

test('1 locale (specified)', function () {
    var input = "There is 1 book on the shelf.",
        inputVar = '%sentence',
        expected = "There is 1 book on the shelf.";

    String.locale = 'en';

    equal(input, expected, 'This should work with no problem.');
    equal(input.toLocaleString(), expected,
        'This should also work with no problem.');
    equal(inputVar, '%sentence',
        'Wrong way to use l10n.');
    equal(inputVar.toLocaleString(), expected,
        'Translation with variable successful.');
});

