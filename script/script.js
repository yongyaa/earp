//주문영역 상품 이미지 view (작은 이미지 클릭 시 큰 이미지로 변경)
const big = document.querySelector('#order .big img')
const tum = document.querySelectorAll('#order .tum a')
console.log(big,tum)

tum.forEach((target,index)=>{
    console.log(target,index)
    target.addEventListener('click',(e)=>{
        e.preventDefault() //href 새로고침 기능막기
        console.log(index)
        big.src = `./images/product_0${index+1}.jpg`
    })
})

//주문영역 상품 옵션 선택
const brands = document.querySelector('#order #brands')
const galaxy = document.querySelector('#order #galaxy')
const iphone = document.querySelector('#order #iphone')

console.log(brands,galaxy,iphone)

iphone.style.display = 'none' //아이폰 숨기기(초기값)
galaxy.disabled = true //비활성화(초기값)

brands.addEventListener('change',()=>{
    if(brands.options[2].selected == true){ //아이폰
        barnds_dis(iphone,false)
        iphone.options[0].selected = true
    }else if(brands.options[1].selected == true){ //갤럭시
        barnds_dis(galaxy,false)
        galaxy.options[0].selected = true
    }else if(brands.options[0].selected == true){ //옵션
        barnds_dis(galaxy,true)
        galaxy.options[0].selected = true
    }
})

function barnds_dis (target,boolean){
    galaxy.style.display = 'none'
    iphone.style.display = 'none'
    target.style.display = 'block'
    target.disabled = boolean
}

//기종 선택 시 주문영역에 기종명 출력하기
const order_model = document.querySelector('.order_product .model')
const galaxy_op = document.querySelectorAll('#galaxy option')
const iphone_op = document.querySelectorAll('#iphone option')
console.log(order_model)

//갤럭시 기종 출력
galaxy.addEventListener('change',()=>{
    let galaxy_index = galaxy.selectedIndex
    console.log(galaxy_index)
    console.log(galaxy_op[galaxy_index])
    order_model.appendChild(galaxy_op[galaxy_index])
})
//아이폰 기종 출력

//수량을 올렸을때 가격도 올라가는 기능
const num = document.querySelector('#order_num')
const reset = document.querySelector('#cancel')
const tag = document.querySelector('.total_price')
let price = 17000
let total

num.addEventListener('change',()=>{
    if(num.value>0){
    console.log(num.value)
    total = num.value * price
    console.log(total)
    tag.innerHTML = total.toLocaleString('ko-kr')
    }else{
        window.alert('최소 주문 수량입니다.')
        num.value = 1
    }
})
reset.addEventListener('click',()=>{
    num.value = 1
    total = num.value * price
    tag.innerHTML =  total.toLocaleString('ko-kr')
})