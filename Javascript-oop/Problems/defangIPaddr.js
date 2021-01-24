/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.split('.').join("[.]");
};

let address = "1.1.1.1";
console.log(defangIPaddr(address));