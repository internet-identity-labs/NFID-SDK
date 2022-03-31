#!/bin/sh -l
dfx start --background --clean --host 0.0.0.0:8000 &
sleep 5
II_ENV=development dfx deploy --no-wallet --argument '(null)'
echo 'Enter to infinity loop'
sleep infinity
