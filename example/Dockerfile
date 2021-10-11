FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive
ENV TZ=Europe/Amsterdam

RUN apt-get update && \
    apt-get install -y \
    curl \
    git \
    unzip \
    sudo \
    build-essential \
    cmake

RUN  apt-get clean && rm -rf /var/lib/apt

ADD ./scripts /scripts

RUN /scripts/provision-linux.sh

RUN git clone https://github.com/dfinity/internet-identity.git

WORKDIR /internet-identity

RUN npm install

# TODO: move to init script
# RUN dfx start --background --clean
# RUN II_ENV=development dfx deploy --no-wallet --argument '(null)'
# RUN dfx stop

CMD dfx start --background
