# vue-3-crud

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Notas importantes

Al contar con la versión `18` de Node tuve un problema en la instalación de este repo.

`
Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:67:19)
    at Object.createHash (node:crypto:135:10)
    at module.exports (/Users/alejandromorgan/Desktop/client-launchx/node_modules/webpack/lib/util/createHash.js:135:53)
    at NormalModule._initBuildHash (/Users/alejandromorgan/Desktop/client-launchx/node_modules/webpack/lib/NormalModule.js:417:16)
    at handleParseError (/Users/alejandromorgan/Desktop/client-launchx/node_modules/webpack/lib/NormalModule.js:471:10)
    at /Users/alejandromorgan/Desktop/client-launchx/node_modules/webpack/lib/NormalModule.js:503:5
    at /Users/alejandromorgan/Desktop/client-launchx/node_modules/webpack/lib/NormalModule.js:358:12
    at /Users/alejandromorgan/Desktop/client-launchx/node_modules/loader-runner/lib/LoaderRunner.js:373:3
    at iterateNormalLoaders (/Users/alejandromorgan/Desktop/client-launchx/node_modules/loader-runner/lib/LoaderRunner.js:214:10)
    at Array.<anonymous> (/Users/alejandromorgan/Desktop/client-launchx/node_modules/loader-runner/lib/LoaderRunner.js:205:4)
    at Storage.finished (/Users/alejandromorgan/Desktop/client-launchx/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:55:16)
    at /Users/alejandromorgan/Desktop/client-launchx/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:91:9
    at /Users/alejandromorgan/Desktop/client-launchx/node_modules/graceful-fs/graceful-fs.js:123:16
    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3) {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}
`

Se resuelve utilizando una versión anterior de node, la `v16.13.0` siguiendo estos pasos:

1. Instala `nvm`

a)
```
curl -sL https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh -o install_nvm.sh
```
b)
```
bash install_nvm.sh
```
c)
```
export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
d)

Reinicia tu terminal

e) Corrobora que `nvm` funciona (este comando debe retornar "nvm" en terminal)
```
command -v nvm
```

Para más información consulta [nvm-heynode tutorial](https://heynode.com/tutorial/install-nodejs-locally-nvm/)


2. Instala la versión `16.13.0` de node con:

```
nvm install 16.13.0
```