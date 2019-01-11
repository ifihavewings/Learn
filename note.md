1. nextTick是一个单独的队列，不是回调函数
2. 模块 ：
        命名空间
        闭包
        require.js AMD
        sea.js CMD
        nodejs common.js
        es6 nodules

3. 重复导入同一个模块，导入操作并不会执行两次，因为require.cache会有缓存已导入过的模。如果两个模块a和b都引入了另外一个模块c，则a和b引入的是require.cache的同一个对象
4. node 的模块有三种：
        js模块
        json模块
        node模块，c++扩展
        在导入的时候，如果不写文件扩展名，会先尝试加载js文件，如果找不到，再尝试加载json文件，再找不到，尝试加载node模块。所以，为了减少尝试次数，只有引入js文件时，才省略文件扩展名

5. 字节与编码：
        8bit = 1byte         2byte表示1个英文字母
        1024byte = 1kb

6. 进制的转换：