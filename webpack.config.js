import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import WorkboxPlugin from 'workbox-webpack-plugin';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const isProd = process.env.NODE_ENV === 'production';

export default {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(dirname, 'dist'),
    assetModuleFilename: 'assets/[name][ext]',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/, // Для загрузки изображений и фавиконок
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]', // Помещает файлы в папку assets
        },
      },
      {
        test: /\.(mp4|webm|ogg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/videos/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      manifest: isProd ? 'assets/favicon/site.webmanifest' : 'assets/favicon/site.dev.webmanifest',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css', // Извлекает все CSS в один файл
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(dirname, 'src/assets/favicon'),
          to: 'assets/favicon',
        },
      ],
    }),
    isProd &&
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true,

        // Повышаем лимит до 10 МБ, чтобы precache схватил bundle.js
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
        // Навигационный fallback для SPA и офлайн страницы
        navigateFallback: '/CKA3Ku-MupoHy/release/index.html',

        // Этот блок настроит runtime кэш для картинок и видео
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 дней
              },
            },
          },
          {
            urlPattern: /\.(?:mp4|webm|ogg)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'videos',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 дней
              },
            },
          },
        ].filter(Boolean),
      }),
  ],
  devServer: {
    static: path.resolve(dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
