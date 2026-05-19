const agaclar = [
    {
        ad: 'Ejder Ağacı (<span class="bilimsel">Dracaena marginata</span>)',
        bilgi: "3-5 yaş aralığındadır.Kılıç şeklinde, ince, uzun ve genellikle kenarları kırmızı/mor şeritli yaprakları vardır.İnce ve esnek bir gövdeye sahiptir. Bitki büyüdükçe alt yapraklar dökülür ve gövde odunsu bir hal alır.NASA'nın temiz hava çalışmasına göre, formaldehit ve benzen gibi iç mekan hava kirleticilerini temizleme özelliğiyle bilinir.Doğrudan güneş ışığı yerine aydınlık ama dolaylı ışığı sever. Az suyla yetinebilen, dayanıklı bir bitkidir.",
        resim: "images/agac9.jpg"
    },
];

function getId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id")) || 1;
}

function agaciGoster(id) {
    const agac = agaclar[id - 1];
    document.getElementById("agacAdi").innerHTML = agac.ad;
    document.getElementById("agacBilgi").innerText = agac.bilgi;
    document.getElementById("agacResim").src = agac.resim;
}

function sonrakiAgac() {
    let id = getId();
    id++;
    if (id > agaclar.length) id = 1;
    window.location.search = "?id=" + id;
}

agaciGoster(getId());