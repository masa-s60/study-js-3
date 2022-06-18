const title = 
`===========================
現在持っているタスクの一覧
===========================`;
const taskList = ['掃除', '買い物', '散歩'];
let i = 0;

const displayTaskList = () => {
  console.log(title);
  taskList.forEach((value) => {
    console.log(`${i}：${value}`);
    i++;
  });
  i = 0;
}
/* 
「上記のforEach文、ロジックや使い方など問題ないでしょうか。」
このようにコメントを使用した質問方法、という事で間違いないでしょうか？
*/

const newTask = (addTask) => {
  taskList.push(addTask);
  displayTaskList();
}

displayTaskList();
const inputTask = prompt('タスクを入力して下さい');
newTask(inputTask);
const selectTask = prompt('「確認」「追加」「削除」「終了」の４つのいずれかを入力してください');