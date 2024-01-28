const mysql = require("mysql2/promise");

/**
 * Represents a database object that manages the connection, querying, and disconnection
 * to a MySQL database using the mysql2/promise library.
 *
 * @class DbObject
 * @constructor
 * @param {Object} config - The configuration object for the MySQL connection.
 */
class DbObject{
    /**
     * Creates an instance of DbObject.
     *
     * @constructor
     * @param {Object} config - The configuration object for the MySQL connection.
     */
    constructor(config){
        /**
         * The configuration object for the MySQL connection.
         *
         * @property {Object} config
         */
        this.config = config;
        /**
         * The MySQL database connection object.
         *
         * @property {Object} connection
         */
        this.connection = null;
    }

    /**
     * Establishes a connection to the MySQL database using the provided configuration.
     *
     * @async
     * @method connect
     * @throws {Error} Throws an error if the connection attempt fails.
     */
    async connect(){
        try{
            this.connection = await mysql.createConnection(this.config);
        }
        catch(error){
            throw error;
        }
    }

    /**
     * Executes a SQL query on the connected database.
     *
     * @async
     * @method query
     * @param {string} query - The SQL query to execute.
     * @param {Array} bindings - An array of parameter values to bind to the query.
     * @throws {Error} Throws an error if the query execution fails.
     */
    async query(query, bindings){
        try {
            if (!this.connection || this.connection.state === 'disconnected') {
                await this.connect();
            }

            return await this.connection.execute(query, bindings);
        }
        catch(error){
            throw error;
        }
    }

    /**
     * Ends the current database connection.
     *
     * @async
     * @method end
     * @throws {Error} Throws an error if there is an issue ending the connection.
     */
    async end(){
        try{
            if (this.connection && this.connection.state !== 'disconnected') {
                await this.connection.end();
            }
        }
        catch(error){
            throw error;
        }
        finally{
            this.connection = null;
        }
    }
}

module.exports = DbObject;