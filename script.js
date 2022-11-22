let select = document.querySelector("#select_rovers")
let selectCameras = document.querySelector("#select_cameras")
let input = document.querySelector("#input_sol")
let searchButton = document.querySelector("#btn")


;(async() => {
    let response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/?&api_key=9YAmT545pMTnfCAtpF7daBTLAax7GebgtATViczx')
    let data = await response.json();
        for(let rover of data.rovers){
            select.innerHTML += `<option value="${rover.name}">${rover.name}</option>`
        }
        drawComponents(data.rovers[0].id)
        // console.log(data)
    return data;

})();

async function drawComponents(optionId){
    let response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/?&api_key=9YAmT545pMTnfCAtpF7daBTLAax7GebgtATViczx')
    let data = await response.json();

    selectCameras.innerHTML = "";

    for(let rover of data.rovers){
        for(let camera of rover.cameras){
            if(optionId === camera.rover_id){
                selectCameras.innerHTML += `<option value="${camera.name}">${camera.name}</option>`
            }
        }
    }
}

select.addEventListener("change", () => {
    drawComponents(+select.value);
})

searchButton.addEventListener("click", async function() {

    let divResult = document.querySelector("#result")


    let photoResponse = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${select.value.toLowerCase()}/photos?sol=${+input.value}&camera=${selectCameras.value.toLowerCase()}&api_key=9YAmT545pMTnfCAtpF7daBTLAax7GebgtATViczx`)
    let photoData = await photoResponse.json();    
    for(let photo of photoData.photos){
        divResult.innerHTML += `<img src="${photo.img_src}" style="width: 300px; height: 300px">`;
    }

})




