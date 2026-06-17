const frases1 = ["Maybe I shouldn't try to be perfect", "I confess, I'm obsessed with the surface"];

const frases2 = ["In the end"];

const frases3 = ["if I fall or if I get it all", "I just hope that it's worth it"];

const frases4 = ["Last year I fell flat on my face", "And last month I knew somethin' should change",
    "Last week I started over again", "Ask me and I'll tell you how I've been", "Mhm, don't get me started"
];

const frases5 = ["You've got me nervous to speak", "So I just won't say anything at all", "I've got an urge to release",
    "And you keep tellin' me to hold on", "You've got me nervous to move", "So I just won't give anything to you", 
    "You've got me turnin' all around", "To be who you need me to"];

const frases6 = ["Should I be quiet?", "Come on, be silent", "You know I'm tryin'", "So don't say nothin'", "Tell me you trust me and", "Kiss me and hug me, yeah",
    "I would do anything for ya", "You just gotta love me and"];

const frases7 = ["I got an itch in my throat", "I don't know which way to go", "I keep on switchin', I know", "I need a different approach",
    "It's all because I wanna", "Show you that I'm so capable"];

const frases8 = ["Hush, baby, don't you say another word", "Hush, baby, don't you say another word, be quiet", "Hush, baby, don't you say another word",
    "Hush, baby, when you do, I just get hurt"];

const frases9 = ["Come on, baby, don't you hurt me anymore", "I'm not the same way that I was before", "I got goosebumps all over me"];

const frases10 = ["When you're around, hard for me to breathe"];

const frases11 =["Come on, baby, don't you do that anymore", "It's not like the days, at night, I feel so short",
    "My nerves, they give me a sign", "Tell me I'm not fine, mhm"];

const frases12 = ["You've got me nervous to speak", "So I just won't say anything at all", "I've got an urge to release",
    "And you keep tellin' me to hold on"];

const frases13 = ["You've got me nervous to move", "So I just won't give anything to you", "You've got me turnin' all around", "To be who you need me to"];

const frases14 = ["Gracias por escuchar mi proyecto :D"];

const mayusculas1 = frases1.map(frase => frase.toUpperCase());
const mayusculas2 = frases2.map(frase => frase.toUpperCase());
const mayusculas3 = frases3.map(frase => frase.toUpperCase());
const mayusculas4 = frases4.map(frase => frase.toUpperCase());
const mayusculas5 = frases5.map(frase => frase.toUpperCase());
const mayusculas6 = frases6.map(frase => frase.toUpperCase());
const mayusculas7 = frases7.map(frase => frase.toUpperCase());
const mayusculas8 = frases8.map(frase => frase.toUpperCase());
const mayusculas9 = frases9.map(frase => frase.toUpperCase());
const mayusculas10 = frases10.map(frase => frase.toUpperCase());
const mayusculas11 = frases11.map(frase => frase.toUpperCase());
const mayusculas12 = frases12.map(frase => frase.toUpperCase());
const mayusculas13 = frases13.map(frase => frase.toUpperCase());
const mayusculas14 = frases14.map(frase => frase.toUpperCase());

function animarTexto(elemento, texto) {
    elemento.textContent = texto;
    elemento.style.animation = "none";
    elemento.offsetHeight; // truco para reiniciar
    elemento.style.animation = "fadeIn 0.5s ease-in-out";
}

function reiniciar(){
    audio.pause();
    location.reload();
}

function iniciarParpadeo() {
    document.body.classList.add("parpadeo-activo");
}

function detenerParpadeo() {
    document.body.classList.remove("parpadeo-activo");
}

let pausado = false;
const intervalos = [];
let animacionLoop = null;
const eventosYaEjecutados = new Set(); // Para rastrear qué eventos ya se ejecutaron
 
// Definir todos los eventos con su tiempo y función
const eventos = [
    {
        id: 'video',
        tiempo: 1.5,
        funcion: () => {
            const videofondo = document.getElementById("video-fondo");
            videofondo.classList.add("visible");
        }
    },
    {
        id: 'frases1',
        tiempo: 1.9,
        funcion: () => {
            let letra = 0;
            animarTexto(document.getElementById("todo"), mayusculas1[letra]);
            letra++;
 
            const intervalo1 = setInterval(() => {
                if (pausado) return;
                if (letra >= mayusculas1.length) {
                    clearInterval(intervalo1);
                    return;
                }
                animarTexto(document.getElementById("todo"), mayusculas1[letra]);
                letra++;
            }, 3200);
            
            intervalos.push(intervalo1);
        }
    },
    {
        id: 'frases2',
        tiempo: 10,
        funcion: () => {
            let letra2 = 0;
            animarTexto(document.getElementById("todo"), mayusculas2[letra2]);
            letra2++;
 
            const intervalo2 = setInterval(() => {
                if (pausado) return;
                if (letra2 >= mayusculas2.length) {
                    clearInterval(intervalo2);
                    return;
                }
                animarTexto(document.getElementById("todo"), mayusculas2[letra2]);
                letra2++;
            }, 3000);
            
            intervalos.push(intervalo2);
        }
    },
    {
        id: 'frases3',
        tiempo: 12,
        funcion: () => {
            let letra3 = 0;
            animarTexto(document.getElementById("todo"), mayusculas3[letra3]);
            letra3++;
 
            const intervalo3 = setInterval(() => {
                if (pausado) return;
                if (letra3 >= mayusculas3.length) {
                    clearInterval(intervalo3);
                    return;
                }
                animarTexto(document.getElementById("todo"), mayusculas3[letra3]);
                letra3++;
            }, 2800);
            
            intervalos.push(intervalo3);
        }
    },
    {
        id: 'frases4',
        tiempo: 20,
        funcion: () => {
            let letra4 = 0;
            animarTexto(document.getElementById("todo"), mayusculas4[letra4]);
            letra4++;
 
            const intervalo4 = setInterval(() => {
                if (pausado) return;
                if (letra4 >= mayusculas4.length) {
                    clearInterval(intervalo4);
                    return;
                }
                animarTexto(document.getElementById("todo"), mayusculas4[letra4]);
                letra4++;
            }, 4000);
            
            intervalos.push(intervalo4);
        }
    },
    {
        id: 'frases5',
        tiempo: 38,
        funcion: () => {
            let letra5 = 0;
            animarTexto(document.getElementById("todo"), mayusculas5[letra5]);
            letra5++;
 
            const intervalo5 = setInterval(() => {
                if (pausado) return;
                if (letra5 >= mayusculas5.length) {
                    clearInterval(intervalo5);
                    return;
                }
                animarTexto(document.getElementById("todo"), mayusculas5[letra5]);
                letra5++;
            }, 4000);
            
            intervalos.push(intervalo5);
        }
    },
    {
        id: 'frases6',
        tiempo: 69,
        funcion: () => {
            let letra6 = 0;
            animarTexto(document.getElementById("todo"), mayusculas6[letra6]);
            letra6++;
 
            const intervalo6 = setInterval(() => {
                if (pausado) return;
                if (letra6 >= mayusculas6.length) {
                    clearInterval(intervalo6);
                    return;
                }
                animarTexto(document.getElementById("todo"), mayusculas6[letra6]);
                letra6++;
            }, 2100);
            
            intervalos.push(intervalo6);
        }
    },
    {
        id: 'frases7',
        tiempo: 85,
        funcion: () => {
            let letra7 = 0;
            animarTexto(document.getElementById("todo"), mayusculas7[letra7]);
            letra7++;
 
            const intervalo7 = setInterval(() => {
                if (pausado) return;
                if (letra7 >= mayusculas7.length) {
                    clearInterval(intervalo7);
                    return;
                }
                animarTexto(document.getElementById("todo"), mayusculas7[letra7]);
                letra7++;
            }, 2000);
            
            intervalos.push(intervalo7);
        }
    },
    {
        id: 'frases5-2',
        tiempo: 102,
        funcion: () => {
            let letra5 = 0;
            animarTexto(document.getElementById("todo"), mayusculas5[letra5]);
            letra5++;
 
            const intervalo5 = setInterval(() => {
                if (pausado) return;
                if (letra5 >= mayusculas5.length) {
                    clearInterval(intervalo5);
                    return;
                }
                animarTexto(document.getElementById("todo"), mayusculas5[letra5]);
                letra5++;
            }, 4000);
            
            intervalos.push(intervalo5);
        }
    },
    {
        id: 'frases8',
        tiempo: 133,
        funcion: () => {
            let letra8 = 0;
            animarTexto(document.getElementById("todo"), mayusculas8[letra8]);
            letra8++;
 
            const intervalo8 = setInterval(() => {
                if (pausado) return;
                if (letra8 >= mayusculas8.length) {
                    clearInterval(intervalo8);
                    return;
                }
                animarTexto(document.getElementById("todo"), mayusculas8[letra8]);
                letra8++;
            }, 4000);
            
            intervalos.push(intervalo8);
        }
    },
    {
        id: 'parpadeo-inicio',
        tiempo: 146,
        funcion: () => {
            iniciarParpadeo();
        }
    },
    {
        id: 'parpadeo-fin',
        tiempo: 148,
        funcion: () => {
            detenerParpadeo();
        }
    },
    {
        id: 'frases9',
        tiempo: 149,
        funcion: () => {
            let letra9 = 0;
            animarTexto(document.getElementById("todo"), mayusculas9[letra9]);
            letra9++;
 
            const intervalo9 = setInterval(() => {
                if (pausado) return;
                if (letra9 >= mayusculas9.length) {
                    clearInterval(intervalo9);
                    return;
                }
                animarTexto(document.getElementById("todo"), mayusculas9[letra9]);
                letra9++;
            }, 4000);
            
            intervalos.push(intervalo9);
        }
    },
    {
        id: 'frases10',
        tiempo: 162,
        funcion: () => {
            let letra10 = 0;
            animarTexto(document.getElementById("todo"), mayusculas10[letra10]);
            letra10++;
 
            const intervalo10 = setInterval(() => {
                if (pausado) return;
                if (letra10 >= mayusculas10.length) {
                    clearInterval(intervalo10);
                    return;
                }
                animarTexto(document.getElementById("todo"), mayusculas10[letra10]);
                letra10++;
            }, 4000);
            
            intervalos.push(intervalo10);
        }
    },
    {
        id: 'frases11',
        tiempo: 166,
        funcion: () => {
            let letra11 = 0;
            animarTexto(document.getElementById("todo"), mayusculas11[letra11]);
            letra11++;
 
            const intervalo11 = setInterval(() => {
                if (pausado) return;
                if (letra11 >= mayusculas11.length) {
                    clearInterval(intervalo11);
                    return;
                }
                animarTexto(document.getElementById("todo"), mayusculas11[letra11]);
                letra11++;
            }, 4000);
            
            intervalos.push(intervalo11);
        }
    },
    {
        id: 'frases12',
        tiempo: 182,
        funcion: () => {
            let letra12 = 0;
            animarTexto(document.getElementById("todo"), mayusculas12[letra12]);
            letra12++;
 
            const intervalo12 = setInterval(() => {
                if (pausado) return;
                if (letra12 >= mayusculas12.length) {
                    clearInterval(intervalo12);
                    return;
                }
                animarTexto(document.getElementById("todo"), mayusculas12[letra12]);
                letra12++;
            }, 4100);
            
            intervalos.push(intervalo12);
        }
    },
    {
        id: 'frases13',
        tiempo: 198,
        funcion: () => {
            let letra13 = 0;
            animarTexto(document.getElementById("todo"), mayusculas13[letra13]);
            letra13++;
 
            const intervalo13 = setInterval(() => {
                if (pausado) return;
                if (letra13 >= mayusculas13.length) {
                    clearInterval(intervalo13);
                    return;
                }
                animarTexto(document.getElementById("todo"), mayusculas13[letra13]);
                letra13++;
            }, 4100);
            
            intervalos.push(intervalo13);
        }
    },
    {
        id: 'frases8-2',
        tiempo: 213,
        funcion: () => {
            let letra8 = 0;
            animarTexto(document.getElementById("todo"), mayusculas8[letra8]);
            letra8++;
 
            const intervalo8 = setInterval(() => {
                if (pausado) return;
                if (letra8 >= mayusculas8.length) {
                    clearInterval(intervalo8);
                    return;
                }
                animarTexto(document.getElementById("todo"), mayusculas8[letra8]);
                letra8++;
            }, 4000);
            
            intervalos.push(intervalo8);
        }
    },
    {
        id: 'frases14',
        tiempo: 229,
        funcion: () => {
            let letra14 = 0;
            animarTexto(document.getElementById("todo"), mayusculas14[letra14]);
            letra14++;
 
            const intervalo14 = setInterval(() => {
                if (pausado) return;
                if (letra14 >= mayusculas14.length) {
                    clearInterval(intervalo14);
                    document.getElementById("todo").textContent = "";
 
                    setTimeout(() => {
                        animarTexto(document.getElementById("ultimaparte"), mayusculas14[0]);
                        setTimeout(() => {
                            document.getElementById("ultimaparte").textContent = "";
                        }, 7500);
                    }, 500);
                    return;
                }
                animarTexto(document.getElementById("todo"), mayusculas14[letra14]);
                letra14++;
            }, 4000);
            
            intervalos.push(intervalo14);
        }
    }
];
 
// Loop de sincronización basado en el tiempo actual del audio
function sincronizarConAudio(audio) {
    const tiempoActual = audio.currentTime;
 
    eventos.forEach(evento => {
        // Si el evento aún no se ha ejecutado y ya pasó su tiempo
        if (!eventosYaEjecutados.has(evento.id) && tiempoActual >= evento.tiempo) {
            evento.funcion();
            eventosYaEjecutados.add(evento.id);
        }
    });
 
    // Continuar el loop si el audio sigue reproduciéndose
    if (!audio.paused) {
        animacionLoop = requestAnimationFrame(() => sincronizarConAudio(audio));
    }
}
 
function iniciar(){
    const caja = document.getElementById("caja");
    const pausa = document.getElementById("pausa");
    const reanudar = document.getElementById("reanudar");
    const audio = document.getElementById("audio");
    
    pausado = false;
    eventosYaEjecutados.clear();
    intervalos.forEach(id => clearInterval(id));
    intervalos.length = 0;
 
    audio.addEventListener("ended", () => {
        document.getElementById("reinicio").style.display = "block";
        document.getElementById("video-fondo").classList.add("none");
        caja.classList.add("ocultar");
        if (animacionLoop) {
            cancelAnimationFrame(animacionLoop);
        }
    }, { once: true });
 
    document.getElementById("inicio").style.display = "none";
    caja.classList.add("mostrar");
    audio.play();
 
    // Iniciar el loop de sincronización
    sincronizarConAudio(audio);
 
    // ===== EVENTOS PAUSA/REANUDAR =====
    pausa.addEventListener('click', () => {
        pausado = true;
        audio.pause();
        if (animacionLoop) {
            cancelAnimationFrame(animacionLoop);
        }
        pausa.style.display = "none";
        reanudar.style.display = "block";
        console.log("Pausado en:", audio.currentTime);
    });
 
    reanudar.addEventListener('click', () => {
        pausado = false;
        audio.play();
        // Reiniciar el loop de sincronización
        sincronizarConAudio(audio);
        pausa.style.display = "block";
        reanudar.style.display = "none";
        console.log("Reanudando desde:", audio.currentTime);
    });
}
 
function reiniciar(){
    const audio = document.getElementById("audio");
    audio.pause();
    pausado = false;
    eventosYaEjecutados.clear();
    intervalos.forEach(id => clearInterval(id));
    intervalos.length = 0;
    if (animacionLoop) {
        cancelAnimationFrame(animacionLoop);
    }
    location.reload();
}