

# actualizacion de pnpm

corepack prepare pnpm@latest --activate

# creacion del proyecto con vite usando pnpm
# usamos configuracion Vanilla JS

pnpm create vite


# agregamos vitest para hacer test automaticos

pnpm add -D vitest

# repositorio github 

git init
git add .
git commit -am "version 0.1 blockchain JS"
git remote add origin https://github.com/jmptrader/adchain.git
git branch -M master
git push -u origin master
