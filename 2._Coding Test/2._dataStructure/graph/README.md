## Graph 
- 그래프(graph)란 사물을 정점(vertex)과 간선(edge)으로 나타내기 위한 도구이다.
- 그래프는 두 가지 방식으로 구현할 수 있다.

1. 인접 행렬 (adjacency matrix): 2차원 배열을 사용하는 방식
   <img width="1310" alt="스크린샷 2023-08-24 오후 11 34 40" src="https://github.com/zenghyun/Algorithm_Data_Structure_study/assets/114131063/7065d8be-2488-4bb6-b26c-5be2c340e841">
2. 인접 리스트 (adjacency list): 연결 리스트를 이용하는 방식 

### 인접 행렬 - 무방향 무가중치 그래프
- 모든 간선이 방향성을 가지지 않는 그래프를 무방향 그래프라고 한다. 
- 모든 간선에 가중치가 없는 그래프를 무가중치 그래프라고 한다.
- 무방향 비가중치 그래프가 주어졌을 때 연결되어 있는 상황을 인접 행렬로 출력할 수 있다. 
<img width="1186" alt="스크린샷 2023-08-24 오후 11 35 19" src="https://github.com/zenghyun/Algorithm_Data_Structure_study/assets/114131063/4bd9b72d-19dc-4f94-b291-6a3d7449e443">
  
### 인접 행렬 - 방향 가중치 그래프
- 모든 간선이 방향을 가지는 그래프를 방향 그래프라고 한다.
- 모든 간선에 가중치가 있는 그래프를 가중치 그래프라고 한다. 
- 방향 가중치 그래프가 주어졌을 때 연결되어 있는 상황을 인접 행렬로 출력할 수 있다.
<img width="1124" alt="스크린샷 2023-08-24 오후 11 35 28" src="https://github.com/zenghyun/Algorithm_Data_Structure_study/assets/114131063/71d755ba-7fd4-45d3-942b-c8b752c49dca">

### 인접 리스트 (Adjacency List)
- 인접 리스트(adjacency list)에서는 그래프를 리스트로 표현한다. 
<img width="1139" alt="스크린샷 2023-08-24 오후 11 35 40" src="https://github.com/zenghyun/Algorithm_Data_Structure_study/assets/114131063/80cf08ff-cd24-475a-8a83-774fc7361673">
  
### 인접 리스트 - 무방향 무가중치 그래프
- 모든 간선이 방향성을 가지지 않는 그래프를 무방향 그래프라고 한다.
- 모든 간선에 가중치가 없는 그래프를 무가중치 그래프라고 한다.
- 무방향 비가중치 그래프가 주어졌을 때 연결되어 있는 상황을 인접 리스트로 출력할 수 있다.
<img width="1170" alt="스크린샷 2023-08-24 오후 11 35 46" src="https://github.com/zenghyun/Algorithm_Data_Structure_study/assets/114131063/5e967a82-3db5-4c03-ba5b-4fd997ac8212"> 

### 인접 리스트 - 방향 가중치 그래프
- 모든 간선이 방향을 가지는 그래프를 방향 그래프라고 한다.
- 모든 간선에 가중치가 있는 그래프를 가중치 그래프라고 한다.
- 방향 가중치 그래프가 주어졌을 때 연결되어 있는 상황을 인접 리스트로 출력할 수 있다. 
<img width="1165" alt="스크린샷 2023-08-24 오후 11 35 51" src="https://github.com/zenghyun/Algorithm_Data_Structure_study/assets/114131063/7f2d8a1f-e9e8-4962-ad5e-3e57d46b1c1b">

### 그래프의 시간 복잡도
1. 인접 행렬: 모든 정점들의 연결 여부를 저장해 O(V^2)의 공간을 요구한다.
- 공간 효율성이 떨어지지만, 두 노드의 연결 여부를 O(1)에 확인할 수 있다.

2. 인접 리스트: 연결된 간선의 정보만을 저장하여 O(V+E)의 공간을 요구한다.
- 공간 효율성이 우수하지만, 두 노드의 연결 여부를 확인하기 위해 O(V)의 시간이 필요하다.

<br>

| | 필요한 메모리 | 연결 여부 확인|
| ----- | ----- | ----- | 
| <p align="center">인접 행렬</p> | <p align="center">O(V^2)</p> | <p align="center">O(1)</p> |
| <p align="center">인접 리스트</p> | <p align="center">O(V+E)</p> | <p align="center">O(V)</p> |

### 인접 행렬 vs 인접 리스트 
- 최단 경로 알고리즘을 구현할 때, 어떤 자료구조가 유용할까?
- 각각 근처의 노드와 연결되어 있는 경우가 많으므로, 간선 개수가 적어 인접 리스트가 유리하다.