reconocer_voz = window.webkitSpeechRecognition;
comando = new reconocer_voz();
comando.lang = "es-MX";
texto_detectado = "";
listo = false;

function comenzar() {
    comando.start();
    listo = false;
}

comando.onresult = function (e) {
    console.log(e);
    texto_detectado = e.results[0][0].transcript;
    document.getElementById("texto_entendido").innerHTML = "Yo te entendi:" + texto_detectado;
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    background("green");
}

function draw() {
    fill("pink");
    if (!listo) {
        switch (texto_detectado) {
            case "círculo":
                circle(Math.random() * 300, Math.random() * 300, 50);
                listo = true;
                break;
            case "estrella":
                star(Math.random() * 300, Math.random() * 300, 20, 60, 5);
                listo = true;
                break;
        }
    }
}

function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
}