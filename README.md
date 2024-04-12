# `depot/use-containerd-snapshotter-action` GitHub Action

This action configures the local Docker daemon to use the experimental containerd snapshotter.

## Usage

```yaml
jobs:
  job-name:
    steps:
      - uses: depot/use-containerd-snapshotter-action@v1
```

## License

MIT License, see `LICENSE`.
