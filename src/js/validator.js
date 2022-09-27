export default function replacePhone(phone) {
  const strGroup1 = '(\\+7|7|8|\\+86)';
  const strGroup2 = '(\\d{3})';
  const strGroup3 = '(\\d{3})[\\s-]?(\\d{2})[\\s-]?(\\d{2})';
  const strGroup4 = '[\\s()-]*';
  const regexSring = new RegExp(
    `^${strGroup1}${strGroup4}${strGroup2}${strGroup4}${strGroup3}$`
  );
  console.log(regexSring);

  if (regexSring.test(phone, 'g')) {
    return phone.replace(
      regexSring,
      (...match) =>
        `${(match[1] === '8') | '7' ? '+7' : match[1]}${match[2]}${match[3]}${
          match[4]
        }${match[5]}`
    );
  }
  return 'Формат входящего номера недопустимый';
}
