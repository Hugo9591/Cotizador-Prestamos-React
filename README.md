# Cotizador de Préstamos en React
Cotizador de préstamos hecho con React. Permite simular préstamos con un input tipo range para elegir el monto, botones para ajustar la cantidad, y un selector para el plazo de pago. Se actualiza en tiempo real el total a pagar y la mensualidad según el monto y el plazo seleccionados. Usa Tailwind CSS para los estilos.

## Funcionalidades
- Input tipo range para seleccionar el monto a prestar (desde $0 a $20,000).
- Botones "+" y "−" para aumentar o disminuir el monto en incrementos de $100.
- Select para elegir el plazo: 6, 12 o 24 meses.
- El interés varía según el monto y el plazo:
  - A mayor cantidad prestada, menor interés.
  - A mayor plazo, mayor interés.
- Cálculo en tiempo real del total a pagar y la mensualidad.
- Componentes reutilizables y lógica separada por carpetas.

## Tecnologías utilizadas
- React
- Vite
- JavaScript
- Tailwind CSS

## Estructura del proyecto
src/
  - components/
    - Header.jsx
    - Button.jsx

helpers/
  - index.js // Lógica del cálculo
- App.jsx
- main.jsx
- index.css // Estilos con Tailwind

## Instalación

1. Clona el repositorio:
   git clone https://github.com/Hugo9591/Cotizador-Prestamos-React.git

2. Instala las dependencias:
  - npm install

3. Ejecuta el proyecto:
  - npm run dev

## Notas
El proyecto está estructurado con componentes reutilizables para mantener el código limpio y modular.
Los estilos están hechos completamente con Tailwind CSS.


