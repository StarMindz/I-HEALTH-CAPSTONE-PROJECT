const team = document.getElementById('the-team-container');

const teams = [
  {
    imageBackground: '../images/speakers/chess.png',
    image: '../images/speakers/stanley.jpg',
    teamHead: 'Nnamani Stanley Wisdom',
    teamSubHead: 'Senior Software Developer',
    teamDescription: 'Stanley is the CEO and founder of I-Health Company. A multibillion dollar company',
  },
  {
    imageBackground: '../images/speakers/chess.png',
    image: '../images/speakers/gates.jpg',
    teamHead: 'Bill Gates',
    teamSubHead: 'He is business magnate philanthropist and co-founder of Microsoft',
    teamDescription: 'Bill Gates has held the Forbes title of the richest person in the world for the longest period.',
  },
  {
    imageBackground: '../images/speakers/chess.png',
    image: '../images/speakers/Dangote.jpg',
    teamHead: 'Aliko Dangote',
    teamSubHead: 'He is a billionaire business magnate.CEO of the Dangote Group.',
    teamDescription: 'Dangote became Nigerias first billionaire in 2007.',
  },
  {
    imageBackground: '../images/speakers/chess.png',
    image: '../images/speakers/oprah.jpg',
    teamHead: 'Oprah Gail Winfrey',
    teamSubHead: 'Oprah Winfrey an American talk , actress, author, and philanthropist.',
    teamDescription: 'Dubbed the Queen of All Media, was once the worlds only black billionaire.',
  },
  {
    imageBackground: '../images/speakers/chess.png',
    image: '../images/speakers/diane.jpg',
    teamHead: 'Diane Marie Hendricks',
    teamSubHead: 'She is billionaire businesswoman and film producer from Wisconsin',
    teamDescription: 'She has served on the boards',
  },
  {
    imageBackground: '../images/speakers/chess.png',
    image: '../images/speakers/mars.jpg',
    teamHead: 'Jacqueline Mars',
    teamSubHead: 'She is an American billionaire heiress and businesswoman.',
    teamDescription: 'She has served on several boards.',
  }
];

let teamContent = '';

for (let index = 0; index < teams.length; index++)
{
  let teammate = teams[index];
  let htmlContent = `
    <div class="team-container">
        <div class="team-image-container">
            <img class="team-background" src="${teammate.imageBackground}" alt="">
            <img class="team-image" src="${teammate.image}" alt="">
        </div>
        <div class="team-text-container">
            <h2 class="teammate-name">${teammate.teamHead}</h2>
            <h3 class="teammate-role">${teammate.teamSubHead}</h3>
            <p class="teammate-description">${teammate.teamDescription}</p>
        </div>
    </div>
    `;

  teamContent += htmlContent;
}


team.innerHTML = teamContent;