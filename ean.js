/** 
 * European Article Number 
 * 
 * @example EAN.isValid('5601314222208');
 */
var EAN = {
  isValid: function (code) {
    var result = false, digits, check, proof;

    digits = code.substr(0, code.length - 1);
    check = this.checkdigit(digits);
    proof = String(digits) + String(check);

    if (proof === code) {
      result = true;
    }

    return result;
  },
  checkdigit: function (digits) {
    var sum = 0, size, i;
    digits = String(digits);
    while (digits.length < 12) {
      digits = '0' + digits;
    }
    size = digits.length;
    for (i = (size - 1); i >= 0; i--) {
      sum += ((i % 2) * 2 + 1) * Number(digits.charAt(i));
    }
    return (10 - (sum % 10));
  }
};
