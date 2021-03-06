(function () {
var phrase6  = "%phrase6",      //different in EN,  in ZH
    phrase7  = "%phrase7",      //same in EN,       in ZH
    phrase8  = "%phrase8",      //not in EN-GB,     in ZH
    phrase9  = "%phrase9",      //not in EN,        in ZH
    phrase10 = "%phrase10",     //not in EN both,   in ZH
    phrase16 = "%phrase16",     //different in EN,  not in ZH
    phrase17 = "%phrase17",     //same in EN,       not in ZH
    phrase18 = "%phrase18",     //not in EN-GB,     not in ZH
    phrase19 = "%phrase19",     //not in EN,        not in ZH
    phrase20 = "%phrase20",     //not in EN both,   not in ZH
    e6enUs   = 'Ice cream flavor',
    e6enGb   = 'Ice cream flavour',
    e6zh     = '冰淇淋的味道',
    e7en     = 'Impossible!',
    e7zh     = '不可能！',
    e8enUs   = "Don't eat grapes.",
    e8zh     = '不吃葡萄。',
    e9enGb   = "He's not human.",
    e9zh     = '他不是人。',
    e10zh    = '乖乖的',
    e16enUs  = 'Sense of humor',
    e16enGb  = 'Sense of humour',
    e16zhTw  = '幽默感',
    e17en    = 'I like to drink coffee.',
    e17zhTw  = '我喜歡喝咖啡。',
    e18enUs  = 'Leafy vegetables.',
    e18zhTw  = '綠葉蔬菜。',
    e19enGb  = 'red meat',
    e19zhTw  = '紅肉',
    e20zhTw  = '你愛打羽毛球嗎？';

test('3 locales (default)', function () {
    //reset to default
    String.defaultLocale = "";
    String.locale = (navigator && (navigator.language || navigator.userLanguage)) || "";
    String.toLocaleString(false);

    String.toLocaleString({
        'en': {
            '%phrase6':  'Ice cream flavor',
            '%phrase7':  'Impossible!',
            '%phrase8':  "Don't eat grapes.",
            '%phrase16': 'Sense of humor',
            '%phrase17': 'I like to drink coffee.',
            '%phrase18': 'Leafy vegetables.'
        },
        'en-GB': {
            '%phrase6':  'Ice cream flavour',
            '%phrase7':  'Impossible!',
            '%phrase9':  "He's not human.",
            '%phrase16': 'Sense of humour',
            '%phrase17': 'I like to drink coffee.',
            '%phrase19': 'red meat'
        },
        'zh': {
            '%phrase6':  '冰淇淋的味道',
            '%phrase7':  '不可能！',
            '%phrase8':  '不吃葡萄。',
            '%phrase9':  '他不是人。',
            '%phrase10': '乖乖的'
        }
    });

    equal(phrase6.toLocaleString(), e6enUs,
        'phrase 6 translated as "' + e6enUs + '".');
    equal(phrase7.toLocaleString(), e7en,
        'phrase 7 translated as "' + e7en + '".');
    equal(phrase8.toLocaleString(), e8enUs,
        'phrase 8 translated as "' + e8enUs + '".');
    equal(phrase9.toLocaleString(), phrase9,
        'phrase 9 not translated - not in en (US).');
    equal(phrase10.toLocaleString(), phrase10,
        'phrase 10 not translated - not in en (both).');
    equal(phrase16.toLocaleString(), e16enUs,
        'phrase 16 translated as "' + e16enUs + '".');
    equal(phrase17.toLocaleString(), e17en,
        'phrase 17 translated as "' + e17en + '".');
    equal(phrase18.toLocaleString(), e18enUs,
        'phrase 18 translated as "' + e18enUs + '".');
    equal(phrase19.toLocaleString(), phrase19,
        'phrase 19 not translated - not in en (US).');
    equal(phrase20.toLocaleString(), phrase20,
        'phrase 20 not translated - not in en (both).');
});

test('EN specified', function () {
    String.locale = 'en';

    equal(phrase6.toLocaleString(), e6enUs,
        'phrase 6 translated as "' + e6enUs + '".');
    equal(phrase7.toLocaleString(), e7en,
        'phrase 7 translated as "' + e7en + '".');
    equal(phrase8.toLocaleString(), e8enUs,
        'phrase 8 translated as "' + e8enUs + '".');
    equal(phrase9.toLocaleString(), phrase9,
        'phrase 9 not translated - not in en (US).');
    equal(phrase10.toLocaleString(), phrase10,
        'phrase 10 not translated - not in en (both).');
    equal(phrase16.toLocaleString(), e16enUs,
        'phrase 16 translated as "' + e16enUs + '".');
    equal(phrase17.toLocaleString(), e17en,
        'phrase 17 translated as "' + e17en + '".');
    equal(phrase18.toLocaleString(), e18enUs,
        'phrase 18 translated as "' + e18enUs + '".');
    equal(phrase19.toLocaleString(), phrase19,
        'phrase 19 not translated - not in en (US).');
    equal(phrase20.toLocaleString(), phrase20,
        'phrase 20 not translated - not in en (both).');
});

test('EN-GB specified', function () {
    String.locale = 'en-GB';

    equal(phrase6.toLocaleString(), e6enGb,
        'phrase 6 translated as "' + e6enGb + '".');
    equal(phrase7.toLocaleString(), e7en,
        'phrase 7 translated as "' + e7en + '".');
    equal(phrase8.toLocaleString(), e8enUs,
        'phrase 8 translated as "' + e8enUs + '" - not in en-GB.');
    equal(phrase9.toLocaleString(), e9enGb,
        'phrase 9 translated as "' + e9enGb + '".');
    equal(phrase10.toLocaleString(), phrase10,
        'phrase 10 not translated - not in en (both).');
    equal(phrase16.toLocaleString(), e16enGb,
        'phrase 16 translated as "' + e16enGb + '".');
    equal(phrase17.toLocaleString(), e17en,
        'phrase 17 translated as "' + e17en + '".');
    equal(phrase18.toLocaleString(), e18enUs,
        'phrase 18 translated as "' + e18enUs + '" - not in en-GB.');
    equal(phrase19.toLocaleString(), e19enGb,
        'phrase 19 translated as "' + e19enGb + '".');
    equal(phrase20.toLocaleString(), phrase20,
        'phrase 20 not translated - not in en (both).');
});

test('ZH specified', function () {
    String.locale = 'zh';

    equal(phrase6.toLocaleString(), e6zh,
        'phrase 6 translated as "' + e6zh + '".');
    equal(phrase7.toLocaleString(), e7zh,
        'phrase 7 translated as "' + e7zh + '".');
    equal(phrase8.toLocaleString(), e8zh,
        'phrase 8 translated as "' + e8zh + '".');
    equal(phrase9.toLocaleString(), e9zh,
        'phrase 9 translated as "' + e9zh + '".');
    equal(phrase10.toLocaleString(), e10zh,
        'phrase 10 translated as "' + e10zh + '".');
    equal(phrase16.toLocaleString(), phrase16,
        'phrase 16 not translated - not in zh (CN).');
    equal(phrase17.toLocaleString(), phrase17,
        'phrase 17 not translated - not in zh (CN).');
    equal(phrase18.toLocaleString(), phrase18,
        'phrase 18 not translated - not in zh (CN).');
    equal(phrase19.toLocaleString(), phrase19,
        'phrase 19 not translated - not in zh (CN).');
    equal(phrase20.toLocaleString(), phrase20,
        'phrase 20 not translated - not in zh (CN).');
});

test('ZH specified, EN default', function () {
    String.defaultLocale = 'en';
    String.locale = 'zh';

    equal(phrase6.toLocaleString(), e6zh,
        'phrase 6 translated as "' + e6zh + '".');
    equal(phrase7.toLocaleString(), e7zh,
        'phrase 7 translated as "' + e7zh + '".');
    equal(phrase8.toLocaleString(), e8zh,
        'phrase 8 translated as "' + e8zh + '".');
    equal(phrase9.toLocaleString(), e9zh,
        'phrase 9 translated as "' + e9zh + '".');
    equal(phrase10.toLocaleString(), e10zh,
        'phrase 10 translated as "' + e10zh + '".');
    equal(phrase16.toLocaleString(), e16enUs,
        'phrase 16 not translated - fallback to en "' + e16enUs +'".');
    equal(phrase17.toLocaleString(), e17en,
        'phrase 17 not translated - fallback to en "' + e17en +'".');
    equal(phrase18.toLocaleString(), e18enUs,
        'phrase 18 not translated - fallback to en "' + e18enUs +'".');
    equal(phrase19.toLocaleString(), phrase19,
        'phrase 19 not translated - not in zh & en.');
    equal(phrase20.toLocaleString(), phrase20,
        'phrase 20 not translated - not in zh &amp; en.');
});

test('ZH specified, EN-GB default', function () {
    String.defaultLocale = 'en-GB';
    String.locale = 'zh';

    equal(phrase6.toLocaleString(), e6zh,
        'phrase 6 translated as "' + e6zh + '".');
    equal(phrase7.toLocaleString(), e7zh,
        'phrase 7 translated as "' + e7zh + '".');
    equal(phrase8.toLocaleString(), e8zh,
        'phrase 8 translated as "' + e8zh + '".');
    equal(phrase9.toLocaleString(), e9zh,
        'phrase 9 translated as "' + e9zh + '".');
    equal(phrase10.toLocaleString(), e10zh,
        'phrase 10 translated as "' + e10zh + '".');
    equal(phrase16.toLocaleString(), e16enGb,
        'phrase 16 not translated - fallback to en-GB "' + e16enGb +'".');
    equal(phrase17.toLocaleString(), e17en,
        'phrase 17 not translated - fallback to en-GB "' + e17en +'".');
    equal(phrase18.toLocaleString(), e18enUs,
        'phrase 18 not translated - fallback to en (US) "' + e18enUs +'".');
    equal(phrase19.toLocaleString(), e19enGb,
        'phrase 19 not translated - fallback to en-GB "' + e19enGb +'".');
    equal(phrase20.toLocaleString(), phrase20,
        'phrase 20 not translated - not in zh & en-GB.');
});

test('EN specified, ZH default', function () {
    String.defaultLocale = 'zh';
    String.locale = 'en';

    equal(phrase6.toLocaleString(), e6enUs,
        'phrase 6 translated as "' + e6enUs + '".');
    equal(phrase7.toLocaleString(), e7en,
        'phrase 7 translated as "' + e7en + '".');
    equal(phrase8.toLocaleString(), e8enUs,
        'phrase 8 translated as "' + e8enUs + '".');
    equal(phrase9.toLocaleString(), e9zh,
        'phrase 9 not translated - fallback to zh "' + e9zh +'".');
    equal(phrase10.toLocaleString(), e10zh,
        'phrase 10 not translated - fallback to zh "' + e10zh +'".');
    equal(phrase16.toLocaleString(), e16enUs,
        'phrase 16 translated as "' + e16enUs + '".');
    equal(phrase17.toLocaleString(), e17en,
        'phrase 17 translated as "' + e17en + '".');
    equal(phrase18.toLocaleString(), e18enUs,
        'phrase 18 translated as "' + e18enUs + '".');
    equal(phrase19.toLocaleString(), phrase19,
        'phrase 19 not translated - not in zh & en.');
    equal(phrase20.toLocaleString(), phrase20,
        'phrase 20 not translated - not in zh & en.');
});

test('EN-GB specified, ZH default', function () {
    String.defaultLocale = 'zh';
    String.locale = 'en-GB';

    equal(phrase6.toLocaleString(), e6enGb,
        'phrase 6 translated as "' + e6enGb + '".');
    equal(phrase7.toLocaleString(), e7en,
        'phrase 7 translated as "' + e7en + '".');
    equal(phrase8.toLocaleString(), e8enUs,
        'phrase 8 translated as "' + e8enUs + '". - not in en-GB.');
    equal(phrase9.toLocaleString(), e9enGb,
        'phrase 9 translated as "' + e9enGb + '".');
    equal(phrase10.toLocaleString(), e10zh,
        'phrase 10 not translated - fallback to zh "' + e10zh +'".');
    equal(phrase16.toLocaleString(), e16enGb,
        'phrase 16 translated as "' + e16enGb + '".');
    equal(phrase17.toLocaleString(), e17en,
        'phrase 17 translated as "' + e17en + '".');
    equal(phrase18.toLocaleString(), e18enUs,
        'phrase 18 translated as "' + e18enUs + '". - not in en-GB.');
    equal(phrase19.toLocaleString(), e19enGb,
        'phrase 19 translated as "' + e19enGb + '".');
    equal(phrase20.toLocaleString(), phrase20,
        'phrase 20 not translated - not in en & zh.');
});
})();

