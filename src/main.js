const app = require("./server");
const { consumirServicio } = require('./peticion');

async function main() {

    const PORT = 4444;

    app.listen(PORT, async () => {
        console.log(`Ejecutandose en http://localhost:${PORT}`);

        try {
            console.log("\n Consumiendo servicio jsonplaceholder.typicode ...");
            const resp = await consumirServicio();
            console.log('\nProcesando datos...');
            console.table([resp]);
        } catch (error) {
            console.error("Error al consumir el servicio:", error);
        }
    });
}

main();