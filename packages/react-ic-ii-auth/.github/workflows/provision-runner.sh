#!/bin/bash

set -ex

# Enter temporary directory.
pushd /tmp

# Install Node.
sudo bash example/scripts/provision-linux.sh

# Set environment variables.
echo "$HOME/bin" >> $GITHUB_PATH

# Exit temporary directory.
popd
