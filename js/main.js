const darkMode = () =>{

    let background = document.body;
    let indicator = document.querySelector("#modeLight");
    
    

    if(background.classList.contains("light")){

        background.classList.replace("light", "dark");
        background.classList.add("textColor");
        indicator.textContent = `Modo "Dark" 🌚`;

    }else{

        background.classList.replace("dark", "light")
        background.classList.remove("textColor");
        indicator.textContent = `Modo "Light" 🌝`;

    }

}


// Usuarios

class usersC{

    constructor(us, pass){

        this.name = us;
        this.password = pass;
        this.wrong = 1;

    }

}


// Usuarios registrados

let users = []

// Mensaje después de logueo

const loginMessage = (nam)=>{

    alert(`Que tenga una buena estadía ${nam}`)

}

// Registro

const register = () =>{

    // Validación del usuario

    let user = prompt("Ingrese un nombre mayor a 3 caracteres").toLowerCase();

    while(user == "" || user == null || user.length <= 3){

        user = prompt("Ingrese un nombre mayor a 3 caracteres").toLowerCase();

    }

    // Error para usuarios ya existentes

    if(users.find((nam) => nam.name == user)){

        alert("Este usuario ya existe!");
        
        return

    }

    // Validación del pass

    let pass = prompt("Ingrese un pass mayor a 8 caracteres");

    while(pass == "" || pass == null || pass.length <= 8){

        prompt("Ingrese un pass mayor a 8 caracteres");

    }

    // Escritura en el array "users"

    users.push(new usersC(user, pass));

    console.table(users);

}

// login

const login = () =>{

    // Validar usuario

    let user = prompt("Ingrese su usuario registrado").toLowerCase();

    while(user == "" || user == null || user.length <= 3){

        user = prompt("Ingrese un usuario valido").toLowerCase();

    }

    // Constatar que existe el usuario

    let rUser = users.find((nam) => nam.name == user);

    // Validar los intentos de inicio de sesión

    if(rUser.wrong >= 4){

        alert(`Usted intento iniciar sesión ${rUser.wrong} veces`);
        rUser.wrong += 1;
        return;

    }

    try{

        alert(`Bienvenido ${rUser.name}`);

    }catch(error){

        alert("Ingrese un usuario registrado")
        login()
        return

    }


    // Validar que el pass sea correcto

    let passw = prompt("Ingrese su contraseña");

    while(passw == "" || passw == null || passw.length <= 8){

        passw = prompt("Ingrese una contraseña valida");

    }

    if(rUser.password == passw){

        alert("Contraseña correcta!");

        // Resetear los intentos de inicio de sesión
        rUser.wrong = 1;
        loginMessage(rUser.name);
        

    }else{

        alert(`contraseña incorrecta 
        Usted intento iniciar ${rUser.wrong} veces
        solo tiene 3 intentos en total o se le negara
        el acceso permanentemente`);

                rUser.wrong += 1;

        return

    }


}

// Botones

// Login

let btnLogin = document.querySelector("#login");

btnLogin.addEventListener("click", login);

// Register


let btnRegister = document.querySelector("#register");

btnRegister.addEventListener("click", register);

// Darkmode

let btnDarkOrLight = document.querySelector("#darkOrLight");

btnDarkOrLight.addEventListener("click", darkMode);