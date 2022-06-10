#!/bin/bash

FONT_RED='\033[1;31m'
FONT_GREEN='\033[1;32m'
FONT_YELLOW='\033[1;33m'
FONT_BLUE='\033[1;34m'
FONT_PURPLE='\033[1;35m'
FONT_CYAN='\033[1;36m'
FONT_RESET='\033[0m'

function send_mesage() {
  local message_color message_type message_text
  message_color="${1}"
  message_type="${2:-UNDEF}"
  message_text="${3}"

  echo -e "${message_color} $(date '+%F %T') [${message_type}] ${message_text} ${FONT_RESET}"
}

function echo_error() {
  local message
  message="${1}"
  send_mesage "${FONT_RED}" 'ERROR' "${message}"
}

function echo_warn() {
  local message
  message="${1}"
  send_mesage "${FONT_YELLOW}" 'WARN ' "${message}"
}

function echo_info() {
  local message
  message="${1}"
  send_mesage "${FONT_CYAN}" 'INFO ' "${message}"
}

function echo_debug() {
  local message
  message="${1}"
  if [ "${DEBUG}" == 'true' ]; then
    send_mesage "${FONT_BLUE}" 'DEBUG' "${message}"
  fi
}

function echo_success() {
  local message
  message="${1}"
  send_mesage "${FONT_GREEN}" ' OK  ' "${message}"
}

########################### START
CONFIG_FILE='.env.local'

echo_info "=> Working with config" >&2
# Check config
if ! [ -s "${CONFIG_FILE}" ]; then
  echo_error "Can't find '${CONFIG_FILE}' config file in $(pwd)" >&2
  exit 1
fi

# Load config
if ! source "./${CONFIG_FILE}"; then
  echo_error "Can't load config from '${CONFIG_FILE}' " >&2
  exit 1
fi

echo_debug "Output of config file '${CONFIG_FILE}':\n$(cat "${CONFIG_FILE}")\n" >&2

echo_info "=> Working with Tunnel" >&2
# Check NGROK
if ! NGROK_PATH="$(command -v ngrok)" || [ -z "${NGROK_PATH}" ]; then
  echo_info "==> Installing ngrok" >&2
  echo_debug "npm install --location=global ngrok" >&2

  if ! npm install --location=global ngrok; then
    echo_error "Can't install ngrok" >&2
    echo_error "You can install it by yourself" >&2
    echo_error "https://ngrok.com/download" >&2
    exit 1
  fi

  NGROK_PATH="$(command -v ngrok)"
  echo_info "==> Ngrok installed to '${NGROK_PATH}'" >&2
fi

# Running NGROK
echo_info "=> Running ngrok" >&2
echo_debug "${NGROK_PATH} http --region='${TUNNEL_REGION}' ${TUNNEL_DOMAIN:+--hostname=${TUNNEL_DOMAIN}} ${TUNNEL_PORT}" >&2
${NGROK_PATH} http --region="${TUNNEL_REGION}" ${TUNNEL_DOMAIN:+--hostname=${TUNNEL_DOMAIN}} ${TUNNEL_PORT}
