import Person from "./personModel";

export const createAndSavePerson = (done) => {
  const person = new Person({
    name: "John Doe",
    age: 25,
    favoriteFoods: ["pizza", "pasta"],
  });

  person.save((err, data) => {
    if (err) return done(err);
    done(null, data);
  });
};

// Create Many Records
const arrayOfPeople = [
  { name: "Alice", age: 22, favoriteFoods: ["sushi", "ramen"] },
  { name: "Bob", age: 30, favoriteFoods: ["burger", "fries"] },
  { name: "Mary", age: 28, favoriteFoods: ["tacos", "burrito"] },
];

export const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return done(err);
    done(null, people);
  });
};

// Find People by Name
export const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, peopleFound) => {
    if (err) return done(err);
    done(null, peopleFound);
  });
};

// Find One Person by Favorite Food
export const findPersonByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, personFound) => {
    if (err) return done(err);
    done(null, personFound);
  });
};

// Find Person by ID
export const findPersonById = (personId, done) => {
  Person.findById(personId, (err, personFound) => {
    if (err) return done(err);
    done(null, personFound);
  });
};

// Perform Classic Update
export const findEditThenSave = (personId, done) => {
  Person.findById(personId, (err, person) => {
    if (err) return done(err);

    person.favoriteFoods.push("hamburger");
    // Mark favoriteFoods as modified since it's a Mixed type
    person.markModified("favoriteFoods");

    person.save((err, updatedPerson) => {
      if (err) return done(err);
      done(null, updatedPerson);
    });
  });
};

// Perform New Update Using findOneAndUpdate
export const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate(
    { name: personName },
    { age: ageToSet },
    { new: true },
    (err, updatedPerson) => {
      if (err) return done(err);
      done(null, updatedPerson);
    }
  );
};

// Delete One Document
export const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, removedPerson) => {
    if (err) return done(err);
    done(null, removedPerson);
  });
};

// Delete Many Documents
export const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  Person.remove({ name: nameToRemove }, (err, result) => {
    if (err) return done(err);
    done(null, result);
  });
};

// Chain Query Helpers
export const queryChain = (done) => {
  Person.find({ favoriteFoods: "burrito" })
    .sort("name")
    .limit(2)
    .select("-age")
    .exec((err, people) => {
      if (err) return done(err);
      done(null, people);
    });
};
