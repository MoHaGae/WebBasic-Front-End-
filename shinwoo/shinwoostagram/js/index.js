//디폴트 변수 선언 (각종 DOM 세팅)
const nav = document.querySelector("#nav");
const nav__largecontainer = document.querySelector(".nav__largecontainer");
const logo__borderline = document.querySelector(".logo__borderline");
const logo__image = document.querySelector(".logo__image");
const main__aside = document.querySelector(".main__aside");
const main__article = document.querySelector(".main__article");
/*
    &&&&&&   
    &&&&&&                                   
      &&     &&&&&    &&&   &&&   &&&&&      
      &&    &&   &&    &&   &&   &&   &&   
   && &&    &&   &&     && &&    &&   &&&  
    &&&      &&&&& &     &&&      &&&&& &% 

    %%%%%                     %%
   %%%   %    %%%%%   %% %%%      %%%%%%   %%
     %%%     %%   %%  %%%     %%  %%  %%  %%%%%
   %   %%%   %%       %%      %%  %%%%%    %%
    %%%%%     %%%%%   %%      %%  %%       %%%
*/

/*
    스크롤바가 최상위 위치(y좌표)에 있는지 확인하는 함수
    * 최상위 위치는 y좌표가 60이하인 경우라고 정의한다.
*/
const isScrollTop = () => {
    const { scrollY } = window;
    if (scrollY < 60)
        return true;
    return false;
}

// 상단 네비게이션을 커다란(Lg: large)네비바로 적용하는 함수
// main_section 내의 aside의 position을 fixed로 적용해제 (cf: aside-fixed 클래스)
const showNavLg = () => {
    nav.classList.remove("nav-sm");
    nav.classList.add("nav-lg");
    nav__largecontainer.classList.remove("nav__largecontainer-sm");
    nav__largecontainer.classList.add("nav__largecontainer-lg");
    logo__borderline.classList.remove("opacity-zero");
    logo__image.classList.remove("opacity-zero");
    main__aside.classList.remove("aside-fixed"); //aside 고정해제
    main__aside.style = "";
}

// 상단 네비게이션을 작은(Sm: small)네비바로 적용
// main_section 내의 aside의 position을 fixed로 적용 (cf: aside-fixed 클래스)
const showNavSm = () => {
    nav.classList.add("nav-sm");
    nav.classList.remove("nav-lg");
    nav__largecontainer.classList.remove("nav__largecontainer-lg");
    nav__largecontainer.classList.add("nav__largecontainer-sm");
    logo__borderline.classList.add("opacity-zero");
    logo__image.classList.add("opacity-zero");
    main__aside.classList.add("aside-fixed"); // aside 고정(position:fixed 적용)
    applyAsideFixedLeft();
}

// 스크롤 이벤트를 처리하는 함수
const handleScroll = e => {
    if (!isScrollTop())
        showNavSm();
    else
        showNavLg();
};

const applyAsideFixedLeft = () => {
    const article_posX = main__article.getBoundingClientRect().x;
    main__aside.style = `left:${article_posX + 28 + 614}px`;
};

// 브라우저 화면크기 재조정시 이벤트 처리
const handleResize = e => {
    if (!isScrollTop())
        applyAsideFixedLeft();
};

//자바스크립트 초기 실행 함수
const init = () => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
};

//초기 실행 함수 호출
init();