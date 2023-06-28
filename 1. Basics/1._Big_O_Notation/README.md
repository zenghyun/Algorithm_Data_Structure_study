# Big O Notation (빅오 표기법)
## 여러가지 코드를 일반적으로 서로 비교하고 성능을 평가하는 방법
<br>

<p align="center"><img src="https://github.com/zenghyun/zenghyun/assets/114131063/a1b07dcc-2e68-4079-8371-3bb5229e8005" width="500px" height="400px"></p> 

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


## Objectives 
- Motivate the need for something like Big O Notation
- Describe what Big O Notation is
- Simplify Big O Expressions 
- Define "time complexity" and "space complexity" 
- Evaluate the time complexity and space complexity of different algorithms using Big O Notation
- Describe what a logarithm is 

<br>

## The Problem with Time
- Different machines will record different times
- The same machine will record different times! 
- For fast algorithms, speed measurements may not be precise enough? 

이런 이유 때문에 코드를 살펴 보면서 시간을 측정하지 않고 어느 코드가 더 좋은지 평가 할 수 있는 방법을 찾게되었다. 

시간을 측정하는게 아니라 컴퓨터가 수행해야 할 연산의 갯수를 새는 방법은 어떨까 ? 

<br>

## Big O Definition

We say that an algorithm is **O(f(n))** if the number of simple operations the computer has to do is eventually less than a constant times **f(n)**, as **n** increases

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n<sup>2</sup>)
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different!

<br>

## Simplifying Big O Expressions 
- When determining the time complexity of an algorithm, there are some helpful rule of thumbs for big O expression. 

- These rules of thumb are consequences of the definition of big O notation. 

<br>

## Constants Don't Matter 
### 가장 중요하게 생각하는 것은 대략적으로 정확한 큰 그림이다. 
O(2n) => O(n)<br> 
**앞의 상수는 중요하지 않다.**
<br>

O(500) => O(1) <br>
**O(500)은 쉽게 말하면 연산 갯수가 어떤 상황에든 500개가 있다는 것이다. 즉, 변동이 없다.**

O(13n<sup>2</sup>) => O(n<sup>2</sup>)

<br>

## Smaller Terms Don't Matter 
O(n+10) => O(n) <br>
O(1000n + 50) => O(n) <br>
O(n<sup>2</sup> + 5n + 8) => O(n<sup>2</sup>)

<br>

## Big O Shorthands
1. Arithmetic operations are constant (산수는 상수다. 덧셈, 뺄셈, 곱샘, 나눗셈을 포함한다.)
2. Variable assignment is constant (변수 선언도 상수다. 컴퓨터가 변수에 값을 배정하는데 걸리는 시간은 비슷하다.)
3. Accessing elements in an array (by index) or object (by key) os constant (인덱스를 사용하여 배열 엘리먼트를 접근하는 것 역시 상수다.)
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop (루프가 있으면 복잡도가 루프의 길이 곱하기 루프 안에 있는 연산이 된다. 만약 루프내 중복이 있다면 n 제곱이 될 수 있다.)

----

<br>

## Space Complexity 

- So far, we've been focusing on time complexity : how can we analyze the runtime of an algorithm as the size of the inputs increases?

- We can also use big O Notation to analyze space complexity : how much additional memory do we need to allocate in order to run the code in our algorithm? 

- Sometimes you'll hear the term auxiliary space complexity to refer to space required by the algorithm, not including space taken up by the inputs. 

<br>

## Space Complexity in JS 
## Rules of Thumb

- Most primitives (booleans, numbers, undefined, null) are constant space
- String require O(n) space (where n is the string length) 
- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

<br>

## Logarithms 
- We've encountered some of the most common complexities: O(1), O(n), O(n<sup>2</sup>)
- Sometimes big O expressions involve more complex mathematical expressions 
- One that appears mre often than you might like is the logarithm!

log<sub>2</sub>(8) = 3 => 2<sup>3</sup> = 8 

log<sub>2</sub>(value) = exponent => 2<sup>exponent</sup> = value

O(log n)을 그래프로 나타냈을 때, 처음에는 조금 가파르지만, 서서히 경사가 작아지게 된다. 

<br>

## Who Cares? 

- Certain searching algorithms have logarithmic time complexity.

- Efficient sorting algorithms involve logarithms. 

- Recursion sometimes involves logarithmic space complexity.