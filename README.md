# practice memo
# CRUD C(insert/POST) R(select/GET) U(update/PUT,PATCH) D(delete/DELETE)
`전체적인 CRUD 작업 실행`
- C POST insert 데이터를 전송하는 역할
- R GET select
- U PUT ypdate
- D DELET delete

- insert, update, delete는 영향받은 행밖에 안들어오기 때문에 메소드 만들 때 리턴타입은 int로 지정한다.

## DI & IOC
- DI:는 외부에서 받아오는걸 자기가 받는 거
- IOC 제어 역전, DI를 할 수 있는 구조

DI를 받는 방법은 3가지인데 (1)필드주입, (2)setter 주입(메소드 주입) , (3)생성자 주입

## FE -> BE 데이터를 보내는 방식
- Query String(Parameter): 주로 get or delete에 사용 (?가 있으면 쿼리스트링)
- PathVariable
- body에 담는다.

## 데이터의 모양
- xml, csv, json

## 1. file 생성
- backend memoserver 파일 생성
- frontend vue-memo 파일 생성
`https://domsam.tistory.com/68`

## B. 파일 설정
- application -> yaml or yml 변경
- resources -> mappers 폴더에 memoMapper.xml 생성
- memoserver -> model 폴더 생성
- memoserver -> comfig -> model 폴더 생성 후 ResultResponse 파일 생성 comfig 폴더에는 WebMvcConfiguration 파일 생성
- memoserver 폴더에 Controller, Mapper, Service 생성

## Bean 빈등록
`스프링 컨테이너 객체 생성을 대리로 맡긴다.`
- 요청 Request /응답 Respone 담당자
- 스프링 컨테이너(스프링에서 자바 객체들을 관리하는 공간)
- 스프링이 만든 싱글톤은 2개이상 안만들어지게 해준다.(싱글톤은 객체 한번만 생성해주는거)


## Spring Boot Annotation (@: 스프링 부트 기능을 수행하도록 도와주는 것)
- @RestController
- @RequiredArgsConstructor : final 
  (@nonnull붙은 필드에 생성자를 생성해주는 역할)
```java
// @RequiredArgsConstructor이 자동 생성해줌
    public MemoService getMemoService() {
       this.memoService = memoService;
    }
```
- @RequestBody 를 붙인 이유는 JSON을 불러오기 때문
- @PathVariable 경로변수 파일 시스템에서 특정 위치를 가리치는거 (id)

# POST
```xml
    <insert id="post">
        INSERT INTO memo
        SET title =#{title}
          , content = #{content}
    </insert>
```

```java
// service
public int post(MemoPostReq p) {
        return memoService.post(p);
    }
```

```java
// controller
    @PostMapping
    public ResultResponse<Integer> postMemo(@RequestBody MemoPostReq req) {
        log.info("req={}", req);
        int result = memoMapper.post(req);
        return new ResultResponse<>("insert success", result);
    }
```

```java
// mapper
int post(MemoPostReq p);
```

```java
// MemoPostReq
package com.green.memoserver5.model;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class MemoPostReq {
    private String title;
    private String content;
}

```
# GET LIST
```xml
    <insert id="post">
        INSERT INTO memo
        SET title =#{title}
          , content = #{content}
    </insert>
```

```java
// service
public int post(MemoPostReq p) {
        return memoService.post(p);
    }
```

```java
// controller
    @PostMapping
    public ResultResponse<Integer> postMemo(@RequestBody MemoPostReq req) {
        log.info("req={}", req);
        int result = memoMapper.post(req);
        return new ResultResponse<>("insert success", result);
    }
```

```java
// mapper
int post(MemoPostReq p);
```

```java
// MemoPostReq
package com.green.memoserver5.model;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class MemoPostReq {
    private String title;
    private String content;
}

```