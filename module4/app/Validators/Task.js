const Antl = use('Antl');

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

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = Task;
