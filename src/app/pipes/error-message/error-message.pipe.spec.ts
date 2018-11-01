import { ErrorMessagePipe } from './error-message.pipe';

describe('ErrorMessagePipe', () => {

  // it instances the pipe
  const pipe = new ErrorMessagePipe();

  const errorDict = {
    required: 'Required testing',
    maxlength: 'Maxlength testing with {*} examples of {*}'
  };

  const errors = {
    maxlength: true,
    required: true
  };

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('maxlength: Two {*} in the string', () => {
    expect( pipe.transform(errors, errorDict, { maxlength: [2, 'parameters']  }) ).toBe('Maxlength testing with 2 examples of parameters');
  });
});
