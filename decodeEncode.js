var Url = {

 	// public method for URL encoding
 	encode : function (string) {
 		 return escape(this._utf8_encode(string));
 	},

 	// public method for URL decoding
	 decode : function (string) {
 	 	return this._utf8_decode(unescape(string));
 	},

 	// private method for UTF-8 encoding
 	_utf8_encode : function (string) {
  		string = string.replace(/\r\n/g,"\n");
 	 	var utftext = "";

  		for (var n = 0; n < string.length; n++) {
   			var c = string.charCodeAt(n);
   			if (c < 128) {
    				utftext += String.fromCharCode(c);
 			} else if((c > 127) && (c < 2048)) {
  				utftext += String.fromCharCode((c >> 6) | 192);
  				utftext += String.fromCharCode((c & 63) | 128);
 			} else {
  				utftext += String.fromCharCode((c >> 12) | 224);
  				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
 	 			utftext += String.fromCharCode((c & 63) | 128);
				
 			}
 	}
		return utftext;
	}
}
