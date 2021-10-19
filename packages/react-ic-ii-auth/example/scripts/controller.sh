#!/bin/bash

DFX_PROJECTS_DIR=${DFX_PROJECTS_DIR:-/Projects}

Help() {
    # Display Help
    echo "DFX Contorller script."
    echo
    echo "Syntax: $0 [help] (start|stop|status|delete|clean|list) project_name"
    echo "options:"
    echo -e "help      \t      Print this Help."
    echo -e "start      \t      Start your project in dfx."
    echo -e "stop      \t      Stop your project in dfx."
    echo -e "status      \t      Status of canisters in your project."
    echo -e "delete      \t      Delete canister in dfx."
    echo -e "clean      \t      Clean your project in dfx."
    echo -e "list      \t      List of Projects."
    echo
}

Check_Project_Name() {
    if [ -z "${1}" ];then
        echo "Please provide project name"
        return 1
    fi
}

Start() {
    Check_Project_Name "${1}" || return 1
    local project="${1}"
    echo "Starting Project: ${project}"

    if pushd "${DFX_PROJECTS_DIR}/${project}" > /dev/null; then
        dfx deploy
        popd > /dev/null
    fi
}

Stop() {
    Check_Project_Name "${1}" || return 1
    local project="${1}"
    echo "Stoping Project: ${project}"

    if pushd "${DFX_PROJECTS_DIR}/${project}" > /dev/null; then
        dfx canister stop --all
        popd > /dev/null
    fi
}

Status() {
    Check_Project_Name "${1}" || return 1
    local project="${1}"
    echo "Status for Project: ${project}"

    if pushd "${DFX_PROJECTS_DIR}/${project}" > /dev/null; then
        dfx canister status --all
        popd > /dev/null
    fi
}

Delete() {
    Check_Project_Name "${1}" || return 1
    local project="${1}"
    echo "Deleting Project: ${project}"

    if pushd "${DFX_PROJECTS_DIR}/${project}" > /dev/null; then
        dfx canister delete --all
        popd > /dev/null
    fi
}

Clean() {
    Check_Project_Name "${1}" || return 1
    local project="${1}"
    echo "Cleaning Project: ${project}"

    if pushd "${DFX_PROJECTS_DIR}/${project}" > /dev/null; then
        rm -rf "${DFX_PROJECTS_DIR}/${project}/.dfx"
        popd > /dev/null
    fi
}

List() {
    echo "Listing your projects"
    echo "Current project folder is: ${DFX_PROJECTS_DIR}"
    pushd "${DFX_PROJECTS_DIR}" > /dev/null
    find -maxdepth 1 -type d | awk -F"./" '{print $2}'
    popd > /dev/null
}

############################## MAIN ##############################

[ $# -eq 0 ] && Help

while [ "$1" != "" ]; do
    case $1 in
        -h | --help )
            Help
            exit 0
            ;;
        start)
            shift
            Start "${1}"
            exit $?
            ;;
        stop)
            shift
            Stop "${1}"
            exit $?
            ;;
        status)
            shift
            Status "${1}"
            exit $?
            ;;
        delete)
            shift
            Delete "${1}"
            exit $?
            ;;
        clean)
            shift
            Clean "${1}"
            exit $?
            ;;
        list)
            List
            exit $?
            ;;
        * )
            Help
            exit 1
            ;;
    esac
    shift
done
