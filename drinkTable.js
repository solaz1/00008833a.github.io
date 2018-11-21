//Month Arrays -----------------------------------------------------------
var pizzaList = ["20 OZ SODA","2 LITER SODA","COFFEE"];
var pizzaPrice = ["$2.50", "$3.50", "$2.00"];
//Static content ---------------------------------------------------------
document.write("<table border='1' width='200'>")
document.write("<tr><th>NUMBER</th><th>DRINK NAME</th><th>PRICE</th></tr>");
//Dynamic content --------------------------------------------------------
for(var i=0; i<3;i++)
{
	document.write("<tr><td>" + (i+1) + "</td><td>" + pizzaList[i] + "</td><td>" + pizzaPrice[i] +"</td></tr>");
}
//Static content  --------------------------------------------------------
document.write("</table>")