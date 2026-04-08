
console.log("%cBuild date: 4/8/2026, 5:57:54 AM", "color: #4CAF50; font-weight: bold;");
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 2151:
/***/ ((module) => {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),

/***/ 3939:
/***/ ((module) => {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),

/***/ 7161:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.termsMain .term {
  color: white;
  text-align: left;
  font-size: 20px;
}
.termsMain .term .title {
  text-align: center;
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 10px;
  margin-top: 20px;
}
.termsMain .term .time {
  text-align: right;
  margin-bottom: 10px;
}
.termsMain .term .desc {
  margin-top: 10px;
  margin-bottom: 10px;
}
.termsMain .term .section {
  margin-top: 10px;
  margin-bottom: 10px;
}
.termsMain .term .section .title {
  text-align: center;
  font-size: 25px;
  font-weight: 800;
  margin-bottom: 10px;
  margin-top: 20px;
}
.contacts {
  background: black;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: flex-start;
}
.contacts > div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  gap: 10px;
}
.contacts > div .title::after {
  content: ':';
  color: grey;
  margin-left: 3px;
  font-weight: 800;
}
.contacts > div a {
  color: white;
}
.subscribeData {
  background: black;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: flex-start;
}
.payment-crypto-section {
  margin-top: 10px;
}
.payment-crypto-section .container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.payment-crypto-section .payment-crypto-wrapper {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background: #181818;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 32px 24px;
}
.payment-crypto-section .payment-crypto-form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 24px;
}
.payment-crypto-section .payment-crypto-form h2 {
  text-align: center;
  color: #8774e1;
  margin-bottom: 16px;
}
.payment-crypto-section .payment-crypto-form .crypto-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.payment-crypto-section .payment-crypto-form .crypto-details .crypto_image {
  margin: auto;
  width: -webkit-fill-available;
}
.payment-crypto-section .payment-crypto-form .crypto-details .crypto-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1em;
}
.payment-crypto-section .payment-crypto-form .crypto-details .crypto-row .crypto-label {
  color: #aaaaaa;
}
.payment-crypto-section .payment-crypto-form .crypto-details .crypto-row .crypto-value {
  font-weight: bold;
  color: #ffffff;
}
.payment-crypto-section .payment-crypto-form .crypto-details .crypto-row.crypto-instruction {
  flex-direction: column;
  color: #aaaaaa;
  font-size: 0.95em;
  margin-top: 12px;
}
.payment-crypto-section .payment-crypto-form .crypto-error {
  color: #ff5842;
  text-align: center;
  font-weight: bold;
  margin: 16px 0;
}
.payment-crypto-section .payment-crypto-form .crypto-loading {
  color: #aaaaaa;
  text-align: center;
  margin: 16px 0;
}
/* Медиа-запрос для мобильных устройств */
@media screen and (max-width: 768px) {
  body {
    font-size: 16px;
  }
  .container {
    width: 92%;
  }
  header {
    height: auto;
    padding: 12px 0;
  }
  header nav {
    flex-direction: column;
    gap: 12px;
  }
  header nav .right {
    width: 100%;
    justify-content: flex-end;
    gap: 8px;
    position: relative;
  }
  #hero {
    padding: 60px 0 30px;
  }
  #hero h1 {
    font-size: 2em;
  }
  .features {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  .feature {
    max-width: 100%;
    width: 100%;
  }
  .plans {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .plan {
    width: 100%;
  }
  #faq .faq-item {
    width: 100%;
  }
}
/* Еще более мелкие экраны */
@media screen and (max-width: 480px) {
  body {
    font-size: 14px;
  }
  #hero h1 {
    font-size: 1.7em;
  }
  header nav .btn {
    width: 100%;
    text-align: center;
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Inter, sans-serif;
  line-height: 1.6;
  color: #ffffff;
  background-color: #212121;
}
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}
header {
  background-color: #181818;
  color: #ffffff;
  height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 100;
}
header .logo {
  font-size: 1.25em;
  cursor: pointer;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
}
header nav {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
header nav a:not(.btn) {
  color: #aaaaaa;
  text-decoration: none;
  margin: 0 15px;
  font-size: 0.95em;
  font-weight: 500;
  transition: color 0.2s;
}
header nav a:not(.btn):hover {
  color: #ffffff;
}
header nav .right {
  display: flex;
  align-items: center;
  gap: 15px;
}
header nav .mobile-menu-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 101;
}
@media screen and (max-width: 950px) {
  header nav .mobile-menu-toggle {
    display: flex;
  }
  header nav .right {
    width: max-content;
  }
  header nav .nav-items {
    display: none !important;
    align-items: center;
    gap: 15px;
    position: absolute;
    top: 48px;
    right: 10px;
    min-width: min(98vw, 300px);
    background-color: #181818;
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 8px;
    padding: 12px;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    z-index: 100;
  }
  header nav .nav-items.open {
    display: flex !important;
  }
  header nav .nav-items .btn {
    width: 100%;
    text-align: center;
  }
  header nav .nav-items select {
    width: 100%;
    text-align: center;
  }
}
header nav .hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 24px;
}
header nav .hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #ffffff;
  border-radius: 2px;
  transition: all 0.3s ease;
}
header nav .hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
header nav .hamburger.open span:nth-child(2) {
  opacity: 0;
}
header nav .hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}
header nav .nav-items {
  display: flex;
  align-items: center;
  gap: 15px;
}
header nav .btn {
  background: #8774e1;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9em;
  font-weight: 600;
  transition: opacity 0.2s;
}
header nav .btn:hover {
  opacity: 0.9;
}
header nav select {
  background-color: transparent;
  color: #aaaaaa;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 0.85em;
  cursor: pointer;
  outline: none;
}
header nav select:focus {
  border-color: #8774e1;
}
header nav select option {
  background-color: #181818;
  color: #ffffff;
}
.price s {
  color: #666;
  text-decoration-color: #ff4500;
  font-size: 0.7em;
}
.discount {
  color: #ff4500;
  font-weight: bold;
  margin-left: 10px;
}
.plan-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.plan-badge {
  width: max-content;
  background-color: #b12f00;
  color: white;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.8em;
  margin-bottom: 5px;
}
#pricing .container h2 {
  text-align: center;
  margin-bottom: 30px;
  /* Опционально, для отступа между заголовком и тарифами */
}
#hero {
  background-color: #212121;
  color: #ffffff;
  text-align: center;
  padding: 80px 0 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
#hero h1 {
  font-size: 3em;
  font-weight: 800;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}
#hero p {
  color: #aaaaaa;
  font-size: 1.2em;
  max-width: 600px;
  margin: 0 auto;
}
#hero .btn-primary {
  background: #8774e1;
  color: #ffffff;
  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  margin-top: 30px;
  display: inline-block;
  font-weight: 600;
  font-size: 1.1em;
  transition: transform 0.2s, box-shadow 0.2s;
}
#hero .btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(135, 116, 225, 0.4);
}
#about,
#pricing,
#faq {
  padding: 60px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
#about .container h2,
#pricing .container h2,
#faq .container h2 {
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
}
.features {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}
.feature {
  background-color: #181818;
  color: #ffffff;
  text-align: left;
  max-width: 350px;
  flex: 1 1 300px;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.feature:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.15);
}
.feature img {
  width: 42px;
  height: 42px;
  margin-bottom: 20px;
  display: block;
  filter: none;
}
.feature h3 {
  margin-bottom: 12px;
  font-size: 1.3em;
  font-weight: 700;
  color: #ffffff;
}
.feature p {
  color: #aaaaaa;
  font-size: 0.95em;
  line-height: 1.5;
}
.plans {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}
.plan {
  background-color: #181818;
  color: #ffffff;
  padding: 32px;
  text-align: center;
  border-radius: 16px;
  width: 320px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, border-color 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.plan:hover {
  transform: translateY(-8px);
  border-color: #8774e1;
}
.plan.featured {
  border: 2px solid #8774e1;
  position: relative;
}
.plan.featured::before {
  content: 'POPULAR';
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #8774e1;
  color: white;
  padding: 2px 12px;
  border-radius: 12px;
  font-size: 0.75em;
  font-weight: 700;
}
.plan .plan-header {
  flex-direction: column;
  gap: 8px;
}
.plan .price {
  font-size: 2.2em;
  font-weight: 800;
  color: #ffffff;
  margin: 20px 0;
}
.plan .price s {
  color: #aaaaaa;
  font-size: 0.5em;
  font-weight: 400;
  text-decoration-color: #ff5842;
}
.plan-badge {
  background-color: rgba(135, 116, 225, 0.15);
  color: #8774e1;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8em;
  font-weight: 600;
  margin-bottom: 12px;
  display: inline-block;
}
.plan .btn-primary {
  width: 100%;
  margin-top: 24px;
  padding: 12px;
  background-color: #8774e1;
  color: #ffffff;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s;
}
.plan .btn-primary:hover {
  opacity: 0.9;
}
footer {
  background-color: #181818;
  color: #aaaaaa;
  text-align: center;
  padding: 40px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
footer .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
footer p {
  font-size: 0.9em;
}
footer .links {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 8px 0;
}
footer a {
  color: #aaaaaa;
  text-decoration: none;
  font-size: 0.9em;
  transition: color 0.2s;
}
footer a:hover {
  color: #8774e1;
  text-decoration: underline;
}
footer .footerLicense {
  font-size: 0.75em;
  opacity: 0.6;
  max-width: 600px;
  margin-top: 16px;
}
.faq-item {
  margin-bottom: 12px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 8px;
  overflow: hidden;
}
.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
  cursor: pointer;
  background-color: #181818;
  font-weight: 600;
  transition: background-color 0.2s;
}
.faq-question:hover {
  background-color: rgba(255, 255, 255, 0.03);
}
.faq-question::after {
  content: '▼';
  font-size: 0.8em;
  color: #aaaaaa;
  transition: transform 0.3s;
}
.faq-question.active::after {
  transform: rotate(180deg);
}
.faq-answer {
  white-space: pre-line;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out, padding 0.3s;
  padding: 0 24px;
  background-color: #212121;
  color: #aaaaaa;
  font-size: 0.95em;
  line-height: 1.6;
}
.faq-answer a {
  color: #8774e1;
}
.faq-answer.show {
  max-height: 500px;
  padding: 18px 24px;
}
#payment .payment-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  padding: 40px 0;
}
.payment-form,
.payment-info {
  background-color: #181818;
  color: #ffffff;
  padding: 32px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  flex: 1 1 400px;
  max-width: 500px;
}
.payment-form .btn-primary {
  background: #8774e1;
  color: #ffffff;
  padding: 14px;
  border-radius: 8px;
  margin-top: 20px;
  width: 100%;
  font-weight: 700;
  font-size: 1em;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
}
.payment-form .btn-primary:hover:not(.disabled) {
  opacity: 0.9;
}
.payment-form .btn-primary.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.form-group {
  margin-bottom: 24px;
}
.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #aaaaaa;
  font-size: 0.9em;
}
.form-group input[type='text'],
.form-group input[type='number'] {
  width: 100%;
  padding: 12px;
  background: #212121;
  border: 1px solid rgba(255, 255, 255, 0.07);
  color: #ffffff;
  border-radius: 8px;
  font-size: 1em;
  outline: none;
}
.form-group input[type='text']:focus,
.form-group input[type='number']:focus {
  border-color: #8774e1;
}
.plan-selection {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.plan-option {
  display: flex;
  flex-direction: column;
  background: #212121;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  cursor: pointer;
  transition: border-color 0.2s, background-color 0.2s;
}
.plan-option:hover {
  background-color: rgba(255, 255, 255, 0.02);
}
.plan-option .plan-title {
  font-weight: 700;
  color: #ffffff;
}
.plan-option .plan-price {
  color: #8774e1;
  font-weight: 700;
  margin: 4px 0;
}
.plan-option .plan-price s {
  color: #aaaaaa;
  font-weight: 400;
  margin-right: 8px;
}
.plan-selection input[type='radio']:checked + .plan-option {
  border-color: #8774e1;
  background-color: rgba(135, 116, 225, 0.05);
}
.quick-amount-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
}
.quick-amount-btn {
  background: #212121;
  color: #aaaaaa;
  border: 1px solid rgba(255, 255, 255, 0.07);
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9em;
  transition: all 0.2s;
}
.quick-amount-btn:hover {
  color: #ffffff;
  border-color: #8774e1;
}
.label-large.amount-label {
  margin-top: 30px;
  /* Увеличиваем отступ сверху на 30 пикселей */
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6314:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 1601:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 6320:
/***/ ((module) => {

"use strict";


/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function(graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);

    var closest,
        u, v,
        cost_of_s_to_u,
        adjacent_nodes,
        cost_of_e,
        cost_of_s_to_u_plus_cost_of_e,
        cost_of_s_to_v,
        first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = (typeof costs[v] === 'undefined');
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }

    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }

    return predecessors;
  },

  extract_shortest_path_from_predecessor_list: function(predecessors, d) {
    var nodes = [];
    var u = d;
    var predecessor;
    while (u) {
      nodes.push(u);
      predecessor = predecessors[u];
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },

  find_path: function(graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(
      predecessors, d);
  },

  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
          t = {},
          key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },

    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },

    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {value: value, cost: cost};
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },

    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },

    empty: function () {
      return this.queue.length === 0;
    }
  }
};


// node.js module exports
if (true) {
  module.exports = dijkstra;
}


/***/ }),

/***/ 4024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/frontend/images/anonymous.svg");

/***/ }),

/***/ 8611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/frontend/images/easy.svg");

/***/ }),

/***/ 7936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/frontend/images/qrbot.png");

/***/ }),

/***/ 7574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/frontend/images/speed.svg");

/***/ }),

/***/ 5334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/frontend/images/support.svg");

/***/ }),

/***/ 7206:
/***/ ((module) => {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ 3503:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function(){
  var crypt = __webpack_require__(3939),
      utf8 = (__webpack_require__(2151).utf8),
      isBuffer = __webpack_require__(7206),
      bin = (__webpack_require__(2151).bin),

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message) && message.constructor !== Uint8Array)
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),

/***/ 7583:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const canPromise = __webpack_require__(1333)

const QRCode = __webpack_require__(157)
const CanvasRenderer = __webpack_require__(7899)
const SvgRenderer = __webpack_require__(6756)

function renderCanvas (renderFunc, canvas, text, opts, cb) {
  const args = [].slice.call(arguments, 1)
  const argsNum = args.length
  const isLastArgCb = typeof args[argsNum - 1] === 'function'

  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument')
  }

  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 2) {
      cb = text
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts
        opts = undefined
      } else {
        cb = opts
        opts = text
        text = canvas
        canvas = undefined
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 1) {
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text
      text = canvas
      canvas = undefined
    }

    return new Promise(function (resolve, reject) {
      try {
        const data = QRCode.create(text, opts)
        resolve(renderFunc(data, canvas, opts))
      } catch (e) {
        reject(e)
      }
    })
  }

  try {
    const data = QRCode.create(text, opts)
    cb(null, renderFunc(data, canvas, opts))
  } catch (e) {
    cb(e)
  }
}

exports.create = QRCode.create
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render)
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL)

// only svg for now.
exports.toString = renderCanvas.bind(null, function (data, _, opts) {
  return SvgRenderer.render(data, opts)
})


/***/ }),

/***/ 1333:
/***/ ((module) => {

// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157

module.exports = function () {
  return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then
}


/***/ }),

/***/ 6421:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

const getSymbolSize = (__webpack_require__(6886).getSymbolSize)

/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */
exports.getRowColCoords = function getRowColCoords (version) {
  if (version === 1) return []

  const posCount = Math.floor(version / 7) + 2
  const size = getSymbolSize(version)
  const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2
  const positions = [size - 7] // Last coord is always (size - 7)

  for (let i = 1; i < posCount - 1; i++) {
    positions[i] = positions[i - 1] - intervals
  }

  positions.push(6) // First coord is always 6

  return positions.reverse()
}

/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * let pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  const coords = []
  const pos = exports.getRowColCoords(version)
  const posLength = pos.length

  for (let i = 0; i < posLength; i++) {
    for (let j = 0; j < posLength; j++) {
      // Skip if position is occupied by finder patterns
      if ((i === 0 && j === 0) || // top-left
          (i === 0 && j === posLength - 1) || // bottom-left
          (i === posLength - 1 && j === 0)) { // top-right
        continue
      }

      coords.push([pos[i], pos[j]])
    }
  }

  return coords
}


/***/ }),

/***/ 1433:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(208)

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
const ALPHA_NUM_CHARS = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ' ', '$', '%', '*', '+', '-', '.', '/', ':'
]

function AlphanumericData (data) {
  this.mode = Mode.ALPHANUMERIC
  this.data = data
}

AlphanumericData.getBitsLength = function getBitsLength (length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2)
}

AlphanumericData.prototype.getLength = function getLength () {
  return this.data.length
}

AlphanumericData.prototype.getBitsLength = function getBitsLength () {
  return AlphanumericData.getBitsLength(this.data.length)
}

AlphanumericData.prototype.write = function write (bitBuffer) {
  let i

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1])

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11)
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6)
  }
}

module.exports = AlphanumericData


/***/ }),

/***/ 9899:
/***/ ((module) => {

function BitBuffer () {
  this.buffer = []
  this.length = 0
}

BitBuffer.prototype = {

  get: function (index) {
    const bufIndex = Math.floor(index / 8)
    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1
  },

  put: function (num, length) {
    for (let i = 0; i < length; i++) {
      this.putBit(((num >>> (length - i - 1)) & 1) === 1)
    }
  },

  getLengthInBits: function () {
    return this.length
  },

  putBit: function (bit) {
    const bufIndex = Math.floor(this.length / 8)
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0)
    }

    if (bit) {
      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8))
    }

    this.length++
  }
}

module.exports = BitBuffer


/***/ }),

/***/ 8820:
/***/ ((module) => {

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */
function BitMatrix (size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0')
  }

  this.size = size
  this.data = new Uint8Array(size * size)
  this.reservedBit = new Uint8Array(size * size)
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix.prototype.set = function (row, col, value, reserved) {
  const index = row * this.size + col
  this.data[index] = value
  if (reserved) this.reservedBit[index] = true
}

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix.prototype.get = function (row, col) {
  return this.data[row * this.size + col]
}

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value
}

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col]
}

module.exports = BitMatrix


/***/ }),

/***/ 5822:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(208)

function ByteData (data) {
  this.mode = Mode.BYTE
  if (typeof (data) === 'string') {
    this.data = new TextEncoder().encode(data)
  } else {
    this.data = new Uint8Array(data)
  }
}

ByteData.getBitsLength = function getBitsLength (length) {
  return length * 8
}

ByteData.prototype.getLength = function getLength () {
  return this.data.length
}

ByteData.prototype.getBitsLength = function getBitsLength () {
  return ByteData.getBitsLength(this.data.length)
}

ByteData.prototype.write = function (bitBuffer) {
  for (let i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8)
  }
}

module.exports = ByteData


/***/ }),

/***/ 7518:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const ECLevel = __webpack_require__(9953)

const EC_BLOCKS_TABLE = [
// L  M  Q  H
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 2, 2,
  1, 2, 2, 4,
  1, 2, 4, 4,
  2, 4, 4, 4,
  2, 4, 6, 5,
  2, 4, 6, 6,
  2, 5, 8, 8,
  4, 5, 8, 8,
  4, 5, 8, 11,
  4, 8, 10, 11,
  4, 9, 12, 16,
  4, 9, 16, 16,
  6, 10, 12, 18,
  6, 10, 17, 16,
  6, 11, 16, 19,
  6, 13, 18, 21,
  7, 14, 21, 25,
  8, 16, 20, 25,
  8, 17, 23, 25,
  9, 17, 23, 34,
  9, 18, 25, 30,
  10, 20, 27, 32,
  12, 21, 29, 35,
  12, 23, 34, 37,
  12, 25, 34, 40,
  13, 26, 35, 42,
  14, 28, 38, 45,
  15, 29, 40, 48,
  16, 31, 43, 51,
  17, 33, 45, 54,
  18, 35, 48, 57,
  19, 37, 51, 60,
  19, 38, 53, 63,
  20, 40, 56, 66,
  21, 43, 59, 70,
  22, 45, 62, 74,
  24, 47, 65, 77,
  25, 49, 68, 81
]

const EC_CODEWORDS_TABLE = [
// L  M  Q  H
  7, 10, 13, 17,
  10, 16, 22, 28,
  15, 26, 36, 44,
  20, 36, 52, 64,
  26, 48, 72, 88,
  36, 64, 96, 112,
  40, 72, 108, 130,
  48, 88, 132, 156,
  60, 110, 160, 192,
  72, 130, 192, 224,
  80, 150, 224, 264,
  96, 176, 260, 308,
  104, 198, 288, 352,
  120, 216, 320, 384,
  132, 240, 360, 432,
  144, 280, 408, 480,
  168, 308, 448, 532,
  180, 338, 504, 588,
  196, 364, 546, 650,
  224, 416, 600, 700,
  224, 442, 644, 750,
  252, 476, 690, 816,
  270, 504, 750, 900,
  300, 560, 810, 960,
  312, 588, 870, 1050,
  336, 644, 952, 1110,
  360, 700, 1020, 1200,
  390, 728, 1050, 1260,
  420, 784, 1140, 1350,
  450, 812, 1200, 1440,
  480, 868, 1290, 1530,
  510, 924, 1350, 1620,
  540, 980, 1440, 1710,
  570, 1036, 1530, 1800,
  570, 1064, 1590, 1890,
  600, 1120, 1680, 1980,
  630, 1204, 1770, 2100,
  660, 1260, 1860, 2220,
  720, 1316, 1950, 2310,
  750, 1372, 2040, 2430
]

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
exports.getBlocksCount = function getBlocksCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
exports.getTotalCodewordsCount = function getTotalCodewordsCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}


/***/ }),

/***/ 9953:
/***/ ((__unused_webpack_module, exports) => {

exports.L = { bit: 1 }
exports.M = { bit: 0 }
exports.Q = { bit: 3 }
exports.H = { bit: 2 }

function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  const lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'l':
    case 'low':
      return exports.L

    case 'm':
    case 'medium':
      return exports.M

    case 'q':
    case 'quartile':
      return exports.Q

    case 'h':
    case 'high':
      return exports.H

    default:
      throw new Error('Unknown EC Level: ' + string)
  }
}

exports.isValid = function isValid (level) {
  return level && typeof level.bit !== 'undefined' &&
    level.bit >= 0 && level.bit < 4
}

exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ 7756:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const getSymbolSize = (__webpack_require__(6886).getSymbolSize)
const FINDER_PATTERN_SIZE = 7

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  const size = getSymbolSize(version)

  return [
    // top-left
    [0, 0],
    // top-right
    [size - FINDER_PATTERN_SIZE, 0],
    // bottom-left
    [0, size - FINDER_PATTERN_SIZE]
  ]
}


/***/ }),

/***/ 4565:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(6886)

const G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0)
const G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1)
const G15_BCH = Utils.getBCHDigit(G15)

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
exports.getEncodedBits = function getEncodedBits (errorCorrectionLevel, mask) {
  const data = ((errorCorrectionLevel.bit << 3) | mask)
  let d = data << 10

  while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= (G15 << (Utils.getBCHDigit(d) - G15_BCH))
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return ((data << 10) | d) ^ G15_MASK
}


/***/ }),

/***/ 2731:
/***/ ((__unused_webpack_module, exports) => {

const EXP_TABLE = new Uint8Array(512)
const LOG_TABLE = new Uint8Array(256)
/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */
;(function initTables () {
  let x = 1
  for (let i = 0; i < 255; i++) {
    EXP_TABLE[i] = x
    LOG_TABLE[x] = i

    x <<= 1 // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (let i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255]
  }
}())

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.log = function log (n) {
  if (n < 1) throw new Error('log(' + n + ')')
  return LOG_TABLE[n]
}

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.exp = function exp (n) {
  return EXP_TABLE[n]
}

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
exports.mul = function mul (x, y) {
  if (x === 0 || y === 0) return 0

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]]
}


/***/ }),

/***/ 4861:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(208)
const Utils = __webpack_require__(6886)

function KanjiData (data) {
  this.mode = Mode.KANJI
  this.data = data
}

KanjiData.getBitsLength = function getBitsLength (length) {
  return length * 13
}

KanjiData.prototype.getLength = function getLength () {
  return this.data.length
}

KanjiData.prototype.getBitsLength = function getBitsLength () {
  return KanjiData.getBitsLength(this.data.length)
}

KanjiData.prototype.write = function (bitBuffer) {
  let i

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    let value = Utils.toSJIS(this.data[i])

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140

    // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140
    } else {
      throw new Error(
        'Invalid SJIS character: ' + this.data[i] + '\n' +
        'Make sure your charset is UTF-8')
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff)

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13)
  }
}

module.exports = KanjiData


/***/ }),

/***/ 1332:
/***/ ((__unused_webpack_module, exports) => {

/**
 * Data mask pattern reference
 * @type {Object}
 */
exports.Patterns = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}

/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */
const PenaltyScores = {
  N1: 3,
  N2: 3,
  N3: 40,
  N4: 10
}

/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */
exports.isValid = function isValid (mask) {
  return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7
}

/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */
exports.from = function from (value) {
  return exports.isValid(value) ? parseInt(value, 10) : undefined
}

/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/
exports.getPenaltyN1 = function getPenaltyN1 (data) {
  const size = data.size
  let points = 0
  let sameCountCol = 0
  let sameCountRow = 0
  let lastCol = null
  let lastRow = null

  for (let row = 0; row < size; row++) {
    sameCountCol = sameCountRow = 0
    lastCol = lastRow = null

    for (let col = 0; col < size; col++) {
      let module = data.get(row, col)
      if (module === lastCol) {
        sameCountCol++
      } else {
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
        lastCol = module
        sameCountCol = 1
      }

      module = data.get(col, row)
      if (module === lastRow) {
        sameCountRow++
      } else {
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
        lastRow = module
        sameCountRow = 1
      }
    }

    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
  }

  return points
}

/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */
exports.getPenaltyN2 = function getPenaltyN2 (data) {
  const size = data.size
  let points = 0

  for (let row = 0; row < size - 1; row++) {
    for (let col = 0; col < size - 1; col++) {
      const last = data.get(row, col) +
        data.get(row, col + 1) +
        data.get(row + 1, col) +
        data.get(row + 1, col + 1)

      if (last === 4 || last === 0) points++
    }
  }

  return points * PenaltyScores.N2
}

/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */
exports.getPenaltyN3 = function getPenaltyN3 (data) {
  const size = data.size
  let points = 0
  let bitsCol = 0
  let bitsRow = 0

  for (let row = 0; row < size; row++) {
    bitsCol = bitsRow = 0
    for (let col = 0; col < size; col++) {
      bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col)
      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++

      bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row)
      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++
    }
  }

  return points * PenaltyScores.N3
}

/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */
exports.getPenaltyN4 = function getPenaltyN4 (data) {
  let darkCount = 0
  const modulesCount = data.data.length

  for (let i = 0; i < modulesCount; i++) darkCount += data.data[i]

  const k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10)

  return k * PenaltyScores.N4
}

/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */
function getMaskAt (maskPattern, i, j) {
  switch (maskPattern) {
    case exports.Patterns.PATTERN000: return (i + j) % 2 === 0
    case exports.Patterns.PATTERN001: return i % 2 === 0
    case exports.Patterns.PATTERN010: return j % 3 === 0
    case exports.Patterns.PATTERN011: return (i + j) % 3 === 0
    case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0
    case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0
    case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0
    case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0

    default: throw new Error('bad maskPattern:' + maskPattern)
  }
}

/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */
exports.applyMask = function applyMask (pattern, data) {
  const size = data.size

  for (let col = 0; col < size; col++) {
    for (let row = 0; row < size; row++) {
      if (data.isReserved(row, col)) continue
      data.xor(row, col, getMaskAt(pattern, row, col))
    }
  }
}

/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */
exports.getBestMask = function getBestMask (data, setupFormatFunc) {
  const numPatterns = Object.keys(exports.Patterns).length
  let bestPattern = 0
  let lowerPenalty = Infinity

  for (let p = 0; p < numPatterns; p++) {
    setupFormatFunc(p)
    exports.applyMask(p, data)

    // Calculate penalty
    const penalty =
      exports.getPenaltyN1(data) +
      exports.getPenaltyN2(data) +
      exports.getPenaltyN3(data) +
      exports.getPenaltyN4(data)

    // Undo previously applied mask
    exports.applyMask(p, data)

    if (penalty < lowerPenalty) {
      lowerPenalty = penalty
      bestPattern = p
    }
  }

  return bestPattern
}


/***/ }),

/***/ 208:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const VersionCheck = __webpack_require__(1878)
const Regex = __webpack_require__(7044)

/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */
exports.NUMERIC = {
  id: 'Numeric',
  bit: 1 << 0,
  ccBits: [10, 12, 14]
}

/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */
exports.ALPHANUMERIC = {
  id: 'Alphanumeric',
  bit: 1 << 1,
  ccBits: [9, 11, 13]
}

/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */
exports.BYTE = {
  id: 'Byte',
  bit: 1 << 2,
  ccBits: [8, 16, 16]
}

/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */
exports.KANJI = {
  id: 'Kanji',
  bit: 1 << 3,
  ccBits: [8, 10, 12]
}

/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */
exports.MIXED = {
  bit: -1
}

/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */
exports.getCharCountIndicator = function getCharCountIndicator (mode, version) {
  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode)

  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid version: ' + version)
  }

  if (version >= 1 && version < 10) return mode.ccBits[0]
  else if (version < 27) return mode.ccBits[1]
  return mode.ccBits[2]
}

/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */
exports.getBestModeForData = function getBestModeForData (dataStr) {
  if (Regex.testNumeric(dataStr)) return exports.NUMERIC
  else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC
  else if (Regex.testKanji(dataStr)) return exports.KANJI
  else return exports.BYTE
}

/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */
exports.toString = function toString (mode) {
  if (mode && mode.id) return mode.id
  throw new Error('Invalid mode')
}

/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */
exports.isValid = function isValid (mode) {
  return mode && mode.bit && mode.ccBits
}

/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */
function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  const lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'numeric':
      return exports.NUMERIC
    case 'alphanumeric':
      return exports.ALPHANUMERIC
    case 'kanji':
      return exports.KANJI
    case 'byte':
      return exports.BYTE
    default:
      throw new Error('Unknown mode: ' + string)
  }
}

/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */
exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ 4357:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(208)

function NumericData (data) {
  this.mode = Mode.NUMERIC
  this.data = data.toString()
}

NumericData.getBitsLength = function getBitsLength (length) {
  return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0)
}

NumericData.prototype.getLength = function getLength () {
  return this.data.length
}

NumericData.prototype.getBitsLength = function getBitsLength () {
  return NumericData.getBitsLength(this.data.length)
}

NumericData.prototype.write = function write (bitBuffer) {
  let i, group, value

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3)
    value = parseInt(group, 10)

    bitBuffer.put(value, 10)
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  const remainingNum = this.data.length - i
  if (remainingNum > 0) {
    group = this.data.substr(i)
    value = parseInt(group, 10)

    bitBuffer.put(value, remainingNum * 3 + 1)
  }
}

module.exports = NumericData


/***/ }),

/***/ 4713:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const GF = __webpack_require__(2731)

/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Uint8Array} p1 Polynomial
 * @param  {Uint8Array} p2 Polynomial
 * @return {Uint8Array}    Product of p1 and p2
 */
exports.mul = function mul (p1, p2) {
  const coeff = new Uint8Array(p1.length + p2.length - 1)

  for (let i = 0; i < p1.length; i++) {
    for (let j = 0; j < p2.length; j++) {
      coeff[i + j] ^= GF.mul(p1[i], p2[j])
    }
  }

  return coeff
}

/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Uint8Array} divident Polynomial
 * @param  {Uint8Array} divisor  Polynomial
 * @return {Uint8Array}          Remainder
 */
exports.mod = function mod (divident, divisor) {
  let result = new Uint8Array(divident)

  while ((result.length - divisor.length) >= 0) {
    const coeff = result[0]

    for (let i = 0; i < divisor.length; i++) {
      result[i] ^= GF.mul(divisor[i], coeff)
    }

    // remove all zeros from buffer head
    let offset = 0
    while (offset < result.length && result[offset] === 0) offset++
    result = result.slice(offset)
  }

  return result
}

/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Uint8Array}    Buffer containing polynomial coefficients
 */
exports.generateECPolynomial = function generateECPolynomial (degree) {
  let poly = new Uint8Array([1])
  for (let i = 0; i < degree; i++) {
    poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]))
  }

  return poly
}


/***/ }),

/***/ 157:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(6886)
const ECLevel = __webpack_require__(9953)
const BitBuffer = __webpack_require__(9899)
const BitMatrix = __webpack_require__(8820)
const AlignmentPattern = __webpack_require__(6421)
const FinderPattern = __webpack_require__(7756)
const MaskPattern = __webpack_require__(1332)
const ECCode = __webpack_require__(7518)
const ReedSolomonEncoder = __webpack_require__(4764)
const Version = __webpack_require__(1427)
const FormatInfo = __webpack_require__(4565)
const Mode = __webpack_require__(208)
const Segments = __webpack_require__(9801)

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern (matrix, version) {
  const size = matrix.size
  const pos = FinderPattern.getPositions(version)

  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0]
    const col = pos[i][1]

    for (let r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue

      for (let c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue

        if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern (matrix) {
  const size = matrix.size

  for (let r = 8; r < size - 8; r++) {
    const value = r % 2 === 0
    matrix.set(r, 6, value, true)
    matrix.set(6, r, value, true)
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern (matrix, version) {
  const pos = AlignmentPattern.getPositions(version)

  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0]
    const col = pos[i][1]

    for (let r = -2; r <= 2; r++) {
      for (let c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 ||
          (r === 0 && c === 0)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo (matrix, version) {
  const size = matrix.size
  const bits = Version.getEncodedBits(version)
  let row, col, mod

  for (let i = 0; i < 18; i++) {
    row = Math.floor(i / 3)
    col = i % 3 + size - 8 - 3
    mod = ((bits >> i) & 1) === 1

    matrix.set(row, col, mod, true)
    matrix.set(col, row, mod, true)
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo (matrix, errorCorrectionLevel, maskPattern) {
  const size = matrix.size
  const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern)
  let i, mod

  for (i = 0; i < 15; i++) {
    mod = ((bits >> i) & 1) === 1

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true)
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true)
    } else {
      matrix.set(size - 15 + i, 8, mod, true)
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true)
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true)
    } else {
      matrix.set(8, 15 - i - 1, mod, true)
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true)
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix}  matrix Modules matrix
 * @param  {Uint8Array} data   Data codewords
 */
function setupData (matrix, data) {
  const size = matrix.size
  let inc = -1
  let row = size - 1
  let bitIndex = 7
  let byteIndex = 0

  for (let col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--

    while (true) {
      for (let c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          let dark = false

          if (byteIndex < data.length) {
            dark = (((data[byteIndex] >>> bitIndex) & 1) === 1)
          }

          matrix.set(row, col - c, dark)
          bitIndex--

          if (bitIndex === -1) {
            byteIndex++
            bitIndex = 7
          }
        }
      }

      row += inc

      if (row < 0 || size <= row) {
        row -= inc
        inc = -inc
        break
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Uint8Array}                    Buffer containing encoded codewords
 */
function createData (version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  const buffer = new BitBuffer()

  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4)

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version))

    // add binary data sequence to buffer
    data.write(buffer)
  })

  // Calculate required number of bits
  const totalCodewords = Utils.getSymbolTotalCodewords(version)
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4)
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0)
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8
  for (let i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8)
  }

  return createCodewords(buffer, version, errorCorrectionLevel)
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Uint8Array}                     Buffer containing encoded codewords
 */
function createCodewords (bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  const totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  const dataTotalCodewords = totalCodewords - ecTotalCodewords

  // Total number of blocks
  const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel)

  // Calculate how many blocks each group should contain
  const blocksInGroup2 = totalCodewords % ecTotalBlocks
  const blocksInGroup1 = ecTotalBlocks - blocksInGroup2

  const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks)

  const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks)
  const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1

  // Number of EC codewords is the same for both groups
  const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  const rs = new ReedSolomonEncoder(ecCount)

  let offset = 0
  const dcData = new Array(ecTotalBlocks)
  const ecData = new Array(ecTotalBlocks)
  let maxDataSize = 0
  const buffer = new Uint8Array(bitBuffer.buffer)

  // Divide the buffer into the required number of blocks
  for (let b = 0; b < ecTotalBlocks; b++) {
    const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize)

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b])

    offset += dataSize
    maxDataSize = Math.max(maxDataSize, dataSize)
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  const data = new Uint8Array(totalCodewords)
  let index = 0
  let i, r

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i]
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i]
    }
  }

  return data
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol (data, version, errorCorrectionLevel, maskPattern) {
  let segments

  if (Array.isArray(data)) {
    segments = Segments.fromArray(data)
  } else if (typeof data === 'string') {
    let estimatedVersion = version

    if (!estimatedVersion) {
      const rawSegments = Segments.rawSplit(data)

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel)
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments = Segments.fromString(data, estimatedVersion || 40)
  } else {
    throw new Error('Invalid data')
  }

  // Get the min version that can contain data
  const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel)

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code')
  }

  // If not specified, use min version as default
  if (!version) {
    version = bestVersion

  // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' +
      'The chosen QR Code version cannot contain this amount of data.\n' +
      'Minimum version required to store current data is: ' + bestVersion + '.\n'
    )
  }

  const dataBits = createData(version, errorCorrectionLevel, segments)

  // Allocate matrix buffer
  const moduleCount = Utils.getSymbolSize(version)
  const modules = new BitMatrix(moduleCount)

  // Add function modules
  setupFinderPattern(modules, version)
  setupTimingPattern(modules)
  setupAlignmentPattern(modules, version)

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0)

  if (version >= 7) {
    setupVersionInfo(modules, version)
  }

  // Add data codewords
  setupData(modules, dataBits)

  if (isNaN(maskPattern)) {
    // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules,
      setupFormatInfo.bind(null, modules, errorCorrectionLevel))
  }

  // Apply mask pattern
  MaskPattern.applyMask(maskPattern, modules)

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern)

  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  }
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
exports.create = function create (data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text')
  }

  let errorCorrectionLevel = ECLevel.M
  let version
  let mask

  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M)
    version = Version.from(options.version)
    mask = MaskPattern.from(options.maskPattern)

    if (options.toSJISFunc) {
      Utils.setToSJISFunction(options.toSJISFunc)
    }
  }

  return createSymbol(data, version, errorCorrectionLevel, mask)
}


/***/ }),

/***/ 4764:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Polynomial = __webpack_require__(4713)

function ReedSolomonEncoder (degree) {
  this.genPoly = undefined
  this.degree = degree

  if (this.degree) this.initialize(this.degree)
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder.prototype.initialize = function initialize (degree) {
  // create an irreducible generator polynomial
  this.degree = degree
  this.genPoly = Polynomial.generateECPolynomial(this.degree)
}

/**
 * Encodes a chunk of data
 *
 * @param  {Uint8Array} data Buffer containing input data
 * @return {Uint8Array}      Buffer containing encoded data
 */
ReedSolomonEncoder.prototype.encode = function encode (data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized')
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  const paddedData = new Uint8Array(data.length + this.degree)
  paddedData.set(data)

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  const remainder = Polynomial.mod(paddedData, this.genPoly)

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  const start = this.degree - remainder.length
  if (start > 0) {
    const buff = new Uint8Array(this.degree)
    buff.set(remainder, start)

    return buff
  }

  return remainder
}

module.exports = ReedSolomonEncoder


/***/ }),

/***/ 7044:
/***/ ((__unused_webpack_module, exports) => {

const numeric = '[0-9]+'
const alphanumeric = '[A-Z $%*+\\-./:]+'
let kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +
  '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +
  '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +
  '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+'
kanji = kanji.replace(/u/g, '\\u')

const byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+'

exports.KANJI = new RegExp(kanji, 'g')
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g')
exports.BYTE = new RegExp(byte, 'g')
exports.NUMERIC = new RegExp(numeric, 'g')
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g')

const TEST_KANJI = new RegExp('^' + kanji + '$')
const TEST_NUMERIC = new RegExp('^' + numeric + '$')
const TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$')

exports.testKanji = function testKanji (str) {
  return TEST_KANJI.test(str)
}

exports.testNumeric = function testNumeric (str) {
  return TEST_NUMERIC.test(str)
}

exports.testAlphanumeric = function testAlphanumeric (str) {
  return TEST_ALPHANUMERIC.test(str)
}


/***/ }),

/***/ 9801:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Mode = __webpack_require__(208)
const NumericData = __webpack_require__(4357)
const AlphanumericData = __webpack_require__(1433)
const ByteData = __webpack_require__(5822)
const KanjiData = __webpack_require__(4861)
const Regex = __webpack_require__(7044)
const Utils = __webpack_require__(6886)
const dijkstra = __webpack_require__(6320)

/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */
function getStringByteLength (str) {
  return unescape(encodeURIComponent(str)).length
}

/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */
function getSegments (regex, mode, str) {
  const segments = []
  let result

  while ((result = regex.exec(str)) !== null) {
    segments.push({
      data: result[0],
      index: result.index,
      mode: mode,
      length: result[0].length
    })
  }

  return segments
}

/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */
function getSegmentsFromString (dataStr) {
  const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr)
  const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr)
  let byteSegs
  let kanjiSegs

  if (Utils.isKanjiModeEnabled()) {
    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr)
    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr)
  } else {
    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr)
    kanjiSegs = []
  }

  const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs)

  return segs
    .sort(function (s1, s2) {
      return s1.index - s2.index
    })
    .map(function (obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      }
    })
}

/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */
function getSegmentBitsLength (length, mode) {
  switch (mode) {
    case Mode.NUMERIC:
      return NumericData.getBitsLength(length)
    case Mode.ALPHANUMERIC:
      return AlphanumericData.getBitsLength(length)
    case Mode.KANJI:
      return KanjiData.getBitsLength(length)
    case Mode.BYTE:
      return ByteData.getBitsLength(length)
  }
}

/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function mergeSegments (segs) {
  return segs.reduce(function (acc, curr) {
    const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null
    if (prevSeg && prevSeg.mode === curr.mode) {
      acc[acc.length - 1].data += curr.data
      return acc
    }

    acc.push(curr)
    return acc
  }, [])
}

/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function buildNodes (segs) {
  const nodes = []
  for (let i = 0; i < segs.length; i++) {
    const seg = segs[i]

    switch (seg.mode) {
      case Mode.NUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.ALPHANUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.KANJI:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
        break
      case Mode.BYTE:
        nodes.push([
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
    }
  }

  return nodes
}

/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */
function buildGraph (nodes, version) {
  const table = {}
  const graph = { start: {} }
  let prevNodeIds = ['start']

  for (let i = 0; i < nodes.length; i++) {
    const nodeGroup = nodes[i]
    const currentNodeIds = []

    for (let j = 0; j < nodeGroup.length; j++) {
      const node = nodeGroup[j]
      const key = '' + i + j

      currentNodeIds.push(key)
      table[key] = { node: node, lastCount: 0 }
      graph[key] = {}

      for (let n = 0; n < prevNodeIds.length; n++) {
        const prevNodeId = prevNodeIds[n]

        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
          graph[prevNodeId][key] =
            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
            getSegmentBitsLength(table[prevNodeId].lastCount, node.mode)

          table[prevNodeId].lastCount += node.length
        } else {
          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length

          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
            4 + Mode.getCharCountIndicator(node.mode, version) // switch cost
        }
      }
    }

    prevNodeIds = currentNodeIds
  }

  for (let n = 0; n < prevNodeIds.length; n++) {
    graph[prevNodeIds[n]].end = 0
  }

  return { map: graph, table: table }
}

/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */
function buildSingleSegment (data, modesHint) {
  let mode
  const bestMode = Mode.getBestModeForData(data)

  mode = Mode.from(modesHint, bestMode)

  // Make sure data can be encoded
  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
    throw new Error('"' + data + '"' +
      ' cannot be encoded with mode ' + Mode.toString(mode) +
      '.\n Suggested mode is: ' + Mode.toString(bestMode))
  }

  // Use Mode.BYTE if Kanji support is disabled
  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
    mode = Mode.BYTE
  }

  switch (mode) {
    case Mode.NUMERIC:
      return new NumericData(data)

    case Mode.ALPHANUMERIC:
      return new AlphanumericData(data)

    case Mode.KANJI:
      return new KanjiData(data)

    case Mode.BYTE:
      return new ByteData(data)
  }
}

/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */
exports.fromArray = function fromArray (array) {
  return array.reduce(function (acc, seg) {
    if (typeof seg === 'string') {
      acc.push(buildSingleSegment(seg, null))
    } else if (seg.data) {
      acc.push(buildSingleSegment(seg.data, seg.mode))
    }

    return acc
  }, [])
}

/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */
exports.fromString = function fromString (data, version) {
  const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled())

  const nodes = buildNodes(segs)
  const graph = buildGraph(nodes, version)
  const path = dijkstra.find_path(graph.map, 'start', 'end')

  const optimizedSegs = []
  for (let i = 1; i < path.length - 1; i++) {
    optimizedSegs.push(graph.table[path[i]].node)
  }

  return exports.fromArray(mergeSegments(optimizedSegs))
}

/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */
exports.rawSplit = function rawSplit (data) {
  return exports.fromArray(
    getSegmentsFromString(data, Utils.isKanjiModeEnabled())
  )
}


/***/ }),

/***/ 6886:
/***/ ((__unused_webpack_module, exports) => {

let toSJISFunction
const CODEWORDS_COUNT = [
  0, // Not used
  26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
  404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
  1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
  2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
]

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
exports.getSymbolSize = function getSymbolSize (version) {
  if (!version) throw new Error('"version" cannot be null or undefined')
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40')
  return version * 4 + 17
}

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
exports.getSymbolTotalCodewords = function getSymbolTotalCodewords (version) {
  return CODEWORDS_COUNT[version]
}

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
exports.getBCHDigit = function (data) {
  let digit = 0

  while (data !== 0) {
    digit++
    data >>>= 1
  }

  return digit
}

exports.setToSJISFunction = function setToSJISFunction (f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.')
  }

  toSJISFunction = f
}

exports.isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined'
}

exports.toSJIS = function toSJIS (kanji) {
  return toSJISFunction(kanji)
}


/***/ }),

/***/ 1878:
/***/ ((__unused_webpack_module, exports) => {

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
exports.isValid = function isValid (version) {
  return !isNaN(version) && version >= 1 && version <= 40
}


/***/ }),

/***/ 1427:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(6886)
const ECCode = __webpack_require__(7518)
const ECLevel = __webpack_require__(9953)
const Mode = __webpack_require__(208)
const VersionCheck = __webpack_require__(1878)

// Generator polynomial used to encode version information
const G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0)
const G18_BCH = Utils.getBCHDigit(G18)

function getBestVersionForDataLength (mode, length, errorCorrectionLevel) {
  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
      return currentVersion
    }
  }

  return undefined
}

function getReservedBitsCount (mode, version) {
  // Character count indicator + mode indicator bits
  return Mode.getCharCountIndicator(mode, version) + 4
}

function getTotalBitsFromDataArray (segments, version) {
  let totalBits = 0

  segments.forEach(function (data) {
    const reservedBits = getReservedBitsCount(data.mode, version)
    totalBits += reservedBits + data.getBitsLength()
  })

  return totalBits
}

function getBestVersionForMixedData (segments, errorCorrectionLevel) {
  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
    const length = getTotalBitsFromDataArray(segments, currentVersion)
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
      return currentVersion
    }
  }

  return undefined
}

/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */
exports.from = function from (value, defaultValue) {
  if (VersionCheck.isValid(value)) {
    return parseInt(value, 10)
  }

  return defaultValue
}

/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */
exports.getCapacity = function getCapacity (version, errorCorrectionLevel, mode) {
  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid QR Code version')
  }

  // Use Byte mode as default
  if (typeof mode === 'undefined') mode = Mode.BYTE

  // Total codewords for this QR code version (Data + Error correction)
  const totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  if (mode === Mode.MIXED) return dataTotalCodewordsBits

  const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version)

  // Return max number of storable codewords
  switch (mode) {
    case Mode.NUMERIC:
      return Math.floor((usableBits / 10) * 3)

    case Mode.ALPHANUMERIC:
      return Math.floor((usableBits / 11) * 2)

    case Mode.KANJI:
      return Math.floor(usableBits / 13)

    case Mode.BYTE:
    default:
      return Math.floor(usableBits / 8)
  }
}

/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */
exports.getBestVersionForData = function getBestVersionForData (data, errorCorrectionLevel) {
  let seg

  const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M)

  if (Array.isArray(data)) {
    if (data.length > 1) {
      return getBestVersionForMixedData(data, ecl)
    }

    if (data.length === 0) {
      return 1
    }

    seg = data[0]
  } else {
    seg = data
  }

  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl)
}

/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */
exports.getEncodedBits = function getEncodedBits (version) {
  if (!VersionCheck.isValid(version) || version < 7) {
    throw new Error('Invalid QR Code version')
  }

  let d = version << 12

  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
    d ^= (G18 << (Utils.getBCHDigit(d) - G18_BCH))
  }

  return (version << 12) | d
}


/***/ }),

/***/ 7899:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(2726)

function clearCanvas (ctx, canvas, size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if (!canvas.style) canvas.style = {}
  canvas.height = size
  canvas.width = size
  canvas.style.height = size + 'px'
  canvas.style.width = size + 'px'
}

function getCanvasElement () {
  try {
    return document.createElement('canvas')
  } catch (e) {
    throw new Error('You need to specify a canvas element')
  }
}

exports.render = function render (qrData, canvas, options) {
  let opts = options
  let canvasEl = canvas

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!canvas) {
    canvasEl = getCanvasElement()
  }

  opts = Utils.getOptions(opts)
  const size = Utils.getImageWidth(qrData.modules.size, opts)

  const ctx = canvasEl.getContext('2d')
  const image = ctx.createImageData(size, size)
  Utils.qrToImageData(image.data, qrData, opts)

  clearCanvas(ctx, canvasEl, size)
  ctx.putImageData(image, 0, 0)

  return canvasEl
}

exports.renderToDataURL = function renderToDataURL (qrData, canvas, options) {
  let opts = options

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!opts) opts = {}

  const canvasEl = exports.render(qrData, canvas, opts)

  const type = opts.type || 'image/png'
  const rendererOpts = opts.rendererOpts || {}

  return canvasEl.toDataURL(type, rendererOpts.quality)
}


/***/ }),

/***/ 6756:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(2726)

function getColorAttrib (color, attrib) {
  const alpha = color.a / 255
  const str = attrib + '="' + color.hex + '"'

  return alpha < 1
    ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"'
    : str
}

function svgCmd (cmd, x, y) {
  let str = cmd + x
  if (typeof y !== 'undefined') str += ' ' + y

  return str
}

function qrToPath (data, size, margin) {
  let path = ''
  let moveBy = 0
  let newRow = false
  let lineLength = 0

  for (let i = 0; i < data.length; i++) {
    const col = Math.floor(i % size)
    const row = Math.floor(i / size)

    if (!col && !newRow) newRow = true

    if (data[i]) {
      lineLength++

      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow
          ? svgCmd('M', col + margin, 0.5 + row + margin)
          : svgCmd('m', moveBy, 0)

        moveBy = 0
        newRow = false
      }

      if (!(col + 1 < size && data[i + 1])) {
        path += svgCmd('h', lineLength)
        lineLength = 0
      }
    } else {
      moveBy++
    }
  }

  return path
}

exports.render = function render (qrData, options, cb) {
  const opts = Utils.getOptions(options)
  const size = qrData.modules.size
  const data = qrData.modules.data
  const qrcodesize = size + opts.margin * 2

  const bg = !opts.color.light.a
    ? ''
    : '<path ' + getColorAttrib(opts.color.light, 'fill') +
      ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>'

  const path =
    '<path ' + getColorAttrib(opts.color.dark, 'stroke') +
    ' d="' + qrToPath(data, size, opts.margin) + '"/>'

  const viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"'

  const width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" '

  const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n'

  if (typeof cb === 'function') {
    cb(null, svgTag)
  }

  return svgTag
}


/***/ }),

/***/ 2726:
/***/ ((__unused_webpack_module, exports) => {

function hex2rgba (hex) {
  if (typeof hex === 'number') {
    hex = hex.toString()
  }

  if (typeof hex !== 'string') {
    throw new Error('Color should be defined as hex string')
  }

  let hexCode = hex.slice().replace('#', '').split('')
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
    throw new Error('Invalid hex color: ' + hex)
  }

  // Convert from short to long form (fff -> ffffff)
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
      return [c, c]
    }))
  }

  // Add default alpha value
  if (hexCode.length === 6) hexCode.push('F', 'F')

  const hexValue = parseInt(hexCode.join(''), 16)

  return {
    r: (hexValue >> 24) & 255,
    g: (hexValue >> 16) & 255,
    b: (hexValue >> 8) & 255,
    a: hexValue & 255,
    hex: '#' + hexCode.slice(0, 6).join('')
  }
}

exports.getOptions = function getOptions (options) {
  if (!options) options = {}
  if (!options.color) options.color = {}

  const margin = typeof options.margin === 'undefined' ||
    options.margin === null ||
    options.margin < 0
    ? 4
    : options.margin

  const width = options.width && options.width >= 21 ? options.width : undefined
  const scale = options.scale || 4

  return {
    width: width,
    scale: width ? 4 : scale,
    margin: margin,
    color: {
      dark: hex2rgba(options.color.dark || '#000000ff'),
      light: hex2rgba(options.color.light || '#ffffffff')
    },
    type: options.type,
    rendererOpts: options.rendererOpts || {}
  }
}

exports.getScale = function getScale (qrSize, opts) {
  return opts.width && opts.width >= qrSize + opts.margin * 2
    ? opts.width / (qrSize + opts.margin * 2)
    : opts.scale
}

exports.getImageWidth = function getImageWidth (qrSize, opts) {
  const scale = exports.getScale(qrSize, opts)
  return Math.floor((qrSize + opts.margin * 2) * scale)
}

exports.qrToImageData = function qrToImageData (imgData, qr, opts) {
  const size = qr.modules.size
  const data = qr.modules.data
  const scale = exports.getScale(size, opts)
  const symbolSize = Math.floor((size + opts.margin * 2) * scale)
  const scaledMargin = opts.margin * scale
  const palette = [opts.color.light, opts.color.dark]

  for (let i = 0; i < symbolSize; i++) {
    for (let j = 0; j < symbolSize; j++) {
      let posDst = (i * symbolSize + j) * 4
      let pxColor = opts.color.light

      if (i >= scaledMargin && j >= scaledMargin &&
        i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
        const iSrc = Math.floor((i - scaledMargin) / scale)
        const jSrc = Math.floor((j - scaledMargin) / scale)
        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0]
      }

      imgData[posDst++] = pxColor.r
      imgData[posDst++] = pxColor.g
      imgData[posDst++] = pxColor.b
      imgData[posDst] = pxColor.a
    }
  }
}


/***/ }),

/***/ 2551:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(6540),ca=__webpack_require__(9982);function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b)}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a])}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return!0;if(ja.call(la,a))return!1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return!1}function pa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1)});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0)});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var Ia=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return"function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||""}return"\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return"";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return(a.displayName||"Context")+".Consumer";case Ba:return(a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}
function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1)}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function kb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a]})});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb()}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb)}catch(a){Lb=!1}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments)}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=l)}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128))}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)))}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId)}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift()}return!0}function Zc(a,b,c){Xc(a)&&c.delete(b)}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc)}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d)}finally{C=e,cd.transition=f}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d)}finally{C=e,cd.transition=f}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else hd(a,b,d,null,c)}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b)}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return!1}return!0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Je(c)}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d))}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b))}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x)}t=null}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else{na=De;var xa=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value)}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a)}se(g,b)})}function tf(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;})}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);bd(b)}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[Of]||a[uf];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return{current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H)}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c)}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return!0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c)}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a)}function ig(a){fg=!0;hg(a)}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a}else rg=1<<f|c<<e|d,sg=a}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0))}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return!1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a)}}else{if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a}
function Gg(a){if(a!==xg)return!1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling)}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}yg=
null}}else yg=xg?Lf(a.stateNode.nextSibling):null;return!0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling)}function Ig(){yg=xg=null;I=!1}function Jg(a){null===zg?zg=[a]:zg.push(a)}var Kg=ua.ReactCurrentBatchConfig;
function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
c.ref=Lg(a,null,b),c.return=a,c;case wa:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d)}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ya?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h)}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Sg(f,a.mode,h);d.return=a;a=d}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null}function ah(a){var b=Wg.current;E(Wg);a._currentValue=b}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}
function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=!0),a.firstContext=null)}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a}}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a)}
function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=!1;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}
function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function mh(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function qh(a,b,c,d){var e=a.updateQueue;jh=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:jh=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q}}
function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d)}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p(174));return a}
function yh(a,b){G(wh,b);G(vh,a);G(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a)}E(uh);G(uh,b)}function zh(){E(uh);E(vh);E(wh)}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c))}function Bh(a){vh.current===a&&(E(uh),E(vh))}var L=Uf(0);
function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Dh=[];
function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P(){throw Error(p(321));}function Mh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Nh(a,b,c,d,e,f){Hh=f;M=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=!1;Kh=0;if(25<=f)throw Error(p(301));f+=1;O=N=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e)}while(Jh)}Fh.current=Rh;b=null!==N&&null!==N.next;Hh=0;O=N=M=null;Ih=!1;if(b)throw Error(p(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O?M.memoizedState=O=a:O=O.next=a;return O}function Uh(){if(null===N){var a=M.alternate;a=null!==a?a.memoizedState:null}else a=N.next;var b=null===O?M.memoizedState:O.next;if(null!==b)O=b,N=a;else{if(null===a)throw Error(p(310));N=a;a={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null};null===O?M.memoizedState=O=a:O=O.next=a}return O}
function Vh(a,b){return"function"===typeof b?b(a):b}
function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=N,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M.lanes|=m;rh|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(dh=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function Yh(){}
function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,dh=!0);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O&&O.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q)throw Error(p(349));0!==(Hh&30)||di(c,b,e)}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi(a)}function ai(a,b,c){return c(function(){ei(b)&&fi(a)})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!He(a,c)}catch(d){return!0}}function fi(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1)}
function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M,a);return[b.memoizedState,a]}
function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d)}
function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N){var g=N.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a;e.memoizedState=bi(1|b,c,f,d)}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=!1,dh=!0),a.memoizedState=c;He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=!0);return b}function vi(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Gh.transition;Gh.transition={};try{a(!1),b()}finally{C=c,Gh.transition=d}}function wi(){return Uh().memoizedState}
function xi(a,b,c){var d=yi(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R();gi(c,a,d,e);Bi(c,b,d)}}
function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R(),gi(c,a,d,e),Bi(c,b,d))}}
function zi(a){var b=a.alternate;return a===M||null!==b&&b===M}function Ai(a,b){Jh=Ih=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki(4194308,
4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M,a);return[d.memoizedState,a]},useRef:function(a){var b=
Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(!1),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(void 0===c)throw Error(p(407));c=c()}else{c=b();if(null===Q)throw Error(p(349));0!==(Hh&30)||di(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi(ai.bind(null,d,
f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},
useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
N?b.memoizedState=a:ui(b,N.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Ei={isMounted:function(a){return(a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=
yi(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d))}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function Gi(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null)}
function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}
function Ki(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Mi="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=!0,Pi=d);Li(a,b)};return c}
function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a))}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua.ReactCurrentOwner,dh=!1;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d)}
function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=!0);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(ej,fj);fj|=d}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
function hj(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b)}else f=!1;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&Hi(b,g,d,l);jh=!1;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=!1;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return jj(a,b,c,d,f,e)}
function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);yh(a,b.containerInfo)}
function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return{baseLanes:a,cachePool:null,transitions:null}}
function oj(a,b,c){var d=b.pendingProps,e=L.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(L,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1))}tj();d=Ki(Error(p(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c)}
function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}G(L,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}wj(b,!0,c,null,f);break;case "together":wj(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(L,L.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G(L,L.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G(L,L.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(L,L.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Aj=function(){};
Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf)}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,
c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4)};
function Dj(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;zh();E(Wf);E(H);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S(b);return null;case 5:Bh(b);var e=xh(wh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d)}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d)}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g))}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}S(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d}S(b);return null;case 13:E(L);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1}else null!==zg&&(Fj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L.current&1)?0===T&&(T=3):tj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return zh(),
Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(L);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,!1);else{if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(L,L.current&1|2);return b.child}a=
a.sibling}null!==f.tail&&B()>Gj&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304)}else{if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E(Wf),E(H),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E(L);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
null;case 24:return null;default:return null}}var Jj=!1,U=!1,Kj="function"===typeof WeakSet?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){W(a,b,d)}else c.current=null}function Mj(a,b,c){try{c()}catch(d){W(a,b,d)}}var Nj=!1;
function Oj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode}q=y}c=-1===h||-1===k?null:{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F)}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return}n=Nj;Nj=!1;return n}
function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f)}e=e.next}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling}var X=null,Xj=!1;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling}
function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c)}catch(h){}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X,e=Xj;X=null;Yj(a,b,c);X=d;Xj=e;null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Xj;X=c.stateNode.containerInfo;Xj=!0;
Yj(a,b,c);X=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){W(c,b,h)}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c)}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Xj=!1;break a;case 3:X=h.stateNode.containerInfo;Xj=!0;break a;case 4:X=h.stateNode.containerInfo;Xj=!0;break a}h=h.return}if(null===X)throw Error(p(160));Zj(f,g,e);X=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(l){W(e,b,l)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling}
function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a)}catch(t){W(a,a.return,t)}try{Pj(5,a,a.return)}catch(t){W(a,a.return,t)}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"")}catch(t){W(a,a.return,t)}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l)}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1))}e[Pf]=f}catch(t){W(a,a.return,t)}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(t){W(a,a.return,t)}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo)}catch(t){W(a,a.return,t)}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount()}catch(t){W(d,c,t)}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V=y):gk(q)}m=m.sibling}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g))}catch(t){W(a,a.return,t)}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps}catch(t){W(a,a.return,t)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
a),ek(a)}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function hk(a,b,c){V=a;ik(a,b,c)}
function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Jj;var l=U;Jj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V=k):jk(e);for(;null!==f;)V=f,ik(f,b,c),f=f.sibling;V=e;Jj=h;U=l}kk(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):kk(a,b,c)}}
function kk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode}sh(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Rj(b)}catch(r){W(b,b.return,r)}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}function gk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}
function jk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b)}catch(k){W(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){W(b,e,k)}}var f=b.return;try{Rj(b)}catch(k){W(b,f,k)}break;case 5:var g=b.return;try{Rj(b)}catch(k){W(b,g,k)}}}catch(k){W(b,b.return,k)}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return}}
var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return 0!==(K&6)?B():-1!==Ak?Ak:Ak=B()}
function yi(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==Q)a===Q&&(0===(K&2)&&(qk|=c),4===T&&Ck(a,Z)),Dk(a,d),1===c&&0===K&&0===(b.mode&1)&&(Gj=B()+500,fg&&jg())}
function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K&6)&&jg()}),c=null;else{switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc}c=Fk(c,Gk.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Gk(a,b){Ak=-1;Bk=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else{b=d;var e=K;K|=2;var f=Jk();if(Q!==a||Z!==b)uk=null,Gj=B()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h)}while(1);$g();mk.current=f;K=e;null!==Y?b=0:(Q=null,Z=0,b=T)}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(6===b)Ck(a,d);
else{e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p(329));}}}Dk(a,B());return a.callbackNode===c?Gk.bind(null,a):null}
function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a)}
function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d}}function Ek(a){if(0!==(K&6))throw Error(p(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d))}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B());return null}
function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Gj=B()+500,fg&&jg())}}function Rk(a){null!==wk&&0===wk.tag&&0===(K&6)&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,0===(K&6)&&jg()}}function Hj(){fj=ej.current;E(ej)}
function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh();E(Wf);E(H);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj()}c=c.return}Q=a;Y=a=Pg(a.current,null);Z=fj=b;T=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}fh=null}return a}
function Mk(a,b){do{var c=Y;try{$g();Fh.current=Rh;if(Ih){for(var d=M.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Ih=!1}Hh=0;O=N=M=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T=1;pk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t}else n.add(k);break a}else{if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p(426))}}else if(I&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T&&(T=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return}while(null!==f)}Sk(c)}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
function tj(){if(0===T||3===T||2===T)T=4;null===Q||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q,Z)}function Ik(a,b){var c=K;K|=2;var d=Jk();if(Q!==a||Z!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e)}while(1);$g();K=c;mk.current=d;if(null!==Y)throw Error(p(261));Q=null;Z=0;return T}function Tk(){for(;null!==Y;)Uk(Y)}function Lk(){for(;null!==Y&&!cc();)Uk(Y)}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y=b;nk.current=null}
function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y=c;return}}else{c=Ij(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===T&&(T=5)}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d)}finally{ok.transition=e,C=d}return null}
function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q&&(Y=Q=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=!0,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
var g=C;C=1;var h=K;K|=4;nk.current=null;Oj(a,c);dk(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c,a,e);dc();K=h;C=g;ok.transition=f}else a.current=c;vk&&(vk=!1,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode,d);Dk(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=!1,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C;try{ok.transition=null;C=16>a?16:a;if(null===wk)var d=!1;else{a=wk;wk=null;xk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f)}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Sj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J}while(null!==t)}}V=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return)}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h)}}catch(na){W(h,h.return,na)}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a)}catch(na){}d=!0}return d}finally{C=c,ok.transition=b}}return!1}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R();null!==a&&(Ac(a,1,b),Dk(a,b))}
function W(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return}}
function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R();a.pingedLanes|=a.suspendedLanes&c;Q===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c);Dk(a,b)}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c))}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c)}
function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Yk(a,c)}var Vk;
Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return dh=!1,yj(a,b,c);dh=0!==(a.flags&131072)?!0:!1}else dh=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ji(Error(p(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c)}b=b.child}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}Xi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,!0,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p(156,b.tag));};function Fk(a,b){return ac(a,b)}
function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,!0,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R();e=yi(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b)}function jl(){return null}var kl="function"===typeof reportError?reportError:function(a){console.error(a)};function ll(a){this._internalRoot=a}
ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));fl(a,b,null,null)};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null)});b[uf]=null}};function ml(a){this._internalRoot=a}
ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a)}};function nl(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a)}}var g=el(b,d,a,0,null,!1,!1,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a)}}var k=bl(a,0,!1,null,null,!1,!1,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d)});return k}
function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a)}}fl(b,g,a,e)}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B()),0===(K&6)&&(Gj=B()+500,jg()))}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R();gi(b,a,1,c)}}),il(a,1)}};
Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R();gi(b,a,134217728,c)}il(a,134217728)}};Gc=function(a){if(13===a.tag){var b=yi(a),c=ih(a,b);if(null!==c){var d=R();gi(c,a,b,d)}il(a,b)}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Qk;Hb=Rk;
var sl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||
jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;
exports.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p(200));return cl(a,b,null,c)};exports.createRoot=function(a,b){if(!nl(a))throw Error(p(299));var c=!1,d="",e=kl;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a){return Rk(a)};exports.hydrate=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!0,c)};
exports.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=kl;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new ml(b)};exports.render=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null})}),!0):!1};exports.unstable_batchedUpdates=Qk;
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return rl(a,b,c,!1,d)};exports.version="18.3.1-next-f1338f8080-20240426";


/***/ }),

/***/ 5338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var m = __webpack_require__(961);
if (true) {
  exports.H = m.createRoot;
  __webpack_unused_export__ = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 961:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(2551);
} else {}


/***/ }),

/***/ 5287:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;exports.act=X;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=X;exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};
exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};exports.useTransition=function(){return U.current.useTransition()};exports.version="18.3.1";


/***/ }),

/***/ 6540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(5287);
} else {}


/***/ }),

/***/ 7463:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 9982:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(7463);
} else {}


/***/ }),

/***/ 5072:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 7659:
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 540:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 5056:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 7825:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 1113:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 4476:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./anonymous.svg": 4024,
	"./easy.svg": 8611,
	"./qrbot.png": 7936,
	"./speed.svg": 7574,
	"./support.svg": 5334
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 4476;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

// NAMESPACE OBJECT: ./node_modules/axios/lib/platform/common/utils.js
var common_utils_namespaceObject = {};
__webpack_require__.r(common_utils_namespaceObject);
__webpack_require__.d(common_utils_namespaceObject, {
  hasBrowserEnv: () => (hasBrowserEnv),
  hasStandardBrowserEnv: () => (hasStandardBrowserEnv),
  hasStandardBrowserWebWorkerEnv: () => (hasStandardBrowserWebWorkerEnv),
  navigator: () => (_navigator),
  origin: () => (origin)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
;// ./src/lang/ru.json
const ru_namespaceObject = /*#__PURE__*/JSON.parse('{"pagePayTitle":"Приобретение VPN","pagePayBalance":"Пополнение баланса","pagePayID":"Ваш уникальный ID","pagePayIDPlaceholder":"Введите свой ID","pagePayAmount":"Сумма пополнения баланса (временно от %1%)","pagePayButton":"Перейти к оплате","pageFAQId":"Как получить ID?","pageFAQStep1":"Откройте приложение в чат-боте RocketMan-VPN","pageFAQStep2":"Внизу главной страницы найдите пункт \\"Ваш ID\\"","pageFAQStep3":"Скопируйте уникальный номер","pageFAQStep4":"Вставьте ID в поле слева","pageFAQOpen":"Открыть Telegram-бота","pageFAQQR":"QR-код Telegram-бота","landingTGBotButton":"Запустить Telegram-бота","landingDashboardButton":"Открыть панель управления","landingTarifs":"Тарифы","landingTarifsTrial":"+ Пробный период %1%ч","landingTarifsDiscount":"Скидка","landingTarifsPrice":"%1%/%2%дн.","landingTarifsGo":"Подключить","landingFooterText":"А здесь наш основной проект","landingTitle":"RocketMan VPN — Интернет под защитой!","landingTitleDesc":"Молниеносный доступ к любимым сайтам и сервисам с ПК и смартфона.","landingFeaturesTitle":"Почему выбирают именно нас?","features1Title":"Анонимность","features1Text":"Благодаря нескольким слоям защиты с нашей стороны — Ваш реальный IP не узнает ни один сервис.","features2Title":"Скорость","features2Text":"Загружайте, смотрите любимый контент и делитесь на скоростях до 1 Гбит/с.","features3Title":"Простота","features3Text":"Подключайтесь в 1 клик с любого своего устройства! ПК, смартфон, ТВ, планшет и ноутбук.","features4Title":"Поддержка","features4Text":"Мы всегда готовы помочь Вам с решением любых вопросов. На связи практически 24/7","faq1title":"Как оплатить?","faq1text":"Выберите тариф и оплатите через удобный метод. После оплаты получите инструкции в Telegram-боте.","faq2title":"Как настроить VPN?","faq2text":"В нашем <a href=\\"https://t.me/%1%\\" target=\'_blank\'>Telegram-боте</a> максимально подробно и понятно расписан весь процесс подключения.\\nБуквально от и до, поэтому Вы вряд ли в чем-то сможете заблудиться. Главное — следуйте инструкциям :)","faq3title":"Что делать, если что-то не работает?","faq3text":"Напишите в <a href=\\"https://t.me/%1%\\" target=\'_blank\'>поддержку через Telegram</a>, и мы Вам поможем.","locationSelectTitle":"Выберите локацию сервера","locationSelectLoad":"Загруженность: %1%%","locationReserve1":"Санкт-Петербург","locationLocal":"Локальный сервер","locationStockholm":"Стокгольм","locationAustria":"Вена","locationNetherland":"Амстердам","locationFrankfurt":"Франкфурт","locationParis":"Париж","tarif.test_drive":"🚗 Тест-драйв","tarif.start":"🚀 Старт","tarif.gamer":"🎮 Геймер","tarif.pro":"👑 Семейная+","tarif.ultra":"🌌 Космос","httpTarifPro":"🔒 Proxy-Безлимит","httpTarifGamer":"🔒 Proxy-Геймер","tarifNameFull":"%1% (%2% дней | %3% GB/д) - %4%","welcomeMessage":"Добро пожаловать!\\nБлагодаря нашему сервису Вы сможете получить защищенный доступ к любимым сайтам и приложениям, как это делают другие наши любимые клиенты ❤️\\n\\n⭐️ У нас нет ограничений на количество устройств, поэтому можете использовать 1 ключ на всех своих девайсах! Вместе с VPN Вы получаете доступ и к нашему Proxy.\\n\\n🛒 Мы предоставляем:\\n- VPN для iOS, Android, Windows, macOS, Android TV\\n- Proxy для браузера, Discord, Windows и т.д.","basketBalance":"Пополнить баланс","secondsToStringD":"%4% дн. %3% ч. %2% мин. %1% сек.","secondsToStringH":"%3% ч. %2% мин. %1% сек.","secondsToStringM":"%2% мин. %1% сек.","readButton":"🗑 Удалить это сообщение","expireNotifyOrderData":"▪️ Тариф: `%1%`\\n▪️ Название: `%2%`\\n▪️ Срок продления: `%3% дней`","expireNotifyTemplate":"Здравствуйте, %1%!\\n%2%\\n\\n%3%\\n▪️ Стоимость продления: `%4%`\\n\\n%5%","expireNotifyFull":"Срок действия Вашего заказа подошёл к концу 🙁\\n\\nЧтобы оставаться на связи со свободным Интернетом — [запустите приложение](https://t.me/rocketman_vpn_bot/?startapp), далее нажмите на 💸 свой баланс справа сверху и, пополнив его, в настройках заказа включите автопродление 😇","expireNotifyTime":"Срок действия Вашего заказа завершится менее чем через `%1%` часа 🙁","expireNotifyRenewAutoNoMoney":"❗️ У Вас включена функция автопродления, однако Ваш текущий баланс не позволяет продлить его 🙁\\n\\nУбедитесь в том, что на счету достаточно средств, чтобы функция работала без проблем в течение ближайших месяцев. [Запустите приложение](https://t.me/rocketman_vpn_bot/?startapp), в правом верхнем углу приложения нажмите на свой баланс и пополните на желаемую сумму.","expireNotifyRenewAuto":"✅ У Вас включена функция автопродления, поэтому заказ будет продлён автоматически, когда на нём останется менее 24 часов 😎","expireNotifyRenewManual":"ℹ️ Как включить автопродление?\\n🚀 [Запустите приложение](https://t.me/rocketman_vpn_bot/?startapp) ⇒ Личный кабинет ⇒ Нажмите на свой заказ ⇒ Настройки ⇒ Поставьте галочку возле Автопродления ⇒ Сохранить все изменения.","expireNotifyRenewSuccessAuto":"Здравствуйте, %1%!\\nВаш заказ был продлён автоматически.\\n\\n%2% 🎉\\n\\nСпасибо, что доверяете нам ❤️\\nЛучшей благодарностью за сервис будет инвайт Ваших друзей через реферальную систему!\\n\\n🚀 [Запустить приложение](https://t.me/rocketman_vpn_bot/?startapp)","commandIncorrect":"Команда использована неверно\\n`%1%`\\n\\n🚀 [Запустить приложение](https://t.me/rocketman_vpn_bot/?startapp)","commandIncorrectExample":"Команда `%1%` использована неверно!\\n\\n✅ Правильный пример: `%2%`\\n\\n🚀 [Запустить приложение](https://t.me/rocketman_vpn_bot/?startapp)","useStartCommand":"Начать работу","usePromoCommand":"Применить промокод — /promo PROMO_NAME","useFaqCommand":"Как подключиться к VPN / Proxy?","usePromoAlready":"Вы уже применили данный промокод. Применить промокод можно лишь 1 раз.\\n\\n🚀 [Запустить приложение](https://t.me/rocketman_vpn_bot/?startapp)","usePromoNotFound":"Промокод `%1%` не найден 🙁\\n\\nПроверьте правильность написания, а также убедитесь, что промокод действителен.\\n\\n🚀 [Запустить приложение](https://t.me/rocketman_vpn_bot/?startapp)","usePromoUsedFull":"Лимит активации промокода `%1%` исчерпан 🙁\\n\\n🚀 [Запустить приложение](https://t.me/rocketman_vpn_bot/?startapp)","usePromoUsedCategory":"Вы уже применили схожий промокод.\\n\\n🚀 [Запустить приложение](https://t.me/rocketman_vpn_bot/?startapp)","usePromoErr":"Не удалось применить промокод `%1%` 🙁\\n\\n🚀 [Запустить приложение](https://t.me/rocketman_vpn_bot/?startapp)","usePromoSuccess":"Промокод `%1%` успешно применён 🎉\\nНа Ваш баланс зачислено %2%\\n💰 Ваш текущий баланс: %3%\\n\\n🚀 [Запустить приложение](https://t.me/rocketman_vpn_bot/?startapp)","adminNoAccess":"У Вас нет доступа для выполнения данного действия.\\n\\n🚀 [Запустить приложение](https://t.me/rocketman_vpn_bot/?startapp)","adminMenuButton":"Меню админа","adminMenu":"Раздел администратора\\n\\n\\nМеню промокодов\\nСписок промокодов: /listPromo\\nИнформация по промокоду: `/infoPromo {PROMO_NAME}`\\nСоздать промокод: `/createPromo {PROMO_NAME} {COUNT_USE} {DOLLARS}`\\nУдалить промокод: `/deletePromo {PROMO_NAME}`\\n\\n\\nМеню пользователей\\nВыдать заказ пользователю: `/giveOrder {USER_ID} {TARIF_ID} {DAYS}`\\nУдалить заказ: `/removeOrder {ORDER_ID}`\\nВыдать баланс пользователю: `/addMoney {USER_ID} {SUM_USD}`","adminUserRemoveOrderNotFound":"Заказ не найден","adminUserRemoveOrderStatus":"Статус удаления заказа: %1%","adminUserGiveTarifErrUser":"Пользователь не найден!","adminUserGiveTarifErrTarif":"Тариф не найден","adminUserGiveTarifErrNode":"Нода тарифа не найдена. Конфигурация тарифа неверная","adminUserGiveTarifErrMarzban":"MarzBan не дал создать заказ. Причина неизвестна","adminUserGiveTarifSuccess":"Вы успешно выдали заказ для @%1%","adminUserGiveTarifNotify":"🎉 Администратор подключил на Ваш аккаунт\\nтариф `%1%` на `%2% дн.` 📆\\n\\n*Информация о заказе:*\\n🚀 [Запустите приложение](https://t.me/rocketman_vpn_bot/?startapp) ⇒ Личный кабинет ⇒\\nнажмите на свой заказ ⇒ 📚 Инструкция VPN / Proxy","adminPromoCreateAlreadyExist":"Данный промокод уже существует","adminPromoCreateAlreadyExistWas":"Данный промокод уже однажды существовал и не может быть создан повторно","adminPromoCreateFailed":"Не удалось создать промокод","adminPromoCreateDone":"Промокод `%1%` успешно создан.\\nДоступно активаций: %2%\\nБаланс: %3%","adminPromoList":"Список всех промокодов:\\n\\n%1%","adminPromoListFormat":"`/infoPromo %1%` (%2% исп. / %3% всего / %4%)","adminPromoInfo":"Информация по промокоду:\\n\\nID: `%1%`\\nЛимит активаций: %2%\\nКоличество активаций: %3%\\nБаланс: %4%\\n\\nСписок активаций:\\n%5%","adminPromoDeleteDone":"Промокод `%1%` успешно удалён","terms":"Пользовательское соглашение","contacts":"Контакты для связи","contactsTG":"Телеграм-чат","contactsEmail":"E-Mail","trialNotify":"✅ Вы получили тариф `%1%` на `%2% часа` в качестве ознакомительного доступа.\\n\\n📌 Информация о заказе в приложении:\\n🚀 [Запустите приложение](https://t.me/rocketman_vpn_bot/?startapp) ⇒ Личный кабинет ⇒\\nнажмите на свой заказ ⇒ 📚 Инструкция VPN / Proxy.\\n\\nМы предоставляем Вам возможность бесплатно ознакомиться с нашими продуктами для того, чтобы Вы оценили качество и стабильность перед будущими покупками 🤝","launchBot":"Запустить","launchBotLong":"Открыть приложение 📱","applicationMainMenu":"Главное меню","applicationMainMenuBack":"Назад","applicationButtonsRef":"Реферальная система","applicationButtonsFaq":"Как использовать VPN?","applicationButtonsCabinet":"Личный кабинет","applicationButtonsAdmin":"Кабинет администратора","applicationButtonsAdminDisk":"Свободно дискового пространства: %1%","applicationButtonsAdminPayments":"Статистика дохода:<br/>%1% текущий мес.<br/>%2% прошлый мес.<br/>%3% за весь период | %4% в ожидании","applicationUserInfoWithUs":"Вы с нами","applicationUserInfoBalance":"Ваш баланс","applicationUserInfoId":"Ваш ID","applicationUserInfoTgId":"ID Привязанного аккаунта TG","applicationUserInfoAPIKey":"Ваш API ключ","applicationUserInfoAPIKeyAlert":"📝 Ваш API ключ был скопирован в буфер обмена. Никому не разглашайте этот ключ, администрация проекта никогда не попросит вас назвать его","applicationUserInfoAPIResetAlertAsk":"📝 Вы уверены, что хотите сгенерировать новый API ключ?","applicationUserInfoAPIResetAlert":"📝 Ваш API ключ был сгенерирован заново","applicationUserInfoIdAlert":"📝 Ваш ID был скопирован в буфер обмена.","applicationUserInfoTgIdAlert":"📝 Ваш Telegram ID был скопирован в буфер обмена.","applicationContactButton":"Связь со службой поддержки","applicationServersButton":"Статус серверов","applicationHowToConnectFAQButton":"Как подключиться к VPN или Proxy?","applicationHowToConnectFAQButtonModal":"Бот отправил вам информацию в личные сообщения 📝","applicationCabinetTitle":"Личный кабинет","applicationCabinetTitleDesc_title":"Нажмите на заказ для управления им","applicationCabinetTitleOrder":"Выбор тарифного плана","applicationCabinetTitleOrder_detail_back":"Вернуться к списку тарифов","applicationCabinetTitleOrder_help_button":"⚠️ Помогите мне определиться с тарифным планом ⚠️","applicationCabinetTitleOrder_help_button_back":"Вернуться к оформлению заказа","applicationCabinetTitleOrder_help_button_header":"Среднее потребление трафика:","applicationCabinetTitleOrder_help_button_desc":"<font color=red>YouTube</font>: 1 час видео в 1440p ≈6 ГБ\\n<font color=#E10070>Instagram</font>: 1 час Reels ≈2 ГБ\\n<font color=#69C9D0>TikTok</font>: 1 час видео ≈2 ГБ\\n<font color=#7289DA>Discord</font>: 1 час войса c демкой ≈1 ГБ\\n<font color=#BD37FF>Twitch</font>: 2 часа стрима в 1080p ≈5 ГБ\\n<font color=#D0A823>Онлайн-игры</font>: 1 час ≈0.5 ГБ\\n<font color=#E50914>Netflix</font> / <font color=#00A859>HDRezka</font>: 2 часа в 1080р ≈5 ГБ\\n\\nЕсли сложить все указанные данные, то выходит <font color=#DA7F00>≈20-25 ГБ в день</font>. Эти данные приведены для ориентира, чтобы Вам было проще выбрать подходящий тариф.\\n\\n<font color=#A7C800>VPN и Proxy — по-своему удобны.</font>\\n<font color=#BAD821>VPN:</font> удобно для смартфонов, планшетов и ТВ; можно использовать и на ПК.\\n<font color=#BAD821>Proxy:</font> подходит для Discord, браузера на ПК (YouTube, Twitch, Netflix, HDRezka и т.д.).\\n<font color=#B3D023>Кратко о протоколах:</font>\\n<font color=#2EB3FF>• Vless</font> — лучший обход блокировок, стабильность, скорость, “невидимость”.\\n<font color=#2BA4EA>• Shadowsocks</font> — лёгкий, быстрый, идеален для игр.\\n<font color=#2793D2>• Socks</font> — смена IP с минимальным пингом.\\n<font color=#2884BA>• HTTPS</font> — подходит только для сайтов и приложений через Proxifier.\\n\\n🚀 Старт — для обычного сёрфинга\\n🎮 Геймер — для активных юзеров девайсов\\n👑 Семейная+ — для большого объёма трафика","applicationCabinetButtonNew":"Сделать новый заказ","applicationCabinetButtonNewCancel":"Вернуться к списку заказов","applicationCabinetButtonAddBalance":"Пополнить баланс","applicationCabinetIsTrial":"Бесплатный тестовый доступ","applicationCabinetPing":"Пинг к серверу: %1%ms","applicationCabinetEndActive":"Доступ к подписке: %1%","applicationCabinetEndNotActive":"Подписка не оплачена. Нажмите сюда и активируйте её через кнопку «⌛️ Продлить заказ» в выпадающем меню.","applicationCabinetOrderTraficWeek":"в неделю","applicationCabinetOrderTraficMonth":"в месяц","applicationCabinetOrderPriceDay":"/ день","applicationCabinetOrderPriceDays":"/ %1% дней","applicationCabinetOrderPrice":"%1% за %2% дн 🌐 %3% %4%","applicationCabinetOrderDetails":"📋 Ознакомиться с деталями этого тарифа 📋","tarif_desc_drive":"📚 Идеально для знакомства с нашим сервисом и лёгкого серфинга в соцсетях. Позволит полностью опробовать работу VPN / Proxy 😉","tarif_desc_start":"📚 Подходит для соцсетей и лёгкого использования на смартфоне со средним экранным временем ≈4ч в день. На ПК месячный лимит может расходоваться быстрее, учитывайте активность.","tarif_desc_gamer":"🎮 Для тех, кто активно проводит время за ПК:<br/><font color=#DA7F00>•</font> Игры через Steam и другие лаунчеры<br/><font color=#DA7F00>•</font> Голосовое общение в мессенджерах для геймеров с надёжным подключением через Proxy<br><font color=#DA7F00>•</font> Просмотр Twitch с плагином 7TV в 1080p и выше<br/><font color=#DA7F00>•</font> YouTube и другие соцсети, где важно защищённое подключение\\n\\n✅ Данного трафика достаточно для смартфона и ПК с активным использованием ≈5-6 часов в день.","tarif_desc_unlim":"🚀 Тариф для больших объёмов трафика и любых задач: ПК, ноутбуки, смартфоны, планшеты, ТВ и другие устройства.\\n\\n🧡 Один ключ можно использовать на нескольких устройствах — этого трафика хватит для семьи и Ваших друзей!","tarif_desc_ultra":"💠 Премиальный тариф для широкого спектра задач и очень активных пользователей!\\n\\nПодходит тем, кто приближается к верхней границе тарифа в 1 ТБ и хочет пользоваться сервисом без переживаний о трафике.\\n\\n💜 С этим вариантом Вы сможете спокойно загружать крупные файлы, стримить, играть и использовать VPN / Proxy на десятке устройств.","applicationCabinetOrderBack":"Назад","applicationCabinetOrderSelect":"☑️ Заказать этот тариф ☑️","applicationCabinetOrderSelectTrial":"🎁 Активировать тестовый доступ на %1% часа 🎁","applicationCabinetOrderSelectTrialAccept":"🎁 Получить тестовый доступ на %1% часа в качестве бонуса?","applicationCabinetOrderSelectAccept":"Подтвердите действие ✅\\nС баланса будет списано: %1%\\n\\n💰 Сейчас у Вас: %2%","applicationCabinetOrderTrial":"🎁 Доступен тестовый период на %1% часа","applicationCabinetOrderTrialUsed":"Вы уже использовали тестовый доступ ранее 🙁","applicationCabinetOrderSelectErrTimeMax":"Максимальный срок продления услуги: 2 месяца","applicationCabinetOrderSelectErrBalance":"У Вас недостаточно средств на внутреннем балансе для заказа 🙁","applicationCabinetOrderSelectErrTrialCfg":"Данный тариф нельзя заказать в тестовом режиме 🙁","applicationCabinetOrderSelectErrTrial":"Вы уже использовали этот тестовый тариф 🙁","applicationCabinetOrderSelectErrTrialTgRequired":"🎁 Тестовый период доступен только пользователям, авторизованным через Telegram. Войдите через Telegram (или привяжите Telegram в «Настройки») и попробуйте ещё раз.","applicationCabinetOrderSelectSuccess":"Заказ успешно выполнен 🎉","applicationCabinetOrderSelectSuccessTrial":"Тестовый заказ успешно выполнен 🎉","applicationCabinetOrderSelectErrOrder":"Не удалось создать Ваш заказ 😕","applicationCabinetOrderEditChangeTarif":"♻️ Сменить тариф на другой ♻️","applicationCabinetOrderEditChangeTarifCurrent":" ❗️ Это текущий тариф","applicationCabinetOrderEditChangeTarifNewDays":"<font color=#07D400>При смене тарифа у Вашего заказа останется<br>приблизительно %1%</font><br>дни:часы:минуты:секунды<br><br>Для подтверждения нажмите кнопку ниже","applicationCabinetOrderEditChangeTarifExpired":"❌ Невозможно выполнить смену тарифа у заказа с истёкшим сроком действия. Сначала необходимо его продлить (сделать активным), а уже после сменить тариф на тот, что Вы выбрали. При смене время заказа пересчитается в зависимости от выбранного тарифа.","applicationCabinetOrderEditChangeTarifDesc":"<font color=#FA7900>Каждые %1% ч. Вы можете изменять тариф на любой другой.</font><br><br>При смене тарифа остаток дней с предыдущего заказа переносится на новый с учётом актуальной стоимости и оставшегося срока доступа.","applicationCabinetOrderEditChangeTarifDescErr":"<font color=#07D400>Вы уже недавно меняли тариф!</font><br>Следующая смена будет доступна<br>через %1%","applicationCabinetOrderEditChangeTarifButton":"♻️ Подтвердить смену тарифа на выбранный ♻️","applicationCabinetOrderEditChangeTarifButtonAccept":"♻️ Вы уверены, что хотите сменить тариф на выбранный?\\n\\n⚠️ Имейте в виду, что следующую смену тарифа Вы сможете произвести только через %1% ч.","applicationCabinetOrderEditAuto":"Автопродление заказа","applicationCabinetOrderEditAutoOn":"✅ Активно","applicationCabinetOrderEditAutoOff":"❌ Не активно (в ⚙️Настройках)","applicationCabinetOrderEditAutoDesc":"При окончании срока действия заказа, если на Вашем балансе достаточно средств, система автоматически продлит заказ, если включить автопродление.","applicationCabinetOrderEditResetTime":"Сброс трафика","applicationCabinetOrderEditCreated":"Заказ активирован","applicationCabinetOrderEditSpent":"Суммарно потрачено","applicationCabinetOrderEditOverTime":"Подписка активна до","applicationCabinetOrderChangeTarif":"♻️ Смена тарифа","applicationCabinetOrderEditParams":"⚙️ Настройки","applicationCabinetOrderEditParamsTitle":"⚙️ Настройка заказа: %1%","applicationCabinetOrderEditParamsLabel":"🔸 Метка заказа","applicationCabinetOrderEditParamsLabelDesc":"Вы можете добавить метки к Вашим заказам, чтобы Вам было проще определять какой из них где используется","applicationCabinetOrderEditParamsPassword":"🔸 Ваш пароль для подключения (4-12 символов)","applicationCabinetOrderEditParamsIP":"🔸 IP-адрес для доступа без пароля","applicationCabinetOrderEditParamsIPDesc":"В этом поле Вы можете указать свой личный IP-адрес (взяв его, например, с 2ip.io), чтобы получить доступ к нашему Proxy-серверу без указывания логина и пароля в тех местах, где это требуется. Этот вариант удобнее и ничем не отличается по уровню безопасности.\\n⚠️ Важное уточнение: данная функция не работает при подключении к резервному РФ серверу.","applicationCabinetOrderEditParamsIPDesc1":"Для того чтобы обезопасить подключение к Proxy, мы сгенерировали случайный пароль. В случае необходимости его можно заменить на любой другой. Он нужен для аутентификации при помощи логина и пароля там, где это потребуется.","applicationCabinetOrderEditSave":"✔️ Сохранить все изменения ✔️","applicationCabinetOrderEditSaveOk":"Изменения успешно приняты ✅","applicationCabinetOrderEditSaveFail":"❌ Настройки не были сохранены. %1%","applicationCabinetOrderEditLinkVpn":"📚 Инструкция VPN","applicationCabinetOrderEditLinkProxy":"📚 Инструкция Proxy","applicationCabinetOrderEditResetPass":"🔄 Сбросить Proxy-пароль","applicationCabinetOrderEditResetPassAccept":"🔄 Вы уверены, что хотите сбросить пароль?\\n\\nСтарый пароль перестанет действовать, и Вам необходимо будет выполнить повторную настройку Proxy-соединения!","applicationCabinetOrderEditLinkAccept":"💬 Вам было отправлено сообщение с подробностями и инструкцией для подключения к нашему VPN / Proxy.","proxyInstructionReserveItem":"%1% *%2%*: `%3%`\\n🌐 *HTTPS / Socks5 порт*: `%4%`\\n🌐 *HTTP порт*: `%7%`\\n%5%\\n🔑 *Пароль*: `%6%`","proxyInstructionReserveSubItem":"👤 *Логин* %1% » %2%: `%3%`","proxyInstruction":"Инструкция для подключения к Proxy:\\n\\n%1%\\nМы предоставляем Вам доступ к Proxy сразу во всех наших локациях. ✅ *Рекомендуем сначала попробовать подключение напрямую к европейскому серверу.* В случае если работает некорректно — пробуйте способ через СПБ » Европа.\\n\\n\\n*Данные для подключения к Proxy напрямую:*\\n%2%\\n🌐 HTTPS / Socks5 порт: `%3%`\\n🌐 HTTP порт: `%4%`\\n👤 Логин: `%5%`\\n🔑 Пароль: `%6%`\\n\\n\\n*Для некоторых клиентов из РФ:*\\n_(перенаправляет трафик через РФ при недоступности прямого подключения к Европе. В этом режиме обязательно укажите верный логин из блока ниже — он другой)_\\n%7%\\n\\n\\n*Для работы с Proxy-подключением:*\\n🎙 Discord: [RocketMan Discord Proxy Bridge](https://github.com/RocketMan-System/DiscordProxyBridge_public/releases/latest) — [Инструкция](https://telegra.ph/Kak-zapustit-Discord-cherez-proksi-04-13)\\n🔎 Chrome: [SwitchyOmega 3](https://chromewebstore.google.com/detail/proxy-switchyomega-3-zero/pfnededegaaopdmhkdmcofjmoldfiped), [Smart Proxy](https://chromewebstore.google.com/detail/smartproxy/jogcnplbkgkfdakgdenhlpcfhjioidoj?hl=ru) — [Инструкция](https://telegra.ph/Kak-podklyuchitsya-k-proksi-v-Web-Brauzere-04-13)\\n💻 ПК на Windows и macOS: [Proxifier](https://www.proxifier.com/) — [Инструкция](https://telegra.ph/Kak-zapustit-prilozheniya-na-Windows-cherez-proksi-04-13)","vpnInstruction":"Инструкция для подключения к VPN:\\n\\n%1%\\nМы предоставляем Вам доступ к VPN сразу во всех наших локациях! *Каждая ссылка ниже = личный ключ*, а также страница с инструкцией к подключению. \\n✅ *Рекомендуем сначала добавить Vless от Мультиссылки*, в случае если работает некорректно — пробуйте другие протоколы или резервный вариант.\\n\\n\\n\\n🔹 *Простое объяснение для новичков:*\\n▪️ Нажмите на [эту ссылку](%5%) и следуйте инструкции.\\n\\n▪️ Если Вы находитесь в РФ и у Вас не работает VPN из указанной ссылки выше, [тогда нажмите на эту ссылку](%6%). В этом случае Вы будете подключаться к европейским серверам через российский для маскировки.\\n\\n\\n\\n🔸 *Для пользователей с опытом*:\\n🌏 Все локации в мультиссылке\\n- %2%\\n\\n*Для некоторых клиентов из РФ:*\\n%3%\\nЭтот способ для тех, у кого нет прямого подключения к европейским серверам и нужен обходной способ доступа к ним через российский сервер.\\n\\n*Прямой доступ к локации на всех протоколах:*\\n%4%","vpnInstructionAll":"Все протоколы сразу","vpnInstructionNode":"%1% [%2%](%3%)","vpnInstructionEurope":"🇪🇺 Европа","applicationCabinetOrderEditLinkAcceptTextUnified":"%1%\\n\\n🔑 *Ваш личный ключ доступа к VPN*\\n\\nВсе данные для подключения и список рекомендованных приложений находятся по ссылке:  \\n👉 [Открыть ссылку для подключения](%2%)\\n\\n⚠️ *Храните ссылку в секрете!* \\nОна является Вашим персональным ключом авторизации в VPN.\\n\\n✅ Чтобы активировать подписку:  \\nСкопируйте ссылку и вставьте её в выбранное приложение — после этого автоматически загрузятся актуальные настройки.\\n\\n📦 Хотите управлять всеми заказами?  \\nИспользуйте [🔑 ссылку подписки на все подключения](%4%).\\n\\n───────────────\\n🌐 *Ваши данные для подключения к Proxy:*\\n🌐 *Адрес сервера:* `%6%%7%`\\n🌐 *HTTP порт:* `%8%`\\n🌐 *HTTPS порт:* `%9%`\\n🌐 *Socks5 порт:* `%14%`\\n👤 *Ваш логин:* `%10%`\\n🔑 *Пароль для подключения:* `%5%`\\n\\n⚠️ В случае недоступности основного сервера вы можете подключиться к резервному серверу:  \\n%11% *Адрес сервера:* `%12%`  \\n🌐 *HTTPS порт:* `%9%`  \\n👤 *Ваш логин:* `%13%.%10%`  \\n🔑 *Пароль для подключения:* `%5%`\\n\\n💡 Proxy можно использовать в любом приложении, которое поддерживает Proxy-соединение.  \\nК примеру, *для работы в браузере Chrome* рекомендуем расширения:  \\n• Proxy SwitchyOmega V3 — https://chromewebstore.google.com/detail/proxy-switchyomega-v3/hihblcmlaaademjlakdpicchbjnnnkbo  \\n• SmartProxy — https://chromewebstore.google.com/detail/smartproxy/jogcnplbkgkfdakgdenhlpcfhjioidoj?hl=uz\\n\\n───────────────\\n*Инструкции по подключению к VPN:* \\n💻 [Windows / macOS](https://telegra.ph/Kak-podklyuchitsya-k-VPN-s-Windows--mac-OS-04-13)  \\n📲 [iOS / Android](https://telegra.ph/Kak-podklyuchitsya-k-VPN-s-iOS--Android-04-13)  \\n📺 [Android TV](https://telegra.ph/Kak-podklyuchitsya-k-VPN-s-Android-TV-04-13)\\n\\n───────────────\\n*Как подключиться к Proxy:* \\n🎧 [Discord](https://telegra.ph/Kak-zapustit-Discord-cherez-proksi-04-13)  \\n🖥 [Windows-приложения](https://telegra.ph/Kak-zapustit-prilozheniya-na-Windows-cherez-proksi-04-13)  \\n🌍 [Веб-браузер](https://telegra.ph/Kak-podklyuchitsya-k-proksi-v-Web-Brauzere-04-13)\\n","applicationCabinetOrderEditLinkAcceptTextOrderData":"💬 Данные заказа `%1%`\\n⌛️ Тариф: `%2%`\\n⚙️ Автопродление: %3%\\n\\n%4%","applicationCabinetOrderEditLinkAcceptTextOrderDataReset":"❗️❗️❗️ Внимание! Обязательно обновите конфигурацию в настройках приложения, где используете данный заказ\\n\\n","applicationCabinetOrderEditLinkAcceptTextOrderDataRenewYes":"✅ Включено","applicationCabinetOrderEditLinkAcceptTextOrderDataRenewNo":"❌ Выключено","faqButtonCommand":"🔑 Наши VPN и Proxy могут быть применимы на широком списке устройств и *без ограничений на кол-во подключений* к одному ключу доступа! Настройка очень простая и займет не больше двух минут Вашего времени, далее все будет сведено лишь к кнопке ВКЛ/ВЫКЛ.\\n\\n✅ После того, как Вы оформите свой первый заказ _(включая тестовый)_, Вам придет два сообщения с деталями и инструкциями для подключения как к VPN, так и к Proxy.\\n\\n\\n📦 *Если у Вас ещё нет заказа, то:*\\n[Запустите приложение](https://t.me/rocketman_vpn_bot/?startapp) ➛ Личный кабинет ➛ Сделать новый заказ ➛ Выбирайте подходящий, нажав на него, и переходите к деталям тарифа ➛ Заказываем.\\n\\n\\nЕсли у Вас возникнут какие-то вопросы, то свяжитесь с нами из приложения, мы обязательно поможем ❤️","applicationCabinetOrderEditPay":"⌛️ Продлить заказ (на %1% дней за %2%)","applicationCabinetOrderEditPaySuccess":"🎉 Заказ успешно продлён на %1% дней.\\n\\nСтатус заказа будет обновлён в течение нескольких минут.","applicationCabinetOrderEditPayErr":"Не удалось продлить заказ 🙁","applicationCabinetOrderRemove":"Удалить заказ","applicationCabinetOrderRemoveFailed":"❌ Невозможно удалить активный заказ!","applicationCabinetOrderRemoveConfirm":"Вы уверены, что хотите удалить заказ? 🤨\\n\\nВ случае необходимости Вы всегда можете сделать новый заказ, а если у Вас возникли проблемы с заказом, то обратитесь в нашу службу поддержки, и мы с радостью Вам поможем!","applicationCabinetOrderRemoveConfirmMessage":"✅ Заказ был успешно удалён!","applicationCabinetOrderRemoveConfirmMessageErr":"❌ Не удалось удалить заказ!","applicationCabinetPlatformProxy":"HTTPS Proxy","applicationCabinetPlatformProxy1":"Протоколы: %1%","applicationCabinetPlatformLabel":"🏷️ %1%","paymentSuccess":"💸 Ваш баланс был пополнен на %1%","applicationAdminUsers":"👥 Пользователи (x%1%)","applicationAdminUsersActive":"🫂 Активные пользователи (x%1%)","applicationAdminUserBalance":"💸 %1%","applicationAdminUserBalanceFull":"💸 Текущий баланс: %1% | %2% USD","applicationAdminUserRef":"Рефералы (x%1% | %2%)","applicationAdminUserRefTarget":"Реферал от","applicationAdminUserOrders":"📦 Заказы (x%1% всего | x%2% активных)","applicationAdminUserRefs":"💸 Рефералы (x%1% всего)","applicationAdminUserPayments":"💸 Платежи (x%1% всего) | Зачислено %2%","applicationAdminUserPaymentsType":"Платёжная система: %1%","applicationAdminUserPaymentsStatus":"Статус платежа: %1%","applicationAdminUserPaymentsStatusSetFail":"🔄 Отменить платёж и списать сумму с баланса","applicationAdminUserPaymentsStatusSetFailAccept":"Вы уверены?\\n\\nВ случае подтверждения платёж изменит свой статус, а также с баланса пользователя\\n\\n❌ будет списано %1%","applicationAdminUserPaymentsStatusSetOk":"✅ Подтвердить платёж и зачислить сумму на баланс","applicationAdminUserPaymentsStatusSetOkAccept":"Вы уверены?\\n\\nВ случае подтверждения платёж изменит свой статус, а также баланс пользователя\\n\\n✅ будет пополнен на %1%","applicationAdminUserPaymentsStatusSetOkAcceptDone":"Действие выполнено успешно ✅","applicationAdminUserPaymentsStatusSetOkAcceptFail":"Не удалось выполнить действие!\\nОтвет сервера: %1%","applicationAdminUserCreated":"Создан: %1%","applicationAdminUserUpdated":"Изменён: %1%","applicationAdminUserLast":"🚪 Последний вход: %1%","applicationAdminUserOrdersTotal":"💰 Пополнений баланса на: %1%","applicationAdminUserResetOrderChangeBlock":"Сбросить зависшую блокировку заказа","applicationAdminUserResetOrderChangeBlockAccept":"Вы уверены, что хотите сбросить зависшую блокировку заказа?","applicationAdminUserMedia":"Партнёрская программа","applicationAdminUserMediaOn":"Статус: ✅ Партнёр","applicationAdminUserMediaOff":"Статус: ❌ НЕ Партнёр","applicationAdminUserMediaConfirm":"Статус: ❌ НЕ Партнёр","applicationAdminUserMediaTotal":"Суммарный доход: %1%","applicationAdminUserMediaPayed":"Выплачено партнёру: %1%","applicationAdminUserMediaPayWait":"Необходимо выплатить: %1%","applicationAdminUserMediaPayWaitButton":"💸 Отметить выплату","applicationAdminUserMediaPayWaitButtonAccept":"Вы уверены, что хотите отметить выплату как выполненную? Сумма транзакции %1% (%2%)\\n\\n💸 После подтверждения пользователю будет отправлено уведомление о том, что средства были выплачены и они уже в пути к нему.","applicationAdminUserMediaPayWaitNotify":"Уважаемый партнёр! \\n\\n💸 Вам была выплачена сумма в размере *%1%* по партнёрской программе. Средства уже в пути и потребуется некоторое время, чтобы они достигли Ваших реквизитов","applicationAdminUserMediaPercent":"%2%%1%% Процент от рефералки в доход","applicationAdminUserMediaPercentDesc":"Этот процент указывает, сколько от рефералки будет выплачено пользователю в качестве дохода от партнёрской программы","applicationAdminUserGiveOrder":"Выдать заказ пользователю","applicationAdminUserGiveOrderDays":"Количество дней","applicationAdminUserGiveOrderButton":"Выдать","applicationAdminUserGiveOrderButtonConfirm":"Вы собираетесь выдать заказ\\n\\"%1%\\"\\nпользователю на %2% дней?","applicationAdminUserEditButton":"Управление пользователем","applicationAdminUserEditPromos":"Использованные промокоды: %1%","applicationAdminUserEditBalance":"Изменить баланс","applicationAdminUserAddBalance":"Добавить на баланс","applicationAdminUserEditBalanceAccept":"Вы уверены, что хотите изменить баланс пользователя?","applicationAdminUserEditBalanceAcceptFail":"Не удалось изменить баланс. Возможно, во время редактирования текущий баланс пользователя был изменён\\nОтвет сервера: %1%","applicationAdminUserEditBalanceAcceptOk":"Баланс был успешно изменён","applicationAdminUserEditBalanceChangeNotify":"Администратор изменил Ваш баланс на *%1%*.\\n💰 Текущий баланс: *%2%*\\n\\n🚀 [Запустить приложение](https://t.me/rocketman_vpn_bot/?startapp)","applicationAdminUserEditBalanceAddNotify":"Администратор добавил *%1%* на Ваш баланс.\\n💰 Текущий баланс: *%2%*\\n\\n🚀 [Запустить приложение](https://t.me/rocketman_vpn_bot/?startapp)","applicationAdminSearch":"Поиск","applicationAdminOrders":"🛒 Все заказы (x%1%)","applicationAdminOrdersActive":"💳 Активные заказы (x%1%)","applicationAdminOrdersExpired":"⛔ Остановленные заказы (x%1%)","applicationAdminOrderName":"🛒 %1%","applicationAdminOrderOwner":"👤 %1%","applicationAdminOrderTarif":"🏷️ %1% дней","applicationAdminOrderNode":"🔖 %1%","applicationAdminOrderData":"Трафик: %1%","applicationAdminOrderBlockChangeTarif":"⛔ Блокировка смены тарифа","applicationAdminOrderReload":"Обновить данные MarzBan","applicationAdminOrderReloadAccept":"⚠️ Обновить данные?\\n\\nЭто действие загрузит данные заказа из MarzBan и обновит их в приложении!","applicationAdminOrderReloadAcceptDone":"✅ Запрос на обновление данных отправлен!","applicationAdminOrderReloadAcceptFail":"❌ Не удалось обновить данные заказа!","applicationAdminOrderResetChangeTime":"Сбросить время смены тарифа","applicationAdminOrderResetChangeTimeAccept":"Вы уверены, что хотите это сделать? При подтверждении пользователь сможет сменить тариф на другой","applicationAdminOrderResetChangeTimeAcceptOk":"✅ Запрос успешно выполнен. Теперь пользователь может изменить тариф самостоятельно","applicationAdminOrderResetTraffic":"Сбросить трафик","applicationAdminOrderResetTrafficAccept":"⚠️ Отменить заказ?\\n\\nПользователь не получит уведомление!","applicationAdminOrderResetTrafficAcceptOk":"✅ Готово","applicationAdminOrderReturn":"Отменить заказ","applicationAdminOrderReturnAccept":"⚠️ Отменить заказ?\\n\\nПользователь ПОЛУЧИТ назад средства за весь НЕИСПОЛЬЗОВАННЫЙ период!","applicationAdminOrderReturnAcceptDone":"⚠️ Заказ удалён. Пользователю возвращено %1% на баланс.","applicationAdminOrderReturnNotify":"⚠️ Администратор отменил Ваш заказ\\n🛒 `%1%` и вернул Вам *%2%* на баланс.\\nВы можете сделать новый заказ, чтобы всегда оставаться на связи со свободным Интернетом, зайдя в приложение.\\n\\n🚀 [Запустить приложение](https://t.me/rocketman_vpn_bot/?startapp) ⇒ Личный кабинет ⇒ Сделать новый заказ","applicationAdminOrderRemove":"Удалить заказ","applicationAdminOrderRemoveAccept":"⚠️ Удалить заказ?\\n\\nЕсли заказ всё ещё активен, средства НЕ будут возвращены!","applicationAdminOrderRemoveAcceptDone":"Заказ удалён","applicationAdminOrderAddTime":"Продлить заказ (%1% дн.)","applicationAdminOrderAddTimeAccept":"⚠️ Продлить заказ (%1% дн.)?\\n\\nЭто действие НЕ изменит баланс пользователя!","applicationAdminOrderAddTimeAcceptNotify":"🎉 Администратор продлил Ваш заказ\\n🛒 `%1%` на *%2% дн.* 📆\\n\\n🚀 [Запустить приложение](https://t.me/rocketman_vpn_bot/?startapp) ⇒ Личный кабинет ⇒ Нажмите на указанный заказ для ознакомления с деталями.","applicationAdminPromos":"🎁 Промокоды (x%1%)","applicationAdminPaymentsLast":"⏰ Последние платежи (x%1%)","applicationAdminPaymentsLastSuccess":"💵 Последние успешные платежи (x%1%)","applicationAdminPromosCreate":"Создать промокод","applicationAdminPromoID":"Название: %1%","applicationAdminPromoUSED":"Использований: %1%","applicationAdminPromoCOUNT_USE":"Лимит: %1%","applicationAdminPromoBALANCE":"Сумма: %1%","applicationAdminPromoEditID":"Название","applicationAdminPromoEditCOUNT_USE":"Количество применений (макс)","applicationAdminPromoEditAMOUNT":"Сумма в $","applicationAdminPromoEditCATEGORY":"Категория","applicationAdminPromoEditCATEGORYEmpty":"Обычный / без категории","applicationAdminPromoEditCATEGORYMedia":"Медиапромо","applicationAdminPromoEditCATEGORYNew":"Для новичков","applicationAdminPromoEditSave":"Сохранить промокод","applicationAdminPromoEditPromo":"Изменить","applicationAdminPromoCategory":"Категория: %1%","applicationAdminPromoSendUseList":"Список применивших","applicationAdminPromoRemovePromo":"Удалить","applicationAdminPromoRemovePromoAccept":"Вы уверены?","applicationAdminAddNode":"Добавление новой ноды","applicationAdminAddNodeDesc":"Данный раздел позволит в 2 клика развернуть весь проект на новой ноде. Это лишь установит всё, что надо, но не будет добавлять ноду в список нод","applicationAdminAddNodeIP":"IP-адрес сервера","applicationAdminAddNodeHostname":"Поддомен сервера (s1, s2 и т.д., без точки и прочего)","applicationAdminAddNodeHostnameDesc":"Указанный поддомен автоматически пропишется в CloudFlare со всеми параметрами для работы с нашим сервисом. Если указать уже существующий — то будет перезаписан, так что внимательнее","applicationAdminAddNodeUsername":"Имя пользователя (root)","applicationAdminAddNodePassword":"Пароль пользователя (root)","applicationAdminAddNodePasswordDesc":"Если не указать пароль — будет использоваться авторизация по SSH-ключу. В этом случае убедитесь, что Ваш SSH-ключ добавлен в ноду и имеет доступ к серверу","applicationAdminAddNodePasswordKeyInfo":"Внимание. Пароль не указан, будет использоваться авторизация по SSH-ключу. Убедитесь, что Ваш SSH-ключ добавлен в ноду и имеет доступ к серверу","applicationAdminAddNodeSshPort":"SSH-порт (22)","applicationAdminAddNodeGhUsr":"Github username","applicationAdminAddNodeGhToken":"Github token","applicationAdminAddNodeGhTokenDescScopes":"Для работы требуются такие права: repo (full), workflow, write:packages, read:packages, read:user","applicationAdminAddNodeGhTokenDesc":"Нажмите, чтобы получить токен","applicationAdminAddNodeStart":"Выполнить деплой","applicationAdminAddNodeStarted":"Процесс деплоя запущен, не закрывайте страницу и дождитесь выполнения. Если в течение 5 минут процесс не будет завершён — скорее всего что-то зависло(","applicationAdminAddNodeDoneOk":"Деплой завершён успешно","applicationAdminAddNodeDoneFail":"Ошибка: %1%","applicationAdminAddNodeClearLogs":"Очистить логи","applicationAdminInstallNode":"Развёртывание ноды","applicationAdminCoreSettings":"Настройки ядра","applicationAdminCoreSettingsDesc":"Данный раздел позволяет настроить базовые параметры системы. Параметры применяются на лету, без перезапуска ядра","applicationAdminSaveCoreSettings":"Сохранить настройки","applicationAdminCoreSettingsSaved":"Настройки успешно сохранены","applicationAdminCoreName.projectName":"Название проекта","applicationAdminCoreName.projectMain":"Основной домен","applicationAdminCoreName.projectBot":"Логин бота проекта","applicationAdminCoreDesc.projectBot":"Через какого бота происходит взаимодействие с пользователями. Укажите логин без @","applicationAdminCoreName.admins":"ID Администраторов","applicationAdminCoreDesc.admins":"ID указывайте строго через запятую и не используйте пробелы. К примеру: `123456789,987654321`. И не удалите себя случайно)","applicationAdminCoreName.backup_admins":"ID Администраторов для получения бэкапа","applicationAdminCoreDesc.backup_admins":"Данным администраторам бот будет присылать бэкапы в личку. ID указывайте строго через запятую и не используйте пробелы. К примеру: `123456789,987654321`","applicationAdminCoreName.order_end_limit_month":"Максимальный срок продления заказа (в месяцах)","applicationAdminCoreDesc.order_end_limit_month":"Пользователь не сможет продлить свой заказ на срок больше, чем указан","applicationAdminSendMessage":"Рассылка сообщений","applicationAdminSendMessageTargets":"Количество человек, кто получит сообщение","applicationAdminSendMessageType":"Тип фильтрации пользователей","applicationAdminSendMessageTypeAll":"Все пользователи","applicationAdminSendMessageTypeOrders":"Определённые заказы (любые)","applicationAdminSendMessageTypeOrdersActive":"Определённые заказы (активные)","applicationAdminSendMessageTypeHas":"Есть хоть 1 заказ","applicationAdminSendMessageTypeNotHas":"Нет никаких заказов","applicationAdminSendMessageTypeHasActive":"Есть хоть 1 активный заказ","applicationAdminSendMessageTypeHasUnActive":"Есть хоть 1 НЕактивный заказ","applicationBalanceErr":"Возникла ошибка при формировании платежа: %1%","applicationBalanceErrBalanceLimit":"На Вашем счету уже максимально допустимое количество средств (%1%)","applicationBalanceErrBalanceLimitButton":"Недоступно","applicationBalanceErrData":"Платёжная система не смогла сформировать платёж. Пожалуйста, попробуйте позже.","applicationBalanceErrNetwork":"Сетевая ошибка. Пожалуйста, попробуйте позже.","applicationBalanceErrCurrency":"Ошибка валюты. Пожалуйста, попробуйте позже.","applicationBalanceErrAuth":"Ошибка авторизации","applicationBalanceErrPaymentLink":"Не удалось получить ссылку на платёж","applicationBalanceSettingsTitle":"Выбор валюты","applicationBalanceTitle":"Раздел пополнения баланса","applicationBalanceSelect":"Выберите валюту для отображения","applicationBalanceEmail":"Ваш email","applicationBalancePlatform":"Платёжная платформа","applicationBalanceAmount":"Сумма пополнения (в %1%)","applicationBalanceAmountWithPercent":"\\n<font color=#00AE09>Итоговая сумма оплаты: ≈%1%</font>\\n\\n<font color=#F28100>Если Вы чей-то реферал,\\nто на баланс вернётся %2% в виде 20% кэшбэка!</font>","applicationBalanceAmountLimit":"Минимальная сумма: %1%\\nМаксимальная сумма: %2%\\n\\n💵 <font color=#00AE09>Ваш способ оплаты: %4%</font>\\nКомиссия платёжной системы: %3%%\\n\\nПосле самой оплаты баланс зачисляется автоматически в течение нескольких минут, также Вам придёт сообщение о статусе платежа с другими деталями на случай обращения в службу поддержки.","applicationBalanceAmountDesc":"Пополнение происходит через сервис %1%","applicationBalanceAmountButton":"Перейти на страницу оплаты","applicationBalanceAmountButtonLoading":"Загрузка...","applicationBalanceAmountButtonErr":"❌ Неверно указана сумма ❌","applicationBalanceCurrency":"Метод оплаты","applicationBalanceCurrencyDesc":"Комиссия платёжной системы: ≈%1%%","applicationServersTitle":"Статус серверов","paymentCompleteNotify":"🎉 Ваш баланс был успешно пополнен на <b>%1%</b>.\\n\\nID платежа: <b>%2%</b>\\n(Он понадобится в случае обращения в <a href=\\"https://t.me/rocketman_vpn\\">службу поддержки</a>).\\n\\n🚀 <a href=\\"https://t.me/rocketman_vpn_bot/?startapp\\">Запустить приложение</a>","paymentCompleteNotifyRef":"🎉 Ваш баланс был успешно пополнен на <b>%1%</b>.\\nТак как Вы являетесь рефералом @%4% в нашем сервисе, мы начислили бонус в размере <b>%3%</b> (%5%%)\\n\\nID платежа: <b>%2%</b>\\n(Он понадобится в случае обращения в <a href=\\"https://t.me/rocketman_vpn\\">службу поддержки</a>).\\n\\n🚀 <a href=\\"https://t.me/rocketman_vpn_bot/?startapp\\">Запустить приложение</a>","paymentCompleteNotifyRefHost":"🎁 Реферальная система:\\n💵 Вы получили бонус в размере <b>%1%</b> (%3%%) за пополнение баланса Вашим рефералом @%2%\\n\\n🚀 <a href=\\"https://t.me/rocketman_vpn_bot/?startapp\\">Запустить приложение</a>","paymentCompleteNotifyAdmin":"💵 Пользователь %1% [UID: %7%] пополнил баланс на <b>%2%</b>.\\n💰 В чистую прибыль проекта зачислено +<b>%5%</b>\\n\\nПлатёжная система: <b>%6%</b>\\nID платежа: <b>%3%</b>\\nURL: %4%","paymentRefundNotify":"❗️ Внимание ❗️\\nПо платежу `%1%` был сформирован запрос на возврат средств.\\n\\nТак как они были возвращены Вам в полном объёме, с баланса в приложении было списано *%2%*.\\n\\nВ случае возникновения вопросов обратитесь в [службу поддержки](https://t.me/rocketman_vpn), мы обязательно поможем!\\n\\n🚀 [Запустить приложение](https://t.me/rocketman_vpn_bot/?startapp)","admin-nodes":"⛓ Ноды","admin-firewall":"📜 Записи фаервола (x%1%)","admin-firewall_add":"Новая запись фаервола","logRecord-title":"📊 Логи администрации (x%1%)","logRecord-title-user":"📜 Логи пользователя (x%1%)","logRecord-log-time":"Создан: %1%","logRecord-log-who":"Кто","logRecord-log-target":"Цель","logRecord-log-reason":"Текст: %1%","logRecord-setPaymentStatus":"Смена статуса платежа %1%","logRecord-removePromo":"Удаление промокода %1%","logRecord-editPromo":"Редактирование промокода %1%","logRecord-editBalance":"Редактирование баланса (%1%$ -> %2%$)","logRecord-returnOrder":"Отмена заказа %1% (%2%$)","logRecord-addOrder":"Выдача заказа %1%","logRecord-payOrder":"Продление заказа %1% на %2% дней","logRecord-partnerNotify":"Выплата партнёру %1% USD (%2%)","paymentMethodMorune":"Morune","paymentMethodMorune2":"СБП (Система быстрых платежей)","paymentMethodCrypto":"Криптовалюта","paymentMethodTelegram":"Telegram","paymentMethodFreekassa":"Freekassa","errorUserDataAdminDetect":"Не удалось обнаружить данные пользователя для формирования ссылки. Видимо, этот пользователь заблокировал нашего бота 😐","partner_title":"🏆 Партнёрская программа 🏆","partner_desc":"Вы являетесь участником партнёрской программы. Помимо основного бонуса за реферата Вы также будете получать финансовые отчисления.\\n\\nВаша текущая ставка — %1%% от реферального баланса\\n\\nВсего Вы заработали: %2%\\nТекущий баланс: %3%","ref_title":"🏆 Реферальная система 🏆","ref_desc":"Приглашайте друзей и знакомых в наш сервис и получайте бонусы на свой баланс!\\n\\n<font color=#2DA618>От каждого реферала Вы получите по <font color=#54E13B>%1%</font> за их первые заказы и <font color=#54E13B>%2%%</font> от всех пополнений их баланса.</font>\\n\\n<font color=#00B7B7>Все Ваши рефералы получат <font color=#15DBDB>%3%</font> бонусом после первого заказа (включая тестовый) и <font color=#15DBDB>%4%%</font> кэшбэка от всех своих будущих пополнений.</font>\\n\\nТаким образом эта система выгодна и для Вас, и для Ваших рефералов 😉","ref_stats":"Ваша статистика","ref_stats_data":"Количество приведённых рефералов: %1%\\nПолучили бонусом на баланс: %2%","ref_link_text":"Ваши данные реферальной системы","ref_link_text_copy":"📋 Ссылка+текст","ref_only_link_copy":"🔗 Ссылка","ref_link_text_copy_sendText":"Привет! Я пользуюсь удобным способом для защиты своих данных в интернете и смело рекомендую его тебе 😎\\n\\nКроме того, перейдя именно по моей ссылке, ты получишь бонусом %1% после первого заказа (включая тестовый) и пожизненный кэшбэк в %2%% от всех пополнений баланса 🎉\\n","ref_link_text_copy_sendText_1":"✅","ref_link_text_copy_alert":"🔗 Ваша реферальная ссылка и дополнительный текст были скопированы в буфер обмена.\\n\\nИспользуйте это для приглашения друзей и знакомых в наш сервис, чтобы извлекать выгоду совместно 😎","ref_only_link_copy_alert":"🔗 Ваша реферальная ссылка была скопирована в буфер обмена.\\n\\nИспользуйте её для приглашения друзей и знакомых в наш сервис, чтобы извлекать выгоду совместно 😎","ref_link_text_share":"💌 Поделиться","ref_link_text_share_message":"Привет! Я пользуюсь удобным способом для защиты своих данных в интернете и смело рекомендую его тебе 😎\\n\\nКроме того, перейдя именно по моей ссылке, ты получишь бонусом %1% после первого заказа (включая тестовый) и пожизненный кэшбэк в %2%% от всех пополнений баланса 🎉\\n","ref_message_personal":"Вы не можете зарегистрироваться по своей реферальной ссылке 😐","ref_message":"🎁 Реферальная система:\\nВы успешно зарегистрировались как реферал пользователя @%1% 🎉\\n\\nВы получите бонус в размере <b>%2%</b> при первом заказе (включая тестовый), а также пожизненный кэшбэк в размере <b>%3%%</b> при каждом пополнении баланса!","ref_message_host":"🎁 Реферальная система:\\n🎉 Пользователь @%1% зарегистрировался как Ваш новый реферал 🎉\\n\\nВы получите бонус в размере <b>%2%</b> при первом его заказе (включая тестовый), а также кэшбэк в размере <b>%3%%</b> от каждого его пополнения баланса.","ref_message_order":"🎁 Реферальная система:\\n💵 Вы получили бонус в размере <b>%1%</b> на свой баланс","ref_message_order_host":"🎁 Реферальная система:\\n💵 Вы получили бонус в размере <b>%1%</b> на свой баланс от пользователя @%2%","traffic_limit_notify_close":"⚠️ У Вас заканчивается трафик на заказе `%1%` с тарифом `%2%`! Если это сообщение будет появляться достаточно часто, то рекомендуем задуматься о смене тарифа на более продвинутый, чтобы всегда оставаться на связи ❤️\\n\\n🚀 Сделать это Вы сможете, [запустив приложение](https://t.me/rocketman_vpn_bot/?startapp) ⇒ Личный кабинет ⇒ нажмите на нужный заказ ⇒ ♻️ Сменить тариф на другой ♻️","traffic_limit_notify_end":"❗️ ВНИМАНИЕ ❗️ У Вас закончился весь трафик на заказе `%1%` с тарифом `%2%`. Его сброс произойдёт %3%. Но если Вы хотите всегда оставаться на связи, то подумайте о смене тарифа на более продвинутый.\\n\\n🚀 Сделать это Вы сможете, [запустив приложение](https://t.me/rocketman_vpn_bot/?startapp) ⇒ Личный кабинет ⇒ нажмите на нужный заказ ⇒ ♻️ Сменить тариф на другой ♻️","traffic_limit_notify_restore":"🎉 У заказа `%1%` с тарифом `%2%` была сброшена статистика использованного трафика. Теперь он снова доступен в полном объёме :)\\n\\n🚀 [Запустить приложение](https://t.me/rocketman_vpn_bot/?startapp)","promo_button":"🎁 Применить промокод","example":"Example","deleteMessageFailed":"❌ Не удалось удалить сообщение. Возможно, оно слишком старое или уже удалено.","cryptoPayTitle":"Оплата через криптовалюту","cryptoPayUserId":"ID пользователя","cryptoPayAmount":"Сумма к оплате (USDT)","cryptoPayInstruction":"Переведите указанную сумму в USDT на предоставленный адрес","cryptoPayLoading":"Загрузка реквизитов...","cryptoPayErrorNoParam":"Не передан параметр crypto_id в ссылке.","cryptoPayErrorInvalidData":"Некорректные данные для оплаты.","cryptoPayErrorParse":"Ошибка при обработке данных для оплаты. Попробуйте обновить страницу или обратитесь в поддержку.","cryptoPayWallet":"Адрес кошелька для перевода","cryptoPayNetwork":"Сеть (блокчейн)","cryptoPayCopy":"Скопировать","cryptoPayCopyAmountAlert":"Сумма скопирована в буфер обмена!","cryptoPayCopyWalletAlert":"Адрес кошелька скопирован в буфер обмена!","cryptoPayWarning":"ВНИМАТЕЛЬНО проверьте реквизиты и сумму перед оплатой! В случае ошибки мы не можем гарантировать зачисление средств.","telegramPayment":"✅ Для Вас был сформирован счёт на оплату\\n\\n⚖️ Сумма оплаты: <b>%1% %2%</b> (<b>%3% %4%</b>)\\n👤 ID пользователя: <b>%7%</b>\\n📋 ID платежа: <b>%6%</b>\\n\\n🔗 Для оплаты перейдите по ссылке: %5%","orderManipulationBlock":"Ваш прошлый заказ всё ещё в обработке. Пожалуйста, подождите его завершения или обратитесь в службу поддержки для получения помощи.","subPage.orderInfo":"Ниже представлены все доступные методы подключения для Вашего заказа через это приложение","subPage.userInfo":"Ниже представлены все доступные методы подключения для всех Ваших активных заказов через это приложение","subPage.orderId":"🛒 ID Заказа: %1%\\n⬇️ Выберите регион конечного подключения:","subPage.nodeInfo":"📍 Точка обхода: %1%\\n⚠️ Это значит, что сначала весь трафик будет идти через неё для маскировки.","subPage.protocolInfo":"Протокол подключения: %1%","subPage.allTitle":"Все заказы","subPage.expiredNotifyList":"❌ Срок действия подписки истёк\\nПродлить VPN в боте\\n%1%","ping.admin.initOk":"✅ Система инициализирована, все ноды доступны в штатном режиме.","ping.admin.initFail":"❌ Система инициализирована, но некоторые ноды не доступны. Список нерабочих нод: %1%","ping.admin.checkFail":"❌ Внимание! Нода %1% не ответила на пинг-запрос. Пожалуйста, проверьте её работоспособность.","ping.admin.checkRestore":"✅ Нода %1% восстановила работоспособность.","speedtest.admin.failTest":"❌ Внимание! На ноде %1% тест скорости не был пройден. Пожалуйста, проверьте её работоспособность.","speedtest.admin.slowspeedNotify":"⚠️ Внимание, на ноде %1% зафиксирована низкая скорость соединения (%2% Mbps download, %3% Mbps upload). Пожалуйста, проверьте её работоспособность.","speedtest.admin.recoverNotify":"✅ Нода %1% восстановила нормальную скорость соединения (%2% Mbps download, %3% Mbps upload).","applicationServersSpeedtestIssueDetected":"⚠️ На сервере обнаружены проблемы со скоростью соединения","applicationServersSpeedtestLastSpeed":"Последний замер скорости (%1%) D: %2% / U: %3%","applicationServersSpeedtestPrevSpeed":"Предыдущий замер скорости (%1%) D: %2% / U: %3%","applicationServersSpeedtestLastSpeedNotFound":"⚠️ На сервере не было сделано ещё замеров скорости","applicationServersPingIssueDetected":"❌ Сервер не отвечает на пинг-запросы","actionUpdateStartNodes":"⚠️ Запущена процедура обновления нод (%1%), через некоторое время ноды будут перезапущены. После завершения выполнения работ будет отправлено дополнительное уведомление (если не было отправлено — возможно, подвис github action и всё в порядке, но могут быть и проблемы)","actionUpdateStartHeader":"Запущена процедура обновления:","actionUpdateStartSite":"• Обновляется главная страница проекта","actionUpdateStartApp":"• Обновляется бэкенд приложение","actionUpdateStartProxy":"• Обновляется прокси или xray служба (Ноды: %1%)","actionUpdateStartMTProto":"• Обновляется сервер MTProto","actionUpdateStartFirewall":"• Обновляем фаервол (Ноды: %1%)","actionUpdateStartBackup":"• Обновляем дочерний API интерфейс (Ноды: %1%)","actionUpdateStartFooter":"Через некоторое время ноды будут перезапущены. После завершения работ будет отправлено уведомление.","actionUpdateCompletedNodes":"✅ Процедура обновления нод (%1%) завершена, ноды перезапущены и уже должны быть активны","mtproto.title":"MTProto Proxy","mtproto.subtitle.1":"Быстрый и безопасный","mtproto.subtitle.2":"доступ к Telegram","mtproto.description.1":"Бесплатный прокси-сервер для стабильного подключения к Telegram.","mtproto.description.2":"Без регистрации, без ограничений, с полной конфиденциальностью.","button.connect":"Подключить прокси","button.copy":"Скопировать ссылку","button.copied":"Скопировано","link.label":"Ссылка для подключения вручную","feature.encryption.title":"Сквозное шифрование","feature.encryption.description":"Ваши сообщения остаются конфиденциальными. Мы не имеем доступа к Вашей переписке.","feature.free.title":"Без ограничений","feature.free.description":"Бесплатный доступ без регистрации и лимитов на трафик.","feature.rocketman.title":"Больше возможностей","feature.rocketman.description":"Этот прокси работает только для Telegram. Для полноценной защиты используйте RocketMan-VPN.","rocketman.title":"RocketMan VPN — это Ваш надежный друг","rocketman.description":"Данный MTProto-прокси является дополнительным проектом — RocketMan VPN. С нами Вы получите полную защиту интернет-соединения во всех приложениях и любимых сервисах. Попробуйте бесплатно то, что мы предоставляем для своих клиентов, и оцените качество!","rocketman.button":"Открыть RocketMan VPN","howto.title":"Как подключиться?","howto.step1.title":"Нажмите на кнопку \\"Подключить прокси\\"","howto.step1.description":"Или скопируйте ссылку и подключитесь вручную","howto.step2.title":"Откройте Telegram","howto.step2.description":"Ссылка автоматически запустит приложение","howto.step3.title":"Подтвердите","howto.step3.description":"Нажмите «Подключить» в диалоговом окне","web.orders":"Мои заказы","web.settings":"Настройки","web.exit":"Выход","web.back":"← Назад","settings.accountInfo":"Информация об аккаунте","settings.language":"Язык","settings.currency":"Валюта отображения","settings.currencyDesc":"Выберите валюту для отображения цен и баланса в приложении.","settings.webCredentials":"Данные для входа на сайт","settings.webCredentialsDesc":"Эти данные используются для входа в веб-интерфейс вне Telegram. Хоть мы и не ограничиваем Вас в выборе пароля, но настоятельно рекомендуем указывать сложный","settings.login":"Логин","settings.loginPlaceholder":"Введите новый логин","settings.newPassword":"Новый пароль","settings.passwordPlaceholder":"Не менее %1% символов","settings.repeatPassword":"Повторите пароль","settings.repeatPasswordPlaceholder":"Повторите новый пароль","settings.passwordMismatch":"Пароли не совпадают","settings.saved":"Сохранено!","settings.saveError":"Ошибка сохранения","settings.saving":"Сохранение…","settings.saveCredentials":"Сохранить данные","settings.copy":"Копировать","settings.reset":"Сбросить","settings.apiKeyHint":"Используйте API-ключ для входа в <a href=\\"https://%1%\\" target=\'_blank\'>веб-интерфейс</a> без Telegram, а также для интеграции с другими нашими продуктами. Не передавайте его третьим лицам","settings.referral":"Реферал (ID пригласившего)","settings.referralDesc":"Если вы пропустили реферальную ссылку, укажите ID пригласившего здесь. Применится только один раз.","settings.referralApplied":"ID пригласившего","settings.referralAppliedAlert":"ID пригласившего скопирован в буфер обмена.","settings.referralHostId":"Ваш ID пригласившего","settings.referralHostIdPlaceholder":"Введите ID пользователя (только цифры)","settings.referralHostIdInvalid":"Неверный формат ID. Используйте только цифры.","settings.referralApply":"Применить ID","settings.referralSaved":"Реферал применён!","settings.referralErr.already_applied":"Реферал уже был применён.","settings.referralErr.invalid_ref_host":"Неверный ID пригласившего.","settings.referralErr.same_account":"Нельзя использовать свой собственный ID в качестве реферала.","login.tabCredentials":"Логин и пароль","login.tabApiKey":"API-ключ","login.tabRegister":"Регистрация","login.labelLogin":"Логин","login.labelPassword":"Пароль","login.labelConfirmPassword":"Подтверждение пароля","login.labelApiKey":"API-ключ","login.placeholderLogin":"Введите логин","login.placeholderPassword":"Введите пароль","login.placeholderConfirmPassword":"Подтвердите пароль","login.placeholderApiKey":"Введите API-ключ","login.signIn":"Войти","login.signInApiKey":"Войти по API-ключу","login.signUp":"Зарегистрироваться","login.signingIn":"Входим…","login.signingUp":"Регистрируемся…","login.orUseApiKey":"или войдите по API-ключу","login.orUseCredentials":"или войдите по логину и паролю","login.switchToApiKey":"Войти по API-ключу","login.switchToCredentials":"Войти по логину и паролю","login.errLoginRequired":"Введите логин и пароль","login.errPasswordRequired":"Введите пароль","login.errConfirmPasswordRequired":"Подтвердите пароль","login.errPasswordMismatch":"Пароли не совпадают","login.errApiKeyRequired":"Введите API-ключ","login.errIncorrect":"Неверный логин или пароль","login.errInvalidKey":"Неверный API-ключ","login.errServer":"Ошибка сервера, попробуйте ещё раз","login.errRegistration":"Ошибка регистрации","login.tabTelegram":"Через Telegram","login.tg.title":"Вход через Telegram","login.tg.instruction":"1. Отправьте команду ниже боту <a href=\\"https://t.me/%1%\\" target=\\"_blank\\">@%1%</a>\\n2. После отправки нажмите кнопку «Подтвердить вход»","login.tg.commandLabel":"Команда для бота:","login.tg.showCommand":"Показать","login.tg.hideCommand":"Скрыть","login.tg.copyCommand":"Копировать","login.tg.copied":"Команда скопирована!","login.tg.timerLabel":"Код действителен: %1%","login.tg.timerExpired":"Срок действия кода истёк","login.tg.verifyButton":"Подтвердить вход","login.tg.verifying":"Проверяем…","login.tg.requestNew":"Запросить новый код","login.tg.loading":"Генерируем код…","login.tg.enter_correct":"Личность подтверждена. Вернитесь на сайт и нажмите на кнопку \\"%1%\\" для завершения","login.tg.enter_fail":"Не удалось выполнить действие. Убедитесь, что указанный ключ корректен, а срок действия не истёк","login.tg.errNotSent":"Не удалось подтвердить вход. Убедитесь, что вы отправили команду боту, и попробуйте ещё раз. Если код истёк — запросите новый.","lang.ru":"Русский","lang.en":"Английский","lang.uk":"Украинский","footer.info":"MTProto-прокси работает только с официальными приложениями Telegram","instructionModalTitleVpn":"Инструкция по подключению VPN","instructionModalTitleProxy":"Инструкция по подключению Proxy","instructionModalSendToTg":"📩 Отправить в Telegram","instructionModalSentToTg":"Инструкция отправлена в ваши личные сообщения Telegram","settings.name":"Ваше имя","settings.nameDesc":"Укажите имя для персонализации обращений в приложении.","settings.namePlaceholder":"Введите имя (3-15 символов)","settings.nameInvalid":"Допускаются только кириллица, латиница, цифры и пробелы (3-15 символов)","settings.promoTitle":"Активация промокода","settings.promoDesc":"Если у Вас есть промокод, то введите его здесь, чтобы получить приятный бонус на Ваш баланс.","settings.promoPlaceholder":"Введите промокод","settings.promoApply":"Применить промокод","settings.promoApplied":"Промокод успешно применён!","adminDashboardTitle":"Статистика (Дашборд)","adminDashboardActiveOrders":"Активность подписок","adminDashboardActiveLabel":"Активные","adminDashboardExpiredLabel":"Истекшие","adminDashboardOrdersByTariff":"Подписки по Тарифам","adminDashboardPayments":"Платежи","adminDashboardTrial":"Пробный период","adminDashboardLang":"Язык пользователей","adminDashboardCurrency":"Валюта пользователей","adminDashboardActivity":"Активность в приложении","adminDashboardOrdersPerUser":"Кол-во подписок на юзера","adminDashboardRefIncome":"Медианный доход с рефералов","applicationAdminBackButton":"Назад"}');
;// ./src/lang/en.json
const en_namespaceObject = /*#__PURE__*/JSON.parse('{"pagePayTitle":"Purchase VPN","pagePayBalance":"Top up balance","pagePayID":"Your Unique ID","pagePayIDPlaceholder":"Enter your ID","pagePayAmount":"Top-up amount (temporarily from %1%)","pagePayButton":"Proceed to Payment","pageFAQId":"How to get ID?","pageFAQStep1":"Open the app in the RocketMan-VPN chatbot","pageFAQStep2":"Find the \\"Your ID\\" section at the bottom of the home page","pageFAQStep3":"Copy the unique number","pageFAQStep4":"Paste the ID into the field on the left","pageFAQOpen":"Open Telegram Bot","pageFAQQR":"Telegram Bot QR Code","landingTGBotButton":"Launch Telegram Bot","landingDashboardButton":"Open Dashboard","landingTarifs":"Plans","landingTarifsTrial":"+ Trial period %1%h","landingTarifsDiscount":"Discount","landingTarifsPrice":"%1%/%2% days","landingTarifsGo":"Connect","landingFooterText":"And here is our main project","landingTitle":"RocketMan VPN — Internet Under Protection!","landingTitleDesc":"Lightning-fast access to your favorite sites and services from PC and smartphone.","landingFeaturesTitle":"Why choose us?","features1Title":"Anonymity","features1Text":"Thanks to multiple layers of protection on our side, your real IP will remain unknown to any service.","features2Title":"Speed","features2Text":"Download, watch your favorite content, and share at speeds up to 1Gbps.","features3Title":"Simplicity","features3Text":"Connect in 1 click from any of your devices! PC, smartphone, TV, tablet, and laptop.","features4Title":"Support","features4Text":"We are always ready to help you with any questions. Online almost 24/7","faq1title":"How to pay?","faq1text":"Select a plan and pay via convenient method. After payment, you will receive instructions in the Telegram bot.","faq2title":"How to set up VPN?","faq2text":"The entire connection process is described in great detail in our <a href=\\"https://t.me/%1%\\" target=\'_blank\'>Telegram bot</a>.\\nLiterally step-by-step, so you\'re unlikely to get lost. Most importantly — follow the instructions :)","faq3title":"What if something isn\'t working?","faq3text":"Contact <a href=\\"https://t.me/%1%\\" target=\'_blank\'>support via Telegram</a>, and we will help you.","locationSelectTitle":"Select server location","locationSelectLoad":"Load: %1%%","locationReserve1":"Saint Petersburg","locationLocal":"Local server","locationStockholm":"Stockholm","locationAustria":"Vienna","locationNetherland":"Amsterdam","locationFrankfurt":"Frankfurt","locationParis":"Paris","tarif.test_drive":"🚗 Test Drive","tarif.start":"🚀 Start","tarif.gamer":"🎮 Gamer","tarif.pro":"👑 Family+","tarif.ultra":"🌌 Space","httpTarifPro":"🔒 Proxy-Unlimited","httpTarifGamer":"🔒 Proxy-Gamer","tarifNameFull":"%1% (%2% days | %3% GB/day) - %4%","welcomeMessage":"Welcome!\\nThanks to our service, you can get secure access to your favorite sites and apps, just like our other beloved clients ❤️\\n\\n⭐️ We have no device limits, so you can use 1 key on all your devices! Along with VPN, you also get access to our Proxy.\\n\\n🛒 We provide:\\n- VPN for iOS, Android, Windows, macOS, Android TV\\n- Proxy for browser, Discord, Windows, etc.","basketBalance":"Top up balance","secondsToStringD":"%4% d. %3% h. %2% min. %1% sec.","secondsToStringH":"%3% h. %2% min. %1% sec.","secondsToStringM":"%2% min. %1% sec.","readButton":"🗑 Delete this message","expireNotifyOrderData":"▪️ Plan: `%1%`\\n▪️ Name: `%2%`\\n▪️ Renewal period: `%3% days`","expireNotifyTemplate":"Hello, %1%!\\n%2%\\n\\n%3%\\n▪️ Renewal cost: `%4%`\\n\\n%5%","expireNotifyFull":"Your order has expired 🙁\\n\\nTo stay connected to the free Internet — [launch the app](https://t.me/rocketman_vpn_bot/?startapp), then click on 💸 your balance at the top right, top it up, and enable auto-renewal in the order settings 😇","expireNotifyTime":"Your order will expire in less than `%1%` hour 🙁","expireNotifyRenewAutoNoMoney":"❗️ Auto-renewal is enabled, but your current balance is insufficient 🙁\\n\\nEnsure you have enough funds for the feature to work smoothly in the coming months. [Launch the app](https://t.me/rocketman_vpn_bot/?startapp), click on your balance in the top right, and top up the desired amount.","expireNotifyRenewAuto":"✅ Auto-renewal is enabled, so the order will be renewed automatically when less than 24 hours remain 😎","expireNotifyRenewManual":"ℹ️ How to enable auto-renewal?\\n🚀 [Launch the app](https://t.me/rocketman_vpn_bot/?startapp) ⇒ Account ⇒ click on your order ⇒ Settings ⇒ check Auto-renewal ⇒ Save all changes.","expireNotifyRenewSuccessAuto":"Hello, %1%!\\nYour order has been automatically renewed.\\n\\n%2% 🎉\\n\\nThank you for trusting us ❤️\\nThe best way to thank us is by inviting your friends via the referral system!\\n\\n🚀 [Launch the app](https://t.me/rocketman_vpn_bot/?startapp)","commandIncorrect":"The command was used incorrectly\\n`%1%`\\n\\n🚀 [Launch the app](https://t.me/rocketman_vpn_bot/?startapp)","commandIncorrectExample":"Command `%1%` used incorrectly!\\n\\n✅ Correct example: `%2%`\\n\\n🚀 [Launch the app](https://t.me/rocketman_vpn_bot/?startapp)","useStartCommand":"Start","usePromoCommand":"Apply promo code — /promo PROMO_NAME","useFaqCommand":"How to connect to VPN / Proxy?","usePromoAlready":"You have already applied this promo code. It can only be used once.\\n\\n🚀 [Launch the app](https://t.me/rocketman_vpn_bot/?startapp)","usePromoNotFound":"Promo code `%1%` not found 🙁\\n\\nPlease check the spelling and ensure the code is valid.\\n\\n🚀 [Launch the app](https://t.me/rocketman_vpn_bot/?startapp)","usePromoUsedFull":"Activation limit for promo code `%1%` reached 🙁\\n\\n🚀 [Launch the app](https://t.me/rocketman_vpn_bot/?startapp)","usePromoUsedCategory":"You have already applied a similar promo code.\\n\\n🚀 [Launch the app](https://t.me/rocketman_vpn_bot/?startapp)","usePromoErr":"Failed to apply promo code `%1%` 🙁\\n\\n🚀 [Launch the app](https://t.me/rocketman_vpn_bot/?startapp)","usePromoSuccess":"Promo code `%1%` successfully applied 🎉\\n%2% credited to your balance\\n💰 Current balance: %3%\\n\\n🚀 [Launch the app](https://t.me/rocketman_vpn_bot/?startapp)","adminNoAccess":"You do not have access to perform this action.\\n\\n🚀 [Launch the app](https://t.me/rocketman_vpn_bot/?startapp)","adminMenuButton":"Admin Menu","adminMenu":"Admin Section\\n\\n\\nPromo Codes Menu\\nPromo codes list: /listPromo\\nPromo code info: `/infoPromo {PROMO_NAME}`\\nCreate promo code: `/createPromo {PROMO_NAME} {COUNT_USE} {DOLLARS}`\\nDelete promo code: `/deletePromo {PROMO_NAME}`\\n\\n\\nUsers Menu\\nGive order to user: `/giveOrder {USER_ID} {TARIF_ID} {DAYS}`\\nDelete order: `/removeOrder {ORDER_ID}`\\nGive balance to user: `/addMoney {USER_ID} {SUM_USD}`","adminUserRemoveOrderNotFound":"Order not found","adminUserRemoveOrderStatus":"Order removal status: %1%","adminUserGiveTarifErrUser":"User not found!","adminUserGiveTarifErrTarif":"Plan not found","adminUserGiveTarifErrNode":"Plan node not found. Plan configuration is invalid","adminUserGiveTarifErrMarzban":"MarzBan failed to create order. Reason unknown","adminUserGiveTarifSuccess":"Successfully gave order to @%1%","adminUserGiveTarifNotify":"🎉 Administrator has added the `%1%` plan to your account for `%2% days` 📆\\n\\n*Order Information:*\\n🚀 [Launch the app](https://t.me/rocketman_vpn_bot/?startapp) ⇒ Account ⇒\\nclick on your order ⇒ 📚 VPN / Proxy Instructions","adminPromoCreateAlreadyExist":"This promo code already exists","adminPromoCreateAlreadyExistWas":"This promo code existed once and cannot be recreated","adminPromoCreateFailed":"Failed to create promo code","adminPromoCreateDone":"Promo code `%1%` successfully created.\\nActivations available: %2%\\nBalance: %3%","adminPromoList":"List of all promo codes:\\n\\n%1%","adminPromoListFormat":"`/infoPromo %1%` (%2% used / %3% total / %4%)","adminPromoInfo":"Promo code info:\\n\\nID: `%1%`\\nActivation limit: %2%\\nActivations count: %3%\\nBalance: %4%\\n\\nActivations list:\\n%5%","adminPromoDeleteDone":"Promo code `%1%` successfully deleted","terms":"User Agreement","contacts":"Contact Us","contactsTG":"Telegram Chat","contactsEmail":"E-Mail","trialNotify":"✅ You have received the `%1%` plan for `%2% hours` as trial access.\\n\\n📌 Order info in the app:\\n🚀 [Launch the app](https://t.me/rocketman_vpn_bot/?startapp) ⇒ Account ⇒\\nclick on your order ⇒ 📚 VPN / Proxy Instructions.\\n\\nWe provide free access so you can evaluate the quality and stability before future purchases 🤝","launchBot":"Launch","launchBotLong":"Open App 📱","applicationMainMenu":"Main Menu","applicationMainMenuBack":"Back","applicationButtonsRef":"Referral System","applicationButtonsFaq":"How to use VPN?","applicationButtonsCabinet":"Account","applicationButtonsAdmin":"Admin Dashboard","applicationButtonsAdminDisk":"Free disk space: %1%","applicationButtonsAdminPayments":"Income stats:<br/>%1% current month<br/>%2% last month<br/>%3% total period | %4% pending","applicationUserInfoWithUs":"With us since","applicationUserInfoBalance":"Your balance","applicationUserInfoId":"Your ID","applicationUserInfoTgId":"Linked TG Account ID","applicationUserInfoAPIKey":"Your API Key","applicationUserInfoAPIKeyAlert":"📝 Your API Key has been copied to clipboard. Do not disclose this key to anyone; project administration will never ask for it","applicationUserInfoAPIResetAlertAsk":"📝 Are you sure you want to generate a new API Key?","applicationUserInfoAPIResetAlert":"📝 Your API Key has been regenerated","applicationUserInfoIdAlert":"📝 Your ID has been copied to clipboard.","applicationUserInfoTgIdAlert":"📝 Your Telegram ID has been copied to clipboard.","applicationContactButton":"Contact Support","applicationServersButton":"Server Status","applicationHowToConnectFAQButton":"How to connect to VPN or Proxy?","applicationHowToConnectFAQButtonModal":"The bot has sent instructions to your private messages 📝","applicationCabinetTitle":"Account","applicationCabinetTitleDesc_title":"Click on order to manage it","applicationCabinetTitleOrder":"Select a Plan","applicationCabinetTitleOrder_detail_back":"Back to plans list","applicationCabinetTitleOrder_help_button":"⚠️ Help me choose a plan ⚠️","applicationCabinetTitleOrder_help_button_back":"Back to ordering","applicationCabinetTitleOrder_help_button_header":"Average traffic consumption:","applicationCabinetTitleOrder_help_button_desc":"<font color=red>YouTube</font>: 1 hour of video at 1440p ≈6 GB\\n<font color=#E10070>Instagram</font>: 1 hour of Reels ≈2 GB\\n<font color=#69C9D0>TikTok</font>: 1 hour of video ≈2 GB\\n<font color=#7289DA>Discord</font>: 1 hour of voice with stream ≈1 GB\\n<font color=#BD37FF>Twitch</font>: 2 hours of stream at 1080p ≈5 GB\\n<font color=#D0A823>Online games</font>: 1 hour ≈0.5 GB\\n<font color=#E50914>Netflix</font> / <font color=#00A859>HDRezka</font>: 2 hours at 1080p ≈5 GB\\n\\nAdding these up gives <font color=#DA7F00>≈20-25 GB per day</font>. These figures are estimates to help you choose the right plan.\\n\\n<font color=#A7C800>VPN and Proxy — both are convenient.</font>\\n<font color=#BAD821>VPN:</font> ideal for smartphones, tablets, and TV; can be used on PC too.\\n<font color=#BAD821>Proxy:</font> suitable for Discord, PC browser (YouTube, Twitch, Netflix, HDRezka, etc.).\\n<font color=#B3D023>Protocols briefly:</font>\\n<font color=#2EB3FF>• Vless</font> - best for bypassing blocks, stability, speed, “invisibility”.\\n<font color=#2BA4EA>• Shadowsocks</font> - lightweight, fast, ideal for gaming.\\n<font color=#2793D2>• Socks</font> - IP change with minimal ping.\\n<font color=#2884BA>• HTTPS</font> - suitable only for websites and apps via Proxifier.\\n\\n🚀 Start — for basic browsing\\n🎮 Gamer — for active users\\n👑 Family+ — for high traffic volumes","applicationCabinetButtonNew":"Create New Order","applicationCabinetButtonNewCancel":"Back to orders list","applicationCabinetButtonAddBalance":"Top up balance","applicationCabinetIsTrial":"Free Trial Access","applicationCabinetPing":"Ping to server: %1%ms","applicationCabinetEndActive":"Subscription access until: %1%","applicationCabinetEndNotActive":"Subscription not paid. Click here and activate it via the «⌛️ Renew Order» button in the dropdown menu.","applicationCabinetOrderTraficWeek":"per week","applicationCabinetOrderTraficMonth":"per month","applicationCabinetOrderPriceDay":"/ day","applicationCabinetOrderPriceDays":"/ %1% days","applicationCabinetOrderPrice":"%1% for %2% days 🌐 %3% %4%","applicationCabinetOrderDetails":"📋 View plan details 📋","tarif_desc_drive":"📚 Perfect for getting to know our service and light social media browsing. Allows you to fully test VPN / Proxy work 😉","tarif_desc_start":"📚 Suitable for social media and light smartphone use with average screen time ≈4h per day. On PC, the monthly limit may be consumed faster; consider your activity.","tarif_desc_gamer":"🎮 For those who spend active time on PC:<br/><font color=#DA7F00>•</font> Games via Steam and other launchers<br/><font color=#DA7F00>•</font> Voice communication in messengers for gamers with reliable connection via Proxy<br><font color=#DA7F00>•</font> Watching Twitch with 7TV plugin at 1080p and higher<br/><font color=#DA7F00>•</font> YouTube and other social networks where a secure connection is important\\n\\n✅ This traffic is enough for smartphone and PC with active use of ≈5-6 hours per day.","tarif_desc_unlim":"🚀 Plan for high traffic volumes and any tasks: PC, laptops, smartphones, tablets, TV, and other devices.\\n\\n🧡 One key can be used on multiple devices — this traffic is enough for family and your friends!","tarif_desc_ultra":"💠 Premium plan for a wide range of tasks and very active users!\\n\\nSuitable for those approaching the 1 TB limit and wanting to use the service without worrying about traffic.\\n\\n💜 With this option, you can safely download large files, stream, play, and use VPN / Proxy on a dozen devices.","applicationCabinetOrderBack":"Back","applicationCabinetOrderSelect":"☑️ Order this plan ☑️","applicationCabinetOrderSelectTrial":"🎁 Activate trial access for %1% hours 🎁","applicationCabinetOrderSelectTrialAccept":"🎁 Get trial access for %1% hours as a bonus?","applicationCabinetOrderSelectAccept":"Confirm action ✅\\nAmount to be deducted: %1%\\n\\n💰 You currently have: %2%","applicationCabinetOrderTrial":"🎁 %1%-hour trial period available","applicationCabinetOrderTrialUsed":"You have already used the trial access 🙁","applicationCabinetOrderSelectErrTimeMax":"Maximum renewal period: 2 months","applicationCabinetOrderSelectErrBalance":"Insufficient funds on internal balance for the order 🙁","applicationCabinetOrderSelectErrTrialCfg":"This plan cannot be ordered in trial mode 🙁","applicationCabinetOrderSelectErrTrial":"You have already used this trial plan 🙁","applicationCabinetOrderSelectErrTrialTgRequired":"🎁 Trial period is available only for users authorized via Telegram. Please log in via Telegram (or link Telegram in Settings) and try again.","applicationCabinetOrderSelectSuccess":"Order completed successfully 🎉","applicationCabinetOrderSelectSuccessTrial":"Trial order completed successfully 🎉","applicationCabinetOrderSelectErrOrder":"Failed to create your order 😕","applicationCabinetOrderEditChangeTarif":"♻️ Change plan ♻️","applicationCabinetOrderEditChangeTarifCurrent":" ❗️ This is current plan","applicationCabinetOrderEditChangeTarifNewDays":"<font color=#07D400>After changing the plan, your order will have<br>approximately %1% left</font><br>days:hours:minutes:seconds<br><br>Press the button below to confirm","applicationCabinetOrderEditChangeTarifExpired":"❌ Cannot change plan for an expired order. You must first renew it (make it active) and then change the plan. Connection time will be recalculated based on the chosen plan.","applicationCabinetOrderEditChangeTarifDesc":"<font color=#FA7900>You can change the plan every %1% h.</font><br><br>When changing the plan, remaining days from the previous order are transferred to the new one considering current price and remaining time.","applicationCabinetOrderEditChangeTarifDescErr":"<font color=#07D400>You have recently changed the plan!</font><br>Next change will be available in<br>%1%","applicationCabinetOrderEditChangeTarifButton":"♻️ Confirm change to selected plan ♻️","applicationCabinetOrderEditChangeTarifButtonAccept":"♻️ Are you sure you want to change to the selected plan?\\n\\n⚠️ Note that the next plan change will only be available in %1% h.","applicationCabinetOrderEditAuto":"Order auto-renewal","applicationCabinetOrderEditAutoOn":"✅ Active","applicationCabinetOrderEditAutoOff":"❌ Not active (in ⚙️Settings)","applicationCabinetOrderEditAutoDesc":"When the order expires, if you have sufficient funds, the system will automatically renew it if auto-renewal is enabled.","applicationCabinetOrderEditResetTime":"Traffic reset","applicationCabinetOrderEditCreated":"Order activated","applicationCabinetOrderEditSpent":"Total spent","applicationCabinetOrderEditOverTime":"Subscription active until","applicationCabinetOrderChangeTarif":"♻️ Change Plan","applicationCabinetOrderEditParams":"⚙️ Settings","applicationCabinetOrderEditParamsTitle":"⚙️ Order Settings: %1%","applicationCabinetOrderEditParamsLabel":"🔸 Order Label","applicationCabinetOrderEditParamsLabelDesc":"You can add labels to your orders to easily identify where each is used","applicationCabinetOrderEditParamsPassword":"🔸 Your connection password (4-12 characters)","applicationCabinetOrderEditParamsIP":"🔸 IP address for passwordless access","applicationCabinetOrderEditParamsIPDesc":"In this field, you can specify your personal IP address (getting it from 2ip.io, for example) to access our Proxy server without entering a login and password where required. This is more convenient and equally secure.\\n⚠️ Important: this function does not work when connecting to the backup RF server.","applicationCabinetOrderEditParamsIPDesc1":"To secure the Proxy connection, we have generated a random password. If necessary, you can change it. It is required for authentication via login and password where needed.","applicationCabinetOrderEditSave":"✔️ Save all changes ✔️","applicationCabinetOrderEditSaveOk":"Changes successfully applied ✅","applicationCabinetOrderEditSaveFail":"❌ Settings were not saved. %1%","applicationCabinetOrderEditLinkVpn":"📚 VPN Instructions","applicationCabinetOrderEditLinkProxy":"📚 Proxy Instructions","applicationCabinetOrderEditResetPass":"🔄 Reset Proxy Password","applicationCabinetOrderEditResetPassAccept":"🔄 Are you sure you want to reset the password?\\n\\nThe old password will stop working, and you will need to reconfigure the Proxy connection!","applicationCabinetOrderEditLinkAccept":"💬 A message with details and instructions for connecting to our VPN / Proxy has been sent to you.","proxyInstructionReserveItem":"%1% *%2%*: `%3%`\\n🌐 *HTTPS / Socks5 port*: `%4%`\\n🌐 *HTTP port*: `%7%`\\n%5%\\n🔑 *Password*: `%6%`","proxyInstructionReserveSubItem":"👤 *Login* %1% » %2%: `%3%`","proxyInstruction":"Instructions for Proxy connection:\\n\\n%1%\\nWe provide access to Proxy in all our locations at once. ✅ *We recommend trying the direct connection to the European server first.* If it works incorrectly — try the SPB » Europe method.\\n\\n\\n*Data for direct Proxy connection:*\\n%2%\\n🌐 HTTPS / Socks5 port: `%3%`\\n🌐 HTTP port: `%4%`\\n👤 Login: `%5%`\\n🔑 Password: `%6%`\\n\\n\\n*For some RF clients:*\\n_(redirects traffic via RF if direct connection to Europe is unavailable. In this mode, be sure to use the correct login from the block below — it is different)_\\n%7%\\n\\n\\n*For working with Proxy connection:*\\n🎙 Discord: [RocketMan Discord Proxy Bridge](https://github.com/RocketMan-System/DiscordProxyBridge_public/releases/latest) — [Instructions](https://telegra.ph/Kak-zapustit-Discord-cherez-proksi-04-13)\\n🔎 Chrome: [SwitchyOmega 3](https://chromewebstore.google.com/detail/proxy-switchyomega-3-zero/pfnededegaaopdmhkdmcofjmoldfiped), [Smart Proxy](https://chromewebstore.google.com/detail/smartproxy/jogcnplbkgkfdakgdenhlpcfhjioidoj?hl=ru) — [Instructions](https://telegra.ph/Kak-podklyuchitsya-k-proksi-v-Web-Brauzere-04-13)\\n💻 PC on Windows and macOS: [Proxifier](https://www.proxifier.com/) — [Instructions](https://telegra.ph/Kak-zapustit-prilozheniya-na-Windows-cherez-proksi-04-13)","vpnInstruction":"Instructions for VPN connection:\\n\\n%1%\\nWe provide access to VPN in all our locations! *Each link below = personal key*, and a page with connection instructions. \\n✅ *We recommend adding Vless from Multi-link first*, if it works incorrectly — try other protocols or the backup option.\\n\\n\\n\\n🔹 *Simple explanation for beginners:*\\n▪️ Click [this link](%5%) and follow the instructions.\\n\\n▪️ If you are in RF and the VPN from the link above doesn\'t work, [then click this link](%6%). In this case, you will connect to European servers via a Russian one for masking.\\n\\n\\n\\n🔸 *For advanced users*:\\n🌏 All locations in multi-link\\n- %2%\\n\\n*For some RF clients:*\\n%3%\\nThis method is for those who don\'t have a direct connection to European servers and need a workaround via a Russian server.\\n\\n*Direct access to location on all protocols:*\\n%4%","vpnInstructionAll":"All protocols at once","vpnInstructionNode":"%1% [%2%](%3%)","vpnInstructionEurope":"🇪🇺 Europe","applicationCabinetOrderEditLinkAcceptTextUnified":"%1%\\n\\n🔑 *Your personal VPN access key*\\n\\nAll connection data and the list of recommended apps are available at the link:  \\n👉 [Open connection link](%2%)\\n\\n⚠️ *Keep this link secret!* \\nIt is your personal authorization key for the VPN.\\n\\n✅ To activate subscription:  \\nCopy the link and paste it into your chosen app — current settings will load automatically.\\n\\n📦 Want to manage all orders?  \\nUse [🔑 the subscription link for all connections](%4%).\\n\\n───────────────\\n🌐 *Your Proxy connection data:*\\n🌐 *Server address:* `%6%%7%`\\n🌐 *HTTP port:* `%8%`\\n🌐 *HTTPS port:* `%9%`\\n🌐 *Socks5 port:* `%14%`\\n👤 *Your login:* `%10%`\\n🔑 *Connection password:* `%5%`\\n\\n⚠️ If the main server is unavailable, you can connect to the backup server:  \\n%11% *Server address:* `%12%`  \\n🌐 *HTTPS port:* `%9%`  \\n👤 *Your login:* `%13%.%10%`  \\n🔑 *Connection password:* `%5%`\\n\\n💡 Proxy can be used in any application that supports Proxy connection.  \\nFor example, *for Chrome browser*, we recommend extensions:  \\n• Proxy SwitchyOmega V3 — https://chromewebstore.google.com/detail/proxy-switchyomega-v3/hihblcmlaaademjlakdpicchbjnnnkbo  \\n• SmartProxy — https://chromewebstore.google.com/detail/smartproxy/jogcnplbkgkfdakgdenhlpcfhjioidoj?hl=uz\\n\\n───────────────\\n*VPN connection instructions:* \\n💻 [Windows / macOS](https://telegra.ph/Kak-podklyuchitsya-k-VPN-s-Windows--mac-OS-04-13)  \\n📲 [iOS / Android](https://telegra.ph/Kak-podklyuchitsya-k-VPN-s-iOS--Android-04-13)  \\n📺 [Android TV](https://telegra.ph/Kak-podklyuchitsya-k-VPN-s-Android-TV-04-13)\\n\\n───────────────\\n*How to connect to Proxy:* \\n🎧 [Discord](https://telegra.ph/Kak-zapustit-Discord-cherez-proksi-04-13)  \\n🖥 [Windows apps](https://telegra.ph/Kak-zapustit-prilozheniya-na-Windows-cherez-proksi-04-13)  \\n🌍 [Web Browser](https://telegra.ph/Kak-podklyuchitsya-k-proksi-v-Web-Brauzere-04-13)\\n","applicationCabinetOrderEditLinkAcceptTextOrderData":"💬 Order data `%1%`\\n⌛️ Plan: `%2%`\\n⚙️ Auto-renewal: %3%\\n\\n%4%","applicationCabinetOrderEditLinkAcceptTextOrderDataReset":"❗️❗️❗️ Attention! Be sure to update the configuration in the settings of the app where you use this order.\\n\\n","applicationCabinetOrderEditLinkAcceptTextOrderDataRenewYes":"✅ Enabled","applicationCabinetOrderEditLinkAcceptTextOrderDataRenewNo":"❌ Disabled","faqButtonCommand":"🔑 Our VPN and Proxy can be used on a wide list of devices with *no limits on the number of connections* to a single access key! Setup is very simple and takes no more than two minutes, after which everything is reduced to an ON/OFF button.\\n\\n✅ Once you place your first order _(including the trial)_, you will receive two messages with details and instructions for connecting to both VPN and Proxy.\\n\\n\\n📦 *If you don\'t have an order yet:*\\n[Launch the app](https://t.me/rocketman_vpn_bot/?startapp) ➛ Account ➛ Create new order ➛ Choose a suitable one by clicking on it and proceed to plan details ➛ Order.\\n\\n\\nIf you have any questions, contact us via the app, we will definitely help ❤️","applicationCabinetOrderEditPay":"⌛️ Renew order (for %1% days for %2%)","applicationCabinetOrderEditPaySuccess":"🎉 Order successfully renewed for %1% days.\\n\\nOrder status will be updated within a few minutes.","applicationCabinetOrderEditPayErr":"Failed to renew order 🙁","applicationCabinetOrderRemove":"Delete order","applicationCabinetOrderRemoveFailed":"❌ Cannot delete an active order!","applicationCabinetOrderRemoveConfirm":"Are you sure you want to delete the order? 🤨\\n\\nIf needed, you can always create a new order. If you have issues with the order, contact our support service, and we\'ll be happy to help!","applicationCabinetOrderRemoveConfirmMessage":"✅ Order successfully deleted!","applicationCabinetOrderRemoveConfirmMessageErr":"❌ Failed to delete order!","applicationCabinetPlatformProxy":"HTTPS Proxy","applicationCabinetPlatformProxy1":"Protocols: %1%","applicationCabinetPlatformLabel":"🏷️ %1%","paymentSuccess":"💸 Your balance has been topped up by %1%","applicationAdminUsers":"👥 Users (x%1%)","applicationAdminUsersActive":"🫂 Active users (x%1%)","applicationAdminUserBalance":"💸 %1%","applicationAdminUserBalanceFull":"💸 Current balance: %1% | %2% USD","applicationAdminUserRef":"Referrals (x%1% | %2%)","applicationAdminUserRefTarget":"Referral from","applicationAdminUserOrders":"📦 Orders (x%1% total | x%2% active)","applicationAdminUserRefs":"💸 Referrals (x%1% total)","applicationAdminUserPayments":"💸 Payments (x%1% total) | Credited %2%","applicationAdminUserPaymentsType":"Payment system: %1%","applicationAdminUserPaymentsStatus":"Payment status: %1%","applicationAdminUserPaymentsStatusSetFail":"🔄 Cancel payment and deduct amount from balance","applicationAdminUserPaymentsStatusSetFailAccept":"Are you sure?\\n\\nIf confirmed, payment status will change and\\n\\n❌ %1% will be deducted from user\'s balance","applicationAdminUserPaymentsStatusSetOk":"✅ Confirm payment and credit amount to balance","applicationAdminUserPaymentsStatusSetOkAccept":"Are you sure?\\n\\nIf confirmed, payment status will change and\\n\\n✅ user\'s balance will be topped up by %1%","applicationAdminUserPaymentsStatusSetOkAcceptDone":"Action performed successfully ✅","applicationAdminUserPaymentsStatusSetOkAcceptFail":"Action failed!\\nServer response: %1%","applicationAdminUserCreated":"Created: %1%","applicationAdminUserUpdated":"Modified: %1%","applicationAdminUserLast":"🚪 Last login: %1%","applicationAdminUserOrdersTotal":"💰 Total top-ups: %1%","applicationAdminUserResetOrderChangeBlock":"Reset stuck order lock","applicationAdminUserResetOrderChangeBlockAccept":"Are you sure you want to reset the stuck order lock?","applicationAdminUserMedia":"Partner Program","applicationAdminUserMediaOn":"Status: ✅ Partner","applicationAdminUserMediaOff":"Status: ❌ NOT Partner","applicationAdminUserMediaConfirm":"Status: ❌ NOT Partner","applicationAdminUserMediaTotal":"Total income: %1%","applicationAdminUserMediaPayed":"Paid to partner: %1%","applicationAdminUserMediaPayWait":"Amount to be paid: %1%","applicationAdminUserMediaPayWaitButton":"💸 Mark payout","applicationAdminUserMediaPayWaitButtonAccept":"Are you sure you want to mark the payout as completed? Transaction amount %1% (%2%)\\n\\n💸 After confirmation, the user will be notified that the funds have been paid and are on their way.","applicationAdminUserMediaPayWaitNotify":"Dear partner! \\n\\n💸 An amount of *%1%* has been paid to you under the partner program. Funds are on their way and will take some time to reach your credentials.","applicationAdminUserMediaPercent":"%2%%1%% Percentage of referral to income","applicationAdminUserMediaPercentDesc":"This percentage indicates how much of the referral top-up will be paid to the user as partner program income","applicationAdminUserGiveOrder":"Give order to user","applicationAdminUserGiveOrderDays":"Number of days","applicationAdminUserGiveOrderButton":"Give","applicationAdminUserGiveOrderButtonConfirm":"You are about to give the order\\n\\"%1%\\"\\nto user for %2% days?","applicationAdminUserEditButton":"User Management","applicationAdminUserEditPromos":"Used promo codes: %1%","applicationAdminUserEditBalance":"Edit balance","applicationAdminUserAddBalance":"Add to balance","applicationAdminUserEditBalanceAccept":"Are you sure you want to edit the user\'s balance?","applicationAdminUserEditBalanceAcceptFail":"Failed to edit balance. The user\'s balance might have changed during editing\\nServer response: %1%","applicationAdminUserEditBalanceAcceptOk":"Balance successfully edited","applicationAdminUserEditBalanceChangeNotify":"Administrator changed your balance to *%1%*.\\n💰 Current balance: *%2%*\\n\\n🚀 [Launch the app](https://t.me/rocketman_vpn_bot/?startapp)","applicationAdminUserEditBalanceAddNotify":"Administrator added *%1%* to your balance.\\n💰 Current balance: *%2%*\\n\\n🚀 [Launch the app](https://t.me/rocketman_vpn_bot/?startapp)","applicationAdminSearch":"Search","applicationAdminOrders":"🛒 All orders (x%1%)","applicationAdminOrdersActive":"💳 Active orders (x%1%)","applicationAdminOrdersExpired":"⛔ Stopped orders (x%1%)","applicationAdminOrderName":"🛒 %1%","applicationAdminOrderOwner":"👤 %1%","applicationAdminOrderTarif":"🏷️ %1% days","applicationAdminOrderNode":"🔖 %1%","applicationAdminOrderData":"Traffic: %1%","applicationAdminOrderBlockChangeTarif":"⛔ Plan change lock","applicationAdminOrderReload":"Reload MarzBan data","applicationAdminOrderReloadAccept":"⚠️ Reload data?\\n\\nThis will load order data from MarzBan and update it in the app!","applicationAdminOrderReloadAcceptDone":"✅ Data reload request sent!","applicationAdminOrderReloadAcceptFail":"❌ Failed to reload order data!","applicationAdminOrderResetChangeTime":"Reset plan change time","applicationAdminOrderResetChangeTimeAccept":"Are you sure? Once confirmed, the user will be able to change the plan manually","applicationAdminOrderResetChangeTimeAcceptOk":"✅ Request successful. User can now change the plan manually","applicationAdminOrderResetTraffic":"Reset traffic","applicationAdminOrderResetTrafficAccept":"⚠️ Cancel order?\\n\\nThe user will NOT receive a notification!","applicationAdminOrderResetTrafficAcceptOk":"✅ Done","applicationAdminOrderReturn":"Cancel order","applicationAdminOrderReturnAccept":"⚠️ Cancel order?\\n\\nThe user WILL receive a refund for the UNUSED period!","applicationAdminOrderReturnAcceptDone":"⚠️ Order deleted. %1% refunded to user\'s balance.","applicationAdminOrderReturnNotify":"⚠️ Administrator canceled your order\\n🛒 `%1%` and returned *%2%* to your balance.\\nYou can create a new order to stay connected to the free Internet by visiting the app.\\n\\n🚀 [Launch the app](https://t.me/rocketman_vpn_bot/?startapp) ⇒ Account ⇒ Create New Order","applicationAdminOrderRemove":"Delete order","applicationAdminOrderRemoveAccept":"⚠️ Delete order?\\n\\nIf the order is still active, funds WILL NOT be returned!","applicationAdminOrderRemoveAcceptDone":"Order deleted","applicationAdminOrderAddTime":"Extend order (%1% days)","applicationAdminOrderAddTimeAccept":"⚠️ Extend order (%1% days)?\\n\\nThis will NOT change the user\'s balance!","applicationAdminOrderAddTimeAcceptNotify":"🎉 Administrator extended your order\\n🛒 `%1%` for *%2% days* 📆\\n\\n🚀 [Launch the app](https://t.me/rocketman_vpn_bot/?startapp) ⇒ Account ⇒ Click on the specified order for details.","applicationAdminPromos":"🎁 Promo codes (x%1%)","applicationAdminPaymentsLast":"⏰ Last payments (x%1%)","applicationAdminPaymentsLastSuccess":"💵 Last successful payments (x%1%)","applicationAdminPromosCreate":"Create promo code","applicationAdminPromoID":"Name: %1%","applicationAdminPromoUSED":"Uses: %1%","applicationAdminPromoCOUNT_USE":"Limit: %1%","applicationAdminPromoBALANCE":"Amount: %1%","applicationAdminPromoEditID":"Name","applicationAdminPromoEditCOUNT_USE":"Usage count (max)","applicationAdminPromoEditAMOUNT":"Amount in $","applicationAdminPromoEditCATEGORY":"Category","applicationAdminPromoEditCATEGORYEmpty":"Regular / no category","applicationAdminPromoEditCATEGORYMedia":"Media promo","applicationAdminPromoEditCATEGORYNew":"For newcomers","applicationAdminPromoEditSave":"Save promo code","applicationAdminPromoEditPromo":"Edit","applicationAdminPromoCategory":"Category: %1%","applicationAdminPromoSendUseList":"List of users who applied","applicationAdminPromoRemovePromo":"Delete","applicationAdminPromoRemovePromoAccept":"Are you sure?","applicationAdminAddNode":"Add new node","applicationAdminAddNodeDesc":"This section allows you to deploy the entire project on a new node in 2 clicks. It only installs everything needed, but does not add the node to the nodes list","applicationAdminAddNodeIP":"Server IP address","applicationAdminAddNodeHostname":"Server subdomain (s1, s2, etc., without dot)","applicationAdminAddNodeHostnameDesc":"The specified subdomain will be automatically set in CloudFlare with all parameters. If it exists, it will be overwritten.","applicationAdminAddNodeUsername":"Username (root)","applicationAdminAddNodePassword":"User password (root)","applicationAdminAddNodePasswordDesc":"If password is not specified, SSH key authorization will be used. Ensure your SSH key is added to the node.","applicationAdminAddNodePasswordKeyInfo":"Attention. Password not specified, SSH key authorization will be used. Ensure your SSH key is added to the node.","applicationAdminAddNodeSshPort":"SSH Port (22)","applicationAdminAddNodeGhUsr":"Github username","applicationAdminAddNodeGhToken":"Github token","applicationAdminAddNodeGhTokenDescScopes":"Required permissions: repo (full), workflow, write:packages, read:packages, read:user","applicationAdminAddNodeGhTokenDesc":"Click to get token","applicationAdminAddNodeStart":"Perform deploy","applicationAdminAddNodeStarted":"Deploy process started, do not close the page. If not finished in 5 minutes, it might be stuck.","applicationAdminAddNodeDoneOk":"Deploy completed successfully","applicationAdminAddNodeDoneFail":"Error: %1%","applicationAdminAddNodeClearLogs":"Clear logs","applicationAdminInstallNode":"Node Deployment","applicationAdminCoreSettings":"Core Settings","applicationAdminCoreSettingsDesc":"This section allows configuring basic system parameters. Parameters are applied on the fly.","applicationAdminSaveCoreSettings":"Save settings","applicationAdminCoreSettingsSaved":"Settings saved successfully","applicationAdminCoreName.projectName":"Project name","applicationAdminCoreName.projectMain":"Main domain","applicationAdminCoreName.projectBot":"Project bot login","applicationAdminCoreDesc.projectBot":"Which bot interacts with users. Enter login without @","applicationAdminCoreName.admins":"Admins IDs","applicationAdminCoreDesc.admins":"Enter IDs separated by commas, no spaces. Example: `123456789,987654321`. Don\'t delete yourself!)","applicationAdminCoreName.backup_admins":"Admins IDs for backups","applicationAdminCoreDesc.backup_admins":"Bot will send backups to these admins. Enter IDs separated by commas. Example: `123456789,987654321`","applicationAdminCoreName.order_end_limit_month":"Max renewal period (in months)","applicationAdminCoreDesc.order_end_limit_month":"User cannot renew order for a period longer than specified","applicationAdminSendMessage":"Bulk Message","applicationAdminSendMessageTargets":"Number of people to receive the message","applicationAdminSendMessageType":"User filtering type","applicationAdminSendMessageTypeAll":"All users","applicationAdminSendMessageTypeOrders":"Specific orders (any)","applicationAdminSendMessageTypeOrdersActive":"Specific orders (active)","applicationAdminSendMessageTypeHas":"Has at least 1 order","applicationAdminSendMessageTypeNotHas":"Has no orders","applicationAdminSendMessageTypeHasActive":"Has at least 1 active order","applicationAdminSendMessageTypeHasUnActive":"Has at least 1 INactive order","applicationBalanceErr":"Error generating payment: %1%","applicationBalanceErrBalanceLimit":"Your account already has the maximum allowed amount (%1%)","applicationBalanceErrBalanceLimitButton":"Unavailable","applicationBalanceErrData":"Payment system failed to generate payment. Please try later.","applicationBalanceErrNetwork":"Network error. Please try later.","applicationBalanceErrCurrency":"Currency error. Please try later.","applicationBalanceErrAuth":"Auth error","applicationBalanceErrPaymentLink":"Failed to get payment link","applicationBalanceSettingsTitle":"Currency selection","applicationBalanceTitle":"Balance Top-up Section","applicationBalanceSelect":"Select display currency","applicationBalanceEmail":"Your email","applicationBalancePlatform":"Payment platform","applicationBalanceAmount":"Top-up amount (in %1%)","applicationBalanceAmountWithPercent":"\\n<font color=#00AE09>Total payment amount: ≈%1%</font>\\n\\n<font color=#F28100>If you are someone\'s referral,\\n%2% will be returned as 20% cashback!</font>","applicationBalanceAmountLimit":"Minimum amount: %1%\\nMaximum amount: %2%\\n\\n💵 <font color=#00AE09>Your payment method: %4%</font>\\nPayment system commission: %3%%\\n\\nAfter payment, balance is credited automatically within a few minutes; you will receive a message with payment status.","applicationBalanceAmountDesc":"Top-up via %1% service","applicationBalanceAmountButton":"Go to payment page","applicationBalanceAmountButtonLoading":"Loading...","applicationBalanceAmountButtonErr":"❌ Invalid amount ❌","applicationBalanceCurrency":"Payment method","applicationBalanceCurrencyDesc":"Payment system commission: ≈%1%%","applicationServersTitle":"Server Status","paymentCompleteNotify":"🎉 Your balance has been topped up by <b>%1%</b>.\\n\\nPayment ID: <b>%2%</b>\\n(Required if contacting <a href=\\"https://t.me/rocketman_vpn\\">support</a>).\\n\\n🚀 <a href=\\"https://t.me/rocketman_vpn_bot/?startapp\\">Launch App</a>","paymentCompleteNotifyRef":"🎉 Your balance has been topped up by <b>%1%</b>.\\nAs a referral of @%4%, we credited a bonus of <b>%3%</b> (%5%%)\\n\\nPayment ID: <b>%2%</b>\\n(Required if contacting <a href=\\"https://t.me/rocketman_vpn\\">support</a>).\\n\\n🚀 <a href=\\"https://t.me/rocketman_vpn_bot/?startapp\\">Launch App</a>","paymentCompleteNotifyRefHost":"🎁 Referral System:\\n💵 You received a bonus of <b>%1%</b> (%3%%) for balance top-up by your referral @%2%\\n\\n🚀 <a href=\\"https://t.me/rocketman_vpn_bot/?startapp\\">Launch App</a>","paymentCompleteNotifyAdmin":"💵 User %1% [UID: %7%] topped up balance by <b>%2%</b>.\\n💰 Project net profit: +<b>%5%</b>\\n\\nPayment system: <b>%6%</b>\\nPayment ID: <b>%3%</b>\\nURL: %4%","paymentRefundNotify":"❗️ Attention ❗️\\nA refund request was formed for payment `%1%`.\\n\\nAs funds were returned in full, *%2%* was deducted from your app balance.\\n\\nIf you have questions, contact [support](https://t.me/rocketman_vpn).\\n\\n🚀 [Launch App](https://t.me/rocketman_vpn_bot/?startapp)","admin-nodes":"⛓ Nodes","admin-firewall":"📜 Firewall records (x%1%)","admin-firewall_add":"New firewall record","logRecord-title":"📊 Admin logs (x%1%)","logRecord-title-user":"📜 User logs (x%1%)","logRecord-log-time":"Created: %1%","logRecord-log-who":"Who","logRecord-log-target":"Target","logRecord-log-reason":"Text: %1%","logRecord-setPaymentStatus":"Change payment status %1%","logRecord-removePromo":"Delete promo code %1%","logRecord-editPromo":"Edit promo code %1%","logRecord-editBalance":"Edit balance (%1%$ -> %2%$)","logRecord-returnOrder":"Cancel order %1% (%2%$)","logRecord-addOrder":"Give order %1%","logRecord-payOrder":"Renew order %1% for %2% days","logRecord-partnerNotify":"Payout to partner %1% USD (%2%)","paymentMethodMorune":"Morune","paymentMethodMorune2":"SBP (Fast Payment System)","paymentMethodCrypto":"Cryptocurrency","paymentMethodTelegram":"Telegram","paymentMethodFreekassa":"Freekassa","errorUserDataAdminDetect":"Failed to detect user data for link formation. Possibly user blocked our bot 😐","partner_title":"🏆 Partner Program 🏆","partner_desc":"You are a participant in the partner program. In addition to the referral bonus, you will receive financial deductions.\\n\\nYour current rate - %1%% of referral balance\\n\\nTotal earned: %2%\\nCurrent balance: %3%","ref_title":"🏆 Referral System 🏆","ref_desc":"Invite friends and acquaintances and get bonuses on your balance!\\n\\n<font color=#2DA618>From each referral, you\'ll get <font color=#54E13B>%1%</font> for their first orders and <font color=#54E13B>%2%%</font> of all their top-ups.</font>\\n\\n<font color=#00B7B7>All your referrals will get <font color=#15DBDB>%3%</font> bonus after first order (including trial) and <font color=#15DBDB>%4%%</font> cashback on all future top-ups.</font>\\n\\nThis system is beneficial for both you and your referrals 😉","ref_stats":"Your Statistics","ref_stats_data":"Number of referrals: %1%\\nBonus received: %2%","ref_link_text":"Your referral data","ref_link_text_copy":"📋 Link+text","ref_only_link_copy":"🔗 Link","ref_link_text_copy_sendText":"Hi! I use a convenient way to protect my data online and highly recommend it to you 😎\\n\\nPlus, by using my link, you\'ll get a %1% bonus after your first order (including trial) and a lifetime %2%% cashback on all balance top-ups 🎉\\n","ref_link_text_copy_sendText_1":"✅","ref_link_text_copy_alert":"🔗 Your referral link and additional text copied to clipboard.\\n\\nUse this to invite friends and gain joint benefits 😎","ref_only_link_copy_alert":"🔗 Your referral link copied to clipboard.\\n\\nUse it to invite friends and gain joint benefits 😎","ref_link_text_share":"💌 Share","ref_link_text_share_message":"Hi! I use a convenient way to protect my data online and highly recommend it to you 😎\\n\\nPlus, by using my link, you\'ll get a %1% bonus after your first order (including trial) and a lifetime %2%% cashback on all balance top-ups 🎉\\n","ref_message_personal":"You cannot register using your own referral link 😐","ref_message":"🎁 Referral System:\\nYou successfully registered as a referral of user @%1% 🎉\\n\\nYou will get a <b>%2%</b> bonus on your first order (including trial) and a lifetime <b>%3%%</b> cashback on each top-up!","ref_message_host":"🎁 Referral System:\\n🎉 User @%1% registered as your new referral 🎉\\n\\nYou will get a <b>%2%</b> bonus on their first order (including trial) and a <b>%3%%</b> cashback from each of their top-ups.","ref_message_order":"🎁 Referral System:\\n💵 You received a bonus of <b>%1%</b> on your balance","ref_message_order_host":"🎁 Referral System:\\n💵 You received a bonus of <b>%1%</b> on your balance from user @%2%","traffic_limit_notify_close":"⚠️ Traffic is running out for order `%1%` with plan `%2%`! If this message appears often, consider changing to a more advanced plan to stay connected ❤️\\n\\n🚀 You can do this by [launching the app](https://t.me/rocketman_vpn_bot/?startapp) ⇒ Account ⇒ click on order ⇒ ♻️ Change Plan ♻️","traffic_limit_notify_end":"❗️ ATTENTION ❗️ Traffic exhausted for order `%1%` with plan `%2%`. It will reset on %3%. Consider upgrading to stay connected.\\n\\n🚀 [Launch the app](https://t.me/rocketman_vpn_bot/?startapp) ⇒ Account ⇒ click on order ⇒ ♻️ Change Plan ♻️","traffic_limit_notify_restore":"🎉 Traffic statistics reset for order `%1%` with plan `%2%`. It is now fully available again :)\\n\\n🚀 [Launch App](https://t.me/rocketman_vpn_bot/?startapp)","promo_button":"🎁 Apply Promo Code","example":"Example","deleteMessageFailed":"❌ Failed to delete message. It might be too old or already deleted.","cryptoPayTitle":"Payment via Cryptocurrency","cryptoPayUserId":"User ID","cryptoPayAmount":"Amount to pay (USDT)","cryptoPayInstruction":"Transfer the specified amount in USDT to the provided address","cryptoPayLoading":"Loading details...","cryptoPayErrorNoParam":"Parameter crypto_id is missing in the link.","cryptoPayErrorInvalidData":"Invalid payment data.","cryptoPayErrorParse":"Error processing payment data. Try refreshing or contact support.","cryptoPayWallet":"Wallet address for transfer","cryptoPayNetwork":"Network (blockchain)","cryptoPayCopy":"Copy","cryptoPayCopyAmountAlert":"Amount copied to clipboard!","cryptoPayCopyWalletAlert":"Wallet address copied to clipboard!","cryptoPayWarning":"CAREFULLY check credentials and amount before paying! We cannot guarantee credit in case of error.","telegramPayment":"✅ An invoice has been generated for you\\n\\n⚖️ Payment amount: <b>%1% %2%</b> (<b>%3% %4%</b>)\\n👤 User ID: <b>%7%</b>\\n📋 Payment ID: <b>%6%</b>\\n\\n🔗 Follow the link to pay: %5%","orderManipulationBlock":"Your previous order is still processing. Please wait for completion or contact support for help.","subPage.orderInfo":"Below are all available connection methods for your order through this app","subPage.userInfo":"Below are all available connection methods for all your active orders through this app","subPage.orderId":"🛒 Order ID: %1%\\n⬇️ Select end connection region:","subPage.nodeInfo":"📍 Bypass point: %1%\\n⚠️ This means all traffic will first go through it for masking.","subPage.protocolInfo":"Connection protocol: %1%","subPage.allTitle":"All Orders","subPage.expiredNotifyList":"❌ Subscription expired\\nRenew VPN in bot\\n%1%","ping.admin.initOk":"✅ System initialized, all nodes available in normal mode.","ping.admin.initFail":"❌ System initialized, but some nodes are unavailable. Offline nodes: %1%","ping.admin.checkFail":"❌ Attention! Node %1% did not respond to ping. Please check its status.","ping.admin.checkRestore":"✅ Node %1% restored functionality.","speedtest.admin.failTest":"❌ Attention! Speed test failed on node %1%. Please check its status.","speedtest.admin.slowspeedNotify":"⚠️ Attention, low connection speed recorded on node %1% (%2% Mbps download, %3% Mbps upload). Check status.","speedtest.admin.recoverNotify":"✅ Node %1% restored normal connection speed (%2% Mbps download, %3% Mbps upload).","applicationServersSpeedtestIssueDetected":"⚠️ Connection speed issues detected on the server","applicationServersSpeedtestLastSpeed":"Last speed test (%1%) D: %2% / U: %3%","applicationServersSpeedtestPrevSpeed":"Previous speed test (%1%) D: %2% / U: %3%","applicationServersSpeedtestLastSpeedNotFound":"⚠️ No speed tests performed on this server yet","applicationServersPingIssueDetected":"❌ Server not responding to ping requests","actionUpdateStartNodes":"⚠️ Node update procedure started (%1%), nodes will be restarted shortly. A notification will be sent upon completion.","actionUpdateStartHeader":"Update procedure started:","actionUpdateStartSite":"• Main project page is being updated","actionUpdateStartApp":"• Backend application is being updated","actionUpdateStartProxy":"• Proxy or xray service is being updated (Nodes: %1%)","actionUpdateStartMTProto":"• MTProto server is being updated","actionUpdateStartFirewall":"• Updating firewall (Nodes: %1%)","actionUpdateStartBackup":"• Updating child API interface (Nodes: %1%)","actionUpdateStartFooter":"Nodes will be restarted shortly. A notification will be sent upon completion.","actionUpdateCompletedNodes":"✅ Node update procedure (%1%) completed, nodes restarted and should be active","mtproto.title":"MTProto Proxy","mtproto.subtitle.1":"Fast and secure","mtproto.subtitle.2":"Telegram access","mtproto.description.1":"Free proxy server for a stable connection to Telegram.","mtproto.description.2":"No registration, no limits, full privacy.","button.connect":"Connect Proxy","button.copy":"Copy Link","button.copied":"Copied","link.label":"Manual connection link","feature.encryption.title":"End-to-end Encryption","feature.encryption.description":"Your messages remain confidential. We have no access to your chats.","feature.free.title":"No Limits","feature.free.description":"Free access with no registration or traffic limits.","feature.rocketman.title":"More Features","feature.rocketman.description":"This proxy works only for Telegram. For full protection, use RocketMan-VPN.","rocketman.title":"RocketMan VPN — Your reliable friend","rocketman.description":"This MTProto proxy is an additional project of RocketMan VPN. With us, you get full protection in all apps and favorite services. Try for free and evaluate the quality!","rocketman.button":"Open RocketMan VPN","howto.title":"How to connect?","howto.step1.title":"Click \\"Connect Proxy\\"","howto.step1.description":"Or copy the link and connect manually","howto.step2.title":"Open Telegram","howto.step2.description":"The link will automatically launch the app","howto.step3.title":"Confirm","howto.step3.description":"Click «Connect» in the dialog box","web.orders":"My Orders","web.settings":"Settings","web.exit":"Exit","web.back":"← Back","settings.accountInfo":"Account Info","settings.language":"Language","settings.currency":"Display Currency","settings.currencyDesc":"Select currency for prices and balance display in the app.","settings.webCredentials":"Web Login Details","settings.webCredentialsDesc":"These details are used for logging into the web interface outside Telegram. We recommend a complex password.","settings.login":"Login","settings.loginPlaceholder":"Enter new login","settings.newPassword":"New Password","settings.passwordPlaceholder":"At least %1% characters","settings.repeatPassword":"Repeat Password","settings.repeatPasswordPlaceholder":"Repeat new password","settings.passwordMismatch":"Passwords do not match","settings.saved":"Saved!","settings.saveError":"Save Error","settings.saving":"Saving…","settings.saveCredentials":"Save Credentials","settings.copy":"Copy","settings.reset":"Reset","settings.apiKeyHint":"Use API key to log in to the <a href=\\"https://%1%\\" target=\'_blank\'>web interface</a> without Telegram or for integration. Do not share with third parties.","settings.referral":"Referral (Inviter ID)","settings.referralDesc":"If you missed the referral link, you can set the ID of the inviter here. It will be applied only once.","settings.referralApplied":"Inviter ID","settings.referralAppliedAlert":"Inviter ID copied to clipboard.","settings.referralHostId":"Your inviter ID","settings.referralHostIdPlaceholder":"Enter inviter user ID (digits)","settings.referralHostIdInvalid":"Invalid ID format. Use digits only.","settings.referralApply":"Apply inviter ID","settings.referralSaved":"Referral applied!","settings.referralErr.already_applied":"Referral has already been applied.","settings.referralErr.invalid_ref_host":"Invalid inviter ID.","settings.referralErr.same_account":"You cannot use your own ID as a referral.","login.tabCredentials":"Login and Password","login.tabApiKey":"API Key","login.tabRegister":"Register","login.labelLogin":"Login","login.labelPassword":"Password","login.labelConfirmPassword":"Confirm Password","login.labelApiKey":"API Key","login.placeholderLogin":"Enter login","login.placeholderPassword":"Enter password","login.placeholderConfirmPassword":"Confirm password","login.placeholderApiKey":"Enter API key","login.signIn":"Sign In","login.signInApiKey":"Sign in via API Key","login.signUp":"Sign Up","login.signingIn":"Signing in…","login.signingUp":"Signing up…","login.orUseApiKey":"or use API Key","login.orUseCredentials":"or use Login and Password","login.switchToApiKey":"Log in via API Key","login.switchToCredentials":"Log in via Login and Password","login.errLoginRequired":"Enter login and password","login.errPasswordRequired":"Enter password","login.errConfirmPasswordRequired":"Confirm password","login.errPasswordMismatch":"Passwords do not match","login.errApiKeyRequired":"Enter API key","login.errIncorrect":"Incorrect login or password","login.errInvalidKey":"Invalid API Key","login.errServer":"Server error, try again","login.errRegistration":"Registration failed","login.tabTelegram":"Via Telegram","login.tg.title":"Telegram Login","login.tg.instruction":"1. Send the command below to <a href=\\"https://t.me/%1%\\" target=\\"_blank\\">@%1%</a> bot\\n2. After sending, click «Confirm Login»","login.tg.commandLabel":"Bot command:","login.tg.showCommand":"Show","login.tg.hideCommand":"Hide","login.tg.copyCommand":"Copy","login.tg.copied":"Command copied!","login.tg.timerLabel":"Code valid for: %1%","login.tg.timerExpired":"Code expired","login.tg.verifyButton":"Confirm Login","login.tg.verifying":"Verifying…","login.tg.requestNew":"Request new code","login.tg.loading":"Generating code…","login.tg.enter_correct":"Identity confirmed. Return to site and click \\"%1%\\" to finish","login.tg.enter_fail":"Action failed. Ensure the key is correct and not expired","login.tg.errNotSent":"Failed to confirm login. Ensure you sent the command to the bot. If expired, request a new code.","lang.ru":"Russian","lang.en":"English","lang.uk":"Ukrainian","footer.info":"MTProto proxy works only with official Telegram apps","instructionModalTitleVpn":"VPN Connection Instructions","instructionModalTitleProxy":"Proxy Connection Instructions","instructionModalSendToTg":"📩 Send to Telegram","instructionModalSentToTg":"Instructions have been sent to your Telegram private messages","settings.name":"Your Name","settings.nameDesc":"Enter a name for personalized communication in the app.","settings.namePlaceholder":"Enter name (3-15 characters)","settings.nameInvalid":"Only Cyrillic, Latin, numbers and spaces allowed (3-15 characters)","settings.promoTitle":"Promo Code Activation","settings.promoDesc":"If you have a promo code, enter it here to receive a nice bonus to your balance.","settings.promoPlaceholder":"Enter promo code","settings.promoApply":"Apply promo code","settings.promoApplied":"Promo code successfully applied!","adminDashboardTitle":"Dashboard Statistics","adminDashboardActiveOrders":"Orders Activity","adminDashboardActiveLabel":"Active","adminDashboardExpiredLabel":"Expired","adminDashboardOrdersByTariff":"Orders by Tariff","adminDashboardPayments":"Payments Status","adminDashboardTrial":"Trial Period Usage","adminDashboardLang":"User Language","adminDashboardCurrency":"User Currency","adminDashboardActivity":"App Activity","adminDashboardOrdersPerUser":"Orders Per User","adminDashboardRefIncome":"Median Referral Income","applicationAdminBackButton":"Back"}');
;// ./src/lang/uk.json
const uk_namespaceObject = /*#__PURE__*/JSON.parse('{"pagePayTitle":"Придбання VPN","pagePayBalance":"Поповнення балансу","pagePayID":"Ваш унікальний ID","pagePayIDPlaceholder":"Введіть свій ID","pagePayAmount":"Сума поповнення балансу (тимчасово від %1%)","pagePayButton":"Перейти до оплати","pageFAQId":"Як отримати ID?","pageFAQStep1":"Відкрийте додаток у чат-боті RocketMan-VPN","pageFAQStep2":"Внизу головної сторінки знайдіть пункт \\"Ваш ID\\"","pageFAQStep3":"Скопіюйте унікальний номер","pageFAQStep4":"Вставте ID у поле зліва","pageFAQOpen":"Відкрити Telegram-бота","pageFAQQR":"QR-код Telegram-бота","landingTGBotButton":"Запустити Telegram-бота","landingDashboardButton":"Відкрити панель керування","landingTarifs":"Тарифи","landingTarifsTrial":"+ Пробний період %1%год","landingTarifsDiscount":"Знижка","landingTarifsPrice":"%1%/%2%дн.","landingTarifsGo":"Підключити","landingFooterText":"А тут наш основний проєкт","landingTitle":"RocketMan VPN — Інтернет під захистом!","landingTitleDesc":"Блискавичний доступ до улюблених сайтів та сервісів з ПК та смартфона.","landingFeaturesTitle":"Чому обирають саме нас?","features1Title":"Анонімність","features1Text":"Завдяки кільком шарам захисту з нашого боку — Ваш реальний IP не дізнається жоден сервіс.","features2Title":"Швидкість","features2Text":"Завантажуйте, дивіться улюблений контент та діліться на швидкостях до 1 Гбіт/с.","features3Title":"Простота","features3Text":"Підключайтеся в 1 клік з будь-якого свого пристрою! ПК, смартфон, ТВ, планшет та ноутбук.","features4Title":"Підтримка","features4Text":"Ми завжди готові допомогти Вам з вирішенням будь-яких питань. На зв\'язку практично 24/7","faq1title":"Як оплатити?","faq1text":"Оберіть тариф та оплатіть через зручний метод. Після оплати отримайте інструкції в Telegram-боті.","faq2title":"Як налаштувати VPN?","faq2text":"У нашому <a href=\\"https://t.me/%1%\\" target=\'_blank\'>Telegram-боті</a> максимально детально та зрозуміло розписано весь процес підключення.\\nБуквально від А до Я, тому Ви навряд чи зможете десь заплутатися. Головне — дотримуйтесь інструкцій :)","faq3title":"Що робити, якщо щось не працює?","faq3text":"Напишіть у <a href=\\"https://t.me/%1%\\" target=\'_blank\'>підтримку через Telegram</a>, і ми Вам допоможемо.","locationSelectTitle":"Оберіть локацію сервера","locationSelectLoad":"Завантаженість: %1%%","locationReserve1":"Санкт-Петербург","locationLocal":"Локальний сервер","locationStockholm":"Стокгольм","locationAustria":"Відень","locationNetherland":"Амстердам","locationFrankfurt":"Франкфурт","locationParis":"Париж","tarif.test_drive":"🚗 Тест-драйв","tarif.start":"🚀 Старт","tarif.gamer":"🎮 Геймер","tarif.pro":"👑 Сімейна+","tarif.ultra":"🌌 Космос","httpTarifPro":"🔒 Proxy-Безліміт","httpTarifGamer":"🔒 Proxy-Геймер","tarifNameFull":"%1% (%2% днів | %3% GB/д) - %4%","welcomeMessage":"Ласкаво просимо!\\nЗавдяки нашому сервісу Ви зможете отримати захищений доступ до улюблених сайтів та додатків, як це роблять інші наші улюблені клієнти ❤️\\n\\n⭐️ У нас немає обмежень на кількість пристроїв, тому можете використовувати 1 ключ на всіх своїх девайсах! Разом із VPN Ви отримуєте доступ і до нашого Proxy.\\n\\n🛒 Ми надаємо:\\n- VPN для iOS, Android, Windows, macOS, Android TV\\n- Proxy для браузера, Discord, Windows тощо","basketBalance":"Поповнити баланс","secondsToStringD":"%4% дн. %3% год. %2% хв. %1% сек.","secondsToStringH":"%3% год. %2% хв. %1% сек.","secondsToStringM":"%2% хв. %1% сек.","readButton":"🗑 Видалити це повідомлення","expireNotifyOrderData":"▪️ Тариф: `%1%`\\n▪️ Назва: `%2%`\\n▪️ Термін продовження: `%3% днів`","expireNotifyTemplate":"Вітаємо, %1%!\\n%2%\\n\\n%3%\\n▪️ Вартість продовження: `%4%`\\n\\n%5%","expireNotifyFull":"Термін дії Вашого замовлення підійшов до кінця 🙁\\n\\nЩоб залишатися на зв\'язку з вільним Інтернетом — [запустіть додаток](https://t.me/rocketman_vpn_bot/?startapp), далі натисніть на 💸 свій баланс справа вгорі та, поповнивши його, у налаштуваннях замовлення увімкніть автопродовження 😇","expireNotifyTime":"Термін дії Вашого замовлення завершиться менш ніж через `%1%` годину 🙁","expireNotifyRenewAutoNoMoney":"❗️ У Вас увімкнена функція автопродовження, проте Ваш поточний баланс не дозволяє продовжити його 🙁\\n\\nПереконайтеся, що на рахунку достатньо коштів, щоб функція працювала без проблем протягом найближчих місяців. [Запустіть додаток](https://t.me/rocketman_vpn_bot/?startapp), у правому верхньому куті додатка натисніть на свій баланс та поповніть на бажану суму.","expireNotifyRenewAuto":"✅ У Вас увімкнена функція автопродовження, тому замовлення буде продовжено автоматично, коли на ньому залишиться менше 24 годин 😎","expireNotifyRenewManual":"ℹ️ Як увімкнити автопродовження?\\n🚀 [Запустіть додаток](https://t.me/rocketman_vpn_bot/?startapp) ⇒ Особистий кабінет ⇒ натисніть на своє замовлення ⇒ Налаштування ⇒ поставте галочку біля Автопродовження ⇒ Зберегти всі зміни.","expireNotifyRenewSuccessAuto":"Вітаємо, %1%!\\nВаше замовлення було продовжено автоматично.\\n\\n%2% 🎉\\n\\nДякуємо, що довіряєте нам ❤️\\nНайкращою подякою за сервіс буде інвайт Ваших друзів через реферальну систему!\\n\\n🚀 [Запустити додаток](https://t.me/rocketman_vpn_bot/?startapp)","commandIncorrect":"Команда використана невірно\\n`%1%`\\n\\n🚀 [Запустити додаток](https://t.me/rocketman_vpn_bot/?startapp)","commandIncorrectExample":"Команда `%1%` використана невірно!\\n\\n✅ Правильний приклад: `%2%`\\n\\n🚀 [Запустити додаток](https://t.me/rocketman_vpn_bot/?startapp)","useStartCommand":"Почати роботу","usePromoCommand":"Застосувати промокод — /promo PROMO_NAME","useFaqCommand":"Як підключитися до VPN / Proxy?","usePromoAlready":"Ви вже застосували цей промокод. Застосувати промокод можна лише 1 раз.\\n\\n🚀 [Запустити додаток](https://t.me/rocketman_vpn_bot/?startapp)","usePromoNotFound":"Промокод `%1%` не знайдено 🙁\\n\\nПеревірте правильність написання, а також переконайтеся, що промокод є дійсним.\\n\\n🚀 [Запустити додаток](https://t.me/rocketman_vpn_bot/?startapp)","usePromoUsedFull":"Ліміт активацій промокоду `%1%` вичерпано 🙁\\n\\n🚀 [Запустити додаток](https://t.me/rocketman_vpn_bot/?startapp)","usePromoUsedCategory":"Ви вже застосували подібний промокод.\\n\\n🚀 [Запустити додаток](https://t.me/rocketman_vpn_bot/?startapp)","usePromoErr":"Не вдалося застосувати промокод `%1%` 🙁\\n\\n🚀 [Запустити додаток](https://t.me/rocketman_vpn_bot/?startapp)","usePromoSuccess":"Промокод `%1%` успішно застосовано 🎉\\nНа Ваш баланс зараховано %2%\\n💰 Ваш поточний баланс: %3%\\n\\n🚀 [Запустити додаток](https://t.me/rocketman_vpn_bot/?startapp)","adminNoAccess":"У Вас немає доступу для виконання цієї дії.\\n\\n🚀 [Запустити додаток](https://t.me/rocketman_vpn_bot/?startapp)","adminMenuButton":"Меню адміна","adminMenu":"Розділ адміністратора\\n\\n\\nМеню промокодів\\nСписок промокодів: /listPromo\\nІнформація по промокоду: `/infoPromo {PROMO_NAME}`\\nСтворити промокод: `/createPromo {PROMO_NAME} {COUNT_USE} {DOLLARS}`\\nВидалити промокод: `/deletePromo {PROMO_NAME}`\\n\\n\\nМеню користувачів\\nВидати замовлення користувачу: `/giveOrder {USER_ID} {TARIF_ID} {DAYS}`\\nВидалити замовлення: `/removeOrder {ORDER_ID}`\\nВидати баланс користувачу: `/addMoney {USER_ID} {SUM_USD}`","adminUserRemoveOrderNotFound":"Замовлення не знайдено","adminUserRemoveOrderStatus":"Статус видалення замовлення: %1%","adminUserGiveTarifErrUser":"Користувача не знайдено!","adminUserGiveTarifErrTarif":"Тариф не знайдено","adminUserGiveTarifErrNode":"Нода тарифу не знайдена. Конфігурація тарифу невірна","adminUserGiveTarifErrMarzban":"MarzBan не дав створити замовлення. Причина невідома","adminUserGiveTarifSuccess":"Ви успішно видали замовлення для @%1%","adminUserGiveTarifNotify":"🎉 Адміністратор підключив на Ваш акаунт\\nтариф `%1%` на `%2% дн.` 📆\\n\\n*Інформація про замовлення:*\\n🚀 [Запустіть додаток](https://t.me/rocketman_vpn_bot/?startapp) ⇒ Особистий кабінет ⇒\\nнатисніть на своє замовлення ⇒ 📚 Інструкція VPN / Proxy","adminPromoCreateAlreadyExist":"Цей промокод уже існує","adminPromoCreateAlreadyExistWas":"Цей промокод уже колись існував і не може бути створений повторно","adminPromoCreateFailed":"Не вдалося створити промокод","adminPromoCreateDone":"Промокод `%1%` успішно створено.\\nДоступно активацій: %2%\\nБаланс: %3%","adminPromoList":"Список усіх промокодів:\\n\\n%1%","adminPromoListFormat":"`/infoPromo %1%` (%2% вик. / %3% всього / %4%)","adminPromoInfo":"Інформація по промокоду:\\n\\nID: `%1%`\\nЛіміт активацій: %2%\\nКількість активацій: %3%\\nБаланс: %4%\\n\\nСписок активацій:\\n%5%","adminPromoDeleteDone":"Промокод `%1%` успішно видалено","terms":"Угода користувача","contacts":"Контакти для зв\'язку","contactsTG":"Телеграм чат","contactsEmail":"E-Mail","trialNotify":"✅ Ви отримали тариф `%1%` на `%2% години` як ознайомлювальний доступ.\\n\\n📌 Інформація про замовлення в додатку:\\n🚀 [Запустіть додаток](https://t.me/rocketman_vpn_bot/?startapp) ⇒ Особистий кабінет ⇒\\nнатисніть на своє замовлення ⇒ 📚 Інструкція VPN / Proxy.\\n\\nМи надаємо Вам можливість безкоштовно ознайомитися з нашими продуктами для того, щоб Ви оцінили якість та стабільність перед майбутніми покупками 🤝","launchBot":"Запустити","launchBotLong":"Відкрити додаток 📱","applicationMainMenu":"Головне меню","applicationMainMenuBack":"Назад","applicationButtonsRef":"Реферальна система","applicationButtonsFaq":"Як використовувати VPN?","applicationButtonsCabinet":"Особистий кабінет","applicationButtonsAdmin":"Кабінет адміністратора","applicationButtonsAdminDisk":"Вільно дискового простору: %1%","applicationButtonsAdminPayments":"Статистика доходу:<br/>%1% поточний міс.<br/>%2% минулий міс.<br/>%3% за весь період | %4% в очікуванні","applicationUserInfoWithUs":"Ви з нами","applicationUserInfoBalance":"Ваш баланс","applicationUserInfoId":"Ваш ID","applicationUserInfoTgId":"ID Прив\'язаного акаунта TG","applicationUserInfoAPIKey":"Ваш API ключ","applicationUserInfoAPIKeyAlert":"📝 Ваш API ключ скопійовано в буфер обміну. Нікому не розголошуйте цей ключ, адміністрація проєкту ніколи не попросить вас назвати його","applicationUserInfoAPIResetAlertAsk":"📝 Ви впевнені, що хочете згенерувати новий API ключ?","applicationUserInfoAPIResetAlert":"📝 Ваш API ключ було згенеровано заново","applicationUserInfoIdAlert":"📝 Ваш ID був скопійований у буфер обміну.","applicationUserInfoTgIdAlert":"📝 Ваш Telegram ID був скопійований у буфер обміну.","applicationContactButton":"Зв\'язок зі службою підтримки","applicationServersButton":"Статус серверів","applicationHowToConnectFAQButton":"Як підключитися до VPN чи Proxy?","applicationHowToConnectFAQButtonModal":"Бот надіслав вам інформацію в особисті повідомлення 📝","applicationCabinetTitle":"Особистий кабінет","applicationCabinetTitleDesc_title":"Натисніть на замовлення для керування ним","applicationCabinetTitleOrder":"Вибір тарифного плану","applicationCabinetTitleOrder_detail_back":"Повернутися до списку тарифів","applicationCabinetTitleOrder_help_button":"⚠️ Допоможіть мені визначитися з тарифним планом ⚠️","applicationCabinetTitleOrder_help_button_back":"Повернутися до оформлення замовлення","applicationCabinetTitleOrder_help_button_header":"Середнє споживання трафіку:","applicationCabinetTitleOrder_help_button_desc":"<font color=red>YouTube</font>: 1 година відео в 1440p ≈6 ГБ\\n<font color=#E10070>Instagram</font>: 1 година Reels ≈2 ГБ\\n<font color=#69C9D0>TikTok</font>: 1 година відео ≈2 ГБ\\n<font color=#7289DA>Discord</font>: 1 година войсу з демкою ≈1 ГБ\\n<font color=#BD37FF>Twitch</font>: 2 години стріму в 1080p ≈5 ГБ\\n<font color=#D0A823>Онлайн ігри</font>: 1 година ≈0.5 ГБ\\n<font color=#E50914>Netflix</font> / <font color=#00A859>HDRezka</font>: 2 години в 1080р ≈5 ГБ\\n\\nЯкщо скласти всі вказані дані, то виходить <font color=#DA7F00>≈20-25 ГБ на день</font>. Ці дані наведені для орієнтиру, щоб Вам було простіше обрати відповідний тариф.\\n\\n<font color=#A7C800>VPN та Proxy — по-своєму зручні.</font>\\n<font color=#BAD821>VPN:</font> зручно для смартфонів, планшетів та ТВ; можна використовувати і на ПК.\\n<font color=#BAD821>Proxy:</font> підходить для Discord, браузера на ПК (YouTube, Twitch, Netflix, HDRezka тощо).\\n<font color=#B3D023>Коротко про протоколи:</font>\\n<font color=#2EB3FF>• Vless</font> — найкращий обхід блокувань, стабільність, швидкість, “невидимість”.\\n<font color=#2BA4EA>• Shadowsocks</font> — легкий, швидкий, ідеальний для ігор.\\n<font color=#2793D2>• Socks</font> — зміна IP з мінімальним пінгом.\\n<font color=#2884BA>• HTTPS</font> — підходить тільки для сайтів та додатків через Proxifier.\\n\\n🚀 Старт — для звичайного серфінгу\\n🎮 Геймер — для активних користувачів девайсів\\n👑 Сімейна+ — для великого обсягу трафіку","applicationCabinetButtonNew":"Зробити нове замовлення","applicationCabinetButtonNewCancel":"Повернутися до списку замовлень","applicationCabinetButtonAddBalance":"Поповнити баланс","applicationCabinetIsTrial":"Безкоштовний тестовий доступ","applicationCabinetPing":"Пінг до сервера: %1%ms","applicationCabinetEndActive":"Доступ до передплати: %1%","applicationCabinetEndNotActive":"Передплата не оплачена. Натисніть сюди та активуйте її через кнопку «⌛️ Продовжити замовлення» у випадаючому меню.","applicationCabinetOrderTraficWeek":"на тиждень","applicationCabinetOrderTraficMonth":"на місяць","applicationCabinetOrderPriceDay":"/ день","applicationCabinetOrderPriceDays":"/ %1% днів","applicationCabinetOrderPrice":"%1% за %2% дн 🌐 %3% %4%","applicationCabinetOrderDetails":"📋 Ознайомитися з деталями цього тарифу 📋","tarif_desc_drive":"📚 Ідеально для знайомства з нашим сервісом та легкого серфінгу в соцмережах. Дозволить повністю випробувати роботу VPN / Proxy 😉","tarif_desc_start":"📚 Підходить для соцмереж та легкого використання на смартфоні із середнім екранним часом ≈4год на день. На ПК місячний ліміт може витрачатися швидше, враховуйте активність.","tarif_desc_gamer":"🎮 Для тих, хто активно проводить час за ПК:<br/><font color=#DA7F00>•</font> Ігри через Steam та інші лаунчери<br/><font color=#DA7F00>•</font> Голосове спілкування в месенджерах для геймерів з надійним підключенням через Proxy<br><font color=#DA7F00>•</font> Перегляд Twitch з плагіном 7TV в 1080p і вище<br/><font color=#DA7F00>•</font> YouTube та інші соцмережі, де важливе захищене підключення\\n\\n✅ Цього трафіку достатньо для смартфона та ПК з активним використанням ≈5-6 годин на день.","tarif_desc_unlim":"🚀 Тариф для великих обсягів трафіку та будь-яких завдань: ПК, ноутбуки, смартфони, планшети, ТВ та інші пристрої.\\n\\n🧡 Один ключ можна використовувати на кількох пристроях — цього трафіку вистачить для сім\'ї та Ваших друзів!","tarif_desc_ultra":"💠 Преміальний тариф для широкого спектра завдань та дуже активних користувачів!\\n\\nПідходить тим, хто наближається к верхній межі тарифу в 1 ТБ і хоче користуватися сервісом без хвилювань про трафік.\\n\\n💜 З цим варіантом Ви зможете спокійно завантажувати великі файли, стрімити, грати та використовувати VPN / Proxy на десятці пристроїв.","applicationCabinetOrderBack":"Назад","applicationCabinetOrderSelect":"☑️ Замовити цей тариф ☑️","applicationCabinetOrderSelectTrial":"🎁 Активувати тестовий доступ на %1% години 🎁","applicationCabinetOrderSelectTrialAccept":"🎁 Отримати тестовий доступ на %1% години як бонус?","applicationCabinetOrderSelectAccept":"Підтвердіть дію ✅\\nЗ балансу буде списано: %1%\\n\\n💰 Зараз у Вас: %2%","applicationCabinetOrderTrial":"🎁 Доступний тестовий період на %1% години","applicationCabinetOrderTrialUsed":"Ви вже використовували тестовий доступ раніше 🙁","applicationCabinetOrderSelectErrTimeMax":"Максимальний термін продовження послуги: 2 місяці","applicationCabinetOrderSelectErrBalance":"У Вас недостатньо коштів на внутрішньому балансі для замовлення 🙁","applicationCabinetOrderSelectErrTrialCfg":"Цей тариф не можна замовити в тестовому режимі 🙁","applicationCabinetOrderSelectErrTrial":"Ви вже використовували цей тестовий тариф 🙁","applicationCabinetOrderSelectErrTrialTgRequired":"🎁 Тестовий період доступний лише користувачам, авторизованим через Telegram. Увійдіть через Telegram (або прив\'яжіть Telegram у «Налаштування») та спробуйте ще раз.","applicationCabinetOrderSelectSuccess":"Замовлення успішно виконано 🎉","applicationCabinetOrderSelectSuccessTrial":"Тестове замовлення успішно виконано 🎉","applicationCabinetOrderSelectErrOrder":"Не вдалося створити Ваше замовлення 😕","applicationCabinetOrderEditChangeTarif":"♻️ Змінити тариф на інший ♻️","applicationCabinetOrderEditChangeTarifCurrent":" ❗️ Це поточний тариф","applicationCabinetOrderEditChangeTarifNewDays":"<font color=#07D400>При зміні тарифу у Вашого замовлення залишиться<br>приблизно %1%</font><br>дні:години:хвилини:секунди<br><br>Для підтвердження натисніть кнопку нижче","applicationCabinetOrderEditChangeTarifExpired":"❌ Неможливо змінити тариф у замовлення з терміном дії, що закінчився. Спочатку необхідно його продовжити (зробити активним), а вже після змінити тариф на той, що Ви обрали. При зміні час замовлення перерахується залежно від обраного тарифу.","applicationCabinetOrderEditChangeTarifDesc":"<font color=#FA7900>Кожні %1% год. Ви можете змінювати тариф на будь-який інший.</font><br><br>При зміні тарифу залишок днів з попереднього замовлення переноситься на новий з урахуванням актуальної вартості та терміну доступу, що залишився.","applicationCabinetOrderEditChangeTarifDescErr":"<font color=#07D400>Ви вже нещодавно змінювали тариф!</font><br>Наступна зміна буде доступна<br>через %1%","applicationCabinetOrderEditChangeTarifButton":"♻️ Підтвердити зміну тарифу на обраний ♻️","applicationCabinetOrderEditChangeTarifButtonAccept":"♻️ Ви впевнені, що хочете змінити тариф на обраний?\\n\\n⚠️ Майте на увазі, що наступну зміну тарифу Ви зможете здійснити тільки через %1% год.","applicationCabinetOrderEditAuto":"Автопродовження замовлення","applicationCabinetOrderEditAutoOn":"✅ Активно","applicationCabinetOrderEditAutoOff":"❌ Не активно (в ⚙️Налаштуваннях)","applicationCabinetOrderEditAutoDesc":"При закінченні терміну дії замовлення, якщо на Вашому балансі достатньо коштів, система автоматично продовжить замовлення, якщо увімкнути автопродовження.","applicationCabinetOrderEditResetTime":"Скидання трафіку","applicationCabinetOrderEditCreated":"Замовлення активовано","applicationCabinetOrderEditSpent":"Сумарно витрачено","applicationCabinetOrderEditOverTime":"Передплата активна до","applicationCabinetOrderChangeTarif":"♻️ Зміна тарифу","applicationCabinetOrderEditParams":"⚙️ Налаштування","applicationCabinetOrderEditParamsTitle":"⚙️ Налаштування замовлення: %1%","applicationCabinetOrderEditParamsLabel":"🔸 Мітка замовлення","applicationCabinetOrderEditParamsLabelDesc":"Ви можете додати мітки до Ваших замовлень, щоб Вам було простіше визначати, яке з них де використовується","applicationCabinetOrderEditParamsPassword":"🔸 Ваш пароль для підключення (4-12 символів)","applicationCabinetOrderEditParamsIP":"🔸 IP-адреса для доступу без пароля","applicationCabinetOrderEditParamsIPDesc":"У цьому полі Ви можете вказати свою особисту IP-адресу (взявши її, наприклад, з 2ip.io), щоб отримати доступ до нашого Proxy-сервера без вказання логіна та пароля в тих місцях, де це потрібно. Цей варіант зручніший і нічим не відрізняється за рівнем безпеки.\\n⚠️ Важливе уточнення: ця функція не працює при підключенні до резервного РФ сервера.","applicationCabinetOrderEditParamsIPDesc1":"Для того, щоб убезпечити підключення до Proxy, ми згенерували випадковий пароль. У разі потреби його можна замінити на будь-який інший. Він потрібен для автентифікації за допомогою логіна та пароля там, де це знадобиться.","applicationCabinetOrderEditSave":"✔️ Зберегти всі зміни ✔️","applicationCabinetOrderEditSaveOk":"Зміни успішно прийняті ✅","applicationCabinetOrderEditSaveFail":"❌ Налаштування не були збережені. %1%","applicationCabinetOrderEditLinkVpn":"📚 Інструкція VPN","applicationCabinetOrderEditLinkProxy":"📚 Інструкція Proxy","applicationCabinetOrderEditResetPass":"🔄 Скинути Proxy пароль","applicationCabinetOrderEditResetPassAccept":"🔄 Ви впевнені, що хочете скинути пароль?\\n\\nСтарий пароль припинить діяти, і Вам необхідно буде виконати повторне налаштування Proxy з\'єднання!","applicationCabinetOrderEditLinkAccept":"💬 Вам було надіслано повідомлення з подробицями та інструкцією для підключення до нашого VPN / Proxy.","proxyInstructionReserveItem":"%1% *%2%*: `%3%`\\n🌐 *HTTPS / Socks5 порт*: `%4%`\\n🌐 *HTTP порт*: `%7%`\\n%5%\\n🔑 *Пароль*: `%6%`","proxyInstructionReserveSubItem":"👤 *Логін* %1% » %2%: `%3%`","proxyInstruction":"Інструкція для підключення до Proxy:\\n\\n%1%\\nМи надаємо Вам доступ до Proxy відразу у всіх наших локаціях. ✅ *Рекомендуємо спочатку спробувати підключення безпосередньо до європейського сервера.* У разі якщо працює некоректно — пробуйте спосіб через СПБ » Європа.\\n\\n\\n*Дані для підключення до Proxy безпосередньо:*\\n%2%\\n🌐 HTTPS / Socks5 порт: `%3%`\\n🌐 HTTP порт: `%4%`\\n👤 Логін: `%5%`\\n🔑 Пароль: `%6%`\\n\\n\\n*Для деяких клієнтів з РФ:*\\n_(перенаправляє трафік через РФ при недоступності прямого підключення до Європи. У цьому режимі обов\'язково вкажіть вірний логін з блоку нижче — він інший)_\\n%7%\\n\\n\\n*Для роботи з Proxy підключенням:*\\n🎙 Discord: [RocketMan Discord Proxy Bridge](https://github.com/RocketMan-System/DiscordProxyBridge_public/releases/latest) — [Інструкція](https://telegra.ph/Kak-zapustit-Discord-cherez-proksi-04-13)\\n🔎 Chrome: [SwitchyOmega 3](https://chromewebstore.google.com/detail/proxy-switchyomega-3-zero/pfnededegaaopdmhkdmcofjmoldfiped), [Smart Proxy](https://chromewebstore.google.com/detail/smartproxy/jogcnplbkgkfdakgdenhlpcfhjioidoj?hl=ru) — [Інструкція](https://telegra.ph/Kak-podklyuchitsya-k-proksi-v-Web-Brauzere-04-13)\\n💻 ПК на Windows та macOS: [Proxifier](https://www.proxifier.com/) — [Інструкція](https://telegra.ph/Kak-zapustit-prilozheniya-na-Windows-cherez-proksi-04-13)","vpnInstruction":"Інструкція для підключення до VPN:\\n\\n%1%\\nМи надаємо Вам доступ до VPN відразу у всіх наших локаціях! *Кожне посилання нижче = особистий ключ*, а також сторінка з інструкцією до підключення. \\n✅ *Рекомендуємо спочатку додати Vless від Мультипосилання*, у разі якщо працює некоректно — пробуйте інші протоколи або резервний варіант.\\n\\n\\n\\n🔹 *Просте пояснення для новачків:*\\n▪️ Натисніть на [це посилання](%5%) і дотримуйтесь інструкції.\\n\\n▪️ Якщо Ви перебуваєте в РФ і у Вас не працює VPN із зазначеного посилання вище, [тоді натисніть на це посилання](%6%). У цьому випадку Ви будете підключатися до європейських серверів через російський для маскування.\\n\\n\\n\\n🔸 *Для користувачів з досвідом*:\\n🌏 Усі локації в мультипосиланні\\n- %2%\\n\\n*Для деяких клієнтів з РФ:*\\n%3%\\nЦей спосіб для тих, у кого немає прямого підключення до європейських серверів і потрібен обхідний спосіб доступу до них через російський сервер.\\n\\n*Прямий доступ до локації на всіх протоколах:*\\n%4%","vpnInstructionAll":"Усі протоколи відразу","vpnInstructionNode":"%1% [%2%](%3%)","vpnInstructionEurope":"🇪🇺 Європа","applicationCabinetOrderEditLinkAcceptTextUnified":"%1%\\n\\n🔑 *Ваш особистий ключ доступу до VPN*\\n\\nУсі дані для підключення та список рекомендованих додатків знаходяться за посиланням:  \\n👉 [Відкрити посилання для підключення](%2%)\\n\\n⚠️ *Зберігайте посилання в секреті!* \\nВоно є Вашим персональним ключем авторизації у VPN.\\n\\n✅ Щоб активувати передплату:  \\nСкопіюйте посилання та вставте його в обраний додаток — після цього автоматично завантажаться актуальні налаштування.\\n\\n📦 Хочете керувати всіма замовленнями?  \\nВикористовуйте [🔑 посилання передплати на всі підключення](%4%).\\n\\n───────────────\\n🌐 *Ваші дані для підключення до Proxy:*\\n🌐 *Адреса сервера:* `%6%%7%`\\n🌐 *HTTP порт:* `%8%`\\n🌐 *HTTPS порт:* `%9%`\\n🌐 *Socks5 порт:* `%14%`\\n👤 *Ваш логін:* `%10%`\\n🔑 *Пароль для підключення:* `%5%`\\n\\n⚠️ У разі недоступності основного сервера ви можете підключитися до резервного сервера:  \\n%11% *Адреса сервера:* `%12%`  \\n🌐 *HTTPS порт:* `%9%`  \\n👤 *Ваш логін:* `%13%.%10%`  \\n🔑 *Пароль для підключення:* `%5%`\\n\\n💡 Proxy можна використовувати в будь-якому додатку, який підтримує Proxy-з\'єднання.  \\nНаприклад, *для роботи в браузері Chrome* рекомендуємо розширення:  \\n• Proxy SwitchyOmega V3 — https://chromewebstore.google.com/detail/proxy-switchyomega-v3/hihblcmlaaademjlakdpicchbjnnnkbo  \\n• SmartProxy — https://chromewebstore.google.com/detail/smartproxy/jogcnplbkgkfdakgdenhlpcfhjioidoj?hl=uz\\n\\n───────────────\\n*Інструкції з підключення до VPN:* \\n💻 [Windows / macOS](https://telegra.ph/Kak-podklyuchitsya-k-VPN-s-Windows--mac-OS-04-13)  \\n📲 [iOS / Android](https://telegra.ph/Kak-podklyuchitsya-k-VPN-s-iOS--Android-04-13)  \\n📺 [Android TV](https://telegra.ph/Kak-podklyuchitsya-k-VPN-s-Android-TV-04-13)\\n\\n───────────────\\n*Як підключитися до Proxy:* \\n🎧 [Discord](https://telegra.ph/Kak-zapustit-Discord-cherez-proksi-04-13)  \\n🖥 [Windows-додатки](https://telegra.ph/Kak-zapustit-prilozheniya-na-Windows-cherez-proksi-04-13)  \\n🌍 [Веб-браузер](https://telegra.ph/Kak-podklyuchitsya-k-proksi-v-Web-Brauzere-04-13)\\n","applicationCabinetOrderEditLinkAcceptTextOrderData":"💬 Дані замовлення `%1%`\\n⌛️ Тариф: `%2%`\\n⚙️ Автопродовження: %3%\\n\\n%4%","applicationCabinetOrderEditLinkAcceptTextOrderDataReset":"❗️❗️❗️ Увага! Обов\'язково оновіть конфігурацію в налаштуваннях додатка, де використовуєте це замовлення\\n\\n","applicationCabinetOrderEditLinkAcceptTextOrderDataRenewYes":"✅ Увімкнено","applicationCabinetOrderEditLinkAcceptTextOrderDataRenewNo":"❌ Вимкнено","faqButtonCommand":"🔑 Наші VPN та Proxy можуть бути застосовані на широкому списку пристроїв і *без обмежень на к-ть підключень* до одного ключа доступу! Налаштування дуже просте і займе не більше двох хвилин Вашого часу, далі все буде зведено лише до кнопки ВКЛ/ВИКЛ.\\n\\n✅ Після того, як Ви оформите своє перше замовлення _(включаючи тестове)_, Вам прийде два повідомлення з деталями та інструкціями для підключення, як до VPN, так і до Proxy.\\n\\n\\n📦 *Якщо у Вас ще немає замовлення, то:*\\n[Запустіть додаток](https://t.me/rocketman_vpn_bot/?startapp) ➛ Особистий кабінет ➛ Зробити нове замовлення ➛ Обирайте відповідний натиснувши на нього та переходьте до деталей тарифу ➛ Замовляємо.\\n\\n\\nЯкщо у Вас виникнуть якісь питання, то зв\'яжіться з нами з додатка, ми обов\'язково допоможемо ❤️","applicationCabinetOrderEditPay":"⌛️ Продовжити замовлення (на %1% днів за %2%)","applicationCabinetOrderEditPaySuccess":"🎉 Замовлення успішно продовжено на %1% днів.\\n\\nСтатус замовлення буде оновлено протягом декількох хвилин.","applicationCabinetOrderEditPayErr":"Не вдалося продовжити замовлення 🙁","applicationCabinetOrderRemove":"Видалити замовлення","applicationCabinetOrderRemoveFailed":"❌ Неможливо видалити активне замовлення!","applicationCabinetOrderRemoveConfirm":"Ви впевнені, що хочете видалити замовлення? 🤨\\n\\nУ разі потреби Ви завжди можете зробити нове замовлення, а якщо у Вас виникли проблеми з замовленням, то зверніться до нашої служби підтримки, і ми з радістю Вам допоможемо!","applicationCabinetOrderRemoveConfirmMessage":"✅ Замовлення було успішно видалено!","applicationCabinetOrderRemoveConfirmMessageErr":"❌ Не вдалося видалити замовлення!","applicationCabinetPlatformProxy":"HTTPS Proxy","applicationCabinetPlatformProxy1":"Протоколи: %1%","applicationCabinetPlatformLabel":"🏷️ %1%","paymentSuccess":"💸 Ваш баланс був поповнений на %1%","applicationAdminUsers":"👥 Користувачі (x%1%)","applicationAdminUsersActive":"🫂 Активні користувачі (x%1%)","applicationAdminUserBalance":"💸 %1%","applicationAdminUserBalanceFull":"💸 Поточний баланс: %1% | %2% USD","applicationAdminUserRef":"Реферали (x%1% | %2%)","applicationAdminUserRefTarget":"Реферал від","applicationAdminUserOrders":"📦 Замовлення (x%1% всього | x%2% активних)","applicationAdminUserRefs":"💸 Реферали (x%1% всього)","applicationAdminUserPayments":"💸 Платежі (x%1% всього) | Зараховано %2%","applicationAdminUserPaymentsType":"Платіжна система: %1%","applicationAdminUserPaymentsStatus":"Статус платежу: %1%","applicationAdminUserPaymentsStatusSetFail":"🔄 Скасувати платіж та списати суму з балансу","applicationAdminUserPaymentsStatusSetFailAccept":"Ви впевнені?\\n\\nУ разі підтвердження платіж змінить свій статус, а також з балансу користувача\\n\\n❌ буде списано %1%","applicationAdminUserPaymentsStatusSetOk":"✅ Підтвердити платіж та зарахувати суму на баланс","applicationAdminUserPaymentsStatusSetOkAccept":"Ви впевнені?\\n\\nУ разі підтвердження платіж змінить свій статус, а також баланс користувача\\n\\n✅ буде поповнений на %1%","applicationAdminUserPaymentsStatusSetOkAcceptDone":"Дія виконана успішно ✅","applicationAdminUserPaymentsStatusSetOkAcceptFail":"Не вдалося виконати дію!\\nВідповідь сервера: %1%","applicationAdminUserCreated":"Створений: %1%","applicationAdminUserUpdated":"Змінений: %1%","applicationAdminUserLast":"🚪 Останній вхід: %1%","applicationAdminUserOrdersTotal":"💰 Поповнень балансу на: %1%","applicationAdminUserResetOrderChangeBlock":"Скинути зависле блокування замовлення","applicationAdminUserResetOrderChangeBlockAccept":"Ви впевнені, що хочете скинути зависле блокування замовлення?","applicationAdminUserMedia":"Партнерська програма","applicationAdminUserMediaOn":"Статус: ✅ Партнер","applicationAdminUserMediaOff":"Статус: ❌ НЕ Партнер","applicationAdminUserMediaConfirm":"Статус: ❌ НЕ Партнер","applicationAdminUserMediaTotal":"Сумарний дохід: %1%","applicationAdminUserMediaPayed":"Виплачено партнеру: %1%","applicationAdminUserMediaPayWait":"Необхідно виплатити: %1%","applicationAdminUserMediaPayWaitButton":"💸 Відмітити виплату","applicationAdminUserMediaPayWaitButtonAccept":"Ви впевнені, що хочете відмітити виплату як виконану? Сума транзакції %1% (%2%)\\n\\n💸 Після підтвердження користувачу буде надіслано повідомлення про те, що кошти були виплачені і вони вже в дорозі до нього.","applicationAdminUserMediaPayWaitNotify":"Шановний партнере! \\n\\n💸 Вам була виплачена сума в розмірі *%1%* за партнерською програмою. Кошти вже в дорозі і знадобиться деякий час, щоб вони досягли ваших реквізитів","applicationAdminUserMediaPercent":"%2%%1%% Відсоток від рефералки в дохід","applicationAdminUserMediaPercentDesc":"Цей відсоток вказує скільки від рефералки буде виплачено користувачу як дохід від партнерської програми","applicationAdminUserGiveOrder":"Видати замовлення користувачу","applicationAdminUserGiveOrderDays":"Кількість днів","applicationAdminUserGiveOrderButton":"Видати","applicationAdminUserGiveOrderButtonConfirm":"Ви збираєтеся видати замовлення\\n\\"%1%\\"\\nкористувачу на %2% днів?","applicationAdminUserEditButton":"Керування користувачем","applicationAdminUserEditPromos":"Використані промокоди: %1%","applicationAdminUserEditBalance":"Змінити баланс","applicationAdminUserAddBalance":"Додати на баланс","applicationAdminUserEditBalanceAccept":"Ви впевнені, що хочете змінити баланс користувача?","applicationAdminUserEditBalanceAcceptFail":"Не вдалося змінити баланс. Можливо під час редагування поточний баланс користувача був змінений\\nВідповідь сервера: %1%","applicationAdminUserEditBalanceAcceptOk":"Баланс був успішно змінений","applicationAdminUserEditBalanceChangeNotify":"Адміністратор змінив Ваш баланс на *%1%*.\\n💰 Поточний баланс: *%2%*\\n\\n🚀 [Запустити додаток](https://t.me/rocketman_vpn_bot/?startapp)","applicationAdminUserEditBalanceAddNotify":"Адміністратор додав *%1%* на Ваш баланс.\\n💰 Поточний баланс: *%2%*\\n\\n🚀 [Запустити додаток](https://t.me/rocketman_vpn_bot/?startapp)","applicationAdminSearch":"Пошук","applicationAdminOrders":"🛒 Усі замовлення (x%1%)","applicationAdminOrdersActive":"💳 Активні замовлення (x%1%)","applicationAdminOrdersExpired":"⛔ Зупинені замовлення (x%1%)","applicationAdminOrderName":"🛒 %1%","applicationAdminOrderOwner":"👤 %1%","applicationAdminOrderTarif":"🏷️ %1% днів","applicationAdminOrderNode":"🔖 %1%","applicationAdminOrderData":"Трафік: %1%","applicationAdminOrderBlockChangeTarif":"⛔ Блокування зміни тарифу","applicationAdminOrderReload":"Оновити дані MarzBan","applicationAdminOrderReloadAccept":"⚠️ Оновити дані?\\n\\nЦя дія завантажить дані замовлення з MarzBan та оновить їх у додатку!","applicationAdminOrderReloadAcceptDone":"✅ Запит на оновлення даних надіслано!","applicationAdminOrderReloadAcceptFail":"❌ Не вдалося оновити дані замовлення!","applicationAdminOrderResetChangeTime":"Скинути час зміни тарифу","applicationAdminOrderResetChangeTimeAccept":"Ви впевнені, що хочете це зробити? При підтвердженні користувач зможе змінити тариф на інший","applicationAdminOrderResetChangeTimeAcceptOk":"✅ Запит успішно виконано. Тепер користувач може змінити тариф самостійно","applicationAdminOrderResetTraffic":"Скинути трафік","applicationAdminOrderResetTrafficAccept":"⚠️ Скасувати замовлення?\\n\\nКористувач не отримає повідомлення!","applicationAdminOrderResetTrafficAcceptOk":"✅ Готово","applicationAdminOrderReturn":"Скасувати замовлення","applicationAdminOrderReturnAccept":"⚠️ Скасувати замовлення?\\n\\nКористувач ОТРИМАЄ назад кошти за весь НЕВИКОРИСТАНИЙ період!","applicationAdminOrderReturnAcceptDone":"⚠️ Замовлення видалено. Користувачу повернено %1% на баланс.","applicationAdminOrderReturnNotify":"⚠️ Адміністратор скасував Ваше замовлення\\n🛒 `%1%` та повернув Вам *%2%* на баланс.\\nВи можете зробити нове замовлення, щоб завжди залишатися на зв\'язку з вільним Інтернетом, зайшовши в додаток.\\n\\n🚀 [Запустити додаток](https://t.me/rocketman_vpn_bot/?startapp) ⇒ Особистий кабінет ⇒ Зробити нове замовлення","applicationAdminOrderRemove":"Видалити замовлення","applicationAdminOrderRemoveAccept":"⚠️ Видалити замовлення?\\n\\nЯкщо замовлення все ще активне, кошти НЕ будуть повернені!","applicationAdminOrderRemoveAcceptDone":"Замовлення видалено","applicationAdminOrderAddTime":"Продовжити замовлення (%1%дн.)","applicationAdminOrderAddTimeAccept":"⚠️ Продовжити замовлення (%1%дн.)?\\n\\nЦя дія НЕ змінить баланс користувача!","applicationAdminOrderAddTimeAcceptNotify":"🎉 Адміністратор продовжив Ваше замовлення\\n🛒 `%1%` на *%2% дн.* 📆\\n\\n🚀 [Запустити додаток](https://t.me/rocketman_vpn_bot/?startapp) ⇒ Особистий кабінет ⇒ Натисніть на вказане замовлення для ознайомлення з деталями.","applicationAdminPromos":"🎁 Промокоди (x%1%)","applicationAdminPaymentsLast":"⏰ Останні платежі (x%1%)","applicationAdminPaymentsLastSuccess":"💵 Останні успішні платежі (x%1%)","applicationAdminPromosCreate":"Створити промокод","applicationAdminPromoID":"Назва: %1%","applicationAdminPromoUSED":"Використань: %1%","applicationAdminPromoCOUNT_USE":"Ліміт: %1%","applicationAdminPromoBALANCE":"Сума: %1%","applicationAdminPromoEditID":"Назва","applicationAdminPromoEditCOUNT_USE":"Кількість застосувань (макс)","applicationAdminPromoEditAMOUNT":"Сума в $","applicationAdminPromoEditCATEGORY":"Категорія","applicationAdminPromoEditCATEGORYEmpty":"Звичайний / без категорії","applicationAdminPromoEditCATEGORYMedia":"Медіа промо","applicationAdminPromoEditCATEGORYNew":"Для новачків","applicationAdminPromoEditSave":"Зберегти промокод","applicationAdminPromoEditPromo":"Змінити","applicationAdminPromoCategory":"Категорія: %1%","applicationAdminPromoSendUseList":"Список тих, хто застосував","applicationAdminPromoRemovePromo":"Видалити","applicationAdminPromoRemovePromoAccept":"Ви впевнені?","applicationAdminAddNode":"Додавання нової ноди","applicationAdminAddNodeDesc":"Цей розділ дозволить у 2 кліки розгорнути весь проєкт на новій ноді. Це лише встановить все, що потрібно, але не додаватиме ноду до списку нод","applicationAdminAddNodeIP":"IP Адреса сервера","applicationAdminAddNodeHostname":"Піддомен сервера (s1, s2 тощо, без крапки та іншого)","applicationAdminAddNodeHostnameDesc":"Вказаний піддомен автоматично пропишеться в CloudFlare з усіма параметрами для роботи з нашим сервісом. Якщо вказати вже існуючий — то буде перезаписаний, тож уважніше","applicationAdminAddNodeUsername":"Ім\'я користувача (root)","applicationAdminAddNodePassword":"Пароль користувача (root)","applicationAdminAddNodePasswordDesc":"Якщо не вказати пароль — буде використовуватися авторизація за SSH ключем. У цьому випадку переконайтеся, що Ваш SSH ключ доданий у ноду і має доступ до сервера","applicationAdminAddNodePasswordKeyInfo":"Увага. Пароль не вказано, буде використовуватися авторизація за SSH ключем. Переконайтеся, що Ваш SSH ключ доданий у ноду і має доступ до сервера","applicationAdminAddNodeSshPort":"SSH Порт (22)","applicationAdminAddNodeGhUsr":"Github username","applicationAdminAddNodeGhToken":"Github token","applicationAdminAddNodeGhTokenDescScopes":"Для роботи потрібні такі права: repo (full), workflow, write:packages, read:packages, read:user","applicationAdminAddNodeGhTokenDesc":"Натисніть щоб отримати токен","applicationAdminAddNodeStart":"Виконати деплой","applicationAdminAddNodeStarted":"Процес деплою запущений, не закривайте сторінку і дочекайтеся виконання. Якщо протягом 5 хвилин процес не буде завершений — швидше за все щось зависло(","applicationAdminAddNodeDoneOk":"Деплой завершено успішно","applicationAdminAddNodeDoneFail":"Помилка: %1%","applicationAdminAddNodeClearLogs":"Очистити логи","applicationAdminInstallNode":"Розгортання ноди","applicationAdminCoreSettings":"Налаштування ядра","applicationAdminCoreSettingsDesc":"Цей розділ дозволяє налаштувати базові параметри системи. Параметри застосовуються на льоту, без перезапуску ядра","applicationAdminSaveCoreSettings":"Зберегти налаштування","applicationAdminCoreSettingsSaved":"Налаштування успішно збережені","applicationAdminCoreName.projectName":"Назва проєкту","applicationAdminCoreName.projectMain":"Основний домен","applicationAdminCoreName.projectBot":"Логін бота проєкту","applicationAdminCoreDesc.projectBot":"Через якого бота відбувається взаємодія з користувачами. Вкажіть логін без @","applicationAdminCoreName.admins":"ID Адміністраторів","applicationAdminCoreDesc.admins":"ID вказуйте суворо через кому, і не використовуйте пробіли. Наприклад: `123456789,987654321`. І не видаліть себе випадково)","applicationAdminCoreName.backup_admins":"ID Адміністраторів для отримання бекапу","applicationAdminCoreDesc.backup_admins":"Цим адміністраторам бот надсилатиме бекапи в особисті повідомлення. ID вказуйте суворо через кому, і не використовуйте пробіли. Наприклад: `123456789,987654321`","applicationAdminCoreName.order_end_limit_month":"Максимальний термін продовження замовлення (в місяцях)","applicationAdminCoreDesc.order_end_limit_month":"Користувач не зможе продовжити своє замовлення на термін більше, ніж вказано","applicationAdminSendMessage":"Розсилка повідомлень","applicationAdminSendMessageTargets":"Кількість людей, які отримають повідомлення","applicationAdminSendMessageType":"Тип фільтрації користувачів","applicationAdminSendMessageTypeAll":"Усі користувачі","applicationAdminSendMessageTypeOrders":"Певні замовлення (будь-які)","applicationAdminSendMessageTypeOrdersActive":"Певні замовлення (активні)","applicationAdminSendMessageTypeHas":"Є хоч 1 замовлення","applicationAdminSendMessageTypeNotHas":"Немає жодних замовлень","applicationAdminSendMessageTypeHasActive":"Є хоч 1 активне замовлення","applicationAdminSendMessageTypeHasUnActive":"Є хоч 1 НЕактивне замовлення","applicationBalanceErr":"Виникла помилка при формуванні платежу: %1%","applicationBalanceErrBalanceLimit":"На вашому рахунку вже максимально допустима кількість коштів (%1%)","applicationBalanceErrBalanceLimitButton":"Недоступно","applicationBalanceErrData":"Платіжна система не змогла сформувати платіж. Будь ласка, спробуйте пізніше.","applicationBalanceErrNetwork":"Мережева помилка. Будь ласка, спробуйте пізніше.","applicationBalanceErrCurrency":"Помилка валюти. Будь ласка, спробуйте пізніше.","applicationBalanceErrAuth":"Помилка авторизації","applicationBalanceErrPaymentLink":"Не вдалося отримати посилання на платіж","applicationBalanceSettingsTitle":"Вибір валюти","applicationBalanceTitle":"Розділ поповнення балансу","applicationBalanceSelect":"Оберіть валюту для відображення","applicationBalanceEmail":"Ваш email","applicationBalancePlatform":"Платіжна платформа","applicationBalanceAmount":"Сума поповнення (в %1%)","applicationBalanceAmountWithPercent":"\\n<font color=#00AE09>Підсумкова сума оплати: ≈%1%</font>\\n\\n<font color=#F28100>Якщо ви чийсь реферал,\\nто на баланс повернеться %2% у вигляді 20% кешбеку!</font>","applicationBalanceAmountLimit":"Мінімальна сума: %1%\\nМаксимальна сума: %2%\\n\\n💵 <font color=#00AE09>Ваш спосіб оплати: %4%</font>\\nКомісія платіжної системи: %3%%\\n\\nПісля самої оплати баланс зараховується автоматично протягом декількох хвилин, також Вам прийде повідомлення про статус платежу з іншими деталями на випадок звернення до служби підтримки.","applicationBalanceAmountDesc":"Поповнення відбувається через сервіс %1%","applicationBalanceAmountButton":"Перейти на сторінку оплати","applicationBalanceAmountButtonLoading":"Завантаження...","applicationBalanceAmountButtonErr":"❌ Невірно вказана сума ❌","applicationBalanceCurrency":"Метод оплати","applicationBalanceCurrencyDesc":"Комісія платіжної системи: ≈%1%%","applicationServersTitle":"Статус серверів","paymentCompleteNotify":"🎉 Ваш баланс був успішно поповнений на <b>%1%</b>.\\n\\nID платежу: <b>%2%</b>\\n(Він знадобиться у разі звернення до <a href=\\"https://t.me/rocketman_vpn\\">служби підтримки</a>).\\n\\n🚀 <a href=\\"https://t.me/rocketman_vpn_bot/?startapp\\">Запустити додаток</a>","paymentCompleteNotifyRef":"🎉 Ваш баланс був успішно поповнений на <b>%1%</b>.\\nОскільки Ви є рефералом @%4% у нашому сервісі, ми нарахували бонус у розмірі <b>%3%</b> (%5%%)\\n\\nID платежу: <b>%2%</b>\\n(Він знадобиться у разі звернення до <a href=\\"https://t.me/rocketman_vpn\\">служби підтримки</a>).\\n\\n🚀 <a href=\\"https://t.me/rocketman_vpn_bot/?startapp\\">Запустити додаток</a>","paymentCompleteNotifyRefHost":"🎁 Реферальна система:\\n💵 Ви отримали бонус у розмірі <b>%1%</b> (%3%%) за поповнення балансу Вашим рефералом @%2%\\n\\n🚀 <a href=\\"https://t.me/rocketman_vpn_bot/?startapp\\">Запустити додаток</a>","paymentCompleteNotifyAdmin":"💵 Користувач %1% [UID: %7%] поповнив баланс на <b>%2%</b>.\\n💰 У чистий прибуток проєкту зараховано +<b>%5%</b>\\n\\nПлатіжна система: <b>%6%</b>\\nID платежу: <b>%3%</b>\\nURL: %4%","paymentRefundNotify":"❗️ Увага ❗️\\nПо платежу `%1%` був сформований запит на повернення коштів.\\n\\nОскільки вони були повернені Вам у повному обсязі, з балансу в додатку було списано *%2%*.\\n\\nУ разі виникнення питань зверніться до [служби підтримки](https://t.me/rocketman_vpn), ми обов\'язково допоможемо!\\n\\n🚀 [Запустити додаток](https://t.me/rocketman_vpn_bot/?startapp)","admin-nodes":"⛓ Ноди","admin-firewall":"📜 Записи фаєрвола (x%1%)","admin-firewall_add":"Новий запис фаєрвола","logRecord-title":"📊 Логи адміністрації (x%1%)","logRecord-title-user":"📜 Логи користувача (x%1%)","logRecord-log-time":"Створений: %1%","logRecord-log-who":"Хто","logRecord-log-target":"Ціль","logRecord-log-reason":"Текст: %1%","logRecord-setPaymentStatus":"Зміна статусу платежу %1%","logRecord-removePromo":"Видалення промокоду %1%","logRecord-editPromo":"Редагування промокоду %1%","logRecord-editBalance":"Редагування балансу (%1%$ -> %2%$)","logRecord-returnOrder":"Скасування замовлення %1% (%2%$)","logRecord-addOrder":"Видача замовлення %1%","logRecord-payOrder":"Продовження замовлення %1% на %2% днів","logRecord-partnerNotify":"Виплата партнеру %1% USD (%2%)","paymentMethodMorune":"Morune","paymentMethodMorune2":"СБП (Система швидких платежів)","paymentMethodCrypto":"Криптовалюта","paymentMethodTelegram":"Telegram","paymentMethodFreekassa":"Freekassa","errorUserDataAdminDetect":"Не вдалося виявити дані користувача для формування посилання. Мабуть, цей користувач заблокував нашого бота 😐","partner_title":"🏆 Партнерська програма 🏆","partner_desc":"Ви є учасником партнерської програми. Крім основного бонусу за реферала Ви також отримуватимете фінансові відрахування.\\n\\nВаша поточна ставка — %1%% від реферального балансу\\n\\nВсього Ви заробили: %2%\\nПоточний баланс: %3%","ref_title":"🏆 Реферальна система 🏆","ref_desc":"Запрошуйте друзів та знайомих до нашого сервісу та отримуйте бонуси на свій баланс!\\n\\n<font color=#2DA618>Від кожного реферала Ви отримаєте по <font color=#54E13B>%1%</font> за їхні перші замовлення та <font color=#54E13B>%2%%</font> від усіх поповнень їхнього балансу.</font>\\n\\n<font color=#00B7B7>Усі Ваші реферали отримають <font color=#15DBDB>%3%</font> бонусом після першого замовлення (включаючи тестове) та <font color=#15DBDB>%4%%</font> кешбеку від усіх своїх майбутніх поповнень.</font>\\n\\nТаким чином ця система вигідна і для Вас, і для Ваших рефералів 😉","ref_stats":"Ваша статистика","ref_stats_data":"Кількість приведених рефералів: %1%\\nОтримали бонусом на баланс: %2%","ref_link_text":"Ваші дані реферальної системи","ref_link_text_copy":"📋 Посилання+текст","ref_only_link_copy":"🔗 Посилання","ref_link_text_copy_sendText":"Привіт! Я користуюся зручним способом для захисту своїх даних в інтернеті та сміливо рекомендую його тобі 😎\\n\\nКрім того, перейшовши саме за моїм посиланням, ти отримаєш бонусом %1% після першого замовлення (включаючи тестове) та довічний кешбек у %2%% від усіх поповнень балансу 🎉\\n","ref_link_text_copy_sendText_1":"✅","ref_link_text_copy_alert":"🔗 Ваше реферальне посилання та додатковий текст були скопійовані в буфер обміну.\\n\\nВикористовуйте це для запрошення друзів та знайомих у наш сервіс, щоб отримувати вигоду спільно 😎","ref_only_link_copy_alert":"🔗 Ваше реферальне посилання було скопійоване в буфер обміну.\\n\\nВикористовуйте його для запрошення друзів та знайомих у наш сервіс, щоб отримувати вигоду спільно 😎","ref_link_text_share":"💌 Поділитися","ref_link_text_share_message":"Привіт! Я користуюся зручним способом для захисту своїх даних в інтернеті та сміливо рекомендую его тобі 😎\\n\\nКрім того, перейшовши саме за моїм посиланням, ти отримаєш бонусом %1% після першого замовлення (включаючи тестове) та довічний кешбек у %2%% від усіх поповнень балансу 🎉\\n","ref_message_personal":"Ви не можете зареєструватися за своїм реферальним посиланням 😐","ref_message":"🎁 Реферальна система:\\nВи успішно зареєструвалися як реферал користувача @%1% 🎉\\n\\nВи отримаєте бонус у розмірі <b>%2%</b> при першому замовленні (включаючи тестове), а також довічний кешбек у розмірі <b>%3%%</b> при кожному поповненні балансу!","ref_message_host":"🎁 Реферальна система:\\n🎉 Користувач @%1% зареєструвався як Ваш новий реферал 🎉\\n\\nВи отримаєте бонус у розмірі <b>%2%</b> при першому його замовленні (включаючи тестове), а також кешбек у розмірі <b>%3%%</b> від кожного його поповнення балансу.","ref_message_order":"🎁 Реферальна система:\\n💵 Ви отримали бонус у розмірі <b>%1%</b> на свій баланс","ref_message_order_host":"🎁 Реферальна система:\\n💵 Ви отримали бонус у розмірі <b>%1%</b> на свій баланс від користувача @%2%","traffic_limit_notify_close":"⚠️ У Вас закінчується трафік на замовленні `%1%` з тарифом `%2%`! Якщо це повідомлення з\'являтиметься досить часто, рекомендуємо задуматися про зміну тарифу на більш просунутий, щоб завжди залишатися на зв\'язку ❤️\\n\\n🚀 Зробити це Ви зможете, [запустивши додаток](https://t.me/rocketman_vpn_bot/?startapp) ⇒ Особистий кабінет ⇒ натисніть на потрібне замовлення ⇒ ♻️ Змінити тариф на інший ♻️","traffic_limit_notify_end":"❗️ УВАГА ❗️ У Вас закінчився весь трафік на замовленні `%1%` з тарифом `%2%`. Його скидання відбудеться %3%. Але якщо Ви хочете завжди залишатися на зв\'язку, подумайте про зміну тарифу на більш просунутий.\\n\\n🚀 Зробити це Ви зможете, [запустивши додаток](https://t.me/rocketman_vpn_bot/?startapp) ⇒ Особистий кабінет ⇒ натисніть на потрібне замовлення ⇒ ♻️ Змінити тариф на інший ♻️","traffic_limit_notify_restore":"🎉 У замовлення `%1%` з тарифом `%2%` була скинута статистика використаного трафіку. Тепер він знову доступний у повному обсязі :)\\n\\n🚀 [Запустити додаток](https://t.me/rocketman_vpn_bot/?startapp)","promo_button":"🎁 Застосувати промокод","example":"Приклад","deleteMessageFailed":"❌ Не вдалося видалити повідомлення. Можливо, воно занадто старе або вже видалене.","cryptoPayTitle":"Оплата через криптовалюту","cryptoPayUserId":"ID користувача","cryptoPayAmount":"Сума до оплати (USDT)","cryptoPayInstruction":"Переведіть вказану суму в USDT на надану адресу","cryptoPayLoading":"Завантаження реквізитів...","cryptoPayErrorNoParam":"Не передано параметр crypto_id у посиланні.","cryptoPayErrorInvalidData":"Некоректні дані для оплати.","cryptoPayErrorParse":"Помилка при обробці даних для оплати. Спробуйте оновити сторінку або зверніться в підтримку.","cryptoPayWallet":"Адреса гаманця для переказу","cryptoPayNetwork":"Мережа (блокчейн)","cryptoPayCopy":"Скопіювати","cryptoPayCopyAmountAlert":"Сума скопійована в буфер обміну!","cryptoPayCopyWalletAlert":"Адреса гаманця скопійована в буфер обміну!","cryptoPayWarning":"УВАЖНО перевірте реквізити та суму перед оплатою! У разі помилки ми не можемо гарантувати зарахування коштів.","telegramPayment":"✅ Для Вас був сформований рахунок на оплату\\n\\n⚖️ Сума оплати: <b>%1% %2%</b> (<b>%3% %4%</b>)\\n👤 ID користувача: <b>%7%</b>\\n📋 ID платежу: <b>%6%</b>\\n\\n🔗 Для оплати перейдіть за посиланням: %5%","orderManipulationBlock":"Ваше минуле замовлення все ще в обробці. Будь ласка, зачекайте його завершення або зверніться до служби підтримки для отримання допомоги.","subPage.orderInfo":"Нижче представлені всі доступні методи підключення для Вашого замовлення через цей додаток","subPage.userInfo":"Нижче представлені всі доступні методи підключення для всіх Ваших активних замовлень через цей додаток","subPage.orderId":"🛒 ID Замовлення: %1%\\n⬇️ Оберіть регіон кінцевого підключення:","subPage.nodeInfo":"📍 Точка обходу: %1%\\n⚠️ Це означає, що спочатку весь трафік йтиме через неї для маскування.","subPage.protocolInfo":"Протокол підключення: %1%","subPage.allTitle":"Усі замовлення","subPage.expiredNotifyList":"❌ Термін дії передплати закінчився\\nПродовжити VPN у боті\\n%1%","ping.admin.initOk":"✅ Система ініціалізована, всі ноди доступні в штатному режимі.","ping.admin.initFail":"❌ Система ініціалізована, але деякі ноди не доступні. Список неробочих нод: %1%","ping.admin.checkFail":"❌ Увага! Нода %1% не відповіла на пінг-запит. Будь ласка, перевірте її працездатність.","ping.admin.checkRestore":"✅ Нода %1% відновила працездатність.","speedtest.admin.failTest":"❌ Увага! На ноді %1% тест швидкості не був пройдений. Будь ласка, перевірте її працездатність.","speedtest.admin.slowspeedNotify":"⚠️ Увага, на ноді %1% зафіксована низька швидкість з\'єднання (%2% Mbps download, %3% Mbps upload). Будь ласка, перевірте її працездатність.","speedtest.admin.recoverNotify":"✅ Нода %1% відновила нормальну швидкість з\'єднання (%2% Mbps download, %3% Mbps upload).","applicationServersSpeedtestIssueDetected":"⚠️ На сервері виявлені проблеми зі швидкістю з\'єднання","applicationServersSpeedtestLastSpeed":"Останній замір швидкості (%1%) D: %2% / U: %3%","applicationServersSpeedtestPrevSpeed":"Попередній замір швидкості (%1%) D: %2% / U: %3%","applicationServersSpeedtestLastSpeedNotFound":"⚠️ На сервері ще не було зроблено замірів швидкості","applicationServersPingIssueDetected":"❌ Сервер не відповідає на пінг-запити","actionUpdateStartNodes":"⚠️ Запущена процедура оновлення нод (%1%), через деякий час ноди будуть перезапущені. Після завершення робіт буде надіслано додаткове повідомлення (якщо не було надіслано — можливо, підвис github action і все гаразд, але можуть бути і проблеми)","actionUpdateStartHeader":"Запущена процедура оновлення:","actionUpdateStartSite":"• Оновлюється головна сторінка проєкту","actionUpdateStartApp":"• Оновлюється бекенд-додаток","actionUpdateStartProxy":"• Оновлюється проксі або xray служба (Ноди: %1%)","actionUpdateStartMTProto":"• Оновлюється сервер MTProto","actionUpdateStartFirewall":"• Оновлюємо фаєрвол (Ноди: %1%)","actionUpdateStartBackup":"• Оновлюємо дочірній API інтерфейс (Ноди: %1%)","actionUpdateStartFooter":"Через деякий час ноди будуть перезапущені. Після завершення робіт буде надіслано повідомлення.","actionUpdateCompletedNodes":"✅ Процедура оновлення нод (%1%) завершена, ноди перезапущені і вже повинні бути активні","mtproto.title":"MTProto Proxy","mtproto.subtitle.1":"Швидкий та безпечний","mtproto.subtitle.2":"доступ до Telegram","mtproto.description.1":"Безкоштовний проксі-сервер для стабільного підключення до Telegram.","mtproto.description.2":"Без реєстрації, без обмежень, з повною конфіденційністю.","button.connect":"Підключити проксі","button.copy":"Скопіювати посилання","button.copied":"Скопійовано","link.label":"Посилання для підключення вручну","feature.encryption.title":"Наскрізне шифрування","feature.encryption.description":"Ваші повідомлення залишаються конфіденційними. Ми не маємо доступу до вашого листування.","feature.free.title":"Без обмежень","feature.free.description":"Безкоштовний доступ без реєстрації та лімітів на трафік.","feature.rocketman.title":"Більше можливостей","feature.rocketman.description":"Цей проксі працює тільки для Telegram. Для повноцінного захисту використовуйте RocketMan-VPN.","rocketman.title":"RocketMan VPN — це Ваш надійний друг","rocketman.description":"Даний MTProto проксі є додатковим проєктом — RocketMan VPN. З нами Ви отримаєте повний захист інтернет-з\'єднання у всіх додатках та улюблених сервісах. Спробуйте безкоштовно те, що ми надаємо для своїх клієнтів, та оцініть якість!","rocketman.button":"Відкрити RocketMan VPN","howto.title":"Як підключитися?","howto.step1.title":"Натисніть на кнопку \\"Підключити проксі\\"","howto.step1.description":"Або скопіюйте посилання та підключіться вручну","howto.step2.title":"Відкрийте Telegram","howto.step2.description":"Посилання автоматично запустить додаток","howto.step3.title":"Підтвердіть","howto.step3.description":"Натисніть «Підключити» в діалоговому вікні","web.orders":"Мої замовлення","web.settings":"Налаштування","web.exit":"Вихід","web.back":"← Назад","settings.accountInfo":"Інформація про акаунт","settings.language":"Мова","settings.currency":"Валюта відображення","settings.currencyDesc":"Оберіть валюту для відображення цін та балансу в додатку.","settings.webCredentials":"Дані для входу на сайт","settings.webCredentialsDesc":"Ці дані використовуються для входу у веб-інтерфейс поза Telegram. Хоча ми не обмежуємо вас у виборі пароля, але наполегливо рекомендуємо вказувати складний","settings.login":"Логін","settings.loginPlaceholder":"Введіть новий логін","settings.newPassword":"Новий пароль","settings.passwordPlaceholder":"Не менше %1% символів","settings.repeatPassword":"Повторіть пароль","settings.repeatPasswordPlaceholder":"Повторіть новий пароль","settings.passwordMismatch":"Паролі не збігаються","settings.saved":"Збережено!","settings.saveError":"Помилка збереження","settings.saving":"Збереження…","settings.saveCredentials":"Зберегти дані","settings.copy":"Копіювати","settings.reset":"Скинути","settings.apiKeyHint":"Використовуйте API-ключ для входу у <a href=\\"https://%1%\\" target=\'_blank\'>веб-інтерфейс</a> без Telegram, а також для інтеграції з іншими нашими продуктами. Не передавайте його третім особам","settings.referral":"Реферал (ID запрошувача)","settings.referralDesc":"Якщо ви пропустили реферальне посилання, ви можете вказати ID запрошувача тут. Застосовується лише один раз.","settings.referralApplied":"ID запрошувача","settings.referralAppliedAlert":"ID запрошувача скопійовано в буфер обміну.","settings.referralHostId":"Ваш ID запрошувача","settings.referralHostIdPlaceholder":"Введіть ID користувача (тільки цифри)","settings.referralHostIdInvalid":"Невірний формат ID. Використовуйте тільки цифри.","settings.referralApply":"Застосувати ID запрошувача","settings.referralSaved":"Реферал застосовано!","settings.referralErr.already_applied":"Реферал вже був застосований.","settings.referralErr.invalid_ref_host":"Невірний ID запрошувача.","settings.referralErr.same_account":"Неможна використовувати власний ID як реферал.","login.tabCredentials":"Логін та пароль","login.tabApiKey":"API-ключ","login.tabRegister":"Реєстрація","login.labelLogin":"Логін","login.labelPassword":"Пароль","login.labelConfirmPassword":"Підтвердження пароля","login.labelApiKey":"API-ключ","login.placeholderLogin":"Введіть логін","login.placeholderPassword":"Введіть пароль","login.placeholderConfirmPassword":"Підтвердіть пароль","login.placeholderApiKey":"Введіть API-ключ","login.signIn":"Увійти","login.signInApiKey":"Увійти за API-ключем","login.signUp":"Зареєструватися","login.signingIn":"Входимо…","login.signingUp":"Реєструємося…","login.orUseApiKey":"або увійдіть за API-ключем","login.orUseCredentials":"або увійдіть за логіном та паролем","login.switchToApiKey":"Увійти за API-ключем","login.switchToCredentials":"Увійти за логіном та паролем","login.errLoginRequired":"Введіть логін та пароль","login.errPasswordRequired":"Введіть пароль","login.errConfirmPasswordRequired":"Підтвердіть пароль","login.errPasswordMismatch":"Паролі не збігаються","login.errApiKeyRequired":"Введіть API-ключ","login.errIncorrect":"Невірний логін або пароль","login.errInvalidKey":"Невірний API-ключ","login.errServer":"Помилка сервера, спробуйте ще раз","login.errRegistration":"Помилка реєстрації","login.tabTelegram":"Через Telegram","login.tg.title":"Вхід через Telegram","login.tg.instruction":"1. Надішліть команду нижче боту <a href=\\"https://t.me/%1%\\" target=\\"_blank\\">@%1%</a>\\n2. Після відправки натисніть кнопку «Підтвердити вхід»","login.tg.commandLabel":"Команда для бота:","login.tg.showCommand":"Показати","login.tg.hideCommand":"Приховати","login.tg.copyCommand":"Копіювати","login.tg.copied":"Команда скопійована!","login.tg.timerLabel":"Код дійсний: %1%","login.tg.timerExpired":"Термін дії коду закінчився","login.tg.verifyButton":"Підтвердити вхід","login.tg.verifying":"Перевіряємо…","login.tg.requestNew":"Запросити новий код","login.tg.loading":"Генеруємо код…","login.tg.enter_correct":"Особистість підтверджена. Поверніться на сайт і натисніть на кнопку \\"%1%\\" для завершення","login.tg.enter_fail":"Не вдалося виконати дію. Переконайтеся, що вказаний ключ коректний, а термін дії не закінчився","login.tg.errNotSent":"Не вдалося підтвердити вхід. Переконайтеся, що ви надіслали команду боту, і спробуйте ще раз. Якщо код закінчився — запросіть новий.","lang.ru":"Російська","lang.en":"Англійська","lang.uk":"Українська","footer.info":"MTProto проксі працює тільки з офіційними додатками Telegram","instructionModalTitleVpn":"Інструкція з підключення VPN","instructionModalTitleProxy":"Інструкція з підключення Proxy","instructionModalSendToTg":"📩 Надіслати в Telegram","instructionModalSentToTg":"Інструкція надіслана у ваші особисті повідомлення Telegram","settings.name":"Ваше ім\'я","settings.nameDesc":"Вкажіть ім\'я для персоналізації звернень у додатку.","settings.namePlaceholder":"Введіть ім\'я (3-15 символів)","settings.nameInvalid":"Допускаються лише кирилиця, латиниця, цифри та пробіли (3-15 символів)","settings.promoTitle":"Активація промокоду","settings.promoDesc":"Якщо у Вас є промокод, введіть його тут, щоб отримати приємний бонус на Ваш баланс.","settings.promoPlaceholder":"Введіть промокод","settings.promoApply":"Застосувати промокод","settings.promoApplied":"Промокод успішно застосовано!","adminDashboardTitle":"Статистика (Дашборд)","adminDashboardActiveOrders":"Активність підписок","adminDashboardActiveLabel":"Активні","adminDashboardExpiredLabel":"Закінчилися","adminDashboardOrdersByTariff":"Підписки за Тарифами","adminDashboardPayments":"Платежі","adminDashboardTrial":"Тестовий період","adminDashboardLang":"Мова","adminDashboardCurrency":"Валюта","adminDashboardActivity":"Активність користувачів","adminDashboardOrdersPerUser":"Кількість підписок на юзера","adminDashboardRefIncome":"Дохід з рефералів","applicationAdminBackButton":"Назад"}');
;// ./src/lang/shared.json
const shared_namespaceObject = {};
;// ./src/lang/index.ts

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};




const langSharedData = __spreadValues({}, shared_namespaceObject);
const langs = {
  ["en"]: __spreadValues(__spreadValues({}, langSharedData), en_namespaceObject),
  ["uk"]: __spreadValues(__spreadValues({}, langSharedData), uk_namespaceObject),
  ["ru"]: __spreadValues(__spreadValues({}, langSharedData), ru_namespaceObject)
};
const langString = (lang, id, ...args) => {
  if (!lang) {
    lang = "en";
  }
  if (typeof id === "object") {
    return id[lang];
  }
  return langStringSystem(lang, id, true, ...args);
};
const langStringExist = (key) => {
  if (!key) return false;
  return !!langs["en"][key];
};
const langStringSystem = (lang, id, deep, ...args) => {
  if (!getAllLangs().includes(lang)) {
    lang = "en";
  }
  let string = langs[lang][id];
  if (!string) {
    return "";
  }
  args.map((q, ii) => {
    const i = ii + 1;
    const reg = new RegExp(`%${i}%`, "gi");
    string = string.replace(reg, String(q));
  });
  if (deep) {
    const test = string.match(new RegExp("%[a-zA-Z-_0-9]+%", "gi"));
    test == null ? void 0 : test.forEach((value, i) => {
      const res = langStringSystem(
        lang,
        value.replace(new RegExp("%", "gi"), ""),
        false,
        ...args
      );
      if (res) {
        string = string.replace(value, res);
      }
    });
  }
  return string;
};
const allLangStrings = (id, ...args) => {
  const res = [];
  Object.values(langs).forEach((data) => {
    let string = data[id];
    if (!string) {
      return "";
    }
    args.map((q, ii) => {
      const i = ii + 1;
      const reg = new RegExp(`%${i}%`, "gi");
      string = string.replace(reg, String(q));
    });
    res.push(string);
  });
  return res;
};
const getAllLangsKeys = () => {
  const res = [];
  Object.values(langs).forEach((data) => {
    Object.keys(data).forEach((key) => {
      if (!res.includes(key)) {
        res.push(key);
      }
    });
  });
  return res;
};
const getAllLangs = () => {
  return Object.keys(langs);
};
const getAllLangData = () => {
  return langs;
};

// EXTERNAL MODULE: ./node_modules/md5/md5.js
var md5 = __webpack_require__(3503);
var md5_default = /*#__PURE__*/__webpack_require__.n(md5);
;// ./src/utils/System.ts



function getRandomInt(min, max) {
  return Math.floor(getRandomFloat(min, max));
}
function getRandomFloat(min, max) {
  if (max < min) {
    [max, min] = [min, max];
  }
  return Math.max(
    min,
    Math.min(min - 0.5 + Math.random() * (max - min + 1), max)
  );
}
function randElIndex(arr) {
  const newArr = [...arr];
  return getRandomInt(0, newArr.length - 1);
}
function randEl(arr) {
  const newArr = [...arr];
  return newArr[getRandomInt(0, newArr.length - 1)];
}
const System = new class {
  constructor() {
    this.getText = (text) => {
      const res = {};
      getAllLangs().forEach((key) => {
        res[key] = langString(key, text);
      });
      return res;
    };
    this.randomElement = randEl;
    this.randomElementIndex = randElIndex;
    this.getRandomInt = getRandomInt;
    this.getRandomFloat = getRandomFloat;
  }
  isEmoji(str) {
    const emojiRegex = new RegExp(
      "^((?:\\p{Extended_Pictographic}(?:\\p{Emoji_Modifier}|\\uFE0F)?(?:\\u200D\\p{Extended_Pictographic}(?:\\p{Emoji_Modifier}|\\uFE0F)?)*)|(?:\\p{Regional_Indicator}{2}))$",
      "u"
    );
    return emojiRegex.test(str);
  }
  roundNumber(value, decimals, mode = "round") {
    const factor = Math.pow(10, decimals);
    if (mode === "truncate") {
      return Math.trunc(value * factor) / factor;
    } else {
      return Math.round(value * factor) / factor;
    }
  }
  extractURL(string) {
    const urlRegex = /^(?:https?:\/\/)?(?:www\.)?([\w-]+\.[\w-]+)/i;
    const match = string.match(urlRegex);
    if (match) {
      const fullURL = match[0];
      const domain = match[1];
      const url = fullURL.startsWith("http") ? fullURL : `https://${fullURL}`;
      return { url, name: domain };
    }
    return null;
  }
  randomString(length, characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
    let result = "";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
  toBinary(string) {
    const codeUnits = new Uint16Array(string.length);
    for (let i = 0; i < codeUnits.length; i++) {
      codeUnits[i] = string.charCodeAt(i);
    }
    const uint8Array = new Uint8Array(codeUnits.buffer);
    const chunkSize = 32768;
    let result = "";
    for (let i = 0; i < uint8Array.length; i += chunkSize) {
      const chunk = uint8Array.subarray(i, i + chunkSize);
      result += String.fromCharCode(...chunk);
    }
    return btoa(result);
  }
  fromBinary(encoded) {
    const binary = atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return String.fromCharCode(...new Uint16Array(bytes.buffer));
  }
  sleep(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  }
  chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }
  isImageLink(url) {
    const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|webp|svg)(\?.*)?$/i;
    return imageExtensions.test(url);
  }
  get test() {
    return typeof this._test === "boolean" ? this._test : typeof process !== "undefined" ? "MISSING_ENV_VAR".WORK_DEV == "1" : false;
  }
  set test(val) {
    this._test = val;
  }
  get domain() {
    return "MISSING_ENV_VAR".DOMAIN || "localhost";
  }
  md5(text) {
    return md5_default()(text);
  }
  md5_withSalt(text, salt = "wjPHTD2QjtsTYQO5ULm") {
    return md5_default()(text + salt);
  }
  numberFormat(num, replaceIntEnd = true) {
    if (typeof num !== "number") {
      num = Number(num);
    }
    let n = num.toFixed(2);
    if (replaceIntEnd) {
      n = n.replace(".00", "");
    }
    return n.replace(/.+?(?=\D|$)/, function(f) {
      return f.replace(/(\d)(?=(?:\d\d\d)+$)/g, "$1 ");
    });
  }
  get timestamp() {
    return Math.floor(this.timestampMS / 1e3);
  }
  get timestampMS() {
    return Date.now();
  }
  get fullDateTime() {
    const dateTime = /* @__PURE__ */ new Date();
    return `${this.digitFormat(dateTime.getDate())}.${this.digitFormat(
      dateTime.getMonth() + 1
    )}.${this.digitFormat(dateTime.getFullYear())} ${this.digitFormat(
      dateTime.getHours()
    )}:${this.digitFormat(dateTime.getMinutes())}`;
  }
  get fullDateTimeS() {
    const dateTime = /* @__PURE__ */ new Date();
    return `${this.digitFormat(dateTime.getDate())}.${this.digitFormat(
      dateTime.getMonth() + 1
    )}.${this.digitFormat(dateTime.getFullYear())} ${this.digitFormat(
      dateTime.getHours()
    )}:${this.digitFormat(dateTime.getMinutes())}:${this.digitFormat(dateTime.getSeconds())}`;
  }
  get dateNotTime() {
    const dateTime = /* @__PURE__ */ new Date();
    return `${this.digitFormat(dateTime.getDate())}.${this.digitFormat(
      dateTime.getMonth() + 1
    )}.${this.digitFormat(dateTime.getFullYear())}`;
  }
  digitFormat(number) {
    return `0${number}`.slice(-2);
  }
  lerp2d(vector1, vector2, amount) {
    return {
      x: this.lerp(vector1.x, vector2.x, amount),
      y: this.lerp(vector1.y, vector2.y, amount)
    };
  }
  lerp(value1, value2, amount) {
    amount = amount < 0 ? 0 : amount;
    amount = amount > 1 ? 1 : amount;
    return value1 + (value2 - value1) * amount;
  }
  lerpTime(start, end, current = this.timestampMS) {
    const cnt = current - start;
    return Math.max(0, Math.min(1, cnt / (end - start)));
  }
  lerpVectors(vector1, vector2, amount) {
    return {
      x: this.lerp(vector1.x, vector2.x, amount),
      y: this.lerp(vector1.y, vector2.y, amount),
      z: this.lerp(vector1.z, vector2.z, amount)
    };
  }
  /** Полная строка с датой и временем
   * @example 20.01.2020 12:00
   * @example 12:00 (Дата не рисуется если она сегодняшняя)
   * @example 20.01.2020 12:00 (В любом случае будет дата, если параметр full = true)
   */
  timeStampString(time = this.timestamp, full = false) {
    const dateTimeNow = /* @__PURE__ */ new Date();
    const dateTime = new Date(time * 1e3);
    let res = `${this.digitFormat(dateTime.getHours())}:${this.digitFormat(
      dateTime.getMinutes()
    )}`;
    if (full || dateTimeNow.getDate() != dateTime.getDate() || dateTimeNow.getMonth() != dateTime.getMonth() || dateTimeNow.getFullYear() != dateTime.getFullYear()) {
      res = `${this.digitFormat(dateTime.getDate())}.${this.digitFormat(
        dateTime.getMonth() + 1
      )}${dateTimeNow.getFullYear() != dateTime.getFullYear() || full ? `.${this.digitFormat(dateTime.getFullYear())}` : ""} ${res}`;
    }
    return res;
  }
  secondsToString(duration) {
    const days = Math.floor(duration / 86400);
    const hrs = Math.floor(duration % 86400 / 3600);
    const mins = Math.floor(duration % 3600 / 60);
    const secs = duration % 60;
    let ret = "";
    if (days > 0) {
      ret += `${days}:`;
    }
    ret += `${hrs.toString().padStart(2, "0")}:`;
    ret += `${mins.toString().padStart(2, "0")}:`;
    ret += `${secs.toString().padStart(2, "0")}`;
    return ret;
  }
  msToString(duration) {
    const seconds = Math.floor(duration / 1e3);
    let ret = this.secondsToString(seconds);
    let ms = (duration % 1e3).toString();
    while (ms.length < 3) {
      ms = `0${ms}`;
    }
    ret += `.${ms}`;
    return ret;
  }
  sortArray(array, type = "DESC") {
    return array.sort((a, b) => {
      let res = 0;
      if (type !== "DESC") {
        if (a < b) {
          res = -1;
        } else if (a > b) {
          res = 1;
        }
      } else {
        if (a < b) {
          res = 1;
        } else if (a > b) {
          res = -1;
        }
      }
      return res;
    });
  }
  sortArrayByKeys(items, keyOrder) {
    const keyOrderMap = new Map(keyOrder.map((key, index) => [key, index]));
    return [...items].sort((a, b) => {
      let orderA = keyOrder.length;
      let orderB = keyOrder.length;
      for (const [key, index] of keyOrderMap) {
        if (a.startsWith(key)) {
          orderA = index;
          break;
        }
      }
      for (const [key, index] of keyOrderMap) {
        if (b.startsWith(key)) {
          orderB = index;
          break;
        }
      }
      return orderA - orderB;
    });
  }
  sortArrayObjects(array, param) {
    return array.sort((a, b) => {
      let res = 0;
      param.map((q) => {
        if (res != 0) {
          return;
        }
        const aval = a[q.id];
        const bval = b[q.id];
        if (q.type !== "DESC") {
          if (aval < bval) {
            res = -1;
          } else if (aval > bval) {
            res = 1;
          }
        } else {
          if (aval < bval) {
            res = 1;
          } else if (aval > bval) {
            res = -1;
          }
        }
      });
      return res;
    });
  }
  toBuffer(ab) {
    const buf = Buffer.alloc(ab.byteLength);
    const view = new Uint8Array(ab);
    for (let i = 0; i < buf.length; ++i) {
      buf[i] = view[i];
    }
    return buf;
  }
}();

;// ./src/config/project.ts


const WEB_PAYMENT = false;
let PAYMENT_MIN_SUM = 0;
const RecalculatePaymentMinSum = () => {
  PAYMENT_MIN_SUM = CurrencyConvertToUSD(100, "RUB");
};
const PAYMENT_METHODS_LIST = [
  {
    id: "morune2",
    name: "paymentMethodMorune2",
    limitMethods: ["sbp"],
    sbpDirect: true
  },
  {
    id: "crypto",
    name: "paymentMethodCrypto"
  }
  // {
  //   id: 'telegram',
  //   name: 'paymentMethodTelegram',
  // },
  // {
  //   id: 'morune',
  //   name: 'paymentMethodMorune',
  // },
  // {
  //   id: 'freekassa',
  //   name: 'paymentMethodFreekassa',
  //   email: true,
  // },
];

;// ./src/config/tarifs.ts

var tarifs_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var tarifs_getOwnPropSymbols = Object.getOwnPropertySymbols;
var tarifs_hasOwnProp = Object.prototype.hasOwnProperty;
var tarifs_propIsEnum = Object.prototype.propertyIsEnumerable;
var tarifs_defNormalProp = (obj, key, value) => key in obj ? tarifs_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var tarifs_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (tarifs_hasOwnProp.call(b, prop))
      tarifs_defNormalProp(a, prop, b[prop]);
  if (tarifs_getOwnPropSymbols)
    for (var prop of tarifs_getOwnPropSymbols(b)) {
      if (tarifs_propIsEnum.call(b, prop))
        tarifs_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

const PAYMENT_TRAFFIC_RESET = true;
const PAYMENT_TRAFFIC_RESET_ONLYFULL = true;
const TARIF_LIST_TEMPLATE = [
  {
    id: "test.drive",
    name: "tarif.test_drive",
    desc: "tarif_desc_drive",
    // marzbanName: 'start',
    days: 7,
    priceCurrency: 70,
    priceCurrencyName: "RUB",
    oldPriceCurrencyName: "RUB",
    oldPriceCurrency: 300,
    gb: 7,
    gbDaysReset: 7,
    gbResetName: "applicationCabinetOrderTraficWeek",
    trialHours: 72
  },
  {
    id: "example",
    name: "tarif.start",
    desc: "tarif_desc_start",
    // marzbanName: 'start',
    days: 30,
    priceCurrency: 169,
    priceCurrencyName: "RUB",
    oldPriceCurrencyName: "RUB",
    oldPriceCurrency: 300,
    gb: 180,
    gbDaysReset: 30,
    gbResetName: "applicationCabinetOrderTraficMonth"
  },
  {
    id: "middle",
    name: "tarif.gamer",
    desc: "tarif_desc_gamer",
    // marzbanName: 'gamer',
    days: 30,
    priceCurrency: 279,
    priceCurrencyName: "RUB",
    oldPriceCurrencyName: "RUB",
    oldPriceCurrency: 700,
    gb: 400,
    gbDaysReset: 30,
    gbResetName: "applicationCabinetOrderTraficMonth"
  },
  {
    id: "pro",
    name: "tarif.pro",
    desc: "tarif_desc_unlim",
    // marzbanName: 'unlim',
    days: 30,
    priceCurrency: 439,
    priceCurrencyName: "RUB",
    oldPriceCurrencyName: "RUB",
    oldPriceCurrency: 1e3,
    gb: 1024,
    gbDaysReset: 30,
    gbResetName: "applicationCabinetOrderTraficMonth"
  },
  {
    id: "ultra",
    name: "tarif.ultra",
    desc: "tarif_desc_ultra",
    days: 30,
    priceCurrency: 749,
    priceCurrencyName: "RUB",
    oldPriceCurrencyName: "RUB",
    oldPriceCurrency: 2500,
    gb: 5120,
    gbDaysReset: 30,
    gbResetName: "applicationCabinetOrderTraficMonth"
  }
];
const oldTarifsRemove = [
  {
    id: "http_gamer",
    change: "example"
  },
  {
    id: "http_pro",
    change: "pro"
  }
];
let TARIF_LIST = [];
const CalculateTarifPrice = () => {
  TARIF_LIST = [];
  TARIF_LIST_TEMPLATE.map((tarif) => {
    TARIF_LIST.push(__spreadProps(tarifs_spreadValues({}, tarif), {
      id: tarif.id,
      price: CurrencyConvertToUSD(tarif.priceCurrency, tarif.priceCurrencyName),
      oldPrice: tarif.oldPriceCurrency ? CurrencyConvertToUSD(
        tarif.oldPriceCurrency,
        tarif.oldPriceCurrencyName
      ) : void 0
    }));
  });
};
setTimeout(() => {
  CalculateTarifPrice();
}, 1);

;// ./src/config/currency.ts




const CURRENCY_LIST = {
  USD: 1,
  UAH: 41,
  RUB: 84
};
const CURRENCY_LIST_ICON = {
  USD: "$",
  UAH: "\u20B4",
  RUB: "\u20BD"
};
const SetCurrentCurrency = (currency) => {
  Object.keys(CURRENCY_LIST).forEach((key) => {
    if (currency[key]) {
      CURRENCY_LIST[key] = currency[key];
    }
  });
  CalculateTarifPrice();
  RecalculatePaymentMinSum();
};
const AllCurrencyList = Object.keys(CURRENCY_LIST);
const CurrencyConvert = (amountInUSD, currency) => {
  const diff = CURRENCY_LIST[currency];
  if (!diff) return 0;
  return amountInUSD * diff;
};
const CurrencyConvertToUSD = (amount, currency) => {
  const diff = CURRENCY_LIST[currency];
  if (!diff) return 0;
  return amount / diff;
};
const CurrencyConvertText = (amountInUSD, currency, symbol = false, mode = "round") => {
  return `${symbol ? `${CURRENCY_LIST_ICON[currency]}` : ""}${System.numberFormat(System.roundNumber(CurrencyConvert(amountInUSD, currency), 2, mode))}${!symbol ? ` ${currency}` : ""}`;
};
const DetectCurrencyByLang = (lang) => {
  if (lang === "ru") return "RUB";
  if (lang === "uk") return "UAH";
  return "USD";
};

;// ./src/frontend/pages/base.tsx




class BasePage extends react.Component {
  constructor(props) {
    super(props);
    this.LangString = (key, ...args) => {
      return langString(this.props.lang, key, ...args);
    };
  }
  get currency() {
    return DetectCurrencyByLang(this.props.lang);
  }
}

;// ./src/frontend/modules/icon.ts

const navIcon = (name) => {
  var _a;
  for (const format of ["svg", "png"]) {
    try {
      const itm = (_a = __webpack_require__(4476)(`./${name.replace("." + format, "")}.${format}`)) == null ? void 0 : _a.default;
      if (itm) return itm;
    } catch (error) {
    }
  }
};

;// ./src/config/admins.ts

const TG_ADMINS = (/* unused pure expression or super */ null && ([
  "395244822",
  // XanderWP
  "129806916",
  // S3R4
  "7042600006"
  // RocketMan Support
]));
const TG_SUPPORT_USERNAME = "rocketman_support";
const TG_GROUP_USERNAME = "rocketman_vpn";
const TG_SUPPORT_EMAIL = "rocketman-support@proton.me";

;// ./node_modules/axios/lib/helpers/bind.js


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

;// ./node_modules/axios/lib/utils.js




// utils is a library of generic helper functions non-specific to axios

const {toString: utils_toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = utils_toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
}

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

const [isReadableStream, isRequest, isResponse, isHeaders] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(kindOfTest);

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
}

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const utils_hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
}

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
}

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  }

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
}

const noop = () => {}

const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
}

const ALPHA = 'abcdefghijklmnopqrstuvwxyz'

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0]
  }

  return str;
}

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  }

  return visit(obj, 0);
}

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34

const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }

  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener("message", ({source, data}) => {
      if (source === _global && data === token) {
        callbacks.length && callbacks.shift()();
      }
    }, false);

    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    }
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(
  typeof setImmediate === 'function',
  isFunction(_global.postMessage)
);

const asap = typeof queueMicrotask !== 'undefined' ?
  queueMicrotask.bind(_global) : ( typeof process !== 'undefined' && process.nextTick || _setImmediate);

// *********************

/* harmony default export */ const utils = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty: utils_hasOwnProperty,
  hasOwnProp: utils_hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap
});

;// ./node_modules/axios/lib/core/AxiosError.js




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  if (response) {
    this.response = response;
    this.status = response.status ? response.status : null;
  }
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});

const AxiosError_prototype = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(AxiosError_prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(AxiosError_prototype);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

/* harmony default export */ const core_AxiosError = (AxiosError);

;// ./node_modules/axios/lib/helpers/null.js
// eslint-disable-next-line strict
/* harmony default export */ const helpers_null = (null);

;// ./node_modules/axios/lib/helpers/toFormData.js




// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored


/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils.isPlainObject(thing) || utils.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (helpers_null || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils.isSpecCompliantForm(formData);

  if (!utils.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils.isBlob(value)) {
      throw new core_AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils.isArray(value) && isFlatArray(value)) ||
        ((utils.isFileList(value) || utils.endsWith(key, '[]')) && (arr = utils.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils.forEach(value, function each(el, key) {
      const result = !(utils.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/* harmony default export */ const helpers_toFormData = (toFormData);

;// ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && helpers_toFormData(params, this, options);
}

const AxiosURLSearchParams_prototype = AxiosURLSearchParams.prototype;

AxiosURLSearchParams_prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

AxiosURLSearchParams_prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/* harmony default export */ const helpers_AxiosURLSearchParams = (AxiosURLSearchParams);

;// ./node_modules/axios/lib/helpers/buildURL.js





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function buildURL_encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?(object|Function)} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || buildURL_encode;

  if (utils.isFunction(options)) {
    options = {
      serialize: options
    };
  } 

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils.isURLSearchParams(params) ?
      params.toString() :
      new helpers_AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

;// ./node_modules/axios/lib/core/InterceptorManager.js




class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

/* harmony default export */ const core_InterceptorManager = (InterceptorManager);

;// ./node_modules/axios/lib/defaults/transitional.js


/* harmony default export */ const defaults_transitional = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});

;// ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js



/* harmony default export */ const classes_URLSearchParams = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : helpers_AxiosURLSearchParams);

;// ./node_modules/axios/lib/platform/browser/classes/FormData.js


/* harmony default export */ const classes_FormData = (typeof FormData !== 'undefined' ? FormData : null);

;// ./node_modules/axios/lib/platform/browser/classes/Blob.js


/* harmony default export */ const classes_Blob = (typeof Blob !== 'undefined' ? Blob : null);

;// ./node_modules/axios/lib/platform/browser/index.js




/* harmony default export */ const browser = ({
  isBrowser: true,
  classes: {
    URLSearchParams: classes_URLSearchParams,
    FormData: classes_FormData,
    Blob: classes_Blob
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});

;// ./node_modules/axios/lib/platform/common/utils.js
const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

const _navigator = typeof navigator === 'object' && navigator || undefined;

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = hasBrowserEnv &&
  (!_navigator || ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();

const origin = hasBrowserEnv && window.location.href || 'http://localhost';



;// ./node_modules/axios/lib/platform/index.js



/* harmony default export */ const platform = ({
  ...common_utils_namespaceObject,
  ...browser
});

;// ./node_modules/axios/lib/helpers/toURLEncodedForm.js






function toURLEncodedForm(data, options) {
  return helpers_toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

;// ./node_modules/axios/lib/helpers/formDataToJSON.js




/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];

    if (name === '__proto__') return true;

    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
    const obj = {};

    utils.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/* harmony default export */ const helpers_formDataToJSON = (formDataToJSON);

;// ./node_modules/axios/lib/defaults/index.js










/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: defaults_transitional,

  adapter: ['xhr', 'http', 'fetch'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils.isObject(data);

    if (isObjectPayload && utils.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils.isFormData(data);

    if (isFormData) {
      return hasJSONContentType ? JSON.stringify(helpers_formDataToJSON(data)) : data;
    }

    if (utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data) ||
      utils.isReadableStream(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return helpers_toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (utils.isResponse(data) || utils.isReadableStream(data)) {
      return data;
    }

    if (data && utils.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw core_AxiosError.from(e, core_AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

/* harmony default export */ const lib_defaults = (defaults);

;// ./node_modules/axios/lib/helpers/parseHeaders.js




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ const parseHeaders = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
});

;// ./node_modules/axios/lib/core/AxiosHeaders.js





const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils.isString(value)) return;

  if (utils.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite)
    } else if(utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils.isHeaders(header)) {
      for (const [key, value] of header.entries()) {
        setHeader(value, key, rewrite);
      }
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils.forEach(this, (value, header) => {
      const key = utils.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
utils.reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

utils.freezeMethods(AxiosHeaders);

/* harmony default export */ const core_AxiosHeaders = (AxiosHeaders);

;// ./node_modules/axios/lib/core/transformData.js






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || lib_defaults;
  const context = response || config;
  const headers = core_AxiosHeaders.from(context.headers);
  let data = context.data;

  utils.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

;// ./node_modules/axios/lib/cancel/isCancel.js


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

;// ./node_modules/axios/lib/cancel/CanceledError.js





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  core_AxiosError.call(this, message == null ? 'canceled' : message, core_AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, core_AxiosError, {
  __CANCEL__: true
});

/* harmony default export */ const cancel_CanceledError = (CanceledError);

;// ./node_modules/axios/lib/core/settle.js




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new core_AxiosError(
      'Request failed with status code ' + response.status,
      [core_AxiosError.ERR_BAD_REQUEST, core_AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

;// ./node_modules/axios/lib/helpers/parseProtocol.js


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

;// ./node_modules/axios/lib/helpers/speedometer.js


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/* harmony default export */ const helpers_speedometer = (speedometer);

;// ./node_modules/axios/lib/helpers/throttle.js
/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1000 / freq;
  let lastArgs;
  let timer;

  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn.apply(null, args);
  }

  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if ( passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs)
        }, threshold - passed);
      }
    }
  }

  const flush = () => lastArgs && invoke(lastArgs);

  return [throttled, flush];
}

/* harmony default export */ const helpers_throttle = (throttle);

;// ./node_modules/axios/lib/helpers/progressEventReducer.js




const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = helpers_speedometer(50, 250);

  return helpers_throttle(e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? 'download' : 'upload']: true
    };

    listener(data);
  }, freq);
}

const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;

  return [(loaded) => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
}

const asyncDecorator = (fn) => (...args) => utils.asap(() => fn(...args));

;// ./node_modules/axios/lib/helpers/isURLSameOrigin.js


/* harmony default export */ const isURLSameOrigin = (platform.hasStandardBrowserEnv ? ((origin, isMSIE) => (url) => {
  url = new URL(url, platform.origin);

  return (
    origin.protocol === url.protocol &&
    origin.host === url.host &&
    (isMSIE || origin.port === url.port)
  );
})(
  new URL(platform.origin),
  platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
) : () => true);

;// ./node_modules/axios/lib/helpers/cookies.js



/* harmony default export */ const cookies = (platform.hasStandardBrowserEnv ?

  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + '=' + encodeURIComponent(value)];

      utils.isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());

      utils.isString(path) && cookie.push('path=' + path);

      utils.isString(domain) && cookie.push('domain=' + domain);

      secure === true && cookie.push('secure');

      document.cookie = cookie.join('; ');
    },

    read(name) {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return (match ? decodeURIComponent(match[3]) : null);
    },

    remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  }

  :

  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {},
    read() {
      return null;
    },
    remove() {}
  });


;// ./node_modules/axios/lib/helpers/isAbsoluteURL.js


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

;// ./node_modules/axios/lib/helpers/combineURLs.js


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

;// ./node_modules/axios/lib/core/buildFullPath.js





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

;// ./node_modules/axios/lib/core/mergeConfig.js





const headersToObject = (thing) => thing instanceof core_AxiosHeaders ? { ...thing } : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, prop, caseless) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge.call({caseless}, target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, prop , caseless) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(a, b, prop , caseless);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a, prop , caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b , prop) => mergeDeepProperties(headersToObject(a), headersToObject(b),prop, true)
  };

  utils.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

;// ./node_modules/axios/lib/helpers/resolveConfig.js









/* harmony default export */ const resolveConfig = ((config) => {
  const newConfig = mergeConfig({}, config);

  let {data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth} = newConfig;

  newConfig.headers = headers = core_AxiosHeaders.from(headers);

  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);

  // HTTP basic authentication
  if (auth) {
    headers.set('Authorization', 'Basic ' +
      btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : ''))
    );
  }

  let contentType;

  if (utils.isFormData(data)) {
    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(undefined); // Let the browser set it
    } else if ((contentType = headers.getContentType()) !== false) {
      // fix semicolon duplication issue for ReactNative FormData implementation
      const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
      headers.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
    }
  }

  // Add xsrf header
  // This is only done if running in a standard browser environment.
  // Specifically not if we're in a web worker, or react-native.

  if (platform.hasStandardBrowserEnv) {
    withXSRFToken && utils.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));

    if (withXSRFToken || (withXSRFToken !== false && isURLSameOrigin(newConfig.url))) {
      // Add xsrf header
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);

      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }

  return newConfig;
});


;// ./node_modules/axios/lib/adapters/xhr.js











const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

/* harmony default export */ const xhr = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig(config);
    let requestData = _config.data;
    const requestHeaders = core_AxiosHeaders.from(_config.headers).normalize();
    let {responseType, onUploadProgress, onDownloadProgress} = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;

    function done() {
      flushUpload && flushUpload(); // flush events
      flushDownload && flushDownload(); // flush events

      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);

      _config.signal && _config.signal.removeEventListener('abort', onCanceled);
    }

    let request = new XMLHttpRequest();

    request.open(_config.method.toUpperCase(), _config.url, true);

    // Set the request timeout in MS
    request.timeout = _config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = core_AxiosHeaders.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new core_AxiosError('Request aborted', core_AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new core_AxiosError('Network Error', core_AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = _config.transitional || defaults_transitional;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new core_AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? core_AxiosError.ETIMEDOUT : core_AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = _config.responseType;
    }

    // Handle progress if needed
    if (onDownloadProgress) {
      ([downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true));
      request.addEventListener('progress', downloadThrottled);
    }

    // Not all browsers support upload events
    if (onUploadProgress && request.upload) {
      ([uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress));

      request.upload.addEventListener('progress', uploadThrottled);

      request.upload.addEventListener('loadend', flushUpload);
    }

    if (_config.cancelToken || _config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new cancel_CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(_config.url);

    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new core_AxiosError('Unsupported protocol ' + protocol + ':', core_AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
});

;// ./node_modules/axios/lib/helpers/composeSignals.js




const composeSignals = (signals, timeout) => {
  const {length} = (signals = signals ? signals.filter(Boolean) : []);

  if (timeout || length) {
    let controller = new AbortController();

    let aborted;

    const onabort = function (reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof core_AxiosError ? err : new cancel_CanceledError(err instanceof Error ? err.message : err));
      }
    }

    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new core_AxiosError(`timeout ${timeout} of ms exceeded`, core_AxiosError.ETIMEDOUT))
    }, timeout)

    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach(signal => {
          signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
        });
        signals = null;
      }
    }

    signals.forEach((signal) => signal.addEventListener('abort', onabort));

    const {signal} = controller;

    signal.unsubscribe = () => utils.asap(unsubscribe);

    return signal;
  }
}

/* harmony default export */ const helpers_composeSignals = (composeSignals);

;// ./node_modules/axios/lib/helpers/trackStream.js

const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;

  if (!chunkSize || len < chunkSize) {
    yield chunk;
    return;
  }

  let pos = 0;
  let end;

  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
}

const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
}

const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }

  const reader = stream.getReader();
  try {
    for (;;) {
      const {done, value} = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
}

const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);

  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  }

  return new ReadableStream({
    async pull(controller) {
      try {
        const {done, value} = await iterator.next();

        if (done) {
         _onFinish();
          controller.close();
          return;
        }

        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator.return();
    }
  }, {
    highWaterMark: 2
  })
}

;// ./node_modules/axios/lib/adapters/fetch.js










const isFetchSupported = typeof fetch === 'function' && typeof Request === 'function' && typeof Response === 'function';
const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === 'function';

// used only inside the fetch adapter
const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ?
    ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) :
    async (str) => new Uint8Array(await new Response(str).arrayBuffer())
);

const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false
  }
}

const supportsRequestStream = isReadableStreamSupported && test(() => {
  let duplexAccessed = false;

  const hasContentType = new Request(platform.origin, {
    body: new ReadableStream(),
    method: 'POST',
    get duplex() {
      duplexAccessed = true;
      return 'half';
    },
  }).headers.has('Content-Type');

  return duplexAccessed && !hasContentType;
});

const DEFAULT_CHUNK_SIZE = 64 * 1024;

const supportsResponseStream = isReadableStreamSupported &&
  test(() => utils.isReadableStream(new Response('').body));


const resolvers = {
  stream: supportsResponseStream && ((res) => res.body)
};

isFetchSupported && (((res) => {
  ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(type => {
    !resolvers[type] && (resolvers[type] = utils.isFunction(res[type]) ? (res) => res[type]() :
      (_, config) => {
        throw new core_AxiosError(`Response type '${type}' is not supported`, core_AxiosError.ERR_NOT_SUPPORT, config);
      })
  });
})(new Response));

const getBodyLength = async (body) => {
  if (body == null) {
    return 0;
  }

  if(utils.isBlob(body)) {
    return body.size;
  }

  if(utils.isSpecCompliantForm(body)) {
    const _request = new Request(platform.origin, {
      method: 'POST',
      body,
    });
    return (await _request.arrayBuffer()).byteLength;
  }

  if(utils.isArrayBufferView(body) || utils.isArrayBuffer(body)) {
    return body.byteLength;
  }

  if(utils.isURLSearchParams(body)) {
    body = body + '';
  }

  if(utils.isString(body)) {
    return (await encodeText(body)).byteLength;
  }
}

const resolveBodyLength = async (headers, body) => {
  const length = utils.toFiniteNumber(headers.getContentLength());

  return length == null ? getBodyLength(body) : length;
}

/* harmony default export */ const adapters_fetch = (isFetchSupported && (async (config) => {
  let {
    url,
    method,
    data,
    signal,
    cancelToken,
    timeout,
    onDownloadProgress,
    onUploadProgress,
    responseType,
    headers,
    withCredentials = 'same-origin',
    fetchOptions
  } = resolveConfig(config);

  responseType = responseType ? (responseType + '').toLowerCase() : 'text';

  let composedSignal = helpers_composeSignals([signal, cancelToken && cancelToken.toAbortSignal()], timeout);

  let request;

  const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
      composedSignal.unsubscribe();
  });

  let requestContentLength;

  try {
    if (
      onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' &&
      (requestContentLength = await resolveBodyLength(headers, data)) !== 0
    ) {
      let _request = new Request(url, {
        method: 'POST',
        body: data,
        duplex: "half"
      });

      let contentTypeHeader;

      if (utils.isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
        headers.setContentType(contentTypeHeader)
      }

      if (_request.body) {
        const [onProgress, flush] = progressEventDecorator(
          requestContentLength,
          progressEventReducer(asyncDecorator(onUploadProgress))
        );

        data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
      }
    }

    if (!utils.isString(withCredentials)) {
      withCredentials = withCredentials ? 'include' : 'omit';
    }

    // Cloudflare Workers throws when credentials are defined
    // see https://github.com/cloudflare/workerd/issues/902
    const isCredentialsSupported = "credentials" in Request.prototype;
    request = new Request(url, {
      ...fetchOptions,
      signal: composedSignal,
      method: method.toUpperCase(),
      headers: headers.normalize().toJSON(),
      body: data,
      duplex: "half",
      credentials: isCredentialsSupported ? withCredentials : undefined
    });

    let response = await fetch(request);

    const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');

    if (supportsResponseStream && (onDownloadProgress || (isStreamResponse && unsubscribe))) {
      const options = {};

      ['status', 'statusText', 'headers'].forEach(prop => {
        options[prop] = response[prop];
      });

      const responseContentLength = utils.toFiniteNumber(response.headers.get('content-length'));

      const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
        responseContentLength,
        progressEventReducer(asyncDecorator(onDownloadProgress), true)
      ) || [];

      response = new Response(
        trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
          flush && flush();
          unsubscribe && unsubscribe();
        }),
        options
      );
    }

    responseType = responseType || 'text';

    let responseData = await resolvers[utils.findKey(resolvers, responseType) || 'text'](response, config);

    !isStreamResponse && unsubscribe && unsubscribe();

    return await new Promise((resolve, reject) => {
      settle(resolve, reject, {
        data: responseData,
        headers: core_AxiosHeaders.from(response.headers),
        status: response.status,
        statusText: response.statusText,
        config,
        request
      })
    })
  } catch (err) {
    unsubscribe && unsubscribe();

    if (err && err.name === 'TypeError' && /fetch/i.test(err.message)) {
      throw Object.assign(
        new core_AxiosError('Network Error', core_AxiosError.ERR_NETWORK, config, request),
        {
          cause: err.cause || err
        }
      )
    }

    throw core_AxiosError.from(err, err && err.code, config, request);
  }
}));



;// ./node_modules/axios/lib/adapters/adapters.js






const knownAdapters = {
  http: helpers_null,
  xhr: xhr,
  fetch: adapters_fetch
}

utils.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

const renderReason = (reason) => `- ${reason}`;

const isResolvedHandle = (adapter) => utils.isFunction(adapter) || adapter === null || adapter === false;

/* harmony default export */ const adapters = ({
  getAdapter: (adapters) => {
    adapters = utils.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    const rejectedReasons = {};

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;

      adapter = nameOrAdapter;

      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

        if (adapter === undefined) {
          throw new core_AxiosError(`Unknown adapter '${id}'`);
        }
      }

      if (adapter) {
        break;
      }

      rejectedReasons[id || '#' + i] = adapter;
    }

    if (!adapter) {

      const reasons = Object.entries(rejectedReasons)
        .map(([id, state]) => `adapter ${id} ` +
          (state === false ? 'is not supported by the environment' : 'is not available in the build')
        );

      let s = length ?
        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
        'as no adapter specified';

      throw new core_AxiosError(
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }

    return adapter;
  },
  adapters: knownAdapters
});

;// ./node_modules/axios/lib/core/dispatchRequest.js









/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new cancel_CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = core_AxiosHeaders.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || lib_defaults.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = core_AxiosHeaders.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = core_AxiosHeaders.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

;// ./node_modules/axios/lib/env/data.js
const VERSION = "1.7.8";
;// ./node_modules/axios/lib/helpers/validator.js





const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new core_AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        core_AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

validators.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    // eslint-disable-next-line no-console
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  }
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new core_AxiosError('options must be an object', core_AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new core_AxiosError('option ' + opt + ' must be ' + result, core_AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new core_AxiosError('Unknown option ' + opt, core_AxiosError.ERR_BAD_OPTION);
    }
  }
}

/* harmony default export */ const validator = ({
  assertOptions,
  validators
});

;// ./node_modules/axios/lib/core/Axios.js











const Axios_validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new core_InterceptorManager(),
      response: new core_InterceptorManager()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};

        Error.captureStackTrace ? Error.captureStackTrace(dummy) : (dummy = new Error());

        // slice off the Error: ... line
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
        try {
          if (!err.stack) {
            err.stack = stack;
            // match without the 2 top stack lines
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
            err.stack += '\n' + stack
          }
        } catch (e) {
          // ignore the case where "stack" is an un-writable property
        }
      }

      throw err;
    }
  }

  _request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        forcedJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        clarifyTimeoutError: Axios_validators.transitional(Axios_validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (utils.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        }
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: Axios_validators.function,
          serialize: Axios_validators.function
        }, true);
      }
    }

    validator.assertOptions(config, {
      baseUrl: Axios_validators.spelling('baseURL'),
      withXsrfToken: Axios_validators.spelling('withXSRFToken')
    }, true);

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && utils.merge(
      headers.common,
      headers[config.method]
    );

    headers && utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = core_AxiosHeaders.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/* harmony default export */ const core_Axios = (Axios);

;// ./node_modules/axios/lib/cancel/CancelToken.js




/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new cancel_CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  toAbortSignal() {
    const controller = new AbortController();

    const abort = (err) => {
      controller.abort(err);
    };

    this.subscribe(abort);

    controller.signal.unsubscribe = () => this.unsubscribe(abort);

    return controller.signal;
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

/* harmony default export */ const cancel_CancelToken = (CancelToken);

;// ./node_modules/axios/lib/helpers/spread.js


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

;// ./node_modules/axios/lib/helpers/isAxiosError.js




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
}

;// ./node_modules/axios/lib/helpers/HttpStatusCode.js
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

/* harmony default export */ const helpers_HttpStatusCode = (HttpStatusCode);

;// ./node_modules/axios/lib/axios.js




















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new core_Axios(defaultConfig);
  const instance = bind(core_Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, core_Axios.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(lib_defaults);

// Expose Axios class to allow class inheritance
axios.Axios = core_Axios;

// Expose Cancel & CancelToken
axios.CanceledError = cancel_CanceledError;
axios.CancelToken = cancel_CancelToken;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = helpers_toFormData;

// Expose AxiosError class
axios.AxiosError = core_AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = core_AxiosHeaders;

axios.formToJSON = thing => helpers_formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = adapters.getAdapter;

axios.HttpStatusCode = helpers_HttpStatusCode;

axios.default = axios;

// this module should only have a default export
/* harmony default export */ const lib_axios = (axios);

;// ./src/shared/sse.ts


const isBrowser = typeof window !== "undefined" && typeof Telegram !== "undefined" && typeof window.EventSource !== "undefined";
function isTelegramEnv() {
  var _a;
  if (!isBrowser) return false;
  if (!((_a = window.Telegram) == null ? void 0 : _a.WebApp)) return false;
  const platform = window.Telegram.WebApp.platform;
  return !!platform && platform !== "unknown";
}
class SseClass {
  constructor() {
    this._OnData = [];
    const isBrowser2 = typeof window !== "undefined" && typeof Telegram !== "undefined" && typeof window.EventSource !== "undefined";
    if (!isBrowser2) return;
    setInterval(() => {
      if (this.source && !window.WebApp.api_token) {
        this.source.close();
        this.source = void 0;
      } else if (!this.source) {
        this.Init();
      }
    }, 3e3);
  }
  OnData(event, handle) {
    const id = System.randomString(5);
    this._OnData.push({ id, event, handle });
    return {
      Remove: () => {
        this._OnData = this._OnData.filter((q) => q.id !== id);
      }
    };
  }
  Init() {
    if (!window.WebApp.api_token) return;
    this.source = new EventSource(
      `/tgapi/events?${isTelegramEnv() ? `verify=${System.toBinary(Telegram.WebApp.initData)}` : `api_key=${window.WebApp.api_token}`}`
    );
    this.source.onmessage = (event) => {
      if (event.data) {
        const [name, data] = JSON.parse(System.fromBinary(event.data));
        this._OnData.forEach((q) => {
          if (q.event === name) {
            q.handle(data);
          }
        });
      }
    };
  }
}
const Sse = new SseClass();

;// ./src/config/nodes.ts

var nodes_defProp = Object.defineProperty;
var nodes_defProps = Object.defineProperties;
var nodes_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var nodes_getOwnPropSymbols = Object.getOwnPropertySymbols;
var nodes_hasOwnProp = Object.prototype.hasOwnProperty;
var nodes_propIsEnum = Object.prototype.propertyIsEnumerable;
var nodes_defNormalProp = (obj, key, value) => key in obj ? nodes_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var nodes_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (nodes_hasOwnProp.call(b, prop))
      nodes_defNormalProp(a, prop, b[prop]);
  if (nodes_getOwnPropSymbols)
    for (var prop of nodes_getOwnPropSymbols(b)) {
      if (nodes_propIsEnum.call(b, prop))
        nodes_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var nodes_spreadProps = (a, b) => nodes_defProps(a, nodes_getOwnPropDescs(b));
const protocolList = (/* unused pure expression or super */ null && (["Vless", "ShadowSocks", "HTTP", "HTTPS", "Socks5"]));
const NODES_LIST = [];
const LOCAL_NODE_HOST_URL = "local.rocketman-vpn.com";
const NODES_RESERVE_LIST =  false ? 0 : [];
const NODES_GLOBAL_LIST = [
  ...NODES_LIST.map((q) => nodes_spreadProps(nodes_spreadValues({}, q), { relay: false })),
  ...NODES_RESERVE_LIST.map((q) => nodes_spreadProps(nodes_spreadValues({}, q), { relay: true }))
];

;// ./src/shared/core.config.ts





class CoreConfig {
  constructor() {
    this.data = null;
    this._onChangeConfig = [];
    this._loaded = false;
    this.sse =  false ? 0 : void 0;
    this.GetConfigValue = (key) => {
      return this.data[key];
    };
    this.LoadConfig = () => {
      console.log(`[CoreConfig] Loading project config...`);
      lib_axios.get(
         false ? 0 : `https://${ false ? 0 : "application.rocketman-vpn.com"}:${"8443"}/api/config/project`
      ).then((res) => {
        this.data = res.data;
        this._HandleChangeConfig(this.data);
        this._loaded = true;
      });
    };
    this.LoadConfig();
  }
  get loaded() {
    return this._loaded;
  }
  OnChange(callback) {
    const id = System.randomString(5);
    this._onChangeConfig.push({ id, callback });
    return {
      Remove: () => {
        this._onChangeConfig = this._onChangeConfig.filter((q) => q.id !== id);
      }
    };
  }
  _HandleChangeConfig(value) {
    console.log(`[Core Config] _HandleChangeConfig trigger`);
    this._onChangeConfig.forEach((q) => {
      q.callback(value);
    });
  }
  get configAdmins() {
    return this.data.admins.split(",").map((q) => q.trim());
  }
  get backup_admins() {
    return this.data.backup_admins.split(",").map((q) => q.trim());
  }
  get configKeys() {
    return Object.keys(this.data);
  }
}

;// ./src/shared/core.ts


class CoreClass extends CoreConfig {
  constructor() {
    super();
  }
}
const Core = new CoreClass();

;// ./src/frontend/pages/index.tsx








const FAQ_LIST = () => {
  return [
    {
      title: "faq1title",
      text: "faq1text"
    },
    {
      title: "faq2title",
      text: "faq2text",
      arg: Core.GetConfigValue("projectBot")
    },
    {
      title: "faq3title",
      text: "faq3text",
      arg: TG_SUPPORT_USERNAME
    }
  ];
};
const FEATURES_LIST = [
  {
    icon: "anonymous",
    title: "features1Title",
    text: "features1Text"
  },
  {
    icon: "speed",
    title: "features2Title",
    text: "features2Text"
  },
  {
    icon: "easy",
    title: "features3Title",
    text: "features3Text"
  },
  {
    icon: "support",
    title: "features4Title",
    text: "features4Text"
  }
];
class LandingPage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {};
    history.pushState({}, null, "/");
  }
  render() {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("section", { id: "about" }, /* @__PURE__ */ react.createElement("div", { className: "container" }, /* @__PURE__ */ react.createElement("h2", null, this.LangString("landingFeaturesTitle")), /* @__PURE__ */ react.createElement("div", { className: "features" }, FEATURES_LIST.map((feature) => {
      return /* @__PURE__ */ react.createElement("div", { className: "feature", key: feature.icon }, /* @__PURE__ */ react.createElement(
        "img",
        {
          src: navIcon(feature.icon),
          alt: this.LangString(feature.title)
        }
      ), /* @__PURE__ */ react.createElement("h3", null, this.LangString(feature.title)), /* @__PURE__ */ react.createElement("p", null, this.LangString(feature.text)));
    })))), /* @__PURE__ */ react.createElement("section", { id: "pricing" }, /* @__PURE__ */ react.createElement("div", { className: "container" }, /* @__PURE__ */ react.createElement("h2", null, this.LangString("landingTarifs")), /* @__PURE__ */ react.createElement("div", { className: "plans" }, TARIF_LIST.map((tarif) => {
      if (tarif.disable_order) return /* @__PURE__ */ react.createElement(react.Fragment, null);
      return /* @__PURE__ */ react.createElement("div", { className: "plan", key: tarif.id }, /* @__PURE__ */ react.createElement("h3", null, this.LangString(tarif.name)), tarif.trialHours ? /* @__PURE__ */ react.createElement("span", { className: "plan-badge" }, this.LangString(
        "landingTarifsTrial",
        tarif.trialHours
      )) : /* @__PURE__ */ react.createElement(react.Fragment, null), tarif.oldPrice ? /* @__PURE__ */ react.createElement("span", { className: "plan-badge" }, this.LangString("landingTarifsDiscount"), " ", /* @__PURE__ */ react.createElement("b", null, (tarif.price / tarif.oldPrice * 100).toFixed(0), "%")) : /* @__PURE__ */ react.createElement(react.Fragment, null), /* @__PURE__ */ react.createElement("p", { className: "price" }, tarif.oldPrice ? /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("s", null, CurrencyConvertText(
        tarif.oldPrice,
        this.currency,
        true
      )), " ") : "", this.LangString(
        "landingTarifsPrice",
        CurrencyConvertText(tarif.price, this.currency, true),
        tarif.days
      )), /* @__PURE__ */ react.createElement(
        "a",
        {
          href: `https://t.me/${Core.GetConfigValue("projectBot")}`,
          target: "_blank",
          className: "btn-primary",
          rel: "noreferrer"
        },
        this.LangString("landingTarifsGo")
      ));
    })))), /* @__PURE__ */ react.createElement("section", { id: "faq" }, /* @__PURE__ */ react.createElement("div", { className: "container" }, /* @__PURE__ */ react.createElement("h2", null, "FAQ"), FAQ_LIST().map((q, i) => {
      const id = `faq_${i}`;
      return /* @__PURE__ */ react.createElement("div", { className: "faq-item", key: i }, /* @__PURE__ */ react.createElement(
        "h3",
        {
          className: `faq-question ${this.state.openedFAQ === id ? "active" : ""}`,
          onClick: () => {
            this.setState({
              openedFAQ: this.state.openedFAQ === id ? "" : id
            });
          }
        },
        this.LangString(q.title)
      ), /* @__PURE__ */ react.createElement(
        "div",
        {
          className: `faq-answer ${this.state.openedFAQ === id ? "show" : ""}`
        },
        /* @__PURE__ */ react.createElement(
          "p",
          {
            dangerouslySetInnerHTML: {
              __html: this.LangString(q.text, q.arg)
            }
          }
        )
      ));
    }))));
  }
}

;// ./src/frontend/pages/payment.tsx

var payment_defProp = Object.defineProperty;
var payment_getOwnPropSymbols = Object.getOwnPropertySymbols;
var payment_hasOwnProp = Object.prototype.hasOwnProperty;
var payment_propIsEnum = Object.prototype.propertyIsEnumerable;
var payment_defNormalProp = (obj, key, value) => key in obj ? payment_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var payment_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (payment_hasOwnProp.call(b, prop))
      payment_defNormalProp(a, prop, b[prop]);
  if (payment_getOwnPropSymbols)
    for (var prop of payment_getOwnPropSymbols(b)) {
      if (payment_propIsEnum.call(b, prop))
        payment_defNormalProp(a, prop, b[prop]);
    }
  return a;
};







const state = {
  amount: 0,
  userID: ""
};
class PaymentPage extends BasePage {
  constructor(props) {
    super(props);
    this.state = payment_spreadValues({}, state);
    requestAnimationFrame(() => {
      this.setState({
        userID: this.props.usrID || "",
        amount: this.props.usrAmount || 0
      });
    });
  }
  PaySumButtons(...ammounts) {
    return /* @__PURE__ */ react.createElement("div", { className: "quick-amount-row-1" }, ammounts.map((value, i) => {
      return /* @__PURE__ */ react.createElement(
        "button",
        {
          key: i,
          type: "button",
          className: "btn quick-amount-btn",
          onClick: (e) => {
            e.preventDefault();
            this.setState({
              amount: CurrencyConvert(value, this.currency)
            });
          }
        },
        CurrencyConvertText(value, this.currency, true)
      );
    }));
  }
  render() {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("section", { id: "payment", style: { marginTop: "10px" } }, /* @__PURE__ */ react.createElement("div", { className: "container" }, /* @__PURE__ */ react.createElement("div", { className: "payment-wrapper" }, /* @__PURE__ */ react.createElement("div", { className: "payment-form" }, /* @__PURE__ */ react.createElement("h2", null, this.LangString("pagePayBalance")), /* @__PURE__ */ react.createElement("form", { id: "payment-form" }, /* @__PURE__ */ react.createElement("div", { className: "form-group" }, /* @__PURE__ */ react.createElement("label", { htmlFor: "user-id", className: "label-large" }, this.LangString("pagePayID")), /* @__PURE__ */ react.createElement(
      "input",
      {
        type: "text",
        id: "user-id",
        name: "user-id",
        className: "form-control input-large",
        placeholder: this.LangString("pagePayIDPlaceholder"),
        value: this.state.userID,
        onChange: (e) => {
          const re = /^[0-9\b]+$/;
          if (e.target.value === "" || re.test(e.target.value)) {
            this.setState({ userID: e.target.value });
          }
        }
      }
    ), /* @__PURE__ */ react.createElement(
      "label",
      {
        htmlFor: "amount",
        className: "label-large amount-label"
      },
      this.LangString(
        "pagePayAmount",
        CurrencyConvertText(
          PAYMENT_MIN_SUM,
          this.currency,
          true
        )
      )
    ), /* @__PURE__ */ react.createElement(
      "input",
      {
        type: "number",
        id: "amount",
        name: "amount",
        value: this.state.amount,
        min: CurrencyConvert(PAYMENT_MIN_SUM, this.currency),
        max: "999999",
        className: "form-control input-large",
        required: true,
        onChange: (e) => {
          let val = e.currentTarget.valueAsNumber;
          if (!val || val < CurrencyConvert(PAYMENT_MIN_SUM, this.currency)) {
            val = CurrencyConvert(PAYMENT_MIN_SUM, this.currency);
          }
          this.setState({ amount: val });
        }
      }
    ), /* @__PURE__ */ react.createElement("div", { className: "quick-amount-buttons" }, this.PaySumButtons(1, 5, 10)), /* @__PURE__ */ react.createElement("div", { className: "quick-amount-buttons" }, this.PaySumButtons(20, 50, 100))), /* @__PURE__ */ react.createElement(
      "a",
      {
        href: "#",
        id: "payment-link",
        className: `btn-primary ${!this.state.userID || !this.state.amount || this.state.amount < 0 ? "disabled" : ""}`,
        onClick: (e) => {
          e.preventDefault();
          if (!this.state.userID || !this.state.amount || this.state.amount < 0)
            return;
          lib_axios.get(
            `https://${location.hostname === "localhost" ? "localhost" : "application.rocketman-vpn.com"}:${"8443"}/payments/create/${this.state.userID}/${this.state.amount}/${this.currency}`
          ).then((res) => {
            const data = res.data;
            if (!data.status) return;
            window.open(data.url, "_blank");
          });
        }
      },
      /* @__PURE__ */ react.createElement("b", null, this.LangString("pagePayButton"))
    ))), /* @__PURE__ */ react.createElement("div", { className: "payment-info" }, /* @__PURE__ */ react.createElement("h3", null, this.LangString("pageFAQId")), /* @__PURE__ */ react.createElement("ol", null, /* @__PURE__ */ react.createElement("li", null, this.LangString("pageFAQStep1")), /* @__PURE__ */ react.createElement("li", null, this.LangString("pageFAQStep2")), /* @__PURE__ */ react.createElement("li", null, this.LangString("pageFAQStep3")), /* @__PURE__ */ react.createElement("li", null, this.LangString("pageFAQStep4"))), /* @__PURE__ */ react.createElement("div", { className: "support-link" }, /* @__PURE__ */ react.createElement(
      "a",
      {
        href: `https://t.me/${Core.GetConfigValue("projectBot")}`,
        style: { color: "#666" }
      },
      this.LangString("pageFAQOpen")
    ), /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement(
      "img",
      {
        src: navIcon("qrbot.png"),
        alt: this.LangString("pageFAQQR"),
        style: { maxWidth: "232px", borderRadius: "10px" }
      }
    )))))));
  }
}

;// ./src/config/terms.ts

const termText = {
  ru: {
    title: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435",
    time: "\u0414\u0430\u0442\u0430 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438: 6 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2024 \u0433.",
    desc: "\u0414\u0430\u043D\u043D\u043E\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435, \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u043D\u043E\u0435 \u0432 \u0441\u0435\u0442\u0438 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u043F\u043E \u0441\u0435\u0442\u0435\u0432\u043E\u043C\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 https://rocketman-vpn.com/?terms (\u0434\u0430\u043B\u0435\u0435 \u2013 \xAB\u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\xBB) \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u0442 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u043C\u0435\u0436\u0434\u0443 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0438 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u043B\u0438\u0446\u0430\u043C\u0438 (\u0434\u0430\u043B\u0435\u0435 \u2013 \xAB\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438\xBB \u0438\u043B\u0438 \xAB\u041A\u043B\u0438\u0435\u043D\u0442\u044B\xBB) \u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C rocketman-vpn.com (\u0434\u0430\u043B\u0435\u0435 \u2013 \xAB\u041F\u0440\u043E\u0435\u043A\u0442\xBB \u0438\u043B\u0438 \xAB\u0441\u0430\u0439\u0442\xBB), \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u043D\u044B\u043C \u0432 \u0441\u0435\u0442\u0438 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u043F\u043E \u0441\u0435\u0442\u0435\u0432\u043E\u043C\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 https://rocketman-vpn.com \u043F\u0440\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0445 \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C (\u0434\u0430\u043B\u0435\u0435 \u2013 \xAB\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B\xBB) \u0438\u043B\u0438 \u0438\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433, \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C\u044B\u0445 \u041F\u0440\u043E\u0435\u043A\u0442\u043E\u043C.",
    sections: [
      {
        title: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430\u0445:",
        items: [
          "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0442 \u0432 \u0441\u0435\u0431\u044F \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u0442\u043D\u043E\u0441\u044F\u0442\u0441\u044F \u043A \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 VPN, Proxy \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u044B\u0435 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 rocketman-vpn.com.",
          "\u0423\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E\u043B\u043D\u044B\u043C \u0438 \u043C\u043E\u0436\u0435\u0442 \u043E\u0442\u043B\u0438\u0447\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D \u043D\u0430 \u0441\u0430\u0439\u0442\u0435.",
          "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043C\u043E\u0433\u0443\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C. \u041F\u0440\u043E\u0435\u043A\u0442 \u043D\u0435 \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435, \u0442\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0442\u0430\u043A\u0438\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432.",
          "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043C\u043E\u0433\u0443\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0438\u0445 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C \u0438 \u0446\u0435\u043B\u044F\u043C\u0438, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u043C\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C."
        ]
      },
      {
        title: "\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0442\u0435\u0440\u043C\u0438\u043D\u043E\u0432",
        items: [
          "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C (\u043A\u043B\u0438\u0435\u043D\u0442) - \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0438\u043B\u0438 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043B\u0438\u0446\u043E, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0449\u0435\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0440\u043E\u0435\u043A\u0442\u0430.",
          "\u041F\u0440\u043E\u0435\u043A\u0442 (\u0441\u0430\u0439\u0442) - \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0440\u0435\u0441\u0443\u0440\u0441, \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0439 \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 rocketman-vpn.com.",
          "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B (\u0437\u0430\u043A\u0430\u0437) - \u0443\u0441\u043B\u0443\u0433\u0430, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u0430\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u043C\u0443 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044E."
        ]
      },
      {
        title: "\u041F\u0440\u0430\u0432\u0430 \u0438 \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439",
        items: [
          "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043E\u0431\u044F\u0437\u0430\u043D\u044B \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u041F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438 \u0435\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432.",
          "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043D\u0435\u0441\u0443\u0442 \u043F\u043E\u043B\u043D\u0443\u044E \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0437\u0430 \u0441\u0432\u043E\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u041F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438 \u0435\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432."
        ]
      },
      {
        title: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043D\u0435 \u0438\u043C\u0435\u044E\u0442 \u043F\u0440\u0430\u0432\u0430:",
        items: [
          "\u043D\u0430\u0440\u0443\u0448\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0430 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0430, \u0442\u043E\u0432\u0430\u0440\u043D\u044B\u0435 \u0437\u043D\u0430\u043A\u0438 \u0438 \u043F\u0430\u0442\u0435\u043D\u0442\u044B, \u043D\u0430\u0445\u043E\u0434\u044F\u0449\u0438\u0435\u0441\u044F \u0432 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u041F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438\u043B\u0438 \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446;",
          "\u0432\u043C\u0435\u0448\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u0432 \u0440\u0430\u0431\u043E\u0442\u0443 \u041F\u0440\u043E\u0435\u043A\u0442\u0430, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0432\u0437\u043B\u043E\u043C, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435, \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0438\u0435, \u043D\u0430\u043D\u0435\u0441\u0435\u043D\u0438\u0435 \u0432\u0440\u0435\u0434\u0430 \u0438\u043B\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0438\u043D\u044B\u0445 \u043F\u0440\u0435\u043F\u044F\u0442\u0441\u0442\u0432\u0438\u0439 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u041F\u0440\u043E\u0435\u043A\u0442\u0430;",
          "\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u041F\u0440\u043E\u0435\u043A\u0442 \u0438 \u0435\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0434\u043B\u044F \u043D\u0435\u0446\u0435\u043B\u0435\u0432\u044B\u0445 \u0446\u0435\u043B\u0435\u0439, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0434\u043B\u044F \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0432\u0440\u0435\u0434\u043E\u043D\u043E\u0441\u043D\u043E\u0433\u043E \u0438\u043B\u0438 \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430;",
          "\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u041F\u0440\u043E\u0435\u043A\u0442 \u0438 \u0435\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0434\u043B\u044F \u0441\u043F\u0430\u043C\u0430 \u0438\u043B\u0438 \u0438\u043D\u044B\u0445 \u0444\u043E\u0440\u043C \u043D\u0435\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u043E\u0432\u043E\u0439 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438."
        ]
      },
      {
        title: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u0438\u043C\u0435\u044E\u0442 \u043F\u0440\u0430\u0432\u043E \u043D\u0430:",
        items: [
          "\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u041F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438 \u0435\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F;",
          "\u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0438\u043B\u0438 \u0438\u043D\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u0438 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u043E\u0442 \u041F\u0440\u043E\u0435\u043A\u0442\u0430."
        ]
      },
      {
        title: "\u0418\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C",
        items: [
          "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B, \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u041F\u0440\u043E\u0435\u043A\u0442\u0430, \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C\u044E \u041F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438\u043B\u0438 \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0432\u0448\u0438\u0445 \u043F\u0440\u0430\u0432\u043E \u043D\u0430 \u0438\u0445 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435.",
          "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043D\u0435 \u0438\u043C\u0435\u044E\u0442 \u043F\u0440\u0430\u0432\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u041F\u0440\u043E\u0435\u043A\u0442\u0430, \u0434\u043B\u044F \u0438\u043D\u044B\u0445 \u0446\u0435\u043B\u0435\u0439, \u043A\u0440\u043E\u043C\u0435 \u043A\u0430\u043A \u0434\u043B\u044F \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F.",
          "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043D\u0435 \u0438\u043C\u0435\u044E\u0442 \u043F\u0440\u0430\u0432\u0430 \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u044F\u0442\u044C, \u043C\u043E\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0438\u0442\u044C, \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B, \u0434\u0435\u043A\u043E\u043C\u043F\u0438\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0442\u044C \u0438\u043B\u0438 \u0438\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u0432\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u044C \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0438\u043B\u0438 \u0438\u0445 \u0447\u0430\u0441\u0442\u0438 \u0431\u0435\u0437 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044F \u041F\u0440\u043E\u0435\u043A\u0442\u0430."
        ]
      },
      {
        title: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430 \u0441\u0440\u0435\u0434\u0441\u0442\u0432",
        items: [
          "\u041F\u043E\u0441\u043B\u0435 \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0432 \u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0449\u0435\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u041F\u043B\u0430\u0442\u043D\u043E\u0439 \u0443\u0441\u043B\u0443\u0433\u0438 (\u0417\u0430\u043A\u0430\u0437), \u0434\u0435\u043D\u044C\u0433\u0438, \u043F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u044B\u0435 \u043D\u0430 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u0438\u0435, \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0443 \u043D\u0435 \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442",
          "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438 \u0443\u0441\u043B\u0443\u0433\u0430 \u043D\u0435 \u0431\u044B\u043B\u0430 \u043E\u043A\u0430\u0437\u0430\u043D\u0430 \u0432 \u043F\u043E\u043B\u043D\u043E\u0439 \u043C\u0435\u0440\u0435 \u0438\u043B\u0438 \u0431\u044B\u043B\u0430 \u043E\u043A\u0430\u0437\u0430\u043D\u0430 \u0432 \u043D\u0435\u043D\u0430\u0434\u0436\u0435\u0436\u0430\u0449\u0435\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 (\u0431\u0430\u043B\u0430\u043D\u0441 \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0430 \u043D\u0435 \u0431\u044B\u043B \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D \u043B\u0438\u0431\u043E \u0441\u0443\u043C\u043C\u0430 \u0437\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u043E\u0442 \u0440\u0430\u0441\u0447\u0451\u0442\u043D\u043E\u0439 \u0441\u0443\u043C\u043C\u044B \u043F\u0440\u0438 \u043E\u043F\u043B\u0430\u0442\u0435 \u0437\u0430\u043A\u0430\u0437\u0430), \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0430\u0432\u043E \u043E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u0443\u0441\u043B\u0443\u0433\u0438, \u043E\u0431\u0440\u0430\u0442\u0438\u0432\u0448\u0438\u0441\u044C \u0432 \u0441\u043B\u0443\u0436\u0431\u0443 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u041F\u0440\u043E\u0435\u043A\u0442\u0430, \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u043E\u043B\u043D\u0443\u044E, \u043B\u0438\u0431\u043E \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u0443\u044E \u043A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0438\u044E \u0435\u0451 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u043B\u0438\u0431\u043E \u0437\u0430\u043C\u0435\u043D\u0443 \u0417\u0430\u043A\u0430\u0437\u0430 \u043D\u0430 \u0430\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u044B\u0439. \u041A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0438\u044F \u0440\u0430\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0417\u0430\u043A\u0430\u0437\u0430, \u0438 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u0442\u0430\u043A\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B, \u043A\u0430\u043A: \u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430, \u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430, \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430\u043A\u0430\u0437\u0430, \u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0437\u0430\u043A\u0430\u0437\u0430, \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0438\u0437\u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432\u0430\u043D\u043E\u0433\u043E \u0442\u0440\u0430\u0444\u0444\u0438\u043A\u0430 \u0437\u0430\u043A\u0430\u0437\u0430.",
          "\u041F\u0440\u043E\u0435\u043A\u0442 \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044C \u0432\u0441\u0435 \u0437\u0430\u044F\u0432\u043A\u0438 \u043F\u043E \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0443 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0432 \u0441\u0440\u043E\u043A \u0434\u043E 15 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0435\u0439"
        ]
      },
      {
        title: "\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438",
        items: [
          "\u041F\u0440\u043E\u0435\u043A\u0442 \u043D\u0435 \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u0443\u0449\u0435\u0440\u0431, \u043F\u0440\u0438\u0447\u0438\u043D\u0435\u043D\u043D\u044B\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u0438\u043B\u0438 \u0442\u0440\u0435\u0442\u044C\u0438\u043C \u043B\u0438\u0446\u0430\u043C \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u041F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438\u043B\u0438 \u0435\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432.",
          "\u041F\u0440\u043E\u0435\u043A\u0442 \u043D\u0435 \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u043F\u0440\u0435\u0440\u044B\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u041F\u0440\u043E\u0435\u043A\u0442\u0443 \u0438\u043B\u0438 \u0435\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430\u043C, \u0432\u043E\u0437\u043D\u0438\u043A\u0448\u0435\u0435 \u043F\u043E \u043F\u0440\u0438\u0447\u0438\u043D\u0430\u043C, \u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u044F\u0449\u0438\u043C \u043E\u0442 \u041F\u0440\u043E\u0435\u043A\u0442\u0430.",
          "\u041F\u0440\u043E\u0435\u043A\u0442 \u043D\u0435 \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u0438 \u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u043E\u0441\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C\u0438 \u0438\u043B\u0438 \u0442\u0440\u0435\u0442\u044C\u0438\u043C\u0438 \u043B\u0438\u0446\u0430\u043C\u0438 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u041F\u0440\u043E\u0435\u043A\u0442\u0430.",
          "\u041F\u0440\u043E\u0435\u043A\u0442 \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0437\u0430 \u0441\u043E\u0431\u043E\u0439 \u043F\u0440\u0430\u0432\u043E \u0432 \u043B\u044E\u0431\u043E\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043E\u0442\u043A\u0430\u0437\u0430\u0442\u044C \u0432 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0438 \u041A\u043B\u0438\u0435\u043D\u0442\u0443 \u0431\u0435\u0437 \u043E\u0431\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u0438\u0447\u0438\u043D.",
          "\u041F\u0440\u043E\u0435\u043A\u0442 \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0437\u0430 \u0441\u043E\u0431\u043E\u0439 \u043F\u0440\u0430\u0432\u043E \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044C \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0432 \u0441\u0440\u043E\u043A \u0431\u043E\u043B\u0435\u0435 15 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u0444\u043E\u0440\u0441-\u043C\u0430\u0436\u043E\u0440\u043D\u044B\u0445 \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432, \u0432\u043E\u0437\u043D\u0438\u043A\u0448\u0438\u0445 \u043F\u043E \u043F\u0440\u0438\u0447\u0438\u043D\u0430\u043C, \u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u044F\u0449\u0438\u043C \u043E\u0442 \u041F\u0440\u043E\u0435\u043A\u0442\u0430"
        ]
      },
      {
        title: "\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0441\u043F\u043E\u0440\u043E\u0432",
        items: [
          "\u0412\u0441\u0435 \u0441\u043F\u043E\u0440\u044B \u0438 \u0440\u0430\u0437\u043D\u043E\u0433\u043B\u0430\u0441\u0438\u044F, \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u044E\u0449\u0438\u0435 \u0432 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u041F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438\u043B\u0438 \u0435\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432, \u0440\u0435\u0448\u0430\u044E\u0442\u0441\u044F \u043F\u0443\u0442\u0435\u043C \u043F\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0440\u043E\u0432 \u043C\u0435\u0436\u0434\u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C\u0438 \u0438 \u041F\u0440\u043E\u0435\u043A\u0442\u043E\u043C.",
          "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0441\u043F\u043E\u0440\u0430 \u043F\u0443\u0442\u0435\u043C \u043F\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0440\u043E\u0432, \u0441\u043F\u043E\u0440 \u043F\u043E\u0434\u043B\u0435\u0436\u0438\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044E \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C."
        ]
      },
      {
        title: "\u0417\u0430\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
        items: [
          "\u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u043C, \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u044E\u0449\u0438\u043C \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u043C\u0435\u0436\u0434\u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C\u0438 \u0438 \u041F\u0440\u043E\u0435\u043A\u0442\u043E\u043C \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u041F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438 \u0435\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432.",
          "\u041F\u0440\u043E\u0435\u043A\u0442 \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0437\u0430 \u0441\u043E\u0431\u043E\u0439 \u043F\u0440\u0430\u0432\u043E \u0432 \u043B\u044E\u0431\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0432\u043D\u043E\u0441\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432 \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u0431\u0435\u0437 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439.",
          "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u041F\u0440\u043E\u0435\u043A\u0442\u0430 \u043F\u043E\u0441\u043B\u0435 \u0432\u043D\u0435\u0441\u0435\u043D\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u0432 \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0441 \u043D\u043E\u0432\u044B\u043C\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438."
        ]
      }
    ]
  },
  en: {
    title: "User Agreement",
    time: "Publication Date: December 6, 2024",
    desc: 'This User Agreement, posted on the Internet at the web address https://rocketman-vpn.com/?terms (hereinafter referred to as the "Agreement"), regulates the relationship between individuals and legal entities (hereinafter referred to as "Users" or "Clients") and the rocketman-vpn.com project (hereinafter referred to as "Project" or "Site"), located on the Internet at the web address https://rocketman-vpn.com, when using products developed and provided by the Project (hereinafter referred to as "Products") or other services provided by the Project.',
    sections: [
      {
        title: "Information about Products:",
        items: [
          "The products developed by the project include various products that fall under the category of VPN, Proxy and other products provided at rocketman-vpn.com.",
          "The list of Products is not exhaustive and may differ from what is presented on the website.",
          "The Products may contain links to third-party resources that are not controlled by the Project. The Project is not responsible for the content, accuracy and security of such resources.",
          "The Products may only be used in accordance with their purpose and objectives as specified by the Project."
        ]
      },
      {
        title: "Definitions of Terms",
        items: [
          "User (client) - an individual or legal entity using the Project's Products.",
          "Project (Site) - an Internet resource available at the address rocketman-vpn.com.",
          "Products (Order) - a service provided by the project to the end user."
        ]
      },
      {
        title: "Rights and Obligations of Users",
        items: [
          "Users are required to comply with the rules for using the Project and its Products.",
          "Users are fully responsible for their actions in using the Project and its Products."
        ]
      },
      {
        title: "Users are not allowed to:",
        items: [
          "violate intellectual property rights, including copyrights, trademarks and patents, owned by the Project or third parties;",
          "interfere with the operation of the Project, including hacking, altering, destroying, damaging or creating other obstacles to the operation of the Project;",
          "use the Project and its Products for non-targeted purposes, including for the distribution of malicious or illegal content;",
          "use the Project and its Products for spam or other forms of unwanted email distribution."
        ]
      },
      {
        title: "Users have the right to:",
        items: [
          "use the Project and its Products in accordance with the terms of the Agreement;",
          "receive technical or other support and advice from the Project."
        ]
      },
      {
        title: "Intellectual Property",
        items: [
          "The Products available within the Project are the intellectual property of the Project or third parties who have granted the right to use them.",
          "Users are not authorized to use the Products provided within the Project for purposes other than personal use.",
          "Users are not authorized to copy, distribute, modify, translate, create derivative works, decompile, disassemble or otherwise reproduce the Products or their parts without the written permission of the Project."
        ]
      },
      {
        title: "Refund Policy",
        items: [
          "Once the Paid Service (Order) has been rendered in a proper quality, the money spent on the purchase is non-refundable",
          "In case the service was not rendered in full or was rendered in an unreliable quality (the balance of personal account was not replenished or the amount credited differs from the calculated amount when paying for the order), the User has the right to refuse the service by contacting the Project support service and receive full or partial compensation of its cost or replacement of the Order with a similar one. Compensation is calculated based on the current status of the Order, and includes such parameters as: Date and time of Order creation, Date and time of Order completion, Order cost, Order operation time, Amount of spent Order traffic.",
          "The project is committed to reviewing all refund requests within 15 business days"
        ]
      },
      {
        title: "Limitation of Liability",
        items: [
          "The Project is not responsible for any damage caused to Users or third parties as a result of using the Project or its Products.",
          "The Project is not responsible for any interruption of access to the Project or its Products due to reasons beyond the control of the Project.",
          "The Project is not responsible for the content and accuracy of information provided by Users or third parties within the Project.",
          "The Project reserves the right to refuse to provide services to the Client at any time without explanation.",
          "The Project reserves the right to consider appeals within a period longer than 15 working days in case of force majeure circumstances arising for reasons beyond the control of the Project"
        ]
      },
      {
        title: "Dispute Resolution",
        items: [
          "All disputes and disagreements arising in connection with the use of the Project or its Products are resolved through negotiations between Users and the Project.",
          "In the event that it is impossible to resolve a dispute through negotiations, the dispute shall be settled in accordance with international law."
        ]
      },
      {
        title: "Final Provisions",
        items: [
          "This Agreement is the only document regulating the relationship between Users and the Project in the use of the Project and its Products.",
          "The Project reserves the right to make changes to the Agreement at any time without prior notice to Users.",
          "Continued use of the Project after changes to the Agreement signifies the User's agreement with the new terms."
        ]
      }
    ]
  },
  uk: {
    title: "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0446\u044C\u043A\u0430 \u0443\u0433\u043E\u0434\u0430",
    time: "\u0414\u0430\u0442\u0430 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457: 6 \u0433\u0440\u0443\u0434\u043D\u044F 2024 \u0440.",
    desc: "\u0414\u0430\u043D\u0430 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0446\u044C\u043A\u0430 \u0443\u0433\u043E\u0434\u0430, \u0440\u043E\u0437\u043C\u0456\u0449\u0435\u043D\u0430 \u0432 \u043C\u0435\u0440\u0435\u0436\u0456 \u0406\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0437\u0430 \u043C\u0435\u0440\u0435\u0436\u0435\u0432\u043E\u044E \u0430\u0434\u0440\u0435\u0441\u043E\u044E https://rocketman-vpn.com/?terms (\u0434\u0430\u043B\u0456 \u2013 \xAB\u0423\u0433\u043E\u0434\u0430\xBB) \u0440\u0435\u0433\u0443\u043B\u044E\u0454 \u0432\u0456\u0434\u043D\u043E\u0441\u0438\u043D\u0438 \u043C\u0456\u0436 \u0444\u0456\u0437\u0438\u0447\u043D\u0438\u043C\u0438 \u0442\u0430 \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u0438\u043C\u0438 \u043E\u0441\u043E\u0431\u0430\u043C\u0438 (\u0434\u0430\u043B\u0456 \u2013 \xAB\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\xBB \u0430\u0431\u043E \xAB\u041A\u043B\u0456\u0454\u043D\u0442\u0438\xBB) \u0442\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C rocketman-vpn.com (\u0434\u0430\u043B\u0456 \u2013 \xAB\u041F\u0440\u043E\u0435\u043A\u0442\xBB \u0430\u0431\u043E \xAB\u0441\u0430\u0439\u0442\xBB), \u0440\u043E\u0437\u043C\u0456\u0449\u0435\u043D\u0438\u043C \u0432 \u043C\u0435\u0440\u0435\u0436\u0456 \u0406\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0437\u0430 \u043C\u0435\u0440\u0435\u0436\u0435\u0432\u043E\u044E \u0430\u0434\u0440\u0435\u0441\u043E\u044E https://rocketman-vpn.com \u043F\u0440\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u0456 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432, \u0440\u043E\u0437\u0440\u043E\u0431\u043B\u0435\u043D\u0438\u0445 \u0442\u0430 \u043D\u0430\u0434\u0430\u043D\u0438\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C (\u0434\u0430\u043B\u0456 \u2013 \xAB\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0438\xBB) \u0430\u0431\u043E \u0456\u043D\u0448\u0438\u0445 \u043F\u043E\u0441\u043B\u0443\u0433, \u043D\u0430\u0434\u0430\u043D\u0438\u0445 \u041F\u0440\u043E\u0435\u043A\u0442\u043E\u043C.",
    sections: [
      {
        title: "\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043F\u0440\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438:",
        items: [
          "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0438, \u0440\u043E\u0437\u0440\u043E\u0431\u043B\u0435\u043D\u0456 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C, \u043C\u0456\u0441\u0442\u044F\u0442\u044C \u0440\u0456\u0437\u043D\u0456 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438, \u044F\u043A\u0456 \u043D\u0430\u043B\u0435\u0436\u0430\u0442\u044C \u0434\u043E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 VPN, Proxy \u0442\u0430 \u0456\u043D\u0448\u0456 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438, \u0449\u043E \u043D\u0430\u0434\u0430\u044E\u0442\u044C\u0441\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0456 rocketman-vpn.com.",
          "\u0417\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u043B\u0456\u043A \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432 \u043D\u0435 \u0454 \u043F\u043E\u0432\u043D\u0438\u043C \u0442\u0430 \u043C\u043E\u0436\u0435 \u0432\u0456\u0434\u0440\u0456\u0437\u043D\u044F\u0442\u0438\u0441\u044F \u0432\u0456\u0434 \u0442\u043E\u0433\u043E, \u0449\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E \u043D\u0430 \u0441\u0430\u0439\u0442\u0456.",
          "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0438 \u043C\u043E\u0436\u0443\u0442\u044C \u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0456 \u0440\u0435\u0441\u0443\u0440\u0441\u0438, \u044F\u043A\u0456 \u043D\u0435 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044E\u044E\u0442\u044C\u0441\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C. \u041F\u0440\u043E\u0435\u043A\u0442 \u043D\u0435 \u043D\u0435\u0441\u0435 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0437\u0430 \u0437\u043C\u0456\u0441\u0442, \u0442\u043E\u0447\u043D\u0456\u0441\u0442\u044C \u0442\u0430 \u0431\u0435\u0437\u043F\u0435\u043A\u0443 \u0442\u0430\u043A\u0438\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u0456\u0432.",
          "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0438 \u043C\u043E\u0436\u0443\u0442\u044C \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043B\u0438\u0448\u0435 \u0443 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E\u0441\u0442\u0456 \u0434\u043E \u0457\u0445 \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0442\u0430 \u0446\u0456\u043B\u0435\u0439, \u0437\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C."
        ]
      },
      {
        title: "\u0412\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0442\u0435\u0440\u043C\u0456\u043D\u0456\u0432",
        items: [
          "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 (\u043A\u043B\u0456\u0454\u043D\u0442) - \u0444\u0456\u0437\u0438\u0447\u043D\u0430 \u0430\u0431\u043E \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u0430 \u043E\u0441\u043E\u0431\u0430, \u044F\u043A\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0443.",
          "\u041F\u0440\u043E\u0435\u043A\u0442 (\u0441\u0430\u0439\u0442) - \u0456\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0440\u0435\u0441\u0443\u0440\u0441, \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0437\u0430 \u0430\u0434\u0440\u0435\u0441\u043E\u044E rocketman-vpn.com.",
          "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0438 (\u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F) - \u043F\u043E\u0441\u043B\u0443\u0433\u0430, \u0449\u043E \u043D\u0430\u0434\u0430\u0454\u0442\u044C\u0441\u044F \u043F\u0440\u043E\u0454\u043A\u0442\u043E\u043C \u043A\u0456\u043D\u0446\u0435\u0432\u043E\u043C\u0443 \u0441\u043F\u043E\u0436\u0438\u0432\u0430\u0447\u0435\u0432\u0456."
        ]
      },
      {
        title: "\u041F\u0440\u0430\u0432\u0430 \u0442\u0430 \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u0438 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432",
        items: [
          "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456 \u0437\u043E\u0431\u043E\u0432'\u044F\u0437\u0430\u043D\u0456 \u0434\u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043F\u0440\u0430\u0432\u0438\u043B \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u041F\u0440\u043E\u0435\u043A\u0442\u0443 \u0442\u0430 \u0439\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432.",
          "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456 \u043D\u0435\u0441\u0443\u0442\u044C \u043F\u043E\u0432\u043D\u0443 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u0437\u0430 \u0441\u0432\u043E\u0457 \u0434\u0456\u0457 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u041F\u0440\u043E\u0435\u043A\u0442\u0443 \u0442\u0430 \u0439\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432."
        ]
      },
      {
        title: "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456 \u043D\u0435 \u043C\u0430\u044E\u0442\u044C \u043F\u0440\u0430\u0432\u0430:",
        items: [
          "\u043F\u043E\u0440\u0443\u0448\u0443\u0432\u0430\u0442\u0438 \u043F\u0440\u0430\u0432\u0430 \u0456\u043D\u0442\u0435\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0457 \u0432\u043B\u0430\u0441\u043D\u043E\u0441\u0442\u0456, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438 \u0430\u0432\u0442\u043E\u0440\u0441\u044C\u043A\u0456 \u043F\u0440\u0430\u0432\u0430, \u0442\u043E\u0432\u0430\u0440\u043D\u0456 \u0437\u043D\u0430\u043A\u0438 \u0442\u0430 \u043F\u0430\u0442\u0435\u043D\u0442\u0438, \u044F\u043A\u0456 \u043D\u0430\u043B\u0435\u0436\u0430\u0442\u044C \u041F\u0440\u043E\u0435\u043A\u0442\u0443 \u0430\u0431\u043E \u0442\u0440\u0435\u0442\u0456\u043C \u043E\u0441\u043E\u0431\u0430\u043C;",
          "\u0432\u0442\u0440\u0443\u0447\u0430\u0442\u0438\u0441\u044F \u0432 \u0440\u043E\u0431\u043E\u0442\u0443 \u041F\u0440\u043E\u0435\u043A\u0442\u0443, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438 \u0432\u0437\u043B\u043E\u043C, \u0437\u043C\u0456\u043D\u0443, \u0437\u043D\u0438\u0449\u0435\u043D\u043D\u044F, \u0437\u0430\u043F\u043E\u0434\u0456\u044F\u043D\u043D\u044F \u0448\u043A\u043E\u0434\u0438 \u0430\u0431\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0456\u043D\u0448\u0438\u0445 \u043F\u0435\u0440\u0435\u0448\u043A\u043E\u0434 \u0434\u043B\u044F \u0440\u043E\u0431\u043E\u0442\u0438 \u041F\u0440\u043E\u0435\u043A\u0442\u0443;",
          "\u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u041F\u0440\u043E\u0435\u043A\u0442 \u0442\u0430 \u0439\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438 \u0434\u043B\u044F \u043D\u0435\u0446\u0456\u043B\u044C\u043E\u0432\u0438\u0445 \u0446\u0456\u043B\u0435\u0439, \u0437\u043E\u043A\u0440\u0435\u043C\u0430 \u0434\u043B\u044F \u043F\u043E\u0448\u0438\u0440\u0435\u043D\u043D\u044F \u0448\u043A\u0456\u0434\u043B\u0438\u0432\u043E\u0433\u043E \u0430\u0431\u043E \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0443;",
          "\u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u041F\u0440\u043E\u0435\u043A\u0442 \u0442\u0430 \u0439\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438 \u0434\u043B\u044F \u0441\u043F\u0430\u043C\u0443 \u0430\u0431\u043E \u0456\u043D\u0448\u0438\u0445 \u0444\u043E\u0440\u043C \u043D\u0435\u0431\u0430\u0436\u0430\u043D\u043E\u0457 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438."
        ]
      },
      {
        title: "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456 \u043C\u0430\u044E\u0442\u044C \u043F\u0440\u0430\u0432\u043E \u043D\u0430:",
        items: [
          "\u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u041F\u0440\u043E\u0435\u043A\u0442\u0443 \u0442\u0430 \u0439\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0443\u043C\u043E\u0432 \u0423\u0433\u043E\u0434\u0438;",
          "\u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0442\u0435\u0445\u043D\u0456\u0447\u043D\u043E\u0457 \u0430\u0431\u043E \u0456\u043D\u0448\u043E\u0457 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438 \u0442\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u0457 \u0432\u0456\u0434 \u041F\u0440\u043E\u0435\u043A\u0442\u0443."
        ]
      },
      {
        title: "\u0406\u043D\u0442\u0435\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0430 \u0432\u043B\u0430\u0441\u043D\u0456\u0441\u0442\u044C",
        items: [
          "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0438, \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0456 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u041F\u0440\u043E\u0435\u043A\u0442\u0443, \u0454 \u0456\u043D\u0442\u0435\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u044E \u0432\u043B\u0430\u0441\u043D\u0456\u0441\u0442\u044E \u041F\u0440\u043E\u0435\u043A\u0442\u0443 \u0430\u0431\u043E \u0442\u0440\u0435\u0442\u0456\u0445 \u043E\u0441\u0456\u0431, \u044F\u043A\u0456 \u043D\u0430\u0434\u0430\u043B\u0438 \u043F\u0440\u0430\u0432\u043E \u043D\u0430 \u0457\u0445 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F.",
          "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456 \u043D\u0435 \u043C\u0430\u044E\u0442\u044C \u043F\u0440\u0430\u0432\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0438, \u043D\u0430\u0434\u0430\u043D\u0456 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u041F\u0440\u043E\u0435\u043A\u0442\u0443, \u0434\u043B\u044F \u0456\u043D\u0448\u0438\u0445 \u0446\u0456\u043B\u0435\u0439, \u043A\u0440\u0456\u043C \u044F\u043A \u0434\u043B\u044F \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u043E\u0433\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F.",
          "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456 \u043D\u0435 \u043C\u0430\u044E\u0442\u044C \u043F\u0440\u0430\u0432\u0430 \u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438, \u043F\u043E\u0448\u0438\u0440\u044E\u0432\u0430\u0442\u0438, \u043C\u043E\u0434\u0438\u0444\u0456\u043A\u0443\u0432\u0430\u0442\u0438, \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0430\u0442\u0438, \u0441\u0442\u0432\u043E\u0440\u044E\u0432\u0430\u0442\u0438 \u043F\u043E\u0445\u0456\u0434\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438, \u0434\u0435\u043A\u043E\u043C\u043F\u0456\u043B\u044E\u0432\u0430\u0442\u0438, \u0440\u043E\u0437\u0431\u0438\u0440\u0430\u0442\u0438 \u0430\u0431\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u043C \u0456\u043D\u0448\u0438\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C \u0432\u0456\u0434\u0442\u0432\u043E\u0440\u044E\u0432\u0430\u0442\u0438 \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0438 \u0430\u0431\u043E \u0457\u0445 \u0447\u0430\u0441\u0442\u0438\u043D\u0438 \u0431\u0435\u0437 \u043F\u0438\u0441\u044C\u043C\u043E\u0432\u043E\u0433\u043E \u0434\u043E\u0437\u0432\u043E\u043B\u0443 \u041F\u0440\u043E\u0435\u043A\u0442\u0443."
        ]
      },
      {
        title: "\u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u043A\u043E\u0448\u0442\u0456\u0432",
        items: [
          "\u041F\u0456\u0441\u043B\u044F \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u0432 \u043D\u0430\u043B\u0435\u0436\u043D\u0456\u0439 \u044F\u043A\u043E\u0441\u0442\u0456 \u041F\u043B\u0430\u0442\u043D\u043E\u0457 \u043F\u043E\u0441\u043B\u0443\u0433\u0438 (\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F), \u0433\u0440\u043E\u0448\u0456, \u0432\u0438\u0442\u0440\u0430\u0447\u0435\u043D\u0456 \u043D\u0430 \u043F\u0440\u0438\u0434\u0431\u0430\u043D\u043D\u044F, \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044E \u043D\u0435 \u043F\u0456\u0434\u043B\u044F\u0433\u0430\u044E\u0442\u044C",
          "\u0423 \u0440\u0430\u0437\u0456, \u044F\u043A\u0449\u043E \u043F\u043E\u0441\u043B\u0443\u0433\u0430 \u043D\u0435 \u0431\u0443\u043B\u0430 \u043D\u0430\u0434\u0430\u043D\u0430 \u0432 \u043F\u043E\u0432\u043D\u0456\u0439 \u043C\u0456\u0440\u0456 \u0430\u0431\u043E \u0431\u0443\u043B\u0430 \u043D\u0430\u0434\u0430\u043D\u0430 \u0432 \u043D\u0435\u043D\u0430\u043B\u0435\u0436\u043D\u0456\u0439 \u044F\u043A\u043E\u0441\u0442\u0456 (\u0431\u0430\u043B\u0430\u043D\u0441 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u043E\u0433\u043E \u043A\u0430\u0431\u0456\u043D\u0435\u0442\u0443 \u043D\u0435 \u0431\u0443\u0432 \u043F\u043E\u043F\u043E\u0432\u043D\u0435\u043D\u0438\u0439 \u0430\u0431\u043E \u0441\u0443\u043C\u0430 \u0437\u0430\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u0434\u0440\u0456\u0437\u043D\u044F\u0454\u0442\u044C\u0441\u044F \u0432\u0456\u0434 \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043A\u043E\u0432\u043E\u0457 \u0441\u0443\u043C\u0438 \u043F\u0456\u0434 \u0447\u0430\u0441 \u043E\u043F\u043B\u0430\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F), \u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u043C\u0430\u0454 \u043F\u0440\u0430\u0432\u043E \u0432\u0456\u0434\u043C\u043E\u0432\u0438\u0442\u0438\u0441\u044F \u0432\u0456\u0434 \u043F\u043E\u0441\u043B\u0443\u0433\u0438, \u0437\u0432\u0435\u0440\u043D\u0443\u0432\u0448\u0438\u0441\u044C \u0434\u043E \u0441\u043B\u0443\u0436\u0431\u0438 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438 \u041F\u0440\u043E\u0454\u043A\u0442\u0443, \u0442\u0430 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043F\u043E\u0432\u043D\u0443 \u0430\u0431\u043E \u0447\u0430\u0441\u0442\u043A\u043E\u0432\u0443 \u043A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0456\u044E \u0457\u0457 \u0432\u0430\u0440\u0442\u043E\u0441\u0442\u0456 \u0430\u0431\u043E \u0437\u0430\u043C\u0456\u043D\u0443 \u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043D\u0430 \u0430\u043D\u0430\u043B\u043E\u0433\u0456\u0447\u043D\u0435. \u041A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0456\u044F \u0440\u043E\u0437\u0440\u0430\u0445\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u0456\u0434\u0441\u0442\u0430\u0432\u0456 \u043F\u043E\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0441\u0442\u0430\u0442\u0443\u0441\u0443 \u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F, \u0456 \u0432\u043A\u043B\u044E\u0447\u0430\u0454 \u0432 \u0441\u0435\u0431\u0435 \u0442\u0430\u043A\u0456 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438, \u044F\u043A: \u0414\u0430\u0442\u0430 \u0456 \u0447\u0430\u0441 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F, \u0414\u0430\u0442\u0430 \u0456 \u0447\u0430\u0441 \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F, \u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F, \u0427\u0430\u0441 \u0440\u043E\u0431\u043E\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F, \u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0432\u0438\u0442\u0440\u0430\u0447\u0435\u043D\u043E\u0433\u043E \u0442\u0440\u0430\u0444\u0456\u043A\u0443 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F.",
          "\u041F\u0440\u043E\u0454\u043A\u0442 \u0437\u043E\u0431\u043E\u0432'\u044F\u0437\u0443\u0454\u0442\u044C\u0441\u044F \u0440\u043E\u0437\u0433\u043B\u044F\u0434\u0430\u0442\u0438 \u0432\u0441\u0456 \u0437\u0430\u044F\u0432\u043A\u0438 \u043F\u043E \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044E \u043A\u043E\u0448\u0442\u0456\u0432 \u0432 \u0442\u0435\u0440\u043C\u0456\u043D \u0434\u043E 15 \u0440\u043E\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0456\u0432"
        ]
      },
      {
        title: "\u041E\u0431\u043C\u0435\u0436\u0435\u043D\u043D\u044F \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456",
        items: [
          "\u041F\u0440\u043E\u0435\u043A\u0442 \u043D\u0435 \u043D\u0435\u0441\u0435 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0437\u0430 \u0448\u043A\u043E\u0434\u0443, \u0437\u0430\u043F\u043E\u0434\u0456\u044F\u043D\u0443 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430\u043C \u0430\u0431\u043E \u0442\u0440\u0435\u0442\u0456\u043C \u043E\u0441\u043E\u0431\u0430\u043C \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u041F\u0440\u043E\u0435\u043A\u0442\u0443 \u0447\u0438 \u0439\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432.",
          "\u041F\u0440\u043E\u0435\u043A\u0442 \u043D\u0435 \u043D\u0435\u0441\u0435 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0437\u0430 \u043F\u0435\u0440\u0435\u0440\u0432\u0443 \u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u0456 \u0434\u043E \u041F\u0440\u043E\u0435\u043A\u0442\u0443 \u0447\u0438 \u0439\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432, \u044F\u043A\u0430 \u0432\u0438\u043D\u0438\u043A\u043B\u0430 \u0437 \u043F\u0440\u0438\u0447\u0438\u043D, \u043D\u0435\u0437\u0430\u043B\u0435\u0436\u043D\u0438\u0445 \u0432\u0456\u0434 \u041F\u0440\u043E\u0435\u043A\u0442\u0443.",
          "\u041F\u0440\u043E\u0435\u043A\u0442 \u043D\u0435 \u043D\u0435\u0441\u0435 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0437\u0430 \u0437\u043C\u0456\u0441\u0442 \u0442\u0430 \u0434\u043E\u0441\u0442\u043E\u0432\u0456\u0440\u043D\u0456\u0441\u0442\u044C \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457, \u043D\u0430\u0434\u0430\u043D\u043E\u0457 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430\u043C\u0438 \u0430\u0431\u043E \u0442\u0440\u0435\u0442\u0456\u043C\u0438 \u043E\u0441\u043E\u0431\u0430\u043C\u0438 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u041F\u0440\u043E\u0435\u043A\u0442\u0443.",
          "\u041F\u0440\u043E\u0435\u043A\u0442 \u0437\u0430\u043B\u0438\u0448\u0430\u0454 \u0437\u0430 \u0441\u043E\u0431\u043E\u044E \u043F\u0440\u0430\u0432\u043E \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0432\u0456\u0434\u043C\u043E\u0432\u0438\u0442\u0438 \u0432 \u043E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u0456 \u041A\u043B\u0456\u0454\u043D\u0442\u0443 \u0431\u0435\u0437 \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F \u043F\u0440\u0438\u0447\u0438\u043D.",
          "\u041F\u0440\u043E\u0454\u043A\u0442 \u0437\u0430\u043B\u0438\u0448\u0430\u0454 \u0437\u0430 \u0441\u043E\u0431\u043E\u044E \u043F\u0440\u0430\u0432\u043E \u0440\u043E\u0437\u0433\u043B\u044F\u0434\u0430\u0442\u0438 \u0437\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u0443 \u0441\u0442\u0440\u043E\u043A \u043F\u043E\u043D\u0430\u0434 15 \u0440\u043E\u0431\u043E\u0447\u0438\u0445 \u0443 \u0440\u0430\u0437\u0456 \u0444\u043E\u0440\u0441-\u043C\u0430\u0436\u043E\u0440\u043D\u0438\u0445 \u043E\u0431\u0441\u0442\u0430\u0432\u0438\u043D, \u0449\u043E \u0432\u0438\u043D\u0438\u043A\u043B\u0438 \u0437 \u043F\u0440\u0438\u0447\u0438\u043D, \u043D\u0435 \u0437\u0430\u043B\u0435\u0436\u043D\u0438\u0445 \u0432\u0456\u0434 \u041F\u0440\u043E\u0454\u043A\u0442\u0443"
        ]
      },
      {
        title: "\u0412\u0438\u0440\u0456\u0448\u0435\u043D\u043D\u044F \u0441\u043F\u043E\u0440\u0456\u0432",
        items: [
          "\u0412\u0441\u0456 \u0441\u043F\u043E\u0440\u0438 \u0442\u0430 \u0440\u043E\u0437\u0431\u0456\u0436\u043D\u043E\u0441\u0442\u0456, \u0449\u043E \u0432\u0438\u043D\u0438\u043A\u0430\u044E\u0442\u044C \u0443 \u0437\u0432\u2019\u044F\u0437\u043A\u0443 \u0437 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F\u043C \u041F\u0440\u043E\u0435\u043A\u0442\u0443 \u0447\u0438 \u0439\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432, \u0432\u0438\u0440\u0456\u0448\u0443\u044E\u0442\u044C\u0441\u044F \u0448\u043B\u044F\u0445\u043E\u043C \u043F\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0440\u0456\u0432 \u043C\u0456\u0436 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430\u043C\u0438 \u0442\u0430 \u041F\u0440\u043E\u0435\u043A\u0442\u043E\u043C.",
          "\u0423 \u0440\u0430\u0437\u0456 \u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E\u0441\u0442\u0456 \u0432\u0438\u0440\u0456\u0448\u0435\u043D\u043D\u044F \u0441\u043F\u043E\u0440\u0443 \u0448\u043B\u044F\u0445\u043E\u043C \u043F\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0440\u0456\u0432, \u0441\u043F\u0456\u0440 \u043F\u0456\u0434\u043B\u044F\u0433\u0430\u0454 \u0432\u0438\u0440\u0456\u0448\u0435\u043D\u043D\u044E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u043C\u0456\u0436\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0432\u0441\u0442\u0432\u0430."
        ]
      },
      {
        title: "\u0417\u0430\u043A\u043B\u044E\u0447\u043D\u0456 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F",
        items: [
          "\u0426\u044F \u0423\u0433\u043E\u0434\u0430 \u0454 \u0454\u0434\u0438\u043D\u0438\u043C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u043C, \u0449\u043E \u0440\u0435\u0433\u0443\u043B\u044E\u0454 \u0432\u0456\u0434\u043D\u043E\u0441\u0438\u043D\u0438 \u043C\u0456\u0436 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430\u043C\u0438 \u0442\u0430 \u041F\u0440\u043E\u0435\u043A\u0442\u043E\u043C \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u041F\u0440\u043E\u0435\u043A\u0442\u0443 \u0442\u0430 \u0439\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432.",
          "\u041F\u0440\u043E\u0435\u043A\u0442 \u0437\u0430\u043B\u0438\u0448\u0430\u0454 \u0437\u0430 \u0441\u043E\u0431\u043E\u044E \u043F\u0440\u0430\u0432\u043E \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0447\u0430\u0441 \u0432\u043D\u043E\u0441\u0438\u0442\u0438 \u0437\u043C\u0456\u043D\u0438 \u0434\u043E \u0423\u0433\u043E\u0434\u0438 \u0431\u0435\u0437 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0433\u043E \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432.",
          "\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043D\u044F \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u041F\u0440\u043E\u0435\u043A\u0442\u0443 \u043F\u0456\u0441\u043B\u044F \u0432\u043D\u0435\u0441\u0435\u043D\u043D\u044F \u0437\u043C\u0456\u043D \u0434\u043E \u0423\u0433\u043E\u0434\u0438 \u043E\u0437\u043D\u0430\u0447\u0430\u0454 \u0437\u0433\u043E\u0434\u0443 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0437 \u043D\u043E\u0432\u0438\u043C\u0438 \u0443\u043C\u043E\u0432\u0430\u043C\u0438."
        ]
      }
    ]
  }
};

;// ./src/frontend/pages/term.tsx




const loadTerm = (lang) => {
  const data = termText[lang] || termText["en"];
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: "title" }, data.title), /* @__PURE__ */ react.createElement("div", { className: "time" }, data.time), /* @__PURE__ */ react.createElement("div", { className: "desc" }, data.desc), data.sections.map((section, i) => {
    return /* @__PURE__ */ react.createElement("div", { className: "section", key: i }, /* @__PURE__ */ react.createElement("div", { className: "title" }, section.title), /* @__PURE__ */ react.createElement("div", { className: "items" }, section.items.map((item, i2) => {
      return /* @__PURE__ */ react.createElement("div", { className: "item", key: i2 }, item);
    })));
  }));
};
class TermPage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("section", { className: "termsMain", style: { marginTop: "10px" } }, /* @__PURE__ */ react.createElement("div", { className: "container term" }, loadTerm(this.props.lang))));
  }
}

;// ./src/config/contacts.ts


const CONTACTS_LIST = [
  {
    title: "contactsTG",
    url: `https://t.me/${TG_SUPPORT_USERNAME}`,
    text: `@${TG_SUPPORT_USERNAME}`
  },
  {
    title: "contactsEmail",
    url: `mailto:${TG_SUPPORT_EMAIL}`,
    text: TG_SUPPORT_EMAIL
  }
];

;// ./src/frontend/pages/contacts.tsx




class ContactsPage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("section", { style: { marginTop: "10px" } }, /* @__PURE__ */ react.createElement("div", { className: "container contacts" }, CONTACTS_LIST.map((q, i) => {
      return /* @__PURE__ */ react.createElement("div", { key: i }, /* @__PURE__ */ react.createElement("span", { className: "title" }, this.LangString(q.title)), q.url ? /* @__PURE__ */ react.createElement("a", { href: q.url }, q.text) : /* @__PURE__ */ react.createElement("span", null, q.text));
    }))));
  }
}

;// ./src/frontend/pages/subscribe.tsx



const exampleSubscribeData = {
  proxies: {
    vless: {
      id: "71d71a5e-2739-48f7-8737-97d50635f92d",
      flow: "xtls-rprx-vision"
    },
    shadowsocks: {
      password: "a0KDjQxpTk5uirc7YE5rzQ",
      method: "chacha20-ietf-poly1305"
    }
  },
  expire: 1734008422,
  data_limit: 10737418240,
  data_limit_reset_strategy: "day",
  sub_updated_at: "2024-12-15T14:29:49.300422",
  sub_last_user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  online_at: null,
  username: "XanderWP-light_4",
  status: "expired",
  used_traffic: 0,
  lifetime_used_traffic: 0,
  created_at: "2024-12-11T13:00:22.256300",
  links: [
    "vless://71d71a5e-2739-48f7-8737-97d50635f92d@s1.rocketman-vpn.com:443?security=reality&type=tcp&headerType=&flow=xtls-rprx-vision&path=&host=&sni=cdn.jsdelivr.net&fp=chrome&pbk=WovQE0n3kB51195inMsf1vBa2ih2Yy4AzcFZyKvVtlA&sid=ecdfdcc4089edecc#%F0%9F%91%A4%20XanderWP-light_4%20%F0%9F%9A%80%20RocketMan-VPN.com",
    "ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTphMEtEalF4cFRrNXVpcmM3WUU1cnpR@s1.rocketman-vpn.com:1080#%F0%9F%91%A4%20XanderWP-light_4%20%F0%9F%9A%80%20RocketMan-VPN.com"
  ],
  subscription_url: "/sub/WGFuZGVyV1AtbGlnaHRfNCwxNzM0Mjc0MDMzynZ00tYkQG"
};
class SubscribePage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {
      data: exampleSubscribeData
    };
  }
  render() {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("section", { style: { marginTop: "10px" } }, /* @__PURE__ */ react.createElement("div", { className: "container subscribeData" }, "name: ", this.state.data.username)));
  }
}

// EXTERNAL MODULE: ./node_modules/qrcode/lib/browser.js
var lib_browser = __webpack_require__(7583);
;// ./src/config/crypto.ts

var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};


const TRON_WALLER_ADDRESS = "TVeBcLFkhhrUpgGyfpC9VsKvw8BkgLAbbF";
const CRYPTO_PAYMENT_EXPIRE_MINUTES = 240;
const CRYPTO_PAYMENT_URL_PREFIX = (/* unused pure expression or super */ null && (`${ false ? 0 : "http"}://${ false ? 0 : "rocketman-vpn.com"}${ false ? 0 : ""}?crypto_id=`));
const getTronUSDTTransactions = (..._0) => __async(void 0, [..._0], function* (address = TRON_WALLER_ADDRESS) {
  try {
    const response = yield lib_axios.get(
      "https://api.trongrid.io/v1/accounts/" + address + "/transactions/trc20",
      {
        params: {
          limit: 100,
          only_confirmed: true,
          order_by: "block_timestamp,desc"
        }
      }
    );
    const transactions = response.data.data;
    return transactions.filter((tx) => {
      var _a;
      return ((_a = tx.token_info) == null ? void 0 : _a.symbol) === "USDT";
    }).map((tx) => {
      const amountRaw = tx.value;
      const timestampMs = tx.block_timestamp;
      return {
        amountNumber: parseFloat(amountRaw),
        amountString: amountRaw,
        from: tx.from,
        timestamp: Math.floor(timestampMs / 1e3),
        txID: tx.transaction_id
      };
    });
  } catch (error) {
    console.error("Failed to fetch transactions:", error);
    return [];
  }
});
const BLOCKCHAIN_WALLETS = [
  {
    wallet: TRON_WALLER_ADDRESS,
    verifyFunction: getTronUSDTTransactions,
    blockchain: "TRC-20",
    name: "Tron Network"
  }
];
function generateTRC20PaymentQR(options) {
  return __async(this, null, function* () {
    try {
      const { address, amount, label } = options;
      const uri = `tron:${address}?amount=${amount}${label ? `&label=${encodeURIComponent(label)}` : ""}`;
      const base64 = yield lib_browser.toDataURL(uri, { width: 400 });
      return base64;
    } catch (error) {
      return void 0;
    }
  });
}

;// ./src/frontend/pages/payment.crypto.tsx






class PaymentCryptoPage extends BasePage {
  constructor() {
    super(...arguments);
    this.state = {
      cryptoId: null,
      error: "",
      wallet: null,
      img: ""
    };
    this.handleCopy = (value, alertText) => {
      if (navigator && navigator.clipboard) {
        navigator.clipboard.writeText(value).then(() => {
          alert(alertText);
        });
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = value;
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand("copy");
          alert(alertText);
        } catch (err) {
        }
        document.body.removeChild(textarea);
      }
    };
  }
  componentDidMount() {
    var _a;
    try {
      const params = new URLSearchParams(window.location.search);
      const cryptoIdEncoded = params.get("crypto_id");
      if (!cryptoIdEncoded) {
        this.setState({ error: this.LangString("cryptoPayErrorNoParam") });
        return;
      }
      const json = System.fromBinary(cryptoIdEncoded);
      const data = JSON.parse(json);
      if (!data.u || !data.a) {
        this.setState({ error: this.LangString("cryptoPayErrorInvalidData") });
        return;
      }
      let wallet = null;
      if (data.b) {
        const found = BLOCKCHAIN_WALLETS.find((w) => w.blockchain === data.b);
        if (found) {
          wallet = { wallet: found.wallet, name: found.name };
        }
      }
      generateTRC20PaymentQR({
        address: (_a = wallet == null ? void 0 : wallet.wallet) != null ? _a : "",
        amount: data.a,
        label: `${Core.GetConfigValue("projectName")} Payment (UID: ${data.u})`
      }).then((img) => {
        this.setState({ cryptoId: data, wallet, img });
      });
    } catch (e) {
      this.setState({ error: this.LangString("cryptoPayErrorParse") });
    }
  }
  render() {
    const { cryptoId, error, wallet, img } = this.state;
    return /* @__PURE__ */ react.createElement("section", { id: "payment-crypto", className: "payment-crypto-section" }, /* @__PURE__ */ react.createElement("div", { className: "container" }, /* @__PURE__ */ react.createElement("div", { className: "payment-crypto-wrapper" }, /* @__PURE__ */ react.createElement("div", { className: "payment-crypto-form" }, /* @__PURE__ */ react.createElement("h2", null, this.LangString("cryptoPayTitle")), error ? /* @__PURE__ */ react.createElement("div", { className: "crypto-error" }, error) : cryptoId ? /* @__PURE__ */ react.createElement("div", { className: "crypto-details" }, img ? /* @__PURE__ */ react.createElement("img", { src: img, className: "crypto_image" }) : /* @__PURE__ */ react.createElement(react.Fragment, null), /* @__PURE__ */ react.createElement("div", { className: "crypto-row" }, /* @__PURE__ */ react.createElement("span", { className: "crypto-label" }, this.LangString("cryptoPayUserId")), /* @__PURE__ */ react.createElement("span", { className: "crypto-value" }, cryptoId.u)), /* @__PURE__ */ react.createElement("div", { className: "crypto-row" }, /* @__PURE__ */ react.createElement("span", { className: "crypto-label" }, this.LangString("cryptoPayAmount")), /* @__PURE__ */ react.createElement(
      "div",
      {
        style: { display: "flex", alignItems: "center", gap: 8 }
      },
      /* @__PURE__ */ react.createElement("span", { className: "crypto-value" }, cryptoId.a, " USDT"),
      /* @__PURE__ */ react.createElement(
        "span",
        {
          style: {
            cursor: "pointer",
            padding: "2px 6px",
            userSelect: "none"
          },
          className: "btn-copy",
          onClick: () => this.handleCopy(
            String(cryptoId.a),
            this.LangString("cryptoPayCopyAmountAlert")
          ),
          title: this.LangString("cryptoPayCopy")
        },
        /* @__PURE__ */ react.createElement("span", { role: "img", "aria-label": "copy" }, "\u{1F4CB}")
      )
    )), wallet && /* @__PURE__ */ react.createElement(
      "div",
      {
        className: "crypto-row",
        style: { flexDirection: "column" }
      },
      /* @__PURE__ */ react.createElement("span", { className: "crypto-label" }, this.LangString("cryptoPayWallet")),
      /* @__PURE__ */ react.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            flexDirection: "row"
          }
        },
        /* @__PURE__ */ react.createElement(
          "span",
          {
            className: "crypto-value",
            style: { wordBreak: "break-all" }
          },
          wallet.wallet
        ),
        /* @__PURE__ */ react.createElement(
          "span",
          {
            style: {
              cursor: "pointer",
              padding: "2px 6px",
              userSelect: "none"
            },
            className: "btn-copy",
            onClick: () => this.handleCopy(
              wallet.wallet,
              this.LangString("cryptoPayCopyWalletAlert")
            ),
            title: this.LangString("cryptoPayCopy")
          },
          /* @__PURE__ */ react.createElement("span", { role: "img", "aria-label": "copy" }, "\u{1F4CB}")
        )
      )
    ), wallet && /* @__PURE__ */ react.createElement("div", { className: "crypto-row" }, /* @__PURE__ */ react.createElement("span", { className: "crypto-label" }, this.LangString("cryptoPayNetwork")), /* @__PURE__ */ react.createElement("span", { className: "crypto-value" }, wallet.name, " (", cryptoId.b, ")")), /* @__PURE__ */ react.createElement("div", { className: "crypto-row crypto-instruction" }, this.LangString("cryptoPayInstruction")), /* @__PURE__ */ react.createElement(
      "div",
      {
        className: "crypto-row crypto-warning",
        style: {
          color: "#ff5842",
          fontSize: "1.5em",
          textAlign: "center",
          marginTop: 16
        }
      },
      this.LangString("cryptoPayWarning")
    )) : /* @__PURE__ */ react.createElement("div", { className: "crypto-loading" }, this.LangString("cryptoPayLoading"))))));
  }
}

;// ./src/shared/referral.ts

const REFERRAL_STORAGE_KEY = "rocketman_web_referral_host";
const REFERRAL_START_PREFIX = "ref_";
function getReferralHostIdFromStartParam(start) {
  if (!start || typeof start !== "string") return null;
  if (!start.startsWith(REFERRAL_START_PREFIX)) return null;
  const hostId = start.slice(REFERRAL_START_PREFIX.length);
  if (!hostId) return null;
  return hostId;
}
function readSavedReferralHostId() {
  try {
    const v = localStorage.getItem(REFERRAL_STORAGE_KEY);
    return v || null;
  } catch (e) {
    return null;
  }
}
function saveReferralHostIdOnce(hostId) {
  if (!hostId) return;
  try {
    const existing = localStorage.getItem(REFERRAL_STORAGE_KEY);
    if (!existing) localStorage.setItem(REFERRAL_STORAGE_KEY, hostId);
  } catch (e) {
  }
}
function clearSavedReferralHostId() {
  try {
    localStorage.removeItem(REFERRAL_STORAGE_KEY);
  } catch (e) {
  }
}

;// ./src/frontend/App.tsx

var App_defProp = Object.defineProperty;
var App_getOwnPropSymbols = Object.getOwnPropertySymbols;
var App_hasOwnProp = Object.prototype.hasOwnProperty;
var App_propIsEnum = Object.prototype.propertyIsEnumerable;
var App_defNormalProp = (obj, key, value) => key in obj ? App_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var App_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (App_hasOwnProp.call(b, prop))
      App_defNormalProp(a, prop, b[prop]);
  if (App_getOwnPropSymbols)
    for (var prop of App_getOwnPropSymbols(b)) {
      if (App_propIsEnum.call(b, prop))
        App_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var App_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};












const App_state = {
  loaded: false,
  page: "index",
  lang: "en",
  fix_amount: 0,
  fix_id: "",
  mobileMenuOpen: false
};
class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = App_spreadValues({}, App_state);
    this.toggleMobileMenu = () => {
      this.setState((prevState) => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
    };
    this.closeMobileMenu = () => {
      this.setState({ mobileMenuOpen: false });
    };
    this.render = () => {
      if (!this.state.loaded) {
        return /* @__PURE__ */ react.createElement(react.Fragment, null);
      }
      return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("header", null, /* @__PURE__ */ react.createElement("div", { className: "container" }, /* @__PURE__ */ react.createElement("nav", null, /* @__PURE__ */ react.createElement(
        "div",
        {
          className: "logo",
          onClick: (e) => {
            e.preventDefault();
            this.setState({ page: "index" });
          }
        },
        "\u{1F680} ",
        Core.GetConfigValue("projectName")
      ), /* @__PURE__ */ react.createElement("div", { className: "right" }, /* @__PURE__ */ react.createElement(
        "button",
        {
          className: "mobile-menu-toggle",
          onClick: this.toggleMobileMenu,
          "aria-label": "Toggle menu"
        },
        /* @__PURE__ */ react.createElement(
          "span",
          {
            className: `hamburger ${this.state.mobileMenuOpen ? "open" : ""}`
          },
          /* @__PURE__ */ react.createElement("span", null),
          /* @__PURE__ */ react.createElement("span", null),
          /* @__PURE__ */ react.createElement("span", null)
        )
      ), /* @__PURE__ */ react.createElement(
        "div",
        {
          className: `nav-items ${this.state.mobileMenuOpen ? "open" : ""}`
        },
        /* @__PURE__ */ react.createElement(
          "a",
          {
            href: `https://t.me/${Core.GetConfigValue("projectBot")}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "btn",
            onClick: this.closeMobileMenu
          },
          /* @__PURE__ */ react.createElement("b", null, this.LangString("landingTGBotButton"))
        ),
        /* @__PURE__ */ react.createElement(
          "a",
          {
            href: `https://${"application.rocketman-vpn.com"}:${"8443"}/application`,
            rel: "noopener noreferrer",
            className: "btn",
            onClick: this.closeMobileMenu
          },
          /* @__PURE__ */ react.createElement("b", null, this.LangString("landingDashboardButton"))
        ),
        /* @__PURE__ */ react.createElement(
          "select",
          {
            onChange: (e) => {
              e.preventDefault();
              this.ChangeLang(e.currentTarget.value);
            },
            value: this.state.lang
          },
          getAllLangs().map((q) => {
            return /* @__PURE__ */ react.createElement("option", { key: q, value: q }, this.LangString(`lang.${q}`));
          })
        )
      ))))), /* @__PURE__ */ react.createElement("section", { id: "hero" }, /* @__PURE__ */ react.createElement("div", { className: "container" }, /* @__PURE__ */ react.createElement("h1", null, this.LangString("landingTitle")), /* @__PURE__ */ react.createElement("p", null, this.LangString("landingTitleDesc")))), this.state.page === "index" ? /* @__PURE__ */ react.createElement(LandingPage, { lang: this.state.lang }) : /* @__PURE__ */ react.createElement(react.Fragment, null), this.state.page === "payment" ? /* @__PURE__ */ react.createElement(
        PaymentPage,
        {
          lang: this.state.lang,
          usrID: this.state.fix_id,
          usrAmount: this.state.fix_amount
        }
      ) : /* @__PURE__ */ react.createElement(react.Fragment, null), this.state.page === "term" ? /* @__PURE__ */ react.createElement(TermPage, { lang: this.state.lang }) : /* @__PURE__ */ react.createElement(react.Fragment, null), this.state.page === "contacts" ? /* @__PURE__ */ react.createElement(ContactsPage, { lang: this.state.lang }) : /* @__PURE__ */ react.createElement(react.Fragment, null), this.state.page === "subscribe" ? /* @__PURE__ */ react.createElement(SubscribePage, { lang: this.state.lang }) : /* @__PURE__ */ react.createElement(react.Fragment, null), this.state.page === "crypto" ? /* @__PURE__ */ react.createElement(PaymentCryptoPage, { lang: this.state.lang }) : /* @__PURE__ */ react.createElement(react.Fragment, null), /* @__PURE__ */ react.createElement("footer", null, /* @__PURE__ */ react.createElement("div", { className: "container" }, /* @__PURE__ */ react.createElement("p", null, "\xA9 2024-", (/* @__PURE__ */ new Date()).getFullYear(), " ", Core.GetConfigValue("projectName")), /* @__PURE__ */ react.createElement("span", { className: "links" }, /* @__PURE__ */ react.createElement("a", { href: "/?term", target: "_blank", rel: "noopener noreferrer" }, this.LangString("terms")), /* @__PURE__ */ react.createElement("a", { href: "/?contacts", target: "_blank", rel: "noopener noreferrer" }, this.LangString("contacts"))), /* @__PURE__ */ react.createElement(
        "a",
        {
          href: "https://rocketman-streams.com/",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        this.LangString("landingFooterText")
      ), /* @__PURE__ */ react.createElement("p", { className: "footerLicense" }, "GAMETTI LTD, Registration No. 14348659, 2nd Floor, College House, 17 King Edwards Road, Ruislip, London"))));
    };
  }
  LangString(key, ...args) {
    return langString(this.state.lang, key, ...args);
  }
  ChangeLang(lang) {
    this.setState({ lang });
    localStorage.setItem("lang", lang);
  }
  awaitLoadConfig() {
    console.log("Waiting load config");
    return new Promise((res) => {
      const int = setInterval(() => {
        try {
          Core.GetConfigValue("projectBot");
          clearInterval(int);
          res(true);
        } catch (error) {
        }
      }, 100);
    });
  }
  componentDidMount() {
    return App_async(this, null, function* () {
      const url = new URL(location.href);
      const referralHostId = getReferralHostIdFromStartParam(
        url.searchParams.get("start")
      );
      if (referralHostId) saveReferralHostIdOnce(referralHostId);
      if (url.searchParams.has("lang") && getAllLangs().includes(url.searchParams.get("lang"))) {
        this.ChangeLang(url.searchParams.get("lang"));
      } else {
        const oldLang = localStorage.getItem("lang");
        if (oldLang && getAllLangs().includes(oldLang)) {
          this.ChangeLang(oldLang);
        }
      }
      yield this.awaitLoadConfig();
      lib_axios.get(
        `https://${"application.rocketman-vpn.com"}:${"8443"}/tgapi/loadCurrency`
      ).then((res) => {
        const data = res.data;
        if (data.status) {
          SetCurrentCurrency(data.data);
        }
      }).catch((err) => {
        console.error(err);
      }).finally(() => {
        this.setState({
          loaded: true,
          page: url.searchParams.has("payment") ? "payment" : url.searchParams.has("crypto_id") ? "crypto" : url.searchParams.has("term") ? "term" : url.searchParams.has("subscribe") ? "subscribe" : url.searchParams.has("contacts") ? "contacts" : "index",
          fix_amount: url.searchParams.get("amount") ? parseInt(url.searchParams.get("amount")) : 0,
          fix_id: url.searchParams.get("id") || ""
        });
      });
    });
  }
}

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(5072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(7659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(5056);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(1113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./src/frontend/styles/main.less
var main = __webpack_require__(7161);
;// ./src/frontend/styles/main.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(main/* default */.A, options);




       /* harmony default export */ const styles_main = (main/* default */.A && main/* default */.A.locals ? main/* default */.A.locals : undefined);

;// ./src/frontend/index.tsx





const container = document.getElementById("root");
if (container) {
  const root = (0,client/* createRoot */.H)(container);
  root.render(
    /* @__PURE__ */ react.createElement(App, null)
    // <React.StrictMode>
    // </React.StrictMode>
  );
}

})();

/******/ })()
;
