# Instrucciones para actualizar los eventos

Este archivo explica cómo funciona la sección de tipos de evento y cómo actualizar los datos usando archivos JSON.

## Estructura general

Cada tipo de evento debe tener su propio archivo JSON dentro de `src/data/event-types/`.

Por ejemplo:

- `src/data/event-types/social-parties.json`
- `src/data/event-types/open-air.json`
- `src/data/event-types/concerts.json`
- `src/data/event-types/collab.json`

Cada archivo describe un tipo de evento y controla:

- cómo se muestra el botón en la página
- si el botón está habilitado o deshabilitado
- qué contenido aparece en el modal cuando se selecciona

---

## Campos del JSON

Cada archivo JSON debe contener los siguientes campos:

### `id`

Identificador único del tipo de evento.
Ejemplo: `"social-parties"`

### `title`

Título visible del tipo de evento.
Ejemplo: `"Fiestas sociales"`

### `subtitle`

Subtítulo o frase corta explicativa.
Ejemplo: `"Encuentros abiertos para bailar y conectar"`

### `description`

Texto principal con la información más importante.
Ejemplo: `"Festeja con música y forró libre.
Ideal para bailarines de todos los niveles."`

### `status`

Controla si el botón está activo o desactivado.

- Si pones `"activo"`, el botón se muestra habilitado.
- Si pones cualquier otro valor, el botón se muestra gris y no se puede abrir el modal.

Este campo es el más importante para una persona que no sabe programar.

### `highlights`

Lista de puntos destacados del evento.
Ejemplo:

```json
"highlights": [
  "Música en vivo",
  "Clases exprés",
  "Ambiente relajado"
]
```

### `when`

Fecha u horario del evento.
Ejemplo: `"Viernes 22:00 - 01:00"`

### `where`

Lugar donde se realiza.
Ejemplo: `"Salón principal"`

### `link`

Enlace externo opcional para más información o compra de entradas.
Ejemplo: `"https://tusitio.com/entradas"`

### `note` o `help`

Este campo se usa solo como guía para quien edita.
No se muestra en el modal, pero ayuda a entender qué debe escribirse.
Ejemplo: `"Pon 'activo' para habilitar el botón."`

### `image`

URL de imagen opcional para mostrar en el modal.
No es obligatorio.
Ejemplo: `"https://.../fiesta.jpg"`

---

## ¿Por qué JSON?

JSON es sencillo y fácil de editar con cualquier editor de texto.

### Ventajas

- No se necesita saber programar.
- No hay funciones ni código, solo datos.
- Es claro y estructurado.
- Se puede mantener un archivo por cada tipo de evento.

### Nota sobre los comentarios

JSON no permite comentarios dentro del mismo archivo.
Por eso usamos un campo `note` o `help` para dejar instrucciones directamente en el archivo.

---

## Ejemplo de archivo JSON funcional

```json
{
  "id": "social-parties",
  "title": "Fiestas sociales",
  "subtitle": "Encuentros abiertos para bailar y conectar",
  "description": "Festeja con música y forró libre. Ideal para bailarines de todos los niveles.",
  "status": "activo",
  "highlights": ["Música en vivo", "Clases exprés", "Ambiente relajado"],
  "when": "Viernes 22:00 - 01:00",
  "where": "Salón principal",
  "link": "https://entradas.forrosevilla.com/",
  "image": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop",
  "help": "Pon 'activo' en status para habilitar este tipo de evento. Usa 'inactivo' o cualquier otro valor para deshabilitarlo."
}
```

---

## Reglas para actualizar

1. Copia un archivo JSON existente para crear un nuevo tipo de evento.
2. Cambia `id`, `title`, `subtitle`, `description`, `when`, `where` y `highlights` según corresponda.
3. Mantén `status` como `"activo"` si quieres que el botón funcione.
4. Deja `status` en otro valor si quieres que el botón se vea deshabilitado.
5. Si necesitas ayuda, modifica el texto del campo `help`.

---

## Ejemplo de uso práctico

- Si quieres mostrar que hay actividad para "Rodas al aire libre", crea un archivo `open-air.json`.
- Si la actividad está disponible, pon `"status": "activo"`.
- Si aún no hay fecha o no se puede reservar, pon `"status": "inactivo"`.

Así, cualquier persona puede activar o desactivar un tipo de evento sin tocar el código.
