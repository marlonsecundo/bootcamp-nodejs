class Task {
  get rules() {
    return {
      title: 'required',
      due_date: 'date',
    };
  }

  get validateAll() {
    return true;
  }
}

module.exports = Task;
