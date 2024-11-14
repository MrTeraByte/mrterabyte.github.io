$(document).ready(() => {
  //get current window location
  let destination = function () {
    let url = new URL(window.location.href);
    return url.searchParams.get("dist");
  };

  //Show content based on window location
  if (destination() == "about") {
    //timeline for about page animations
    let aboutAnim = anime.timeline({});

    //display the about section first
    $(".about").css({ display: "block" });

    //start of the animations
    aboutAnim
      .add({
        targets: [".about"], //show the about section
        opacity: 1,
      })
      .add({
        targets: [".lines span"], //animate the lines
        width: ["0px", "30px"],
      })
      .add({
        targets: [".greetings", ".name", ".description"], //fade in the texts one by one
        opacity: [0, 1],
        lineHeight: ["10px", "20px"],
        duration: 1000,
        delay: anime.stagger(200),
      })
      .add({
        targets: [".contactLink", ".go-back"], //fadein the bottom
        opacity: [0, 1],
      });
  } else if (destination() == "projects") {
    //timeline for project page animations
    let aboutAnim = anime.timeline({});

    //display the about section first
    $(".projects").css({ display: "block" });

    //start of the animations
    aboutAnim
      .add({
        targets: [".projects"], //show the about section
        opacity: 1,
      })
      .add({
        targets: [".lines span"], //animate the lines
        width: ["0px", "30px"],
      })
      .add({
        targets: [".greetings", ".name", ".description"], //fade in the texts one by one
        opacity: [0, 1],
        lineHeight: ["10px", "20px"],
        duration: 1000,
        delay: anime.stagger(200),
      })
      .add({
        targets: [".contactLink", ".go-back"], //fadein the bottom
        opacity: [0, 1],
      });
  } else {
    //animate the homepage
    let intro = anime.timeline({});

    //animation for the main element
    intro.add({
      targets: [".main"],
      opacity: 1,
      begin: (anim) => {
        //animate the text section and the cover one by one
        anime({
          targets: [".text-section", ".cover"],
          easing: "easeOutElastic(0.5,0.9)",
          duration: 800,
          delay: anime.stagger(500),
          opacity: [0, 1],
          translateY: [150, 0],
          complete: () => {
            //animate the logo shadows after that
            anime({
              targets: [".logo"],
              delay: 200,
              "box-shadow": "0 0 20px black",
            });
          },
        });
      },
      complete: () => {
        //animate the title texts after animating the main section
        anime({
          targets: [".title-text"],
          duration: 1000,
          delay: anime.stagger(100),
          easing: "easeOutElastic(1,1)",
          opacity: [0, 1],
          translateY: ["20px", "0px"],
        });
      },
    });

    //animate the line
    intro.add({
      targets: ["#the-line"],
      delay: 500,
      width: ["0", "40px"],
    });

    //spawning the tags after animating the line
    intro.add({
      targets: [".fading-tag"],
      opacity: ["0", "1"],
      begin: () => {
        //spawn the left side tags
        anime({
          targets: [".left-tag"],
          duration: 500,
          delay: anime.stagger(50),
          easing: "easeOutElastic(1,1)",
          opacity: [0, 1],
          translateX: ["-50px", "0px"],
        });

        //spawn the right side tags
        anime({
          targets: [".right-tag"],
          duration: 500,
          delay: anime.stagger(20),
          easing: "easeOutElastic(1,1)",
          opacity: [0, 1],
          translateX: ["50px", "0px"],
        });
      },
      complete: () => {
        //show the link to other pages
        anime({
          targets: [".other-pages a"],
          delay: anime.stagger(20),
          opacity: [0, 1],
        });
      },
    });
  }
});
