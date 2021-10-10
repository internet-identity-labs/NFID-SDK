FROM ubuntu:20.04
RUN apt-get update && \
    apt-get install \
    curl \
    git \
    -y

RUN DFX_VERSION=0.8.1 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
