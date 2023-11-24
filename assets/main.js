
fetch("data.json")
    .then(response => response.json())
    .then(data => {

        const createBar = document.getElementById("barArea");
        for (let a = 0; a < data.length; a++) {
            if (a == 2) {
                createBar.innerHTML +=
                    `<div class="bar-sam"><span class="perCent"></span> <div class="bar-go active"> </div><span class="dayName"></span></div>`;
            } else
                createBar.innerHTML +=
                    `<div class="bar-sam"><span class="perCent"></span> <div class="bar-go "> </div><span class="dayName"></span></div>`
        }

        let barHeight = document.getElementsByClassName("bar-go");
        let DayElement = document.getElementsByClassName("dayName"),
            perCentElement = document.getElementsByClassName("perCent")
        for (let i = 0; i < DayElement.length; i++) {
            DayElement[i].innerText = data[i].day;
            perCentElement[i].innerText = `$ ${data[i].amount}`;
            let heightGo = data[i].amount + "%";
            barHeight[i].style = `height: ${heightGo} !important`;
        }
    })
    .catch(error => alert("ErrorFetching the data: ", error));
