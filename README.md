# Honyaku

Connect readers and translators

## Install

```bash
git clone git@github.com:OtakuHub/honyaku-ui.git
cd honyaku-ui
yarn install && yarn start
```

## Desploy

```bash
yarn build && yarn deploy
```

## Structure

| folder     | description                                                |
| ---------- | ---------------------------------------------------------- |
| components | individual components needed to build a page               |
| pages      | a complete page rendered by the router with all components |
| services   | setup api requests and any helper functions                |

## API

At the moment we use a graphql API to feed the front end with data as close
to reality as possible: [anilist graphql api](https://graphql.anilist.co)
