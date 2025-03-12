const express = require("express");
const tls = require("tls");
const cors = require("cors");

const app = express();
app.use(cors());


app.get("/get-cert", async (req, res) => {
    const host = req.query.host;

    if (!host) {
        return res.status(400).json({ error: "Debes proporcionar un host con la siguiente estructura: Ejemplo: /get-cert?host=www.google.com" });
    }

    try {
        const cert = await getSSLCertificate(host);
        res.json(cert);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el certificado", details: error.message });
    }

});

// Función para obtener el certificado SSL
function getSSLCertificate(host, port = 443) {
    return new Promise((resolve, reject) => {
        const socket = tls.connect(port, host, { servername: host }, () => {
            const certificate = socket.getPeerCertificate();
            socket.end();

            if (certificate) {
                resolve({
                    subject: certificate.subject,
                    issuer: certificate.issuer,
                    valid_from: certificate.valid_from,
                    valid_to: certificate.valid_to,
                    fingerprint: certificate.fingerprint,
                    serialNumber: certificate.serialNumber
                });
            } else {
                reject(new Error("No se pudo obtener el certificado"));
            }
        });

        socket.on("error", (err) => {
            reject(err);
        });
    });
}

module.exports = app;

