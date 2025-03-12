# Proyecto Node.js - Consumo de API y Certificado SSL

## Descripción

Este proyecto es una aplicación en Node.js que realiza dos funciones principales:

1. **Consumo de API externa**: Al ejecutar el proyecto, se hace una petición a la API de `jsonplaceholder.typicode.com`, y se muestra la respuesta en una tabla.
2. **Obtención de certificado SSL**: Se puede hacer una petición GET para obtener el certificado SSL de un dominio.

---

## Instalación y Ejecución

### 1. Clonar el repositorio

```bash
  git clone https://github.com/jhonpardomo/pruebaTec.git
  cd PRUEBATECNICA
```

### 2. Instalar dependencias

```bash
  npm install
```

### 3. Ejecutar el proyecto

```bash
  node main.js
```

Al ejecutar este comando, la aplicación consumirá la API de JSONPlaceholder y mostrará la respuesta en formato de tabla.

---

## Uso de la API - Obtención de Certificado SSL

Para obtener el certificado SSL de un dominio, haz una petición GET a la siguiente URL:

```bash
  http://localhost:4444/get-cert?host=www.google.com
```

📌 **Nota:** Reemplaza `www.google.com` con el dominio que deseas consultar.

La respuesta incluirá detalles del certificado, como el emisor, la fecha de validez y el número de serie.

---

## Tecnologías utilizadas

- Node.js
- Express
- TLS
- CORS

🚀 ¡Listo! Ahora puedes usar la aplicación para consumir la API y obtener certificados SSL. 🎯

