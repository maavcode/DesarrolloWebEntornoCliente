# 📊 Proyecto Final DWEC — Gestor de Ingresos y Gastos

Este proyecto es mi **Trabajo Final de la asignatura DWEC (Desarrollo Web en Entorno Cliente)**.  
Consiste en una aplicación web completa para gestionar **ingresos, gastos, estadísticas y resúmenes financieros**, desarrollada con **React + Vite** y conectada a **Firebase** para autenticación y almacenamiento en la nube.

El objetivo del proyecto es demostrar el uso de:

- Componentes y controles en React
- Hooks (useState, useEffect, useContext…)
- Context API (gestión de usuario con AuthContext)
- Firebase Authentication
- Firebase Firestore (base de datos en tiempo real)
- React Router (navegación SPA)
- Chart.js (gráficas dinámicas)
- Buenas prácticas de estructura y modularización

---

# 🚀 Tecnologías utilizadas

| Tecnología | Uso |
|-----------|-----|
| **React** | Interfaz y componentes |
| **Vite** | Entorno de desarrollo rápido |
| **Firebase Auth** | Inicio de sesión y control de usuario |
| **Firebase Firestore** | Base de datos de movimientos y categorías |
| **React Router** | Navegación entre páginas |
| **Chart.js + react-chartjs-2** | Gráficos de barras y circulares |
| **TailwindCSS** | Estilos rápidos y responsivos |
| **Context API** | Gestión global del usuario |

---

# 📁 Estructura del proyecto

```
├── 📁 public
│   └── 🖼️ vite.svg
├── 📁 src
│   ├── 📁 assets
│   │   └── 🖼️ react.svg
│   ├── 📁 backend
│   │   ├── 📄 categoriasRepository.jsx
│   │   └── 📄 movimientosRepository.jsx
│   ├── 📁 frontend
│   │   ├── 📁 components
│   │   │   └── 📄 BotonNuevoIngresoGasto.jsx
│   │   ├── 📁 controls
│   │   │   ├── 📄 Estadisticas.jsx
│   │   │   ├── 📄 IngresosGastos.jsx
│   │   │   ├── 📄 Inicio.jsx
│   │   │   └── 📄 Resumenes.jsx
│   │   └── 📁 pages
│   │       ├── 📄 Home.jsx
│   │       ├── 📄 Login.jsx
│   │       └── 📄 NuevoIngreso.jsx
│   ├── 📄 App.jsx
│   ├── 📄 AuthContext.jsx
│   ├── 📄 firebaseConfig.js
│   ├── 🎨 index.css
│   ├── 📄 main.jsx
│   └── 📄 rules
├── ⚙️ .gitignore
├── 📝 README.md
├── 📄 eslint.config.js
├── 🌐 index.html
├── ⚙️ package-lock.json
├── ⚙️ package.json
└── 📄 vite.config.js
```

---

## 📁 **backend/**
Contiene la lógica de acceso a Firebase.

### 📄 **categoriasRepository.jsx**
- CRUD de categorías  
- Obtención en tiempo real desde Firestore  
- Creación de nuevas categorías  

### 📄 **movimientosRepository.jsx**
- CRUD de movimientos (ingresos y gastos)  
- Guardado en Firestore  
- Lectura en tiempo real  
- Conversión de datos  

---

## 📁 **frontend/**
Toda la parte visual del proyecto.

### 📁 components/
Componentes pequeños y reutilizables.

#### 📄 **BotonNuevoIngresoGasto.jsx**
Botón que redirige al formulario para crear un nuevo movimiento.

---

### 📁 controls/
Controles principales que se muestran dentro del panel derecho.

#### 📄 **Inicio.jsx**
Pantalla principal del usuario.  
Incluye:
- Resumen del mes (ingresos, gastos, balance)
- Ingreso más alto del mes
- Gasto más alto del mes
- Gráfico circular por categorías del mes

#### 📄 **IngresosGastos.jsx**
Tabla paginada con todos los movimientos.  
Incluye:
- Tipo
- Cantidad
- Categoría
- Descripción
- Fecha  
Con paginación y orden cronológico.

#### 📄 **Estadisticas.jsx**
Pantalla de estadísticas generales.  
Incluye:
- Gráfico de barras (Ingresos vs Gastos)
- Gráfico circular por categorías

#### 📄 **Resumenes.jsx**
Resumen general de ingresos y gastos por categorías.

---

### 📁 pages/
Páginas completas que forman la estructura principal.

#### 📄 **Home.jsx**
Layout principal tras iniciar sesión.  
Contiene:
- Sidebar
- Panel derecho donde se cargan los controles

#### 📄 **Login.jsx**
Pantalla de inicio de sesión con Firebase Auth.

#### 📄 **NuevoIngreso.jsx**
Formulario para crear un nuevo movimiento.  
Incluye:
- Tipo (Ingreso/Gasto)
- Cantidad
- Categoría (solo si es gasto)
- Descripción
- Fecha (DatePicker)

---

## 📄 **App.jsx**
Define las rutas principales de la aplicación.

## 📄 **AuthContext.jsx**
Contexto global para gestionar el usuario autenticado.

---

# ▶️ Cómo ejecutar el proyecto

```bash
npm install
npm run dev