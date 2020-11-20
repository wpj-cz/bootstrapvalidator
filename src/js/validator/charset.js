(function($) {
   $.fn.bootstrapValidator.i18n.charset = $.extend($.fn.bootstrapValidator.i18n.charset || {}, {
      default: 'Prosím používejte pouze latinku'
   });

   $.fn.bootstrapValidator.validators.charset = {
      html5Attributes: {
         encoding: 'encoding'
      },

      CHARSETS: ['windows-1250'],

      /**
       * Return true if the input value matches selected charset.
       *
       * @param {BootstrapValidator} validator The validator plugin instance
       * @param {jQuery} $field Field element
       * @param {Object} options Can consist of the following keys:
       * - encoding: character set to match agains
       * @returns {Boolean}
       */
      validate: function(validator, $field, options) {
         var value = $field.val();
         if (value === '') {
            return true;
         }

         var encoding = options.encoding;
         if (typeof encoding !== 'string' || $.inArray(encoding, this.CHARSETS) === -1) {
            encoding = this.CHARSETS[0];
         }

         var isValid = true;

         switch (encoding) {
            case 'windows-1250':
               isValid = /^[A-Za-z0-9 !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~€‚„…†‡‰Š‹ŚŤŽŹ‘’“”•–—™š›śťžźˇ˘Ł¤Ą¦§¨©Ş«¬®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙]*$/.test(
                  value
               );
               break;
         }

         return isValid;
      }
   };
})(window.jQuery);
