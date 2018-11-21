//Month Arrays -----------------------------------------------------------
var pizzaList = ["PHILLY CHEESESTEAK PIZZA","PRAIRIE","TEXAN TACO","BRONCO", "BUFFALO CHICKEN PIZZA", "CHICKEN BACON RANCH", "STAMPEDE", "TUSCAN ROMA", "ROUNDUP","CALIFORNIA CHICKEN","TRAILBLAZER","CHICKEN BROCCOLI ALFREDO"];
var pizzaPrice = ["$10.50", "$12.00", "$13.00", "$12.50", "$11.00", "$11.50", "$14.00", "$13.50", "$12.50 ","$13.50 ","$11.50","$14.00"];
//Static content ---------------------------------------------------------
document.write("<table border='1' width='200'>")
document.write("<tr><th>NUMBER</th><th>PIZZA NAME</th><th>PRICE</th></tr>");
//Dynamic content --------------------------------------------------------
for(var i=0; i<12;i++)
{
	document.write("<tr><td>" + (i+1) + "</td><td>" + pizzaList[i] + "</td><td>" + pizzaPrice[i] +"</td></tr>");
}
//Static content  --------------------------------------------------------
document.write("</table>")

