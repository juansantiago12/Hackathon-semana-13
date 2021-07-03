Solucion del Reto 1:

¿Por qué evitar los callbacks en las llamadas asíncronas?

    Provocan que el código se vuelva difícil de leer y ‘debuggear’. el hacer uso de callback anidados es una mala práctica y visualmente produce una especie de pirámide por lo que se vuelve un código difícil de mantener y leer.

¿Qué es una promesa?

    Las promesas son un concepto para resolver el problema de asincronía de una forma mucho más elegante y práctica que utilizando funciones callbacks directamente.
    Una promesa es un objeto que representa un valor que puede que esté disponible «ahora», en un «futuro» o que «nunca» lo esté. Como no se sabe cuándo va a estar disponible, todas las operaciones dependientes de ese valor, tendrán que posponerse en el tiempo:
    
    La promesa se cumple (promesa resuelta)
    La promesa no se cumple (promesa se rechaza)
    La promesa se queda en un estado incierto indefinidamente (promesa pendiente)   

¿Qué es el callback hell?

    Consiste en múltiples Callbacks anidados que provocan que el código se vuelva difícil de leer; ésta es la principal razón por la cual se debe evitar. Es entendible que se caiga en el Callback Hell mientras se lidia con lógica asíncrona.