# Ejercicios

## Ejercicio 1
- Creo una carpeta `js` para los scripts y dentro ponemos el js correspondiente.

## Ejercicio 2
- Creo la carpeta `img` para dejar dentro el PNG del ejercicio (es por tenerlo todo ordenado).
- Creamos la carpeta `js` y dentro ponemos `codigo.js` con la tarea solicitada (un alert).

## Ejercicio 3
- Se ha realizado el cambio en el script que tenemos en la misma página HTML:
  - En caso de que se presione "Aceptar", sale un alert indicando que se ha presionado Aceptar y además sale por consola.
  - En caso contrario, si se presiona "Cancelar", sale un alert indicando que se ha presionado cancelar y además lo sacamos también por consola.

## Ejercicio 4
- Creadas las carpetas `js` y `css`.
- En la carpeta `js` ponemos `main.js` que hace referencia al id de la etiqueta de "Seguir leyendo" y cambia dicho texto por "Ocultar texto".
- En la carpeta del `css` se completan los estilos necesarios (sólo veo necesario completar un par de ellos, el efecto sobre "visible" no lo veo necesario).

## Ejercicio 5
- Creo la carpeta `js` y ponemos dentro el script `main.js`.
- Dicho script ejecuta la adición del elemento de la lista numerándolo en función de la longitud de la lista. Realiza la carga de lista al cargarse la página (para usar el mismo formato de lista y así implementamos Bootstrap).
- Modifico el input para añadir la llamada a la función del `main.js`.

## Ejercicio 6
- He identificado los divs como "párrafo" y, en función de su visibilidad, al pulsar el enlace cambio la misma (es decir, si es visible la pongo `hidden` y si es `hidden` la pongo `visible`) y modifico el texto del enlace de igual manera.

## Ejercicio 7
- Creada la carpeta `img` para incluir el PNG del ejercicio (creo que ya es un TOC lo mío).
- Añadida la implementación de formulario con los componentes de Bootstrap.

## Ejercicio 8
- Creada la carpeta `js` con el `main.js` que controla los votos y el reset.
- Implementamos `<canvas id="myChart" width="400" height="400"></canvas>` además de la llamada al js de charts.
- Añadimos el contorno de Bootstrap y estilos a los botones.
- OJO!! el botón de volver se encuentra abajo de la página, tras un 'hr'

## Ejercicio 9
- Implementado, funciona correctamente. Primero se realizó calculando los fps del monitor y ajustando la velocidad según dichos fps, pero no funcionaba adeacuadamente. Finalmente se ha realizado de la forma más "tradicional" posible, pero ha complicado mucho el botón de "Volver al inicio". Este botón es un javascript en la raiz del proyecto y es común para todas las páginas. En este caso el problema ha sido ubicarlo bajo el gato sin afectar al funcionamiento del mismo.

## Ejercicio 10
- Revisado todo. Implementado el botón de back ("Volver al inicio") para regresar al index del raiz. He probado con `window.history.back()` pero me daba problemas en los ejercicios de ocultar el texto.Posteriormente he decidido hacer un botón en una carpeta 'js' en la raiz del proyecto, y que todos los ejercicios tiren de dicho botón (document.addEventListener("DOMContentLoaded") .....). Ha sido un poco complicarme pero creo que ha merecido la pena en lo que respecta a unificar funcionalidad en un único punto (que lo mismo la he liado por mal funcionamiento y tenia que haber hecho algo más simple). Este html del ejercicio10 es el index.html que se usa para la navegación
