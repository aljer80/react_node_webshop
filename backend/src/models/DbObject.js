// import required files
const mysql = require("mysql2/promise");

/**
 * Class representing a Database Object.
 */
class DbObject{
    constructor(config) {           // Constructor for DbObject class, takes a configuration object as a parameter
        this.config = config;       // Store the provided configuration object in the 'config' property
        this.connection = null;     // Initialize the 'connection' property to null
    }

    /**
     * Establishes a connection to the database.
     * @throws {Error} Throws an error if the connection cannot be established.
     */
    async connect() {
        try {
        this.connection = await mysql.createConnection(this.config);
        } catch(error) {
            throw error;
        }
    }

    /**
     * Executes a prepared query on the database.
     * @param {string} query - SQL query to be executed.
     * @param {Array} bindings - Array of values to bind to the query.
     * @returns {Promise<Array>} - A Promise that resolves to the result of the query.
     * @throws {Error} Throws an error if the query execution fails.
     */
    async query(query, bindings) {
        try {
            if(!this.connection || this.connection.state === "disconnected") {
            await this.connect();    //this.connection.connect()
            }
            return await this.connection.execute(query, bindings);
        } catch(error) {
            throw error;
        }
    }

    /**
     * Ends the database connection if it is active.
     * @throws {Error} Throws an error if there is a problem ending the connection.
     */
    async end() {
        try {
            if (this.connection && this.connection.state !== 'disconnected') {
                await this.connection.end();
            }
        } catch(error) {
            throw error;
        } finally{
            this.connection = null;
        }
    }

}

module.exports = DbObject;
