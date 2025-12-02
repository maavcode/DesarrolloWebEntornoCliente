import React, { useState } from 'react';

function RegistroUsuarios() {
  // 1. Crea un useState cuya variable se llame "formData" que almacene un objeto con tres propiedades: name, email y password. 
  // Por ahora, cada propiedad, almacenará una cadena vacía ''
  const [formData, setFormData] = useState(
    {
      name: '',
      email: '',
      password: ''
    }
);

  // 2. Crea un useState cuya variable se llame "users" que almacene un array de usuarios. Por ahora vacío. 
  // Almacenará la "base de datos" de todos los usuarios registrados.
  const [users, setUsers] = useState([]);


  // Función para manejar el cambio en cualquier input (onChange)
  const handleInputChange = (e) => {
    // Usamos el atributo 'name' del input para saber qué propiedad del objeto actualizar
    const target = e.target;

    const name = target.name;
    const value = target.value;

    // Añado el value
    setFormData({
      ...formData,
      [name]: value // Campo calculado
    })
  };

  // Función para manejar el envío del formulario (onSubmit)
  const handleSubmit = (e) => {
    //Prevenir la recarga de la página
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Creamos un nuevo objeto de usuario con un ID único (Date.now()) y los datos del formulario
    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      password: formData.password,
      registeredAt: Date().toLocaleLowerCase()
    }

    // Actualizamos el Array de usuarios:
    // Creamos un nuevo array con todos los usuarios existentes y el nuevo objeto.
    setUsers(
      [...users, newUser]
    )

    // Reseteamos el Objeto del formulario para vaciar los inputs
    setFormData({
      name: '',
      email: '',
      password: ''
    })
    
    // Muestra un alert que indique que el nuevo usuario ha sido creado
    alert('Usuario creado')
    
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1> Formulario de Registro</h1>
      
      {/* El Formulario */}
      <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        
        {/* Campo Nombre */}
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name" // Importante: Debe coincidir con la clave del objeto formData
          value={formData.name} // Vinculación controlada: el valor viene del estado
          onChange={handleInputChange}
          required
        />
        <br/><br/>
        
        {/* Campo Email */}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <br/><br/>

        {/* Campo Contraseña */}
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <br/><br/>
        
        <button type="submit">Registrar Usuario</button>
      </form>

      {/* -------------------- */}
      {/* ---------NO MODIFICAR NADA A PARTIR DE AQUÍ--------- */}
      
      <h2> Usuarios Registrados ({users.length})</h2>
      
      {/* Mostrar el Array de Objetos */}
      {users.length === 0 ? (
        <p>Aún no hay usuarios registrados.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {users.map(user => (
            <li key={user.id} style={{ borderBottom: '1px dotted #eee', padding: '10px 0' }}>
              <strong>ID:</strong> {user.id}<br/>
              <strong>Nombre:</strong> {user.name}<br/>
              <strong>Email:</strong> {user.email}<br/>
              <small>Registrado en: {user.registeredAt}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RegistroUsuarios;