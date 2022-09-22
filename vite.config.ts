import {defineConfig} from 'vite'
import FullReload from "vite-plugin-full-reload";
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
      clearScreen: false,
      plugins: [
        RubyPlugin(),
        FullReload(["config/routes.rb", "app/views/**/*"], {delay: 300}),
      ],

    }
)
