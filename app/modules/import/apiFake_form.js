let formulario = document.getElementById('formulario');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault()

    let nombreUser = document.getElementById('nombreUser').value;
    let email = document.getElementById('email').value;
    let contraseña = document.getElementById('contraseña').value

    let resp = await fetch('url',{
        method: 'POST',
        body: JSON.stringify({
            nombre: nombreUser,
            correo: email,
            contraseña: contraseña
        }), 
        headers: { 
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
})