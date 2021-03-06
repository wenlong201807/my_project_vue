# my_project_vue

> A Vue.js project which mock where_go

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8085
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [github_guide](https://github.com/wenlong201807/my_project_vue) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 手机端配置修改

### 在项目的入口文件处添加

```
<meta name="viewport" content="width=device-width,initial-scale=1.0
  minimum-scale=1.0,maximum-scale=1.0,user-scaleable=no
  ">
```

### 移动端会有一个 300 毫秒延迟时间

```解决方案
$ cnpm install fastclick --save
-  (可能会安装错误，多试几次，git node都可以安装)
项目开发与上线都需要 --save

# 在入口js中引入
import fastClick from 'fastclick'

# 并使之成为全局调用对象
fastClick.attach(document.body)
```

### 小图标使用阿里云字体库（fist_project_vue）

- [阿里云字体库](http://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.11&manage_type=myprojects&projectId=761001)

### css 样式使用[stylus](https://stylus.bootcss.com/)

```
> $ npm install stylus --save
> $ npm install stylus-loader --save
```

### 在 vue 中使用 sass 的配置的[方法教程](https://blog.csdn.net/lily2016n/article/details/75309492)

### 单位转换

```
reset.css中
1rem  = html(font-size =50px)
```

### 任何配置项的修改，都需要重新启动服务

> $ npm run dev || npm run start

added the demo for pull
$ git push origin index-swiper:index-swiper
git push (自己取的远程名字) 本地：远程

### [vue 中配置 less 教程](https://www.jianshu.com/p/ef09ef7293c2)

### git 合并操作

- 添加 git add ./
- 提交 git commit -m 'add something'
- 分支推送 git push(只是将本地的 index-recommend 分支与远程的 index-recommend 分支合并)
- 切换主分支 git checkout master
- `合并分支到本地主分支中 git merge index-recommend(重点)[将本地的 index-recommend 分支的内容与远程的主分支的内容合并]`
- 再推送到远程的主分支上 git push
- 完整操作结束
