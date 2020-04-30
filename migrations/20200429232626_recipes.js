

exports.up = async function (knex) {

  await knex.schema.createTable("recipes", (table) => {
    table.increments("id")
    table.text("name").notNull().unique()
  })
	await knex.schema.createTable("instructions", (table) => {
		table.increments("id")
		table.text("title").notNull().unique()
		 table.text("content").notNull().unique()
    table.integer("recipes_id")
			.references("id")
			.inTable("recipes")
			.onDelete("SET NULL")
			.onUpdate("CASCADE")
	})

	await knex.schema.createTable("ingredients", (table) => {
		table.increments("id")
		table.text("name").notNull().unique()
    table.float("quantity").notNull()
	})

	await knex.schema.createTable("recipes_ingredients", (table) => {
		table.integer("recipes_id")
			.references("id")
			.inTable("recipes")
			.onDelete("SET NULL")
			.onUpdate("CASCADE")
		table.integer("ingredients_id")
			.references("id")
			.inTable("ingredients")
			.onDelete("SET NULL")
			.onUpdate("CASCADE")
		table.primary(["recipes_id", "ingredients_id"])
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("recipes_ingredients")
	await knex.schema.dropTableIfExists("ingredients")
	await knex.schema.dropTableIfExists("instructions")
	await knex.schema.dropTableIfExists("recipes")
}