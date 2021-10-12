#!/bin/sh -l
dfx start --background --clean &
sleep 5
II_ENV=development dfx deploy --no-wallet --argument '(null)'
echo 'Enter to infinity loop'
sleep infinity
