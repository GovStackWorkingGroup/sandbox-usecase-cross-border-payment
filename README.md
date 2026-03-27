# Sandbox use case - Cross border payment

```bash
cp .env.example .env
yarn install
```

##### `yarn dev`

Starts the project in devevelopment mode.\
Open [http://localhost:3000](http://localhost:3000) in your browser.

##### `yarn build`

Builds the project for production and saves the result in the `dist` folder.

#### Sandbox cluster deployment

Create a `.env` file and route the frontend to the necessary backends similar to the example below:
```
DEMO_VITE_APP_USER_API_URL=https://demo.mifos.io/fineract-provider/
VITE_APP_USER_API_URL=https://projectname.playground.sandbox-playground.com
VITE_APP_THREAT_API_URL=https://projectname.playground.sandbox-playground.com
VITE_APP_LOG_API_URL=https://projectname.playground.sandbox-playground.com