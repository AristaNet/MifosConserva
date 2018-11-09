/**
 * Dictionary with the form's error messages, this dictionary is used by the errorMessagePipe for returning the error messages
 */
export const errorMessage = {
    required: 'Este campo es requerido',
    requiredTrim: 'Este campo es requerido',
    maxlength: `Excede el número máximo de {*} caracteres`,
    minlength: `Número mínimo de {*} caracteres requerido`,
    isNumber: 'Tiene que ser numérico',
    isPhone: 'Tiene que ser un número válido',
    isEmail: 'No es un correo válido',
    greaterThan: 'Tiene que ser mayor a {*}',
    lessThan: 'Tiene que ser menor a {*}',
    pattern: 'El formato de {*} no es válido'
};