'use strict';

function thousands_separators(num)
{

    var num = (num || 0).toString(), temp;
    var i = num.indexOf(".");
    var str, s = num;
    if (i != -1) {
        num = num.substring(0,i);
        str = s.substring(i,s.length);
    }

    temp = num.length % 3;
    switch (temp) {
        case 1:
            num = '00' + num;
            break;
        case 2:
            num = '0' + num;
            break;
    }
    num =  num.match(/\d{3}/g).join(',').replace(/^0+/, '');
    if (i != -1) {
       num = num.concat(str);
    }

    return num;
}

module.exports = thousands_separators;
