function result()
{
	var score=0;
	if(document.getElementById('a1').checked)
		{	score = score+1;
		}
	if(document.getElementById('a2').checked)
		{	score = score+2;
		}
	if(document.getElementById('a3').checked)
		{	score = score+3;
		}
	if(document.getElementById('b1').checked)
		{	score = score+1;
		}
	if(document.getElementById('b2').checked)
		{	score = score+2;
		}
	if(document.getElementById('b3').checked)
		{	score = score+3;
		}
	if(document.getElementById('c1').checked)
		{	score = score+1;
		}
	if(document.getElementById('c2').checked)
		{	score = score+2;
		}
	if(document.getElementById('c3').checked)
		{	score = score+3;
		}
	if(document.getElementById('d1').checked)
		{	score = score+1;
		}
	if(document.getElementById('d2').checked)
		{	score = score+2;
		}
	if(document.getElementById('d3').checked)
		{	score = score+3;
		}
	if(document.getElementById('e1').checked)
		{	score = score+1;
		}
	if(document.getElementById('e2').checked)
		{	score = score+2;
		}
    if(document.getElementById('e3').checked)
        {	score = score+3;
        }

    var node = document.getElementById('result');
        
	if(score > 14) {
        document.getElementById("result").innerHTML = "Schämen Sie sich Sie Umweltsau!!"; 
	}
	if(score < 13) {
		document.getElementById("result").innerHTML = "Das geht noch besser!";
	}
	if(score < 6) {
		document.getElementById("result").innerHTML = "Krass das ist gut!!";
	}
//  document.write("Your score is:"+score);
 // to print on browser
 // document.write("Your score is:"+score);
}