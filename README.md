# docs

Source for [dotenv.org/docs](https://dotenv.org/docs)

## Development

Make changes

Initialize search data

## Build

```
bundle exec just-the-docs rake search:init
bundle exec jekyll build
cp -R _site/ ../dotenv.org/public/docs2
```
