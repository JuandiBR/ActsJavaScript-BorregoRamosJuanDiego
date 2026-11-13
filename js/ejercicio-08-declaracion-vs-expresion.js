/*
 * ============================================================
 *  EJERCICIO 8 · Declaración frente a expresión
 *  Referencia: diapositivas 26 a 30 · Nivel: Medio
 * ============================================================
 *
 * ENUNCIADO
 *
 * En el fichero .js hay un código que FALLA. Fíjate en el error que aparece en
 * la Salida, descubre por qué y arréglalo SIN mover las dos llamadas de sitio
 * (solo cambiando cómo se crea una de las funciones).
 *
 * Después responde con tus palabras, en comentarios (//) dentro del .js:
 *   a) ¿Por qué una de las dos llamadas funciona antes de la definición?
 *   b) ¿Cuándo se crea una declaración de función y cuándo una expresión?
 *
 * RESULTADO ESPERADO en la Salida, ya arreglado:
 *     Hola, Ana
 *     Adiós, Ana
 *
 * Escribe tu código debajo, guarda el fichero y recarga la página
 * del ejercicio en el navegador para ver la Salida y las comprobaciones.
 */

// ===== TU CÓDIGO =====
saludar("Ana");
despedir("Ana");

function saludar(nombre) { console.log("Hola, " + nombre); }
function despedir(nombre) { console.log("Adiós, " + nombre); }

// a) saludar funciona antes de su definición porque es una declaración de
// función: JavaScript la deja disponible antes de ejecutar las instrucciones
// de este ámbito (hoisting). Ahora despedir también es una declaración.
// Antes, despedir era una constante todavía sin inicializar al llamarla.
// b) Una declaración se crea al preparar el ámbito, antes de ejecutar su código.
// Una expresión de función se crea cuando se evalúa durante la ejecución;
// en el código original, esto sucedía al llegar a la asignación a despedir.
