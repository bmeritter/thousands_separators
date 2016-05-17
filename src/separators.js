'use strict';

function thousands_separators(num) 
{
 	var list = new String(num).split('').reverse();
   	for(var i = 0; i < list.length; i++)
	{
       		if(i % 4 == 3)
		{
         		list.splice(i, 0, ',');
       		}
   	}
   	return list.reverse().join(''); 
}

module.exports = thousands_separators;
