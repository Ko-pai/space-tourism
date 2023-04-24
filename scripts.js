    
    const textContainer = document.querySelector(".headerUL")
    const main = document.querySelector("body")
    const good = document.querySelector(".second-container")
    const good1 = document.querySelector(".third-container")
    const good2 = document.querySelector(".fourth-container")
    const good3 = document.querySelector(".fifth-container")
    const circle = document.querySelector(".circle")
    

    
    //content creation 
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

    //background image 
    const bgImage = [
        {size : 550 , url : `url("assets/home/background-home-mobile.jpg")`},
        {size : 1400 , url : `url("assets/home/background-home-desktop.jpg")`}

    ]

    //list of headerRight
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
    
    //this loop is headerRight list loop   and  background image and content changing
    for(let i = 0 ; i < list.length ; i++){
        const liTag = document.createElement("li")
        const link = document.createElement("a")
        const spanTag = document.createElement("span")
        const slider = document.querySelector(".slider")
        
        
        
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
            
            if(atag.id == 1){
                main.style.background = `url("assets/destination/background-destination-desktop.jpg")`
                main.style.backgroundSize = "cover"
                    destinationAppear()
                    
                }else if(atag.id == 0){
                    myfunc1()
                    homeAppear()
                    good.innerHTML = homeAddContent
                    
                }else if(atag.id == 2){
                    crewAppear()
                    main.style.background = `url("assets/crew/background-crew-desktop.jpg")`
                    main.style.backgroundSize = "cover"
                    good.innerHTML =''
                    

                }else{
                    technoAppear()
                    main.style.background = `url("assets/technology/background-technology-desktop.jpg")`
                    main.style.backgroundSize = "cover"
                    
                }
        })

        
        
    }   
    
    
    //this variable is for Destination */
    const universeList = ["MOON","MARS","EUROPA","TITAN"]
    const destinationUL = document.querySelector(".destinationUL")
    const destinationSlider = document.querySelector(".universeListSlider")
    const UNIVERSE_IMAGE = document.querySelector(".universePhoto")
    const universeName = document.querySelector(".universeName")
    const universeText = document.querySelector(".universeText")
    const avgDistance = document.querySelector(".distanceNumber")
    const travelTime = document.querySelector(".travelTimeNumber")
    const url = "./data.json"
    
    //this variable is for CREW
    const crewslider = document.querySelector(".crewSliderCircle")
    const hoverCircle = document.querySelector(".hoverCircle")
    const crewPosition = document.querySelector(".crewPosition")
    const crewName = document.querySelector(".crewName")
    const crewBio = document.querySelector(".crewBio")
    const crewImage = document.querySelector(".crewImage")

    takeData()
    async function takeData(){
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.destinations);


        //This loop is universe or destination content
        for(let i = 0 ; i < universeList.length ; i++){
        const listTagOfDestination = document.createElement("li")
        listTagOfDestination.append(universeList[i])
        listTagOfDestination.id = i
        destinationUL.append(listTagOfDestination)
        let width = listTagOfDestination.offsetWidth
        
        if(i == 0){
            destinationSlider.style.width = width + "px"
            UNIVERSE_IMAGE.src = `${data.destinations[0].images.webp}`
            universeName.textContent = `${data.destinations[0].name}`
            universeText.textContent = `${data.destinations[0].description}`
            avgDistance.textContent = `${data.destinations[0].distance}`
            travelTime.textContent = `${data.destinations[0].travel}`
        }

            listTagOfDestination.addEventListener("click",(e)=>{
                console.log(e.target.offsetLeft);
                let moveLeft = e.target.offsetLeft
                let listWidth = e.target.offsetWidth
                
                destinationSlider.style.width = listWidth + "px"
                destinationSlider.style.transform = `translateX(${moveLeft}px)`
                if(listTagOfDestination.id == 1){
                    UNIVERSE_IMAGE.src = `${data.destinations[1].images.webp}`
                    UNIVERSE_IMAGE.classList.add("rotateImage")
                    UNIVERSE_IMAGE.alt = "Mars"
                    universeName.textContent = `${data.destinations[1].name}`
                    universeText.textContent = `${data.destinations[1].description}`
                    avgDistance.textContent = `${data.destinations[1].distance}`
                    travelTime.textContent = `${data.destinations[1].travel}`
                    
                }else if(listTagOfDestination.id == 2){
                    UNIVERSE_IMAGE.src = `${data.destinations[2].images.webp}`
                    if(UNIVERSE_IMAGE.classList.contains("rotateImage")){
                        UNIVERSE_IMAGE.classList.remove("rotateImage")
                    }else{
                        UNIVERSE_IMAGE.classList.add("rotateImage")
                    }
                    UNIVERSE_IMAGE.alt = "Europa"
                    universeName.textContent = `${data.destinations[2].name}`
                    universeText.textContent = `${data.destinations[2].description}`
                    avgDistance.textContent = `${data.destinations[2].distance}`
                    travelTime.textContent = `${data.destinations[2].travel}`

                }else if(listTagOfDestination.id == 0){
                    if(UNIVERSE_IMAGE.classList.contains("rotateImage")){
                        UNIVERSE_IMAGE.classList.remove("rotateImage")
                    }else{
                        UNIVERSE_IMAGE.classList.add("rotateImage")
                    }
                    UNIVERSE_IMAGE.alt = "Moon"
                    universeName.textContent = `${data.destinations[0].name}`
                    universeText.textContent = `${data.destinations[0].description}`
                    UNIVERSE_IMAGE.src = `${data.destinations[0].images.png}`
                }else{
                    UNIVERSE_IMAGE.src = `${data.destinations[3].images.webp}`
                    if(UNIVERSE_IMAGE.classList.contains("rotateImage")){
                        UNIVERSE_IMAGE.classList.remove("rotateImage")
                    }else{
                        UNIVERSE_IMAGE.classList.add("rotateImage")
                    }
                    UNIVERSE_IMAGE.alt = "Titan"
                    universeName.textContent = `${data.destinations[3].name}`
                    universeText.textContent = `${data.destinations[3].description}`
                    avgDistance.textContent = `${data.destinations[3].distance}`
                    travelTime.textContent = `${data.destinations[3].travel}`
                }
            })

    }



    //this loop is CREW content
    for(let i = 0 ; i < 4 ; i++){
            const circleLi =  document.createElement("li")
            circleLi.id = i
            crewslider.append(circleLi)
            let crewData0 = data.crew[0]
            let crewData1 = data.crew[1]
            let crewData2 = data.crew[2]
            let crewData3= data.crew[3]

            if( i == 0 ){
                hoverCircle.style.width = circleLi.offsetWidth + "px"
                crewPosition.textContent = `${crewData0.role}`
                crewName.textContent = `${crewData0.name}`
                crewBio.textContent =`${crewData0.bio}`
                crewImage.src = `${crewData0.images.webp}`
                
            }
        circleLi.addEventListener("click",(e)=>{
            const active = e.target.id
            const width = e.target.offsetWidth
            const goLeft = e.target.offsetLeft
            
            console.log(e);

            hoverCircle.style.width = width + "px"
            hoverCircle.style.transform = `translateX(${goLeft}px)`
            
             
            if(active == 0){
                crewPosition.textContent = `${crewData0.role}`
                crewName.textContent = `${crewData0.name}`
                crewBio.textContent =`${crewData0.bio}`
                crewImage.src = `${crewData0.images.webp}`
                crewImage.style.width = "80%"
                
            }else if(active == 1) {
                
                crewPosition.textContent = `${crewData1.role}`
                crewName.textContent = `${crewData1.name}`
                crewBio.textContent =`${crewData1.bio}`
                crewImage.src = `${crewData1.images.webp}`
                crewImage.style.width = "80%"
            }else if(active == 2) {
                crewPosition.textContent = `${crewData2.role}`
                crewName.textContent = `${crewData2.name}`
                crewBio.textContent =`${crewData2.bio}`
                crewImage.src = `${crewData2.images.webp}`
                crewImage.style.width = "80%"
            }else if(active == 3) {
                crewPosition.textContent = `${crewData3.role}`
                crewName.textContent = `${crewData3.name}`
                crewBio.textContent =`${crewData3.bio}`
                crewImage.src = `${crewData3.images.webp}`
                crewImage.style.width = "90%"
                
            }

        })
        }
    }



   


    

    // Appear function for  home,destination,crew,technology
    function homeAppear (){
        good1.style.display = "none"
        good2.style.display = "none"
        good3.style.display = "none"
        good.style.display = "flex"

    }


    function destinationAppear (){
        good.style.display = "none"
        good2.style.display = "none"
        good3.style.display = "none"
        good1.style.display = "flex"
        
    }
    function crewAppear (){
        good1.style.display = "none"
        good.style.display = "none"
        good3.style.display = "none"
        good2.style.display = "flex"
        
    }


    function technoAppear (){
        good1.style.display = "none"
        good2.style.display = "none"
        good.style.display = "none"
        good3.style.display = "flex"
    }
    