(function () {
var phrase1 = "%all",
    phrase2 = "%noZhTw",
    phrase3 = "%noZh",
    phrase4 = "%noZhEnGb",
    p1 = '友善的鄰里。',
    p2 = '友善的邻里。',
    p3 = 'The neighbourhood is very friendly.',
    p4 = 'The neighbourhoods are very friendly.',
    p5 = 'The neighborhood is very friendly.',
    p6 = 'The neighborhoods are very friendly.';

test('(Using functions for plural-forms) en, en-GB, zh & zh-TW: default', function () {
    //reset to default
    String.defaultLocale = "";
    String.locale = (navigator && (navigator.language || navigator.userLanguage)) || "";
    String.toLocaleString(false);

    String.toLocaleString({
        'en': {
            '&plural-forms': function (n) {
                return (n !== 1) ? 0 : 1
            },
            '&plurals': [
                {
                    '%all':         'The neighborhoods are very friendly.',
                    '%noZhTw':      'The neighborhoods are very friendly.',
                    '%noZh':        'The neighborhoods are very friendly.',
                    '%noZhEnGb':    'The neighborhoods are very friendly.'
                },
                {
                    '%all':         'The neighborhood is very friendly.',
                    '%noZhTw':      'The neighborhood is very friendly.',
                    '%noZh':        'The neighborhood is very friendly.',
                    '%noZhEnGb':    'The neighborhood is very friendly.'
                }
            ]
        },
        'en-GB': {
            '&plural-forms': function (n) {
                return (n !== 1) ? 0 : 1;
            },
            '&plurals': [
                {
                    '%all':         'The neighbourhoods are very friendly.',
                    '%noZhTw':      'The neighbourhoods are very friendly.',
                    '%noZh':        'The neighbourhoods are very friendly.'
                },
                {
                    '%all':         'The neighbourhood is very friendly.',
                    '%noZhTw':      'The neighbourhood is very friendly.',
                    '%noZh':        'The neighbourhood is very friendly.'
                }
            ]
        },
        'zh': {
            '&plural-forms': function (n) {
                return 0;
            },
            '&plurals': [
                {
                    '%all':         '友善的邻里。',
                    '%noZhTw':      '友善的邻里。',
                }
            ]
        },
        'zh-TW': {
            '&plural-forms': 'nplurals=1; plural=0',
            '&plurals': [
                {
                    '%all':         '友善的鄰里。',
                }
            ]
        }
    });

    equal(phrase1.toLocaleString(), p6,
        'NULL: Translated as "' + p6 + '" because plural form is default and implicit default.');
    equal(phrase1.toLocaleString(0), p6,
        '0: Translated as "' + p6 + '" because of implicit default.');
    equal(phrase1.toLocaleString(1), p5,
        '1: Translated as "' + p5 + '" because of implicit default.');
    equal(phrase1.toLocaleString(2), p6,
        '2: Translated as "' + p6 + '" because of implicit default.');

    equal(phrase2.toLocaleString(), p6,
        'NULL: Translated as "' + p6 + '" because plural form is default and implicit default.');
    equal(phrase2.toLocaleString(0), p6,
        '0: Translated as "' + p6 + '" because of implicit default.');
    equal(phrase2.toLocaleString(1), p5,
        '1: Translated as "' + p5 + '" because of implicit default.');
    equal(phrase2.toLocaleString(2), p6,
        '2: Translated as "' + p6 + '" because of implicit default.');

    equal(phrase3.toLocaleString(), p6,
        'NULL: Translated as "' + p6 + '" because plural form is default and implicit default.');
    equal(phrase3.toLocaleString(0), p6,
        '0: Translated as "' + p6 + '" because of implicit default.');
    equal(phrase3.toLocaleString(1), p5,
        '1: Translated as "' + p5 + '" because of implicit default.');
    equal(phrase3.toLocaleString(2), p6,
        '2: Translated as "' + p6 + '" because of implicit default.');

    equal(phrase4.toLocaleString(), p6,
        'NULL: Translated as "' + p6 + '" because plural form is default and implicit default.');
    equal(phrase4.toLocaleString(0), p6,
        '0: Translated as "' + p6 + '" because of implicit default.');
    equal(phrase4.toLocaleString(1), p5,
        '1: Translated as "' + p5 + '" because of implicit default.');
    equal(phrase4.toLocaleString(2), p6,
        '2: Translated as "' + p6 + '" because of implicit default.');
});

test('(Using functions for plural-forms) en, en-GB, zh & zh-TW: zh-TW', function () {
    String.locale = 'zh-TW';

    equal(phrase1.toLocaleString(), p1,
        'NULL: Translated as "' + p1 + '".');
    equal(phrase1.toLocaleString(0), p1,
        '0: Translated as "' + p1 + '".');
    equal(phrase1.toLocaleString(1), p1,
        '1: Translated as "' + p1 + '".');
    equal(phrase1.toLocaleString(2), p1,
        '2: Translated as "' + p1 + '".');

    equal(phrase2.toLocaleString(), p2,
        'NULL: Translated as "' + p2 + '" because of region fallback.');
    equal(phrase2.toLocaleString(0), p2,
        '0: Translated as "' + p2 + '" because of region fallback.');
    equal(phrase2.toLocaleString(1), p2,
        '1: Translated as "' + p2 + '" because of region fallback.');
    equal(phrase2.toLocaleString(2), p2,
        '2: Translated as "' + p2 + '" because of region fallback.');

    equal(phrase3.toLocaleString(), phrase3,
        'NULL: Translated as "' + phrase3 + '" because no default.');
    equal(phrase3.toLocaleString(0), phrase3,
        '0: Translated as "' + phrase3 + '" because no default.');
    equal(phrase3.toLocaleString(1), phrase3,
        '1: Translated as "' + phrase3 + '" because no default.');
    equal(phrase3.toLocaleString(2), phrase3,
        '2: Translated as "' + phrase3 + '" because no default.');

    equal(phrase4.toLocaleString(), phrase4,
        'NULL: Translated as "' + phrase4 + '" because no default.');
    equal(phrase4.toLocaleString(0), phrase4,
        '0: Translated as "' + phrase4 + '" because no default.');
    equal(phrase4.toLocaleString(1), phrase4,
        '1: Translated as "' + phrase4 + '" because no default.');
    equal(phrase4.toLocaleString(2), phrase4,
        '2: Translated as "' + phrase4 + '" because no default.');
});

test('(Using functions for plural-forms) en, en-GB, zh & zh-TW: zh-TW with en-GB default', function () {
    String.defaultLocale = 'en-GB';
    String.locale = 'zh-TW';

    equal(phrase1.toLocaleString(), p1,
        'NULL: Translated as "' + p1 + '".');
    equal(phrase1.toLocaleString(0), p1,
        '0: Translated as "' + p1 + '".');
    equal(phrase1.toLocaleString(1), p1,
        '1: Translated as "' + p1 + '".');
    equal(phrase1.toLocaleString(2), p1,
        '2: Translated as "' + p1 + '".');

    equal(phrase2.toLocaleString(), p2,
        'NULL: Translated as "' + p2 + '" because of region fallback.');
    equal(phrase2.toLocaleString(0), p2,
        '0: Translated as "' + p2 + '" because of region fallback.');
    equal(phrase2.toLocaleString(1), p2,
        '1: Translated as "' + p2 + '" because of region fallback.');
    equal(phrase2.toLocaleString(2), p2,
        '2: Translated as "' + p2 + '" because of region fallback.');

    equal(phrase3.toLocaleString(), p4,
        'NULL: Translated as "' + p4 + '" because of default fallback.');
    equal(phrase3.toLocaleString(0), p4,
        '0: Translated as "' + p4 + '" because of default fallback.');
    equal(phrase3.toLocaleString(1), p3,
        '1: Translated as "' + p3 + '" because of default fallback.');
    equal(phrase3.toLocaleString(2), p4,
        '2: Translated as "' + p4 + '" because of default fallback.');

    equal(phrase4.toLocaleString(), p6,
        'NULL: Translated as "' + p6 + '" because of default & region fallback.');
    equal(phrase4.toLocaleString(0), p6,
        '0: Translated as "' + p6 + '" because of default & region fallback.');
    equal(phrase4.toLocaleString(1), p5,
        '1: Translated as "' + p5 + '" because of default & region fallback.');
    equal(phrase4.toLocaleString(2), p6,
        '2: Translated as "' + p6 + '" because of default & region fallback.');
});
})();

