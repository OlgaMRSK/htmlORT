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


bt.addEventListener('click', function() {
    changercouleur(

    );

});

bt.addEventListener('click', function(){retardement();});

