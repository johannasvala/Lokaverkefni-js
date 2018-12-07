console.log('halló! þetta virkar')

// Forsíðan sem birtist fyrst
var header = document.querySelector(`header`);
var main = document.querySelector(`main`);
var footer = document.querySelector(`footer`);

//Það sem gerist þegar ég kem fyrst inn á síðuna:
header.innerHTML = templates.header;
footer.innerHTML = templates.footer;

var renderFrontPage = function(){

    main.innerHTML = templates.forsida;

    var containerinn = document.querySelector(`.container`);
    containerinn.innerHTML += templates.iconSection;
    containerinn.innerHTML += templates.postListi;

    renderWeekdays(0);
    renderFrontPageYogaCards();
    initModal();
    
    var showForsida = document.getElementById('logo');
    showForsida.onclick = renderFrontPage; 
}

// HÉRNA KEMUR FOR LOOPAN FYRIR STUNDASKRÁNA

  var renderWeekdays = function(indexOfDay){
    console.log("rendera weekdays!")
    var addWeekday = document.getElementById('vikudagar');
    addWeekday.innerHTML = ""; 
    for(var i = 0; i<stundaSkra.length; i++){
        if(i === indexOfDay){
            addWeekday.innerHTML += `
                <li class="active">${stundaSkra[i].dagur}</li>
                `
                renderClasses(indexOfDay)

        } else {
            addWeekday.innerHTML += `
                <li onclick="renderWeekdays(${i})" class="">${stundaSkra[i].dagur}</li>
                `
        }
      }
  }
  
  
  var renderClasses = function(indexOfDay){

    var addClasses = document.getElementById('stundaskraListi');

    addClasses.innerHTML = "";

    for(var i = 0; i<stundaSkra[indexOfDay].classes.length; i++){
      addClasses.innerHTML += `
        <tr>
            <td>${stundaSkra[indexOfDay].classes[i].time}</td>
            <td class="timi_typa">${stundaSkra[indexOfDay].classes[i].name}</th>
            <td>${stundaSkra[indexOfDay].classes[i].kennari}</td>
            <td class="skoda_nanar">SKOÐA</td>
        </tr>
        `
     }
  }
//renderClasses(0)


//Hérna þarf að setja inn fjögur fyrstu kortin á námskeiðasíðunni,
//ER hægt að endurnýta sama function, nema birta ekki length nema bara 4 kort

function renderFrontPageYogaCards(){

    var addCards = document.querySelector('.card-holder');
    var buttonColor = "";

    for(var i = 0; i<4; i++){
        addCards.innerHTML += makeCard(i);

    }
}

function makeCard(i){
    if(namskeid[i].tegund === 'OPIÐ'){
        buttonColor = 'opid';

    } else {
        buttonColor = 'lokad';
    }
    return `
    <div class="card" id="card">
        <p class="${buttonColor}">${namskeid[i].tegund}</p>
        <img src="${namskeid[i].mynd}"/>
        <div class="card-text-holder">
            <h3>${namskeid[i].heiti}</h3>
            <p>${namskeid[i].texti}</p>
            <div class="btn-holder">
                <a onClick="renderSingleYogaClass(${i})" id="kundalinijóga" alt="skoða kundalinijóga">SKOÐA</a>
                <button class="skra" onclick="alert('Hello world!')">SKRÁ</button>
            </div>
        </div>
    </div>
    `
}

//PÓSTLISTASKRÁNING POP-UP

var initModal = function() {

    var btn = document.querySelector(".btn-postur");
    var modal = document.querySelector("#modalContainer");
    var okBtn = document.querySelector("#ok-takki");
    var mailText = document.querySelector(".input-netfang");
    var mailName = document.querySelector(".input-nafn");

    btn.addEventListener('click', (e) => {
        modal.style.display = 'flex';

    });

    okBtn.addEventListener('click', (e) => {
        modal.style.display = 'none';
        mailText.value="";
        mailName.value="";
    });

    modal.addEventListener('click', (e) => {
        console.log(e.target)
        if(e.target.classList.contains('modalContainer')) {
            modal.style.display = 'none';
        }
    });
}



renderFrontPage();

var allirTimar = document.getElementById('allirTimarFrontPage')

allirTimar.onclick = function(){
    console.log('show jogatimar!')
    main.innerHTML = templates.jogatimar;
    window.scrollTo(0,0)

    var containerinn = document.querySelector(`.container`);
    containerinn.innerHTML += templates.skraning;
    containerinn.innerHTML += templates.iconSection;
    containerinn.innerHTML += templates.postListi;

    renderYogaCards()
}

//HAMBORGARAMENU

var burger = document.querySelector(".burgerContainer");
var menu = document.querySelector(".hamburgermenu");

burger.onclick = function(){
    console.log('hamborgari')
    menu.style.display = 'block';
}
