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
			directory: "./seeds",
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


