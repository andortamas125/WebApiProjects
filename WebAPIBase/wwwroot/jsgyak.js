window.onload = function () {
    console.log("Oldal betöltve...");

    for (var sor = 0; sor < 10; sor++) {

        /* document.getElementById("pascal").innerHTML = "<div class="sor"> </div>"*/
        //új div létrehozása az új sornak
        var újdiv = document.createElement("div");

        //új div osztálylistájához add hozzá a "sor"-t
        újdiv.classList.add("sor");

        //új div-et add hozzá a "pascal" gyermekeihez
        document.getElementById("pascal").appendChild(újdiv);


        for (oszlop = 0; oszlop <= sor; oszlop++) {
            var újdive = document.createElement("div");
            újdive.classList.add("elem");
            újdive.innerText = fakt(sor)/(fakt(oszlop)*fakt(sor-oszlop));
            újdiv.appendChild(újdive);
        }

    }
}

var fakt = (n) => {
    let eredmeny = 1
    for (let i = 2; i <= n; i++) {
        eredmeny = eredmeny * i;
    }
    return eredmeny;
}