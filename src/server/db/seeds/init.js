
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('coffee').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('coffee').insert({
          name: 'Whateffienate',
          roaster: 'Whatever4Ever',
          origin: 'America',
          roast: 'Dark',
          caffeine: 150,
          decaf: false,
          price: 12,
          quantity: 1
        }),
        knex('coffee').insert({
          name: 'Koffee Snob',
          roaster: 'Whatever4Ever',
          origin: 'America',
          roast: 'Light',
          caffeine: '75',
          decaf: false,
          price: 15,
          quantity: 1
        }),
        knex('coffee').insert({
          name: 'Buenos Dias',
          roaster: 'Que Tal Qoffee',
          origin: 'Mexico',
          roast: 'rowValue3',
          caffeine: '165',
          decaf: false,
          price: 10,
          quantity: 2
        }),
        knex('coffee').insert({
          name: 'Buenas Noches',
          roaster: 'Que Tal Qoffee',
          origin: 'Mexico',
          roast: 'Light',
          caffeine: 10,
          decaf: true,
          price: 4,
          quantity: 2
        }),
        knex('coffee').insert({
          name: 'Aboot Time',
          roaster: 'Canadeine',
          origin: 'Canada',
          roast: 'Medium',
          caffeine: 110,
          decaf: false,
          price: 11,
          quantity: 1
        }),
        knex('coffee').insert({
          name: 'Not in my plate',
          roaster: 'Canadeine',
          origin: 'Canada',
          roast: 'Dark',
          caffeine: 160,
          decaf: false,
          price: 10,
          quantity: 1
        }),
        knex('coffee').insert({
          name: 'Yellow Teeth',
          roaster: 'Oy Oy Moynin',
          origin: 'Britain',
          roast: 'Blonde',
          caffeine: 95,
          decaf: false,
          price: 16,
          quantity: 1
        })
      ]);
    });
};
