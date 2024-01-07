const sedan_btn = document.getElementById("sedan_btn");
const off_road_btn = document.getElementById("off_road_btn");
const van_btn = document.getElementById("van_btn");
const main_container = document.querySelector(".main-container");


sedan_btn.addEventListener("click",()=> {
    loadFromServer("Sedan")
});

off_road_btn.addEventListener("click",()=> {
    loadFromServer("Off-road")
});

van_btn.addEventListener("click",()=> {
    loadFromServer("Van")
});

let cars = [];

function loadFromServer(car_type){

    main_container.innerHTML = "";

    const get_request = new XMLHttpRequest();
    get_request.open("GET","http://localhost:3000/cars");
    get_request.onload = () =>{
        cars = JSON.parse(get_request.responseText);
        for(let i = 0; i < cars.length; i++){
            if(cars[i].car_category == car_type){
                const inner_container = document.createElement("div");
                inner_container.className = "inner-container";
                inner_container.style.backgroundImage = `url(${cars[i].image_url})`;

                const div = document.createElement("div");
                const h2 = document.createElement("h2");
                h2.innerText = cars[i].car_make;

                const h3 = document.createElement("h3");
                h3.innerText = cars[i].car_model;

                const p = document.createElement("p");
                p.innerText = "Price: " + cars[i].car_price + "$";

                div.appendChild(h2);
                div.appendChild(h3);
                div.appendChild(p);
                inner_container.appendChild(div);
                main_container.appendChild(inner_container);
            }
        }
    }
    get_request.send();
}