import ArrayBufferConverter from '../arraybufferconverter';

import getBuffer from '../getbuffer';

test('загрузить данные в буфер', () => {
  const bufferConverter = new ArrayBufferConverter();
  bufferConverter.load(getBuffer());
  // console.log(bufferConverter);
  expect(bufferConverter.buffer).toEqual(getBuffer());
});

test('вернуть строку из буфера', () => {
  const bufferConverter = new ArrayBufferConverter();
  bufferConverter.load(getBuffer());
  // bufferConverter.toString()
  // console.log(bufferConverter.toString());
  expect(bufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
