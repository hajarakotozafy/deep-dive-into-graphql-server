const generateNewID = (Todos) => {
    let maxId = 0;
    Todos.forEach(todo => {
      if (todo.id > maxId) {
        maxId = todo.id;
      }
    }); return maxId + 1;
}

module.exports = {
    generateNewID
}