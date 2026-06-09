let msg = ''
export const getTime = () => {
  let hours = new Date().getHours()
  if(hours <= 9) {
    msg = '枣尚嚎' 
  }else if(hours <= 12){
    msg = "上午好"
  }else if (hours <=18){
    msg = '下午好'
  }else{
    msg='evening'
  }
  return msg
}