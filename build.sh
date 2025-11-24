#!/bin/bash
export VITE_COMMIT_HASH=$(git rev-parse HEAD 2>/dev/null || echo "unknown")
cd frontend && vite build
