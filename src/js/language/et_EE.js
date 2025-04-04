(function($) {
   /**
    * Czech language package
    * Translated by @AdwinTrave. Improved by @cuchac
    */
   $.fn.bootstrapValidator.i18n = $.extend(true, $.fn.bootstrapValidator.i18n, {
      bankAccount : {
        default: "Palun sisestage kehtiv kontonumber või IBAN"
      },
      base64: {
         default: 'Palun sisestage kehtiv base64'
      },
      between: {
         default: 'Palun sisestage väärtus vahemikus %s kuni %s\'',
         notInclusive: 'Palun sisestage väärtus vahemikus %s kuni %s (kaasa arvatud)'
      },
      callback: {
         default: 'Palun sisestage kehtiv väärtus'
      },
      choice: {
         default: 'Palun valige kehtiv väärtus',
         less: 'Väärtus peab olema vähemalt %s',
         more: 'Väärtus ei tohi olla suurem kui %s',
         between: 'Palun valige väärtus vahemikus %s kuni %s'
      },
      color: {
         default: 'Palun sisestage kehtiv värv'
      },
      creditCard: {
         default: 'Palun sisestage kehtiv krediitkaardi number\''
      },
      cusip: {
         default: 'Palun sisestage kehtiv CUSIP number'
      },
      cvv: {
         default: 'Palun sisestage kehtiv CVV number'
      },
      date: {
         default: 'Palun sisestage kehtiv kuupäev',
         min: 'Palun sisestage kuupäev enne %s',
         max: 'Palun sisestage kuupäev pärast %s',
         range: 'Palun sisestage kuupäev vahemikus %s kuni %s'
      },
      different: {
         default: 'Palun sisestage teine väärtus'
      },
      digits: {
         default: 'See väli võib sisaldada ainult numbreid'
      },
      ean: {
         default: 'Palun sisestage kehtiv EAN number'
      },
      emailAddress: {
         default: 'Palun sisestage kehtiv e-posti aadress'
      },
      file: {
         default: 'Palun valige fail'
      },
      greaterThan: {
         default: 'Palun sisestage väärtus, mis on suurem või võrdne %s',
         notInclusive: 'Palun sisestage väärtus, mis on suurem kui %s'
      },
      grid: {
         default: 'Palun sisestage kehtiv GRId number'
      },
      hex: {
         default: 'Prosím, zadejte správné hexadecimální číslo'
      },
      hexColor: {
         default: 'Palun sisestage kehtiv kuueteistkümnendsüsteemi arv'
      },
      iban: {
         default: 'Palun sisestage kehtiv IBAN number',
         countryNotSupported: 'IBAN riigile %s ei ole toetatud',
         country: 'Palun sisestage kehtiv IBAN riigile %s',
         countries: {
            AD: 'Andorra',
            AE: 'Araabia Ühendemiraadid',
            AL: 'Albaania',
            AO: 'Angola',
            AT: 'Austria',
            AZ: 'Aserbaidžaan',
            BA: 'Bosnia ja Hertsegoviina',
            BE: 'Belgia',
            BF: 'Burkina Faso',
            BG: 'Bulgaaria',
            BH: 'Bahrein',
            BI: 'Burundi',
            BJ: 'Benin',
            BR: 'Brasiilia',
            CH: 'Šveits',
            CI: 'Elevandiluurannik',
            CM: 'Kamerun',
            CR: 'Costa Rica',
            CV: 'Roheneemesaared',
            CY: 'Küpros',
            CZ: 'Tšehhi Vabariik',
            DE: 'Saksamaa',
            DK: 'Taani',
            DO: 'Dominikaani Vabariik',
            DZ: 'Alžeeria',
            EE: 'Eesti',
            ES: 'Hispaania',
            FI: 'Soome',
            FO: 'Fääri saared',
            FR: 'Prantsusmaa',
            GB: 'Suurbritannia',
            GE: 'Gruusia',
            GI: 'Gibraltar',
            GL: 'Gröönimaa',
            GR: 'Kreeka',
            GT: 'Guatemala',
            HR: 'Horvaatia',
            HU: 'Ungari',
            IE: 'Iirimaa',
            IL: 'Iisrael',
            IR: 'Iraan',
            IS: 'Island',
            IT: 'Itaalia',
            JO: 'Jordaania',
            KW: 'Kuveit',
            KZ: 'Kasahstan',
            LB: 'Liibanon',
            LI: 'Liechtenstein',
            LT: 'Leedu',
            LU: 'Luksemburg',
            LV: 'Läti',
            MC: 'Monaco',
            MD: 'Moldova',
            ME: 'Montenegro',
            MG: 'Madagaskar',
            MK: 'Põhja-Makedoonia',
            ML: 'Mali',
            MR: 'Mauritaania',
            MT: 'Malta',
            MU: 'Mauritius',
            MZ: 'Mosambiik',
            NL: 'Holland',
            NO: 'Norra',
            PK: 'Pakistan',
            PL: 'Poola',
            PS: 'Palestiina',
            PT: 'Portugal',
            QA: 'Katar',
            RO: 'Rumeenia',
            RS: 'Serbia',
            SA: 'Saudi Araabia',
            SE: 'Rootsi',
            SI: 'Sloveenia',
            SK: 'Slovakkia',
            SM: 'San Marino',
            SN: 'Senegal',
            TN: 'Tuneesia',
            TR: 'Türgi',
            VG: 'Briti Neitsisaared'
         }
      },
      id: {
         default: 'Palun sisestage kehtiv isikukood',
         countryNotSupported: 'Isikukood riigile %s ei ole toetatud',
         country: 'Palun sisestage kehtiv isikukood riigile %s',
         countries: {
            BA: 'Bosnia ja Hertsegoviina',
            BG: 'Bulgaaria',
            BR: 'Brasiilia',
            CH: 'Šveits',
            CL: 'Tšiili',
            CN: 'Hiina',
            CZ: 'Tšehhi Vabariik',
            DK: 'Taani',
            EE: 'Eesti',
            ES: 'Hispaania',
            FI: 'Soome',
            HR: 'Horvaatia',
            IE: 'Iirimaa',
            IS: 'Island',
            LT: 'Leedu',
            LV: 'Läti',
            ME: 'Montenegro',
            MK: 'Põhja-Makedoonia',
            NL: 'Holland',
            RO: 'Rumeenia',
            RS: 'Serbia',
            SE: 'Rootsi',
            SI: 'Sloveenia',
            SK: 'Slovakkia',
            SM: 'San Marino',
            TH: 'Tai',
            ZA: 'Lõuna-Aafrika'
         }
      },
      identical: {
         default: 'Palun sisestage sama väärtus'
      },
      imei: {
         default: 'Palun sisestage kehtiv IMEI number'
      },
      imo: {
         default: 'Palun sisestage kehtiv IMO number'
      },
      integer: {
         default: 'Palun sisestage täisarv'
      },
      ip: {
         default: 'Palun sisestage kehtiv IP-aadress',
         ipv4: 'Palun sisestage kehtiv IPv4-aadress',
         ipv6: 'Palun sisestage kehtiv IPv6-aadress'
      },
      isbn: {
         default: 'Palun sisestage kehtiv ISBN'
      },
      isin: {
         default: 'Palun sisestage kehtiv ISIN'
      },
      ismn: {
         default: 'Palun sisestage kehtiv ISMN'
      },
      issn: {
         default: 'Palun sisestage kehtiv ISSN'
      },
      lessThan: {
         default: 'Palun sisestage väärtus, mis on väiksem või võrdne %s',
         notInclusive: 'Palun sisestage väärtus, mis on väiksem kui %s'
      },
      mac: {
         default: 'Palun sisestage kehtiv MAC-aadress'
      },
      meid: {
         default: 'Palun sisestage kehtiv MEID number'
      },
      notEmpty: {
         default: 'See väli ei tohi olla tühi'
      },
      numeric: {
         default: 'Palun sisestage arvväärtus'
      },
      phone: {
         default: 'Palun sisestage kehtiv telefoninumber',
         countryNotSupported: 'Telefoninumber riigile %s ei ole toetatud',
         country: 'Palun sisestage kehtiv telefoninumber',
         phoneValidationWarning: 'Kas olete kindel, et telefoninumber on õige?',
         countries: {
            BR: 'Brasiilia',
            CN: 'Hiina',
            CZ: 'Tšehhi Vabariik',
            DE: 'Saksamaa',
            DK: 'Taani',
            ES: 'Hispaania',
            FR: 'Prantsusmaa',
            GB: 'Prantsusmaa',
            MA: 'Maroko',
            PK: 'Pakistan',
            RO: 'Rumeenia',
            RU: 'Venemaa',
            SK: 'Slovakkia',
            TH: 'Tai',
            US: 'Ameerika Ühendriigid',
            VE: 'Venezuela'
         }
      },
      regexp: {
         default: 'Palun sisestage väärtus, mis vastab nõuetele'
      },
      remote: {
         default: 'Palun sisestage kehtiv väärtus'
      },
      rtn: {
         default: 'Palun sisestage kehtiv RTN number'
      },
      sedol: {
         default: 'Palun sisestage kehtiv SEDOL number'
      },
      siren: {
         default: 'Palun sisestage kehtiv SIREN number'
      },
      siret: {
         default: 'Palun sisestage kehtiv SIRET number'
      },
      step: {
         default: 'Palun sisestage õige samm %s'
      },
      stringCase: {
         default: 'Lubatud on ainult väiketähed',
         upper: 'Lubatud on ainult suurtähed'
      },
      stringLength: {
         default: 'See väli ei tohi olla tühi',
         less: 'Palun sisestage vähem kui %s tähemärki',
         more: 'Palun sisestage vähemalt %s tähemärki',
         more_than_two: 'Palun sisestage vähemalt %s tähemärki',
         between: 'Palun sisestage %s kuni %s tähemärki'
      },
      uri: {
         default: 'Palun sisestage %s kuni %s tähemärki'
      },
      uuid: {
         default: 'Palun sisestage kehtiv UUID number',
         version: 'Palun sisestage kehtiv UUID versiooniga %s'
      },
      vat: {
         default: 'Palun sisestage kehtiv KMKR number',
         countryNotSupported: 'KMKR riigile %s ei ole toetatud',
         country: 'Palun sisestage KMKR number riigile %s',
         countries: {
            AT: 'Austria',
            BE: 'Belgia',
            BG: 'Bulgaaria',
            BR: 'Brasiilia',
            CH: 'Šveits',
            CY: 'Küpros',
            CZ: 'Tšehhi Vabariik',
            DE: 'Saksamaa',
            DK: 'Taani',
            EE: 'Eesti',
            ES: 'Hispaania',
            FI: 'Soome',
            FR: 'Prantsusmaa',
            GB: 'Suurbritannia',
            GR: 'Kreeka',
            EL: 'Kreeka',
            HU: 'Ungari',
            HR: 'Horvaatia',
            IE: 'Iirimaa',
            IS: 'Island',
            IT: 'Itaalia',
            LT: 'Leedu',
            LU: 'Luksemburg',
            LV: 'Läti',
            MT: 'Malta',
            NL: 'Holland',
            NO: 'Norra',
            PL: 'Poola',
            PT: 'Portugal',
            RO: 'Rumeenia',
            RU: 'Venemaa',
            RS: 'Serbia',
            SE: 'Rootsi',
            SI: 'Sloveenia',
            SK: 'Slovakkia',
            VE: 'Venezuela',
            ZA: 'Lõuna-Aafrika'
         }
      },
      vatSimple: {
        default: 'Peab algama riigikoodiga (kaks tähte) ja sisaldama vähemalt veel kahte märki.'
      },
      vin: {
         default: 'Palun sisestage kehtiv VIN number'
      },
      zipCode: {
         default: 'Palun sisestage kehtiv postiindeks',
         countryNotSupported: '%s ei ole toetatud',
         country: 'Palun sisestage kehtiv postiindeks',
         countries: {
            AT: 'Austria',
            BR: 'Brasiilia',
            CA: 'Kanada',
            CH: 'Šveits',
            CZ: 'Tšehhi Vabariik',
            DE: 'Saksamaa',
            DK: 'Taani',
            FR: 'Prantsusmaa',
            GB: 'Suurbritannia',
            IE: 'Iirimaa',
            IT: 'Itaalia',
            MA: 'Maroko',
            NL: 'Holland',
            PT: 'Portugal',
            RO: 'Rumeenia',
            RU: 'Venemaa',
            SE: 'Rootsi',
            SG: 'Singapur',
            SK: 'Slovakkia',
            US: 'Ameerika Ühendriigid'
         }
      }
   });
})(window.jQuery);
