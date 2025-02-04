# Sistema de Apuesta Autos

Apusta al mejor auto :)
url : https://harmonious-bavarois-fe6148.netlify.app/

## Funcionalidades del Proyecto


### Autenticación de Usuarios
| Descripción | El sistema debe permitir a los usuarios iniciar sesión con un nombre de usuario y contraseña |
|-------------|----------------------------------------------------------------------------------------------------------------|
| Requisitos  | - El sistema debe proporcionar un formulario de inicio de sesión.                                               |
|             | - El formulario debe requerir un nombre de usuario y una contraseña.                                            |
|             | - El sistema debe validar las credenciales ingresadas.                                                          |
|             | - Si las credenciales no son válidas, el sistema debe mostrar un mensaje de error apropiado.                    |

### Selección de Auto para Apostar

| Descripción | El sistema debe permitir a los usuarios seleccionar un auto para apostar. |
|-------------|-------------------------------------------------------------------------|
| Requisitos  | - El sistema debe mostrar una lista de autos disponibles para apostar.  |
|             | - El usuario debe poder seleccionar un auto de la lista.                 |
|             | - El sistema debe confirmar la selección del auto y registrar la apuesta del usuario. |

### Resultado de la Carrera

| Descripción | El sistema debe determinar y mostrar el resultado del auto ganador después de un tiempo determinado. |
|-------------|--------------------------------------------------------------------------------------------------------|
| Requisitos  | - El sistema debe iniciar un temporizador después de que el usuario seleccione un auto.               |
|             | - El temporizador debe correr por un tiempo predefinido.                                               |
|             | - Al finalizar el tiempo, el sistema debe determinar el auto ganador.                                  |
|             | - El sistema debe mostrar el resultado de la carrera al usuario, indicando si el auto seleccionado por el usuario ganó o perdió. |

## Casos de Prueba

### 1. Autenticación de Usuarios

#### Caso de Prueba 1.1: Iniciar sesión con credenciales válidas

| **Precondición** | El usuario no tiene una cuenta con credenciales válidas. |
|------------------|----------------------------------------------------------|
| **Entrada**      | Nombre de usuario y contraseña.                           |
| **Acción**       | El usuario ingresa sus credenciales en el formulario de inicio de sesión y presiona el botón de inicio de sesión. |
| **Resultado Esperado** | El sistema autentica al usuario y muestra la pantalla principal. |

#### Caso de Prueba 1.2: Iniciar sesión con credenciales inválidas

| **Precondición** | El usuario intenta iniciar sesión con credenciales incorrectas. |
|------------------|---------------------------------------------------------------|
| **Entrada**      | Nombre de usuario o contraseña en blanco.                      |
| **Acción**       | El usuario ingresa sus credenciales en el formulario de inicio de sesión y presiona el botón de inicio de sesión. |
| **Resultado Esperado** | El sistema muestra un mensaje de error indicando que las credenciales son incorrectas. |

### 2. Selección de Auto para Apostar

#### Caso de Prueba 2.1: Seleccionar un auto de la lista

| **Precondición** | El usuario está autenticado y la lista de autos está disponible. |
|------------------|---------------------------------------------------------------|
| **Entrada**      | Selección de un auto de la lista.                              |
| **Acción**       | El usuario selecciona un auto y confirma su selección.         |
| **Resultado Esperado** | El sistema registra la selección del auto y confirma la apuesta del usuario. |

### 3. Resultado de la Carrera

#### Caso de Prueba 3.1: Mostrar el resultado de la carrera después del tiempo determinado

| **Precondición** | El usuario ha seleccionado un auto y el temporizador ha iniciado. |
|------------------|---------------------------------------------------------------|
| **Entrada**      | Tiempo de espera definido (5 segundos).                        |
| **Acción**       | El temporizador llega a cero.                                  |
| **Resultado Esperado** | El sistema determina y muestra el auto ganador, indicando si el auto seleccionado por el usuario ganó o perdió. |

#### Caso de Prueba 3.2: Intentar ver resultados sin seleccionar un auto

| **Precondición** | El usuario no ha seleccionado un auto.                         |
|------------------|---------------------------------------------------------------|
| **Entrada**      | Intento de ver resultados de la carrera.                      |
| **Acción**       | El usuario intenta ver los resultados sin haber seleccionado un auto. |
| **Resultado Esperado** | El sistema no muestra ningún resultado.                       |

## TÉCNICAS DE CAJA NEGRA

### Participación de Equivalencia para Autenticación de Usuarios

| Clase válida                       | Clase invalida                                                                 |
|------------------------------------|---------------------------------------------------------------------------------|
|  usuario:igor <br> contraseña:123423 |              usuario : vacio <br> contraseña : vacion                        |
|           usuario:234igor@   <br> contraseña:2342                      |   usuario : [espacios] <br> contraseña:[especios]         |
|resultado| resultado
|accede a la pantalla principal|se muestran avisos en el formulario

### Análisis de Valor Límite para Autenticación de Usuarios

| Caso de Prueba: Iniciar sesión con credenciales válidas |
|----------------------------------------------------------|
| **Precondición** | El usuario no tiene una cuenta con credenciales válidas. |
| **Entrada**      | Nombre de usuario y contraseña.                           |
| **Acción**       | El usuario ingresa sus credenciales y presiona el botón de inicio de sesión. |
| **Resultado Esperado** | El sistema autentica al usuario y muestra la pantalla principal. |

### Detalles del Análisis de Valor Límite:

#### Detalles del Análisis de Valor Límite:

| Límite                                | Casos de Prueba                                                                 | Resultados Obtendidos                                                   |
|---------------------------------------|---------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| Límite Inferior (Nombre de Usuario)   | Prueba con un nombre de usuario muy corto (1 carácter).                          | El sistema no acepta como valido,  hay mensaje de Usuario no válido.                               |
| Límite Superior (Nombre de Usuario)   | Prueba con un nombre de usuario muy largo (más de 50 caracteres).                | El sistema no acepta como valido, No hay Mensaje de error indicando que el nombre de usuario es demasiado largo.  |
| Límite Inferior (Contraseña)          | Prueba con una contraseña muy corta (1 carácter).                                 | El sistema no acepta como valido, hay mensaje de Contraseña no válida.                             |
| Límite Superior (Contraseña)          | Prueba con una contraseña muy larga (más de 50 caracteres).                       | El sistema no acepta como valido, no hay Mensaje de error indicando que la contraseña es demasiado larga.         |
| Nombre de Usuario Corto               | Prueba con un nombre de usuario de longitud mínima aceptable.                     | Usuario aceptado correctamente.                                  |
| Nombre de Usuario Largo               | Prueba con un nombre de usuario de longitud máxima aceptable.                     | Usuario aceptado correctamente.                                  |
| Contraseña Corta                      | Prueba con una contraseña de longitud mínima aceptable.                           | Contraseña aceptado correctamente.                               |
| Contraseña Larga                      | Prueba con una contraseña de longitud máxima aceptable.                           | Contraseña aceptado correctamente.                               |
| Credenciales Incorrectas              | Prueba con combinaciones incorrectas de nombre de usuario y contraseña.           | Mensaje de error indicando que las credenciales son incorrectas.         |
| Campos en Blanco                      | Prueba con campos de nombre de usuario y contraseña vacíos.                       | Mensaje de error indicando que se deben completar ambos campos.          |

### Tabla de Decisión para Resultado de la Carrera

|codigo| Condiciones                                       | Acciones                                            | Resultado Esperado                                                   |
|-----|----------------------------------------------------|-----------------------------------------------------|----------------------------------------------------------------------|
|CA-1| Estado del temporizador: inicio                    | Selección del auto: auto1, auto2 o auto3              | EL temporizado se inicia automaticamnete                                           |
|CA-2| Estado del temporizador: ejecución                 | Temporizador en cuenta regresiva                      | Muestra el mensaje de cuenta regresiva                                        |
|CA-3| Estado del temporizador: finalización              | Temporizador ha llegado a cero, Determinar el ganador | Muestra el mensaje de resultados                                          |
|CA-4| Selección de auto: Auto 1, Auto 2, Auto 3          | Mostar el resultado, han seleccionado su auto ganador o perdido       | Muestra los resultado en cola, un resultado seguido del otro.

Observaciones : Para la condicion[CA-4]  de seleccion seguida de autos, agergar una alerta que espere el usuairo una vez selecionado el auto, el usuario debera esperar hasta que los resultados sean mostrados.

