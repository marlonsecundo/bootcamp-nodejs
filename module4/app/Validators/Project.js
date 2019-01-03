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
}

module.exports = Project;
