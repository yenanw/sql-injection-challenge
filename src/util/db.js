import initSqlJs from "sql.js";

// Required to let webpack 5 know it needs to copy the wasm file to our assets
import sqlWasm from "!!file-loader?name=sql-wasm-[contenthash].wasm!sql.js/dist/sql-wasm.wasm";

const SQL = await initSqlJs({ locateFile: () => sqlWasm });

async function getDatabasePath (cnum) {
  const dbPathResponse = await fetch(`/api/getDatabasePath/${cnum}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!dbPathResponse.ok) {
    console.log(dbPathResponse);
    const err = `An error occurred: ${dbPathResponse.statusText}`;
    throw new Error(`Cannot get database: ${err}`);

  } else {
    const dbPathObject = await dbPathResponse.json();
    const dbFilePath = dbPathObject[0].database_file_path;
    console.log(`database file for challenge number ${cnum}: ${dbFilePath}`);
    // doesn't work right now, need to fetch the actual file here.
    return new SQL.Database(dbFilePath);
  }
};


async function getDatabase(database_file) {
  const sqlPromise = initSqlJs({
    locateFile: () => sqlWasm
  });
 
  const dataPromise = fetch(`/api/getDatabase/${database_file}`).then(res => res.arrayBuffer());
  const [SQL, buf] = await Promise.all([sqlPromise, dataPromise])
  return new SQL.Database(new Uint8Array(buf));
};


export {getDatabase, getDatabasePath};
