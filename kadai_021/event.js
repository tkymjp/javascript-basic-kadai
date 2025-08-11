const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', async () => {
// 2秒まつ
await new Promise (resolve => setTimeout(resolve, 2000));
//文章を置き換える
text.textContent = 'ボタンをクリックしました';
});