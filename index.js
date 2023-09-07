/*
const { log } = require('console');
const fs = require('fs')

const leerArchivoComoString = () => {
    let datos = fs.readFileSync('./datos.txt', 'utf-8')
    console.log(datos);
}

leerArchivoComoString()

const escribirTextoEnArchivo = (ruta, texto, flag) => {
    let datos
    if(flag == true){
        fs.writeFileSync(ruta, texto)
        datos = fs.readFileSync(ruta, 'utf-8')
    } else{
        datos = 'el archivo no existe'
    }
    console.log(datos);
}

escribirTextoEnArchivo('./datos.txt', 'pepe de fue de viaje y quedo pedrito', false)

escribirTextoEnArchivo('./datos.txt', 'Pepe volvio de viaje', true)


function transformarStringEnArrayDeNumeros(texto, separador) {
    // Divide el texto en partes usando el separador
    const partes = texto.split(separador);
  
    console.log(partes);
    // Filtra las partes que son numéricas
    const numeros = partes.filter(parte => !isNaN(parte)).map(Number);
    return numeros;
  }
  
  // Ejemplo de uso
  const texto = '123 | 456 | 789 | 1bc | 10';
  const separador = ' | ';

  
/*****************

console.log(transformarStringEnArrayDeNumeros(texto, separador)) 

function transformarArrayDeNumerosAUnSoloString (array, separador){
    const string = array.join(separador)
    return string
}

const separador1 = ','

console.log(transformarArrayDeNumerosAUnSoloString(transformarStringEnArrayDeNumeros(texto, separador), separador1));

********* */
function ordenarAsc(arr){
    arr.sort(function(a, b){return a - b})
    console.log(arr);
}

array1 = [1, 5, 10] 
array2 = [2, 3, 8, 11]

function combinarDosArrays(a1, a2){
    const combinados = a1.concat(a2)
    ordenarAsc(combinados)
}

combinarDosArrays(array1, array2)

arrays = [[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]

function combinarNArrays(array){
    const a = array.flat()
    ordenarAsc(a)
}

combinarNArrays(arrays)



/*import { log } from 'console'
import fs from 'fs' */
