const taskHead = 
`===========================
現在持っているタスクの一覧
===========================`;

const taskList = ['掃除', '買い物', '散歩'];

function newTask(addTask) {
  taskList.push(addTask);
  console.log(taskHead);
  for (let i = 0; i < taskList.length; i++) {
    console.log(`${i}：${taskList[i]}`);
  }
}

console.log(taskHead);
for (let i = 0; i < taskList.length; i++) {
  console.log(`${i}：${taskList[i]}`);
}

const inputTask = prompt('タスクを入力して下さい');
newTask(inputTask);
const selectTask = prompt('「確認」「追加」「削除」「終了」の４つのいずれかを入力してください');