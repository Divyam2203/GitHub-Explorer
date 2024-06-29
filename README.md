# GitHub Explorer

This is a web app built with React, TypeScript, and Tailwind CSS that allows you to search for GitHub repositories and view basic information about them.
## Features

- Search for repositories or users by name
- Display basic repository details like name, description, language, stars, and forks

## Technologies Used


- React: A JavaScript library for building user interfaces. https://legacy.reactjs.org/
- TypeScript: A superset of JavaScript that adds optional static typing. https://www.typescriptlang.org/
- Tailwind CSS: A utility-first CSS framework for rapid UI development. https://tailwindcss.com/docs/installation
API:
- GitHub Search API: Allows searching for repositories on GitHub. https://docs.github.com/en/rest?apiVersion=2022-11-28

## Running the App

### Clone this repository:
```Bash
git clone https://github.com/divyam2203/Github-Explorer.git
```

### Install dependencies:
```Bash
cd Github-Explorer
npm install
```

### Start the development server:
```Bash
npm run dev
```

The app will start at http://localhost:5173 by default.

## Usage

- Enter a search term in the search bar.
- Click the search button or press Enter.
- The app will display a list of repositories matching the search term.
- Clicking on a repository card will show basic details like description, language, stars, and forks.

## Future improvements:

- **Detailed repository view**: Clicking a repository could display a more detailed view with additional information like contributors, issues, and code samples.
- **Authentication**: Implementing user login with GitHub OAuth could enable personalized features like starred repositories and saved searches across sessions.
- **Advanced search options**: Allow users to filter search results based on language, owner type (organization or user), and creation date.

## Contributing

Feel free to fork this repository and contribute to improve it. Please create pull requests for any changes or additions