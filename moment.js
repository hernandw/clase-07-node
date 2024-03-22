const moment = require('moment');
const chalk = require('chalk');
const {v4: uuidv4} = require('uuid');
moment.locale('es');


const hoy = moment()
const formato = 'dddd Do MMMM YYYY'
const ayer = moment().subtract(1, 'days')
const manana = moment().add(1, 'days')
const fechaDiezDias = moment().add(10, 'days')
const fechaUnMes = moment().add(1, 'month')
const fechaExacta = moment('2022-01-01')
const diasXmes = moment().daysInMonth()
const diasmes = moment([2022, 0]).daysInMonth()

console.log(hoy)

console.table({
    hoy: hoy.format(formato),
    ayer: ayer.format(formato),
    manana: manana.format(formato),
    fechaDiezDias: fechaDiezDias.format(formato),
    fechaUnMes: fechaUnMes.format(formato),
    fechaExacta: fechaExacta.format(formato),
    diasXmes,
    diasmes

    



})

const consulta = {
  // Paso 3
  fecha: moment().add(10000, "days").format("MMM Do YYYY"),
  // Paso 4
  ID: uuidv4(),
};

console.log(consulta)
