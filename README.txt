Different things that are used for this website:
- html/njk in vscode
- markdown to html with eleventy(requires node.js)
- deploy with netlify
- domain from spaceship

Everything you need to edit is in the src folder
- index.md is the text on the left side of the site
- img_soofia.webp is the image on the right side of the site
- base.njk is the formatting of the site (in src/_includes)

To run edits
- in soofialateef.com folder, run cmd, then:
- to preview site changes
	npx eleventy --serve
- to push site changes to Netlify
	git add .
	git commit -m "updated CV"
	git push