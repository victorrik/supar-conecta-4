import dayjs from "dayjs";
import 'dayjs/locale/es-mx';

dayjs.locale('es-mx')
	
const { floor, random } = Math;

const esproduccion = import.meta.env.VITE_ISONPRODUCTION;

export const sleep = (timeAwait  = 0.5) =>
  new Promise((resolve , reject) =>
    setTimeout(() => {
      resolve();
    }, timeAwait * 1000)
  );

export const rndInterger = (min = 0, max = 100) => floor(random() * (max - min + 1)) + min;

/**
 * Busca si existe la palabra o letra dentro de un string
 * Ejemplo  "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."	
 * buscamos "ipsum"
 * @param value Sobre el que vamos a buscar
 * @param valueToSearch El que vamos a buscar
 * @returns boolean
 */
export const checkString = (value,valueToSearch) => removeSpecial(value.toLowerCase()).indexOf(removeSpecial(valueToSearch.toLowerCase())) !== -1;
export const removeSpecial=(value)=>value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

//type FormatDates = "default" | "postCard" | "postMiniCard"

export const formatDate = (value,typeFormat  = "default") => { 
	const listFormats = {
		default:"DD/MM/YYYY HH:mm",
		postCard:"DD MMMM YYYY",
		postMiniCard:"DD/MM/YYYY HH:mm"
	}
	return dayjs(value).format(listFormats[typeFormat])
}
