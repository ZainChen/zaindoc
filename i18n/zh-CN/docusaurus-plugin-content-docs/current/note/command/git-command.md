# git 命令

---

### 删除 Git 过滤的文件和文件夹

```bash
git clean -fxd
```

### 重置分支

```bash
# 切换到旧的分支 dev
git checkout dev

# 将旧的分支 dev 重置成 master
git reset --hard master

# 再推强制送到远程仓库
git push origin dev --force
```

### 删除 tag

```bash
# 删除本地 tag
git tag --delete TagName

# 同步到远程仓库
git push origin :TagName
```
