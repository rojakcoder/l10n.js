l10ns.js
========

l10ns.js is a JavaScript library that enables localization and
pluralization using the native `toLocaleString` method.

l10n**s**.js is built from *l10n.js* - the fantastic work of Eli Grey
(http://purl.eligrey.com).

By itself, l10n.js facilitates the localization
of the strings. l10n**s**.js modifies the code to add pluralization to
the mix. It works in a similar way to l10n.js. In fact, it can be
used in the same way that l10n.js is used. For more
information on how to use the original l10n.js, please refer to
[https://github.com/eligrey/l10n.js/](https://github.com/eligrey/l10n.js/).

Usage
-----

The recommendations by Eli such as using a
[helper function](https://github.com/eligrey/l10n.js/#localizing-strings)
and using
[variable replacement](https://github.com/eligrey/l10n.js/#variable-replacement)
are still valid, so I won't repeat them here.

The main difference between l10ns.js and l10n.js is that in l10ns.js, the
`toLocaleString` method accepts an integer parameter that determines
the plurality of the form to use.

Begin by creating the JSON structure for the strings. Refer to 
[Getting Started](https://github.com/eligrey/l10n.js#getting-started)
for the various ways to localize your strings. Notice that there is a
difference in the way that the JSON literal for l10n.js is structured
compared to what l10ns.js uses.

The most straightforward way to initialise it is as below:

    String.toLocaleString({
      "en": {
          "&plural-forms": "nplurals=2; plural=(n!=1)",
          "&plurals": [
              {
                  "%phrase1": "The box measures __n__ meters in length."
              },
              {
                  "%phrase1": "The box measures 1 meter in length."
              }
          ]
      },
      "en-GB": {
          "&plural-forms": "nplurals=2; plural=(n!=1)",
          "&plurals": [
              {
                  "%phrase1": "The box measures __n__ metres in length."
              },
              {
                  "%phrase1": "The box measures 1 metre in length."
              }
          ]
      }
    })

To use it with a British locale:

    String.locale = 'en-GB';
    var a = '%phrase1';
    a.toLocaleString(2);    //returns The box measures 2 metres in length.
    a.toLocaleString(1);    //returns The box measures 1 metre in length.

Explanation
-----------

The JSON literal above sets a British specific locale and falls back to
a US locale. It also describes the plural rules for both locales. Needless
to say, only 10n**s**.js recognises the plural rules so this structure
will not work for l10n.js.

You can read the plural rules (the property `&plural-forms`) like 
an `if` statement. Naturally, for both
US and British English there are only two forms (`nplurals=2;`).

Notice that the plural form of the strings is the first cell in the
`&plurals` array while the singular form is in
the second cell. The positioning of the forms is tightly coupled
with how the plural rules are structured.

The rule for determining plurality (`plural=(n!=1)`) checks to see if the
specified number is *not* equal to 1. If so, the statement returns true
which implies position 0, and thus the localized string is retrieved from
position 0. Otherwise, if the statement returns false, it implies position
1 and that is where the strings are retrieved from.

The string `__n__` acts as a placeholder of which the actual number
will be put in place when the string is localized. This is optional - you
can have a plural form without a number.

For example:

    String.toLocaleString({
      "en": {
          "&plural-forms": "nplurals=2; plural=(n!=1)",
          "&plurals": [
              {
                  "%phrase1": "The box measures several meters in length."
              },
              {
                  "%phrase1": "The box measures 1 meter in length."
              }
          ]
      }
    })

    String.locale = 'en';
    var a = '%phrase1';
    a.toLocaleString(2);    //returns The box measures several meters in length.

### Defaults

It is also worth noting that strings in position 0 of the locale structure
are the default. The default is used when no parameter is specified.
For example:

    String.toLocaleString({
      "en": {
          "&plural-forms": "nplurals=2; plural=(n!=1)",
          "&plurals": [
              {
                  "%phrase1": "The box measures several meters in length."
              },
              {
                  "%phrase1": "The box measures 1 meter in length."
              }
          ]
      }
    })

    String.locale = 'en';
    var a = '%phrase1';
    //no number specified as the parameter
    a.toLocaleString();    //returns The box measures several meters in length.

### Other plural forms

To create other plural forms, you need to modify both the `&plural-forms`
property and the array in `&plurals`.

The plural rules are evaluated using the `eval` statement (I know, I know. I'm
a bad person for using `eval`). BUT, it is the fastest way to evaluate the
rule without having to rewrite an entire logic parsing library again.
Furthermore, the rule is first checked to only contain the characters expected
in a rule before running it through `eval` i.e. the rule will only be
executed only if it contains the following characters:

- n
- !
- =
- %
- &gt;
- &lt;
- ||
- &&
- 0 to 9

If you need to know, the regular expression for checking is as follows:

    [n!=&gt;&lt;(?:\s+\|\|\s+)(?:\s+&&\s+)%0-9]

#### 1 Form Only

This is for languages that do not have any plural forms. An example is
Chinese.

    String.toLocaleString({
      "zh": {
          "&plural-forms": "nplurals=1; plural=0",
          "&plurals": [
              {
                  "%phrase1": "盒子有好几米长。"
              }
          ]
      }
    })

#### More than 2 Forms

For languages with plurality more than 2 forms, the plural rule should
return integers that designate the position to return in the cell.

I don't know any languages that have more than 2 forms so I will use
an example in English (P.S. if you know of any language that uses more
than 2 forms, please let me know and I can update the example):

    String.toLocaleString({
      "en": {
          "&plural-forms": "nplurals=3; plural=(n!=1 ? n!=12 ? 0 : 1 : 2)",
          "&plurals": [
              {
                  "%phrase1": "The box measures several meters in length."
              },
              {
                  "%phrase1": "The box measures dozens of meters in length."
              },
              {
                  "%phrase1": "The box measures 1 meter in length."
              }
          ]
      }
    })

Forming the right plural rule is basically getting the right ternary
statements nested within each other correctly.

In this implementation, the `plural` statement **cannot** have nested
parentheses. In other words, a statement like the following cannot
be evaluated:

    "&plural-forms": "nplurals=3; plural=(n!=1 ? (n!=12 ? 0 : 1) : 2)",

Help (Problems, Bugs & Fixes)
=============================

If there is anything wrong with the library or if there are bugs, please
email me or ping me on
[Google Plus](https://plus.google.com/u/0/111698875815737915836/posts).
I can't promise I'll fix it due to my busy schedule, but at least it'll
be on my radar.

