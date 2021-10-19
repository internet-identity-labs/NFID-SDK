#!/bin/bash

DFX_PROJECTS_DIR="${DFX_PROJECTS_DIR:-/Projects}"

Help() {
    # Display Help
    echo "DFX Controller script."
    echo
    echo "Syntax: $0 [-h|--help] (start|stop|status|delete|clean|list) project_name"
    echo "options:"
    echo -e "help      \t      Print this Help."
    echo -e "start      \t      Start your project in dfx."
    echo -e "stop      \t      Stop your project in dfx."
    echo -e "status      \t      Status of canisters in your project."
    echo -e "delete      \t      Delete canisters from the project."
    echo -e "clean      \t      Clean your dfx folder."
    echo -e "list      \t      List of projects."
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
        popd > /dev/null || return 1
    else
        echo "Can't find project: ${project} in ${DFX_PROJECTS_DIR}"
        return 1
    fi
}

Stop() {
    Check_Project_Name "${1}" || return 1
    local project="${1}"
    echo "Stopping Project: ${project}"

    if pushd "${DFX_PROJECTS_DIR}/${project}" > /dev/null; then
        dfx canister stop --all
        popd > /dev/null || return 1
    else
        echo "Can't find project: ${project} in ${DFX_PROJECTS_DIR}"
        return 1
    fi
}

Status() {
    Check_Project_Name "${1}" || return 1
    local project="${1}"
    echo "Status of project: ${project}"

    if pushd "${DFX_PROJECTS_DIR}/${project}" > /dev/null; then
        dfx canister status --all
        popd > /dev/null || return 1
    else
        echo "Can't find project: ${project} in ${DFX_PROJECTS_DIR}"
        return 1
    fi
}

Delete() {
    Check_Project_Name "${1}" || return 1
    local project="${1}"
    echo "Deleting Project: ${project}"

    if pushd "${DFX_PROJECTS_DIR}/${project}" > /dev/null; then
        dfx canister delete --all
        popd > /dev/null || return 1
    else
        echo "Can't find project: ${project} in ${DFX_PROJECTS_DIR}"
        return 1
    fi
}

Clean() {
    Check_Project_Name "${1}" || return 1
    local project="${1}"
    echo "Cleaning Project: ${project}"

    if pushd "${DFX_PROJECTS_DIR}/${project}" > /dev/null; then
        rm -rf "${DFX_PROJECTS_DIR}/${project}/.dfx"
        popd > /dev/null || return 1
    else
        echo "Can't find project: ${project} in ${DFX_PROJECTS_DIR}"
        return 1
    fi
}

List() {
    echo "Listing your projects"
    echo "Current project folder is: ${DFX_PROJECTS_DIR}"

    if pushd "${DFX_PROJECTS_DIR}" > /dev/null; then
        find . -maxdepth 1 -type d | awk -F"./" '{print $2}'
        popd > /dev/null || return 1
    else
        echo "Can't access ${DFX_PROJECTS_DIR}"
        return 1
    fi
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
