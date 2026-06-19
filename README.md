# Settlers Website

Promo landing page for the Settlers geolocation strategy game. Built with [Zensical](https://zensical.dev).

## Quick Start

```bash
# Create and activate a virtual environment
python -m venv .venv
source .venv/bin/activate

# Install Zensical
pip install zensical

# Run dev server with hot-reload
zensical serve -o
```

Opens at `http://localhost:8000`.

## Build

```bash
zensical build --clean
```

Static output goes to the `site/` directory.

## Deploy

The repository includes a GitHub Actions workflow that builds and deploys the site to GitHub Pages on every push to `main`.

## TODOs

- Update the example coordinates in the small onboarding map iframes (`docs/index.md`) to the desired locations.
