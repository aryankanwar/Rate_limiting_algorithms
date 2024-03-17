const TokenBucket =  require('./tokenbucket.js');

const tokenBucket = new TokenBucket();
console.log(tokenBucket.tryConsume()); // Outputs: true (tokens available)
console.log(tokenBucket.tryConsume()); // Outputs: true (tokens available)
console.log(tokenBucket.tryConsume()); // Outputs: true (tokens available)
console.log(tokenBucket.tryConsume()); // Outputs: true (tokens available)
console.log(tokenBucket.tryConsume()); // Outputs: true (tokens available)
console.log(tokenBucket.tryConsume()); // Outputs: false (no tokens available)
