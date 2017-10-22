
- 移动端vue2.x swipe组件

- 拓展自```mint-ui```的```swipe```组件

- ```wind-dom```用于为dom元素添加／移除类名等

## 拓展与限制

- 新增支持垂直方向

- 垂直方向暂不支持拖动切换

- continuous为false时，切换到最后一个item后不会自动回到第一个

## 使用1: 
将```components```置于项目中，可根据需要改写

## 使用2:
直接引入输出文件：```swipe.js, swipe.css```

## 输出
- 编译swipe组件
```
./node_modules/.bin/webpack --config webpack.swipe.config.js
```

- 编译example
```
./node_modules/.bin/webpack --config webpack.example.config.js
```

