    
    const textContainer = document.querySelector(".headerUL")
    const main = document.querySelector("body")
    const good = document.querySelector(".second-container")
    const good1 = document.querySelector(".third-container")
    const good2 = document.querySelector(".fourth-container")
    const good3 = document.querySelector(".fifth-container")
    
    

    
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
        {size : 550 , url : `url(./assets/home/background-home-mobile.jpg)`},
        {size : 1400 , url : `url(./assets/home/background-home-desktop.jpg)`}

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
                main.style.backgroundImage = `url(./assets/home/background-home-mobile.jpg)`
                main.style.backgroundSize = "cover"
                main.style.backgroundPosition = "center"
                good.style.marginLeft = "0px"
                console.log(window.innerWidth);
            }else{
                main.style.backgroundImage = `url(./assets/home/background-home-desktop.jpg)`
                main.style.backgroundSize = "cover"
                main.style.backgroundPosition = "center"
            }
        }
        function destifunc(){
            if(window.innerWidth < 550){
                main.style.backgroundImage = `url(./assets/destination/background-destination-desktop.jpg)`
                main.style.backgroundSize = "cover"
                good.style.marginLeft = "-90vw"
                console.log("Desti func is running");
            }else{
                main.style.backgroundImage = `url(./assets/destination/background-destination-desktop.jpg)`
                main.style.backgroundSize = "cover"
                good.style.marginLeft = "-100vw"
                console.log("Desti func is running as desktop");
            }
        }


        function callWindow (){
            window.addEventListener("load",myfunc1)
            window.addEventListener("resize",myfunc1)
        }
        function callWindow1 (){
            window.addEventListener("load",destifunc)
            window.addEventListener("resize",destifunc)
        }

        callWindow()
        

        if(i == 0){
            slider.style.width = liTag.offsetWidth + "px"
            good.style.backgroundColor = "transparent"
            good.innerHTML = homeAddContent
            
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
                destifunc()
                destinationAppear()
                
                
                    
                }else if(atag.id == 0){
                    good.innerHTML = homeAddContent
                    myfunc1()
                    homeAppear()
                    callWindow()
                    console.log("id is 0");
                }else if(atag.id == 2){
                    main.style.backgroundImage = `url(./assets/crew/background-crew-desktop.jpg)`
                    main.style.backgroundSize = "cover"
                    crewAppear()
                }else{
                    technoAppear()
                    main.style.backgroundImage = `url(./assets/technology/background-technology-desktop.jpg)`
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

    //this variable is for Technology
    const NUMBER_ARRAY =["1","2","3"]
    const TEXT_NUMBER = ["one","two","three"]
    const techonologyList = document.querySelector(".technoList") 
    const optionToLaunch = document.querySelector('.option')
    const launchText = document.querySelector(".launchText")
    const changeImageForTechno = document.querySelector(".changeTechnoImage")


    // This ASYNC Function is for fetch data from data.json and add content of destination,crew,trechnology
    takeData()
    async function takeData(){
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.destinations);


        //This loop for universe or destination content
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
                    universeName.style.fontSize = "75px"
                    
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
                    universeName.style.fontSize = "60px"

                }else if(listTagOfDestination.id == 0){
                    if(UNIVERSE_IMAGE.classList.contains("rotateImage")){
                        UNIVERSE_IMAGE.classList.remove("rotateImage")
                    }else{
                        UNIVERSE_IMAGE.classList.add("rotateImage")
                    }
                    UNIVERSE_IMAGE.alt = "Moon"
                    universeName.textContent = `${data.destinations[0].name}`
                    universeText.textContent = `${data.destinations[0].description}`
						  avgDistance.textContent = `${data.destinations[0].distance}`
                    travelTime.textContent = `${data.destinations[0].travel}`
                    UNIVERSE_IMAGE.src = `${data.destinations[0].images.png}`
                    universeName.style.fontSize = "75px"
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
                    universeName.style.fontSize = "75px"
                }
            })

    }



    //this loop for CREW content
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


    // This loops for Technology
        for (let i = 0; i < NUMBER_ARRAY.length; i++) {
            const createList = document.createElement("li")
            const element = NUMBER_ARRAY[i];
            const technoData0 =data.technology[0]
            const technoData1 =data.technology[1]
            const technoData2 =data.technology[2]

            createList.id = i
            createList.append(element)
            techonologyList.append(createList)

            createList.classList.add(`${TEXT_NUMBER[i]}`)

            if(i == 0){
                optionToLaunch.textContent = `${technoData0.name}`
                changeImageForTechno.src = `${technoData0.images.portrait}`
                launchText.textContent =`${technoData0.description}`
                createList.classList.add("active")
            }
            
            createList.addEventListener("click",(e)=>{

            
                if(e.target.id == 0){
                    optionToLaunch.textContent = `${technoData0.name}`
                    changeImageForTechno.src = `${technoData0.images.portrait}`
                    launchText.textContent =`${technoData0.description}`
                    createList.classList.add("active")
                    twoRemove()
                    threeRemove()
                    

                }else if(e.target.id == 1){
                    optionToLaunch.textContent = `${technoData1.name}`
                    changeImageForTechno.src = `${technoData1.images.portrait}`
                    launchText.textContent =`${technoData1.description}`
                    createList.classList.add("active")
                    oneRemove()
                    
                    threeRemove()

                }else if(e.target.id == 2){
                    optionToLaunch.textContent = `${technoData2.name}`
                    changeImageForTechno.src = `${technoData2.images.portrait}`
                    launchText.textContent =`${technoData2.description}`
                    createList.classList.add("active")
                    twoRemove()
                    oneRemove()
                }


            })
        }
    }


    const hamburger = document.querySelector(".hamburger")
    
    hamburger.addEventListener("click",()=>{
        main.style.backgroundImage = `url("./assets/destination/background-destination-mobile.jpg")`
        main.style.backgroundSize ="cover"
        main.style.backgroundPosition = "center"

        good.style.marginLeft = "-500px"
    
    })

const circle = document.querySelector(".circle")
        circle.addEventListener("click",()=>{
        main.style.backgroundImage = `url(./assets/destination/background-destination-desktop.jpg)`
        main.style.backgroundSize ="cover"
        main.style.backgroundPosition = "center"

        good.style.marginLeft = "-100vw"

    
    })

    // Appear function for  home,destination,crew,technology
    function homeAppear (){
        good.style.marginLeft = "0"
    }

        
    function destinationAppear (){
        good.style.marginLeft = "-100vw"
        
    }
    function crewAppear (){
        good.style.marginLeft = "-190vw"
        
    }


    function technoAppear (){
        good.style.marginLeft = "-300vw"
    }
    

    //for technology
    function twoRemove(){
        let removeTwo = document.querySelector(".two")
        if (removeTwo.classList.contains("active")) {
               removeTwo.classList.remove("active")
        }       
    }

    function oneRemove(){
        let removeOne = document.querySelector(".one")
                if (removeOne.classList.contains("active")) {
                    removeOne.classList.remove("active")
                }
    }

    function threeRemove(){
        let removeThree = document.querySelector(".three")
                if (removeThree.classList.contains("active")) {
                    removeThree.classList.remove("active")
                }
    }