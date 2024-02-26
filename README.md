## Usage

### Set Environment Variables

Rename the .envexample to .env and add your [MongoDB](https://www.mongodb.com/) database URI and your JWT secret

### Install backend dependencies

```bash
npm install
```

### Create React app

```bash
npx create-react-app@latest frontend --template redux
```

### If you don't want the browser to open when the React app starts:

.env

```bash
BROWSER=none
```

package.json

```bash
"start": "react-scripts start --BROWSER=none"
```

### Install client dependencies

```bash
cd frontend
npm install
```

### Run app in development (frontend & backend)

```bash
npm run dev
```

### Install React packages

```bash
npm i react-router-dom react-icons react-toastify react-modal axios
```
