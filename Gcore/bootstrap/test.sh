# capture an interrupt # 0
trap 'echo "Exit 0 signal detected..."' 0
# display something
echo "This is a Gliss outPut"
# exit shell script with 0 signal
exit 0
