module.exports = {
	development: {
		client: "sqlite3",
		useNullAsDefault: true, // needed for sqlite
		connection: {
			filename: "./data/recipes.db3",
		},
		migrations: {
			directory: "../node-db4-project/migrations",
		},
		seeds: {
			directory: "./data/seeds",
		},

		// this is needed when using foreign keys
		pool: {
			afterCreate: (conn, done) => {
				// runs after a connection is made to the sqlite engine
				conn.run("PRAGMA foreign_keys = ON", done) // turn on FK enforcement
			},
		},
	},
}

//module.exports = {

//   development: {
//     client: 'sqlite3',
//     useNullAsDefault: true, // needed for sqlite
//     connection: {
//       filename: './data/recipes.db3',
//     },
//     migrations: {
//       directory: './data/migrations'
//     },
//     seeds: {
//       directory: './data/seeds'
//     },
//     // add the following
//     pool: {
//       afterCreate: (conn, done) => {
//         // runs after a connection is made to the sqlite engine
//         conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
//       },
//     },
//   }, 
// };
