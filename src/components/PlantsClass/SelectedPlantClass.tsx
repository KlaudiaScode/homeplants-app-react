import React from 'react';
import Nav from '../Nav';
import firstplant from '../../img/skrzydlokwiat.jpg';



export default function SelectedPlantClass(){
    return (
        <div className="App">
            <div className="houseplants">
                <Nav/>
                    <div className="advertisement">
                        <a href='#advertisement'><p>Miejsce na Twoją reklamę</p></a>
                    </div>
                    <div className='selected_plantclass'>
                        <div className='category_plant'>
                            <img src={firstplant}></img>
                            <div className='dataplant'>
                                <label className='polishName'>SKRZYDŁOKWIAT / SKRZYDŁOLIST</label>
                                <label className='latinName'>SPATHIPHYLLUM</label>
                                <form>
                                    <label>DEKORACYJNOŚĆ: kwiaty, ulistnienie</label>
                                    <label>GLEBA: żyzna, próchniczna, przepuszczalna</label>
                                    <label>KOLOR: KWIATÓW białe, kremowe</label>
                                    <label>KWIATY: pachnące, duże</label>
                                    <label>ODCZYN: GLEBY lekko kwaśna</label>
                                    <label>POKRÓJ: krzaczkowaty</label>
                                    <label>ZAPACH: kwiaty</label>
                                    <label>WYSOKOŚĆ: ok. 100 cm</label>
                                    <label>OKRES KWITNIENIA: II, III, IV, V, VI, VII, VIII, IX, X</label>
                                    <label>WILGOTNOŚĆ: gleba umiarkowanie wilgotna</label>
                                    <label>STANOWISKO: półcień</label>
                                </form>
                            </div>
                            <p>
                                <strong>Skrzydłokwiat</strong> (Spathiphyllum) nazywany też skrzydłolistem i lilią domową, należy do olbrzymiej rodziny 
                                obrazkowatych (Araceace). W warunkach Polskich jest długowieczną roślina doniczkową, a naturalnie występuje
                                w Ameryce Środkowej i Południowej.Ta roślina doniczkowa jest jedną z niewielu, które są dekoracyjne zarówno
                                ze swoich liści jak i kwiatów. Tworzy kępy długoogonkowych, dużych, lancetowatych, gładkich i błyszczących zielonych liści. 
                                Są one delikatne w dotyku.Skrzydłokwiat w odpowiednich warunkach skrzydłokwiat może kwitnąć cały rok. Jego pachnące kwiatostany 
                                mają formę kolby złożonej z gęsto rozmieszczonych kwiatów o "czubiastym" wyglądzie (kolba kwiatostanowa 
                                wygląda jakby była stworzona ze spiczastych wypustek). Jest ona otoczona ozdobną, białą pochwą kwiatostanową 
                                nazywaną spathe. Skrzydłokwiat to roślina trująca.Wymagania i uprawa
                                Skrzydłokwiat najlepiej rośnie w rozproszonym świetle lub półcieniu, w temperaturze pokojowej. Podłoże powinno być żyzne, próchnicze, przepuszczalne, umiarkowanie lub stale lekko wilgotne, o pH obojętnym (typowe dla domowych roślin zielonych). Skrzydłolist bardzo lubi wilgotne powietrze i ciepło. W zimie temperatura powinna wynosić około 16oC – przy większych spadkach może bardzo chorować, a nawet obumrzeć.
                                Roślinę należy systematycznie podlewać miękką wodą o temperaturze pokojowej. Od marca do sierpnia raz na dwa tygodnie nawozimy roślinę nawozem do roślin doniczkowych.
                                Skrzydłokwiat lubi mieć czyste liście, dlatego należy przecierać je z kurzu wilgotną ściereczką. Liście należy także spryskiwać wodą. Nie należy stosować preparatów nabłyszczających liście!Zastosowanie
                                Skrzydłokwiat stosowany jest jako roślina doniczkowa jednocześnie należąc do jednych z najlepszych kwiatów ciętych. Dobrze komponuje się z wieloma roślinami i długo utrzymuje się w wazonie. Z racji tego, że jest spokrewniony z roślinami takimi jak alokazja, anturium, scindapsus czy syngonium, bardzo dobrze wygląda jako jeden z elementów w Urban Jungle.
                                Roślina jest zaliczana do tzw. zielonych filtrów, czyli kwiatów oczyszczających powietrze zdrowych roślin do domu. Polecana jest m.in. w sypialniach, łazienkach i wszelkich pomieszczeeniach, w których nie ma dobrej cyrkulacji powietrza.
                            </p>
                        </div>
                        
                    </div>
            </div>
        </div>
    )
}