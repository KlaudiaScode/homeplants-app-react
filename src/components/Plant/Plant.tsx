import Nav from "../Nav";
import plant from '../../img/plant.jpg';

export default function Plant (){
    return (
        <div className="App">
            <div className="houseplants">
                <div className="plant_Id">
                    <Nav/>
                    <div className="basic_data">
                        <img src={plant} alt="selected plant" />
                        <label>Chlorophytum laxum 'Ocean's Zielistka czubiasta</label>
                        <div className="category_bar">
                        <button>Opis rośliny</button>
                        <button>Plan opieki</button>
                        <button>Notatka</button>
                        <button>Przebieg wzrostu</button>
                        <button>Galeria rośliny</button>
                    </div>
                    </div>
                    <div className="category_window">
                        <p>Chlorophytum comosum Ocean to zwarta roślina zwana pająkiem, przypominająca trochę Variegatum, z kremowymi brzegami i zielonym środkiem. Jest to atrakcyjna, kaskadowa roślina o małych białych kwiatkach i „maluchach” tworzących na długich, wąskich łodygach zwanych rozłogami. Idealna jako roślina wisząca. Ich różnorodne liście i wdzięczny, przypominający fontannę pokrój dodają pięknego kontrastu i tekstury w połączeniu z innymi roślinami domowymi.
                            Roślina ma 30 cm wysokości z doniczką oraz 50 cm szerokości. Średnica doniczki: 12 cm
                            Pochodzenie: Afryka Południowa
                            Docelowa wysokość: do 30 cm, tempo wzrostu szybkie
                            Temperatura: idealna temperatura w miesiącach ciepłych w granicach 20-28ºC. Zimą zniesie temperatury do 8ºC.
                            Stanowisko: jasne, pośrednie światło. Będzie tolerować trochę cienia; jednakże spowolni to jej tempo wzrostu i może stracić swoje ciekawie ozdobne pręgi. Unikaj bezpośredniego światła słonecznego
                            Pielęgnacja: podlewać dokładnie starając się, uzyskać lekko wilgotną glebę przez cały sezon wegetacyjny. Zimą potrzebuje mniej wody. Nawozić co dwa tygodnie w okresie wegetacyjnym
                            Wilgotność: umiarkowana wilgotność. Roślina ta będzie się dobrze zachowywała przy normalnej wilgotności w domu (50 – 60%)
                            Gleba: dobrze przepuszczalna, lekka, piaszczysta, z dodatkiem żwirku gruboziarnistego
                            Przyjazność dla zwierząt: TAK
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
