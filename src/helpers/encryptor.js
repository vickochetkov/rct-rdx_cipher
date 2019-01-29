export const encryptor = (str, key, abc) => {
  return str
    .toUpperCase()
    .split('')
    .map((ltr, i) => abc[(abc.indexOf(ltr) + key[i % key.length]) % abc.length]);
};
