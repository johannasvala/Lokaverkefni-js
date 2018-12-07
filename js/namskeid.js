var showJogatimar = document.querySelectorAll("#jogatimar");

console.log(showJogatimar)

for(var i = 0; i < showJogatimar.length; i++){
    showJogatimar[i].onclick = function(){
        console.log('show jogatimar!')
        main.innerHTML = templates.jogatimar;
        window.scrollTo(0,0)
    
        var containerinn = document.querySelector(`.container`);
        containerinn.innerHTML += templates.skraning;
        containerinn.innerHTML += templates.iconSection;
        containerinn.innerHTML += templates.postListi;
    
        renderYogaCards();
        initModal();
        if(window.innerWidth < 500){
            toggleHamburgerMenu()
        }
    }
}

function renderYogaCards(){

    var addCards = document.getElementById('card-holder');

    for(var i = 0; i<namskeid.length; i++){
        addCards.innerHTML += makeCard(i);
    }

//Hérna kemur filteringin fyrir jógatímana

    var showAllirTimar = document.getElementById("allirTimar");
    var showOpnirTimar = document.getElementById("opnirTimar");
    var showLokudNamskeid = document.getElementById("lokudNamskeid");

    function filterTimar(filterString, noFilter, e) {

        var oldActive = document.querySelector('.timarFilter.active');
        oldActive.classList.remove("active");

        e.target.classList.toggle('active')

        addCards.innerHTML = ""; //Þetta byrjar á því að tæma öll card-in
        for(var i = 0; i<namskeid.length; i++){

            if(namskeid[i].tegund!== filterString && !noFilter) {
                continue;
            }

            if(namskeid[i].tegund === 'OPIÐ'){
                buttonColor = 'opid';
    
            } else {
                buttonColor = 'lokad';
            }

            addCards.innerHTML += `
            <div class="card" id="card">
                <p class="${buttonColor}">${namskeid[i].tegund}</p>
                <img src="${namskeid[i].mynd}"/>
                <div class="card-text-holder">
                    <h3>${namskeid[i].heiti}</h3>
                    <p>${namskeid[i].texti}</p>
                    <div class="btn-holder">
                        <a type="button" onClick="renderSingleYogaClass(${i})" id="kundalinijóga" alt="skoða kundalinijóga">SKOÐA</a>
                        <button class="skra" onclick="alert('Hello world!')">SKRÁ</button>
                    </div>
                </div>
            </div>
            `
        }
    }

    showOpnirTimar.onclick = function(e){
        filterTimar('OPIÐ', false, e);
    };
    showLokudNamskeid.onclick = function(e){
        filterTimar('LOKAÐ', false, e);
    }
    showAllirTimar.onclick = function(e){
        filterTimar('',true, e);
    }

}

