//Month Arrays -----------------------------------------------------------
var pizzaList = ["APPLE HARVEST SALAD","CHEF SALAD","CHICKEN FIESTA SALAD","GARDEN SALAD", "TACO SALAD", "CHEESE RANCH STIX", "MASHED POTATOES&GRAVY", "RANCH CHIPS", "HOT WINGS","CHICKEN FRIES","GREEN BEANS","COLESAW"];
var pizzaPrice = ["$4.50", "$6.00", "$7.00", "$6.50", "$5.00", "$5.50", "$8.00", "$7.50", "$6.50 ","$7.50 ","$5.50","$8.00"];
//Static content ---------------------------------------------------------
document.write("<table border='1' width='200'>")
document.write("<tr><th>NUMBER</th><th>SIDES NAME</th><th>PRICE</th></tr>");
//Dynamic content --------------------------------------------------------
for(var i=0; i<12;i++)
{
	document.write("<tr><td>" + (i+1) + "</td><td>" + pizzaList[i] + "</td><td>" + pizzaPrice[i] +"</td></tr>");
}
//Static content  --------------------------------------------------------
document.write("</table>")