import initSqlJs from "sql.js";

// Required to let webpack 5 know it needs to copy the wasm file to our assets
import sqlWasm from "!!file-loader?name=sql-wasm-[contenthash].wasm!sql.js/dist/sql-wasm.wasm";

async function getDatabase(database_file) {
  const sqlPromise = initSqlJs({
    locateFile: () => sqlWasm
  });
 
  const dataPromise = fetch(`/api/getDatabase/${database_file}`).then(res => res.arrayBuffer());
  const [SQL, buf] = await Promise.all([sqlPromise, dataPromise])
  return new SQL.Database(new Uint8Array(buf));
};


export {getDatabase};
