(function($) {
   $.fn.bootstrapValidator.i18n.bankAccount = $.extend($.fn.bootstrapValidator.i18n.bankAccount || {}, {
      'default': 'Please enter right account number or IBAN.'
   });

   $.fn.bootstrapValidator.validators.bankAccount = {
      /**
       * Return true if the input value is a czech bank number or IBAN.
       *
       * @param {BootstrapValidator} validator The validator plugin instance
       * @param {jQuery} $field Field element
       * @param {Object} options Can consist of the following keys:
       * - message: The invalid message
       * @returns {Boolean}
       */
      validate: function(validator, $field, options) {
         var value = $field.val();
         var ibanValidator = $.fn.bootstrapValidator.validators.iban;
         if(ibanValidator.validate(validator, $field, options).valid || this.checkBankAccountNumber(value)) {
            return true;
         }
         return false;
      },
      checkBankAccountNumber: function(account) {
         var matches = /^(([0-9]{0,6})-)?([0-9]{1,10})\/([0-9]{4,6})$/.exec(account);
         if (!matches) {
            return false;
         }
         if (matches[2]) {
            return this.checkDigit11(matches[2]) && this.checkDigit11(matches[3]);
         } else {
            return this.checkDigit11(matches[3]);
         }
      },
      checkDigit11: function(n, x) {
         var l = n.length - 1, i = 0, v = 0;
         var weights = [1, 2, 4, 8, 5, 10, 9, 7, 3, 6];

         for (i = 0; i <= l; i++) {
            v += parseInt(n[l - i], 10) * weights[i];
         }
         return v % 11 == 0;
      }
   };
}(window.jQuery));
