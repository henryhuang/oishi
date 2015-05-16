# Oishi

> 为什么取名Oishi？因为当时在想名字的时候，旁边有一包上好佳。

根据landscape-plus主题和Writing主题进行修改。

## 演示

你可以点击[这里](http://www.cnhalo.com/)，查看演示。

## 安装

``` bash
$ git clone https://github.com/henryhuang/oishi.git themes/oishi
```
**Oishi 需要 Hexo 2.7 及以上版本.**

## 启用

修改主题的设置文件`_config.yml`，把`theme`的值设置为`oshi`

## 更新

``` bash
cd themes/oishi
git pull
```

## 配置

```yml
# Header
menu:
  首页: /
  归档: /archives

# Content
excerpt_link: ...
fancybox: false

# Sidebar
sidebar: 
widgets:
- category
- tag
- tagcloud
- archive
- recent_posts
- links

# Links
links:

# Miscellaneous
google_analytics:
favicon: /favicon.png
twitter:
google_plus:
fb_admins: 
fb_app_id:

# scrollUp 样式
scrollUp: image

# social
social:
  github: https://github.com/github_id
  weibo: http://weibo.com/weibo_id
```

## 所有新特性

# 更新日志
    
## 201505016

1. 多说插件和百度分享插件的配置使用hexo的config中的，不从theme的配置中读取，开启方法：
    
    在hexo的_config.yml中修修改或添加以下配置：
    
    ```
    # Duoshuo
        duoshuo_shortname: 

    # Baidu share
        baidushare: true
    ```