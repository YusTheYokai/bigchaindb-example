const driver = require("bigchaindb-driver")

const API_PATH = "https://test.ipdb.io/api/v1/"

const keypair = new driver.Ed25519Keypair()
const conn = new driver.Connection(API_PATH)

const tx = driver.Transaction.makeCreateTransaction({ message: "Hello Blockchain Class!" },
        { meta: "data" },
        [driver.Transaction.makeOutput(driver.Transaction.makeEd25519Condition(keypair.publicKey))],
        keypair.publicKey)

const txSigned = driver.Transaction.signTransaction(tx, keypair.privateKey)

conn.postTransactionCommit(txSigned).then(txRetrieved => {
    console.log("Transaction", txRetrieved.id, "successfully posted.")
    conn.getTransaction(txRetrieved.id).then(console.log)
})
