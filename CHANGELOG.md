## 0.0.1-pr4 - 31-12-2022
- Se siguieron haciendo cambios intentando comprender el principio SOLID
- Se hizo deploy del juego modo local
- Ya tiene imagen para cuando se comparte la pagina uwu

### Added
- Metodo para verificar si de forma esquineada en ambos sentidos
- Identificador de los colores bases al tailwind.config
- La logica del juego en local
- Componete Scoreboard para mostrar la puntuacion y los jugadores
- Componete Modal para mas adelante
- Estilos al button con relacion a los colores que manejo

### Changed
- Se movieron los metodos del tablero para una mejor visualizacion
- Se cambio la manera en como se hace la evaluacion para revisar el tablero y saber si hay ganador

## 0.0.1-pr3 - 24-12-2022
- Se siguio modificando los estilos y se empezo a ver como hacer el subdomino

### Added
- Se agregaron hooks para identificar el tipo de pantalla
- Se hizo pantalla para subir y probar el subdominio

## 0.0.1-pr2 - 26-11-2022

### Added
- [**tailwind.config**] Se agregaron los colores que vamos a ocupar y quitamos lo que no vamos a ocupar de taildwind
- [**Tooltip**] Componente para mostrar mensajes pequeños de ayuda o cualquier cosa, por ahora solo se instalo y empezo el montaje del componente basado en el de antd y rc-tooltip, [seguir checando](https://github.com/ant-design/ant-design/blob/master/components/tooltip/index.tsx)
- [**Tablero**] El tablero sobre el cual va a recibir todo de lado de online o local, ya funciona y retorna una especie de ganador
- [**screens-LocalGame**] La base o complantilla para realizar un juego de manera local ya esta
- [**index.html**] Se agregaron cosas para el seo que realmente no se ocuparan pero e spara que se vea cuqui
- [**utils-reactNode**] Se baso en la de antd 


## 0.0.1-pr1 - 25-11-2022
Empezamos de nuevo pero ahora más enfocado, con un mejor control y viendo posibles variantes, ahora tambien implementamos jsDoc para ver el rendimiento de las cosas y checar detalles a demas de que se empezara a usar un nuevo ruteador

### Added
- [**Button**] Componente de boton
- [**StopWatch**] Componente de cronometro, por ahora solo esta la carpeta y el archivo, falta pasarlo a js
- [**Tablero**] Componente de Tablero, este recibira todas las acciones, por ahora solo esta la carpeta y el archivo, falta pasarlo a js
- [**ActivityIndicator**] Componente de elemento de carga
- [**Icons**] Los iconos de boostrap
- [**Componentes**] La carpeta que va a contener todos los componentes
- [**screens**] La carpeta que va a contener todas las pantallas
- [**LocalGame**] La carpeta que va a contener el juego local, posible bot al futuro
- [**OnlineGame**] La carpeta que va a contener el juegon en linea
- [**Home**] Archivo de bienvenida del juego
- [**App**] Se agregaron las rutas
- [**jsconfign**] El archivo para ver lo de los tipados
