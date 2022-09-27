import replacePhone from '../validator';

test('should replace a phone number type +7(+86)xxx with a proper type, method replacePhone', () => {
  const expected = '+79600000000';
  const received = replacePhone('+7 960 000 00 00');
  expect(received).toBe(expected);
});

test('should replace a phone number type 8xxx with a proper type, method replacePhone', () => {
  const expected = '+79161234567';
  const received = replacePhone('8 (916) 123-45-67');
  expect(received).toBe(expected);
});

test('should replace a phone number type 8xxx with a proper type, method replacePhone', () => {
  const expected = '+78001234567';
  const received = replacePhone('7 800 123 45-67');
  expect(received).toBe(expected);
});

test('shoud test a valid phone number (digits count), method replacePhone', () => {
  const expected = 'Формат входящего номера недопустимый';
  const received = replacePhone('+7 00 000 0000');
  expect(received).toBe(expected);
});
