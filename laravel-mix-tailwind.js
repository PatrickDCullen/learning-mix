let mix = require("laravel-mix");
// const config = require("laravel-mix/src/config");

class Tailwind {
    dependencies() {
        this.requiresReload = `
            Tailwind has now been installed. Please ensure that
            your tailwind.js config file (node_modules/.bin/tailwind init)
            has been created, and then run "npm run dev" again.
        `;

        return ["tailwindcss"];
    }

    boot() {
        let tailwindcss = require("tailwindcss");

        Config.postCss.push(tailwindcss("./tailwind.js"));
    }
}

mix.extend("tailwind", new Tailwind());
