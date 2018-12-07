var showJogasetrid = document.getElementById("jogasetrid");

showJogasetrid.onclick = function(){
    main.innerHTML = templates.about; 
    window.scrollTo(0,0);

    var containerinn = document.querySelector(`.container`);
    containerinn.innerHTML += templates.skraning;
    containerinn.innerHTML += templates.postListi;
    
    renderTeacherCards()
    initModal();
}

// Hér kemur lúppan fyrir kennarana

function renderTeacherCards(){
 console.log('tékk')
    var addCards = document.getElementById('card-holder');

    for(var i = 0; i<kennarar.length; i++){
        addCards.innerHTML += `
        <div class="card-kennari" id="cardKennari">
            <div class="kennariHover">
                <li class="btn btnKennari" alt="skoða kennara">NÁNAR</li>
            </div>
            <img src="${kennarar[i].mynd}"/>
            <div class="card-kennari-text-holder">
                <h5>${kennarar[i].kennari}</h5>
                <p>${kennarar[i].textiShort }</p>
            </div>
        </div>
        <div class="modalContainer">
            <div class="modalGluggi">
                <div class="infoHolder">
                    <img src="${kennarar[i].mynd}"/>
                    <div class="modalText">
                        <h3>${kennarar[i].kennari}</h3>
                        <p>${kennarar[i].textiLong }</p>
                    </div>
                </div> 
            </div>
        </div>
        `
    }

    var btnKennari = document.querySelectorAll(".btnKennari");
    var modalContainer = document.querySelectorAll(".modalContainer");
    var modal = document.querySelectorAll(".modalGluggi");

    for (let i = 0; i < btnKennari.length; i++) {
        btnKennari[i].addEventListener('click', (e) => {
            modalContainer[i].style.display = 'flex';
            modal[i].style.display = 'flex';
    
        });
    
        modal[i].addEventListener('click', (e) => {
            modalContainer[i].style.display = 'none';
            modal[i].style.display = 'none';
        });
        
    }   
}



    
