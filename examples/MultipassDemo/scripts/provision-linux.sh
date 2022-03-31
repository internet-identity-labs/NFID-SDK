#!/bin/bash

set -ex

# Enter temporary directory.
pushd /tmp

# Install Node.
curl -o install-node.sh "https://deb.nodesource.com/setup_14.x"
sudo bash install-node.sh
sudo apt-get install --yes nodejs
rm install-node.sh

# Install DFINITY SDK.
DFX_VERSION=0.9.2 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"

# Install Rust
curl --proto '=https' --tlsv1.2 -o rustup.sh -sSf https://sh.rustup.rs
bash rustup.sh -y

# Exit temporary directory.
popd
