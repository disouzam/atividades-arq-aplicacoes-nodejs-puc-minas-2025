# Sobre esse repositório

Repositório contendo as atividades da disciplina Arquitetura de Aplicações com Node.Js - professor Samuel Martins da Silva, parte integrante do curso de Especialização em Arquitetura de Software Distribuído, oferta 9, turma 1, PUC Minas 2025.

# Setup do ambiente de desenvolvimento

## Verificação da versão do Node.JS

Check active version
```shell
node --version
# v24.5.0 (latest version)
```

Check installed versions
```shell
nwm ls # check installed versions
#        v22.18.0
# ->      v24.5.0
# default -> node (-> v24.5.0)
# iojs -> N/A (default)
# unstable -> N/A (default)
# node -> stable (-> v24.5.0) (default)
# stable -> 24.5 (-> v24.5.0) (default)
# lts/* -> lts/jod (-> v22.18.0)
# lts/argon -> v4.9.1 (-> N/A)
# lts/boron -> v6.17.1 (-> N/A)
# lts/carbon -> v8.17.0 (-> N/A)
# lts/dubnium -> v10.24.1 (-> N/A)
# lts/erbium -> v12.22.12 (-> N/A)
# lts/fermium -> v14.21.3 (-> N/A)
# lts/gallium -> v16.20.2 (-> N/A)
# lts/hydrogen -> v18.20.8 (-> N/A)
# lts/iron -> v20.19.4 (-> N/A)
# lts/jod -> v22.18.0
```

Setting alias default to point to LTS version

```shell
nvm alias default 22.18.0
```

Switching to the last LTS version (long term support) using `nvm`:

```shell
nvm use default
```

Commands added to .bashrc to avoid to type them every time a new bash is opened:

```file
nvm alias default 22.18.0
nvm use default
node -v
```