var templates = {
    header: `
        <nav class="top-nav">
            <div class="top-nav-content">
                <img src="images/jogasetrid-logo-fjolublatt.svg" alt="Jógasetrið lógó" id="logo"/>
                <ul class="nav-list">
                    <li><a href="#" id="jogatimar" alt="jógatímar">Jógatímar</a></li>
                    <li><a href="#" id="kennaranam" alt="kennaranám">Kennaranám</a></li>
                    <li><a href="#" id="stundaskra" alt="stundaskrá">Stundaskrá</a></li>
                    <li><a href="#" id="verdskra" alt="verðskrá">Verðskrá</a></li>
                    <li><a href="#" id="jogasetrid" alt="jógasetrið">Jógasetrið</a></li>
                </ul>
            </div>
            <div class="leit" >
                <img src="images/leit.svg" alt="leit"> 
            <!-- <input placeholder="Hverju ert þú að leita að?"> -->			
            </div>
        </nav>
        <div class="hamburgermenu">
            <div class="hamburgermenu-logo-container">
                    <img src="images/jogasetrid-logo-hvitt.svg" alt="Jógasetrið lógó"/>
            </div>
            <div class="hamburgermenu-leit">
                    <input placeholder="Leit">
                    <div class="leit-container">
                        <img src="images/leit.svg" alt="leit"> 
                    </div>
            </div>
            <div class="hamburgermenu-content">
                <ul class="nav-list">
                    <li><a href="#" id="jogatimar" alt="jógatímar">Jógatímar</a></li>
                    <li><a href="#" id="kennaranam" alt="kennaranám">Kennaranám</a></li>
                    <li><a href="#" id="stundaskra" alt="stundaskrá">Stundaskrá</a></li>
                    <li><a href="#" id="verdskra" alt="verðskrá">Verðskrá</a></li>
                    <li><a href="#" id="jogasetrid" alt="jógasetrið">Jógasetrið</a></li>
                </ul>
            </div>
        </div>

        <!-- <div class="hamburger-container"><img class="hamburger" src="images/hamborgari.svg" alt="menu" title="hamburger"></div> -->
        
        <div class="hamburger-container">
            <div class="burgerCloseContainer">
                <img src="images/hamborgari_loka.svg" alt="loka menu"/>
            </div>
            <div class="burgerContainer active">
                <div class="burger" id="change1"></div>
                <div class="burger" id="change2"></div>
                <div class="burger" id="change3"></div>
            </div>
        </div>
    `,
    footer: `
        <div class="footer-container">
            <div class="footer_content_container">
                <div class="footer-content-1">
                    <img src="images/jogasetrid-logo-hvitt.svg" alt="Jógasetrið logo"/>
                </div>
                <div class="footer-content-2">
                    <div class="about">
                        <p>Verið hjartanlega velkomin í Jógasetrið í fjölbreytta stundarskrá.  Það er velkomið að blanda saman Kundalini, Hatha, Mjúku Jóga og Jóga Nidra til að fá styrk, kjark, áræðni, mýkt og djúpa slökun inn í lífið. Frábærir kennarar deila reynslu sinni og þekkingu.</p>
                    </div>
                </div>
                <div class="footer-content-3">
                    <p><span>Jógasetrið</span><br><br>Skipholt 50 c<br>105 Reykjavík</p>
                </div>
                <div class="footer-content-4">
                    <p><span>Hafðu samband</span><br><br>Sími 778 1000<br><a href="#">jogasetrid@jogasetrid.is</a></p>
                </div>
                <div class="footer-content-5">
                    <p><span>Jógasetrið á Facebook</span></p>
                    <img src="images/facebook-logo.svg" alt="Fara á facebooksíðu Jógasetursins"/>
                </div>
            </div>
        </div>
    `,
    forsida: `
        <div class="container">
                
        

        <!--Hamborgari - menu endar / BANNER byrjar -->

        <section class="main-banner">
            <div class="bannermynd">
                <img src="images/tree.png" alt="tree pose"/>
            </div>
            <div class="main-txt-holder">
                <h1>JÓGA FYRIR ALLA</h1>
                <p class="skraut-texti">Við erum andlegar verur  með mannlega reynslu</p>
            </div>
        </section>

        <div class="divider"></div>

        <!--Bannermynd endar / Stundaskrá byrjar -->

        <section class="stundaskra">
            <h2>Stundaskrá</h2>
            <div class="vikudagar">
                <ul id="vikudagar"></ul>
            </div>
            <div class="stundaskra-forsida-container">
                <table>
                    <thead>
                        <tr>
                            <th>KLUKKAN</th>
                            <th>JÓGATÍMI</th>
                            <th>KENNARI</th>
                            <th>UPPLÝSINGAR</th>
                        </tr>
                    </thead>
                    <tbody id="stundaskraListi">
                    </tbody>
                </table>
            </div>
                <a href="#" class="btn" id="vikanBtn"alt="sjá alla vikuna">VIKAN</a>
        </section>

        <div class="divider"></div> <!-- SÉST EKKI!!!!! -->

        <!--Stundaskrá endar / Námskeið byrja -->

        <section class="cards-namskeid">
            <h2>Opnir tímar & námskeið</h2>
            <div class="card-holder">
                

            </div> <!-- class="card-holder" -->

            <a href="#" class="btn" id="allirTimarFrontPage" alt="sjá alla tíma">ALLIR TÍMAR</a>
        </section> <!-- class="cards-namskeid" -->

        <div class="divider"></div>

        <!--Námskeið endar / Viðburðir byrja -->

        <section class="vidburdir">
            <h2>Viðburðir</h2>
            <div class="event-container">
                <div class="vidburdur-mynd">
                    <img src="images/lotus.png" alt="lótusblóm"/>
                </div>
                <div class="vidburdur-info">
                    <h3>“Þú getur hjálpað”<br>með Tolla Morthens og Nicolai Engelbrecht</h3>
                    <p>Það er svo auðvelt að fallast hendur yfir þjáningu heimsins og okkur finnst við geta gert svo lítið. En við getum öll gert eitthvað og allt sem við gefum og gerum skiptir máli. Líka það litla.</p>
                    <a href="#">SKOÐA</a>
                </div>
            </div>
            <a href="#" class="btn" alt="sjá alla viðburði">ALLIR VIÐBURÐIR</a>

        </section> <!-- margin bottom 80px -->

        <div class="divider"></div>

        <!--Viðburðir endar / Skrautmynd byrjar -->

        <section class="branding-section-right">
            <div class="brand-mynd">
                <img src="images/fjall.png" alt="kona í jógastöðunni fjallið"/>
            </div>
            <div class="brand-texti">
                <p class="skraut-texti">“Líkaminn er hof,<br>hugsaðu vel um hann<br>Hugurinn er orka,<br>stilltu hana<br>Sálin er útgeislun,<br>stattu á bak við hana”<br><br>-Yogi Bhajan</p>
            </div>
        </section> <!-- class="branding-section" -->

        <div class="divider"></div>


        </div> <!-- class="container" -->
    `,
    jogatimar: `
        <div class="spacer"></div> <!-- SPACER -->
        <div class="container">
            <section class="cards-namskeid">
                <h2>Opnir tímar & námskeið</h2>
                <div class="filter-namskeid">
                    <div>
                        <p class="timarFilter active" id="allirTimar">ALLIR TÍMAR</p>
                    </div>
                    <div>
                        <p class="timarFilter" id="opnirTimar">OPNIR TÍMAR</p>
                    </div>
                    <div>
                        <p class="timarFilter" id="lokudNamskeid">LOKUÐ NÁMSKEIÐ</p>
                    </div>
                </div>
                <div class="card-holder" id="card-holder">
                    
                </div> <!-- class="card-holder" -->
            </section> <!-- class="cards-namskeid" -->

            <div class="divider"></div>

        </div> <!-- class="container" -->
    `,
    staktNamskeid: `
        <div class="container">
            <section class="namsk-info-container">
                <h2>Kundalinijóga</h2>
                <div class="two-columns">
                    <div class="namsk-info">
                        <h3>OPNIR TÍMAR</h3>
                        <div class="divider-small"></div>
                        <p>Frjáls mæting í opna tíma Kundalini jóga, Hatha jóga, Jóga Nidra, og Mjúkt jóga</p>
                        <div class="divider-small"></div>
                        <p>Mánaðarkort <span>13.500 kr.</span><br>Annarkort <span>33.000 kr.</span><br> Árskort <span>99.000 kr.</span><br>10 tíma klippikort <span>17.000 kr.</span></p>
                        <div class="divider-small"></div>
                        <p>KENNARAR<br>Auður, Gerða, Arna Rín, Gunnar og Estrid</p>
                        <div class="divider-small"></div>
                        <p>Dýnur, teppi og koddar á staðnum</p>
                        <div class="btn-holder">
                            <button class="skra" onclick="alert('Hér á að koma modal gluggi með skráningar útskýringum')">SKRÁ MIG</button>
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

        </div> <!-- class="container" -->
    `,
    about: `
        <div class="container">
            <section class="namsk-info-container">
                <h2>Velkomin í Jógasetrið</h2>
                <div class="two-columns">
                    <div class="namsk-info">
                        <img src="images/audur-baenastada.png" alt="kona í bænastöðu">
                    </div>
                
                    <div class="namsk-texti">
                        <p>Verið hjartanlega velkomin í Jógasetrið í fjölbreytta stundarskrá.  Það er velkomið að blanda saman Kundalini, Hatha, Mjúku Jóga og Jóga Nidra til að fá styrk, kjark, áræðni, mýkt og djúpa slökun inn í lífið.  Frábærir kennarar deila reynslu sinni og þekkingu.  Sturtur á staðnum. Verið velkomin í frían prufutíma.
                            Jógasetrið, sem er staðsett í Skipholti 50C, er vettvangur fyrir jógaiðkun fyrir alla aldurshópa. Í setrinu er lögð áhersla á vingjarnlegt andrúmsloft þar sem við leitumst við að hlúa að og næra líkama, sál og andans vellíðan.
                            Auður Bjarnadóttir eigandi og forstöðumaður Jógasetursins kennir Kundalini jóga, Jóga Nidra, meðgöngujóga, mömmujóga, ásamt mörgum góðum kennurum.
                        </p>
                    </div>
                </div>
            </section>

            <!--Info endar / Skrautmynd byrjar -->

            <section class="branding-section-right">
                <div class="brand-mynd">
                    <img src="images/salur.png" alt="kona í jógastöðunni fjallið"/>
                </div>
                <div class="brand-texti">
                    <p class="skraut-texti">“Hreyfðu við orkunni <br>og lífsorkan greiðir leiðina”
                        </p>
                </div>
            </section> <!-- class="branding-section" -->

            <div class="divider"></div>

            <!--Skrautmynd endar / Kennarar byrja -->
            
            <section class="cards-namskeid">
                <div class="postlisti-info-holder">
                    <h2>Kennarar í Jógasetrinu</h2>
                    <h4>Í Jógasetrinu er fjölbreytt stundarskrá.  Það er velkomið að blanda saman Kundalini, Hatha, Mjúku Jóga og Jóga Nidra til að fá styrk, kjark, áræðni, mýkt og djúpa slökun inn í lífið.  Einnig úrval af lokuðum námskeiðum. Frábærir kennarar deila reynslu sinni og þekkingu.</h4>
                </div>

                <div class="card-holder" id="card-holder">
                    


                </div> <!-- class="card-holder" -->
            </section> <!-- class="cards-namskeid" -->

    `,
    postListi: `
        <section class="postlisti">
            <div id="modalContainer">
                <div id="modalGluggiPostur">
                    <div class="infoHolderPostur">
                        <img src="images/prufa-icon.svg" />
                        <h3>Takk fyrir skráninguna!</h3>
                        <H4>Þú ert núna skráð/ur á póstlista Jógasetursins</H4>
                        <li class="btn" id="ok-takki"alt="loka">OK</li>
                    </div> 
                </div>
            </div>
            <div class="postlisti-info-holder">
                <h2>Póstlisti Jógasetursins</h2>
                <h4>Skráðu þig á póstlistann okkar og fáðu fréttir af reglulegum viðburðum. 
                Einnig sendum við út mikilvægar tilkynningar til viðskiptavina.</h4>
                <div class="postlistaskraning">
                    <input type="text" name="name" class="input-nafn" placeholder="Nafn">
                    <input type="text" name="email" class="input-netfang" placeholder="Netfang">
                    <button type="button" class="btn-postur">SKRÁ MIG</button>
                </div>
            </div>
        </section>
    `,
    iconSection: `
        <section class="icon-section">
            <div class="icon-section-txt-holder">
                <h2>Velkomin í Jógasetrið</h2>
                <h4>Jógasetrið er heimilisleg lítil jógastöð þar sem allir ættu að geta fundið eitthvað við sitt hæfi. Komið og njótið!</h4>
            </div>
            <div class="icon-holder">
                <div class="icon">
                    <img src="images/motta-icon.svg"/>
                    <h4>Jógadýnur, koddar og teppi á staðnum</h4>
                </div>
                <div class="icon">
                    <img src="images/te-icon.svg"/>
                    <h4>Við bjóðum upp á nýlagað jógate</h4>
                </div>
                <div class="icon">
                    <img src="images/sturta-icon.svg"/>
                    <h4>Sturtur á staðnum<br>karla & kvenna</h4>
                </div>
                <div class="icon">
                    <img src="images/prufa-icon.svg"/>
                    <h4>Frír prufutími</h4>
                </div>
            </div>
        </section>
    `,
    skraning: `
        <section class="skraning">
            <div class="skraning-info-holder">
                <h2>Skráning og greiðsla</h2>
                <h4>Skráning á námskeið í Jógasetrinu fer fram í gegnum skráningarkerfið NORI. Þú skráir þig inn og velur námskeiðið sem þú ætlar að skrá þig á</h4>
                <button type="button" class="btn-skraning">FARA Á SKRÁNINGARVEF</button>
            </div>
        </section>
    `,
}

