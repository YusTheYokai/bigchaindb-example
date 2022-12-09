const overhead = require("./overhead")

const driver = overhead.driver
const connection = overhead.connection
const keypair = overhead.keypair

// Create a transaction
const tx = driver.Transaction.makeCreateTransaction({ message: "Hello Blockchain Class!" },
        { location: "Sent from Vienna" },
        [driver.Transaction.makeOutput(driver.Transaction.makeEd25519Condition(keypair.publicKey))],
        keypair.publicKey)

// Sign the transaction with our private key
const txSigned = driver.Transaction.signTransaction(tx, keypair.privateKey)

// Post the transaction to the BigchainDB network
connection.postTransactionCommit(txSigned).then(txRetrieved => {
    console.log("Transaction", txRetrieved.id, "successfully posted.")
})
