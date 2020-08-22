(function($) {
   $.fn.bootstrapValidator.i18n.phone = $.extend($.fn.bootstrapValidator.i18n.phone || {}, {
      'default': 'Please enter a valid phone number',
      countryNotSupported: 'The country code %s is not supported',
      country: 'Please enter a valid phone number in %s',
      phoneValidationWarning: 'Are you sure this is a valid phone number?',
      countries: {
         BR: 'Brazil',
         CH: 'Switzerland',
         CN: 'China',
         CZ: 'Czech Republic',
         DE: 'Germany',
         DK: 'Denmark',
         ES: 'Spain',
         FR: 'France',
         GB: 'United Kingdom',
         HU: 'Hungary',
         IT: 'Italy',
         LI: 'Liechtenstein',
         MA: 'Morocco',
         PK: 'Pakistan',
         RO: 'Romania',
         RU: 'Russia',
         SK: 'Slovakia',
         TH: 'Thailand',
         US: 'USA',
         VE: 'Venezuela'
      }
   });

   $.fn.bootstrapValidator.validators.phone = {
      html5Attributes: {
         message: 'message',
         country: 'country'
      },

      // The supported countries
      COUNTRY_CODES: ['BR', 'CH', 'CN', 'CZ', 'DE', 'DK', 'ES', 'HR', 'FR', 'GB', 'HU', 'IT', 'LI', 'MA', 'PK', 'RO', 'RU', 'SI', 'SK', 'TH', 'US', 'VE'],

      /**
       * Return true if the input value contains a valid phone number for the country
       * selected in the options
       *
       * @param {BootstrapValidator} validator Validate plugin instance
       * @param {jQuery} $field Field element
       * @param {Object} options Consist of key:
       * - message: The invalid message
       * - country: The ISO-3166 country code. It can be
       *      - A country code
       *      - Name of field which its value defines the country code
       *      - Name of callback function that returns the country code
       *      - A callback function that returns the country code
       *
       * @returns {Boolean|Object}
       */
      validate: function(validator, $field, options) {
         var value = $field.val();
         if (value === '') {
            return true;
         }

         var country = options.country;
         if (typeof country !== 'string' || $.inArray(country, this.COUNTRY_CODES) === -1) {
            // Try to determine the country
            country = validator.getDynamicOption($field, country);
         }

         var isValid = true;
         switch (country.toUpperCase()) {
            case 'BR':
               // Test: http://regexr.com/399m1
               value   = $.trim(value);
               isValid = (/^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/).test(value);
               break;

            case 'CH':
               // Test: http://regexr.com/3h627
               isValid = /^((((00)|\+)(41)([- ]?))|(0))?( *\d *){9}$/.test(value);
               break;

            case 'CN':
               // http://regexr.com/39dq4
               value   = $.trim(value);
               isValid = (/^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/).test(value);
               break;

            case 'CZ':
               // Test: http://regexr.com/39hhl
               isValid = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(value);
               break;

            case 'DE':
               // Test: http://regexr.com/39pkg
               value   = $.trim(value);
               isValid = (/^(((((((00|\+)49[ \-/]?)|0)[1-9][0-9]{1,4})[ \-/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[ \-/]?))[0-9]{1,7}([ \-/]?[0-9]{1,5})?)$/).test(value);
               break;

            case 'DK':
               // Mathing DK phone numbers with country code in 1 of 3 formats and an
               // 8 digit phone number not starting with a 0 or 1. Can have 1 space
               // between each character except inside the country code.
               // Test: http://regex101.com/r/sS8fO4/1
               value   = $.trim(value);
               isValid = (/^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/).test(value);
               break;

            case 'ES':
               // http://regex101.com/r/rB9mA9/1
               value   = $.trim(value);
               isValid = (/^(?:(?:(?:\+|00)34\D?))?(?:9|6)(?:\d\D?){8}$/).test(value);
               break;

            case 'FR':
               // http://regexr.com/39a2p
               value   = $.trim(value);
               isValid = (/^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/).test(value);
               break;

            case 'GB':
               // http://aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers#Match_GB_telephone_number_in_any_format
               // Test: http://regexr.com/38uhv
               value   = $.trim(value);
               isValid = (/^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/).test(value);
               break;

            case 'HU':
               // https://en.wikipedia.org/wiki/Telephone_numbers_in_Hungary
               // Test: https://www.regextester.com/98279
               value   = $.trim(value);
               isValid = (/^((?:\+?3|0)6)(?:-|\()?(\d{1,2})(?:-|\))?(\d{3})-?(\d{3,4})$/).test(value);
               break;

            case 'IT':
               // https://en.wikipedia.org/wiki/Telephone_numbers_in_Italy
               // Test: https://regexr.com/3h4up
               // (1) Vyhodi '(' a ')' z hodnoty inputu
               // (2) Vyhodi ' ', '/' a '-' z hodnoty inputu
               value = value.replace(/[\\)\\(]/g, ''); // (1)
               value = value.replace(/[ /-]/g, ''); // (2)
               isValid = (/^((00|\+)39)?(3(\d{8,9})|0(\d{8,10}))$/).test(value);
               break;

            // stejny format jako SI?
            case 'HR':
               // (1) Vyhodi ' ', '/' a '-' z hodnoty inputu
               value = value.replace(/[ /-]/g, ''); // (1)
               // https://en.wikipedia.org/wiki/Telephone_numbers_in_Croatia
               // Test: http://regexr.com/3f9n5
               // V soucasne dobe nefunguje, pro zprovozneni pridat 'HR' do COUNTRY_CODES
               isValid = /^(((00)([- ]?)|\+)(385)([- ]?))?([0]?)(\d{1})?(\d{8})$/.test(value);
               break;

            case 'LI':
               // https://en.wikipedia.org/wiki/Telephone_numbers_in_Liechtenstein
               // kvuli parfimu vyzadujeme vzdy predvolbu
               isValid = /^(((00)([- ]?)|\+)(423)([- ]?))( *\d *){7}$/.test(value);
               break;

            case 'MA':
               // http://en.wikipedia.org/wiki/Telephone_numbers_in_Morocco
               // Test: http://regexr.com/399n8
               value   = $.trim(value);
               isValid = (/^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/).test(value);
               break;

            case 'PK':
               // http://regex101.com/r/yH8aV9/2
               value   = $.trim(value);
               isValid = (/^0?3[0-9]{2}[0-9]{7}$/).test(value);
               break;

            case 'RO':
               // All mobile network and land line
               // http://regexr.com/39fv1
               isValid = (/^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/g).test(value);
               break;

            case 'RU':
               // http://regex101.com/r/gW7yT5/5
               isValid = (/^((8|\+7|007)[\-\.\/ ]?)?([\(\/\.]?\d{3}[\)\/\.]?[\-\.\/ ]?)?[\d\-\.\/ ]{7,10}$/g).test(value);
               break;

            case 'SI':
               // Test: https://regexr.com/4hf89
               isValid = /^((((00)([- ]?)|\+)(386)([- ]?))|(0))?([1-9])(([- ]?)(\d)){7}$/.test(value);
               break;

            case 'SK':
               // Test: http://regexr.com/3fsk4
               isValid = /^((((00)([- ]?)|\+)(421|420)([- ]?))|(0 ?))?((\d{3})([- ]?)){2}(\d{3})$/.test(value);
               break;

            case 'TH':
               // http://regex101.com/r/vM5mZ4/2
               isValid = (/^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/).test(value);
               break;

            case 'VE':
               // http://regex101.com/r/eM2yY0/6
               value   = $.trim(value);
               isValid = (/^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/).test(value);
               break;

            case 'US':
               // Make sure US phone numbers have 10 digits
               // May start with 1, +1, or 1-; should discard
               // Area code may be delimited with (), & sections may be delimited with . or -
               // Test: http://regexr.com/38mqi
               value   = value.replace(/\D/g, '');
               isValid = (/^(?:(1\-?)|(\+1 ?))?\(?(\d{3})[\)\-\.]?(\d{3})[\-\.]?(\d{4})$/).test(value) && (value.length === 10);
               break;

            /* falls through */
            default:
               /* pokud neni v seznamu zemi, kontroluji jen ze je cislo */
               isValid = (/^\d{3,14}$/).test(value);
               break;
         }


         // Pokud číslo neni validni podle vybrane zeme:
         // (1) Vyhodi mezery z hodnoty inputu
         // (2) Pokud to je CZ nebo SK, zkontroluje validitu předčíslí + délku vstupu 6-9 čísel (aby to odpovídalo validaci v engine)
         // (3) Pokud to není CZ ani SK, zkontroluje validitu předčíslí + délku vstupu 1-14 čísel
         // (4) Pokud (2) nebo (3) projde, zobrazi se varovani
         // (5) Pomocí classy .validation-warning určuji jestli zobrazit validační hlášku u validního fieldu
         // (6) Podle způsobu validace vracím buď původní zprávu nebo custom hlášku

         var customMessage = $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.phone.country, $.fn.bootstrapValidator.i18n.phone.countries[country]);// (6)

         // Varovani
         if (!isValid) {
            value = value.replace(/\s/g, ''); // (1)

            if (country.toUpperCase() === "CZ" || country.toUpperCase() === "SK")  {
               isValid = (/(\+|00)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{6,10}$/).test(value); // (2)
            } else {
               isValid = (/(\+|00)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/).test(value); // (3)
            }

            if (isValid) {
               customMessage =  $.fn.bootstrapValidator.i18n.phone.phoneValidationWarning; // (4)
               $field.addClass('validation-warning'); // (5)
            }
         } else {
            $field.removeClass('validation-warning'); // (5)
         }

         return {
            valid: isValid,
            message: customMessage // (6)
         }
      }
   };
}(window.jQuery));
