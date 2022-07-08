
export function letter(email){
    return  email.charAt(0)
  }
  
export function randomColor(){
      const colors = ['darkturquoise', 'blueviolet', 'burlywood', 'cadetblue', 'coral', 'cornflowerblue']
      const random = Math.floor(Math.random() * colors.length)
      const color = colors[random]
      return {backgroundColor: `${color}`}
  }