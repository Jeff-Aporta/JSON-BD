"use strict";

const memoria = require("./app/memoria");


// setTimeout(() => {
//   memoria.EXEC({
//     DELETE: [
//       {
//         USUARIOS: {
//           1: {
//             "info.json": {
//               nombre: "Juan",
//               apellido: "Perez",
//               edad: 21,
//               email: "juanperez@gmail.com",
//             },
//           },
//         },
//       },
//       {
//         USUARIOS: {
//           2: {
//             "info.json": {
//               nombre: "Pedro",
//               apellido: "Gomez",
//               edad: 31,
//               email: "pedrogomez@gmail.com",
//             },
//           },
//         },
//       },
//     ],
//   });
// }, 1000);

setTimeout(() => {
  memoria.EXEC({
    DOC: {
      USUARIOS: {
        1: {
          "info.json": {
            nombre: "Juan",
            apellido: "Perez",
            edad: 21,
            email: "juanperez@gmail.com",
          },
        },
        2: {
          "info.json": {
            nombre: "Pedro",
            apellido: "Gomez",
            edad: 31,
            email: "pedrogomez@gmail.com",
          },
        },
      },
    },
  });
}, 5000);


console.log(JSON.stringify(memoria.PACK(), null, 2));
