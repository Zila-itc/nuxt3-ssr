# Nuxt 3 Minimal Starter

We recommend to look at the [documentation](https://v3.nuxtjs.org).

## Setup

Make sure to install the dependencies

```sh
# install modules
npm install
```

Init Firebase

```sh
# init firebase hosting ( this will replace firebase.json file | copy this.repo content & change "site" value)
firebase init hosting

# Public directory -> .output/public
# Configure as a single-page app (rewrite all urls to /index.html)? -> N
```

Firebase.json content

```sh
{
  "functions": { "source": ".output/server" },
  "hosting": [
    {
      "site": "your_project_id", # 👈 Replace with your project id
      "public": ".output/public", 
      "cleanUrls": true,
      "rewrites": [{ "source": "**", "function": "server" }],
      "ignore": [
        "firebase.json",
        "**/.*",
        "**/node_modules/**"
      ]
    }
  ]
}
```

#### Firestore

Firebase file in
```sh
server/api/data.ts
```

Change databaseURL and collectionName in

```sh
server/api/data.ts
# line 10 & 16
```

## Development

Start the development server on http://localhost:5000

```sh
NITRO_PRESET=firebase npm run build
firebase emulators:start
```
Visit

```sh
localhost:5000/api/data
```

## Production

Build the application for production:

```bash
NITRO_PRESET=firebase npm run build
firebase deploy
```

Visit

```sh
https://yourprojectID.web.app/api/data

```


----
----
### Fresh Project w/o cloning

```bash
npx nuxi init project_name
firebase init hosting

# add deez on firebase.json
{
  "functions": { "source": ".output/server" },
  "hosting": [
    {
      "site": "your_project_id",
      "public": ".output/public",
      "cleanUrls": true,
      "rewrites": [{ "source": "**", "function": "server" }],
      "ignore": [
        "firebase.json",
        "**/.*",
        "**/node_modules/**"
      ]
    }
  ]
}

# install modules
npm install -D firebase-admin firebase-functions firebase-functions-test


# add custom files of this.repo
server/api/data.ts
# change databaseURL and collectionName in line 10 & 16

# build
NITRO_PRESET=firebase npm run build

# dev deploy
firebase emulators:start

# production deploy
firebase deploy
```


Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).


----
----

### Ref


[Nuxt3 Doc](https://v3.nuxtjs.org/docs/deployment/firebase)
[EnterFlash](https://github.com/EnterFlash/online-store-nuxt3)