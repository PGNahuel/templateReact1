# Observabilidad en el Desarrollo de Software: la habilidad de la que poco se habla

## Introducción

Todos los días nos encontramos con muchas situaciones distintas, las empresas saben las cosas que deben suceder en cada momento pero no todas son las que saben que pasa realmente. Es ahí donde tener gente capacitada en observabilidad es clave, además, siendo desarrollador es una habilidad distintiva entre tanta gente.

Pero ¿Qué es la observabilidad? Podemos decir que es la capacidad de comprender el estado interno de un sistema a partir de la información que este genera, como logs, métricas y trazas.

Su objetivo no es solo mostrar que algo está fallando, sino explicar por qué ocurre, proporcionando el contexto suficiente para diagnosticar y resolver problemas de forma más rápida y precisa.

Son las herramientas que nos permiten ver lo que pasa dentro del software sin necesidad de interrumpirlo o modificarlo directamente.

### ¿Observar y monitorear es lo mismo?

Monitorear es mucho más simple que tener buena observabilidad. Cuando tenemos alertas, dashboards o métricas recopiladas y que se nos presentan de manera ordenada para identificar si el sistema está funcionando como se espera se dice que tenemos herramientas de monitorización. 

Entonces, monitorear es como ver el tablero de un auto: podemos saber a qué velocidad va, si las luces altas están prendidas o apagadas, si hay o no nafta. Estamos monitoreando para poder responder ¿Está todo bien?

La observabilidad es más que eso, no se limita a identificar un problema o el estado de un sistema. Da las capacidades para responder por qué está pasando lo que está pasando, saber la causa raíz de los procesos, incluso de un problema imprevisto. 

### Por qué es cada vez más relevante en entornos modernos

En arquitecturas modernas como microservicios, sistemas distribuidos o entornos con integración y entrega continua (CI/CD), el número de componentes, dependencias y puntos de fallo crece exponencialmente. Esto provoca:

* Mayor complejidad para identificar dónde y por qué ocurre un problema.  
* Cambios frecuentes que pueden introducir fallos inesperados.  
* Dificultad para reproducir errores localmente.

La observabilidad se vuelve crucial porque permite detectar y diagnosticar incidentes rápidamente. Además, mejora la resiliencia y la experiencia de usuario en sistemas que requieren alta disponibilidad.

## Los Tres Pilares de la Observabilidad

A continuación listaré tres herramientas básicas para tener una buena observabilidad 

### Logs

Los logs son registros textuales que documentan eventos que ocurren en el sistema.

Incluyen información detallada como mensajes de errores, advertencias, procesos ejecutados, resultados de operaciones o datos de depuración.

Su valor principal está en que permiten ver con precisión qué pasó y en qué momento, y a menudo contienen pistas clave para entender un problema ya que contienen textos normalmente puestos por los programadores del sistema, pueden contener metadata o tags y contienen niveles de importancia.

En sistemas complejos, es común centralizar logs en plataformas que permitan buscarlos, filtrarlos y correlacionarlos (por ejemplo, Elasticsearch, Splunk o Loki).

### Métricas

Las métricas son valores numéricos capaces de describir el rendimiento o el estado de un sistema en un momento o periodo de tiempo.

Ejemplos comunes incluyen el uso de CPU, memoria disponible, tiempo de respuesta promedio, número de solicitudes procesadas por segundo, o tasa de errores.

Son útiles para identificar tendencias y patrones a lo largo del tiempo, así como para activar alertas cuando un valor supera umbrales definidos.

A diferencia de los logs, las métricas son más estructuradas y cuantitativas, lo que facilita su visualización en dashboards y su uso para tomar decisiones rápidas.

Es común asociar métricas con monitores y alertas, ya que su estructura nos permite identificar si el sistema funciona como debe o, por el contrario, hay algún problema que se debe atender.

Tener buenas métricas también nos permite saber donde mejorar nuestros sistemas incluso cuando no hay errores, ya que a diferencia de los logs podemos armar dashboards a un nivel mucho más abstracto y dar información de otro tipo. Por ejemplo, cuánto tiempo se quedan los usuarios en nuestras páginas, cuales son las funcionalidades más usadas, cuales son las que se dejan de usar, el alcance que tiene cada cosa.

### Trazas

Las trazas permiten seguir el recorrido de una petición o transacción a través de todos los servicios y componentes que la procesan.

Esto es especialmente valioso en entornos de microservicios, donde una sola solicitud puede pasar por múltiples APIs, colas de mensajes y bases de datos antes de completarse.

Cada traza se compone de “spans” (fragmentos) que describen operaciones individuales, con su duración y relación con otras. Con ellas, es posible detectar cuellos de botella, identificar en qué parte de la cadena ocurre un fallo y medir el impacto de cada componente en el tiempo total de respuesta.

### Cómo se integran para dar contexto y profundidad

Cuando tenemos bien armados nuestras métricas podés tener uno o más dashboards donde puedas ver el estado del sistema. 

Junto a las métricas normalmente van monitores y alertas. Tener una métrica por sí sola no aporta valor real, es cuando automatizamos los análisis donde se empieza a obtener valor real a todo lo que podamos observar.

Imagínate que estás monitoreando la cantidad de llamadas con sus estados de respuesta que tiene un endpoint en particular, de un momento a otro aumenta la cantidad de respuestas 404 que está devolviendo. Un monitor de anomalías te puede indicar que algo está pasando, una alerta que te puede mandar un mensaje automáticamente cuando pase (o disparar algún programa ¿Por qué no?).

El siguiente paso es identificar una traza que te diga que pasa, para eso hay que revisar las peticiones que se hacen y enfocarnos en las 404, en algún punto podremos ver cuál es la petición que falla y ya identificada tenemos que ir a los logs de la aplicación que recibe los 404\.

Los logs nos deberían permitir saber cuál es el error puntual. Puede ser cualquier cosa:

* Un endpoint que no existe  
* Un objeto que nunca se guardó  
* Algo que se eliminó en un proceso

Es el texto del log que te debería dar una pista para saber dónde seguir viendo.

Cuando estos tres pilares se combinan en una plataforma de observabilidad:

1. Puedes detectar un problema (métrica),  
2. Ubicar dónde sucede (traza),  
3. Investigar a fondo el contexto y causa raíz (logs).

Esta integración es lo que permite pasar de una visión superficial a una comprensión profunda y accionable del sistema.

## Beneficios de Implementar Observabilidad

### Detección proactiva de problemas

La observabilidad permite identificar anomalías o comportamientos inusuales antes de que se conviertan en incidentes críticos.

Por ejemplo, si una métrica muestra que el tiempo de respuesta promedio está aumentando gradualmente, el equipo puede actuar antes de que los usuarios noten lentitud.

Esta capacidad de anticipación reduce interrupciones y evita daños mayores al servicio.

### Reducción del MTTR (Mean Time To Recovery)

El **MTTR** mide cuánto tiempo tarda un equipo en recuperar el servicio tras un incidente.

Con una buena estrategia de observabilidad, es posible acortar drásticamente este tiempo, ya que las herramientas ofrecen:

* Alertas inmediatas cuando ocurre un problema.  
* Información contextual (con los logs, las métricas y las trazas) para ubicar rápidamente la causa raíz.

Esto significa que el tiempo se invierte más en resolver y menos en buscar dónde está el fallo.

### Mejora en la experiencia del usuario final

Cuando los problemas se detectan rápido y se corrigen antes de que afecten significativamente al servicio, los usuarios experimentan menos interrupciones, mayor velocidad y confiabilidad e interacciones más fluidas

La observabilidad contribuye directamente a que la percepción del producto sea positiva y confiable, lo cual es clave para la retención y satisfacción del cliente.

*¿Sabías que las grandes empresas tienen, en promedio, 99.9995% del tiempo sus sistemas operativos? Es decir, solo se caen 2 minutos y 19 segundos POR MES.*

### Facilita la colaboración entre equipos de desarrollo y operaciones

En entornos modernos, los equipos de desarrollo y operaciones necesitan trabajar juntos para garantizar la estabilidad del sistema.

La observabilidad centraliza la información y ofrece una fuente única de verdad, lo que elimina discusiones basadas en suposiciones, facilita que todos analicen los mismos datos y acelera la resolución conjunta de incidentes

En definitiva, fomenta un lenguaje común entre perfiles técnicos diferentes.

## Desafíos Comunes

### Volumen y complejidad de los datos

Un sistema moderno genera enormes cantidades de información: logs detallados, métricas en tiempo real y trazas de múltiples servicios.

El reto no es solo almacenar todo ese volumen, sino interpretarlo de forma útil. 

Sin una estrategia clara, la información puede convertirse en ruido, dificultando identificar patrones o problemas reales. Además, a medida que crece la complejidad del sistema, aumenta la dificultad para correlacionar datos entre múltiples fuentes.

Por este motivo, como desarrolladores, antes de empezar a desarrollar cualquier cosa nos tenemos que tomar unos minutos para pensar cómo vamos a identificar problemas, qué son las cosas que nos pueden facilitar el troubleshooting, y cómo vamos a medir la solución que estamos implementando.

Realizar este breve, pero muy importante análisis en el diseño de la solución, nos evitará todo el posible ruido que podamos agregar en un intento de agregar más observabilidad al sistema.

### Integración de múltiples herramientas

En la práctica, la observabilidad rara vez depende de una sola plataforma.

Es común que se utilicen soluciones distintas para logs, métricas y trazas (por ejemplo, Elasticsearch, Prometheus, Jaeger, Grafana, etc.).

El desafío está en hacer que todas trabajen de forma unificada, compartiendo contexto y facilitando la correlación de información. Sin esa integración, los equipos pueden terminar con islas de datos que dificultan el diagnóstico de problemas.

### Costos asociados al almacenamiento y procesamiento

Guardar grandes volúmenes de logs y métricas, especialmente con retenciones largas, implica costos significativos de:

* Infraestructura (servidores y almacenamiento).  
* Licencias o suscripciones de herramientas comerciales.  
* Procesamiento para analizar datos a gran escala de forma eficaz.

Un enfoque de observabilidad eficiente debe encontrar un equilibrio entre el nivel de detalle que se almacena, el tiempo de retención y el presupuesto disponible.

### Cambio cultural y adopción por parte de los equipos

Poder realizar una buena observabilidad en nuestros sistemas no es solo tecnología, también es cultura. 

La buena observabilidad requiere que los equipos diseñen el software pensando en la instrumentación desde el inicio, documenten métricas y eventos importantes y usen la información para la mejora continua, no solo para apagar incendios.

Esto implica romper con prácticas tradicionales y fomentar la colaboración entre desarrollo, operaciones y negocio. Sin este cambio cultural, incluso la mejor herramienta de observabilidad se queda infrautilizada.

## Buenas Prácticas

### Diseñar con observabilidad desde el inicio (“observability-driven development”)

La observabilidad no debe ser un añadido de última hora, sino una característica nativa del software.

Esto implica que, desde las primeras fases de diseño, se planifique qué datos se generarán, cómo se recopilarán y cómo se analizarán.

Este enfoque, llamado *observability-driven development*, asegura que el sistema tenga la instrumentación necesaria para diagnosticar problemas desde el primer día, evitando retrabajos y parches posteriores.

### Definir métricas y KPIs claros

Identificar qué indicadores reflejan realmente la salud y el rendimiento del sistema y, también, indicadores que puedan afectar positiva y negativamente al negocio se vuelve clave.

Algunos ejemplos técnicos y básicos que deberiamos tener en nuestras aplicaciones pueden ser:

* Tiempo de respuesta promedio  
* Porcentaje de errores por funcionalidad, endpoint o servicio  
* Disponibilidad del sistema  
* Latencia en los repositorios

Además tener KPIs (Key Performance Indicator) bien claros, definidos y objetivos ayuda a que todos los equipos sepan qué medir, cómo interpretarlo y cuándo actuar y qué decisiones afectaron positiva o negativamente sus indicadores.

### Automatizar alertas y dashboards

La observabilidad es mucho más efectiva cuando las señales se procesan y presentan automáticamente.

La automatización reduce la dependencia del monitoreo manual y acelera la respuesta ante incidentes. Además el control sigue siendo efectivo aún cuando el equipo tiene una alta tasa de rotación.

## Historia de éxito por implementar correctamente observabilidad

Casi siempre cuando entramos a un equipo nuevo lo que suele suceder es que no nos dan una tarea para desarrollar algo de 0, por el contrario, siempre son tareas de análisis o muy fáciles como para empezar a entender los sistemas. 

Recuerdo cuando entré a un equipo me pidieron evaluar si un algoritmo de descarga de archivos se podía mejorar. Este proceso era simple: un servidor en la nube de un proveedor tenía los archivos “en crudo”, el proceso que se ejecutaba cada dos horas los bajaba, los formateaba y los dejaba en un servidor privado de la empresa.

Abrí el código del programa, pregunté a otros miembros del equipo algunos porqué y me encontré con que:

* No tenía logs informativos claros, ni métricas, ni trazas  
* Los errores no estaban para nada controlados  
* No tenía hilos y los bucles eran procesos unitarios por archivo  
* Estaba configurado cada dos horas por que demoraba poco más de 75 minutos en completar cada pasada

Lo primero que hice fue agregar textos personalizados en los logs controlando bien los errores, con esto pude detectar que no todos los archivos tenian el formato correcto, algunos eran muy grandes para el proceso de subida, otros estaban vacíos.

También coloqué una métrica simple:

- ¿Proceso el archivo? Mando métrica: *proceso.success \+ 1*  
- ¿No proceso el archivo? Mando métrica: *proceso.fail \+ 1*

Esto me permitió ver cuántos archivos intentaba procesar, cuantos lo hacía bien, cuantos los hacía mal.

Y solo con eso me di cuenta de que el proceso podía filtrar los archivos vacíos, podía priorizar los archivos formateados e inicié una cadena de emails donde solicitaba generar con los formatos correctos los archivos que no lo tenían ya que corregir eso requería un proceso manual.

Como resultado se modificó el algoritmo de manera que:

* Se empezaron a procesar bloques de archivos usando múltiples hilos  
* Se identificaron aquellos que podrían tener un reintento de subida automáticamente (ya que al logear bien los errores también pude identificar algunos que eran salvables)  
* Tener alertas cuando el proceso realmente fallaba al 100% por caída del proveedor o del servidor privado.

Y no menos importante, con los cambios, el proceso pasó a tardar no más de 5 minutos.

## Conclusiones finales

La observabilidad es una herramienta poderosa que puede generar cambios, puede generar estrés en los equipos ya que estamos más pendientes de que todo esté funcionando bien y es una gran aliada cuando dejan de andar los sistemas.

No quiero solamente dejar la importancia en “para que todo funcione bien”, como comenté en la historia de éxito también da la visibilidad de qué pasa cuando cambiamos las cosas. Esto es muy importante, porque da con números exactos cómo influis vos en las decisiones del equipo.

Poder añadir observabilidad en el día a día no es solo trabajo de producto, UX, QA o desarrollo, es trabajo de todos. Tener un norte es importante también, ya que nos va a decir qué tenemos que prestarle atención, cómo debemos apuntar a modificar las cosas para mejorar los indicadores clave.

Cuando detectamos que un producto no está dando los números correctos, a veces lo mejor es cortar por lo sano. Cuando detectamos que una funcionalidad tiene muchos errores y los usuarios lo normalizaron porque “saben truquitos en el sistema” es momento de sentarse a eliminar funciones. Cuando medimos la resiliencia de lo que desarrollamos es momento de sentirse orgulloso y llevar esos números al curriculum.

Y si, es una habilidad que se práctica, que se charla y que se mejora con el paso del tiempo. Poder anticiparse a los horrores también es consecuencia de haberse topado con muchos problemas, cómo así también saber resolverlos. 

Eso debe ser motivo suficiente para: hablar con pares, compartir conocimientos y experimentar todo el tiempo con la observabilidad. Aunque parezca un cambio pequeño en el texto de un log, puede marcar una diferencia BRUTAL.

—

Te invito a que me cuentes vos qué cosas pudiste notar, solo por prestar un poco más de atención o automatizar algo de este estilo. Escribime a mi email [contacto@nahuelgomez.ar](mailto:contacto@nahuelgomez.ar)  
