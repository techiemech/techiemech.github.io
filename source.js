
var arre = new Array();
var y = new Array();
var g = new Array();



function arr(){
	

	var test = document.getElementById('tease').value;
	var cropsize = +test;
	//document.getElementById('use').innerHTML = cropsize;
	
	var test1 = document.getElementById('teaser').value;
	var modnum = +test1;
	//document.getElementById('useto').innerHTML = modnum; 
	
	
	if(cropsize>2&&cropsize<=20){
	
		for(var n =0; n<cropsize; n++){
			
			var x = prompt('Enter Number . . .', '');
                        y[n] = x;
                        
                        if(n>0){
                            for(var t =n; t>0;t--){
                            if(y[n]===y[t-1]){
                                alert('You are repeating numbers!');
                                }
                            }        
                            }
                            arre[n] = +x;
                            }
//document.getElementById('use').innerHTML = 'For a crop size of: '+cropsize+ '<br/><br/> You chose these numbers: '+arre;
}

else document.getElementById('warning').innerHTML = typeof(cropsize);//'Enter a number between 3 and 10'+' '+':-('; 

document.getElementById('use').innerHTML = 'For a crop size of: '+arre.length+ '<br/><br/> You chose these numbers: '+arre;
        var m = 0;
        var w = 0;
        for(var a =0; a < arre.length; a++){
            for(var b = a;b>=0;b--){
                g[m] = (arre[a]*arre[b])%modnum;
                ++m;
            }
        }
        for(var c =0; c<g.length; c++){
            for(var d = 0; d<arre.length; d++){
                if(g[c] === arre[d]){
                    ++w;
                }
            }
        }
        alert(w);
        if(w === g.length){
            alert('A Crop!!');
	  }      


}

