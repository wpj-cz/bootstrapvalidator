(function($) {
   $.fn.bootstrapValidator.i18n.vatSimple = $.extend($.fn.bootstrapValidator.i18n.vatSimple || {}, {
      'default': 'Must begin with the country code (two letters) and contain a minimum of two additional characters.',
   });

   $.fn.bootstrapValidator.validators.vatSimple = {
      html5Attributes: {
         message: 'message'
      },

      /**
       * Validate simple VAT number
       *
       * @param {BootstrapValidator} validator The validator plugin instance
       * @param {jQuery} $field Field element
       * @param {Object} options Consist of key:
       *
       * Examples:
       * - Starts with two letter chars (Country code)
       * - Minimum 7 chars
       *
       * @returns {Boolean}
       */
      validate: function(validator, $field, options) {
         var value = $field.val();
         if (value === '') {
            return true;
         }

         if (/^[A-Za-z]{2}[0-9A-Za-z]{6,}$/.test(value)) {
            return true;
         }

         return {
            valid: false,
            message: $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.vatSimple.default)
         }
      }
   };
}(window.jQuery));
