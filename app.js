const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = '6'

playerLivesCount.textContent = playerLives ;

const getData = () => [
    { imgSrc: "./images/beatles.jpeg", name: "beatles" },
    { imgSrc: "./images/blink182.jpeg", name: "blink 182" },
    { imgSrc: "./images/fkatwigs.jpeg", name: "fka twigs" },
    { imgSrc: "./images/fleetwood.jpeg", name: "fleetwood" },
    { imgSrc: "./images/joy-division.jpeg", name: "joy division" },
    { imgSrc: "./images/ledzep.jpeg", name: "lep zeppelin" },
    { imgSrc: "./images/metallica.jpeg", name: "metallica" },
    { imgSrc: "./images/pinkfloyd.jpeg", id: 8, name: "pink floyd" },
    { imgSrc: "./images/beatles.jpeg", name: "beatles" },
    { imgSrc: "./images/blink182.jpeg", name: "blink 182" },
    { imgSrc: "./images/fkatwigs.jpeg", name: "fka twigs" },
    { imgSrc: "./images/fleetwood.jpeg", name: "fleetwood" },
    { imgSrc: "./images/joy-division.jpeg", name: "joy division" },
    { imgSrc: "./images/ledzep.jpeg", name: "led zeppelin" },
    { imgSrc: "./images/metallica.jpeg", name: "metallica" },
    { imgSrc: "./images/pinkfloyd.jpeg", name: "pink floyd" },
  ];


  const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5)
    return cardData;
  } 
  
  
  const cardGenerator = () => {
    const cardData = randomize();
    console.log(cardData);
    cardData.forEach((item) => {
      const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
    
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        
        face.src = item.imgSrc
        card.setAttribute("name", item.name)
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        card.addEventListener("click" , (e) =>{
          card.classList.toggle("toggleCard");
          checkCards(e);
        });
    });
  };

  
  
  const checkCards = (e) => {
    const clickedCard = e.target;
    console.log(clickedCard);
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped")
    const toggleCard = document.querySelectorAll(".toggleCard")

    if (flippedCards.length === 2) {
      if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")){
            console.log("match");
            flippedCards.forEach((card) =>{
              card.classList.remove("flipped")
              card.style.pointerEvents = "none";
            })
          } else {
            console.log("wrong");
            flippedCards.forEach((card) =>{
              card.classList.remove("flipped")
              setTimeout(() =>card.classList.remove("toggleCard"),1000)
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if (playerLives ===0) {
              restart("try again");
            }
          }
        }
        if (toggleCard.length === 16) {
          restart("You Won...")
        }
      };

    const restart = (text) => {
      let cardData = randomize();
      let faces = document.querySelectorAll(".face")
      let cards = document.querySelectorAll(".card")
      section.style.pointerEvents = "none"
      cardData.forEach((item,index) => {
        cards[index].classList.remove("toggleCard");
        setTimeout(() => {
          cards[index].style.pointerEvents= "all";
          faces[index].src = item.imgSrc;
          cards[index].setAttribute("name", item.name);
          section.style.pointerEvents = "all"

        }, 1000);
        
      })
      playerLives= 8;
      playerLivesCount.textContent = playerLives;
      setTimeout(() => {
        alert(text)
      }, 100);
    
    }
      
      
      
cardGenerator();