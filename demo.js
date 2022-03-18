if (IS_DEV) {
  console.log('track infomation')
}
var foo;
if (CODE_FOR_IE) {
  foo = 1;
}
if (CODE_FOR_CHROME) {
  foo = 2;
}

console.log(foo);

if (CODE_FOR_IE && CODE_FOR_CHROME) {
  console.log('combine logic')
}
