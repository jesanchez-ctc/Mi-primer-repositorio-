var preguntas = [
    "¿Como se llama la mamá de freddy krueger?", 
    "¿Como se llama el creador de Chuky?",
    "¿Qué ve el pequeño protagonista de El sexto sentido, 1999 en sus alucinaciones?",
    "La frase 'Voy a invitar a un viejo amigo para cenar' pertenece al personaje de:",
    "¿Cómo se comunican los miembros de la familia Abbot en Un lugar en silencio, 2018?",
    "¿Cada cuantos años despierta el payaso Pennywise para aterrorizar a los niños de Derry?",
    "holi"
    ];
    
    var opciones = [
    [ "Lisa Krueger", 
    "Amanda Krueger",
    "Vilma Krueger"],
    
    [ "Don Mancini",
    "Don Meredick",
    "Fernado Jock"],
    
    ["Fantasmas",
    "Vampiros",
    "Gente muerta"],
    
    ["Buffalo Bill",
    "Hannibal Lecter",
    "Justine"],
    
    ["Diciendo solo lo indispensable", 
    "Hablando por lo bajo",
    "Con lenguaje de señas"],
    
    ["18",
    "27",
    "15"],

    ["18",
    "27",
    "15"]
    ]
    
    var puntajePorOpcion = [
        [0, 8, 0], 
        [8, 0, 0], 
        [0, 0, 8], 
        [0, 8, 0], 
        [0, 0, 8], 
        [0, 8, 0],
        [0, 8, 0],
    ]
    
    var puntaje = 0;
    var i = 0;
    
    function mostrarResultado() {
    var div = document.getElementsByClassName("card")[0];
    div.innerHTML = "";
    
    document.getElementById("barra-progreso").value = i*100/(preguntas.length - 1);
    
    //agregamos los elementos correspondientes a los resultados
        
    div.innerHTML += "<h3 class='resultado_titulo'>Resultados</h3>";
    //determinamos que tanto se sabe de las peliculas de terror  (max = 35)
    
    if (puntaje > 32) {
        estiloVida = "<span id='estilo-excelente'>EXCELENTE</span>";
    }else if (puntaje > 24) {
        estiloVida = "<span id='estilo-bueno'>BUENO</span>";
    }else if (puntaje > 16) {
        estiloVida = "<span id='estilo-aceptable'>ACEPTABLE</span>"; 
    }else if (puntaje > 8) {
        estiloVida = "<span id='estilo-regular'>REGULAR</span>";
    }else {
        estiloVida = "<span id='estilo-malo'>MALO</span>"; 
    }
    
    div.innerHTML += `<p class='resultado_obtenido'> Has obtenido ${puntaje} puntos, lo cual significa que lo que sabes de peliculas de terror es ${estiloVida}.</p>`
    }
    function actualizarPuntaje(opcion) {
        var indice =opcion - 1;
        puntaje += puntajePorOpcion[i][indice];
    
        if (i < preguntas.length - 1){
            siguientePregunta();
        }else{
            mostrarResultado();
        }
    }
    
    function siguientePregunta() {
        document.getElementById("pregunta").innerHTML = preguntas[i];
        document.getElementById("op1").innerHTML = opciones[i][0];
        document.getElementById("op2").innerHTML = opciones[i][1];
        document.getElementById("op3").innerHTML = opciones[i][2];
        
        document.getElementById("barra-progreso").value = i * 100/preguntas.length;
        i++; 
    }
    
    siguientePregunta(); //Muestra la primera pregunta 
    document.getElementById("op1").addEventListener("click", function () {
         actualizarPuntaje(1);
    });
    document.getElementById("op2").addEventListener("click", function () {
         actualizarPuntaje(2);
    });
    document.getElementById("op3").addEventListener("click", function () {
         actualizarPuntaje(3);
    });