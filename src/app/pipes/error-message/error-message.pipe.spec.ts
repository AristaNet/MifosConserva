import { ErrorMessagePipe } from './error-message.pipe';

describe('ErrorMessagePipe', () => {

  // it instances the pipe
  const pipe = new ErrorMessagePipe();

  // Dictionary of errors
  const errorDict = {
    required: 'Required testing',
    maxlength: 'Maxlength testing with {*} examples of {*}'
  };

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('maxlength: Two {*} in the string', () => {
    expect( pipe.transform({ maxlength: true }, errorDict, { maxlength: [2, 'parameters']  }) ).toBe('Maxlength testing with 2 examples of parameters');
  });

  it('maxlength: Two {*} in the string with bad param array', () => {
    expect( pipe.transform({ maxlength: true }, errorDict, { maxlength: 2  }) ).toBe('Maxlength testing with {*} examples of {*}');
  });

  it('required testing', () => {
    expect( pipe.transform({ required: true }, errorDict) ).toBe('Required testing');
  });

  it('required testing with params', () => {
    expect( pipe.transform({ required: true }, errorDict, { maxlength: [50]}) ).toBe('Required testing');
  });

  it('required testing with empty param', () => {
    expect( pipe.transform({ required: true }, errorDict, {}) ).toBe('Required testing');
  });

  it('required testing with param and bad array on the property', () => {
    expect( pipe.transform({ required: true }, errorDict, { required: 10 }) ).toBe('Required testing');
  });

  it('without erros', () => {
    expect( pipe.transform({}, errorDict) ).toBe('');
  });

  it('bad error', () => {
    expect( pipe.transform('hola', {}) ).toBe(null);
  });

  it('without dictionary', () => {
    expect( pipe.transform({}, {}) ).toBe('');
  });

  it('bad dictionary', () => {
    expect( pipe.transform({}, 12) ).toBe(null);
  });

});
