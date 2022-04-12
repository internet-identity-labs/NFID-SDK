## Info
This file contains HOWTO instructions for running scripts on your environments

## Requirements
- Docker >= 17
- User with shell and rights to run docker
- Git for downloading repository
- Internet connection for downloading docker images from docker hub

*All instructions tested on Ubuntu 20, but they will work for other Linux system.*
*You can choose which you are familiar with.*

------------
## Build
- Open shell in the folder which contains Dockerfile
- Run `docker build -t dfx_ctl .`
- You will get the docker image with the name **dfx_ctl** after build finished

## Run

- Create root folder for you projects
- Put your projects as subfolders
- Open shell in the root folder which contain your projects
- Run `docker run -v $(pwd):/Projects --name my_dfx dfx_ctl`

Docker will run `/scripts/dfx_run.sh` script, which will run **dfx** with **internet-identity** project.

##### Environment Variables:
- **DFX_PROJECTS_DIR** - Will provide dir **inside** your docker which contains projects. Default: **/Projects**


##### dfxctl
Script works as a wrapper above dfx and allow auto actions with dfx
For manipulating your projects inside this Docker you need use `docker exec` command additionaly to main `docker run` process.
For example:
- `docker exec my_dfx dfxctl help`  - will show help page of **dfxctl**
- `docker exec my_dfx dfxctl list`  - will show projects inside Project dir

Whole list of command you can found bellow:
```bash
DFX Controller script.

Syntax: dfxctl [-h|--help] (start|stop|status|delete|clean|list) project_name

options:
help                  Print this Help.
start                 Start your project in dfx.
stop                  Stop your project in dfx.
status                Status of canisters in your project.
delete                Delete your project in dfx.
clean                 Clean your project in dfx.
list                  List of Projects.

```
