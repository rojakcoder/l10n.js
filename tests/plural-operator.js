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

test('Inequality test', function () {
    String.toLocaleString({
        'en': {
            '&plural-forms': 'nplurals=2; plural=(n!=1)',
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

test('Equality test - singular form is default', function () {
    String.toLocaleString({
        'en': {
            '&plural-forms': 'nplurals=2; plural=(n==1)',
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

test('Lesser than test', function () {
    String.toLocaleString({
        'en': {
            '&plural-forms': 'nplurals=2; plural=(n<5)',
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

test('Lesser than, equal to test', function () {
    String.toLocaleString({
        'en': {
            '&plural-forms': 'nplurals=2; plural=(n<=5)',
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

test('More than test', function () {
    String.toLocaleString({
        'en': {
            '&plural-forms': 'nplurals=2; plural=(n>5)',
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

test('Lesser than, equal to test', function () {
    String.toLocaleString({
        'en': {
            '&plural-forms': 'nplurals=2; plural=(n>=5)',
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

test('Mod test', function () {
    String.toLocaleString({
        'en': {
            '&plural-forms': 'nplurals=2; plural=(n%12==0)',
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

test('Mod test with special treatment of 0', function () {
    String.toLocaleString({
        'en': {
            '&plural-forms': 'nplurals=2; plural=(n%12==0 && n!=0)',
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

test('Test with three forms, single operation', function () {
    String.toLocaleString({
        'en': {
            '&plural-forms': 'nplurals=3; plural=(n>1 ? 0 : n==1 ? 1 : 2)',
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
    notEqual(phrase1.toLocaleString(0), e1none,
        '0: Translated as "' + phrase1.toLocaleString(0) + '" - ONLY SUPPORTS 2 FORMS NOW.');
    notEqual(phrase1.toLocaleString(1), e1singular,
        '1: Translated as "' + phrase1.toLocaleString(1) + '" - ONLY SUPPORTS 2 FORMS NOW.');
    notEqual(phrase1.toLocaleString(2), e1plural,
        '2: Translated as "' + phrase1.toLocaleString(2) + '" - ONLY SUPPORTS 2 FORMS NOW.');
});

test('Equality test with array position specified.', function () {
    String.toLocaleString({
        'en': {
            '&plural-forms': 'nplurals=2; plural=(n==1 ? 1 : 0)',
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

test('No plural form test', function () {
    String.toLocaleString({
        'zh': {
            '&plural-forms': 'nplurals=1; plural=0',
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

