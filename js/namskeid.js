var cards = document.getElementById('card')

var namskeid = [
    {
        tegund: 'OPID',
        mynd: 'images/kundalinijoga.png',
        heiti: 'KUNDALINIJÓGA',
        texti: 'Kundalini jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og ...',
        takki1: 'SKOÐA',
        takki2: 'SKRÁ'
    },
    {
        tegund: 'LOKAÐ',
        mynd: 'images/kundalinijoga.png',
        heiti: 'MEÐGÖNGUJÓGA',
        texti: 'í Meðgöngujóga leggjum við áherslu á  öndun,  teygjur,  styrkjandi æfingar  og slökun. Djúp öndun og slökun er ...',
        takki1: 'SKOÐA',
        takki2: 'SKRÁ'
    },
    {
        tegund: 'LOKAÐ',
        mynd: 'images/kundalinijoga.png',
        heiti: 'HATHAJÓGA',
        texti: 'HATHA er ein þekktasta tegund jóga á vesturlöndunum. HA þýðir sól og THA þýðir máni. Unnið er með ...',
        takki1: 'SKOÐA',
        takki2: 'SKRÁ'
    },
    {
        tegund: 'LOKAÐ',
        mynd: 'images/kundalinijoga.png',
        heiti: 'KARLAJÓGA',
        texti: 'Jóga fyrir karla – líka stirða og stressaða! Mjúkar teygjur, öndun. styrking og slökun í lok tímans.',
        takki1: 'SKOÐA',
        takki2: 'SKRÁ'
    },
    {
        tegund: 'LOKAÐ',
        mynd: 'images/kundalinijoga.png',
        heiti: 'KRAKKAJÓGA',
        texti: 'Áherslan í krakkajóga er leikur og gleði. Börnin læra ýmsar jógastöður og æfingar sem styrkja jafnvægi ...',
        takki1: 'SKOÐA',
        takki2: 'SKRÁ'
    },
    {
        tegund: 'OPID',
        mynd: 'images/kundalinijoga.png',
        heiti: 'JÓGA NIDRA',
        texti: 'Nidra þýðir svefn, en ólíkt svefni er Jóga Nidra meðvituð, djúp slökun, mætti líka kalla liggjandi hugleiðslu.',
        takki1: 'SKOÐA',
        takki2: 'SKRÁ'
    },
    {
        tegund: 'OPID',
        mynd: 'images/kundalinijoga.png',
        heiti: 'MJÚKT JÓGA',
        texti: 'Jóga er fyrir þig, þar sem þú ert stödd/staddur hverju sinni! Setjum heilsuna okkar í forgangsröð. ...',
        takki1: 'SKOÐA',
        takki2: 'SKRÁ'
    },
    {
        tegund: 'LOKAÐ',
        mynd: 'images/kundalinijoga.png',
        heiti: 'PARAJÓGA',
        texti: 'Við njótum þess að gera jóga saman. Gerðar verða jógaæfingar og stöður í sameiningu. Lykilatriðið er ...',
        takki1: 'SKOÐA',
        takki2: 'SKRÁ'
    },
    {
        tegund: 'LOKAÐ',
        mynd: 'images/kundalinijoga.png',
        heiti: 'JÓGA 60+',
        texti: 'Nærandi jógatímar á stólum og gólfi þar sem boðið er upp á rólegar æfingar eftir getu hvers og eins. ...',
        takki1: 'SKOÐA',
        takki2: 'SKRÁ'
    },
    {
        tegund: 'LOKAÐ',
        mynd: 'images/kundalinijoga.png',
        heiti: 'NÚVITUND',
        texti: 'Núvitund (mindfulness) er náttúrulegur eiginleiki hugans til að vera meðvitaður hér og nú ...',
        takki1: 'SKOÐA',
        takki2: 'SKRÁ'
    },
    {
        tegund: 'OPID',
        mynd: 'images/kundalinijoga.png',
        heiti: 'KUNDALINIJOGA',
        texti: 'Kundalini jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og ...',
        takki1: 'SKOÐA',
        takki2: 'SKRÁ'
    },
    {
        tegund: 'LOKAÐ',
        mynd: 'images/kundalinijoga.png',
        heiti: 'JÓGA OG 12 SPORIN',
        texti: 'Markmiðið er að vinna með sjálfsstyrkingu og gjafir 12 sporanna með nálgun jóga og hugleiðslu. ...',
        takki1: 'SKOÐA',
        takki2: 'SKRÁ'
    },
    {
        tegund: 'OPID',
        mynd: 'images/kundalinijoga.png',
        heiti: 'SADHANA',
        texti: 'Í Sadhana ögum við huga og líkama til að hlúa að og þjóna sálinni. Að sigra daginn og sigra okkur sjálf, ...',
        takki1: 'SKOÐA',
        takki2: 'SKRÁ'
    },
    {
        tegund: 'LOKAÐ',
        mynd: 'images/kundalinijoga.png',
        heiti: 'KUNDALINI GRUNNUR',
        texti: 'Farið er í undirstöðuatriði í Kundalini jóga. Kenndar eru líkamsstöður, líkamsbeiting, möntrur og ...',
        takki1: 'SKOÐA',
        takki2: 'SKRÁ'
    }
];

cards.innerHTML += `
<ddiv class="card" id="card">
    <p class="opid">${namskeid[i].tegund}</p>
    <img src="${namskeid[i].mynd}"/>
    <div class="card-text-holder">
        <h3>${namskeid[i].heiti}</h3>
        <p>${namskeid[i].texti}</p>
        <div class="btn-holder">
            <a href="#" id="kundalinijóga" alt="skoða kundalinijóga">${namskeid[i].takki1}</a>
            <button class="skra" onclick="alert('Hello world!')">${namskeid[i].takki2}</button>
        </div>
    </div>
</div>
`
//TESTING TESTING-----------------------------------
{
    category: 'UNDIRLAG',
    name: 'ANDBLÆR',
    price: 24.995 ,
    img: 'https://www.cintamani.is/beta/wp-content/uploads/2018/02/andblaer_cmml16-4300_344-volcanic-black_f-609x718.png',
    inStock: false,
    sizes: ['S', 'M', 'L']
  },

container.innerHTML += `
<div class="cards">
  <img src="${fot[i].img}">
  <h3>${fot[i].category}</h3>
  <h1>${fot[i].name}</h1>
  <h2>${sizes}</h2>
  <h2>${fot[i].price} ${store.currency}</h2>
  <h3>${inStock}</h3>
</div>
`
//TESTING TESTING-----------------------------------

var cardsKennarar = document.getElementById('cardKennari')

var kennarar = [
    {
        mynd: 'images/audur.png',
        kennari: 'Auður Bjarnadóttir',
        texti: 'Kundalini jóga, Meðgöngujóga, Mömmujóga, Hatha jóga og Jóga Nidra',
    },
    {
        mynd: 'images/arna_rin.png',
        kennari: 'Arna Rín',
        texti: 'Hatha jóga, Mjúkt Jóga, Jóga Nidra, Kundalini jóga, Meðgöngujóga og Mömmujóga',
    },
    {
        mynd: 'images/alfrun_helga.png',
        kennari: 'Álfrún Helga Örnólfsdóttir',
        texti: 'Krakkajóga 8 - 11 ára og 12 - 14 ára',
    },
    {
        mynd: 'images/birgir.png',
        kennari: 'Birgir Þorsteinn Jóakimsson',
        texti: 'Karlajóga',
    },
    {
        mynd: 'images/edda.png',
        kennari: 'Edda Jónsdóttir',
        texti: 'Kundalinijóga',
    },
    {
        mynd: 'images/edith.png',
        kennari: 'Edith Gunnarsdóttir',
        texti: 'Kundalinijóga',
    },
    {
        mynd: 'images/estrid.png',
        kennari: 'Estrid Þorvaldsdóttir',
        texti: 'Kundalini jóga,  Orkustöðvanámskeið og einkatímar í orkustöðvarlestri',
    },
    {
        mynd: 'images/gudbjorg_arnard.png',
        kennari: 'Guðbjörg Arnardóttir',
        texti: 'Krakkajóga 3 - 4 ára og 5 - 7 ára',
    },
    {
        mynd: 'images/gunnar_asgeirs.png',
        kennari: 'Gunnar Ásgeirsson',
        texti: 'Kundalinijóga',
    },
    {
        mynd: 'images/gunnar_fridriksson.png',
        kennari: 'Gunnar Friðriksson',
        texti: 'Núvitund gegn streitu',
    },
    {
        mynd: 'images/inga.png',
        kennari: 'Inga Reynisdóttir',
        texti: 'Kundalinijóga og Jóga Nidra',
    },
    {
        mynd: 'images/maria.png',
        kennari: 'María Ásgeirsdóttir',
        texti: 'Mjúkt jóga og Jóga Nidra',
    },
    {
        mynd: 'images/thelma.png',
        kennari: 'Thelma',
        texti: 'Jóga fyrir 60+ og Kundalinijóga',
    },
    {
        mynd: 'images/gerda.png',
        kennari: 'Þorgerður Sveinsdóttir',
        texti: 'Mjúkt jóga, Hatha, Meðgöngujóga, Kundalini jóga og Jóga Nidra',
    },
    {
        mynd: 'images/torgunnur.png',
        kennari: 'Þórgunnur Ársælsdóttir',
        texti: 'Kundalinijóga og Jóga Nidra',
    }
];

cardsKennarar.innerHTML += `
    <div class="card-kennari" id="cardKennari">
        <mg src="${kennarar[i].mynd}"/>
        <div class="card-kennari-text-holder">
            <h5>${kennarar[i].kennari}</h5>
            <p>${kennarar[i].texti}</p>
        </div>
    </div>
`