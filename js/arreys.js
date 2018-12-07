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
        mynd: 'images/kundalinijoga.png',
        heiti: 'PARAJÓGA',
        texti: 'Við njótum þess að gera jóga saman. Gerðar verða jógaæfingar og stöður í sameiningu. Lykilatriðið er ...',    },
    {
        tegund: 'LOKAÐ',
        mynd: 'images/kundalinijoga.png',
        heiti: 'JÓGA 60+',
        texti: 'Nærandi jógatímar á stólum og gólfi þar sem boðið er upp á rólegar æfingar eftir getu hvers og eins. ...',
    },
    {
        tegund: 'LOKAÐ',
        mynd: 'images/kundalinijoga.png',
        heiti: 'NÚVITUND',
        texti: 'Núvitund (mindfulness) er náttúrulegur eiginleiki hugans til að vera meðvitaður hér og nú ...',
    },
    {
        tegund: 'LOKAÐ',
        mynd: 'images/kundalinijoga.png',
        heiti: 'JÓGA OG 12 SPORIN',
        texti: 'Markmiðið er að vinna með sjálfsstyrkingu og gjafir 12 sporanna með nálgun jóga og hugleiðslu. ...',
    },
    {
        tegund: 'OPIÐ',
        mynd: 'images/kundalinijoga.png',
        heiti: 'SADHANA',
        texti: 'Í Sadhana ögum við huga og líkama til að hlúa að og þjóna sálinni. Að sigra daginn og sigra okkur sjálf, ...',
    },
    {
        tegund: 'LOKAÐ',
        mynd: 'images/kundalinijoga.png',
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
        textiLong: 'Hatha jóga, Mjúkt Jóga, Jóga Nidra, Kundalini jóga, Meðgöngujóga og Mömmujóga',
    },
    {
        mynd: 'images/alfrun_helga.png',
        kennari: 'Álfrún Helga Örnólfsdóttir',
        textiShort: 'Krakkajóga 8 - 11 ára og 12 - 14 ára',
        textiLong: 'Hatha jóga, Mjúkt Jóga, Jóga Nidra, Kundalini jóga, Meðgöngujóga og Mömmujóga',
    },
    {
        mynd: 'images/birgir.png',
        kennari: 'Birgir Þorsteinn Jóakimsson',
        textiShort: 'Karlajóga',
        textiLong: 'Hatha jóga, Mjúkt Jóga, Jóga Nidra, Kundalini jóga, Meðgöngujóga og Mömmujóga',
    },
    {
        mynd: 'images/edda.png',
        kennari: 'Edda Jónsdóttir',
        textiShort: 'Kundalinijóga',
        textiLong: 'Hatha jóga, Mjúkt Jóga, Jóga Nidra, Kundalini jóga, Meðgöngujóga og Mömmujóga',
    },
    {
        mynd: 'images/edith.png',
        kennari: 'Edith Gunnarsdóttir',
        textiShort: 'Kundalinijóga',
        textiLong: 'Hatha jóga, Mjúkt Jóga, Jóga Nidra, Kundalini jóga, Meðgöngujóga og Mömmujóga',
    },
    {
        mynd: 'images/estrid.png',
        kennari: 'Estrid Þorvaldsdóttir',
        textiShort: 'Kundalini jóga,  Orkustöðvanámskeið og einkatímar í orkustöðvarlestri',
        textiLong: 'Hatha jóga, Mjúkt Jóga, Jóga Nidra, Kundalini jóga, Meðgöngujóga og Mömmujóga',
    },
    {
        mynd: 'images/gudbjorg_arnard.png',
        kennari: 'Guðbjörg Arnardóttir',
        textiShort: 'Krakkajóga 3 - 4 ára og 5 - 7 ára',
        textiLong: 'Hatha jóga, Mjúkt Jóga, Jóga Nidra, Kundalini jóga, Meðgöngujóga og Mömmujóga',
    },
    {
        mynd: 'images/gunnar_asgeirs.png',
        kennari: 'Gunnar Ásgeirsson',
        textiShort: 'Kundalinijóga',
        textiLong: 'Hatha jóga, Mjúkt Jóga, Jóga Nidra, Kundalini jóga, Meðgöngujóga og Mömmujóga',
    },
    {
        mynd: 'images/gunnar_fridriksson.png',
        kennari: 'Gunnar Friðriksson',
        textiShort: 'Núvitund gegn streitu',
        textiLong: 'Hatha jóga, Mjúkt Jóga, Jóga Nidra, Kundalini jóga, Meðgöngujóga og Mömmujóga',
    },
    {
        mynd: 'images/inga.png',
        kennari: 'Inga Reynisdóttir',
        textiShort: 'Kundalinijóga og Jóga Nidra',
        textiLong: 'Hatha jóga, Mjúkt Jóga, Jóga Nidra, Kundalini jóga, Meðgöngujóga og Mömmujóga',
    },
    {
        mynd: 'images/maria.png',
        kennari: 'María Ásgeirsdóttir',
        textiShort: 'Mjúkt jóga og Jóga Nidra',
        textiLong: 'Hatha jóga, Mjúkt Jóga, Jóga Nidra, Kundalini jóga, Meðgöngujóga og Mömmujóga',
    },
    {
        mynd: 'images/thelma.png',
        kennari: 'Thelma',
        textiShort: 'Jóga fyrir 60+ og Kundalinijóga',
        textiLong: 'Hatha jóga, Mjúkt Jóga, Jóga Nidra, Kundalini jóga, Meðgöngujóga og Mömmujóga',
    },
    {
        mynd: 'images/gerda.png',
        kennari: 'Þorgerður Sveinsdóttir',
        textiShort: 'Mjúkt jóga, Hatha, Meðgöngujóga, Kundalini jóga og Jóga Nidra',
        textiLong: 'Hatha jóga, Mjúkt Jóga, Jóga Nidra, Kundalini jóga, Meðgöngujóga og Mömmujóga',
    },
    {
        mynd: 'images/torgunnur.png',
        kennari: 'Þórgunnur Ársælsdóttir',
        textiShort : 'Kundalinijóga og Jóga Nidra',
        textiLong: 'Hatha jóga, Mjúkt Jóga, Jóga Nidra, Kundalini jóga, Meðgöngujóga og Mömmujóga',
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