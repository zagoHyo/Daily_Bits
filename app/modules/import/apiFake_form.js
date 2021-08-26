const crear = async () => { 
        let nombre = document.getElementById('nombre').value
        let nombreUser = document.getElementById('nombreUser').value;
        let email = document.getElementById('email').value;
        let contraseña = document.getElementById('password').value

        console.log(nombre, nombreUser, email, contraseña)

        let resp = await fetch('http://localhost:4000/usuarios',{
            method: 'POST',
            body: JSON.stringify({
                nombre: nombre,
                correo: email,
                contraseña: contraseña
            }), 
            headers: { 
                "Content-Type": "application/json; charset=UTF-8"
            }})

}
export {crear}

