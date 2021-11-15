// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// phone number function unit tests
test('negative phone number 1', () => {
    expect(functions.isPhoneNumber('6116116111')).toBe(false);
});

test('negative phone number 2', () => {
    expect(functions.isPhoneNumber('6121231111123423402200234234234')).toBe(false);
});

test('positve phone number 1', () => {
    expect(functions.isPhoneNumber('(611) 110-2200')).toBe(true);
});

test('negative phone number 2', () => {
    expect(functions.isPhoneNumber('(631) 110-2344')).toBe(true);
});
  
// email function unit tests 
test('positive easy email', () => {
    expect(functions.isEmail('hello@gmail.com')).toBe(true);
});

test('positive hard email', () => {
    expect(functions.isEmail('HoWAreUDoingMonSierur@aol.com')).toBe(true);
});

test('negative easy email', () => {
    expect(functions.isEmail('123^#!*(#@hot.helloLmao')).toBe(false);
});

test('negative hard email', () => {
    expect(functions.isEmail('HoWAreUDoingMonSierur@wassupProfessor.thistestingStuffisHard')).toBe(false);
});

// strong password function unit tests 
test('positive easy strong password test', () => {
    expect(functions.isStrongPassword('hihowareyou')).toBe(true);
});

test('positive hard strong password test', () => {
    expect(functions.isStrongPassword('A123456789')).toBe(true);
});

test('negative easy strong password test', () => {
    expect(functions.isStrongPassword('1234andeasypeezy')).toBe(false);
});

test('negative hard strong password tet', () => {
    expect(functions.isStrongPassword('nevergonnagiveyouupnevergonnaletyoudown')).toBe(false);
});

// is date function unit tests 
test('positive date 1', () => {
    expect(functions.isDate('01/02/1999')).toBe(true);
});

test('positive date 2', () => {
    expect(functions.isDate('1/2/2099')).toBe(true);
});

test('negative date 1', () => {
    expect(functions.isDate('123213')).toBe(false);
});

test('negative date 2', () => {
    expect(functions.isDate('123-123-123')).toBe(false);
});

// isHexColor function unit tests 
test('positive Color 1', () => {
    expect(functions.isHexColor('#800000')).toBe(true);
});

test('positive Color 2', () => {
    expect(functions.isHexColor('#FF0000')).toBe(true);
});

test('negative Color 1', () => {
    expect(functions.isHexColor('******')).toBe(false);
});

test('negative Color 2', () => {
    expect(functions.isHexColor('Bruhhhhh')).toBe(false);
});