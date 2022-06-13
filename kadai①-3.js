const title = 
`===========================
現在持っているタスクの一覧
===========================`;
const taskList = ['掃除', '買い物', '散歩'];

function display_taskList() {
  console.log(title);
  for (let i = 0; i < taskList.length; i++) {
    console.log(`${i}：${taskList[i]}`);
  }
}

const newTask = (addTask) => {
  taskList.push(addTask);
  display_taskList();
}

display_taskList();
const inputTask = prompt('タスクを入力して下さい');
newTask(inputTask);
const selectTask = prompt('「確認」「追加」「削除」「終了」の４つのいずれかを入力してください');