FROM ubuntu:20.04
RUN apt-get update && \
    apt-get install \
    curl \
    git \
    unzip \
    sudo \
    build-essential \
    cmake \
    -y

ADD ./scripts /scripts

RUN /scripts/provision-linux.sh

RUN git clone https://github.com/dfinity/internet-identity.git

RUN cd internet-identity
RUN npm install
