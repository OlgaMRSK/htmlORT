function createContact(fn, ln, tel, mail) { 

//DECLARATION
const divct = document.createElement('div');
//divct.innerText = 'Coucou';
//console.log(divct);
//document.body.appendChild(divct);
const h3contact = document.createElement('h3')
const h4contact = document.createElement('h4')
const pcontact = document.createElement('p')


//CONFIGURATION
divct.className = 'contact';
h3contact.innerText =fn.toUpperCase() + '' + ln;
h4contact.innerText ='Tel:'+ tel + '- Mail:'+ mail;
pcontact.innerText ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, totam molestiae. Vitae alias reprehenderit iusto architecto? Repellat, quos facilis dignissimos omnis quo, similique earum iusto eos sed unde sapiente eius.';


//IMBRICATION
divct.appendChild(h3contact);
divct.appendChild(h4contact);
divct.appendChild(pcontact);

//console.log(divct);

document.querySelector('.contacts').appendChild(divct);

}
//createContact();
//createContact();
//createContact();

const newbutton = document.querySelector('#ad-contact button')
newbutton.addEventListener('click', function() {
    createContact(
    'DURAND',
    'Emilie',
    '063587895',
    'contact@mail.com'
    );

});



//let bt = document.querySelector('button');
//const bt = document.querySelector('button');
//bt.onclick = sayTesCon;
//console.log(bt);

//addEventListener s'utilise pour rajouter la fonction et NE PAS ECRASER presedant
//bt.addEventListener('click', function() {console.log('hello');});
//bt.addEventListener('click', miseajour);
//bt.addEventListener('click', envoyermail);

//bt.addEventListener('click', changerletext);
//bt.addEventListener('click', compliquerletext);
//bt.addEventListener('click', function(){compliquerletext('Coucou!');});
bt.addEventListener('click', function(){retardement('Coucou!');});

function retardement(str) {
    bt.innerText = str;
   
setTimeout(function() {
    bt.innerText = 'Fin du programme';
}, 2000);
}

function changerletext() {
    bt.innerText='Textchange';
    //this.textContent='textchange';
    };

function compliquerletext() {
    if (bt.innerText ==='Textchange')
    {
        bt.innerText ='NewText';
    }
    else {
        bt.innerText ='Textchange';
    }
};
    
function compliquerletext(str) {
    if (bt.innerText ==='COCO')
    {
        bt.innerText = str;
    }
    else {
        bt.innerText ='COCO';
    }
};

function miseajour() {
console.log('tout mettre a jour!');
};

function envoyermail() {
    //console.log("ton meil est envoyer");
};


function sayTesCon() {console.log('Tes con');}

const event = [
    function() {
        console.log("bonjour");
    },
    function() {
        console.log("aurevoir");
    }

];
event[1]();
event[0]();



// DRY - Don't Repeat Yourself
// KISS - Keep It Simple, Stupid