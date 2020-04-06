const divfeu = document.createElement('div');
const prfeu=document.createElement('div');
const defeu=document.createElement('div');
const trfeu=document.createElement('div');
const bt = document.createElement('button');


divfeu.id="feu";
prfeu.id="red";
defeu.id="yellow";
trfeu.id="green";
bt.className="boutton";
bt.innerText="Cliquez pour traverser";

divfeu.appendChild(prfeu);
divfeu.appendChild(defeu);
divfeu.appendChild(trfeu);
divfeu.appendChild(bt);


document.querySelector('#section-container').appendChild(divfeu);
$(document).ready(function(){
	$(trfeu).show().delay(3500).hide(0);
	$(defeu).hide().delay(3500).show(1).delay(1500).hide(0);
	$(prfeu).hide().delay(5000).show(1);
});


 bt.addEventListener('click', function(){retardement('Passez, svp!');});

function retardement(str) {
    bt.innerText = str;
   
setTimeout(function() {
    bt.innerText = 'Cliquez pour traverser';
}, 2000);
}

// function changerletext() {
//     bt.innerText='Textchange';
//     //this.textContent='textchange';
//     };

    


