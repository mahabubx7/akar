# Contributing to Akar.js

Thank you for considering contributing to this project! Here’s a quick guide to help you get started.

> Please follow this guidelines for contribution through PR only. You need to find issues or collabrate on open/unresolved issues. Check this out: [issues](https://github.com/mahabubx7/akar/issues)

## Getting Started

1. **Fork the Repository**:
   - Click the “Fork” button on the top-right of this repo.
   - This creates a copy of the project under your GitHub account.

2. **Clone the Repository**:
   - Clone the repository to your local machine:
     ```bash
     git clone https://github.com/mahabubx7/akar.git
     cd akar
     ```

3. **Create a New Branch**:
   - Before making changes, create a new branch based on the `main` branch:
     ```bash
     git checkout -b feature/your-feature-name
     ```

4. **Install Dependencies**:
   - Install the project dependencies:
     ```bash
     npm install
     ```

5. **Run Tests**:
   - Make sure your changes don't break anything by running the tests:
     ```bash
     npm test
     ```

## Guidelines

### Commit Messages
We follow **Conventional Commits** for our commit messages. Here are some examples:
- `feat: add new feature`
- `fix: resolve issue #123`
- `docs: update contributing guide`

Make sure to keep commits **atomic** (small, focused, and purposeful).

### Coding Standards
- Follow [ESLint](https://eslint.org/) rules and [Prettier](https://prettier.io/) formatting.
- Keep the code simple and readable.

### Pull Request Process
1. Ensure that your branch is **up to date** with the latest `main` branch before submitting a pull request.
   ```bash
   git fetch origin
   git checkout main
   git merge origin/main

2. Keep paitent and wait for the review. After the review, if the maintainers required changes then please do it asap.

_Your PR will be merged after approval only._
