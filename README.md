# juejin-imitation

Imitating JueJin page in Vue and ElementUI


## 开发文档

### 一、Git 项目管理

### 1. 拉取远程仓库到本地

打开命令行终端，进入你要存放项目代码的文件夹，输入：

> git clone https://github.com/no-warning-no-error/juejin-imitation.git

### 2. 新建开发分支

在编辑器中打开本项目，会看到 `main` 分支的代码。这个分支的代码通常需要是正式开发完成的，所以一般不在这个分支直接开发。

```shell
git branch -a  # 可查看项目的所有分支
```

新建个人开发分支：

> git switch -c xxx-dev

此时已经切换到了新建分支 （ `git branch` 可查看当前所在分支），可以自由开发。这个分支的初始内容是 `main` 分支的内容，如果你想继承单锦鹏的代码，先切换到他的分支：

> git switch shanjp-dev

此时编辑器中是单锦鹏的代码，再新建分支，新的分支的初始内容继承自他的分支。

删除分支，要先切换到别的分支：

> git branch -d xxx-dev

### 3. 运行代码

> npm install

> npm run dev  # 或 serve


### 4. 提交代码

`.gitignore` 中是默认忽视的内容，使用 `git add .` 也不会提交它们。那些文件不影响项目运行。

`git status` 查看你更改了什么；

`git add .` 将当前分支修改过的所有代码添加到暂存区；

`git commit -m "注释"` 将暂存区的代码添加到本地仓库；

`git pull origin shanjp-dev` 将远程单锦鹏分支的更新拉取下来合并，以免 push 的时候出现冲突。如果是继承自别的分支，将 `shanjp-dev` 改成该分支名字即可；

如果 `git pull` 之后出现冲突，在编辑器中选择需要保留的更改，解决所有 `<<<=== ... ===>>>` 包裹起来的冲突后再次提交代码：

> git commit -am "注释"  # -am 包括了 git add .

`git push origin xxx-dev` 推送到线上 xxx-dev 分支。
