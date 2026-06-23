# NJIA Brand Design Guidelines

This repository contains the Starlight documentation site for New Jersey Innovation Authority brand
design guidelines. The site is the shared home for guidance on brand foundation, logo use, color,
typography, voice, and approved assets.

## Table of Contents

1. [Architecture](#architecture)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [License](#license)
6. [Contact](#contact)

## Architecture

The project is a static documentation site built with Astro and Starlight. Guideline pages live in
`src/content/docs`, global Starlight configuration lives in `astro.config.ts`, and documentation
collection setup lives in `src/content.config.ts`.

### Built With

- [Astro](https://astro.build)
- [Starlight](https://starlight.astro.build)
- [Biome](https://biomejs.dev)
- [pnpm](https://pnpm.io)

## Installation

```bash
# Clone this repository
git clone https://github.com/newjersey/njia-brand-design-guidelines

# Go into the repository
cd njia-brand-design-guidelines

# Install dependencies
pnpm install
```

## Usage

```bash
# Start the local documentation server
pnpm run dev

# Run formatting, linting, and Astro type checks
pnpm run check

# Build the static site
pnpm run build
```

## Contributing

Contributions should keep guidance clear, specific, and grounded in approved NJIA brand decisions.
When adding or changing a guideline, update the relevant page in `src/content/docs` and include
enough context for future contributors to understand the decision.

Before opening a pull request, run:

```bash
pnpm run check
pnpm run test
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for repository conventions and review expectations.

## License

This project is licensed under the MIT license. For more information, see [LICENSE](LICENSE).

## Contact

If you want to get in touch with the New Jersey Innovation Authority team, please email
[team@innovation.nj.gov](mailto:team@innovation.nj.gov).

### Join the New Jersey Innovation Authority!

If you are excited to design and deliver modern policies and services to improve the lives of all
New Jerseyans, you should
[join the New Jersey Innovation Authority](https://innovation.nj.gov/join.html).
