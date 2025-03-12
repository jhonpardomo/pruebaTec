async function consumirServicio() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log("PETICION OK!!!: ", data);
        return data;
    } catch (error) {
        console.error('Error en la petición:', error);
        throw error;
    }
}

module.exports = { consumirServicio };