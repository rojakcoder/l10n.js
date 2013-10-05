(function () {
var phrase1  = "%phrase1",
    e1singular = 'There is a bear in the zoo.',
    e1plural = 'There are many bears in the zoo.',
    e1few = 'There are a few bears in the zoo.',
    e1many = 'There are many, many bears in the zoo.',
    e1dozen = 'There are dozens of bears in the zoo.',
    e1quite = 'There are quite a number of bears in the zoo.',
    e1none = 'There are no bears in the zoo.',
    e1neutral = '动物园里有很多只熊。';

test('(Using functions for plural-forms) Inequality test', function () {
    String.toLocaleString({
        'en': {
            '&plural-forms': function (n) {
                return n !== 1 ? 0 : 1;
            },
            '&plurals': [
                {
                    '%phrase1': 'There are many bears in the zoo.'
                },
                {
                    '%phrase1': 'There is a bear in the zoo.'
                }
            ]
        }
    });
    String.defaultLocale = 'en';

    equal(phrase1.toLocaleString(), e1plural,
        'NULL: Translated as "' + e1plural + '" because plural form is default.');
    equal(phrase1.toLocaleString(0), e1plural,
        '0: Translated as "' + e1plural + '".');
    equal(phrase1.toLocaleString(1), e1singular,
        '1: Translated as "' + e1singular + '".');
    equal(phrase1.toLocaleString(2), e1plural,
        '2: Translated as "' + e1plural + '".');
});

test('(Using functions for plural-forms) Equality test - singular form is default', function () {
    String.toLocaleString({
        'en': {
            '&plural-forms': function (n) {
                return n === 1 ? 0 : 1;
            },
            '&plurals': [
                {
                    '%phrase1': 'There is a bear in the zoo.'
                },
                {
                    '%phrase1': 'There are many bears in the zoo.'
                }
            ]
        }
    });
    String.defaultLocale = 'en';

    equal(phrase1.toLocaleString(), e1singular,
        'NULL: Translated as "' + e1singular + '" because singular form is default.');
    equal(phrase1.toLocaleString(0), e1plural,
        '0: Translated as "' + e1plural + '".');
    equal(phrase1.toLocaleString(1), e1singular,
        '1: Translated as "' + e1singular + '".');
    equal(phrase1.toLocaleString(2), e1plural,
        '2: Translated as "' + e1plural + '".');
});

test('(Using functions for plural-forms) Lesser than test', function () {
    String.toLocaleString({
        'en': {
            '&plural-forms': function (n) {
                return n < 5 ? 0 : 1;
            },
            '&plurals': [
                {
                    '%phrase1': 'There are a few bears in the zoo.'
                },
                {
                    '%phrase1': 'There are many, many bears in the zoo.'
                }
            ]
        }
    });
    String.defaultLocale = 'en';

    equal(phrase1.toLocaleString(), e1few,
        'NULL: Translated as "' + e1few + '" because of default.');
    equal(phrase1.toLocaleString(0), e1few,
        '0: Translated as "' + e1few + '".');
    equal(phrase1.toLocaleString(1), e1few,
        '1: Translated as "' + e1few + '".');
    equal(phrase1.toLocaleString(2), e1few,
        '2: Translated as "' + e1few + '".');
    equal(phrase1.toLocaleString(4), e1few,
        '4: Translated as "' + e1few + '".');
    equal(phrase1.toLocaleString(5), e1many,
        '5: Translated as "' + e1many + '".');
    equal(phrase1.toLocaleString(6), e1many,
        '6: Translated as "' + e1many + '".');
});

test('(Using functions for plural-forms) Lesser than, equal to test', function () {
    String.toLocaleString({
        'en': {
            '&plural-forms': function (n) {
                return n <= 5 ? 0 : 1;
            },
            '&plurals': [
                {
                    '%phrase1': 'There are a few bears in the zoo.'
                },
                {
                    '%phrase1': 'There are many, many bears in the zoo.'
                }
            ]
        }
    });
    String.defaultLocale = 'en';

    equal(phrase1.toLocaleString(), e1few,
        'NULL: Translated as "' + e1few + '" because of default.');
    equal(phrase1.toLocaleString(0), e1few,
        '0: Translated as "' + e1few + '".');
    equal(phrase1.toLocaleString(1), e1few,
        '1: Translated as "' + e1few + '".');
    equal(phrase1.toLocaleString(2), e1few,
        '2: Translated as "' + e1few + '".');
    equal(phrase1.toLocaleString(4), e1few,
        '4: Translated as "' + e1few + '".');
    equal(phrase1.toLocaleString(5), e1few,
        '5: Translated as "' + e1few + '".');
    equal(phrase1.toLocaleString(6), e1many,
        '6: Translated as "' + e1many + '".');
});

test('(Using functions for plural-forms) More than test', function () {
    String.toLocaleString({
        'en': {
            '&plural-forms': function (n) {
                return n > 5 ? 0 : 1;
            },
            '&plurals': [
                {
                    '%phrase1': 'There are many, many bears in the zoo.'
                },
                {
                    '%phrase1': 'There are a few bears in the zoo.'
                }
            ]
        }
    });
    String.defaultLocale = 'en';

    equal(phrase1.toLocaleString(), e1many,
        'NULL: Translated as "' + e1many + '" because of default.');
    equal(phrase1.toLocaleString(0), e1few,
        '0: Translated as "' + e1few + '".');
    equal(phrase1.toLocaleString(1), e1few,
        '1: Translated as "' + e1few + '".');
    equal(phrase1.toLocaleString(2), e1few,
        '2: Translated as "' + e1few + '".');
    equal(phrase1.toLocaleString(4), e1few,
        '4: Translated as "' + e1few + '".');
    equal(phrase1.toLocaleString(5), e1few,
        '5: Translated as "' + e1few + '".');
    equal(phrase1.toLocaleString(6), e1many,
        '6: Translated as "' + e1many + '".');
});

test('(Using functions for plural-forms) Lesser than, equal to test', function () {
    String.toLocaleString({
        'en': {
            '&plural-forms': function (n) {
                return n >= 5 ? 0 : 1;
            },
            '&plurals': [
                {
                    '%phrase1': 'There are many, many bears in the zoo.'
                },
                {
                    '%phrase1': 'There are a few bears in the zoo.'
                }
            ]
        }
    });
    String.defaultLocale = 'en';

    equal(phrase1.toLocaleString(), e1many,
        'NULL: Translated as "' + e1many + '" because of default.');
    equal(phrase1.toLocaleString(0), e1few,
        '0: Translated as "' + e1few + '".');
    equal(phrase1.toLocaleString(1), e1few,
        '1: Translated as "' + e1few + '".');
    equal(phrase1.toLocaleString(2), e1few,
        '2: Translated as "' + e1few + '".');
    equal(phrase1.toLocaleString(4), e1few,
        '4: Translated as "' + e1few + '".');
    equal(phrase1.toLocaleString(5), e1many,
        '5: Translated as "' + e1many + '".');
    equal(phrase1.toLocaleString(6), e1many,
        '6: Translated as "' + e1many + '".');
});

test('(Using functions for plural-forms) Mod test', function () {
    String.toLocaleString({
        'en': {
            '&plural-forms': function (n) {
                return n % 12 === 0 ? 0 : 1;
            },
            '&plurals': [
                {
                    '%phrase1': 'There are dozens of bears in the zoo.'
                },
                {
                    '%phrase1': 'There are quite a number of bears in the zoo.'
                }
            ]
        }
    });
    String.defaultLocale = 'en';

    equal(phrase1.toLocaleString(), e1dozen,
        'NULL: Translated as "' + e1dozen + '" because of default.');
    equal(phrase1.toLocaleString(0), e1dozen,
        '0: Translated as "' + e1dozen + '".');
    equal(phrase1.toLocaleString(1), e1quite,
        '1: Translated as "' + e1quite + '".');
    equal(phrase1.toLocaleString(2), e1quite,
        '2: Translated as "' + e1quite + '".');
    equal(phrase1.toLocaleString(11), e1quite,
        '11: Translated as "' + e1quite + '".');
    equal(phrase1.toLocaleString(12), e1dozen,
        '12: Translated as "' + e1dozen + '".');
    equal(phrase1.toLocaleString(13), e1quite,
        '13: Translated as "' + e1quite + '".');
    equal(phrase1.toLocaleString(24), e1dozen,
        '24: Translated as "' + e1dozen + '".');
});

test('(Using functions for plural-forms) Mod test with special treatment of 0', function () {
    String.toLocaleString({
        'en': {
            '&plural-forms':  function (n) {
                return (n % 12 === 0 && n !== 0) ? 0 : 1;
            },
            '&plurals': [
                {
                    '%phrase1': 'There are dozens of bears in the zoo.'
                },
                {
                    '%phrase1': 'There are quite a number of bears in the zoo.'
                }
            ]
        }
    });
    String.defaultLocale = 'en';

    equal(phrase1.toLocaleString(), e1dozen,
        'NULL: Translated as "' + e1dozen + '" because of default.');
    equal(phrase1.toLocaleString(0), e1quite,
        '0: Translated as "' + e1quite + '".');
    equal(phrase1.toLocaleString(1), e1quite,
        '1: Translated as "' + e1quite + '".');
    equal(phrase1.toLocaleString(2), e1quite,
        '2: Translated as "' + e1quite + '".');
    equal(phrase1.toLocaleString(11), e1quite,
        '11: Translated as "' + e1quite + '".');
    equal(phrase1.toLocaleString(12), e1dozen,
        '12: Translated as "' + e1dozen + '".');
    equal(phrase1.toLocaleString(13), e1quite,
        '13: Translated as "' + e1quite + '".');
    equal(phrase1.toLocaleString(24), e1dozen,
        '24: Translated as "' + e1dozen + '".');
});

test('(Using functions for plural-forms) Test with three forms, single operation', function () {
    String.toLocaleString({
        'en': {
            '&plural-forms': function (n) {
                return n > 1 ? 0 : n === 1 ? 1 : 2;
            },
            '&plurals': [
                {
                    '%phrase1': 'There are many bears in the zoo.'
                },
                {
                    '%phrase1': 'There is a bear in the zoo.'
                },
                {
                    '%phrase1': 'There are no bears in the zoo.'
                }
            ]
        }
    });
    String.locale = 'en';

    equal(phrase1.toLocaleString(), e1plural,
        'NULL: Translated as "' + e1plural + '" because there 1st form is default.');
    equal(phrase1.toLocaleString(0), e1none,
        '0: Translated as "' + e1none + '".');
    equal(phrase1.toLocaleString(1), e1singular,
        '1: Translated as "' + e1singular + '".');
    equal(phrase1.toLocaleString(2), e1plural,
        '2: Translated as "' + e1plural + '".');
});

test('(Using functions for plural-forms) Equality test with array position specified.', function () {
    String.toLocaleString({
        'en': {
            '&plural-forms': function (n) {
                return n === 1 ? 1 : 0;
            },
            '&plurals': [
                {
                    '%phrase1': 'There are many bears in the zoo.'
                },
                {
                    '%phrase1': 'There is a bear in the zoo.'
                }
            ]
        }
    });
    String.locale = 'en';

    equal(phrase1.toLocaleString(), e1plural,
        'NULL: Translated as "' + e1plural + '" because plural form is default.');
    equal(phrase1.toLocaleString(0), e1plural,
        '0: Translated as "' + e1plural + '".');
    equal(phrase1.toLocaleString(1), e1singular,
        '1: Translated as "' + e1singular + '".');
    equal(phrase1.toLocaleString(2), e1plural,
        '2: Translated as "' + e1plural + '".');
});

test('(Using functions for plural-forms) No plural form test', function () {
    String.toLocaleString({
        'zh': {
            '&plural-forms': function (n) {
                return 0;
            },
            '&plurals': [
                {
                    '%phrase1': '动物园里有很多只熊。'
                }
            ]
        }
    });
    String.locale = 'zh';

    equal(phrase1.toLocaleString(), e1neutral,
        'NULL: Translated as "' + e1neutral + '" because there is only 1 form.');
    equal(phrase1.toLocaleString(0), e1neutral,
        '0: Translated as "' + e1neutral + '" because there is only 1 form.');
    equal(phrase1.toLocaleString(1), e1neutral,
        '1: Translated as "' + e1neutral + '" because there is only 1 form.');
    equal(phrase1.toLocaleString(2), e1neutral,
        '2: Translated as "' + e1neutral + '" because there is only 1 form.');
});
})();

