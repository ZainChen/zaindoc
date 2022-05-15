# Git 命令

---

### 重置分支

```ts
// 切换到旧的分支 dev
git checkout dev

// 将旧的分支 dev 重置成 master
git reset --hard master

// 再推强制送到远程仓库
git push origin dev --force
```

### 删除 tag

```ts
// 删除本地 tag
git tag --delete TagName

// 同步到远程仓库
git push origin :TagName
```
