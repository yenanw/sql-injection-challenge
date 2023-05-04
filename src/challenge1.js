import initSqlJs from "sql.js";


// // Required to let webpack 5 know it needs to copy the wasm file to our assets
import sqlWasm from "!!file-loader?name=sql-wasm-[contenthash].wasm!sql.js/dist/sql-wasm.wasm";

const sqlPromise = initSqlJs({
    locateFile: () => sqlWasm
  });
 
  const dataPromise = fetch(`/api/getDatabase/challenge1.sqlite`).then(res => res.arrayBuffer());
  const [SQL, buf] = await Promise.all([sqlPromise, dataPromise])
  const db1 = new SQL.Database(new Uint8Array(buf));

  let res = db1.exec('SELECT * FROM users;');
  console.log(res);

console.log("WELCOME TO CHALLENGE 1");