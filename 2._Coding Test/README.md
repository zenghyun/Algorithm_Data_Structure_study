## 코딩 테스트란?

- IT 관련 기업/기관에서 선발 목적으로 시행하는 일종의 문제 풀이 시험이다.
- 다수의 지원자를 대상으로 공개 채용을 하는 기업에서는 코딩 테스트를 주로 이용한다. 

<br>

## 알고리즘 코딩 테스트
- 정해진 시간 **(일반적으로 5시간 이내)** 에 몇 개의 알고리즘 문제를 제시한다.
- 적절한 알고리즘을 활용한 **문제를 해결할 수 있는 능력**을 평가한다. 
  

<br>

## 개발 과제 코딩 테스트
- **하나의 완성된 프로그램을 개발**하는 것을 목표로 하는 시험이다. 
- 짧게는 몇 시간부터 길면 2주 이상의 시간을 부여한다. 
- 특정 회사에서 실제로 사용하는 **언어** 혹은 **프레임워크**를 활용하도록 요구하기도 한다. 

<br>

## 시험 환경에 따른 코딩 테스트 분류 - 온라인 코딩 테스트
- 특정한 웹 사이트에서 문제를 읽고, 정답 코드를 제출하도록 하는 코딩 테스트다.
- 대체로 공개 채용에서는 혼자 힘으로만 문제를 풀도록 하며 표절 검사를 진행한다.
- 일반적으로 인터넷 검색을 허용하지만, 단순 검색으로 솔루션이 나오지 않는 문제를 출제한다. 

<br>

## 시험 환경에 따른 코딩 테스트 분류 - 오프라인 코딩 테스트
- 특정한 기업/기관의 시험장에 방문하여 치르는 코딩 테스트다.
- 인터넷 검색 허용 여부는 기관마다 다르다.
- 오프라인 알고리즘 코딩 테스트의 경우, 대체로 기관에서 제공하는 컴퓨터를 이용한다. 

<br>

## 자신만의 소스코드 관리하기
- 알고리즘 코딩 테스트를 준비하며 자신만의 코드 템플릿을 만드는 것이 유리하다.
- 특히 대표적인 알고리즘(정렬, 최단 경로 등)의 기본형에 대하여 미리 코드를 구현해 놓자.
- 자신의 코드를 라이브러리화하여 깃허브 (GitHub) 에서 관리하는 것을 추천! 

<br>

## IT 기업 코딩 테스트 최신 출제 경향
- 대부분의 IT 대기업은 공개 채용 과정에서 알고리즘 코딩 테스트를 시행하고 있다.
- 응시생들에게 2~5시간가량의 시간을 주어 여러 개의 정해진 알고리즘 문제를 풀도록 한다.
- **구현, DFS/BFS(탐색), 탐욕 알고리즘 유형**이 출제 빈도가 높은 편이다. 

<br>

## 코딩 테스트를 준비하는 방법
1. 적절한 프로그래밍 언어를 선택하여 문법 공부하기 
2. 알고리즘 유형별로 이론 및 핵심 문제를 10개 이상 풀어보기
- 대표적인 알고리즘 유형 : 정렬, DFS/BFS, 구현, 완전 탐색, 탐욕 알고리즘
3. 원하는 기업의 기출(혹은 유사한) 문제 풀기 

<br>

-----
<br>

## 시간 복잡도
- 시간 복잡도는 알고리즘의 성능을 나타내는 척도이다.
- 시간 복잡도: 특정한 크기의 입력에 대하여 알고리즘의 수행 시간 분석 
- **동일한 기능을 수행하는 알고리즘이 있다면, 일반적으로 복잡도가 낮을수록 우수하다.**

<br>

## 빅오 표기법(Big-O Notation) 
- **가장 빠르게 증가하는 항**만을 고려하는 표기법이다.
- 함수의 상한을 나타낸다.
- 예를 들어 연산 횟수가 3N<sup>3</sup> + 5N<sup>2</sup> + 1,000,000인 알고리즘이 있다고 하자. 
- N이 증가함에 따라서, 3N<sup>3</sup>을 제외한 다른 항의 영향력은 작아진다.
- Big-O 표기법에서는 차수가 가장 큰 항에서 계수를 제외하여 **O(N<sup>3</sup>)** 으로 표현된다. 

<br>

### 가장 빠르게 증가하는 항만을 고려하는 표기법이다. 

#### 위로 갈수록 좋고, 아래로 갈수록 나쁘다. 
<br>

|시간 복잡도|의미|
|------|---|
|O(1)|상수 시간(constant time)|
|O(logN)|로그 시간(log time)|
|O(N)|선형 시간(linear time)|
|O(NlogN)|로그 선형 시간(log-linear time)|
|O(N<sup>2</sup>)|이차 시간(quadratic time)|
|O(N<sup>3</sup>)|이차 시간(cubic time)|
|O(2<sup>N</sup>)|지수 시간(exponential time)|

<br>

## 알고리즘 설계 Tip 
- 일반적인 CPU 기반의 개인 컴퓨터나 채점 목적의 컴퓨터를 고려해 보자.
- JavaScript를 기준으로 1억 번의 연산을 처리하기 위해 1~5초 가량의 시간이 소요된다.
- O(N<sup>3</sup>)의 알고리즘을 설계한 경우, N의 값이 5,000이 넘는다면 얼마나 걸릴까?
- 코딩 테스트 문제에서 시간 제한은 통상 **1~5초** 가량이다. 
- 문제에 명시되어 있지 않은 경우 대략 5초 정도라고 생각하고 문제를 푸는 것이 합리적이다.

<br>

## 요구사항에 따라 적절한 알고리즘 설계하기
- 문제에서 가장 먼저 확인해야 하는 내용은 시간제한(수행 시간 요구사항)이다.
- **시간 제한이 1초**인 문제를 만났을 때, 일반적인 기준은 다음과 같다.
- N의 범위가 500인 경우 : 시간 복잡도가 O(N<sup>3</sup>)인 알고리즘을 설계하면 문제를 풀 수 있다.
- N의 범위가 2000인 경우 : 시간 복잡도가 O(N<sup>2</sup>)인 알고리즘을 설계하면 문제를 풀 수 있다.
- N의 범위가 100,000인 경우 : 시간 복잡도가 O(NlogN)인 알고리즘을 설계하면 문제를 풀 수 있다.
- N의 범위가 10,000,000인 경우 : 시간 복잡도가 O(N)인 알고리즘을 설계하면 문제를 풀 수 있다. 