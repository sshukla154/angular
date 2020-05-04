let message;
message = 'abc';

let firstWay = (<string>message).endsWith('c');
let secondWay = (message as string).endsWith('c');