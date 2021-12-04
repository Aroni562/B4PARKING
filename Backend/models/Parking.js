const {Schema, model} = require("mongoose")

const parkingSchema = new Schema(
    {
        id_servicio: {type: String, required: false},
        tipo: {type: String, required: true},
        placa: {type: String, required: true},
        entrada: {type: Date, required: false},
        salida: {type: Date, required: false},
        duracion: {type: Number, requires: false},
        tarifa: {type: Number, requires: false},
        total: {type: Number, requires: false},
        vigilante: {type: String, requires: false},
    },
    {
        timestamps: false,
        versionKey: false,
    }

);

module.exports = model("Parking", parkingSchema, "parking");