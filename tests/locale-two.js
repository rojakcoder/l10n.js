(function () {
test('2 locales (default)', function () {
    var input = "There is 1 book on the shelf.",
        inputVar = '%sentence',
        expectedZh = '书架上有一本书',
        expectedEn = "There is 1 book on the shelf.";

    //initiate 2 locale
    String.toLocaleString({
        'en': {
            '%sentence': 'There is 1 book on the shelf.',
            '%statement': 'The store has a shelf available.'
        },
        'zh': {
            '%sentence': '书架上有一本书'
        }
    });

    equal(input, expectedEn, 'This should work with no problem.');
    equal(input.toLocaleString(), expectedEn,
        'This should also work with no problem - no translation available.');
    equal(inputVar, '%sentence',
        'Wrong way to use l10n.');
    equal(inputVar.toLocaleString(), expectedEn,
        'Translation with variable successful.');
});

test('2 locales (EN specified)', function () {
    var input = "There is 1 book on the shelf.",
        inputVar = '%sentence',
        expectedZh = '书架上有一本书',
        expectedEn = "There is 1 book on the shelf.";

    String.locale = 'en';

    equal(input, expectedEn, 'This should work with no problem.');
    equal(input.toLocaleString(), expectedEn,
        'This should also work with no problem - no translation available.');
    equal(inputVar, '%sentence',
        'Wrong way to use l10n.');
    equal(inputVar.toLocaleString(), expectedEn,
        'Translation with variable successful.');
});

test('2 locales (ZH specified)', function () {
    var input = "There is 1 book on the shelf.",
        inputVar = '%sentence',
        inputVar1 = '%statement',
        expectedZh = '书架上有一本书',
        expectedEn = "There is 1 book on the shelf.";
        expectedEn1 = "The store has a shelf available.";

    String.locale = 'zh';

    equal(input, expectedEn, 'This should work with no problem.');
    equal(input.toLocaleString(), expectedEn,
        'This should also work with no problem - no translation available.');
    equal(inputVar, '%sentence',
        'Wrong way to use l10n.');
    equal(inputVar.toLocaleString(), expectedZh,
        'Translation with variable successful.');
    equal(inputVar1.toLocaleString(), inputVar1,
        'Locale not available, fallback not available, no default specified.');
});

test('2 locales (ZH specified, EN default)', function () {
    var input = "There is 1 book on the shelf.",
        inputVar = '%sentence',
        inputVar1 = '%statement',
        expectedZh = '书架上有一本书',
        expectedEn = "There is 1 book on the shelf.";
        expectedEn1 = "The store has a shelf available.";

    String.locale = 'zh';
    String.defaultLocale = 'en';

    equal(input, expectedEn, 'This should work with no problem.');
    equal(input.toLocaleString(), expectedEn,
        'This should also work with no problem - no translation available.');
    equal(inputVar, '%sentence',
        'Wrong way to use l10n.');
    equal(inputVar.toLocaleString(), expectedZh,
        'Translation with variable successful.');
    equal(inputVar1.toLocaleString(), expectedEn1,
        'Locale not available - using fallback.');
});
})();

