# http 프로토콜

## HTTP (Hypertext Transfer Protocol)란?
<ul>
    <li>팀 버너스리(Tim Berners-Lee)와 그가 속한 팀은 CERN에서 HTML뿐만 아니라 웹 브라우저 및 웹 브라우저 관련 기술과 HTTP를 발명하였습니다.</li>
    <li>문서화된 최초의 HTTP버전은 HTTP v0.9(1991년)입니다.</li>
    <li>HTTP는 서버와 클라이언트가 인터넷상에서 데이터를 주고받기 위한 프로토콜(protocol)입니다.</li>
    <li>HTTP는 계속 발전하여 HTTP/2까지 버전이 등장한 상태입니다.</li>
</ul>

## HTTP 작동방식
<ul>
    <li style="list-style:square"><h4>장점</h4></li>
    <li>불특정 다수를 대상으로 하는 서비스에는 적합하다.</li>
    <li>클라이언트와 서버가 계속 연결된 형태가 아니기 때문에 클라이언트와 서버 간의 최대 연결 수보다 훨씬 많은 요청과 응답을   처리할  수 있다.</li>
    <li style="list-style:square"><h4>단점</h4></li>
    <li>연결을 끊어버리기 때문에, 클라이언트의 이전 상황을 알 수가 없다.</li>
    <li>이러한 특징을 무상태(Stateless)라고 말한다.</li>
    <li>이러한 특징 때문에 정보를 유지하기 위해서 Cookie와 같은 기술이 등장하게 되었다.</li>
</ul>

## URL (Uniform Resourse Locator)
<ul>
    <li>인터넷 상의 자원의 위치</li>
    <li>특정 웹 서버의 특정 파일에 접근하기 위한 경로 혹은 주소</li>
</ul>

<img src="https://cphinf.pstatic.net/mooc/20180119_25/1516354290022wUY3x_PNG/http_-_.PNG"/>

## Method (메소드)
<ul>
    <li>GET</li>
    <li>POST</li>
    <li>PUT</li>
    <li>DELETE</li>
</ul>

<a href="https://www.edwith.org/boostcourse-web/lecture/16661/">참고자료</a>