// 1.1 Bucle del 0 al 9
for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  
  // 1.2 Bucle del 0 al 9, mostrando solo números pares
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  
  // 1.3 Bucle para contar ovejas
  for (let i = 1; i <= 10; i++) {
    if (i === 10) {
      console.log('¡Dormido!');
    } else {
      console.log('Intentando dormir 🐑');
    }
  }