# Issue Collab

[![Netlify Status](https://api.netlify.com/api/v1/badges/a515d6f7-91ed-4ce2-899a-5958d9600ba8/deploy-status)](https://app.netlify.com/sites/issue-collab/deploys)

> A search tool designed to help you find open source projects

## Demo & Usage

- Use the toggle switches to filter results. Optionally enter text keywords
- Click a title to open the issue on GitHub in a new tab

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/39889198/67807711-ba90b080-fa6b-11e9-9326-c1dface895c2.gif)

## Background

The idea for this project comes from wanting to find cool projects on GitHub but not being satisfied with GitHub's native search.

I began searching issues during [Hacktoberfest](https://medium.freecodecamp.org/i-just-got-my-free-hacktoberfest-shirt-heres-a-quick-way-you-can-get-yours-fa78d6e24307) (an annual event sponsored by Digital Ocean which encourages developers to get involved with open source. Make 4 PRs in a month and get a FREE T-shirt 👕).

## Local Development

To run this project for local development if you have Node.js and NPM
installed follow these steps in a terminal. The app will run on port 3000.

```bash
npm install
npm start
```

If you don't want to install Node.js and you have Docker present on your
system, then just use the `Dockerfile` and the script that prepares
the whole application in a separate container. The app will run on port 3000.

```bash
./dev.sh
```

## Contributing

Thank you for your interest! All types of contributions welcome. **HACK AWAY!** 🔨🔨🔨

- Fork and clone this repository
- Create your branch from the `master` branch
- Run `npm run lint:fix` to ensure correct formatting
- Please open your PR with the `master` branch as the base

