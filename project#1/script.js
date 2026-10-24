const rect = document.querySelector(".center");

const rectWidth = rect.offsetWidth;
const halfRect = rectWidth/2;
const bodyy = document.body;

// document.body.style.backgroundColor = "white";

rect.addEventListener("mouseleave", function(){
    rect.style.backgroundColor = " white";
})

rect.addEventListener("mousemove", function(e){
    console.log("hey");

    if(e.offsetX < halfRect){

        // Find the percentage/ratio of how far the mouse is from the center (0 at left edge, 1 at center)
        const intensity = e.offsetX / halfRect;
        // Scale 255 down based on that ratio
        const colorValue = intensity * 255;
        rect.style.backgroundColor = `rgb(255, ${colorValue}, ${colorValue})`;
        
    }else if(e.offsetX > halfRect){
        // rect.style.backgroundColor = "blue";
        const right = (rectWidth- e.offsetX)/halfRect;
        const colorValue = right * 255;
        rect.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, 255)`;

    }    

})


