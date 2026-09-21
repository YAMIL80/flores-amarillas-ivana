const contenedorFlores = document.getElementById("contenedorFlores");

const modal = document.getElementById("modal");
const tituloModal = document.getElementById("tituloModal");
const subtituloModal = document.getElementById("subtituloModal");
const textoModal = document.getElementById("textoModal");
const imagenModal = document.getElementById("imagenModal");
const avisoImagen = document.getElementById("avisoImagen");
const videoModal = document.getElementById("videoModal");
const flechaAnterior = document.getElementById("flechaAnterior");
const flechaSiguiente = document.getElementById("flechaSiguiente");
const contadorRecuerdos = document.getElementById("contadorRecuerdos");
const botonVerFoto = document.getElementById("botonVerFoto");
const modalVista = document.getElementById("modalVista");
const imagenVista = document.getElementById("imagenVista");
const videoVista = document.getElementById("videoVista");
const cerrarVista = document.getElementById("cerrarVista");
const bloqueAudio = document.getElementById("bloqueAudio");
const audioDedicado = document.getElementById("audioDedicado");


const botonNah = document.getElementById("botonNah");
const botonGracias = document.getElementById("botonGracias");

const contadorNah = document.getElementById("contadorNah");
const contadorGracias = document.getElementById("contadorGracias");

/* Fotos y video de los recuerdos */
const recuerdos = {
    0: [{ tipo: "imagen", archivo: "Imagenes/Girasol1.png" }],

    1: [
        { tipo: "imagen", archivo: "Imagenes/Girasol2.png" }
    ],

  2: [
    { tipo: "imagen", archivo: "Imagenes/Girasol3.png" }
  ],

  3: [
    { tipo: "imagen", archivo: "Imagenes/Girasol4.png" }
  ],

  4: [
    { tipo: "imagen", archivo: "Imagenes/Girasol5.png" }
  ],

  5: [
    { tipo: "imagen", archivo: "Imagenes/Girasol6.png" }
  ],

  6: [
    { tipo: "imagen", archivo: "Imagenes/Girasol7.png" }
    ],

    /* Girasol número 8: álbum especial de Yamil */
    7: [
        { tipo: "imagen", archivo: "Imagenes/Girasol8.png" },
        { tipo: "video", archivo: "Imagenes/Video8.mp4" },
        { tipo: "imagen", archivo: "Imagenes/Tercero8.png" },
        { tipo: "imagen", archivo: "Imagenes/Cuarto8.png" },
        { tipo: "imagen", archivo: "Imagenes/Quinto8.png", zoom: true }
    ],

    8: [{ tipo: "imagen", archivo: "Imagenes/Girasol9.png" }],

    9: [{ tipo: "imagen", archivo: "Imagenes/Girasol10.png" }],

    10: [{ tipo: "imagen", archivo: "Imagenes/Girasol11.png" }],

    11: [{ tipo: "imagen", archivo: "Imagenes/Girasol12.png" }],

    12: [{ tipo: "imagen", archivo: "Imagenes/Girasol13.png" }],

    13: [{ tipo: "imagen", archivo: "Imagenes/Girasol14.png" }],

    14: [{ tipo: "imagen", archivo: "Imagenes/Girasol15.png" }],

    15: [
        { tipo: "imagen", archivo: "Imagenes/Girasol16.png" },
        { tipo: "imagen", archivo: "Imagenes/G1rasol16.png" }
    ],
    
    16: [
        { tipo: "imagen", archivo: "Imagenes/Girasol17.png" },
        { tipo: "imagen", archivo: "Imagenes/Comida1.png" },
        { tipo: "imagen", archivo: "Imagenes/Comida2.png" },
        { tipo: "imagen", archivo: "Imagenes/Comida3.png" },
        { tipo: "imagen", archivo: "Imagenes/Comida4.png" },
        { tipo: "imagen", archivo: "Imagenes/Comida5.png" },
        { tipo: "imagen", archivo: "Imagenes/Comida6.png" },
        { tipo: "imagen", archivo: "Imagenes/Comida7.png" }
    ],

      17: [
    { tipo: "imagen", archivo: "Imagenes/Girasol18.png" },
    { tipo: "imagen", archivo: "Imagenes/imagen1.png" },
    { tipo: "imagen", archivo: "Imagenes/imagen2.png" }
  ],
    18: [
    { tipo: "imagen", archivo: "Imagenes/Girasol19.png" }
  ],
    19: [
    { tipo: "imagen", archivo: "Imagenes/Girasol20.png" }
  ]

};

let indiceRecuerdoActual = 0;

/* Muestra foto o video dentro de la ventana */
function mostrarRecuerdoActual() {
  const lista = recuerdos[girasolSeleccionado];
 if (bloqueAudio && audioDedicado) {
  let archivoAudio = "";

  /* Girasol 18 */
  if (girasolSeleccionado === 17) {
    archivoAudio = "Imagenes/RISK.mp3";
  }

  /* Girasol 20: El presente */
  if (girasolSeleccionado === 19) {
    archivoAudio = "Imagenes/Meant.mp3";
  }

  if (archivoAudio !== "") {
    bloqueAudio.style.display = "block";

    if (!audioDedicado.src.includes(archivoAudio)) {
      audioDedicado.src = archivoAudio;
      audioDedicado.load();
    }
  } else {
    audioDedicado.pause();
    bloqueAudio.style.display = "none";
  }
}

  imagenModal.style.display = "none";
  videoModal.style.display = "none";
  videoModal.pause();
  videoModal.removeAttribute("src");
  avisoImagen.style.display = "none";

  if (!lista || lista.length === 0) {
    avisoImagen.style.display = "inline";
    flechaAnterior.style.display = "none";
    flechaSiguiente.style.display = "none";
    contadorRecuerdos.textContent = "";
    return;
  }

    const recuerdoActual = lista[indiceRecuerdoActual];
    botonVerFoto.style.display = "inline-block";

    if (recuerdoActual.tipo === "video") {
        botonVerFoto.textContent = "Ver video";
    } else {
        botonVerFoto.textContent = "Ver foto";
    }

    imagenModal.classList.remove("recuerdo-con-zoom");
    if (recuerdoActual.tipo === "imagen") {
    imagenModal.src = recuerdoActual.archivo;
    imagenModal.alt = "Recuerdo del girasol " + (girasolSeleccionado + 1);
        imagenModal.style.display = "block";
        if (recuerdoActual.zoom) {
            imagenModal.classList.add("recuerdo-con-zoom");
        }
  } else {
    videoModal.src = recuerdoActual.archivo;
    videoModal.style.display = "block";
    videoModal.load();
  }

  if (lista.length > 1) {
    flechaAnterior.style.display = "block";
    flechaSiguiente.style.display = "block";
    contadorRecuerdos.textContent =
      (indiceRecuerdoActual + 1) + " de " + lista.length;
  } else {
    flechaAnterior.style.display = "none";
    flechaSiguiente.style.display = "none";
    contadorRecuerdos.textContent = "";
  }
}

flechaAnterior.addEventListener("click", function () {
  const lista = recuerdos[girasolSeleccionado];

  indiceRecuerdoActual =
    (indiceRecuerdoActual - 1 + lista.length) % lista.length;

  mostrarRecuerdoActual();
});

flechaSiguiente.addEventListener("click", function () {
  const lista = recuerdos[girasolSeleccionado];

  indiceRecuerdoActual =
    (indiceRecuerdoActual + 1) % lista.length;

  mostrarRecuerdoActual();
});

/* Posición de los 20 girasoles */
const posiciones = [
  [11, 70], [22, 67], [33, 69], [43, 65],
  [57, 65], [67, 69], [78, 67], [89, 70],

  [19, 53], [30, 51], [42, 50], [55, 51],
  [68, 51], [81, 53],

  [27, 36], [40, 34], [53, 35], [66, 34],
  [77, 36],

  [52, 14]
];

let girasolesAbiertos = [];
let girasolSeleccionado = 0;
let cantidadNah = 0;
let cantidadGracias = 0;

let girasolPrincipal;
let principalDesbloqueado = false;

/* Crea los 20 girasoles */
posiciones.forEach(function (posicion, indice) {
  const girasol = document.createElement("button");

  girasol.className = "flor";
  girasol.style.left = posicion[0] + "%";
  girasol.style.top = posicion[1] + "%";

  girasol.innerHTML = "<i></i><i></i><i></i><i></i><i></i><b></b>";
    /* Girasol 1: pista para iniciar el recorrido */
  if (indice === 0) {
    girasol.classList.add("flor-inicio");
    girasol.title = "Empieza por aquí: Girasol número 1";

    girasol.innerHTML += `
      <span class="pista-inicio">Empieza aquí<br>↘</span>
    `;
  }

  /* Girasol 8: Yamil, con mejillas */
  if (indice === 7) {
    girasol.classList.add("girasol-yamil");

    girasol.innerHTML += `
      <span class="mejilla mejilla-izquierda"></span>
      <span class="mejilla mejilla-derecha"></span>
    `;
  }

  /* Girasol 20: el final */
  if (indice === 19) {
    girasol.classList.add("flor-principal");
    girasol.classList.add("flor-bloqueado");
    girasol.title = "Primero debes abrir los otros 19 girasoles";

    girasolPrincipal = girasol;
  }

girasol.addEventListener("click", function () {
  if (indice === 19 && !principalDesbloqueado) {
    return;
  }

    girasolSeleccionado = indice;
      indiceRecuerdoActual = 0;
    if (indice === 0) {
  const pistaInicio = girasol.querySelector(".pista-inicio");

  if (pistaInicio) {
    pistaInicio.remove();
  }
}
    indiceRecuerdoActual = 0;

    /* Girasol 1: carta de introducción */
    if (indice === 0) {
      tituloModal.textContent = "Una carta para ti";
      subtituloModal.textContent = "Girasol número 1";

      textoModal.innerHTML = `
        Aquí comienza este pequeño jardín hecho para ti, Ivanita. 🌻
        <br><br>
        Detrás de cada girasol hay algo que quise guardar: momentos, fotos, risas y palabras que no quería que se perdieran.
        <br><br>
        Recórrelos todos con calma… al final te espera uno muy especial.
      `;



     /* Girasol 3: la invitada que se robó la noche */
    } else if (indice === 2) {
      tituloModal.textContent = "La invitada que se robó la noche";
      subtituloModal.textContent = "Girasol número 3";

      textoModal.innerHTML = `
        Hay fotos que guardan un momento, y otras que además dejan claro quién fue la persona que se robó toda la atención, No crees Ivanita??
        <br><br>
        Ese día estabas preciosa, tan arreglada y tan desprendida que, siendo sincero, parecía que la invitada había venido a competir con la misma boda. Qué ofensa para los novios, porque con esa presencia era imposible no mirarte.
        <br><br>
        ¿Te acuerdas de cómo te sentías ese día? Porque yo, al ver esta foto, solo pienso que había una persona brillando más que todas las decoraciones de la fiesta.
      `;
    

    /* Girasol 2: la primera salida */

    } else if (indice === 1) {
      tituloModal.textContent = "La primera salida";
      subtituloModal.textContent = "Girasol número 2";

      textoModal.innerHTML = `
        ¿Recuerdas nuestra primera salida?
        <br><br>
        Fuimos a ver <em>Michael</em>, caminamos por el Jirón de la Unión y terminamos cenando juntos en Starbucks. Quizá para alguien más habría sido solo una tarde cualquiera, pero para mí fue de esas que se quedan guardadas con más fuerza de la que uno espera.
        <br><br>
        ¿Te acuerdas de la caminata, de lo que conversamos o de cómo terminamos llegando ahí? A veces me pregunto qué pensabas tú de todo ese día.
        <br><br>
        Fue una salida sencilla, pero tuvo algo especial: era el inicio de compartir momentos fuera de las clases, de conocernos un poquito más y de hacer que una tarde común se volviera un recuerdo bonito.
        <br><br>
        <strong>Esta foto siempre me lleva de vuelta a ese día. Y tú, ¿qué es lo primero que recuerdas cuando la ves?</strong>
      `;
        /* Girasol 4: el regalo */
    } else if (indice === 3) {
      tituloModal.textContent = "El regalo";
      subtituloModal.textContent = "Girasol número 4";

      textoModal.innerHTML = `
        Hay recuerdos que se quedan no por el regalo en sí, sino por la reacción de la persona que lo recibe.
        <br><br>
        Al inicio no querías aceptarlo y, justamente por eso, sentí todavía más que te lo merecías. Recuerdo tu negación, tu reacción al leer la carta y, sobre todo, esa sonrisa tan bonita que apareció poco a poco.
        <br><br>
        Te veías feliz, como una niña viendo un regalo que no esperaba. Y en ese instante mi corazón estaba por estallar, porque no había nada mejor que verte así.
        <br><br>
        <strong>Le agradezco a Dios que te haya gustado y que al final lo hayas aceptado. Porque más allá de cualquier cosa, ese día me dejó una imagen tuya que sigo guardando con mucho cariño.</strong>
      `;

          /* Girasol 5: entre torres y apuntes */
    } else if (indice === 4) {
      tituloModal.textContent = "Entre torres y apuntes";
      subtituloModal.textContent = "Girasol número 5";

      textoModal.innerHTML = `
        Ese día recorrimos las torres de la UTP, piso por piso, contando computadoras e investigando juntos. Podía parecer una tarea más, pero contigo terminó siendo uno de esos recuerdos que se sienten distintos.
        <br><br>
        Ahí pude ver lo responsable, aplicada y motivadora que puedes llegar a ser cuando te propones algo. Como compañera eras increíble; y como amiga, también.
        <br><br>
        ¿Te acuerdas de cuánto caminamos buscando cada salón y anotando todo? A mí me quedó claro que hasta una investigación de computadoras podía volverse especial si era contigo.
        <br><br>
        <strong>Y, siendo sincero, en todas las fotos de ese día sales hermosa. ¿Acaso existe alguna en la que no lo estés?</strong>
      `;
      
          /* Girasol 6: tus ojos no mienten */
    } else if (indice === 5) {
      tituloModal.textContent = "Ojos que no mienten";
      subtituloModal.textContent = "Girasol número 6";

      textoModal.innerHTML = `
        Esta foto parece simple, pero a mí me basta mirar tus ojitos para entender por qué terminó siendo tan especial.
        <br><br>
        Hay algo en tu mirada que siempre me deja pensando. No sé si es la calma que transmite, la forma en que brilla o esa manera tan tuya de mirar sin decir demasiado. Pero tus ojos no mienten: en ellos se nota cuando estás feliz, pensativa, cansada o simplemente siendo tú.
        <br><br>
        Quizá tú no te des cuenta, pero esa mirada tiene algo que ilumina mis días. Me ha acompañado en recuerdos, conversaciones y momentos que todavía guardo con cariño.
        <br><br>
        <strong>Y si alguna vez dudas de lo bonita que eres, recuerda esto: hay miradas que se ven, y otras que se quedan viviendo en la memoria. La tuya hizo las dos cosas.</strong>
      `;

          /* Girasol 7: el cierre de la misión */
    } else if (indice === 6) {
      tituloModal.textContent = "El cierre de la misión";
      subtituloModal.textContent = "Girasol número 7";

      textoModal.innerHTML = `
        Después de recorrer torres, contar computadoras y cumplir nuestra gran misión de investigación, por fin llegaba el cierre de la noche.
        <br><br>
        Y ahí estabas tú, bajando las escaleras como si acabaras de completar una aventura enorme. No sé por qué, pero esta foto siempre me causa gracia: pareces una niña feliz de haber cumplido su cometido y de poder irse tranquila después de tanto caminar.
        <br><br>
        ¿Te acuerdas de ese día? De todo lo que recorrimos, de lo cansados que terminamos y de cómo una tarea cualquiera se convirtió en una pequeña aventura.
        <br><br>
        <strong>Yo solo recuerdo que, al verte así, me daban ganas de abrazarte por detrás y decirte que lo habías hecho increíble. Porque incluso al final de un día largo, seguías teniendo esa forma tan bonita de hacer que todo se sintiera más especial.</strong>
      `;
    
          /* Girasol 9: la recompensa */
    } else if (indice === 8) {
      tituloModal.textContent = "La recompensa";
      subtituloModal.textContent = "Girasol número 9";

      textoModal.innerHTML = `
        Después del examen final de Redes llegó esa sensación que cuesta explicar: por fin habíamos terminado algo grande, pesado y que nos tuvo preocupados durante tanto tiempo.
        <br><br>
        Los dos remontamos juntos y conseguimos la mejor nota del salón. ¿Te acuerdas de esa felicidad? En esta foto se te nota el alivio, la alegría y esa calma de saber que todo el esfuerzo había valido la pena.
        <br><br>
        Y claro, después de tanto estrés, venía una recompensa merecida: un buen almuerzo. Pero, siendo sincero, yo me sentía todavía más feliz por otra razón. Tenía al frente a una persona increíble, compartiendo comida deliciosa y celebrando conmigo un logro que los dos habíamos construido.
        <br><br>
        <strong>A veces pienso que días como este deberían poder repetirse muchas más veces. Porque no fue solo aprobar un examen; fue una pequeña victoria compartida que todavía recuerdo con una sonrisa.</strong>
      `;
    

          /* Girasol 10: la llamada */
    } else if (indice === 9) {
      tituloModal.textContent = "La llamada";
      subtituloModal.textContent = "Girasol número 10";

      textoModal.innerHTML = `
        Esta captura guarda una llamada de dos horas, pero en realidad me recuerda muchas más.
        <br><br>
        Me recuerda esas conversaciones en las que el tiempo pasaba sin que nos diéramos cuenta, las risas, los silencios cómodos y esos días en que terminábamos hablando casi hasta la madrugada. Siempre disfruté escucharte, saber cómo estabas y sentir que, aunque cada uno estuviera en su lugar, por un rato estábamos cerca.
        <br><br>
        ¿Tú también recuerdas alguna llamada que se te haya quedado guardada?
        <br><br>
        A veces me pregunto si habrá una próxima, una conversación larga sin mirar la hora, una de esas que terminan haciendo más bonito un día cualquiera. Y también me da un poco de miedo pensar demasiado en el futuro, porque no quiero convertir un recuerdo bonito en algo triste antes de tiempo.
        <br><br>
        <strong>Por ahora prefiero quedarme con esto: cada llamada contigo tuvo algo especial, y todas dejaron una pequeña huella en mí.</strong>
      `;
    

          /* Girasol 11: te veo por todos lados */
    } else if (indice === 10) {
      tituloModal.textContent = "Te veo por todos lados";
      subtituloModal.textContent = "Girasol número 11";

      textoModal.innerHTML = `
        Últimamente hay días en los que te encuentro en lugares donde no estás.
        <br><br>
        No porque realmente seas tú, sino porque mi mente se acostumbró tanto a pensarte que, por un segundo, una silueta, una forma de caminar o un simple reflejo me hace creer que eres tú. Me pasó hace poco al tomar un carro: te vi de espaldas y, por un instante, sentí que eras tú. Me acerqué, pero no. No eras tú.
        <br><br>
        Y quizá eso es lo que más me duele: ninguna persona tiene tu manera de estar, tu brillo ni esa presencia que se quedó tan marcada en mí.
        <br><br>
        Estas batallas dentro de mi cabeza a veces me cansan y me marean, porque intento seguir con normalidad, pero aparecen pequeñas cosas que me llevan de vuelta a ti. Una calle, una canción, una clase, una hora del día.
        <br><br>
        <strong>No sé si llegas a entender lo especial que te volviste para mí, Ivana. Solo sé que te extraño.</strong>
      `;
    

          /* Girasol 12: una partida pendiente */
    } else if (indice === 11) {
      tituloModal.textContent = "Una partida pendiente";
      subtituloModal.textContent = "Girasol número 12";

      textoModal.innerHTML = `
        Jugar cualquier cosa contigo siempre terminaba siendo divertido, aunque ese día te pusiste un poquito agresiva conmigo.
        <br><br>
        No me mientas, sé que querías desquitarte, pero igual lo acepté porque verte tan metida en la partida también me causaba gracia. Había algo bonito en compartir esos momentos simples: competir, molestarnos un poco y reírnos por cualquier cosa.
        <br><br>
        ¿Todavía jugarías videojuegos si se diera otra oportunidad?
        <br><br>
        Porque si hay una próxima vez, ahora me tocaría a mí intentar ganar. Aunque no prometo no dejarte ganar de vez en cuando. Es broma… o quizá no.
        <br><br>
        <strong>Al final, más allá del juego, lo que recuerdo es lo bien que se sentía pasar el rato contigo.</strong>
      `;

          /* Girasol 13: el mejor equipo */
    } else if (indice === 12) {
      tituloModal.textContent = "El mejor equipo";
      subtituloModal.textContent = "Girasol número 13";

      textoModal.innerHTML = `
        Esta fue, para mí, la mejor exposición de mi vida hasta el momento.
        <br><br>
        Habíamos llegado al final de Redes después de tanto esfuerzo, nervios y trabajo. Y ese día todo salió mejor de lo que imaginaba: explicamos, respondimos y el profesor ni siquiera tuvo preguntas para nosotros. Fue como si hubiera entendido que ya estaba todo dicho y que lo habíamos hecho muy bien.
        <br><br>
        Pero lo que más recuerdo es verte exponer. Lo hiciste con seguridad, claridad y esa responsabilidad que siempre admiré en ti. Te miraba con orgullo, con brillo en los ojos, pensando en lo increíble que eras frente a todos.
        <br><br>
        Y sí, también tengo que decirlo: ese día estabas preciosa. Tu vestimenta, tu presencia y la forma en que llevaste la exposición hicieron que todo se sintiera todavía más especial.
        <br><br>
        <strong>No fue solo una buena nota o una exposición terminada. Fue uno de esos días en los que sentí que hacíamos un equipo increíble.</strong>
      `;
    

          /* Girasol 14: la visita */
    } else if (indice === 13) {
      tituloModal.textContent = "La visita";
      subtituloModal.textContent = "Girasol número 14";

      textoModal.innerHTML = `
        Después de dejar a mis padres en el aeropuerto, fui a visitarte. Y todavía recuerdo cuando saliste con tus chanclitas de tiburón y tu perrita tan tierna acompañándote.
        <br><br>
        Fue una visita sencilla, pero de esas que se quedan dando vueltas en la cabeza. Estar contigo, hablar en el carro y compartir ese rato hizo que el día terminara siendo mucho más especial de lo que esperaba.
        <br><br>
        ¿Te acuerdas de lo que conversamos? A veces pienso en esos pequeños momentos y en todo lo que pueden significar cuando se comparten con alguien que importa.
        <br><br>
        Me gustaría que algún día se repitiera una visita, claro, solo si tú también quieres y te sientes cómoda con eso. Y esta vez, en lugar de que sea solo una visita, poder invitarte aunque sea a almorzar y seguir conversando sin tener que mirar la hora.
        <br><br>
        <strong>Porque ese día, con tus chanclitas de tiburón, tu perrita y nuestras conversaciones, terminó siendo un recuerdo muy bonito para mí.</strong>
      `;
    

    /* Girasol 8: álbum de Yamil */
    } else if (indice === 7) {
      tituloModal.textContent = "Un girasol llamado Yamil";
      subtituloModal.textContent = "";
      textoModal.textContent =
        "Un pequeño álbum de momentos que quise guardar contigo.";


        /* Girasol 15: poesía */
    } else if (indice === 14) {
        tituloModal.textContent = "A las tres";
        subtituloModal.textContent = "Girasol número 15";

        textoModal.innerHTML = `
    Hay horas que no solo marca un reloj, sino también la emoción de esperar un momento bonito.
    <br><br>
    Esta poesía nació de esas veces en que saber que iba a verte podía alegrarme el día incluso antes de que llegara la hora. 🌻
  `;
      /* Girasol 16: Ivana la bonita */
    } else if (indice === 15) {
      tituloModal.textContent = "Ivana la bonita";
      subtituloModal.textContent = "Girasol número 16";

      textoModal.innerHTML = `
        Esta es una pequeña mezcla entre Betty la Fea e Ivana la Bonita.
        <br><br>
        Sé cuánto te gusta esa historia, así que un día se me ocurrió imaginar cómo sería tener un carnet de Eco Moda con tu nombre. De pronto, como si hubiera aparecido en un sueño, encontré la forma de hacerlo realidad… aunque todavía no en este mundo.
        <br><br>
        La primera foto es un pequeño guiño a Betty; la segunda tenía que ser para Ivana, porque si alguien merecía tener su propio carnet era tú.
        <br><br>
        <strong>Espero que te guste este detalle, Ivanita. Porque, al final, en cualquier historia, siempre haría falta una Ivana la Bonita.</strong>
      `;


    /* Girasol 17: pequeñas comelonas */
    } else if (indice === 16) {
      tituloModal.textContent = "Antojitos que saben a ti";
      subtituloModal.textContent = "Girasol número 17";

      textoModal.innerHTML = `
        Este girasol guarda nuestras pequeñas comelonas: esos ratitos de salir a picar algo, compartir una mesa y reírnos por cualquier cosa. Quizá parecían momentos simples, pero para mí terminaron siendo parte bonita de todo lo que vivimos… y espero que para ti también, Ivanita.
        <br><br>
        Ojalá pronto se repita una de esas salidas… y que sea solo el comienzo de varias más. 🌻
        <br><br>
        <strong>Extraño salir contigo, ¿sabes?</strong>
      `;
    /* Girasol 19: donde comenzó todo */
    } else if (indice === 18) {
      tituloModal.textContent = "Donde comenzó todo";
      subtituloModal.textContent = "Girasol número 19";

      textoModal.innerHTML = `
        Es raro, ¿no? Quizá este sitio para ti sea solo un salón más, pero a mí me trae un recuerdo muy claro: aquí comenzó todo.
        <br><br>
        Una simple ayuda en el curso de Redes terminó dando inicio a conversaciones, risas, momentos y a esta bonita locura que jamás habría imaginado.
        <br><br>
        Espero que no hayas olvidado todo lo que vivimos juntos… aunque no te juzgaría si fuera así, jaja. Yo, por mi parte, guardo con cariño cada pequeño recuerdo.
        <br><br>
        <strong>Y ahora me queda una pregunta dando vueltas: ¿dónde y cuándo será nuestro siguiente encuentro? 🌻</strong>
      `;

        /* Girasol 20: cierre final */
    } else if (indice === 19) {
      tituloModal.textContent = "El presente";
      subtituloModal.textContent = "Girasol final";

      textoModal.innerHTML = `
        Hay un momento de la universidad que se ha vuelto muy especial para mí: cuando estudio en la biblioteca y el atardecer empieza a caer detrás de las ventanas.
        <br><br>
        Antes solía llegar temprano, hacer mis cosas e irme a casa rápido. Ahora, en cambio, a veces me quedo un poco más, miro hacia afuera y noto lo bonito que se ve el cielo cuando el día está terminando. Es tranquilo, pero también es un momento en el que pienso demasiado.
        <br><br>
        Pienso en lo bonito que sería compartir esos ratos contigo. A veces me pregunto si te habría gustado sentarte a mi lado, conversar un poco, estudiar cada uno en lo suyo o simplemente mirar el atardecer sin tener que decir demasiado. Porque esos cielos siempre terminan recordándome a ti.
        <br><br>
        Me recuerdan a tus ojos, a tu sonrisa y a esa presencia tuya que, incluso cuando no estás cerca, sigue apareciendo en muchos lugares de mi cabeza. Hay días en que miro por esa ventana y siento que, de alguna forma, el cielo me habla de ti.
        <br><br>
        No sé muy bien cómo nombrar nuestra situación actual. A veces se siente rara y, si soy sincero, a veces también duele. Pero no escribo esto para pedirte algo ni para hacerte sentir obligada a responder de una manera. Solo quería ser honesto con lo que significaron para mí estos momentos, los recuerdos que guardamos y todo lo que nació a partir de una simple ayuda en Redes.
        <br><br>
        Tal vez, en otro mundo, algunas cosas habrían sido distintas. Pero en este, agradezco haberte conocido. Aunque cometa errores y aunque no siempre sepa cómo expresar lo que siento, no he dejado de valorar la persona que eres y los días que compartimos.
        <br><br>
        Feliz 21 de septiembre, Ivana.
        <br><br>
        Este ramo de girasoles fue programado por mí desde el miércoles, pensando en ti, en nuestros recuerdos y en todas esas pequeñas cosas que no quería dejar perder. Espero de verdad que te haya gustado recorrerlo.
        <br><br>
        Y si te nace, me gustaría que nos viéramos el martes o el miércoles para tener una comelona, conversar un poco y seguir creando recuerdos. Puedes responderme por privado en WhatsApp.
        <br><br>
        Con esto termina esta pequeña dinámica de flores amarillas. Gracias por llegar hasta aquí.
      `;

    /* Los demás girasoles */


        /* Girasol 18: dedicatoria musical */
    } else if (indice === 17) {
      tituloModal.textContent = "Arriesgaría todo por ti";
      subtituloModal.textContent = "Girasol número 18";

      textoModal.innerHTML = `
        Es loco, pero es verdad: hay personas por las que uno arriesgaría más de lo que imaginaba. Tú eres una de ellas, Ivanita.
        <br><br>
        Espero que te guste esta música. Escúchala cuando quieras; esta parte está dedicada para ti. 🎧🌻
        <br><br>
        Y el Spotify es solo un pequeño spoiler de algo que viene más adelante… jeje.
      `;

    /* Los demás girasoles */
    } else {
      tituloModal.textContent = "Girasol número " + (indice + 1);
      subtituloModal.textContent = "";
      textoModal.textContent =
        "Un pequeño recuerdo guardado en este girasol. 🌻";
    }

    mostrarRecuerdoActual();
    modal.classList.add("mostrar");
  });

  contenedorFlores.appendChild(girasol);
});
/* Tallos curvos: uno para cada girasol */
const svgTallos = document.querySelector(".tallos");

svgTallos.innerHTML = "";
svgTallos.setAttribute("viewBox", "0 0 100 100");
svgTallos.setAttribute("preserveAspectRatio", "none");

const espacioSvg = "http://www.w3.org/2000/svg";

posiciones.forEach(function (posicion, indice) {
  const xFlor = posicion[0];
  const yFlor = posicion[1] + (indice === 19 ? 4.5 : 5.5);
  const diferenciaX = xFlor - 52;

  const tallo = document.createElementNS(espacioSvg, "path");

  tallo.setAttribute(
    "d",
    "M 52 101 C " +
    (52 + diferenciaX * 0.12) + " 88, " +
    (xFlor - diferenciaX * 0.12) + " " + (yFlor + 12) + ", " +
    xFlor + " " + yFlor
  );

  tallo.setAttribute("class", "tallo");
  svgTallos.appendChild(tallo);
});

/* Desbloquea el girasol final al leer los otros 19 */
function revisarDesbloqueo() {
  if (girasolesAbiertos.length === 19) {
    principalDesbloqueado = true;

    girasolPrincipal.classList.remove("flor-bloqueado");
    girasolPrincipal.classList.add("flor-desbloqueado");

    girasolPrincipal.title = "El girasol especial ya está desbloqueado";
  }
}

/* Registra un girasol cuando se elige Nah o Gracias */
function registrarGirasolElegido() {
  if (
    girasolSeleccionado !== 19 &&
    !girasolesAbiertos.includes(girasolSeleccionado)
  ) {
    girasolesAbiertos.push(girasolSeleccionado);

    const flores = document.querySelectorAll(".flor");
    flores[girasolSeleccionado].classList.add("flor-abierto");

    revisarDesbloqueo();
  }
}

/* Botón rojo */
botonNah.addEventListener("click", function () {
  registrarGirasolElegido();

  cantidadNah++;
  contadorNah.textContent = cantidadNah;

  videoModal.pause();
  modal.classList.remove("mostrar");
});

/* Botón amarillo */
botonGracias.addEventListener("click", function () {
  registrarGirasolElegido();

  cantidadGracias++;
  contadorGracias.textContent = cantidadGracias;

  videoModal.pause();
  modal.classList.remove("mostrar");
});

/* Cierra la ventana al tocar fuera */
modal.addEventListener("click", function (evento) {
  if (evento.target === modal) {
    videoModal.pause();
    modal.classList.remove("mostrar");
  }
});

/* =========================================
   ANIMACIÓN INICIAL DE LA REGADERA
========================================= */

(function () {
  const ramo = document.querySelector(".ramo");
  const tarjeta = document.querySelector(".tarjeta");
  const botonViejo = document.getElementById("botonRegar");

  ramo.style.opacity = "0";
  ramo.style.pointerEvents = "none";
  ramo.style.transform = "translateX(-50%) translateY(160px) scale(.45)";

  const floresDelRamo = Array.from(
    contenedorFlores.querySelectorAll(".flor")
  );

  floresDelRamo.forEach(function (flor) {
    flor.style.opacity = "0";
    flor.style.transform =
      "translate(-50%, -50%) translateY(45px) scale(.2)";
  });

  const botonRegar = botonViejo.cloneNode(true);
  botonViejo.replaceWith(botonRegar);

  botonRegar.addEventListener("click", function () {
    botonRegar.disabled = true;

    botonRegar.animate(
      [
        { transform: "translate(0, 0) rotate(0deg)" },
        { transform: "translate(-38vw, -32vh) rotate(-25deg)" }
      ],
      {
        duration: 1200,
        fill: "forwards",
        easing: "ease-in-out"
      }
    );

    setTimeout(function () {
      const posicion = botonRegar.getBoundingClientRect();
      const cajaTarjeta = tarjeta.getBoundingClientRect();

      for (let numero = 0; numero < 14; numero++) {
        const gota = document.createElement("span");

        gota.style.position = "absolute";
        gota.style.zIndex = "50";
        gota.style.width = "10px";
        gota.style.height = "16px";
        gota.style.borderRadius = "50% 50% 55% 55%";
        gota.style.background = "#66e7ff";
        gota.style.boxShadow = "0 0 12px #b4f8ff";
        gota.style.pointerEvents = "none";

        gota.style.left =
          (posicion.left - cajaTarjeta.left + 15 + Math.random() * 35) + "px";

        gota.style.top =
          (posicion.top - cajaTarjeta.top + 70) + "px";

        tarjeta.appendChild(gota);

        gota.animate(
          [
            { transform: "translateY(0)", opacity: 1 },
            {
              transform:
                "translate(" +
                ((Math.random() * 70) - 35) +
                "px, " +
                (tarjeta.clientHeight - (posicion.top - cajaTarjeta.top) - 150) +
                "px)",
              opacity: 0
            }
          ],
          {
            duration: 1100,
            delay: numero * 90,
            easing: "ease-in"
          }
        );

        setTimeout(function () {
          gota.remove();
        }, 2500);
      }
    }, 1250);

    setTimeout(function () {
      tarjeta.classList.add("cultivo-listo");

      ramo.style.opacity = "1";
      ramo.style.pointerEvents = "auto";

      floresDelRamo.forEach(function (flor, indice) {
        setTimeout(function () {
          flor.style.opacity = "1";

          flor.animate(
            [
              {
                opacity: 0,
                transform:
                  "translate(-50%, -50%) translateY(45px) scale(.2)"
              },
              {
                opacity: 1,
                transform:
                  "translate(-50%, -50%) translateY(-8px) scale(1.12)"
              },
              {
                opacity: 1,
                transform:
                  "translate(-50%, -50%) translateY(0) scale(1)"
              }
            ],
            {
              duration: 650,
              fill: "forwards",
              easing: "ease-out"
            }
          );
        }, 550 + indice * 115);
      });

      ramo.animate(
        [
          {
            opacity: 0,
            transform: "translateX(-50%) translateY(160px) scale(.45)"
          },
          {
            opacity: 1,
            transform: "translateX(-50%) translateY(0) scale(1)"
          }
        ],
        {
          duration: 2800,
          fill: "forwards",
          easing: "ease-out"
        }
      );

      botonRegar.animate(
        [{ opacity: 1 }, { opacity: 0 }],
        { duration: 500, fill: "forwards" }
      );
    }, 3600);
  });
})();

/* =========================================
   GATO CANDADO Y CONTRASEÑA
========================================= */

const botonCandado = document.getElementById("botonCandado");
const modalClave = document.getElementById("modalClave");
const cerrarClave = document.getElementById("cerrarClave");
const inputClave = document.getElementById("inputClave");
const botonVerificar = document.getElementById("botonVerificar");
const mensajeClave = document.getElementById("mensajeClave");

botonCandado.addEventListener("click", function () {
  modalClave.classList.add("mostrar");
  inputClave.value = "";
  mensajeClave.textContent = "";
  inputClave.focus();
});

cerrarClave.addEventListener("click", function () {
  modalClave.classList.remove("mostrar");
});

function verificarClave() {
  const clave = inputClave.value.trim();

  if (clave !== "20") {
    mensajeClave.innerHTML =
      "Como duele saber que no quieres abrir ninguna flor 💔";

    mensajeClave.style.color = "#ff7588";
    return;
  }

  principalDesbloqueado = true;

  girasolPrincipal.classList.remove("flor-bloqueado");
  girasolPrincipal.classList.add("flor-desbloqueado");
  girasolPrincipal.title = "El girasol final ya está desbloqueado";

  mensajeClave.innerHTML =
    "¡Felicidades! Si colocaste la clave es porque leíste todo y valoras cada recuerdo de esta página, Ivanita ;) 🌻😸<br><br>Ahora puedes abrir el girasol final.";

  mensajeClave.style.color = "#9dff9d";
  inputClave.value = "";
}

botonVerificar.addEventListener("click", verificarClave);

inputClave.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    verificarClave();
  }
});

modalClave.addEventListener("click", function (evento) {
  if (evento.target === modalClave) {
    modalClave.classList.remove("mostrar");
  }
});

/* Abrir el recuerdo en tamaño grande */
botonVerFoto.addEventListener("click", function () {
  const lista = recuerdos[girasolSeleccionado];

  if (!lista) {
    return;
  }

  const recuerdoActual = lista[indiceRecuerdoActual];

  imagenVista.style.display = "none";
  videoVista.style.display = "none";
  videoVista.pause();
  videoVista.removeAttribute("src");

  if (recuerdoActual.tipo === "imagen") {
    imagenVista.src = recuerdoActual.archivo;
    imagenVista.style.display = "block";
  } else {
    videoModal.pause();

    videoVista.src = recuerdoActual.archivo;
    videoVista.style.display = "block";
    videoVista.load();
  }

  modalVista.classList.add("mostrar");
});

/* Cerrar vista grande */
cerrarVista.addEventListener("click", function () {
  videoVista.pause();
  modalVista.classList.remove("mostrar");
});

modalVista.addEventListener("click", function (evento) {
  if (evento.target === modalVista) {
    videoVista.pause();
    modalVista.classList.remove("mostrar");
  }
});


videoModal.pause();
audioDedicado.pause();
modal.classList.remove("mostrar");
