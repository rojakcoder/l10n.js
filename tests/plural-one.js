(function () {
var phrase1  = "%phrase1",      //in non-plural form only
    phrase2  = '%phrase2',      //in singular form only, no fallback
    phrase3  = '%phrase3',      //in plural form only, no fallback
    phrase4  = '%phrase4',      //in both forms, no fallback
    phrase5  = '%phrase5',      //in singular form only, with fallback
    phrase6  = '%phrase6',      //in plural form only, with fallback
    phrase7  = '%phrase7',      //in both forms, with fallback
    e0noPlural = 'Peace and harmony in the neighborhood.',
    e1noPlural = 'Peace and harmony in the neighborhood.',
    e1singular = 'Peace and harmony in the neighborhood.',
    e1plural   = 'Peace and harmony in the neighborhood.',
    e2noPlural = '%phrase2',
    e2singular = 'There is 1 book on the shelf.',
    e2plural   = '%phrase2',    //bcos plural form is default, so not translated
    e3noPlural = 'For Honors & Glories.',
    e3singular = 'For Honors & Glories.',
    e3plural   = 'For Honors & Glories.',
    e4noPlural = 'There are many colors in this painting.',
    e4singular = 'There is a color in this painting.',
    e4plural   = 'There are many colors in this painting.',
    e5noPlural = "I'm sorry I loved you.",
    e5singular = "I'm sorry I love you.",
    e5plural   = "I'm sorry I loved you.",
    e6noPlural = 'Ice cream flavors',
    e6singular = 'Ice cream flavors',
    e6plural   = 'Ice cream flavors',
    e7noPlural = 'Impossibilities',
    e7singular = 'Impossibility',
    e7plural   = 'Impossibilities';
     
test('1 plural locale (default)', function () {
    //reset to default
    String.defaultLocale = "";
    String.locale = (navigator && (navigator.language || navigator.userLanguage)) || "";
    String.toLocaleString(false);

    String.toLocaleString({
        'en': {
            '%phrase1': 'Peace and harmony in the neighborhood.',
            '%phrase5': "I'm sorry I loved you.",
            '%phrase6': 'Ice cream flavor',
            '%phrase7': 'Impossible',
            '&plural-forms': 'nplurals=2; plural=(n!=1)',
            '&plurals': [
                {
                    '%phrase3': 'For Honors & Glories.',
                    '%phrase4': 'There are many colors in this painting.',
                    '%phrase6': 'Ice cream flavors',
                    '%phrase7': 'Impossibilities'
                },
                {
                    '%phrase2': 'There is 1 book on the shelf.',
                    '%phrase4': 'There is a color in this painting.',
                    '%phrase5': "I'm sorry I love you.",
                    '%phrase7': 'Impossibility'
                }
            ]
        }
    });

    equal(phrase1, phrase1, 'No translation expected.');
    equal(phrase1.toLocaleString(), e0noPlural,
        'NULL: Translated as "' + e0noPlural + '" because of fallback.');
    equal(phrase1.toLocaleString(1), e0noPlural,
        '1: Translated as "' + e0noPlural + '" because of fallback.');
    equal(phrase1.toLocaleString(2), e0noPlural,
        '2: Translated as "' + e0noPlural + '" because of fallback.');
});

test('1 plural locale (specified)', function () {
    String.toLocaleString({
        'en': {
            '%phrase1': 'Peace and harmony in the neighborhood.',
            '%phrase5': "I'm sorry I loved you.",
            '%phrase6': 'Ice cream flavor',
            '%phrase7': 'Impossible',
            '&plural-forms': 'nplurals=2; plural=(n!=1)',
            '&plurals': [
                {
                    '%phrase3': 'For Honors & Glories.',
                    '%phrase4': 'There are many colors in this painting.',
                    '%phrase6': 'Ice cream flavors',
                    '%phrase7': 'Impossibilities'
                },
                {
                    '%phrase2': 'There is 1 book on the shelf.',
                    '%phrase4': 'There is a color in this painting.',
                    '%phrase5': "I'm sorry I love you.",
                    '%phrase7': 'Impossibility'
                }
            ]
        }
    });

    String.locale = 'en';

    equal(phrase1, phrase1, 'No translation expected.');
    equal(phrase1.toLocaleString(), e1noPlural,
        'NULL: Translated as "' + e1noPlural + '" because of fallback.');
    equal(phrase1.toLocaleString(1), e1singular,
        '1: Translated as "' + e1singular + '" because of fallback.');
    equal(phrase1.toLocaleString(2), e1plural,
        '2: Translated as "' + e1plural + '" because of fallback.');

    equal(phrase2, phrase2, 'No translation expected.');
    equal(phrase2.toLocaleString(), e2noPlural,
        'NULL: Not translated - not in fallback.');
    equal(phrase2.toLocaleString(1), e2singular,
        '1: Translated as "' + e2singular + '".');
    equal(phrase2.toLocaleString(2), e2plural,
        '2: Not translated - not specified in plural and not in fallback.');

    equal(phrase3, phrase3, 'No translation expected.');
    equal(phrase3.toLocaleString(), e3noPlural,
        'NULL: Translated as "' + e3noPlural + '" because plural form is default.');
    equal(phrase3.toLocaleString(1), e3singular,
        '1: Translated as "' + e3singular + '" because plural form is default.');
    equal(phrase3.toLocaleString(2), e3plural,
        '2: Translated as "' + e3plural + '".');

    equal(phrase4, phrase4, 'No translation expected.');
    equal(phrase4.toLocaleString(), e4noPlural,
        'NULL: Translated as "' + e4noPlural + '" because plural form is default.');
    equal(phrase4.toLocaleString(1), e4singular,
        '1: Translated as "' + e4singular + '".');
    equal(phrase4.toLocaleString(2), e4plural,
        '2: Translated as "' + e4plural + '".');

    equal(phrase5, phrase5, 'No translation expected.');
    equal(phrase5.toLocaleString(), e5noPlural,
        'NULL: Not translated when plurality is specified.');
    equal(phrase5.toLocaleString(1), e5singular,
        '1: Translated as "' + e5singular + '".');
    equal(phrase5.toLocaleString(0), e5plural,
        '0: Translated as "' + e5plural + '" because of fallback.');

    equal(phrase6, phrase6, 'No translation expected.');
    equal(phrase6.toLocaleString(), e6noPlural,
        'NULL: Translated as "' + e6noPlural + '" because plural form is default.');
    equal(phrase6.toLocaleString(1), e6singular,
        '1: Translated as "' + e6singular + '" because plural form is default.');
    equal(phrase6.toLocaleString(0), e6plural,
        '0: Translated as "' + e6plural + '".');

    equal(phrase7, phrase7, 'No translation expected.');
    equal(phrase7.toLocaleString(), e7noPlural,
        'NULL: Translated as "' + e7noPlural + '" because plural form is default.');
    equal(phrase7.toLocaleString(1), e7singular,
        '1: Translated as "' + e7singular + '".');
    equal(phrase7.toLocaleString(0), e7plural,
        '0: Translated as "' + e7plural + '".');
});
})();

