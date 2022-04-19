# 🍀 이미지 스프라이트 기법이란?

이미지 스프라이트 기법은 웹 화면에서 쓰이는 이미지들을 개별로 모두 다운해서 적용하는 것이 아닌, 하나의 페이지에 모든 이미지를 담아서 x,y값을 변경해가며 해당 요소에 적절한 이미지를 웹화면에 보여주는 기법이다.

> 🍀 이미지 스프라이트 기법을 사용하는 이유?

웹 화면에 필요한 모든 이미지들을 개별 파일로 다운로드하면 메모리를 많이 차지하고, 렌더링 과정에서 시간이 오래 걸린다.
하지만 한 페이지에 필요한 이미지들을 모두 넣게되면, 브라우저에서 하나의 파일만 다운받으면 되기 때문에, 메모리나 렌더링 측면에서 좋은 효과를 얻을 수 있다.

> 🍀 이미지 스프라이트 기법을 사용할 때 주의할 점?

1. 이미지 스프라이트를 쓰게되면 보통 img태그에 적는 alt값을 작성할 수 없다.
   따라서 의미없는, 스타일링을 목적으로 쓰인 이미지들을 이미지 스프라이트 기법을 사용해줄 수 있다.
2. 또는 IR기법을 활용하여 대체 텍스트를 넣어줄 수도 있는데, 의미없는 이미지들을 마크업하는데 굳이 IR기법을 쓰는건,,, 원래의 의도와 벗어나보인다.(다른 의견 환영. 알려주세요.)
3. 사진들로 이미지 스프라이트를 만들 때 사진 간의 간격을 너무 좁히면 나중에 화면에서 구현할 때 혹시나 margin 수정이 필요할 때, 불가능할 수 있다.

> 🍀 실습 소개

이미지 스프라이트 기법이 익숙하지 않아서 한 번 더 연습을 해봐야 확실히 알 것 같았다! 원디렉션의 밴드 멤버 이름 밑에 각 멤버들의 사진을 넣어보면서 이미지 스프라이트 기법을 연습해봤다.

> 🍀 실습 화면

![](https://velog.velcdn.com/images/kimconut/post/c257016c-0071-441b-8591-6a61e60f91de/image.png)

![](https://velog.velcdn.com/images/kimconut/post/16fa318c-0630-41f3-9292-2ba300d56f63/image.png)

이미 간단히 css로 레이아웃 정렬을 해준 모습이다.
원래 같았다면 멤버 별로 이미지를 저장해서 4개의 이미지 파일을 저장했겠지만, 이번에는 그 사진들로 이미지 스프라이트를 만들어서 사용했다.

> 🍀 완성 화면

![](https://velog.velcdn.com/images/kimconut/post/6c1ba6e8-440e-41a0-b96a-99e5025b8de5/image.png)

깔끔하게 잘들어갔다!!
CSS 코드

```
   .harry::after {
      content: '';
      display: block;
      width: 138px;
      height: 158px;
      background: url(./img/css_sprites_onedirection.png) -219px -10px;
  }

  .louis::after {
    content: '';
    display: block;
    width: 138px;
    height: 138px;
    background: url(./img/css_sprites_onedirection.png) -377px -10px;
  }

  .liam::after {
    content: '';
    display: block;
    width: 189px;
    height: 198px;
    background: url(./img/css_sprites_onedirection.png) -10px -10px;
  }

  .niall::after {
    content: '';
    display: block;
    width: 117px;
    height: 105px;
    background: url(./img/css_sprites_onedirection.png) -10px -220px;
  }
```

> 🍀 깨달은 점

이미지 스프라이트 기법은 이번에 처음 배웠다.
이미지가 있으면 무조건 이미지 파일을 다 넣어야지! 그리고 img태그로 무조건 써줘야지! 하는 고집아닌 고집이 있었는데, 이번 수업을 계기로 고칠 수 있게되었다.
이젠 의미없는 이미지들은 CSS에서 background로도 넣고, 모아서 이미지 스프라이트 기법을 사용하는 등 다양한 방법을 많이 사용해봐야겠다.

지금은 작은 화면 구현을 하고 연습, 배우는 단계라 이미지 파일을 많이 쓰지 않아서 렌더링 속도나 메모리 사용량 등에 대해 고려해보지 않았는데, 나중에 큰 프로젝트를 하거나 회사에 들어가서 프로젝트를 한다면 꼭 필요한 기법이라고 생각된다.
