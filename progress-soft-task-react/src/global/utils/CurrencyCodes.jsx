class CurrencyCodes {
  constructor() {
    this.codeToNameMap = new Map();
    this.nameToCodeMap = new Map();
    this.initializeMaps();
  }

  initializeMaps() {
    this.codeToNameMap.set("AED", "784");
    this.nameToCodeMap.set("784", "AED");

    this.codeToNameMap.set("AFN", "971");
    this.nameToCodeMap.set("971", "AFN");

    this.codeToNameMap.set("ALL", "008");
    this.nameToCodeMap.set("008", "ALL");

    this.codeToNameMap.set("AMD", "051");
    this.nameToCodeMap.set("051", "AMD");

    this.codeToNameMap.set("ANG", "532");
    this.nameToCodeMap.set("532", "ANG");

    this.codeToNameMap.set("AOA", "973");
    this.nameToCodeMap.set("973", "AOA");

    this.codeToNameMap.set("ARS", "032");
    this.nameToCodeMap.set("032", "ARS");

    this.codeToNameMap.set("AUD", "036");
    this.nameToCodeMap.set("036", "AUD");

    this.codeToNameMap.set("AWG", "533");
    this.nameToCodeMap.set("533", "AWG");

    this.codeToNameMap.set("AZN", "944");
    this.nameToCodeMap.set("944", "AZN");

    this.codeToNameMap.set("BAM", "977");
    this.nameToCodeMap.set("977", "BAM");

    this.codeToNameMap.set("BBD", "052");
    this.nameToCodeMap.set("052", "BBD");

    this.codeToNameMap.set("BDT", "050");
    this.nameToCodeMap.set("050", "BDT");

    this.codeToNameMap.set("BGN", "975");
    this.nameToCodeMap.set("975", "BGN");

    this.codeToNameMap.set("BHD", "048");
    this.nameToCodeMap.set("048", "BHD");

    this.codeToNameMap.set("BIF", "108");
    this.nameToCodeMap.set("108", "BIF");

    this.codeToNameMap.set("BMD", "060");
    this.nameToCodeMap.set("060", "BMD");

    this.codeToNameMap.set("BND", "096");
    this.nameToCodeMap.set("096", "BND");

    this.codeToNameMap.set("BOB", "068");
    this.nameToCodeMap.set("068", "BOB");

    this.codeToNameMap.set("BOV", "984");
    this.nameToCodeMap.set("984", "BOV");

    this.codeToNameMap.set("BRL", "986");
    this.nameToCodeMap.set("986", "BRL");

    this.codeToNameMap.set("BSD", "044");
    this.nameToCodeMap.set("044", "BSD");

    this.codeToNameMap.set("BTN", "064");
    this.nameToCodeMap.set("064", "BTN");

    this.codeToNameMap.set("BWP", "072");
    this.nameToCodeMap.set("072", "BWP");

    this.codeToNameMap.set("BYN", "933");
    this.nameToCodeMap.set("933", "BYN");

    this.codeToNameMap.set("BZD", "084");
    this.nameToCodeMap.set("084", "BZD");

    this.codeToNameMap.set("CAD", "124");
    this.nameToCodeMap.set("124", "CAD");

    this.codeToNameMap.set("CDF", "976");
    this.nameToCodeMap.set("976", "CDF");

    this.codeToNameMap.set("CHE", "947");
    this.nameToCodeMap.set("947", "CHE");

    this.codeToNameMap.set("CHF", "756");
    this.nameToCodeMap.set("756", "CHF");

    this.codeToNameMap.set("CHW", "948");
    this.nameToCodeMap.set("948", "CHW");

    this.codeToNameMap.set("CLF", "990");
    this.nameToCodeMap.set("990", "CLF");

    this.codeToNameMap.set("CLP", "152");
    this.nameToCodeMap.set("152", "CLP");

    this.codeToNameMap.set("CNY", "156");
    this.nameToCodeMap.set("156", "CNY");

    this.codeToNameMap.set("COP", "170");
    this.nameToCodeMap.set("170", "COP");

    this.codeToNameMap.set("COU", "970");
    this.nameToCodeMap.set("970", "COU");

    this.codeToNameMap.set("CRC", "188");
    this.nameToCodeMap.set("188", "CRC");

    this.codeToNameMap.set("CUC", "931");
    this.nameToCodeMap.set("931", "CUC");

    this.codeToNameMap.set("CUP", "192");
    this.nameToCodeMap.set("192", "CUP");

    this.codeToNameMap.set("CVE", "132");
    this.nameToCodeMap.set("132", "CVE");

    this.codeToNameMap.set("CZK", "203");
    this.nameToCodeMap.set("203", "CZK");

    this.codeToNameMap.set("DJF", "262");
    this.nameToCodeMap.set("262", "DJF");

    this.codeToNameMap.set("DKK", "208");
    this.nameToCodeMap.set("208", "DKK");

    this.codeToNameMap.set("DOP", "214");
    this.nameToCodeMap.set("214", "DOP");

    this.codeToNameMap.set("DZD", "012");
    this.nameToCodeMap.set("012", "DZD");

    this.codeToNameMap.set("EGP", "818");
    this.nameToCodeMap.set("818", "EGP");

    this.codeToNameMap.set("ERN", "232");
    this.nameToCodeMap.set("232", "ERN");

    this.codeToNameMap.set("ETB", "230");
    this.nameToCodeMap.set("230", "ETB");

    this.codeToNameMap.set("EUR", "978");
    this.nameToCodeMap.set("978", "EUR");

    this.codeToNameMap.set("FJD", "242");
    this.nameToCodeMap.set("242", "FJD");

    this.codeToNameMap.set("FKP", "238");
    this.nameToCodeMap.set("238", "FKP");

    this.codeToNameMap.set("FOK", "032");
    this.nameToCodeMap.set("032", "FOK");

    this.codeToNameMap.set("GBP", "826");
    this.nameToCodeMap.set("826", "GBP");

    this.codeToNameMap.set("GEL", "981");
    this.nameToCodeMap.set("981", "GEL");

    this.codeToNameMap.set("GGP", "292");
    this.nameToCodeMap.set("292", "GGP");

    this.codeToNameMap.set("GHS", "936");
    this.nameToCodeMap.set("936", "GHS");

    this.codeToNameMap.set("GIP", "292");
    this.nameToCodeMap.set("292", "GIP");

    this.codeToNameMap.set("GMD", "270");
    this.nameToCodeMap.set("270", "GMD");

    this.codeToNameMap.set("GNF", "324");
    this.nameToCodeMap.set("324", "GNF");

    this.codeToNameMap.set("GTQ", "320");
    this.nameToCodeMap.set("320", "GTQ");

    this.codeToNameMap.set("GYD", "328");
    this.nameToCodeMap.set("328", "GYD");

    this.codeToNameMap.set("HKD", "344");
    this.nameToCodeMap.set("344", "HKD");

    this.codeToNameMap.set("HNL", "340");
    this.nameToCodeMap.set("340", "HNL");

    this.codeToNameMap.set("HRK", "191");
    this.nameToCodeMap.set("191", "HRK");

    this.codeToNameMap.set("HTG", "332");
    this.nameToCodeMap.set("332", "HTG");

    this.codeToNameMap.set("HUF", "348");
    this.nameToCodeMap.set("348", "HUF");

    this.codeToNameMap.set("IDR", "360");
    this.nameToCodeMap.set("360", "IDR");

    this.codeToNameMap.set("ILS", "376");
    this.nameToCodeMap.set("376", "ILS");

    this.codeToNameMap.set("IMP", "292");
    this.nameToCodeMap.set("292", "IMP");

    this.codeToNameMap.set("INR", "356");
    this.nameToCodeMap.set("356", "INR");

    this.codeToNameMap.set("IQD", "368");
    this.nameToCodeMap.set("368", "IQD");

    this.codeToNameMap.set("IRR", "364");
    this.nameToCodeMap.set("364", "IRR");

    this.codeToNameMap.set("ISK", "352");
    this.nameToCodeMap.set("352", "ISK");

    this.codeToNameMap.set("JEP", "292");
    this.nameToCodeMap.set("292", "JEP");

    this.codeToNameMap.set("JMD", "388");
    this.nameToCodeMap.set("388", "JMD");

    this.codeToNameMap.set("JOD", "400");
    this.nameToCodeMap.set("400", "JOD");

    this.codeToNameMap.set("JPY", "392");
    this.nameToCodeMap.set("392", "JPY");

    this.codeToNameMap.set("KES", "404");
    this.nameToCodeMap.set("404", "KES");

    this.codeToNameMap.set("KGS", "417");
    this.nameToCodeMap.set("417", "KGS");

    this.codeToNameMap.set("KHR", "116");
    this.nameToCodeMap.set("116", "KHR");

    this.codeToNameMap.set("KID", "292");
    this.nameToCodeMap.set("292", "KID");

    this.codeToNameMap.set("KMF", "174");
    this.nameToCodeMap.set("174", "KMF");

    this.codeToNameMap.set("KRW", "410");
    this.nameToCodeMap.set("410", "KRW");

    this.codeToNameMap.set("KWD", "414");
    this.nameToCodeMap.set("414", "KWD");

    this.codeToNameMap.set("KYD", "136");
    this.nameToCodeMap.set("136", "KYD");

    this.codeToNameMap.set("KZT", "398");
    this.nameToCodeMap.set("398", "KZT");

    this.codeToNameMap.set("LAK", "418");
    this.nameToCodeMap.set("418", "LAK");

    this.codeToNameMap.set("LBP", "422");
    this.nameToCodeMap.set("422", "LBP");

    this.codeToNameMap.set("LKR", "144");
    this.nameToCodeMap.set("144", "LKR");

    this.codeToNameMap.set("LRD", "430");
    this.nameToCodeMap.set("430", "LRD");

    this.codeToNameMap.set("LSL", "426");
    this.nameToCodeMap.set("426", "LSL");

    this.codeToNameMap.set("LYD", "434");
    this.nameToCodeMap.set("434", "LYD");

    this.codeToNameMap.set("MAD", "504");
    this.nameToCodeMap.set("504", "MAD");

    this.codeToNameMap.set("MDL", "498");
    this.nameToCodeMap.set("498", "MDL");

    this.codeToNameMap.set("MGA", "969");
    this.nameToCodeMap.set("969", "MGA");

    this.codeToNameMap.set("MKD", "807");
    this.nameToCodeMap.set("807", "MKD");

    this.codeToNameMap.set("MMK", "104");
    this.nameToCodeMap.set("104", "MMK");

    this.codeToNameMap.set("MNT", "496");
    this.nameToCodeMap.set("496", "MNT");

    this.codeToNameMap.set("MOP", "446");
    this.nameToCodeMap.set("446", "MOP");

    this.codeToNameMap.set("MRU", "929");
    this.nameToCodeMap.set("929", "MRU");

    this.codeToNameMap.set("MUR", "480");
    this.nameToCodeMap.set("480", "MUR");

    this.codeToNameMap.set("MVR", "462");
    this.nameToCodeMap.set("462", "MVR");

    this.codeToNameMap.set("MWK", "454");
    this.nameToCodeMap.set("454", "MWK");

    this.codeToNameMap.set("MXN", "484");
    this.nameToCodeMap.set("484", "MXN");

    this.codeToNameMap.set("MXV", "979");
    this.nameToCodeMap.set("979", "MXV");

    this.codeToNameMap.set("MYR", "458");
    this.nameToCodeMap.set("458", "MYR");

    this.codeToNameMap.set("MZN", "943");
    this.nameToCodeMap.set("943", "MZN");

    this.codeToNameMap.set("NAD", "516");
    this.nameToCodeMap.set("516", "NAD");

    this.codeToNameMap.set("NGN", "566");
    this.nameToCodeMap.set("566", "NGN");

    this.codeToNameMap.set("NIO", "558");
    this.nameToCodeMap.set("558", "NIO");

    this.codeToNameMap.set("NOK", "578");
    this.nameToCodeMap.set("578", "NOK");

    this.codeToNameMap.set("NPR", "524");
    this.nameToCodeMap.set("524", "NPR");

    this.codeToNameMap.set("NZD", "554");
    this.nameToCodeMap.set("554", "NZD");

    this.codeToNameMap.set("OMR", "512");
    this.nameToCodeMap.set("512", "OMR");

    this.codeToNameMap.set("PAB", "590");
    this.nameToCodeMap.set("590", "PAB");

    this.codeToNameMap.set("PEN", "604");
    this.nameToCodeMap.set("604", "PEN");

    this.codeToNameMap.set("PGK", "598");
    this.nameToCodeMap.set("598", "PGK");

    this.codeToNameMap.set("PHP", "608");
    this.nameToCodeMap.set("608", "PHP");

    this.codeToNameMap.set("PKR", "586");
    this.nameToCodeMap.set("586", "PKR");

    this.codeToNameMap.set("PLN", "985");
    this.nameToCodeMap.set("985", "PLN");

    this.codeToNameMap.set("PYG", "600");
    this.nameToCodeMap.set("600", "PYG");

    this.codeToNameMap.set("QAR", "634");
    this.nameToCodeMap.set("634", "QAR");

    this.codeToNameMap.set("RON", "946");
    this.nameToCodeMap.set("946", "RON");

    this.codeToNameMap.set("RSD", "941");
    this.nameToCodeMap.set("941", "RSD");

    this.codeToNameMap.set("RUB", "643");
    this.nameToCodeMap.set("643", "RUB");

    this.codeToNameMap.set("RWF", "646");
    this.nameToCodeMap.set("646", "RWF");

    this.codeToNameMap.set("SAR", "682");
    this.nameToCodeMap.set("682", "SAR");

    this.codeToNameMap.set("SBD", "090");
    this.nameToCodeMap.set("090", "SBD");

    this.codeToNameMap.set("SCR", "690");
    this.nameToCodeMap.set("690", "SCR");

    this.codeToNameMap.set("SDG", "938");
    this.nameToCodeMap.set("938", "SDG");

    this.codeToNameMap.set("SEK", "752");
    this.nameToCodeMap.set("752", "SEK");

    this.codeToNameMap.set("SGD", "702");
    this.nameToCodeMap.set("702", "SGD");

    this.codeToNameMap.set("SHP", "654");
    this.nameToCodeMap.set("654", "SHP");

    this.codeToNameMap.set("SLL", "694");
    this.nameToCodeMap.set("694", "SLL");

    this.codeToNameMap.set("SOS", "706");
    this.nameToCodeMap.set("706", "SOS");

    this.codeToNameMap.set("SRD", "968");
    this.nameToCodeMap.set("968", "SRD");

    this.codeToNameMap.set("SSP", "728");
    this.nameToCodeMap.set("728", "SSP");

    this.codeToNameMap.set("STN", "930");
    this.nameToCodeMap.set("930", "STN");

    this.codeToNameMap.set("SYP", "760");
    this.nameToCodeMap.set("760", "SYP");

    this.codeToNameMap.set("SZL", "748");
    this.nameToCodeMap.set("748", "SZL");

    this.codeToNameMap.set("THB", "764");
    this.nameToCodeMap.set("764", "THB");

    this.codeToNameMap.set("TJS", "972");
    this.nameToCodeMap.set("972", "TJS");

    this.codeToNameMap.set("TMT", "934");
    this.nameToCodeMap.set("934", "TMT");

    this.codeToNameMap.set("TND", "788");
    this.nameToCodeMap.set("788", "TND");

    this.codeToNameMap.set("TOP", "776");
    this.nameToCodeMap.set("776", "TOP");

    this.codeToNameMap.set("TRY", "949");
    this.nameToCodeMap.set("949", "TRY");

    this.codeToNameMap.set("TTD", "780");
    this.nameToCodeMap.set("780", "TTD");

    this.codeToNameMap.set("TWD", "901");
    this.nameToCodeMap.set("901", "TWD");

    this.codeToNameMap.set("TZS", "834");
    this.nameToCodeMap.set("834", "TZS");

    this.codeToNameMap.set("UAH", "980");
    this.nameToCodeMap.set("980", "UAH");

    this.codeToNameMap.set("UGX", "800");
    this.nameToCodeMap.set("800", "UGX");

    this.codeToNameMap.set("USD", "840");
    this.nameToCodeMap.set("840", "USD");

    this.codeToNameMap.set("USN", "997");
    this.nameToCodeMap.set("997", "USN");

    this.codeToNameMap.set("UYI", "940");
    this.nameToCodeMap.set("940", "UYI");

    this.codeToNameMap.set("UYU", "858");
    this.nameToCodeMap.set("858", "UYU");

    this.codeToNameMap.set("UZS", "860");
    this.nameToCodeMap.set("860", "UZS");

    this.codeToNameMap.set("VEF", "937");
    this.nameToCodeMap.set("937", "VEF");

    this.codeToNameMap.set("VND", "704");
    this.nameToCodeMap.set("704", "VND");

    this.codeToNameMap.set("VUV", "548");
    this.nameToCodeMap.set("548", "VUV");

    this.codeToNameMap.set("WST", "882");
    this.nameToCodeMap.set("882", "WST");

    this.codeToNameMap.set("XAF", "950");
    this.nameToCodeMap.set("950", "XAF");

    this.codeToNameMap.set("XCD", "951");
    this.nameToCodeMap.set("951", "XCD");

    this.codeToNameMap.set("XDR", "960");
    this.nameToCodeMap.set("960", "XDR");

    this.codeToNameMap.set("XOF", "952");
    this.nameToCodeMap.set("952", "XOF");

    this.codeToNameMap.set("XPF", "953");
    this.nameToCodeMap.set("953", "XPF");

    this.codeToNameMap.set("XSU", "994");
    this.nameToCodeMap.set("994", "XSU");

    this.codeToNameMap.set("XUA", "965");
    this.nameToCodeMap.set("965", "XUA");

    this.codeToNameMap.set("YER", "886");
    this.nameToCodeMap.set("886", "YER");

    this.codeToNameMap.set("ZAR", "710");
    this.nameToCodeMap.set("710", "ZAR");

    this.codeToNameMap.set("ZMW", "967");
    this.nameToCodeMap.set("967", "ZMW");

    this.codeToNameMap.set("ZWL", "932");
    this.nameToCodeMap.set("932", "ZWL");
  }

  getIsoCode(code) {
    if (this.nameToCodeMap.has(code)) {
      return this.nameToCodeMap.get(code);
    } else if (this.codeToNameMap.has(code)) {
      return code;
    } else {
      return "false";
    }
  }
}

export default CurrencyCodes;
