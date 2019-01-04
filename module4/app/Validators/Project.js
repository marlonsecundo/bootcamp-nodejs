const Antl = use('Antl');
class Project {
  get rules() {
    return {
      title: 'required',
      description: 'required',
    };
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = Project;
