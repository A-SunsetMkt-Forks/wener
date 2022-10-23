SHELL:=env bash -O extglob -O globstar

status:
	git add -u && git diff --staged --stat | tee

pull:
	git pull --rebase --autostash origin master

prepare-tikz:
	apk add texlive icu-data-full texmf-dist-latexextra texmf-dist-langchinese texmf-dist-pictures
	apk add -X http://mirrors.aliyun.com/alpine/edge/testing pdf2svg

tikz:
	time node ./site/dist/scripts/tikz2svg.js ./notes/courses/cs221/assets/*.tikz

svgo:
	pnpm svgo ./notes/courses/cs221/assets/*.svg
