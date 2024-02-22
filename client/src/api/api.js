import axios from "axios";

// LISTA LOS ASPIRANTES

export const listarAspirantes = async () => {
    try {
        const response = await axios.get("http://localhost:3030/api/aspirantes")
        return response.data.data

    } catch (error) {
        console.log("error en los datos");
    }
}

export const listarProfesiones = async () => {
    try {
        const response = await axios.get("http://localhost:3030/api/profesiones")
        return response.data.data
    } catch (error) {
        console.log("error en los datos");
    }
}