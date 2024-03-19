function ingreso(name = "nombreCompleto", id = "documento") {
    alert("Bienvenido " + name + ". " + "¡Registración exitosa! Tu usuario es: " + id + ". Podrás ver tu contraseña asignada por defecto en tu correo electrónico. Es necesario que la cambies en un plazo de 24 hs. Luego, estarás listo para operar.");
}

let nombreCompleto = prompt("Ingresá tu nombre completo");
let id = prompt("Ingresá tu número de documento");
let correo = prompt("Ingresá tu correo electrónico");
let edad = prompt("Si sos mayor de edad respondé : SI");

ingreso(nombreCompleto, id)

class user {
    constructor(dni, mail, password) {
        this.usuario = dni;
        this.correoElectronico = mail;
        this.contraseña = password;
    }
}

const user1 = new user(id, correo, "asd12345");
console.log(user1);


const listaUsuarios = [id, correo, nombreCompleto];
listaUsuarios.push("Acceso por página web");

console.log(listaUsuarios)

const legalidad = [{ edad: 18 }];
if (edad.toLocaleUpperCase() == "SI") {
    console.log(legalidad.some((anios) => anios.edad >= 18));
} else {
    alert("No eres mayor de edad. Puedes simular una transacción pero no podrás operar de manera oficial.")
}



alert("Simulá de manera de gratuita tus rendimientos en plazo fijo a interés simple en solo un click.")
alert("TNA al día de la fecha = 125%")
console.log(new Date())
let capital = Number(prompt("Ingresá el capital a invertir"));
let plazo = Number(prompt("Ingresá la cantidad de días de inversión"));
let tasa = 125 / 365 / 100;
let resultado = capital * plazo * tasa



if ((capital >= 1000) && (plazo >= 30)) {
    alert("El resultado de tu inversión sería $" + resultado);
} else {
    alert("Error: El monto mínimo a invertir son $1000 y el plazo mínimo de inversión son 30 días.");
}

alert("Escriba FCI, TP, INV para explorar otras alternativas de inversión o ESC para finalizar las consultas")
let ejemplos = prompt("Ingrese la opción que desee")

while (ejemplos.toUpperCase() != "ESC") {
    switch (ejemplos) {
        case "FCI":
            alert("Invierte en un FCI con rendimientos del 1,37% diarios");
            break;
        case "TP":
            alert("Invertí en TP con rendimientos en dólares de un 8% anual");
            break;
        case "INV":
            alert("Invertí en acciones, bonos y obligaciones negociables con rendimientos cercanos al 200% anual. Solo para perfiles de alto riesgo");
            break;
    }
    ejemplos = prompt("Ingresar otra opción que desee consultar o escriba ESC para finalizar")
}


