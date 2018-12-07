// var showKundalini = document.getElementById("kundalini");

// showKundalini.onclick = function(){
//     main.innerHTML = templates.staktNamskeid; 

//     var containerinn = document.querySelector(`.container`);
//     containerinn.innerHTML += templates.iconSection;
//     containerinn.innerHTML += templates.postListi;
    
// }

function renderSingleYogaClass(index){
    
    var singleClass = namskeid[index];
    window.scrollTo(0,0)

    main.innerHTML = `
    <div class="container">
        <section class="namsk-info-container">
            <h2>${singleClass.heiti}</h2>
            <div class="two-columns">
                <div class="namsk-info">
                    <h3>OPNIR TÍMAR</h3>
                    <div class="divider-small"></div>
                    <p>${singleClass.texti}</p>
                    <div class="divider-small"></div>
                    <p>Mánaðarkort <span>13.500 kr.</span><br>Annarkort <span>33.000 kr.</span><br> Árskort <span>99.000 kr.</span><br>10 tíma klippikort <span>17.000 kr.</span></p>
                    <div class="divider-small"></div>
                    <p>KENNARAR<br>Auður, Gerða, Arna Rín, Gunnar og Estrid</p>
                    <div class="divider-small"></div>
                    <p>Dýnur, teppi og koddar á staðnum</p>
                    <div class="btn-holder">
                        <button class="skra" onclick="alert('Hérna verður þér hent inn á ljótan skráningarvef...')">SKRÁ MIG</button>
                        <a href="#" alt="skoða kundalinijóga">STUNDASKRÁ</a>
                    </div>
                </div>
            
                <div class="namsk-texti">
                    <p>
                        Kundalini jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar. Kundalini jóga hentar bæði byrjendum og jógaiðkendum sem hafa reynslu af öðrum tegundum jóga.<br><br>
                        Kundalini jóga eftir forskrift Yogi Bhajans samanstendur af æfingum eða stöðum (asana), með ákveðinni öndun (pranayama) handa- og fingrastöðum (mudra), líkamslokum (bandha), tónun (mantra) og íhugun (meditation), saman eða í ákveðinni röð til að skapa ákveðin áhrif.<br><br>
                        „Kriya“ er æfing eða sería af æfingum sem hafa í heild sinni meiri áhrif en samanlagðir hlutar hennar. Margar af þessum „kriyum“ eru virðulegar og ævafornar og hafa verið kenndar munnlega frá kennara til nemanda. Yogi Bhajan sem fyrstur færði Vesturlandabúum Kundalini jóga þróaði mjög markvisst kerfi sem við ástundun virkar upplífgandi og jafnvel umbreytandi.
                    </p>
                </div>
            </div>
        </section>

        <div class="divider"></div>

        <!--Námskeið endar / Skrautmynd byrjar -->

        <section class="branding-section-left">
            <div class="brand-mynd">
                <img src="images/lotus.png" alt="lótusblóm"/>
            </div>
            <div class="brand-texti">
                <p class="skraut-texti">“„Það er meðfætt tilkall<br>hverrar manneskju<br>að vera hraust, helg<br>og hamingjusöm“<br><br> – Yogi Bhajan</p>
            </div>
        </section> <!-- class="branding-section" -->

        <div class="divider"></div>

        ${templates.iconSection}
        ${templates.postListi}
    </div> <!-- class="container" -->
`;

initModal();
}