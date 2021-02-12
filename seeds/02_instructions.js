
exports.seed = function(knex) {
    return knex("instructions").insert([
        {
            recipes_id: 1,
            rank: 1,
            title:"firt",
            content: "mix everyogjlkll'athing t",
        },
      
        {
            recipes_id: 1,
            rank: 2,
            title:"third title",
            content: "blackmail world leaders",
        },
        {
            recipes_id: 2,
            rank: 3,
            title:"some title",
            content: "collect all the sheep in Scotland",
        },
     {
            recipes_id: 2,
            rank: 1,
            title:"one more title",
            content: "find Japanese investors",
        },
      
        {
            recipes_id:2,
            rank: 2,
            title:"my title",
            content: "smash it with a hammer (evil laugh)",
        },
        {
            recipes_id: 3,
            rank: 3,
            title:"your title",
            content: "turn your enemy into a flea",
        },
        {
            recipes_id: 3,
            rank: 1,
            title:"his tittle",
            content: "mail the box to yourself and when it arrives...",
        },
        {
            recipes_id: 4,
            rank: 2,
            title:"her title",
            content: "write a bot to randomly like posts and follow pages",
        },
        {
            recipes_id: 4,
            rank: 3,
            title:"them title",
            content:
                "try to ignore the persisent feeling of loneliness and disconnection",
        },
        {
            recipes_id: 4,
            rank: 1,
            title:"what title",
            content: "watch instagram followers increase",
        },
       {
            recipes_id: 5,
            rank: 2,
            title:"I dont title",
            content: "...and quest some more",
        },
      
        {
            recipes_id: 6,
            rank: 2,
            title:"hmm title",
            content: "seamlessly take their place",
        },
        {
            recipes_id: 6,
            rank: 1,
            title:"sohjghje title",
            content: "artfully craft accessories",
        },
       
        {
            recipes_id: 6,
            rank: 2,
            title:"second nowe",
            content: "steal coworker's name tag",
        },
    ]);
};
