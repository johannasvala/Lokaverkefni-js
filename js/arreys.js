//hérna fyrir neðan er verið að setja inn námskeiðin á réttan stað
var namskeid = [
    {
        tegund: 'OPIÐ',
        mynd: 'images/kundalinijoga.png',
        heiti: 'KUNDALINIJÓGA',
        texti: 'Kundalini jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og ...',
    },
    {
        tegund: 'LOKAÐ',
        mynd: 'images/medgongujoga.png',
        heiti: 'MEÐGÖNGUJÓGA',
        texti: 'í Meðgöngujóga leggjum við áherslu á  öndun,  teygjur,  styrkjandi æfingar  og slökun. Djúp öndun og slökun er ...',
    },
    {
        tegund: 'LOKAÐ',
        mynd: 'images/mommujoga.png',
        heiti: 'MÖMMUJÓGA',
        texti: 'Mömmujóga er námskeið þar sem mæður og börn stunda mjúka og styrkjandi en jafnframt skemmtilega...',
    },
    {
        tegund: 'LOKAÐ',
        mynd: 'images/hathajoga.png',
        heiti: 'HATHAJÓGA',
        texti: 'HATHA er ein þekktasta tegund jóga á vesturlöndunum. HA þýðir sól og THA þýðir máni. Unnið er með ...',
    },
    {
        tegund: 'LOKAÐ',
        mynd: 'images/karlajoga.png',
        heiti: 'KARLAJÓGA',
        texti: 'Jóga fyrir karla – líka stirða og stressaða! Mjúkar teygjur, öndun. styrking og slökun í lok tímans.',
    },
    {
        tegund: 'LOKAÐ',
        mynd: 'images/krakkajoga.png',
        heiti: 'KRAKKAJÓGA',
        texti: 'Áherslan í krakkajóga er leikur og gleði. Börnin læra ýmsar jógastöður og æfingar sem styrkja jafnvægi ...',
    },
    {
        tegund: 'OPIÐ',
        mynd: 'images/joganidra.png',
        heiti: 'JÓGA NIDRA',
        texti: 'Nidra þýðir svefn, en ólíkt svefni er Jóga Nidra meðvituð, djúp slökun, mætti líka kalla liggjandi hugleiðslu.',
    },
    {
        tegund: 'OPIÐ',
        mynd: 'images/mjuktjoga.png',
        heiti: 'MJÚKT JÓGA',
        texti: 'Jóga er fyrir þig, þar sem þú ert stödd/staddur hverju sinni! Setjum heilsuna okkar í forgangsröð. ...',
    },
    {
        tegund: 'LOKAÐ',
        mynd: 'images/parajoga.png',
        heiti: 'PARAJÓGA',
        texti: 'Við njótum þess að gera jóga saman. Gerðar verða jógaæfingar og stöður í sameiningu. Lykilatriðið er ...',    },
    {
        tegund: 'LOKAÐ',
        mynd: 'images/joga60plus.png',
        heiti: 'JÓGA 60+',
        texti: 'Nærandi jógatímar á stólum og gólfi þar sem boðið er upp á rólegar æfingar eftir getu hvers og eins. ...',
    },
    {
        tegund: 'LOKAÐ',
        mynd: 'images/nuvitund.png',
        heiti: 'NÚVITUND',
        texti: 'Núvitund (mindfulness) er náttúrulegur eiginleiki hugans til að vera meðvitaður hér og nú ...',
    },
    {
        tegund: 'LOKAÐ',
        mynd: 'images/kundalinigrunnur.png',
        heiti: 'JÓGA OG 12 SPORIN',
        texti: 'Markmiðið er að vinna með sjálfsstyrkingu og gjafir 12 sporanna með nálgun jóga og hugleiðslu. ...',
    },
    {
        tegund: 'OPIÐ',
        mynd: 'images/sadhana.png',
        heiti: 'SADHANA',
        texti: 'Í Sadhana ögum við huga og líkama til að hlúa að og þjóna sálinni. Að sigra daginn og sigra okkur sjálf, ...',
    },
    {
        tegund: 'LOKAÐ',
        mynd: 'images/kundalinigrunnur2.png',
        heiti: 'KUNDALINI GRUNNUR',
        texti: 'Farið er í undirstöðuatriði í Kundalini jóga. Kenndar eru líkamsstöður, líkamsbeiting, möntrur og ...',
    }
];

// Hér fyrir neðan koma kennara cards-in inn

var kennarar = [
    {
        mynd: 'images/audur.png',
        kennari: 'Auður Bjarnadóttir',
        textiShort: 'Kundalini jóga, Meðgöngujóga, Mömmujóga, Hatha jóga og Jóga Nidra',
        textiLong: 'Auður Bjarnadóttir, hefur kennt jóga síðan 2000. Árið 1999 tók hún sitt fyrsta kennarapróf, hatha/ashtanga í “Mount Madonna” í Kaliforníu. Meðgöngujóganámið hófst í Seattle árið 2000, á Kripalu Center árið 2002 og hjá hinni víðfrægu Gurumukh ‘Khalsa Way’ árið 2005. Auður útskrifaðist sem Kundalini jógakennari árið 2005 í New Mexico. Hún er einnig með kennararéttindi í Yoga Nidra og Yoga Therapíu frá Amrit Institute í Florida. Árið 2012 tók hún Diploma sem Dáleiðslutæknir haustið 2012 frá The International School of Clinical Hypnosis. Auður hefur sérhæft sig í meðgöngujóga og fæðingarfræðum og tók Doulu námi hjá Hönd í Hönd 2011 og HypnoBirth námskeið. Árið 2000-2001 sá Auður um Krakkajóga í Stundinni okkar og 2012 gaf hún út Krakkajóga DVD mynd ásamt “Erumenn”. Auður hefur kennt víða og haldið utan um ýmis námskeið í Jógasetrinu, ma. Kennarnám í Kundalini Jóga og fleiri fjölbreytt námskeið. Auður elskar að kenna en líka að læra og lítur á sig sem eilífan nemanda í jóga, og að lifa lífinu lifandi. Auður kennir Kundalini jóga, Meðgöngujóga, Mömmujóga, Hatha jóga og Jóga Nidra, leiðir Kennaranám í Kundalini og fleira. Auður hefur einnig leitt jógaferðir á fjöllum og síðustu ár hefur hún einnig kennt íslenskum og erlendum hópum á Krít og Corfu á Grikklandi.',
    },
    {
        mynd: 'images/arna_rin.png',
        kennari: 'Arna Rín',
        textiShort: 'Hatha jóga, Mjúkt Jóga, Jóga Nidra, Kundalini jóga, Meðgöngujóga og Mömmujóga',
        textiLong: 'Arna Rín lauk sínum fyrstu kennararéttindum í Kundalini Jóga árið 2013 hjá Jógasetrinu. Arna er einnig menntaður 500RYT Hatha/Raja jógakennari og hefur lokið Jóga Nidra framhalds-leiðbeinendaréttindum frá Amrit Yoga Institute þar sem hún bjó og starfaði einnig sem Seva (sjálfboðaliði) í hálft ár innan samfélagsins.  Hún hefur lokið námskeiði í krakkajóga-kennslu (Childplay) hjá Gurudass Kaur Kalsa og hefur haldið utan um ýmis námskeið í krakkajóga, unglingajóga og fjölskyldujóga. Í tímum sínum samnýtir hún Hatha jóga ásamt Raja Jóga (hugleiðslujóga) og kennir Hugleiðslu í Hreyfingu. Arna Rín er menntaður Heilsumarkþjálfi, frá Institute of Integrative Nutrition, NY. Nú stundar Arna nám við Hómópatíu hjá Icelandic School of Homeopathy. Hún sækir reglulega jóganámskeið og workshop til þess að dýpka þekkingu sína. Arna Rín leggur áherslu á að tengja saman jógafræðin og heilbrigðan lífstíl til að lifa í sínum fyllsta styrk. Arna kennir Hatha jóga / Mjúkt Jóga / Jóga Nidra og Kundalini jóga / ásamt því að leysa af meðgöngujóga og mömmujóga.',
    },
    {
        mynd: 'images/alfrun_helga.png',
        kennari: 'Álfrún Helga Örnólfsdóttir',
        textiShort: 'Krakkajóga 8 - 11 ára og 12 - 14 ára',
        textiLong: 'Álfrún Helga Örnólfsdóttir er menntuð leikkona, dansari og kundalini jógakennari. Hún hefur leikið fjölmörg hlutverk á sviði og í kvikmyndum. Álfrún hefur kennt börnum leiklist og jóga frá árinu 2009. 2011 sótti hún námskeið í Childplay hjá Gurudass Kaur Khalsa. Í krakkajóganu notar hún mikið sögur til að miðla boðskap jógafræðanna og kenna jógastöður. Sköpunargleðin er alltaf í fyrirrúmi í tímunum. Álfrún kennir Krakkajóga 8-11 ára og 12- 14 ára.',
    },
    {
        mynd: 'images/birgir.png',
        kennari: 'Birgir Þorsteinn Jóakimsson',
        textiShort: 'Karlajóga',
        textiLong: 'Birgir Þorsteinn Jóakimsson hefur haft áhuga á jógafræðunum frá því hann var unglingur. Hann lauk kennaranámi hjá Jóga stúdíói og Yogi Shanti Desai sumarið 1998. Birgir hefur kennt fólki á öllum aldri á hinum ýmsu stöðum frá árinu 1998 meðfram starfi sínu sem grafískur hönnuður. Hann er mikill áhugamaður um hlaup, hjólreiðar og nú síðast sjósund sem hann stundar af töluveðri ástríðu. Birgir trúir því að lykillinn að því að verða góður jógakennari sé að þykja alveg óendanlega vænt um þá sem hann er að kenna. Þá kemur allt hitt að sjálfu sér. Birgir kennir Karlajóga.',
    },
    {
        mynd: 'images/edda.png',
        kennari: 'Edda Jónsdóttir',
        textiShort: 'Kundalinijóga',
        textiLong: 'Edda Jónsdóttir útskrifaðist sem Kundalini jógakennari snemma árs 2013 og stundar nú framhaldsnám í fræðunum. Í Kundalini jóga upplifir hún einhvern galdur sem erfitt er að útskýra en þeim mun merkilegra að upplifa. Hún er menntaður grunnskólakennari, ásamt því að vera með BA próf í spænsku. Helstu áhugamál eru fjölbreytt hreyfing og útivera ásamt ótalmörgu sem snýr að andlegri og líkamlegri heilsu. Edda kennir Kundalini jóga.',
    },
    {
        mynd: 'images/edith.png',
        kennari: 'Edith Gunnarsdóttir',
        textiShort: 'Kundalinijóga',
        textiLong: 'Edith Gunnarsdóttir. Edith hafði stundað jóga og hugleiðslu í fjölda ára þegar hún kynntist kundalini jóga. Hún heillaðist og lá leið hennar fljótlega í Kundalini kennaranámið. Hún útskrifaðist sem kundalini jógakennari árið 2015. Edith er einnig með kennararéttindi í jóga nidra, og er komin í framhaldsnám í kundalinifræðunum. Hún hefur kennt jóga síðan 2014 í Jógasetrinu og Yogasmiðjunni. Edith er einnig menntuð í sálfræði og geðheilbrigði og starfar sem sérkennslustjóri hjá Reykjavíkurborg og er einnig leiðsögumaður hjá Ferðafélagi Íslands.',
    },
    {
        mynd: 'images/estrid.png',
        kennari: 'Estrid Þorvaldsdóttir',
        textiShort: 'Kundalini jóga,  Orkustöðvanámskeið og einkatímar í orkustöðvarlestri',
        textiLong: 'Estrid Þorvaldsdóttir, byrjaði í kundalini yoga kennararnámi í september 2008. Kundalini jóga eftir forskrift Yogi Bhajan, hefur notið vaxandi vinsælda og er stundum kallað jóga hins vinnandi fólks. Estrid starfar sem yoga kennari og ráðgjafi og leiðsögumaður um fjöll og fyrnindi. Hún er í framhaldsnámi í kundalini yoga fræðum.  Hún vinnur einnig með orkustöðvar heilun byggt á vísindum kundalini yoga og veitir persónulega ráðgjöf við að finna út hvaða orkustöðvar eru í ójafnvægi og veita hugleiðslur og yogaæfingar sem hjálpa viðkomandi finna þitt eðlilega ástand. Estrid kennir Kundalini jóga,  Orkustöðvanámskeið og er einnig með einkatíma í Orkustöðvarlestri.',
    },
    {
        mynd: 'images/gudbjorg_arnard.png',
        kennari: 'Guðbjörg Arnardóttir',
        textiShort: 'Krakkajóga 3 - 4 ára og 5 - 7 ára',
        textiLong: 'Guðbjörg Arnardóttir, lærði ballett við Listdansskóla Þjóðleikshússins. Hún lauk danskennaranámi frá Danshögskolan í Stokkhólmi og sérhæfði sig í barnadönsum, ballett og nútímadansi. Hún hefur kennt við ýmsar dansstofnanir í Svíþjóð og á Íslandi. Guðbjörg lauk grunnskólakennaramenntun við Kennaraháskóla Íslands vorið 2001 og haustið 2003 lauk hún prófi frá sama skóla í menntun tvítyngdra barna. Guðbjörg hefur rekið Listdansskóla Hafnarfirði í 18 ár og kennt barnadansa og ballett í 30 ár. Hún hefur einnig tekið þátt í krakkajóganámskeiðinu  “CHILDPLAY ” hjá Gurudass Kaur í Jógasetrinu. Guðbjörg kennir Krakkajóga 3-4 ára og 5-7 ára.',
    },
    {
        mynd: 'images/gunnar_asgeirs.png',
        kennari: 'Gunnar Ásgeirsson',
        textiShort: 'Kundalinijóga',
        textiLong: 'Gunnar Ásgeirsson, útskrifaðist sem jógakennari frá Ásmundi Gunnlaugssyni í janúar 2007 og tók kennarapróf í Kundalini jóga í Reykjavík vorið 2009 í Karam Kriya School. Fyrir Gunnari er jógalífstíll góður til að ná betri stjórn á líkama, huga og sál. Gunnar kennir Kundalini jóga.',
    },
    {
        mynd: 'images/gunnar_fridriksson.png',
        kennari: 'Gunnar Friðriksson',
        textiShort: 'Núvitund gegn streitu',
        textiLong: 'Gunnar hefur lokið leiðbeinendanámskeiði frá Mindfulness Association. Einnig farið á ýmis námskeið heima og erlendis í núvitundarhugleiðslu, m.a. í Samyeling, tíbetsku klaustri staðsettu í Skotlandi. Gunnar starfar nú sem heilsunuddari og sjukraliði. Undanfarin ár hefur Gunnar kennt hjá Hugleiðslu og friðarmiðstöðinni. Einnig  á vegum Hjúkrunnarfélags Íslands og fyrir sjúkraliða.',
    },
    {
        mynd: 'images/inga.png',
        kennari: 'Inga Reynisdóttir',
        textiShort: 'Kundalinijóga og Jóga Nidra',
        textiLong: 'Inga Reynisdóttir kynntist Hatha jóga á unglingsaldri og þrátt fyrir að hafa prófað ýmis önnur líkamsræktarkerfi um ævina þá leitaði hún alltaf aftur í jóga. Jóga hefur umfram flesta aðra líkamsrækt að það sameinar ræktun þrenningarinnar líkama, huga og sálar. Kundalini jóga samræmist sérstaklega vel daglegu lífi og þegar hún kynntist því sumarið 2011 þá varð ekki aftur snúið. Ástundun Kundalini jóga hefur verið fastur liður í tilverunni síðan þá og til þess að dýpka skilning á Kundalini jóga þá kláraði hún fyrsta stig Kundalini jógakennaranámsins árið 2013. Hún er í áframhaldandi Kundalini jógakennaranámsi og er einnig Jóga Nidra kennari. Inga er líffræðingur að mennt og starfar á Meinafræðideild Landspítalans þar sem hún vinnur m.a. við rannsóknir á brjóstakrabbameini. “Vegna vinnu minnar þarf ég stöðugt að tileinka mér nýja þekkingu og fylgjast með tækniframförum á sviðinu. Ástundun jóga hefur gert mér kleift að finna hugarró í erli dagsins.” Inga kennir Kundalini jóga og Jóga Nidra.',
    },
    {
        mynd: 'images/maria.png',
        kennari: 'María Ásgeirsdóttir',
        textiShort: 'Mjúkt jóga og Jóga Nidra',
        textiLong: 'María Ásgeirsdóttir jógakennari í Jógasetrinu hefur iðkað jóga frá árinu 2012. Hún er með alþjóðleg jóga kennararéttindi í bæði Kundalini jóga og Jóga Nidra. Einnig hefur hún lokið fyrsta stigi í Jahara vatnsmeðferð og í Reiki heilun.  María kennir Mjúkt jóga og Jóga Nidra.',
    },
    {
        mynd: 'images/thelma.png',
        kennari: 'Thelma',
        textiShort: 'Jóga fyrir 60+ og Kundalinijóga',
        textiLong: 'Thelma er listkennari, fatahönnuður, móðir og jógakennari og varð fyrst hugfangin af kundalini jóga á meðgöngunni og eftir það lá leiðin í kennaranám í kundalini jóga hjá Auði Bjarnadóttir í Jógasetrinu. “Kundalini jóga hefur breytt lífi mínu í alla staði. Það hefur gefið mér innri frið, sjálfstraust, kjark og úthald til að stíga inn í draumana mína: Að trúa á sjálfa mig. Ég hef náð að næra allt það bjarta og góða í mér og sjá það í öðrum, auk þess sem ég upplifi aukinn kjark og úthald til að takast á við þær áskoranir sem ég mæti í lífinu. Umfram allt hef ég öðlast traust til lífsins í gegnum jógaiðkunina mína. Ég treysti því að lífið færi mér allt sem ég þarf og allt sem ég vil.” Thelma kennir JÓGA FYRIR 60 PLÚS OG Kundalini jóga.',
    },
    {
        mynd: 'images/gerda.png',
        kennari: 'Þorgerður Sveinsdóttir',
        textiShort: 'Mjúkt jóga, Hatha, Meðgöngujóga, Kundalini jóga og Jóga Nidra',
        textiLong: 'Þorgerður Sveinsdóttir starfar sem Hatha yogakennari og heilari. Stundar framhaldsnám í yogafræðum, yoga þerapíu, hugleiðslu og ayurveda lífstílsráðgjöf. Hefur einnig lokið námi í ferðamálafræðum ásamt lýðheilsuvísindum og snyrtifræði. Þorgerður leiðir hatha yoga flæði, nidra (djúpslökun), hugleiðslur,  yoga í vatni og yoga fyrir börn. Þorgerður hefur starfað við yogakennslu í tæp fjögur ár og er með alþjóðlega viðurkennd réttindi og sækir reglulega fjölbreytt námskeið í tengslum við heilsu og yogafræðin. Þorgerður kennir Mjúkt jóga, Hatha, Meðgöngujóga, Kundalini jóga og Jóga Nidra.',
    },
    {
        mynd: 'images/torgunnur.png',
        kennari: 'Þórgunnur Ársælsdóttir',
        textiShort : 'Kundalinijóga og Jóga Nidra',
        textiLong: 'Þórgunnur Ársælsdóttir hefur stundað jóga frá tvítugsaldri og lauk Kundalini jógakennaranámi árið 2009.  Þórgunnur starfar sem geðlæknir og hefur kennt jóga á Landspítalanum síðan 2009.  Þórgunnur er einnig með kennararéttindi í Jóga Nidra og Jóga Þerapíu frá Amrit Institute í Bandaríkjunum og hefur kennt það síðan 2011. Þórgunnur kennir Jóga Nidra og Kundalini jóga.',
    }
];



// ARREY FYRIR STUNDASKRÁNA!!
var stundaSkra = [
    {
        dagur: 'Mánudagur',
        classes: [
            {
            name: 'KUNDALINIJÓGA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'MÖMMUJÓGA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'MEÐGÖNGUJÓGA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'HATHAJÓGA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'GRUNNNÁMSKEIÐ',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'KARLAJÓGA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        }
        ]
    },
    {
        dagur: 'Þriðjudagur',
        classes: [
            {
            name: 'MJÚKT JÓGA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'KUNDALINIJÓGA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'JÓGA 60+',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'KUNDALINIJÓGA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'MEÐGÖNGUJÓGA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'JÓGA & 12 SPORIN',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        }
        ]
    },
    {
        dagur: 'Miðvikudagur',
        classes: [
            {
            name: 'KUNDALINIJÓGA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'MÖMMUJÓGA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'MEÐGÖNGUJÓGA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'JÓGA 12-14 ÁRA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'HATHA & NIDRA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'GRUNNNÁMSKEIÐ',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'KUNDALINI & GONG',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        }
        ]
    },
    {
        dagur: 'Fimmtudagur',
        classes: [
            {
            name: 'MJÚKT JÓGA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'KUNDALINIJÓGA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'JÓGA 60+',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'KUNDALINIJÓGA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'MEÐGÖNGIJÓGA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'KARLAJÓGA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        }
        ]
    },
    {
        dagur: 'Föstudagur',
        classes: [
            {
            name: 'SADHANA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'JÓGA NIDRA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'HATHA & NIDRA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'DANS & SLÖKUN',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        }
        ]
    },
    {
        dagur: 'Laugardagur',
        classes: [
            {
            name: 'HATHA JÓGA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'MEÐGÖNGUJÓGA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'KRAKKAJÓGA 8-11 ÁRA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        },
        {
            name: 'KRAKKAJÓGA 4-7 ÁRA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        }
        ]
    },
    {
        dagur: 'Sunnudagur',
        classes: [
            {
            name: 'KUNDALINIJÓGA',
            kennari: 'Gunnar',
            time: '6:30 - 7:30'
        }
        ]
    }
  ];