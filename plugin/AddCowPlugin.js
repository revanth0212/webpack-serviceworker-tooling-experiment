module.exports = class AddCowPlugin {
  constructor(numCows) {
    this.numCows = numCows;
  }
  apply(compiler) {
    compiler.hooks.emit.tapPromise('AddCowPlugin', async compilation => {
      let cows = '';
      let numCows = this.numCows;
      while (numCows--) {
        cows += '🐄';
      }
      compilation.assets['cows.txt'] = {
        size() {
          return Buffer.byteLength(cows, 'utf8')
        },
        source() {
          return Buffer.from(cows, 'utf8');
        }
      }
    })
  }
}