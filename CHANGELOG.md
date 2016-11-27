# Change Log

## [1.1.0]

### Added
- add life category to menu, configure way:

	add "categories: life" and "indexhide: true" in post attribute when you create a post

- pt-BR.yml

  new language, file name according to [http://www.lingoes.net/en/translator/langcode.htm](http://www.lingoes.net/en/translator/langcode.htm).

- 社交联系开启方式改从Hexo的config中获取，不从theme的配置中读取，开启方法：
      
  在hexo的_config.yml中修修改或添加以下配置：

    ```
    # social
    social:
      github: YOUR GITHUB URL
      weibo: YOUR WEIBO HOME PAGE URL
    ```
    
### Modified
- change the menu data config
	
	Now the **Oishi** will read the menu data config from site/source/_data/menu.yml (see [Official document](https://hexo.io/docs/data-files.html)) firstly. 
	
 	If the site/source/_data/menu.yml isn’t exists, the theme will read the theme’s config which the default config in version 1.0.0 to make the site’s menu.

## [1.0.0]
### Added
- All
