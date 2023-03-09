import create_config from '@kucrut/vite-for-wp';
import path, { resolve } from 'path'
import { defineConfig } from 'vite';

// export default defineConfig({
//     build: {
//         rollupOptions: {
//             input: {
//                 'js': resolve(__dirname, 'assets/src/js/main.js'),
//                 'css': resolve(__dirname, 'assets/src/css/main.scss')
//             },
//             output: [
//                 {
//                     dir: resolve(__dirname, 'assets/dist/css'),
//                     entryFileNames: '[name].scss'
//                 },
//                 {
//                     dir: resolve(__dirname, 'assets/dist/js'),
//                     entryFileNames: '[name].js'
//                 }
//             ]
//         }
//     },
//     resolve: {
//         alias: {
//             '@': path.resolve(__dirname)
//         }
//     }
// })
// export default create_config( 'assets/src/js/main.js', 'assets/dist/', {
//     resolve: {
//         alias: {
//             '@': path.resolve(__dirname)
//         }
//     },
// });

export default create_config( 
    {
        main: "assets/src/js/main.js",
        extra: "assets/src/js/extra.js"
    }, 
    'assets/dist/',
    {
        resolve: {
            alias: {
                '@': path.resolve(__dirname)
            }
        },
    }
);