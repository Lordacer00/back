# Frontend Preregister

Este proyecto es una aplicación frontend desarrollada con React llamada `front-preregister`.

## Requisitos Previos

Asegúrate de tener instalados los siguientes componentes:

- Node.js (versión 18.18.0)
- npm (viene con Node.js)
- Yarn (opcional, pero recomendado)

Puedes comprobar la versión de Node.js instalada con el siguiente comando:

```sh
node -v
```

**Downgrade de Node.js a 18.18.0**

Si tienes una versión superior de Node.js, puedes hacer downgrade utilizando `n` (Node.js version manager) o `nvm` (Node Version Manager).

### Usando n:

Instala `n` globalmente si aún no lo tienes:

```sh
npm install -g n
```

Instala y usa la versión 18.18.0 de Node.js:

```sh
sudo n 18.18.0
```

### Usando nvm:

Instala nvm siguiendo las instrucciones en su [repositorio oficial](https://github.com/nvm-sh/nvm).

Una vez instalado, instala y usa la versión 18.18.0 de Node.js:

```sh
nvm install 18.18.0
nvm use 18.18.0
```

Para hacer que esta versión sea la predeterminada:

```sh
nvm alias default 18.18.0
```

## Instalación

### Instalación de Node.js

Si no tienes Node.js 18.18.0 instalado, puedes descargarlo e instalarlo desde [aquí](https://nodejs.org/en/).

### Clonar el repositorio

Clona este repositorio en tu máquina local usando git.

```sh
git clone https://github.com/tu-usuario/front-preregister.git
cd front-preregister
```

### Instalación de dependencias

Instala las dependencias necesarias utilizando npm:

```sh
npm install
```

o

```sh
yarn install
```

## Ejecución

Para iniciar el servidor de desarrollo, usa el siguiente comando:

```sh
npm start
```

o

```sh
yarn start
```

El servidor de desarrollo estará disponible en [http://localhost:3000](http://localhost:3000).
