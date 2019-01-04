const TaskHook = (exports = module.exports = {});

const Mail = use('Mail');
const Helpers = use('Helpers');
TaskHook.sendNewTaskMail = async (taskInstance) => {
  if (!taskInstance.user_id && !taskInstance.dirty.user_id) return;

  const { email, username } = await taskInstance.user().fetch();

  const file = await taskInstance.file().fetch();
  const { title } = taskInstance;

  await Mail.send(['emails.new_task'], { username, title, hasAttachment: !!file }, (message) => {
    message
      .to(email)
      .from('diego@email.com', 'Diego')
      .subject('Nova tarefa pra vc');

    if (file) {
      message.attach(Helpers.tmpPath(`uploads/${file.file}`), {
        filename: file.name,
      });
    }
  });
};
