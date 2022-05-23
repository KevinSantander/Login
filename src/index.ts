let btnSend = document.getElementById("send");

btnSend?.addEventListener("click", () => {
  let user: string = "juan";
  let pass: string = "claveJuan";
  let userU: string = datoU.value;
  let passC: string = datoP.value;

  if (user === userU && pass === passC) {
    console.log("Bienvenido!");
  } else {
    console.log("Usauario o contraseña incorrectas");
  }
});
