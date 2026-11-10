// DATASET WITH EXACT HISTORICAL TEXTS AND QUIZZES
        const SLIDES = [
            {
                id: 0,
                type: 'intro',
                category: "Introdução",
                categoryClass: "bg-slate-100 text-slate-700 border border-slate-300/60",
                title: "Pioneiros da Computação",
                subtitle: "A Tríade Fundamental da Era Digital",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
                era: "Séculos XIX e XX",
                synopsis: "Bem-vindo ao Museu Virtual dos Pioneiros da Computação. Esta exposição apresenta Ada Lovelace, John von Neumann e Claude Shannon. Acompanhe a história de cada pioneiro e responda aos desafios de 15 segundos.",
                speech: "Bem-vindo ao Museu Virtual dos Pioneiros da Computação. Esta exposição apresenta Ada Lovelace, John von Neumann e Claude Shannon. Acompanhe as conquistas de cada pioneiro e teste seus conhecimentos nos desafios de 15 segundos."
            },
            {
                id: 1,
                type: 'pioneer',
                category: "Ada Lovelace",
                categoryClass: "bg-purple-50 text-purple-700 border border-purple-200/60",
                title: "Ada Lovelace",
                subtitle: "1815 – 1852 • A Primeira Programadora",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
                era: "Londres, 1843",
                synopsis: "Ada Lovelace, matemática britânica, colaborou com Charles Babbage na máquina analítica. Em 1843, ela publicou o primeiro algoritmo da história projetado para ser executado por uma máquina, calculando os números de Bernoulli. Lovelace percebeu que a computação não estava restrita a números. Se a máquina pudesse manipular símbolos com regras bem definidas, poderia compor músicas, desenhar e processar qualquer tipo de dado abstrato.",
                speech: "Ada Lovelace, matemática britânica, colaborou com Charles Babbage na máquina analítica. Em 1843, ela publicou o primeiro algoritmo da história projetado para ser executado por uma máquina, calculando os números de Bernoulli. Lovelace percebeu que a computação não estava restrita a números. Se a máquina pudesse manipular símbolos com regras bem definidas, poderia compor músicas, desenhar e processar qualquer tipo de dado abstrato.",
                quiz: {
                    question: "Qual foi o principal avanço conceitual de Ada Lovelace sobre a máquina analítica em 1843?",
                    speechQuestion: "Desafio Ada Lovelace: Qual foi o principal avanço conceitual de Ada Lovelace sobre a máquina analítica em 1843?",
                    options: [
                        { text: "Percebeu que a máquina podia manipular símbolos abstratos, compor músicas e processar qualquer tipo de dado.", correct: true },
                        { text: "Inventou o primeiro transístor de silício para computadores mecânicos.", correct: false },
                        { text: "Criou a arquitetura de memória unificada para a CPU.", correct: false }
                    ]
                }
            },
            {
                id: 2,
                type: 'pioneer',
                category: "John von Neumann",
                categoryClass: "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
                title: "John von Neumann",
                subtitle: "1903 – 1957 • O Arquiteto dos Processadores",
                image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
                era: "Princeton, 1945",
                synopsis: "John von Neumann, polímata húngaro-americano, formulou em 1945 a arquitetura von Neumann. Ela estabeleceu a estrutura de CPU, memória principal e dispositivos de entrada e saída, onde programas e dados residem na mesma memória. Além dos computadores, von Neumann cofundou a teoria dos jogos na economia, contribuiu para a física nuclear e criou a teoria dos autômatos celulares, demonstrando como sistemas autoreplicantes simples podem gerar complexidade biológica.",
                speech: "John von Neumann, polímata húngaro-americano, formulou em 1945 a arquitetura von Neumann. Ela estabeleceu a estrutura de CPU, memória principal e dispositivos de entrada e saída, onde programas e dados residem na mesma memória. Além dos computadores, von Neumann cofundou a teoria dos jogos na economia, contribuiu para a física nuclear e criou a teoria dos autômatos celulares, demonstrando como sistemas autoreplicantes simples podem gerar complexidade biológica.",
                quiz: {
                    question: "O que caracteriza a arquitetura von Neumann utilizada na maioria dos computadores atuais?",
                    speechQuestion: "Desafio John von Neumann: O que caracteriza a arquitetura von Neumann utilizada na maioria dos computadores atuais?",
                    options: [
                        { text: "Separação física obrigatória entre circuitos de dados e instruções em mídias distintas.", correct: false },
                        { text: "Estrutura de CPU, memória principal e E/S onde programas e dados residem na mesma memória.", correct: true },
                        { text: "Processamento exclusivo baseado em válvulas termiônicas analógicas.", correct: false }
                    ]
                }
            },
            {
                id: 3,
                type: 'pioneer',
                category: "Claude Shannon",
                categoryClass: "bg-sky-50 text-sky-700 border border-sky-200/60",
                title: "Claude Shannon",
                subtitle: "1916 – 2001 • O Pai da Teoria da Informação",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
                era: "Bell Labs, 1948",
                synopsis: "Em 1937, Claude Shannon demonstrou em sua tese de mestrado no MIT que relés elétricos podiam resolver operações de álgebra booleana, fundando as bases teóricas de todos os circuitos digitais. Em 1948, Shannon publicou A Mathematical Theory of Communication, estabelecendo a palavra bit como a unidade fundamental de informação e definindo os limites matemáticos de velocidade e compressão de dados.",
                speech: "Em 1937, Claude Shannon demonstrou em sua tese de mestrado no MIT que relés elétricos podiam resolver operações de álgebra booleana, fundando as bases teóricas de todos os circuitos digitais. Em 1948, Shannon publicou A Mathematical Theory of Communication, estabelecendo a palavra bit como a unidade fundamental de informação e definindo os limites matemáticos de velocidade e compressão de dados.",
                quiz: {
                    question: "O que Claude Shannon definiu como a unidade fundamental de medição da informação em 1948?",
                    speechQuestion: "Desafio Claude Shannon: O que Claude Shannon definiu como a unidade fundamental de medição da informação em 1948?",
                    options: [
                        { text: "O Byte", correct: false },
                        { text: "O Bit", correct: true },
                        { text: "O Hertz", correct: false }
                    ]
                }
            },
            {
                id: 4,
                type: 'final',
                category: "Conclusão",
                categoryClass: "bg-indigo-50 text-indigo-700 border border-indigo-200/60",
                title: "Resultado do Tour",
                subtitle: "Resumo do Aprendizado",
                speech: "Parabéns por concluir a jornada pelo Museu Virtual dos Pioneiros da Computação. Veja o seu resultado no painel a seguir."
            }
        ];

        // GLOBAL APPLICATION STATE
        let currentSlideIndex = 0;
        let isPlaying = false;
        let isMuted = false;
        let activePhase = 'BIO'; // 'BIO' | 'QUIZ' | 'FINAL'
        let quizTimeLeft = 15;
        let quizTimerInterval = null;
        let quizAnswered = false;
        let userScores = [false, false, false]; // Slide 1, 2, 3
        let synth = window.speechSynthesis;
        let currentUtterance = null;
        let fallbackTimer = null;

        // DOM ELEMENTS
        const startOverlay = document.getElementById('startOverlay');
        const startBtn = document.getElementById('startBtn');
        const slideCard = document.getElementById('slideCard');
        const bioView = document.getElementById('bioView');
        const quizView = document.getElementById('quizView');
        const finalView = document.getElementById('finalView');

        // Bio View Elements
        const slideImage = document.getElementById('slideImage');
        const slideEraTag = document.getElementById('slideEraTag');
        const slideCategory = document.getElementById('slideCategory');
        const slideTitle = document.getElementById('slideTitle');
        const slideSubtitle = document.getElementById('slideSubtitle');
        const slideSynopsis = document.getElementById('slideSynopsis');
        const slideCounter = document.getElementById('slideCounter');
        const progressBar = document.getElementById('progressBar');
        const quizPromptBtnContainer = document.getElementById('quizPromptBtnContainer');
        const goToQuizBtn = document.getElementById('goToQuizBtn');

        // Quiz View Elements
        const quizPioneerName = document.getElementById('quizPioneerName');
        const quizQuestionText = document.getElementById('quizQuestionText');
        const quizOptionsContainer = document.getElementById('quizOptionsContainer');
        const timerSeconds = document.getElementById('timerSeconds');
        const quizTimerBar = document.getElementById('quizTimerBar');
        const quizFeedbackBanner = document.getElementById('quizFeedbackBanner');
        const feedbackIcon = document.getElementById('feedbackIcon');
        const feedbackText = document.getElementById('feedbackText');

        // Final View Elements
        const finalScoreDisplay = document.getElementById('finalScoreDisplay');
        const finalScoreMessage = document.getElementById('finalScoreMessage');
        const restartBtn = document.getElementById('restartBtn');

        // Controls Elements
        const dotsContainer = document.getElementById('dotsContainer');
        const playPauseBtn = document.getElementById('playPauseBtn');
        const playPauseIcon = document.getElementById('playPauseIcon');
        const playPauseText = document.getElementById('playPauseText');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const muteToggleBtn = document.getElementById('muteToggleBtn');
        const muteIcon = document.getElementById('muteIcon');
        const audioDot = document.getElementById('audioDot');
        const audioLabel = document.getElementById('audioLabel');

        // INITIALIZATION
        window.addEventListener('DOMContentLoaded', () => {
            renderDots();
            loadSlide(0, false);
        });

        // START BUTTON
        startBtn.addEventListener('click', () => {
            startOverlay.classList.add('opacity-0', 'pointer-events-none');
            setTimeout(() => startOverlay.classList.add('hidden'), 300);
            isPlaying = true;
            updatePlayPauseUI();
            loadSlide(0, true);
        });

        // RENDER CHIPS
        function renderDots() {
            dotsContainer.innerHTML = SLIDES.map((slide, idx) => `
                <button onclick="goToSlide(${idx})" class="px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    idx === currentSlideIndex
                    ? 'bg-brand-600 text-white shadow-soft-sm'
                    : 'bg-white text-soft-muted hover:text-soft-heading border border-slate-300/80'
                }">
                    ${idx === 0 ? 'Início' : idx === 4 ? 'Fim' : '0' + idx}
                </button>
            `).join('');
        }

        // LOAD SLIDE ENGINE
        function loadSlide(index, autoPlayAudio = true) {
            clearSpeechAndTimers();

            currentSlideIndex = index;
            const item = SLIDES[index];

            // Re-trigger Animation
            slideCard.classList.remove('slide-fade-in');
            void slideCard.offsetWidth;
            slideCard.classList.add('slide-fade-in');

            slideCounter.textContent = `${index + 1} / ${SLIDES.length}`;
            renderDots();
            progressBar.style.width = '0%';

            if (item.type === 'final') {
                activePhase = 'FINAL';
                showFinalView();
                if (isPlaying && autoPlayAudio) speakText(item.speech, onBioSpeechEnded);
            } else {
                activePhase = 'BIO';
                showBioView(item);
                if (isPlaying && autoPlayAudio) speakText(item.speech, onBioSpeechEnded);
            }
        }

        // SHOW BIO VIEW
        function showBioView(item) {
            bioView.classList.remove('hidden');
            quizView.classList.add('hidden');
            finalView.classList.add('hidden');

            slideImage.src = item.image;
            slideImage.alt = item.title;
            slideEraTag.textContent = item.era;
            slideCategory.textContent = item.category;
            slideCategory.className = `inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${item.categoryClass}`;
            slideTitle.textContent = item.title;
            slideSubtitle.textContent = item.subtitle;
            slideSynopsis.textContent = item.synopsis;

            if (item.type === 'pioneer') {
                quizPromptBtnContainer.classList.remove('hidden');
            } else {
                quizPromptBtnContainer.classList.add('hidden');
            }
        }

        // WHEN BIO SPEECH ENDS -> GO TO QUIZ OR NEXT SLIDE
        function onBioSpeechEnded() {
            if (!isPlaying) return;
            const item = SLIDES[currentSlideIndex];

            if (item.type === 'intro') {
                // Auto advance to next slide after intro
                setTimeout(() => {
                    if (isPlaying) loadSlide(currentSlideIndex + 1, true);
                }, 1000);
            } else if (item.type === 'pioneer') {
                // Auto switch to Quiz
                startQuizState();
            }
        }

        // START QUIZ STATE (15s TIMER & QUESTION SPEECH)
        function startQuizState() {
            const item = SLIDES[currentSlideIndex];
            if (!item.quiz) return;

            clearSpeechAndTimers();
            activePhase = 'QUIZ';

            bioView.classList.add('hidden');
            quizView.classList.remove('hidden');
            finalView.classList.add('hidden');

            quizPioneerName.textContent = `Pergunta sobre ${item.category}`;
            quizQuestionText.textContent = item.quiz.question;
            quizFeedbackBanner.classList.add('hidden');
            quizAnswered = false;

            // Render 3 Options
            quizOptionsContainer.innerHTML = item.quiz.options.map((opt, idx) => `
                <button onclick="handleAnswerClick(${idx})" class="quiz-option-btn w-full p-4 rounded-2xl bg-white border border-slate-200 hover:border-brand-500 hover:bg-brand-50/40 text-left text-xs sm:text-sm font-medium text-slate-700 transition-all flex items-center justify-between group shadow-soft-sm">
                    <span class="flex items-center gap-3">
                        <span class="w-7 h-7 rounded-xl bg-slate-100 group-hover:bg-brand-600 group-hover:text-white text-slate-500 font-bold text-xs flex items-center justify-center transition-colors shrink-0">
                            ${String.fromCharCode(65 + idx)}
                        </span>
                        <span class="leading-relaxed">${opt.text}</span>
                    </span>
                    <i class="fa-regular fa-circle text-slate-300 group-hover:text-brand-500 transition-colors shrink-0"></i>
                </button>
            `).join('');

            // Speak Quiz Question
            if (isPlaying) {
                speakText(item.quiz.speechQuestion);
            }

            // Start 15-Second Timer
            startQuizTimer();
        }

        // 15-SECOND COUNTDOWN TIMER
        function startQuizTimer() {
            quizTimeLeft = 15;
            timerSeconds.textContent = '15';
            quizTimerBar.style.width = '100%';
            quizTimerBar.classList.remove('bg-red-500');
            quizTimerBar.classList.add('bg-brand-600');

            clearInterval(quizTimerInterval);
            quizTimerInterval = setInterval(() => {
                quizTimeLeft--;
                timerSeconds.textContent = quizTimeLeft;
                const percentage = (quizTimeLeft / 15) * 100;
                quizTimerBar.style.width = `${percentage}%`;

                if (quizTimeLeft <= 5) {
                    quizTimerBar.classList.remove('bg-brand-600');
                    quizTimerBar.classList.add('bg-red-500');
                }

                if (quizTimeLeft <= 0) {
                    clearInterval(quizTimerInterval);
                    handleAnswerTimeout();
                }
            }, 1000);
        }

        // HANDLE ANSWER SELECTION
        function handleAnswerClick(selectedIndex) {
            if (quizAnswered) return;
            quizAnswered = true;
            clearInterval(quizTimerInterval);
            stopSpeech();

            const item = SLIDES[currentSlideIndex];
            const isCorrect = item.quiz.options[selectedIndex].correct;
            userScores[currentSlideIndex - 1] = isCorrect;

            highlightOptions(selectedIndex);
            showFeedback(isCorrect, false);

            // Auto-advance after 2 seconds
            setTimeout(() => {
                if (isPlaying) loadSlide(currentSlideIndex + 1, true);
            }, 2000);
        }

        // HANDLE 15s TIMEOUT
        function handleAnswerTimeout() {
            if (quizAnswered) return;
            quizAnswered = true;
            stopSpeech();

            userScores[currentSlideIndex - 1] = false;
            highlightOptions(-1); // Show correct answer in green
            showFeedback(false, true);

            // Auto-advance after 2 seconds
            setTimeout(() => {
                if (isPlaying) loadSlide(currentSlideIndex + 1, true);
            }, 2000);
        }

        // HIGHLIGHT CORRECT & INCORRECT OPTIONS
        function highlightOptions(selectedIndex) {
            const item = SLIDES[currentSlideIndex];
            const buttons = quizOptionsContainer.querySelectorAll('.quiz-option-btn');

            buttons.forEach((btn, idx) => {
                btn.disabled = true;
                btn.classList.remove('hover:border-brand-500', 'hover:bg-brand-50/40');

                const isThisCorrect = item.quiz.options[idx].correct;

                if (isThisCorrect) {
                    btn.classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-900');
                    btn.querySelector('i').className = 'fa-solid fa-circle-check text-emerald-600';
                } else if (idx === selectedIndex && !isThisCorrect) {
                    btn.classList.add('bg-red-50', 'border-red-400', 'text-red-900');
                    btn.querySelector('i').className = 'fa-solid fa-circle-xmark text-red-500';
                } else {
                    btn.classList.add('opacity-50');
                }
            });
        }

        // SHOW FEEDBACK BANNER
        function showFeedback(isCorrect, isTimeout) {
            quizFeedbackBanner.classList.remove('hidden', 'bg-emerald-50', 'text-emerald-800', 'bg-red-50', 'text-red-800', 'border-emerald-200', 'border-red-200');

            if (isCorrect) {
                quizFeedbackBanner.classList.add('bg-emerald-50', 'text-emerald-800', 'border', 'border-emerald-200');
                feedbackIcon.className = 'fa-solid fa-circle-check text-emerald-600';
                feedbackText.textContent = 'Resposta Correta! Excelente conhecimento.';
            } else if (isTimeout) {
                quizFeedbackBanner.classList.add('bg-red-50', 'text-red-800', 'border', 'border-red-200');
                feedbackIcon.className = 'fa-solid fa-clock text-red-600';
                feedbackText.textContent = 'Tempo Esgotado! Veja a resposta em destaque.';
            } else {
                quizFeedbackBanner.classList.add('bg-red-50', 'text-red-800', 'border', 'border-red-200');
                feedbackIcon.className = 'fa-solid fa-circle-xmark text-red-600';
                feedbackText.textContent = 'Resposta Incorreta. A opção verdadeira está em verde.';
            }
        }

        // SHOW FINAL SCORE SCREEN
        function showFinalView() {
            bioView.classList.add('hidden');
            quizView.classList.add('hidden');
            finalView.classList.remove('hidden');

            const score = userScores.filter(Boolean).length;
            finalScoreDisplay.textContent = score;

            if (score === 3) {
                finalScoreMessage.textContent = 'Perfeito! Você acertou todas as 3 perguntas.';
            } else if (score === 2) {
                finalScoreMessage.textContent = 'Muito bem! Você acertou 2 de 3 perguntas.';
            } else {
                finalScoreMessage.textContent = 'Bom esforço! Que tal reiniciar para revisar o acervo?';
            }
        }

        // WEB SPEECH API SYNTHESIS
        function speakText(text, onEndCallback = null) {
            stopSpeech();

            if (isMuted || !('speechSynthesis' in window)) {
                setAudioBadge(false, 'Mudo');
                if (onEndCallback) {
                    const duration = Math.max(3000, text.length * 50);
                    fallbackTimer = setTimeout(onEndCallback, duration);
                }
                return;
            }

            setAudioBadge(true, 'Reproduzindo');
            currentUtterance = new SpeechSynthesisUtterance(text);
            currentUtterance.lang = 'pt-BR';
            currentUtterance.rate = 0.95;

            // Pick Portuguese voice if available
            const voices = synth.getVoices();
            const ptVoice = voices.find(v => v.lang.includes('pt') || v.lang.includes('PT'));
            if (ptVoice) currentUtterance.voice = ptVoice;

            currentUtterance.onend = () => {
                setAudioBadge(false, 'Concluído');
                if (onEndCallback) onEndCallback();
            };

            currentUtterance.onerror = () => {
                setAudioBadge(false, 'Erro');
                if (onEndCallback) onEndCallback();
            };

            synth.speak(currentUtterance);
        }

        function stopSpeech() {
            if (synth) synth.cancel();
            if (fallbackTimer) clearTimeout(fallbackTimer);
            setAudioBadge(false, 'Parado');
        }

        function setAudioBadge(active, text) {
            audioLabel.textContent = text;
            if (active) {
                audioDot.className = 'w-2 h-2 rounded-full bg-emerald-500 animate-ping';
            } else {
                audioDot.className = 'w-2 h-2 rounded-full bg-slate-300';
            }
        }

        function clearSpeechAndTimers() {
            stopSpeech();
            clearInterval(quizTimerInterval);
        }

        // CONTROLS LOGIC
        function goToSlide(index) {
            loadSlide(index, isPlaying);
        }

        goToQuizBtn.addEventListener('click', () => {
            startQuizState();
        });

        playPauseBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            updatePlayPauseUI();
            if (isPlaying) {
                const item = SLIDES[currentSlideIndex];
                if (activePhase === 'BIO') speakText(item.speech, onBioSpeechEnded);
                else if (activePhase === 'QUIZ') speakText(item.quiz.speechQuestion);
            } else {
                clearSpeechAndTimers();
            }
        });

        function updatePlayPauseUI() {
            if (isPlaying) {
                playPauseIcon.className = 'fa-solid fa-pause text-xs';
                playPauseText.textContent = 'Pausar';
            } else {
                playPauseIcon.className = 'fa-solid fa-play text-xs';
                playPauseText.textContent = 'Reproduzir';
            }
        }

        prevBtn.addEventListener('click', () => {
            if (currentSlideIndex > 0) loadSlide(currentSlideIndex - 1, isPlaying);
        });

        nextBtn.addEventListener('click', () => {
            if (currentSlideIndex < SLIDES.length - 1) loadSlide(currentSlideIndex + 1, isPlaying);
        });

        muteToggleBtn.addEventListener('click', () => {
            isMuted = !isMuted;
            if (isMuted) {
                muteIcon.className = 'fa-solid fa-volume-xmark text-xs text-red-500';
                stopSpeech();
            } else {
                muteIcon.className = 'fa-solid fa-volume-high text-xs';
            }
        });

        restartBtn.addEventListener('click', () => {
            userScores = [false, false, false];
            loadSlide(0, true);
        });
