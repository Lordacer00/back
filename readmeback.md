# Backend con Strapi

Este proyecto es un backend desarrollado con Strapi, una plataforma de código abierto para la creación rápida de API.

## Clonar el repositorio

Para comenzar, clona este repositorio en tu máquina local utilizando git:

```sh
git clone https://github.com/tu-usuario/my-project.git
cd my-project
```

## Instalación de dependencias

Una vez que hayas clonado el repositorio, instala las dependencias necesarias ejecutando el siguiente comando:

```sh
npm install
```

o

```sh
yarn install
```

## Configuración de Strapi

Antes de ejecutar el servidor, necesitarás configurar Strapi. 

- Copia el archivo `.env.example` y renómbralo a `.env`.
- Actualiza las variables de entorno en el archivo `.env` según tu configuración.
- Puedes encontrar más información sobre la configuración en la documentación oficial de Strapi.

## Ejecución del servidor

Una vez que hayas configurado Strapi, puedes iniciar el servidor ejecutando el siguiente comando:

```sh
npm run develop
```

o

```sh
yarn develop
```

Esto iniciará el servidor de Strapi localmente. Puedes acceder a la interfaz de administración en [http://localhost:1337/admin](http://localhost:1337/admin) para configurar tus modelos de datos y gestionar tu contenido.

¡Listo! Tu servidor de backend Strapi está ahora en funcionamiento y listo para ser utilizado.
