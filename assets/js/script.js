// Question Array for Quiz
const questions = [
    {
        wrestler: "Buff Bagwell",
        img: "assets/images/buff-bagwell.webp",
        p: "Buff Bagwell is a former five-time WCW Champion who served ten years with World Championship Wrestling. His promising career was hamstringed by a contentious debut in WWE. But was he a member of the nWo?",
        select: ["nWo for life!", "Jabroni!"],
        answer: "nWo for life!",
    },
    {
        wrestler: "Chris Jericho",
        img: "assets/images/chris-jericho.webp",
        p: "Lionheart. Y2J. Le Champion. The Ocho. Multiple titles, multiple reigns. Last ever WCW Champion. First ever Undisputed WWF Champion. First ever AEW Champion. Chris Jericho has done it all. But was he a member of the nWo?",
        select: ["nWo for life!", "Jabroni!"],
        answer: "nWo for life!",
    },
    { 
          wrestler: "Chyna",
          img: "assets/images/chyna.webp",
          p: "The Ninth Wonder of the World may be a founding member of DX and the only woman to ever hold the Intercontinental Championship, but was she a member of the nWo?",
          select: ["nWo for life!", "Jabroni!"],
          answer: "Jabroni!",
      },
      { 
          wrestler: "David Arquette",
          img: "assets/images/david-arquette.webp",
          p: "A member of the famous Arquette family and an accomplished Hollywood star, it was only natural that David would become… WCW Champion? He may be one of the most controversial champions of all time, but was he a member of the nWo?",
          select: ["nWo for life!", "Jabroni!"],
          answer: "Jabroni!",
      },
      { 
          wrestler: "Disco Inferno",
          img: "assets/images/disco-inferno.webp",
          p: "Two-time WCW Television Champion. Cruiserweight Champion. WCW Tag Team Champion. Disco Inferno proved himself both in-ring and backstage, but was he a member of the nWo?",
          select: ["nWo for life!", "Jabroni!"],
          answer: "nWo for life!",
      },
      { 
          wrestler: "Eddie Guerrero",
          img: "assets/images/eddie-guerrero.webp",
          p: "Eddie Guerrero is undoubtedly one of the most beloved wrestlers of all time. Boasting numerous championships and supporters across his tragically short career, his in-ring style echoes throughout modern wrestling. But was he a member of the nWo?",
          select: ["nWo for life!", "Jabroni!"],
          answer: "Jabroni!",
      },
  { 
          wrestler: "Eric Bischoff",
          img: "assets/images/eric-bischoff.webp",
          p: "Famed for being the only man to challenge Vince McMahon in the ratings and win (for 83 weeks!), Eric Bischoff is one of the most successful wrestling producers in the history of the business. He was the executive producer of WCW throughout the 90’s, but was he also a member of the nWo?",
          select: ["nWo for life!", "Jabroni!"],
          answer: "nWo for life!",
      },
  { 
          wrestler: "Hiroyoshi Tenzan",
          img: "assets/images/hiroyoshi-tenzan.webp",
          p: "With a title history that boasts multiple IWGP and G1 wins in New Japan Wrestling, both as a single and in a tag, Hiroyoshi Tenzan is one of the most striking brawlers to ever emerge in Japan. But was he a member of the nWo?",
          select: ["nWo for life!", "Jabroni!"],
          answer: "nWo for life!",
      },
  { 
          wrestler: "Jushin Thunder Liger",
          img: "assets/images/jushin-liger.webp",
          p: "Debuting in 1984 and retiring in 2020 with over 4,000 matches under his belt, Jushin Thunder Liger’s name is synonymous not only with New Japan, but with high-octane wrestling. He may have spent nearly four decades between the ropes, but was he a member of the nWo?",
          select: ["nWo for life!", "Jabroni!"],
          answer: "Jabroni!",
      },
  { 
          wrestler: "Konnan",
          img: "assets/images/konnan.webp",
          p: "Often referred to as Mexico’s Hulk Hogan, Konnan had a title-studded career in many rings across the world, as well as enjoying success in several roles behind the scenes of big promotions. But was he a member of the nWo?",
          select: ["nWo for life!", "Jabroni!"],
          answer: "nWo for life!",
      },
  { 
          wrestler: "Luna Vachon",
          img: "assets/images/luna-vachon.webp",
          p: "WWE hall of famer and noted member of The Human Oddities, Luna Vachon was a trailblazer in women’s wrestling and both an inspiration and a trainer for several women in the modern era. But was she a member of the nWo?",
          select: ["nWo for life!", "Jabroni!"],
          answer: "Jabroni!",
      },
  { 
          wrestler: "Masahiro Chono",
          img: "assets/images/masahiro-chono.webp",
          p: "Boasting the spot of NJPW’s top heel for most of his career, Masahiro Chono is also the wrestler with the most G1 Climax wins at 5. He is undoubtedly one of the greatest Japanese wrestlers of all time, but was he a member of the nWo?",
          select: ["nWo for life!", "Jabroni!"],
          answer: "nWo for life!",
      },
  { 
          wrestler: "Rowdy Roddy Piper",
          img: "assets/images/roddy-piper.webp",
          p: "One of the most recognisable wrestlers of all time, Roddy Piper enjoyed success across multiple promotions in his career along with cult status as an actor. He may have cast the mould for what a wrestling heel should be, but was he a member of the nWo?",
          select: ["nWo for life!", "Jabroni!"],
          answer: "Jabroni!",
      },
  { 
          wrestler: "Sting",
          img: "assets/images/sting.webp",
          p: "It’s Sting! Aptly named The Icon, Sting’s career spanned several decades, iterations and accomplishments. No matter what version of Sting the fans got, they showed tremendous love and respect for one of the greatest ever. But was he a member of the nWo?",
          select: ["nWo for life!", "Jabroni!"],
          answer: "nWo for life!",
      },
  { 
          wrestler: "Torrie Wilson",
          img: "assets/images/torrie-wilson.webp",
          p: "The women’s title may have alluded her throughout her run, but Torrie Wilson is one of the most recognisable wrestlers of her era and was inducted into the WWE Hall of Fame in 2019. But was she a member of the nWo?",
          select: ["nWo for life!", "Jabroni!"],
          answer: "nWo for life!",
      },

]

// Declare Constants accessing the DOM
const quizImage = document.getElementById('question-image');
const wrestlerName = document.getElementById('wrestler');
const question = document.getElementById('question');
const answerOne = document.getElementById('nwo');
const answerTwo = document.getElementById('jabroni');
const scoreArea = document.getElementById('score');
const nextButton = document.getElementById('next-btn');

//Variables for functions
let correct = 0;
let incorrect = 0;
let currentQuestion = 0;

//Function to Display the Questions
function displayQuestion() {
    let q = questions[currentQuestion];
    quizImage.querySelector('img').src = q.img;
    wrestlerName.textContent = q.wrestler;
    question.textContent = q.p;
    answerOne.querySelector('p').textContent = q.select[0];
    answerTwo.querySelector('p').textContent = q.select[1];
    nextButton.textContent = 'Next!';
}