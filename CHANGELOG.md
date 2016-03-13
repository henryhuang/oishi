# Change Log

## [Unreleased]
### Added
- add life category to menu, configure way:

	add "categories: life" and "indexhide: true" in post attribute when you create a post

- pt_br.yml

## [1.0.0]
### Added
- All

## [1.1.0]
### Modified
- change the menu data config
	
	Now the theme will read the menu data config from site/source/_data/menu.yml (see [Official document](https://hexo.io/docs/data-files.html)) firstly. 
	
	If the site/source/_data/menu.yml isn’t exists, the theme will read the theme’s config which the default config in version 1.0.0 to make the site’s menu. 