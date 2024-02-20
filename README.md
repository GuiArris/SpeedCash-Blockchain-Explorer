# SpeedCash (SCS) blockchain explorer
Block explorer for SpeedCash CryptoNote based cryptocurrency.

## Installation

1) It takes data from daemon karbowanecd. It should be accessible from the Internet. Run speedcashd with open port as follows:
```bash
./karbowanecd --restricted-rpc --enable-cors=* --enable-blockchain-indexes --rpc-bind-ip=0.0.0.0 --rpc-bind-port=27772
```

2) Just upload to your website and change `api` variable in `config.js` and in `config.php` to point to your daemon.

## Docker
We can use docker image to deploy an explorer.

Node URL can be replaced on the docker image build.
```shell
docker build . --build-arg RPC_NODE_URL=http://localhost:27772
```

Or provided as env variable into docker container

```shell
docker run speedcash-explorer --env RPC_NODE_URL=http://localhost:27772
```
