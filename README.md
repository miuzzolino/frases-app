# Gestor de Frases con React

Aplicación web para gestión de frases construida con React y TypeScript que incluye:

✨ Creación y eliminación de frases  
🔍 Búsqueda en tiempo real  
📱 Diseño responsive con Material UI  
🧪 Tests unitarios con Vitest y Testing Library

![Captura de pantalla 2025-02-11 085246](https://github.com/user-attachments/assets/dc44a7d3-8bac-4743-ab34-16a959416d6b)

## Características Principales
- **Gestión de frases**:
  - Agregar nuevas frases
  - Eliminar frases existentes
  - Búsqueda instantánea
- **Interfaz intuitiva**:
  - Diseño responsive
  - Componentes de Material UI
  - Feedback visual inmediato
- **Arquitectura**:
  - Estado global con React Context
  - Tipado estático con TypeScript
  - Componentes reutilizables

## Tecnologías Utilizadas
- **Frontend**:
  - React 18
  - TypeScript 5
  - Material UI 5
- **Gestión de Estado**:
  - React Context API
- **Testing**:
  - Vitest
  - Testing Library
- **Bundler**:
  - Vite

## Instalación

1. Clonar repositorio
   
2. Instalar dependencias:
```
npm install
```

3. Iniciar aplicación:
```
npm run dev
```

## Uso
- Agregar nueva frase:
  - Escribe la frase en el campo de texto
  - Presiona "Agregar"

- Eliminar frase:
  - Haz clic en "Eliminar" en la tarjeta de la frase

- Buscar frases:
  - Escribe en el campo de búsqueda
  - Las resultados se actualizan automáticamente

## Testing
Ejecutar tests unitarios:

```
npm run test
```
Ejecutar tests en modo watch:

```
npm run test:watch
```

Generar reporte de cobertura:

```
npm run test:coverage
```
