import initSqlJs from "sql.js";

// Required to let webpack 5 know it needs to copy the wasm file to our assets
import sqlWasm from "!!file-loader?name=sql-wasm-[contenthash].wasm!sql.js/dist/sql-wasm.wasm";

const SQL = await initSqlJs({ locateFile: () => sqlWasm });

// Create a database
const db = new SQL.Database();
// NOTE: You can also use new SQL.Database(data) where
// data is an Uint8Array representing an SQLite database file

// Execute a single SQL string that contains multiple statements
let sqlstr =
  "CREATE TABLE hello (a int, b char); \
INSERT INTO hello VALUES (0, 'hello'); \
INSERT INTO hello VALUES (1, 'world');";
db.run(sqlstr); // Run the query without returning anything

// Prepare an sql statement
const stmt = db.prepare("SELECT * FROM hello WHERE a=:aval AND b=:bval");

// Bind values to the parameters and fetch the results of the query
let res = stmt.getAsObject({ ":aval": 1, ":bval": "world" });
console.log(res); // Will print {a:1, b:'world'}

sqlstr = "SELECT sqlite_version();";
res = db.exec(sqlstr);
// Should print out the SQLite database version, but wth is this structure...
console.log(res[0].values[0][0]); 
