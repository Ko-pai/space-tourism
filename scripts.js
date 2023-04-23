const textContainer = document.querySelector("ul")
const main = document.querySelector("body")
const homeAddContent = `
<div class="homePageLeftSize">
                <div class="innerLeft">
                    <p class="pText0">SO, YOU WANT TO TRAVEL TO</p>
                    <h1>SPACE</h1>
                    <p class="pText">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
            </div>
            <div class="homePageRightSize">
                <div class="circle">EXPLORE</div>
            </div>
`
const destinationAddContent = `
<div class="homePageLeftSize">
                <div class="innerLeft">
                    <p class="pText0">SO, YOU WANT TO TRAVEL TO</p>
                    <h1>Destina</h1>
                    <p class="pText">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
            </div>
            <div class="homePageRightSize">
                <div class="circle">EXPLORE</div>
            </div>
`

const bgImage = [
    {size : 550 , url : `url("assets/home/background-home-mobile.jpg")`},
    {size : 1400 , url : `url("assets/home/background-home-desktop.jpg")`}

]
const list = [
    {
        num: "00",
        name : "HOME"
    },
    {
        num: "01",
        name : "DESTINATION"
    },
    {
        num: "02",
        name : "CREW"
    },
    {
        num: "03",
        name : "TECHNOLOGY"
    },
]

for(let i = 0 ; i < list.length ; i++){
    const liTag = document.createElement("li")
    const link = document.createElement("a")
    const spanTag = document.createElement("span")
    const slider = document.querySelector(".slider")
    const good = document.querySelector(".second-container")
    
    
    link.id = i
    spanTag.append(list[i].num)
    link.append(spanTag)
    link.append(list[i].name)
    liTag.append(link)
    textContainer.append(liTag)
    
    function myfunc (){
        const screenWidth = window.innerWidth

        const backImg = bgImage.find(image => image.size <= screenWidth)
        const takeImg = bgImage.find(image => image.size > screenWidth)
        
            main.style.background = backImg.url
            main.style.backgroundSize = "cover"
       
    }
    function myfunc1 (){
        if(window.innerWidth < 550){
            main.style.background = `url("assets/home/background-home-mobile.jpg")`
            main.style.backgroundSize = "cover"
            console.log(window.innerWidth);
        }else{
            main.style.background = `url("assets/home/background-home-desktop.jpg")`
            main.style.backgroundSize = "cover"
        }
    }


    function callWindow (){
        window.addEventListener("load",myfunc1)
        window.addEventListener("resize",myfunc1)
    }
    callWindow()


    if(i == 0){
        slider.style.width = liTag.offsetWidth + "px"
        good.style.backgroundColor = "transparent"
        good.innerHTML = homeAddContent
       callWindow()
    }
    liTag.addEventListener("click",(e)=>{
            let leftMove = e.target.offsetLeft
            let width = e.target.offsetWidth
            let idNum = e.target.id
            let atag = document.getElementById(idNum)
            console.log(atag);
            slider.style.width = width + "px"
            slider.style.transform = `translateX(${leftMove}px)`
        
           if(liTag.id == 1){
                
                main.style.background = `url("assets/destination/background-destination-desktop.jpg")`
                main.style.backgroundSize = "cover"
                good.innerHTML =''
            }else if(liTag.id == 0){
                myfunc1()
                good.innerHTML = homeAddContent
                
            }else if(liTag.id == 2){
                main.style.background = `url("assets/crew/background-crew-desktop.jpg")`
                main.style.backgroundSize = "cover"
                good.innerHTML =''
                

            }else{
                
                main.style.background = `url("assets/technology/background-technology-desktop.jpg")`
                main.style.backgroundSize = "cover"
                good.innerHTML =''
            }
    })

    
    
}   

