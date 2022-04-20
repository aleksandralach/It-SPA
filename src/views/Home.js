export function Home() {
    const section = document.createElement('section');
    const img = document.createElement('img');
    img.src = require('../assets/spa1.jpeg');
    img.style.width = '90vw';

    section.innerHTML = `
        <h2>Home</h2>
        <p>Witaj w IT SPA & Wellness. Każdy programista lubi u nas odpoczywać. Poczuj magię miejsca idealnego do odpoczynku w centrum miasta. Odkrywaj stylowe, butikowe pokoje oraz atrakcje skoncentrowane na doświadczaniu relaksu w hotelowym SPA z basenem z widokiem na pałac kultury. Nasze profesjonalne centrum spa i wellness oferuje bogatą gamę zabiegów relaksacyjnych, regeneracyjnych i odmładzających.</p>
    `;

    section.append(img);

    return section;
}
