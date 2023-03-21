const btn = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

const arrayUObjeto = undefined; //['cupones: descuento'] {}?


const couponObj = {
  'Olivel_Cantoran': 30,
  'CantoranOlivel': 15,
};

  const couponsList = [];
  couponsList.push({
    name: 'Olivel_Cantoran',
    discount: 30,
    
  })
  
  couponsList.push({
    name: 'No_Digas_Nada',
    discount: 25,
    
  })

function calcularPrecioConDescuento() {

  // (P * (100 - D) )/ 100

  const price = Number (inputPrice.value);
  const coupon = inputCoupon.value
  

  if (!price || !inputCoupon) {
    pResult.innerHTML = "Llena el formulario por favor"
    return;
  }


  let discount;


  function isCouponInArray(couponElement) {
    return couponElement.name === coupon;
    
  }

  const couponInArray = couponsList.find(isCouponInArray);

  if (couponInArray) {
    discount = couponInArray.discount;
  } else {
    pResult.innerHTML = "El cupon no es valido";
    return;
  }

  // if (couponObj[coupon]) {
  //   discount = couponObj[coupon]
  // } else {
  //   pResult.innerHTML = "El cupon no es valido";
  //   return
  // }








  // switch (coupon) {
  //   case 'Olivel_Cantoran':
  //     discount = 30
  //     break
  //   case 'Olivel_Cantoran2':
  //     discount = 25
  //     break
  //   default:
  //     pResult.innerHTML = "El cupon no es valido"
  //    return
  // }




  
  // if (coupon === 'Olivel_Cantoran') {
  //   discount = 30;
    
  // } else if (coupon === 'otro_cupon') {
  //   discount = 25;
  // } else {
  //   pResult.innerHTML = "El cupon no es valido"
  //   return
  // }

  // if (discount <= 0) {
  //   pResult.innerHTML = "Ingresa un descuento valido"
  //   return
  // }

  const newPrice = (price * (100 - discount)) / 100
  pResult.innerHTML = 'El nuevo precio es ' + newPrice;
  
}