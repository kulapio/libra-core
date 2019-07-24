# Kulap Libra

Kulap Libra is a javascript library client that can be used to interact with libra nodes. It is built using typescript.

Kulap Libra is <a href="https://github.com/perfectmak/libra-core">Libra-core</a> compatible.

> This is still under heavy testing, so please report any issues that you might encounter using it.

Usable both in node and on browser clients.

## Table of Content

<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)
  * [Creating an Account](#creating-an-account)
  * [Minting Amount](#minting-amount)
  * [Checking an address balance](#checking-an-address-balance)
  * [Transferring Libra Coins](#transferring-libra-coins)
  * [Executing Transactions with Custom Program](#executing-transactions-with-custom-program)
  * [Query Transaction with Sequence Number](#query-transaction-with-sequence-number)
- [Development](#development)
- [Contribution](#contribution)
- [License](#license)

<!-- tocstop -->

## Installation
To install with npm run:

```
npm install kulap-libra
```

## Usage

You would most likely interact with these two modules

```javascript
import { LibraWallet, LibraClient } from 'kulap-libra';
```

### Creating an Account

In order to create a libra account, you would need to instantiate the `LibraWallet` like:

```javascript
// you may need to use require for node
import { LibraWallet, Account as LibraAccount } from 'kulap-libra';

// please don't use this mnemonic outside of this sample code
// also mnemonics are optional. If you don't specify one a random mnemonic is generated and used.
const wallet = new LibraWallet({
        mnemonic: 'upgrade salt toy stable drop paddle'
      });

// generate a new account
const account = wallet.newAccount();

// or if you have your secret key you can create an account from it
// const secretKey = 'pub-hex-secret-key-here' 
// const account = LibraAccount.fromSecretKey(secretKey);


// you can see your address by:
console.log(account.getAddress().toHex());
```

### Minting Amount
> Currently minting only works for testnet and uses the faucet service.

To mint you need to create a `LibraClient` and use it to mint

```javascript
import { LibraClient, LibraNetwork } from 'kulap-libra';

async function main() {
  const client = new LibraClient({
    transferProtocol: 'https',
    host: 'ac-libra-testnet.kulap.io',
    port: '443',
    dataProtocol: 'grpc-web-text'
  })

  const account = wallet.newAccount();

  // mint 2 libracoins to users accounts
  await client.mintWithFaucetService(account.getAddress(), 20e6);
}

await main();

```

### Checking an address balance

```javascript
async function main() {
  const client = new LibraClient({
    transferProtocol: 'https',
    host: 'ac-libra-testnet.kulap.io',
    port: '443',
    dataProtocol: 'grpc-web-text'
  })

  const accountAddress = '854563c50d20788fb6c11fac1010b553d722edb0c02f87c2edbdd3923726d13f';
  const accountState = await client.getAccountState(accountAddress);

  // log account balance
  console.log(accountState.balance.toString());

  // Account state has other information that you could be interested in such as `sequenceNumber`.
}

await main();
```

### Transferring Libra Coins

```javascript
async function main() {
  const client = new new LibraClient({
    transferProtocol: 'https',
    host: 'ac-libra-testnet.kulap.io',
    port: '443',
    dataProtocol: 'grpc-web-text'
  })
  const wallet = new LibraWallet({
    mnemonic:
     'lend arm arm addict trust release grid unlock exhibit surround deliver front link bean night dry tuna pledge expect net ankle process mammal great',

  });
  const account = wallet.newAccount();
  const account2Address = '854563c50d20788fb6c11fac1010b553d722edb0c02f87c2edbdd3923726d13f';
  const response = await client.transferCoins(account, account2Address, 1e6);

  // wait for transaction confirmation
  await response.awaitConfirmation(client);
}

await main();
```

### Executing Transactions with Custom Program
You can execute a program using `client.execute()` take a look at how `client.transferCoins()` uses it for transfer transactions.
You are welcome to help contribute to making this documentation better.

### Query Transaction with Sequence Number
```javascript
async function main() {
  const client = new new LibraClient({
    transferProtocol: 'https',
    host: 'ac-libra-testnet.kulap.io',
    port: '443',
    dataProtocol: 'grpc-web-text'
  })
  const accountAddress = '7f58df27522872ecfac340c5c072427e6f8083ca3c79bb748cdd1ae073dacc42';
  const sequenceNumber = 43; //can also use a string for really large sequence numbers;

  const transaction = await client.getAccountTransaction(accountAddress, sequenceNumber);
}

await main();
```

## Development
- Clone the repository
- Run `npm install` to install the dependency
- Test with `npm test`
- You might need to run `npm install -g grpc-tools` if you want to regenerate protobuffer classes

## Contribution
- If you notices a bug or anomaly, please open an issue to track it.
- If you intend on working on a feature that doesn't have an issue yet. Please open an issue first so we can track its progress together.


## License
MIT
