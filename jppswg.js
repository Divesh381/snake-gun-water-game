const generate_number_btn_click = () => {
  document.querySelector("#section1").style.display = "block";
  document.querySelector("#section2").style.display = "none";
  document.querySelector("#section3").style.display = "none";
  document.querySelector("#section4").style.display = "none";
  document.querySelector("#section5").style.display = "none";


  // setTimeout(()=>{
  //   document.querySelector("#field").value="";
  //   document.querySelector("#section1").style.display = "none";
  //   document.querySelector("#section2").style.display = "block";
  //   document.querySelector("#section3").style.display = "none";
  //   document.querySelector("#section4").style.display = "none";
  //   document.querySelector("#section5").style.display = "none";

  //      },1000)


};
generate_number_btn_click();

const sanke_water_click = (cpu, user) => {
  document.querySelector("#section1").style.display = "none";
  document.querySelector("#section3").style.display = "block";
  document.querySelector("#main-section1").style.display = "block";
  document.querySelector("#main-section2").style.display = "block";
  document.querySelector("#main-section3").style.display = "none";
  document.querySelector("#section4").style.display = "block";
  document.querySelector("#section5").style.display = "block";
  document.getElementById("demo").innerHTML = (` cpu: ${cpu} and user: ${user} `)
  document.getElementById("demo1").innerHTML = "Congratulations You won the game &#128079 &#128079 &#128081 &#128081";
  document.getElementById("demo2").innerHTML = "Snake.. drinks the Water.. ";
};


const sanke_gun_click = (cpu, user) => {
  document.querySelector("#section1").style.display = "none";
  document.querySelector("#section3").style.display = "block";
  document.querySelector("#main-section1").style.display = "block";
  document.querySelector("#main-section2").style.display = "none";
  document.querySelector("#main-section3").style.display = "block";
  document.querySelector("#section4").style.display = "block";
  document.querySelector("#section5").style.display = "block";
   document.getElementById("demo").innerHTML = (` cpu: ${cpu} and user: ${user} `)
  document.getElementById("demo1").innerHTML = "You are lose..... the game!!!!! &#128078 &#128078 &#128549 &#128549";
  document.getElementById("demo2").innerHTML = "Snake... doesn't eat Gun...";
};
const gun_water_click = (cpu, user) => {
  document.querySelector("#section1").style.display = "none";
  document.querySelector("#section3").style.display = "block";
  document.querySelector("#main-section3").style.display = "block";
  document.querySelector("#main-section2").style.display = "block";
  document.querySelector("#main-section1").style.display = "none";
  document.querySelector("#section4").style.display = "block";
  document.querySelector("#section5").style.display = "block";
  document.getElementById("demo").innerHTML = (` cpu: ${cpu} and user: ${user} `)
  document.getElementById("demo1").innerHTML = "You are lose..... the game!!!!! &#128078 &#128078 &#128549 &#128549";
  document.getElementById("demo2").innerHTML = " Gun... will not kill Water... because it is liquid";
};
const gun_sanke_click = (cpu, user) => {
  document.querySelector("#section1").style.display = "none";
  document.querySelector("#section3").style.display = "block";
  document.querySelector("#main-section3").style.display = "block";
  document.querySelector("#main-section2").style.display = "none";
  document.querySelector("#main-section1").style.display = "block";
  document.querySelector("#section4").style.display = "block";
  document.querySelector("#section5").style.display = "block";
  document.getElementById("demo").innerHTML = (` cpu: ${cpu} and user: ${user} `)
  document.getElementById("demo1").innerHTML = "Congratulations You won the game &#128079 &#128079 &#128081 &#128081";
  document.getElementById("demo2").innerHTML = "Gun... will kill the snake...";
};


const water_sanke_click = (cpu, user) => {
  document.querySelector("#section1").style.display = "none";
  document.querySelector("#section3").style.display = "block";
  document.querySelector("#main-section2").style.display = "block";
  document.querySelector("#main-section1").style.display = "block";
  document.querySelector("#main-section3").style.display = "none";
  document.querySelector("#section4").style.display = "block";
  document.querySelector("#section5").style.display = "block";
  
  document.getElementById("demo").innerHTML = (` cpu: ${cpu} and user: ${user} `)
  document.getElementById("demo1").innerHTML = "You are lose..... the game!!!!! &#128078 &#128078 &#128549 &#128549";
  document.getElementById("demo2").innerHTML = "Snake... will not swim in water...";
};
const water_gun_click = (cpu, user) => {
  document.querySelector("#section1").style.display = "none";
  document.querySelector("#section3").style.display = "block";
  document.querySelector("#main-section2").style.display = "block";
  document.querySelector("#main-section1").style.display = "none";
  document.querySelector("#main-section3").style.display = "block";
  document.querySelector("#section4").style.display = "block";
  document.querySelector("#section5").style.display = "block";
  document.getElementById("demo").innerHTML = (` cpu: ${cpu} and user: ${user} `)
  document.getElementById("demo1").innerHTML = "Congratulations You won the game &#128079 &#128079 &#128081 &#128081";
  document.getElementById("demo2").innerHTML = "The Gun... will drown in Water...";
};

const sanke_water_gun = (cpu, user) => {
  document.querySelector("#section4").style.display = "block";
  document.querySelector("#section1").style.display = "none";
  document.querySelector("#section3").style.display = "none";
  document.querySelector("#main-section1").style.display = "none";
  document.querySelector("#main-section2").style.display = "none";
  document.querySelector("#main-section3").style.display = "none";
  document.querySelector("#section5").style.display = "block";

  document.getElementById("demo").innerHTML = (` cpu: ${cpu} and user: ${user} `)
  document.getElementById("demo1").innerHTML = "Please try again Cpu... and User... are matched...&#128683 &#128683 ";
  document.getElementById("demo2").innerHTML = "Cpu... and user... are kill to each other  !!!!!!!";
}


const button = document.querySelector("#note-submit");
const userA1 = document.querySelector("#field");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const user = userA1.value;
  var strUCase = user.toUpperCase()


  let cpuI = Math.floor(Math.random() * 3);
  let cpu = ["S", "W", "G"][cpuI];

  document.body.style.backgroundColor = "#8f817fb";
   const box = document.getElementById('message-text');
   box.style.color = "red";

  check_btn(cpu, strUCase);
})


const check_btn = (cpu, user) => {


  if (cpu === user) {
    sanke_water_gun(cpu, user);
  }
  else if (cpu === 'S' && user === 'W') {
   sanke_water_click(cpu, user);


  }
  else if (cpu === 'S' && user === 'G') {
    sanke_gun_click(cpu, user);
  }
  else if (cpu === 'G' && user === 'W') {
     gun_water_click(cpu, user);
  }
  else if (cpu === 'G' && user === 'S') {
        gun_sanke_click(cpu, user);
  }
  else if (cpu === 'W' && user === 'S') {
     water_sanke_click(cpu, user);
  }
  else if (cpu === 'W' && user === 'G') {
    water_gun_click(cpu, user);
  }
};

