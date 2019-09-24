// Convert move ir bytes code to base64

// Step 1 compile peer_to_peer_transfer.mvir
// target/debug/compiler language/stdlib/transaction_scripts/peer_to_peer_transfer.mvir -o peer_to_peer_transfer_o

// Step 2 copy output of 1) to here
const compiled = {"code":[76,73,66,82,65,86,77,10,1,0,7,1,74,0,0,0,4,0,0,0,3,78,0,0,0,6,0,0,0,13,84,0,0,0,6,0,0,0,14,90,0,0,0,6,0,0,0,5,96,0,0,0,41,0,0,0,4,137,0,0,0,32,0,0,0,8,169,0,0,0,15,0,0,0,0,0,0,1,0,2,0,1,3,0,2,0,2,4,2,0,3,2,4,2,3,0,6,60,83,69,76,70,62,12,76,105,98,114,97,65,99,99,111,117,110,116,4,109,97,105,110,15,112,97,121,95,102,114,111,109,95,115,101,110,100,101,114,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,4,0,12,0,12,1,19,1,1,2],"args":[]}

// Step 3 convert to hex
const hex = compiled.code.map(obj => {return obj.toString(16)}).join('')
console.log('hex', hex)

// Step 4 convert to base64
const base64 = Buffer.from(hex, 'hex').toString('base64')
console.log('base64', base64)

// Step 5 copy output to lib/constants/ProgamBase64Codes.ts
