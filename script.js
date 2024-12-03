function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}


document.getElementById('submit-quiz').addEventListener('click', function() {
    let correctAnswers = 0;
    let unansweredQuestions = 0;


    document.querySelectorAll('.quiz-question').forEach((question) => {
        const correctAnswer = question.getAttribute('data-correct');
        const selectedAnswer = question.querySelector('input[type="radio"]:checked');

      
        if (selectedAnswer) {
           
            if (selectedAnswer.value === correctAnswer) {
                correctAnswers++;
            }
        } else {
            unansweredQuestions++;
        }
    });

   
    if (unansweredQuestions > 0) {
        alert(`Por favor, responda todas as perguntas. Você deixou ${unansweredQuestions} pergunta(s) sem resposta.`);
    } else {
       
        const resultText = document.getElementById('correct-answers');
        const resultSection = document.getElementById('quiz-result');
        
        resultText.textContent = correctAnswers;

       
        if (correctAnswers === 4) {
            resultSection.innerHTML = `
                <h3>PARABÉNS! Você acertou todas as perguntas.</h3>
                <button id="retry-quiz" class="cta-button">Tente Novamente</button>
            `;
        } else {
          
            resultSection.innerHTML = `
                <h3>Resultado: <span id="correct-answers">${correctAnswers}</span> de 4 perguntas corretas.</h3>
                <p>Continue estudando e aprendendo sobre a vida dos santos jovens!</p>
                <button id="retry-quiz" class="cta-button">Tente Novamente</button>
            `;
        }
        
        resultSection.style.display = 'block';
        addRetryListener(); 
    }
});


function addRetryListener() {
    document.getElementById('retry-quiz').addEventListener('click', function() {
      
        document.querySelectorAll('input[type="radio"]:checked').forEach((input) => {
            input.checked = false;
        });

       
        document.getElementById('quiz-result').style.display = 'none';
    });
}

var map = L.map('mapa');  


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var milagresJovensSantos = [
    {
        nome: "São Domingos Sávio",
        descricao: "São Domingos Sávio, padroeiro dos coroinhas, foi um jovem santo associado a milagres após sua morte.",
        lat: 45.0703,  // Turim, Itália
        lng: 7.6869,
        imagem: "https://example.com/domingos-savio.jpg"
    },
    {
        nome: "São José Sánchez del Río",
        descricao: "São José Sánchez del Río foi martirizado durante a Guerra Cristera no México, e milagres foram atribuídos à sua intercessão.",
        lat: 20.2667,  // Sahuayo, México
        lng: -102.2993,
        imagem: "https://example.com/jose-sanchez-del-rio.jpg"
    },
    {
        nome: "Santa Maria Goretti",
        descricao: "Santa Maria Goretti perdoou seu agressor antes de morrer, e muitos milagres de cura foram atribuídos à sua intercessão.",
        lat: 41.4591,  // Nettuno, Itália
        lng: 12.6621,
        imagem: "https://example.com/maria-goretti.jpg"
    },
    {
        nome: "Santa Inês",
        descricao: "Santa Inês, mártir pela pureza e fé, está associada a muitos milagres e curas.",
        lat: 41.9015,  // Roma, Itália
        lng: 12.5102,
        imagem: "https://example.com/santa-ines.jpg"
    },
    {
        nome: "Carlo Acutis",
        descricao: "Carlo Acutis, o 'padroeiro da internet', foi beatificado após milagres de cura atribuídos à sua intercessão.",
        lat: 43.0707,  // Assis, Itália
        lng: 12.6196,
        imagem: "https://example.com/carlo-acutis.jpg"
    },
    {
        nome: "São Tarcísio",
        descricao: "São Tarcísio, o jovem mártir da Eucaristia, é venerado por proteger o sacramento eucarístico.",
        lat: 41.9029,  // Roma, Itália
        lng: 12.4534,
        imagem: "https://example.com/sao-tarcisio.jpg"
    },
    {
        nome: "Beato Pier Giorgio Frassati",
        descricao: "Pier Giorgio Frassati é conhecido por sua devoção e cuidado com os pobres, e muitos milagres foram atribuídos à sua intercessão.",
        lat: 45.0703,  // Turim, Itália
        lng: 7.6869,
        imagem: "https://example.com/pier-giorgio-frassati.jpg"
    },
    {
        nome: "São João Berchmans",
        descricao: "São João Berchmans foi conhecido por sua profunda fé, e muitos milagres de intercessão foram atribuídos a ele após sua morte.",
        lat: 50.8467,  // Bruxelas, Bélgica
        lng: 4.3499,
        imagem: "https://example.com/joao-berchmans.jpg"
    },
    {
        nome: "São Luís Gonzaga",
        descricao: "São Luís Gonzaga, padroeiro da juventude, é conhecido por sua pureza e devoção, e é intercessor de muitos milagres.",
        lat: 45.0703,  // Turim, Itália
        lng: 7.6869,
        imagem: "https://example.com/sao-luis-gonzaga.jpg"
    }
];


var coordenadas = [];


milagresJovensSantos.forEach(function(milagre) {
    var marker = L.marker([milagre.lat, milagre.lng]).addTo(map);
    marker.bindPopup(`
        <h3>${milagre.nome}</h3>
        <p>${milagre.descricao}</p>
        <img src="${milagre.imagem}" alt="${milagre.nome}" style="width: 100%; height: auto;">
    `);

    coordenadas.push([milagre.lat, milagre.lng]);
});


map.fitBounds(coordenadas);

const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false, 
    },
    on: {
        init: function () {

            this.el.addEventListener('click', () => {
                if (this.autoplay.running) {
                    this.autoplay.stop();
                } else {
                    this.autoplay.start();
                }
            });
        }
    }
});

(function() {
    emailjs.init('k7l8UtFHUAVsXG5Oc'); 
  })();
  

  document.getElementById('suggestion-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    var suggestion = document.getElementById('suggestion').value;
  
    var templateParams = {
      suggestion: suggestion, 
    };
  
 
    emailjs.send('service_73wv40m', 'template_0aw1shf', templateParams)
      .then(function(response) {
        alert('Sugestão enviada com sucesso!');
      }, function(error) {
        alert('Erro ao enviar sugestão: ' + error.text);
      });
  });
  