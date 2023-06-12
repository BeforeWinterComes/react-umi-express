echo "开始更新"
git pull
echo "代码拉取成功"
git add .
git commit -m $1
git push
echo "代码推送成功"