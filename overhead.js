const driver = require("bigchaindb-driver")
const API_PATH = "https://test.ipdb.io/api/v1/"
const connection = new driver.Connection(API_PATH)
const keypair = new driver.Ed25519Keypair()

exports.driver = driver
exports.connection = connection
exports.keypair = keypair
