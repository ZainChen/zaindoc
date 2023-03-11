# npm 命令

---

### 排序 dependencies 和 devDependencies 中的依赖包

在不安装依赖包的情况下，对 `dependencies` 和 `devDependencies` 中的依赖包进行排序

从依赖项中删除或卸载不存在的包即可

```bash
# npm: 这是 Node.js 包管理器（Node Package Manager）的命令
# r: 缩写 remove，表示要移除某个包
# -S: 缩写 --save，表示要将依赖项写入项目的 package.json 文件
# example-package: 要移除的包的名称（随便取一个不存在的包）
npm r -S example-package
```
