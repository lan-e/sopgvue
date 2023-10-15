<template>
  <div class="about container">
    <h1>SOPG Bakale</h1>
    <p>Osnovani 2017. godine. Od proizvoda nude med, lješnjak, propolis i prirodne sokove.</p>
    <p>Ako ti je previše teksta, preskoči ovaj dio i pogledaj video :)</p>
    <p>
    <div className="contact">
      <h2>Kontakt podaci</h2>
      <div>Hrvoje Bakale</div>
      <div>Donja Gaza 9, 47000 Karlovac</div>
      <div>OIB: 29302962674</div>
      <div>MIBPG: 246798</div>
    </div>
    <h3>Kako i zašto?</h3>
    Odluka o otvaranju SOPG Bakale nastala je u potrebi što boljeg iskorištenja zemlje u vlasništvu obitelji Bakale. Za
    prihod, ali prvotno za potrebe vlastite obitelji. Hrvoje je sadnju ljeske započeo već kao student pa je tako nasad
    star već 6 godina i donosi plodove. Tu je imao potporu obitelji. Zajednički su odradili pripremu tla - bušenje rupa,
    kupnju sadnica i samo sađenje.
    <h3>Problemi?</h3>
    U poljoprivredi su najveći problem vremenski uvjeti. Najveći problem je bio mraz, koji uništi sav trud i rad i ne
    dobije se nikakav proizvod. Pokušavaju te probleme smanjiti kako ne bi imali probleme u poslovanju, ali i razočarali
    kupce.
    Hrvatska proizvodi samo 30-40% količine lješnjaka, dok se ostalo uvozi. Upravo to je potaklo ovaj SOPG na uzgoj
    ove
    kulture. Ovaj proizvod ne mora ići na tržište odmah nakon branja, već postoje mogućnosti prerade.
    <h3>Budućnost?</h3>
    Cilj je u budućnosti od lješnjaka proizvoditi ulje, brašno i maslac te koru od lješnjaka pretvarati u energiju, tj.
    pelete za grijanje. Trenutno već imaju mašinu koja pretvara granje koje se obrezuje u biomasu. Tom biomasom suše se
    lješnjaci jer pelete koriste kao ogrijevnu vrijednost.
    </p>
    <iframe width="100%" height="250" src="https://www.youtube.com/embed/tdjl_5MiC2s" title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen></iframe>
  </div>
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue"

export default {
  components: { Footer }
}
</script>

<style>
.about {
  text-align: justify;
  margin: auto 24%;
}

@media screen and (max-width:768px) {
  .about {
    margin: auto 8%
  }
}
</style>