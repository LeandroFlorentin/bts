const btsQuestions = [
  { title: '¿Cuál sería tu cita ideal? 💌', options: ['Una cena elegante, miradas intensas y mucha química.', 'Una salida espontánea, risas y terminar haciendo cualquier locura.', 'Una noche tranquila, música, charlas profundas y cero apuro.', 'Un plan inesperado, algo diferente que ninguno haya hecho antes.'] },
  { title: '¿Qué te conquista de un chico? 💋', options: ['Que tenga sentido del humor y me haga reír hasta cuando estoy de mal humor.', 'Que tenga confianza, presencia y una mirada que diga todo.', 'Que sea creativo, misterioso y tenga su propio mundo.', 'Que sea atento, cariñoso y se acuerde de los pequeños detalles.'] },
  { title: '¿Qué plan no cancelarías por nada?', options: ['Una charla de horas con alguien que me entienda.', 'Una noche de baile y diversión.', 'Una tarde creativa y sin apuro.', 'Una aventura improvisada.'] },
  { title: 'Elegí una vibra para compartir.', options: ['Profunda y curiosa.', 'Divertida e impredecible.', 'Tranquila y auténtica.', 'Magnética y romántica.'] },
  { title: '¿Quién te llama la atención primero?', options: ['El que tiene historias interesantes para contar.', 'El que hace reír a todo el grupo y termina siendo el protagonista.', 'El que tiene un estilo increíble y no necesita esforzarse para llamar la atención.', 'El que escucha de verdad y se acuerda de todo.'] },
  { title: 'Elegí tu red flag menos favorita. 🚩', options: ['Que sea demasiado orgulloso para pedir perdón.', 'Que nunca se tome nada en serio.', 'Que no tenga iniciativa para hacer planes.', 'Que no pueda hablar de lo que siente.'] },
  { title: 'Elegí una canción para la escena romántica de tu película. 🎧', options: ['Una canción intensa, de esas que parecen escritas para ustedes.', 'Una canción pop que te haga querer bailar con él.', 'Una canción lenta para escuchar abrazados.', 'Una canción misteriosa, con una vibra cinematográfica.'] }
];

const divaQuestions = [
  { title: 'Es viernes a la noche. ¿Cuál es tu plan?', options: ['Salir y ser el centro de atención', 'Plan improvisado con amigas', 'Noche de fotos, música y arreglarme', 'Entrenar y después terminar saliendo'] },
  { title: 'Elegí una prenda que no puede faltar en tu placard.', options: ['Un short estampado que destaque', 'Un top negro que combine con todo', 'Una prenda rosa con brillos', 'Un conjunto deportivo que me quede increíble'] },
  { title: '¿Qué energía querés transmitir cuando entrás a un lugar?', options: ['Hot y segura de mí misma', 'Misteriosa e interesante', 'Divertida y atrevida', 'Relajada, pero con muchísimo estilo'] },
  { title: '¿Cuál es tu accesorio imprescindible?', options: ['Aros grandes y joyería llamativa', 'Anteojos negros y accesorios plateados', 'Brillos, glitter y algo rosa', 'Zapatillas y una cartera canchera'] },
  { title: 'Elegí tu paleta de colores.', options: ['Rosa chicle y plateado', 'Negro, gris y bordó', 'Cebra, blanco y negro', 'Rosa, negro y estampas mezcladas'] },
  { title: '¿Qué frase te representa más?', options: ['Si voy a hacerlo, voy a hacerlo increíble', 'No necesito llamar la atención para destacar', 'La vida es demasiado corta para vestirse aburrida', 'Cómoda, linda y lista para cualquier plan'] },
  { title: '¿Qué buscás cuando comprás ropa?', options: ['Sentirme sensual y poderosa', 'Encontrar prendas versátiles con personalidad', 'Usar algo diferente a todo lo demás', 'Poder entrenar, salir y sentirme divina'] }
];

const btsResults = [
  { name: 'RM', description: 'El match intelectual. Te atrae alguien con ideas propias, curiosidad y profundidad. Una conexión que empieza hablando de cualquier cosa y termina en una charla de horas.' },
  { name: 'Jin', description: 'El elegante con sentido del humor. Querés alguien que te haga reír, te siga el juego y también sepa tener sus momentos románticos.' },
  { name: 'SUGA', description: 'El reservado que despierta curiosidad. Te gusta la gente auténtica, independiente y con un mundo interior interesante.' },
  { name: 'j-hope', description: 'La energía que te sigue el ritmo. Buscás diversión, espontaneidad y alguien con quien convertir un plan cualquiera en una anécdota.' },
  { name: 'Jimin', description: 'El encanto magnético. Te atrae una combinación de sensibilidad, presencia escénica y una vibra romántica.' },
  { name: 'V', description: 'El chico de película. Te llaman la atención la estética, la originalidad y ese aire artístico que hace que alguien destaque.' },
  { name: 'Jung Kook', description: 'El compañero de aventuras. Te gusta alguien activo, versátil y con quien puedas pasar de un plan deportivo a una cita improvisada.' }
];

const divaResults = [
  { name: 'THE BADDIE', description: 'Sensual, segura y protagonista. Tu uniforme: shorts tiro bajo, tops ajustados, rosa intenso y detalles brillantes.' },
  { name: 'THE MIDNIGHT GIRL', description: 'Oscura, misteriosa y elegante. Tu uniforme: negro, cortes sensuales, accesorios plateados y prendas versátiles.' },
  { name: 'THE WILD GIRL', description: 'Atrevida, original y sin miedo a destacar. Tu uniforme: cebra, mezclas de estampas, colores contrastantes y looks que no pasan inadvertidos.' },
  { name: 'THE IT GIRL', description: 'Deportiva, canchera y espontánea. Tu uniforme: conjuntos coordinados, shorts cómodos y prendas que funcionan tanto para entrenar como para salir.' }
];

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function makeQuiz(elementId, questions, results, resultFor) {
  const root = document.getElementById(elementId);
  let step = 0;
  let answers = Array(questions.length).fill(null);
  let showingResult = false;

  function render() {
    if (showingResult) {
      const result = resultFor(answers, results);
      root.innerHTML = `<div class="quiz-result"><span class="eyebrow">Tu resultado</span><h3>${escapeHtml(result.name)}</h3><p>${escapeHtml(result.description)}</p><button class="quiz-restart" type="button">Volver a jugar ↗</button></div>`;
      root.querySelector('.quiz-restart').addEventListener('click', () => {
        step = 0;
        answers = Array(questions.length).fill(null);
        showingResult = false;
        render();
      });
      return;
    }

    const question = questions[step];
    root.innerHTML = `<div class="quiz-top"><span>${elementId === 'bts-quiz' ? 'BTS MATCH QUIZ' : 'GLOW PERSONALITY QUIZ'}</span><span>${step + 1} DE ${questions.length}</span></div><div class="quiz-progress" role="progressbar" aria-label="Progreso del test" aria-valuemin="0" aria-valuemax="${questions.length}" aria-valuenow="${step + 1}"><span style="width:${((step + 1) / questions.length) * 100}%"></span></div><h3 class="quiz-question">${escapeHtml(question.title)}</h3><div class="quiz-options" role="group" aria-label="Opciones de respuesta">${question.options.map((option, index) => `<button type="button" class="quiz-option${answers[step] === index ? ' selected' : ''}" data-answer="${index}" aria-pressed="${answers[step] === index}"><span class="quiz-letter">${'ABCD'[index]}</span>${escapeHtml(option)}</button>`).join('')}</div><div class="quiz-actions"><button class="quiz-back" type="button" ${step === 0 ? 'disabled' : ''}>Anterior</button><button class="quiz-next" type="button" ${answers[step] === null ? 'disabled' : ''}>${step === questions.length - 1 ? 'Descubrir mi resultado' : 'Siguiente'}</button></div>`;

    root.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => {
      answers[step] = Number(button.dataset.answer);
      render();
      root.querySelector(`[data-answer="${answers[step]}"]`).focus();
    }));
    root.querySelector('.quiz-back').addEventListener('click', () => { if (step > 0) { step--; render(); } });
    root.querySelector('.quiz-next').addEventListener('click', () => {
      if (answers[step] === null) return;
      if (step === questions.length - 1) showingResult = true;
      else step++;
      render();
    });
  }
  render();
}

function mostFrequent(answers, size) {
  const counts = Array(size).fill(0);
  answers.forEach(answer => counts[answer]++);
  return counts.indexOf(Math.max(...counts));
}

makeQuiz('diva-quiz', divaQuestions, divaResults, (answers, results) => results[mostFrequent(answers, results.length)]);
makeQuiz('bts-quiz', btsQuestions, btsResults, (answers, results) => {
  const counts = Array(results.length).fill(0);
  const weights = [0, 3, 2, 5, 4, 1, 6];
  answers.forEach((answer, index) => { counts[(weights[index] + answer) % results.length]++; });
  return results[counts.indexOf(Math.max(...counts))];
});

const pollButtons = [...document.querySelectorAll('[data-vote]')];
const pollFeedback = document.getElementById('poll-feedback');
const pollKey = 'glow-demo-vote';
let currentVote;
try { currentVote = localStorage.getItem(pollKey); } catch { currentVote = null; }

function renderPoll() {
  pollButtons.forEach(button => {
    button.classList.toggle('voted', button.dataset.vote === currentVote);
    button.setAttribute('aria-pressed', String(button.dataset.vote === currentVote));
  });
  pollFeedback.textContent = currentVote ? `Tu voto: ${currentVote}. Simulacro: solo se guarda en este navegador; podés cambiarlo.` : 'Simulacro: el voto solo se guarda en este navegador.';
}
pollButtons.forEach(button => button.addEventListener('click', () => {
  currentVote = button.dataset.vote;
  try { localStorage.setItem(pollKey, currentVote); } catch { /* El voto sigue visible durante esta sesión. */ }
  renderPoll();
}));
renderPoll();