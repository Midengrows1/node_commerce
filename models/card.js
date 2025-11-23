const path = require("path");
const fs = require("fs");

const p = path.join(path.dirname(require.main.filename), "data", "card.json");

class Card {
  static fetch() {
    return new Promise((resolve, reject) => {
      fs.readFile(p, "utf-8", (err, content) => {
        if (err) {
          //   resolve({ courses: [], price: 0 });
          reject(err);
        } else {
          resolve(JSON.parse(content));
        }
      });
    });
  }
  static async add(course) {
    const card = await Card.fetch();

    const idx = card.courses.findIndex((c) => c.id === course.id);

    if (idx !== -1) {
      card.courses[idx].count++;
    } else {
      course.count = 1;
      card.courses.push(course);
    }

    card.price += +course.price;

    return new Promise((resolve, reject) => {
      fs.writeFile(p, JSON.stringify(card), (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

module.exports = Card;
