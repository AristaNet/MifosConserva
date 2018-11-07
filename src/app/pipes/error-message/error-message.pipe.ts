import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe to return the errors of the inputs form
 * 
 * @example
 * // The dictionary (it's a simple javascript object)
 *  let errorDictionary = {
 *              required: 'This field is required',
 *              maxlength: 'This field only supports {*} characters'
 *  };
 * 
 *  // ======================== THIS EXAMPLES ARE IN THE TEMPLATE AS PIPES ======================
 * 
 *  // First example: The input has a validator as required, when "formPersonalData.get('firstname')" is invalid, "formPersonalData.get('firstname').errors" returns an object
 *  // like this { required: 'The message' }, then the pipe detects the error and returns it
 * 
 * 
 * 
 *  // The errorMessage pipe recieves as parameter a error dictionary (this is in the HTML)
 *  {{ formPersonalData.get('firstname').errors | errorMessage: errorDictionary  }}
 * 
 * 
 * 
 *  // in the another example, the ṕipe recieves 2 arguments, the first is the dictionary and the second is the values that replaces over the messages
 *  // in the second param, it tells when the "maxlength" message gets a "{*}" it will be replaced by 50, then the messages would returns like this
 *  // "This field only supports 50 characters" instead like this "This field only supports {*} characters".
 * 
 * // Second example (this is in the HTML):
 *  {{ formPersonalData.get('firstname').errors | errorMessage: errorDict : { maxlength: [50] } }}
 * 
 * 
 *  // The message can have more "{*}", in that case the array will have more items. we changes the maxlength message like this
 * errorDictionary.maxlength = "This field only supports {*} characters for {*}"
 * 
 * // then we add a second element to the array ("testing")(this is in the HTML)
 * {{ formPersonalData.get('firstname').errors | errorMessage: errorDict : { maxlength: [50, "testing"] } }}
 * 
 * // The message returned is "This field only supports 50 characters for testing"
 */

@Pipe({
  name: 'errorMessage'
})
export class ErrorMessagePipe implements PipeTransform {

  /**
   * Pipe for getting messages of errors of the form fields
   * 
   * @param value Object of errors (formPersonalData.get('firstname').errors)
   * @param dict Dictionary with the same keys of the errors returned from the value (formPersonalData.get('firstname').errors)
   * @param opts Options by replacing the "{*}" over the string message, indicating the key (e.g: maxlength, required) for applying the replace to the correct error message
   * @returns The first error message found
   */

  transform(value: any, dict: any, opts: any = {}): string {

    // it checks that the inputs 
    if ((typeof value != 'object') || Array.isArray(value) || (typeof dict != 'object') || Array.isArray(dict)) return null;

    // it gets the key
    const regex: RegExp = /{\*}/;
    const errKey: string = Object.keys( value )[ 0 ]; // required
    const valuesReplace: any[] = opts[ errKey ];
    let msg: string = errKey ? dict[ errKey ] : '';
    

    if (Array.isArray( valuesReplace )) {
      for (let o of valuesReplace) {
        if (!regex.test( msg )) break;
        msg = msg.replace(regex, o);
      }
    }

    return msg;
  }

}
