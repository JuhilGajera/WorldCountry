const currentcountrylength = document.getElementById("currentcountrylength");
currentcountrylength.innerText = `Currently, we have ${countries_data.length} countries`;

function getpopulations() {
  const maincontainerlowerdiv = document.getElementById(
    "maincontainerlowerdiv"
  );
  maincontainerlowerdiv.innerHTML = "";

  var totalpopulation = 0;
  countries_data.map((ele) => {
    totalpopulation += ele.population;
  });

  countries_data.sort(function (a, b) {
    return b.population - a.population;
  });
  maincontainerlowerdiv.innerHTML += `
        <div class="card" >
            <div class="namediv">${"world"}</div>
            <div class="graphdiv">
                <div class="graphdivcolor" style="width: ${100}%; height: 80%; background-color: #f2a93b;">
                </div>
            </div>
            <div class="totalpopulationsdiv">${totalpopulation}</div>
        </div>`;
  for (let i = 0; i < 10; i++) {
    var perecentage = (countries_data[i].population * 100) / totalpopulation;
    console.log(perecentage);
    maincontainerlowerdiv.innerHTML += `
        <div class="card" >
            <div class="namediv">${countries_data[i].name}</div>
            <div class="graphdiv">
                <div class="graphdivcolor" style="width: ${perecentage}%; height: 80%; background-color: #f2a93b;">
                </div>
            </div>
            <div class="totalpopulationsdiv">${countries_data[i].population}</div>
        </div>`;
  }
  const para = document.getElementById("para");
  para.innerText = "10 most populated countries in the world";
}

function getlanguage() {
  const maincontainerlowerdiv = document.getElementById(
    "maincontainerlowerdiv"
  );
  maincontainerlowerdiv.innerHTML = "";

  const arroflanguages = [];
  for (let i = 0; i < countries_data.length; i++) {
    arroflanguages[i] = countries_data[i].languages;
  }
  const flatarroflanguage = arroflanguages.flat();
  const objofflatarroflanguage = {};
  flatarroflanguage.map((ele) => {
    objofflatarroflanguage[ele] = (objofflatarroflanguage[ele] || 0) + 1;
  });
  
  const objArr = Object.entries(objofflatarroflanguage);
  objArr.sort(function (a, b) {
    return b[1] - a[1];
  });
  
  var totallanguage = 0;
  objArr.map((ele) => {
    totallanguage += ele[1];
  });

  for (let i = 0; i < 10; i++) {
    var perecentage = (objArr[i][1] * 100) / totallanguage;
    console.log(perecentage);
    maincontainerlowerdiv.innerHTML += `
        <div class="card" >
            <div class="namediv">${objArr[i][0]}</div>
            <div class="graphdiv">
                <div class="graphdivcolor" style="width: ${perecentage}%; height: 80%; background-color: #f2a93b;">
                </div>
            </div>
            <div class="totalpopulationsdiv">${objArr[i][1]}</div>
        </div>`;
  }
  const para = document.getElementById("paragraph");
  para.innerText = "10 most spoken languages in the world";
}
