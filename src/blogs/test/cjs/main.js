require('./a.js');
require('./b.js'); // 这里a 和 b 的 console 只会执行一次，因为单例模式，exports 是值的引用，所以 a, b里面代码只会执行一次