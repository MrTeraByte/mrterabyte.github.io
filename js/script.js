$(document).ready(() => {
  console.log("ready");
  
  //get current window location
  let destination = function(){
    let url = new URL(window.location.href);
     return url.searchParams.get("dist");
  }
  
  //Show content based on window location
  if(destination() == "about" || destination () == "contact"){
    console.log(`you are accessing ${destination()}`);
    
    let aboutAnim = anime.timeline({});
    
    aboutAnim.add({
      targets: [".main"],
      delay: 1000,
      top: "0px",
    });
    
  }else{
    
    let intro = anime.timeline({});
   
   //animation for the main element
    intro.add({
        targets: [".main"],
        opacity: 1,
        begin: (anim) => {
          
          //animate the text section and the cover one by one
          anime({
            targets: [".text-section",".cover"],
            easing: "easeOutElastic(0.5,0.9)",
            duration: 800,
            delay: anime.stagger(500),
            opacity: [0,1],
            translateY: [150,0],
            complete: () => {
              
              //animate the logo shadows after that
              anime({
                targets: [".logo"],
                delay: 200,
                "box-shadow": "0 0 20px black",
              });
            }
          });
       },
        complete: () => {
          
          //animate the title texts after animating the main section
          anime({
              targets: [".title-text"],
              duration: 1000,
              delay: anime.stagger(100),
              easing: "easeOutElastic(1,1)",
              opacity: [0,1],
              translateY: ["20px","0px"]
            });
     },
    })
  
  //animate the line
    intro.add({
      targets: ["#the-line"],
      delay: 500,
      width: ["0","40px"],
    })
  
  //spawning the tags after animating the line
    intro.add({
      targets: [".fading-tag"],
      opacity: ["0","1"],
      begin: () => {
        
      //spawn the left side tags
        anime({
          targets: [".left-tag"],
          duration: 500,
          delay: anime.stagger(50),
          easing: "easeOutElastic(1,1)",
          opacity: [0,1],
          translateX: ["-50px","0px"]
        })
      
      //spawn the right side tags
        anime({
          targets: [".right-tag"],
          duration: 500,
          delay: anime.stagger(20),
          easing: "easeOutElastic(1,1)",
          opacity: [0,1],
          translateX: ["50px","0px"]
        })
      },
    })
  
   
  }
  
  //Functionality for the links
  $(".title-text a").on("click",() => {
    window.location.href = "http://localhost:8158/index.html?dist=about";
  })
  
});