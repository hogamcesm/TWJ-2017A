/**
 * UsuarioMascota.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
//dueños de mascota
module.exports = {

  attributes: {

    idUsuario: {
      model: "Usuario"//tabla papá
    },
    idMascota: {
      model: "Mascota" //tabla papá
    },
    fechaDeAdopcion: {
      type: "date"
    },
    fechaDeFinalizacionAdopcion: {
      type: "date"
    }
  }
};

