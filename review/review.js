//변수들의 선언
const reviewWrap = document.getElementById('review-wrap');
const username = document.getElementById('username');
const password = document.getElementById('password');
const postContent = document.getElementById('postContent');
const submit = document.getElementById('submit');

// 입력 받은 값을 배열로 변환
const reviews = [];

//html 상 표기 해줄 함수 선언
const write = (Obj)=>{
    return `
    <div id="review-wrap">
        <div>
            <p id='id'>작성자 : ${Obj.ID}</p>
            <p id="password">PW : ${Obj.Password}</p>
        </div>
        <div>
            <p id="review">reviews : ${Obj.Review}</p>
        </div>
    </div>`
};

//validation check 해줄 함수 작성

const idCheck = (value) =>{
    return value.length >= 2;
    };
const pwCheck = (value)=> {
    return value.length >= 6;
    };
const reviewCheck=(value)=>{
    return value.length < 150;
    };


//submit btn 이벤트 발생.
submit.addEventListener("click",function() {
    if (idCheck(username.value)){
        console.log(idCheck(username.value))
        if(pwCheck(password.value)){
            console.log(pwCheck(password.value))
            if(reviewCheck(postContent.value)){
                console.log(reviewCheck(postContent.value))
                    const review = {
                        ID: username.value,
                        Password: password.value,
                        Review: postContent.value
                    };
                
                    // 리뷰를 배열에 추가
                    reviews.push(review); 
                
                    // 리뷰들을 HTML로 변환
                    const reviewHTML = reviews.map(write).join('');
                    reviewWrap.innerHTML = reviewHTML;
                    
                    // 리뷰 입력 필드 초기화
                    username.value = '';
                    password.value = '';
                    postContent.value = '';
            }else{
                console.log(reviewCheck(postContent.value))
                alert('리뷰는 150자의 글자 제한이 있습니다.')
                // 리뷰 입력 필드 초기화
                username.value = '';
                password.value = '';
                postContent.value = '';
            }
        }else{
            console.log(pwCheck(password.value))
            alert('비밀번호는 6글자 이상이어야 합니다.')
            // 리뷰 입력 필드 초기화
            username.value = '';
            password.value = '';
            postContent.value = '';
        }
    } else{
        console.log(idCheck(username.value))
        alert('아이디는 2글자 이상 이어야 합니다.')
        // 리뷰 입력 필드 초기화
        username.value = '';
        password.value = '';
        postContent.value = '';
    }
});
